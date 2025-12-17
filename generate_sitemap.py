import re
import datetime

# Helper to read JS file content
def read_js_data():
    with open('products_data.js', 'r') as f:
        content = f.read()
    
    # Extract PRODUCTS array using regex roughly
    # We look for const PRODUCTS = [ ... ];
    # This is a simple parser, assuming standard formatting
    products_match = re.search(r'const PRODUCTS = \[(.*?)\];', content, re.DOTALL)
    if not products_match:
        print("Error: Could not find PRODUCTS array")
        return []
    
    products_str = products_match.group(1)
    
    # Parse individual objects
    # We will look for { ... } blocks
    # and extract image: "path", title: "Text"
    products = []
    # Very naive parser: split by curly braces
    # A better way is to iterate
    
    # Let's iterate over lines to be safer or regex for image and title within blocks
    # Actually, regex finding all image properties might be enough if we just want images associated with the main page or sector pages.
    # But Google wants <loc>url</loc> <image:image><image:loc>img_url</image:loc>...
    
    # Strategy: 
    # 1. Main page has general images.
    # 2. Product pages /producto/ID have specific images.
    
    # Regex to find all defining product info
    # id: 1, ... title: "...", ... image: "..."
    # We can use finditer
    
    pattern = re.compile(r'id:\s*(\d+),\s*title:\s*"(.*?)",.*?image:\s*"(.*?)"', re.DOTALL)
    for match in pattern.finditer(products_str):
        products.append({
            'id': match.group(1),
            'title': match.group(2),
            'image': match.group(3)
        })
        
    return products

products = read_js_data()
current_date = datetime.datetime.now().strftime("%Y-%m-%d")
base_url = "https://tufelicitacion.com"

xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>{base_url}/</loc>
    <lastmod>{current_date}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>{base_url}/postales-navidad</loc>
    <lastmod>{current_date}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>{base_url}/videos-navidad</loc>
    <lastmod>{current_date}</lastmod>
    <priority>0.9</priority>
  </url>
"""

# Add product pages with images
for p in products:
    # Ensure image path is absolute
    img_url = f"{base_url}/{p['image']}"
    # Escape special chars in URL if needed, but basic ones handles by string formatting usually
    # Better to replace spaces with %20 for XML
    img_url = img_url.replace(" ", "%20")
    
    xml_content += f"""  <url>
    <loc>{base_url}/producto/{p['id']}</loc>
    <lastmod>{current_date}</lastmod>
    <image:image>
      <image:loc>{img_url}</image:loc>
      <image:title>{p['title']}</image:title>
      <image:caption>Felicitación de Navidad: {p['title']}</image:caption>
    </image:image>
  </url>
"""

xml_content += "</urlset>"

with open('sitemap.xml', 'w') as f:
    f.write(xml_content)

print(f"Sitemap generated with {len(products)} products.")
