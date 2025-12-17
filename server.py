from flask import Flask, request, jsonify, send_from_directory
import urllib.request
import urllib.error
import json
import os
import ssl
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import datetime

app = Flask(__name__, static_folder=None)

REPLICATE_API_TOKEN = os.environ.get("REPLICATE_API_TOKEN", "r8_WfyFEUjbkNB6oOiQiq0hvGtz3mN5iec2m9jZm")
EMAIL_USER = os.environ.get("EMAIL_USER", "tufelicitacion@gmail.com")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "tufelicitacion@LG25")





@app.route('/')
def index():
    response = send_from_directory('.', 'index.html')
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return response

@app.route('/<path:path>')
def serve_static(path):
    # If the file exists and is a file (not a directory), serve it
    if os.path.isfile(path):
        response = send_from_directory('.', path)
        # Add cache headers for images and css
        if path.endswith(('.jpg', '.jpeg', '.png', '.webp', '.css', '.js')):
            # Disable cache for development/debugging
            response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        return response
    else:
        # Otherwise serve index.html (SPA handling)
        return send_from_directory('.', 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory('.', 'index.html')

@app.route('/api/poll', methods=['GET'])
def poll():
    prediction_id = request.args.get('id')
    if not prediction_id:
        return jsonify({'error': 'Missing id parameter'}), 400

    poll_url = f"https://api.replicate.com/v1/predictions/{prediction_id}"
    headers = {
        "Authorization": f"Token {REPLICATE_API_TOKEN}",
        "Content-Type": "application/json"
    }

    # SSL Context (keep simplistic for now, though usually not needed in cloud)
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    try:
        req = urllib.request.Request(poll_url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            poll_data = json.loads(response.read().decode())
        return jsonify(poll_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/replicate', methods=['POST'])
def replicate_proxy():
    data = request.json
    
    url = "https://api.replicate.com/v1/predictions"
    headers = {
        "Authorization": f"Token {REPLICATE_API_TOKEN}",
        "Content-Type": "application/json"
    }
    
    body = {
        "version": data.get('version'),
        "input": data.get('input')
    }

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    try:
        req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            prediction = json.loads(response.read().decode())
        return jsonify(prediction)
    except urllib.error.HTTPError as e:
        return jsonify({'error': str(e), 'details': e.read().decode()}), e.code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/notify-download', methods=['POST'])
def notify_download():
    data = request.json
    try:
        if not EMAIL_PASSWORD:
            print("Email notification skipped: No EMAIL_PASSWORD set.")
            return jsonify({'status': 'skipped', 'reason': 'no_credentials'})

        user_email = data.get('email', 'Anónimo / No facilitado')
        product_info = data.get('product_info', 'Producto desconocido')
        is_paid = data.get('is_paid', False)
        
        subject = f"Nueva Descarga: {product_info}"
        
        body = f"""
        ¡Nueva descarga registrada!
        
        Fecha: {datetime.datetime.now()}
        Producto: {product_info}
        Tipo: {'DE PAGO' if is_paid else 'GRATIS'}
        Usuario (Email): {user_email}
        
        El usuario ha aceptado los términos y condiciones al realizar esta acción.
        """

        # 1. Send Admin Notification
        msg_admin = MIMEMultipart()
        msg_admin['From'] = EMAIL_USER
        msg_admin['To'] = EMAIL_USER
        msg_admin['Subject'] = subject
        msg_admin.attach(MIMEText(body, 'plain'))

        # 2. Send User Confirmation (if email provided)
        msg_user = None
        if user_email and '@' in user_email and 'no_email' not in user_email:
            subject_user = "Tu descarga personalizada - Tu Felicitación 🎅"
            body_user = f"""
Hola,

¡Gracias por usar Tu Felicitación!

Tu diseño ({product_info}) se ha generado correctamente.
Esperamos que disfrutes compartiéndolo con tus amigos y familiares.

Si te ha gustado, ¡vuelve pronto para crear más felicitaciones mágicas!

Atentamente,
El equipo de Tu Felicitación
https://tufelicitacion.com
            """
            msg_user = MIMEMultipart()
            msg_user['From'] = EMAIL_USER
            msg_user['To'] = user_email
            msg_user['Subject'] = subject_user
            msg_user.attach(MIMEText(body_user, 'plain'))

        # Send emails via Gmail SMTP
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            # Send to Admin
            server.sendmail(EMAIL_USER, EMAIL_USER, msg_admin.as_string())
            # Send to User (if applicable)
            if msg_user:
                 server.sendmail(EMAIL_USER, user_email, msg_user.as_string())
            
        return jsonify({'status': 'success', 'message': 'Email sent'})

    except Exception as e:
        print(f"Failed to send email: {e}")
        # Don't fail the request, just log it
        return jsonify({'status': 'error', 'error': str(e)}), 200

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.json
        product_id = data.get('productId')
        
        # In a real app, look up product details by ID. 
        # For this specific requirement (Magic AI price), we hardcode 2.00 EUR
        # Verify if it's a "Magic" transaction? 
        # Ideally, we should receive a 'type' or look up the product.
        # But user requested "Magic AI costs 2 euros". 
        # If the frontend calls this, it implies a purchase intent.
        
        # Product Name construction
        product_name = f"Descarga Premium - Diseño #{product_id}"

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'], # 'bizum' requires special activation in Stripe Dashboard, keeping 'card' for now which includes Google/Apple Pay
            line_items=[
                {
                    'price_data': {
                        'currency': 'eur',
                        'product_data': {
                            'name': product_name,
                            'description': 'Descarga en alta calidad',
                        },
                        'unit_amount': 200, # 2.00 EUR (in cents)
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=DOMAIN_URL + '/?payment_success=true&product_id=' + str(product_id),
            cancel_url=DOMAIN_URL + '/?payment_canceled=true',
            metadata={
                'product_id': product_id,
                'email': 'user_provided_via_checkout' # Stripe collects email
            }
        )
        return jsonify({'id': checkout_session.id})
    except Exception as e:
        print(f"Stripe Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
