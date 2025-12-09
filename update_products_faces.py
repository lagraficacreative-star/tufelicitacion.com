
import re

def update_products():
    file_path = 'products_data.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find product blocks
    # This is a simple state machine approach to process lines
    lines = content.split('\n')
    new_lines = []
    
    current_product = {}
    in_product = False
    product_start_index = -1
    
    # We will reconstruct the file line by line
    # But we need to insert 'hasFace: true/false,' before the closing brace of each product
    
    # Heuristic for hasFace
    # 1. Sector in [opticas, peluqueria, estetica, moda]
    # 2. Title/Desc contains keywords
    face_sectors = ['opticas', 'peluqueria', 'estetica', 'moda']
    face_keywords = ['santa', 'claus', 'mujer', 'chica', 'hombre', 'chico', 'niño', 'niña', 'retrato', 'cara', 'sonrisa', 'papá noel', 'papa noel']

    processed_lines = []
    
    for i, line in enumerate(lines):
        # Check if line acts as a product field
        # We assume standard formatting as seen in the file
        
        # Detect sector
        sector_match = re.search(r'sector:\s*["\']([^"\']+)["\']', line)
        if sector_match:
            current_product['sector'] = sector_match.group(1).lower()
            
        # Detect title
        title_match = re.search(r'title:\s*["\']([^"\']+)["\']', line)
        if title_match:
            current_product['title'] = title_match.group(1).lower()
            
        # Detect closing brace of a product object
        # usually "    },"
        if re.search(r'^\s*\},?\s*$', line) and 'sector' in current_product:
            # Decide hasFace
            has_face = False
            
            # Check Sector
            if current_product.get('sector') in face_sectors:
                has_face = True
            
            # Check Keywords in Title
            title = current_product.get('title', '')
            if any(k in title for k in face_keywords):
                has_face = True
                
            # Add hasFace field before closing
            processed_lines.append(f'        hasFace: {str(has_face).lower()},')
            
            # Reset current_product
            current_product = {}
            
        processed_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(processed_lines))
        
    print("Updated products_data.js with hasFace properties.")

if __name__ == "__main__":
    update_products()
