import urllib.request
import urllib.error
import json

# Small red dot base64 image
BASE64_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="

SERVER_URL = "http://localhost:8080/api/replicate"

def test_feature(name, version, input_data):
    print(f"\n--- Testing {name} ---")
    payload = {
        "version": version,
        "input": input_data
    }
    
    headers = {"Content-Type": "application/json"}
    
    try:
        req = urllib.request.Request(SERVER_URL, data=json.dumps(payload).encode(), headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            print("✅ Success!")
            if 'output' in data:
                 print("Output received (length):", len(str(data['output'])))
            else:
                 print("No output field in response")
            
    except urllib.error.HTTPError as e:
        print(f"❌ Failed! Code: {e.code}")
        print("Error Body:", e.read().decode())
    except Exception as e:
        print(f"Connection Error: {e}")

# 1. Test Remove Background
# cjwbw/rembg
rembg_version = "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003"
rembg_input = {
    "image": BASE64_IMAGE
}
test_feature("Remove Background", rembg_version, rembg_input)

# 2. Test Animate
# ali-vilab/i2vgen-xl
animate_version = "5821a338d00033abaaba89080a17eb8783d9a17ed710a6b4246a18e0900ccad4"
animate_input = {
    "image": BASE64_IMAGE,
    "prompt": "A red dot moving, cinematic",
    "max_frames": 16
}
test_feature("Animate (i2vgen-xl)", animate_version, animate_input)

# 3. Test Generate
# stability-ai/sdxl
generate_version = "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc"
generate_input = {
    "prompt": "A giant red planet",
    "image": BASE64_IMAGE, 
    "prompt_strength": 0.45,
    "width": 768,
    "height": 768, # SDXL likes 1024x1024 or 768x...
    "refine": "expert_ensemble_refiner"
}
test_feature("Generate (SDXL)", generate_version, generate_input)
