import re

def update_app_js():
    # Read the new products content
    with open('products_output.js', 'r') as f:
        new_products_content = f.read()

    # Read app.js
    with open('app.js', 'r') as f:
        app_js_content = f.read()

    # Define the start and end markers for the PRODUCTS array
    start_marker = "const PRODUCTS = ["
    end_marker = "];"

    # Find the start index
    start_index = app_js_content.find(start_marker)
    if start_index == -1:
        print("Error: Could not find start of PRODUCTS array in app.js")
        return

    # Find the end index. We search for the first "];" after the start index.
    # However, we need to be careful if there are nested arrays, but PRODUCTS seems to be a flat array of objects.
    # A safer way is to find the "];" that closes the PRODUCTS array.
    # Given the structure, it's likely the first "];" after the start, but let's be careful.
    # We can use regex or just find the matching bracket.
    
    # Let's try to find the position of `const PRODUCTS = [` and the line `];` that follows it at the top level.
    # Since I know the line numbers roughly, I can also verify.
    
    # Regex to match `const PRODUCTS = [ ... ];` handling newlines
    # This might be slow or tricky with nested brackets, but the structure is simple.
    # Let's assume the indentation is consistent or the closing `];` is on its own line.
    
    # Alternative: Use the line numbers I observed.
    # Start line 23. End line 1311.
    # But line numbers might shift if I edit.
    # Let's use the content matching.
    
    # We can split app.js into parts.
    pre_products = app_js_content[:start_index]
    
    # Find the end of the array.
    # We look for `];` followed by `// Router & State Management` or similar, or just the next `const`.
    # In app.js, it is followed by `// Router & State Management`.
    
    next_section_marker = "// Router & State Management"
    end_index = app_js_content.find(next_section_marker, start_index)
    
    if end_index == -1:
        print("Error: Could not find the next section marker.")
        # Fallback: find the last `];` before the end of file? No.
        # Let's look for `];` before `const router`.
        router_marker = "const router ="
        end_index = app_js_content.find(router_marker, start_index)
        
    if end_index == -1:
         print("Error: Could not find the router definition.")
         return

    # Now we need to find the `];` before `end_index`.
    # We can search backwards from end_index.
    array_end_index = app_js_content.rfind("];", start_index, end_index)
    
    if array_end_index == -1:
        print("Error: Could not find the closing bracket of PRODUCTS array.")
        return
        
    array_end_index += 2 # Include "];"
    
    # Construct the new content
    new_app_js_content = pre_products + new_products_content + "\n\n\n" + app_js_content[end_index:]
    
    # Write back to app.js
    with open('app.js', 'w') as f:
        f.write(new_app_js_content)
        
    print("Successfully updated app.js with new products.")

if __name__ == "__main__":
    update_app_js()
