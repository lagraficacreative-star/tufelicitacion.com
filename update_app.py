
import os

def update_app_js():
    app_js_path = 'app.js'
    products_js_path = 'products_output.js'

    with open(app_js_path, 'r') as f:
        app_lines = f.readlines()

    with open(products_js_path, 'r') as f:
        new_products_content = f.read()

    # Find start and end of PRODUCTS array
    start_index = -1
    end_index = -1

    for i, line in enumerate(app_lines):
        if line.strip().startswith('const PRODUCTS = ['):
            start_index = i
        if start_index != -1 and line.strip() == '];':
            # We want the first ]; after PRODUCTS starts
            # But wait, there might be other arrays inside? No, PRODUCTS is an array of objects.
            # The objects end with }, and the array ends with ];
            # Let's assume the indentation is correct or just find the matching bracket.
            # But since I know the line number from previous steps, I can verify.
            # In Step 53, line 1311 is ]; and line 1314 is const router.
            # So I can look for ]; before const router.
            pass
    
    # Re-finding based on content to be robust
    # We know it starts at line 23 (index 22)
    # We know it ends around line 1311.
    
    # Let's just iterate and find the block.
    
    final_lines = []
    
    # Add lines before PRODUCTS
    # app_lines is 0-indexed. Line 23 is index 22.
    # So we want lines 0 to 21.
    
    # Let's find the exact index dynamically
    found_start = False
    found_end = False
    
    for i, line in enumerate(app_lines):
        if line.strip().startswith('const PRODUCTS = ['):
            start_index = i
            found_start = True
            break
            
    if not found_start:
        print("Could not find const PRODUCTS = [")
        return

    # Now find the end. It should be ]; followed by empty lines and then const router or similar.
    # Or we can just count brackets.
    # But simpler: look for ]; at the root level indentation (0 indentation).
    
    for i in range(start_index, len(app_lines)):
        if app_lines[i].strip() == '];':
            end_index = i
            found_end = True
            # Check if it's the right one? 
            # The PRODUCTS array is at top level, so ]; should be at start of line?
            # In the file view, it was indented? No, line 1311 was ];
            # Let's check indentation in Step 53.
            # 1311: ];
            # It seems to have no indentation or maybe 0.
            # In Step 53 output: "1311: ];" -> The original line is "];".
            # So it has 0 indentation.
            break
            
    if not found_end:
        print("Could not find end of PRODUCTS array")
        return

    print(f"Replacing lines {start_index+1} to {end_index+1}")

    # Construct new content
    new_content = "".join(app_lines[:start_index]) + new_products_content + "\n" + "".join(app_lines[end_index+1:])
    
    with open(app_js_path, 'w') as f:
        f.write(new_content)
    
    print("Successfully updated app.js")

if __name__ == "__main__":
    update_app_js()
