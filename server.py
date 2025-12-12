from flask import Flask, request, jsonify, send_from_directory
import urllib.request
import urllib.error
import json
import os
import ssl

app = Flask(__name__, static_folder=None)

REPLICATE_API_TOKEN = os.environ.get("REPLICATE_API_TOKEN", "r8_WfyFEUjbkNB6oOiQiq0hvGtz3mN5iec2m9jZm")





@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

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

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
