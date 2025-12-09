import re

file_path = '/Users/montsetorrelles/Desktop/escriptor2/christmas-postcards copia/products_data.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

sector_counters = {}

def get_next_ai_index(sector):
    if sector not in sector_counters:
        sector_counters[sector] = 1
    idx = sector_counters[sector]
    sector_counters[sector] += 1
    return idx

def sanitize_title(match):
    block = match.group(0)
    
    # Get current title
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', block)
    # Get sector
    sec_match = re.search(r'sector:\s*["\']([^"\']+)["\']', block)
    
    if title_match and sec_match:
        current_title = title_match.group(1)
        sector = sec_match.group(1)
        
        # Check if title contains problematic keywords
        # The previous script title-cased them, so look for "Gemini", "Pix Verse", "Dall"
        if any(x in current_title for x in ["Gemini", "Pix Verse", "Dall", "Pixverse"]):
            
            # Determine new type based on existing type or inference
            # (If it's video, use Video, else Postal)
            type_match = re.search(r'type:\s*["\']([^"\']+)["\']', block)
            product_type = "Postal"
            if type_match and "video" in type_match.group(1).lower():
                product_type = "Video"
            
            new_title = f"{product_type} {sector.capitalize()} AI {get_next_ai_index(sector)}"
            
            # Replace
            block = re.sub(r'title:\s*["\'].*?["\']', f'title: "{new_title}"', block)
            
    return block

# Apply to all objects
start_marker = "const PRODUCTS = ["
end_marker = "];"
start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    products_block = content[start_idx:end_idx]
    new_products_block = re.sub(r'\{[^{}]+\}', sanitize_title, products_block, flags=re.DOTALL)
    new_content = content[:start_idx] + new_products_block + content[end_idx:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Sanitized generated titles.")
else:
    print("Block not found")
