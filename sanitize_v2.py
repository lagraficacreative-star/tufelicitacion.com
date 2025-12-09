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

def sanitize_title_v2(match):
    block = match.group(0)
    
    # Get current title
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', block)
    # Get sector
    sec_match = re.search(r'sector:\s*["\']([^"\']+)["\']', block)
    
    if title_match and sec_match:
        current_title = title_match.group(1)
        sector = sec_match.group(1)
        
        # Criteria for replacement:
        # 1. Contains "D A L L" or "Highly Realistic"
        # 2. Is very long (> 50 chars), likely a prompt dump
        is_suspicious = False
        
        if "D A L L" in current_title or "Highly Realistic" in current_title:
            is_suspicious = True
        
        if len(current_title) > 40 and " " in current_title: # Long title with spaces
             # Check if it looks like a sentence/prompt
             if "Portrait" in current_title or "Image" in current_title:
                 is_suspicious = True
                 
        if is_suspicious:
            # Determine type
            type_match = re.search(r'type:\s*["\']([^"\']+)["\']', block)
            product_type = "Postal"
            if type_match and "video" in type_match.group(1).lower():
                product_type = "Video"
            
            # We need to know previous index to not overwrite/conflict? 
            # Simplified: just append V2 or create a unique name.
            # actually, using a localized counter per run is fine as long as we don't have collisions.
            # But wait, previous run used 1, 2...
            # This run will restart at 1.
            # It's better to use a high number or "AI Special" to avoid collision if mixed.
            # Or just "Postal [Sector] AI [N]" and risking duplicate names (not IDs) is acceptable for display.
            
            new_title = f"{product_type} {sector.capitalize()} AI Extra {get_next_ai_index(sector)}"
            
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
    new_products_block = re.sub(r'\{[^{}]+\}', sanitize_title_v2, products_block, flags=re.DOTALL)
    new_content = content[:start_idx] + new_products_block + content[end_idx:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Sanitized long titles.")
else:
    print("Block not found")
