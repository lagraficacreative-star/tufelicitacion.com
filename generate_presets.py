import os

textures_dir = 'texturas'

def generate_presets():
    if not os.path.exists(textures_dir):
        print(f"Directory {textures_dir} does not exist.")
        return

    presets = []
    
    # 1. Add Default/Example Presets if needed (or just rely on files)
    # presets.append({'url': 'https://plus.unsplash.com/premium_photo-1663040178972-ee7007da838a?q=80&w=2070&auto=format&fit=crop'})
    
    # 2. Scan Directory
    print(f"Scanning {textures_dir}...")
    for file in os.listdir(textures_dir):
        if file.startswith('.'): continue
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            # Store relative path
            path = os.path.join(textures_dir, file)
            presets.append({'url': path})

    # 3. Write JS
    js_content = "const PRESETS = [\n"
    for p in presets:
        js_content += f"    {{ url: '{p['url']}' }},\n"
    js_content += "];\n"
    
    with open('presets_data.js', 'w') as f:
        f.write(js_content)
    
    print(f"Generated {len(presets)} presets. Saved to presets_data.js.")

if __name__ == "__main__":
    generate_presets()
