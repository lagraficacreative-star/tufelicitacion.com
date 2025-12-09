import urllib.request
import urllib.error
import json

BASE64_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
SERVER_URL = "http://localhost:8080/api/replicate"

def test_feature(name, version, input_data):
    print(f"\n--- Testing {name} ---")
    payload = { "version": version, "input": input_data }
    headers = {"Content-Type": "application/json"}
    try:
        req = urllib.request.Request(SERVER_URL, data=json.dumps(payload).encode(), headers=headers)
        with urllib.request.urlopen(req) as response:
            print("✅ Success!")
    except urllib.error.HTTPError as e:
        print(f"❌ Failed! Code: {e.code}")
        print("Error Body:", e.read().decode())
    except Exception as e:
        print(f"Connection Error: {e}")

animate_version = "5821a338d00033abaaba89080a17eb8783d9a17ed710a6b4246a18e0900ccad4"

print("TEST 3: Animate (With 5x5 image)")
input_3 = {
    "image": BASE64_IMAGE,
    "prompt": "A moving dot",
    "max_frames": 16
}
test_feature("Animate 5x5", animate_version, input_3)
