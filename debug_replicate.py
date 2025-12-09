import urllib.request
import json
import os
import ssl

# Disable SSL verification
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

TOKEN = "r8_WfyFEUjbkNB6oOiQiq0hvGtz3mN5iec2m9jZm" # User provided token

def test_model(version, input_data, name):
    print(f"Testing {name}...")
    url = "https://api.replicate.com/v1/predictions"
    headers = {
        "Authorization": f"Token {TOKEN}",
        "Content-Type": "application/json"
    }
    body = {
        "version": version,
        "input": input_data
    }
    
    try:
        req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            print(f"✅ {name} SUCCESS")
            print(response.read().decode())
    except urllib.error.HTTPError as e:
        print(f"❌ {name} FAILED: {e.code}")
        print(e.read().decode())
    except Exception as e:
        print(f"❌ {name} ERROR: {str(e)}")

# 1. Test Animation (SVD)
# Using a dummy image URL for testing
dummy_image = "https://replicate.delivery/pbxt/JvLV0s5y5y5y5y5y5y5y5y5y5y5y5y5y/rocket.png" 

# Current params in app.js
svd_input = {
    "input_image": dummy_image,
    "video_length": "14_frames_with_svd_xt",
    "sizing_strategy": "maintain_aspect_ratio",
    "frames_per_second": 6
}

sdxl_input = {
    "prompt": "A christmas tree",
    "width": 768,
    "height": 1024,
    "refine": "expert_ensemble_refiner"
}

def get_latest_version(owner, name):
    print(f"Fetching latest version for {owner}/{name}...")
    url = f"https://api.replicate.com/v1/models/{owner}/{name}/versions"
    headers = {
        "Authorization": f"Token {TOKEN}",
        "Content-Type": "application/json"
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode())
            # Results are usually paginated, but first page has latest
            latest = data['results'][0]
            print(f"✅ Found latest version: {latest['id']}")
            return latest['id']
    except Exception as e:
        print(f"❌ Failed to fetch version: {str(e)}")
        return None

# Get latest versions
svd_version = get_latest_version("yuanzhijie", "face-swap")
sdxl_version = get_latest_version("stability-ai", "sdxl")

if svd_version:
    # i2vgen-xl input params
    svd_input = {
        "image": dummy_image,
        "prompt": "A cinematic shot of a rocket launching, 4k, high quality",
        "max_frames": 16
    }
    test_model(svd_version, svd_input, "i2vgen-xl Animation")

# Hardcoded Faceswap version
faceswap_version = "9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d"

if faceswap_version:
    # Faceswap input params
    faceswap_input = {
        "target_image": dummy_image,
        "swap_image": dummy_image, # Swapping with itself for test
        "enhance_face": False
    }
    test_model(faceswap_version, faceswap_input, "Faceswap Test")

if sdxl_version:
    test_model(sdxl_version, sdxl_input, "SDXL Generate (Latest)")
