import urllib.request
import urllib.error
import json
import time

BASE64_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
SERVER_URL = "http://localhost:8080/api/replicate"

def poll_prediction(prediction_id):
    print(f"Polling {prediction_id}...")
    while True:
        try:
            poll_url = f"http://localhost:8080/api/poll?id={prediction_id}"
            with urllib.request.urlopen(poll_url) as response:
                data = json.loads(response.read().decode())
                status = data['status']
                print(f"Status: {status}")
                if status == 'succeeded':
                    return data['output']
                elif status in ['failed', 'canceled']:
                    raise Exception(f"Prediction failed: {data.get('error')}")
                time.sleep(1)
        except Exception as e:
            print(f"Polling error: {e}")
            time.sleep(2)

def test_feature(name, version, input_data):
    print(f"\n--- Testing {name} ---")
    payload = { "version": version, "input": input_data }
    headers = {"Content-Type": "application/json"}
    try:
        req = urllib.request.Request(SERVER_URL, data=json.dumps(payload).encode(), headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            print("✅ Initial Response Received")
            if 'id' in data:
                output = poll_prediction(data['id'])
                print(f"✅ Final Output Received: {str(output)[:50]}...")
            else:
                print("❌ No ID in response")
    except urllib.error.HTTPError as e:
        print(f"❌ Failed! Code: {e.code}")
        print("Error Body:", e.read().decode())
    except Exception as e:
        print(f"Connection Error: {e}")

animate_version = "5821a338d00033abaaba89080a17eb8783d9a17ed710a6b4246a18e0900ccad4"

print("TEST Polling Animate")
input_3 = {
    "image": BASE64_IMAGE,
    "prompt": "A moving dot",
    "max_frames": 16
}
test_feature("Animate Polling", animate_version, input_3)
