import re

files = ['app.js', 'products_data.js', 'presets_data.js']

for filename in files:
    print(f"Checking {filename}...")
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        stack = []
        for i, line in enumerate(lines, 1):
            if '<<<<' in line or '>>>>' in line or '====' in line:
                if not line.strip().startswith('//'): # Ignore comments
                     # Simple check for conflict markers that are not commented out
                     if line.strip().startswith('<<<<') or line.strip().startswith('====') or line.strip().startswith('>>>>'):
                        print(f"Error: Conflict marker found in {filename} at line {i}: {line.strip()}")
            
            # Simple brace counting (ignoring strings/comments is hard in simple regex, but let's try basic)
            # This is a heuristic.
            pass

    except Exception as e:
        print(f"Could not read {filename}: {e}")

print("Done checking.")
