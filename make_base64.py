import base64
import os

def create_assets_js():
    with open("assets/shop_bg.jpg", "rb") as f:
        shop_bg_b64 = base64.b64encode(f.read()).decode('utf-8')
    with open("assets/male.png", "rb") as f:
        male_b64 = base64.b64encode(f.read()).decode('utf-8')
    with open("assets/female.png", "rb") as f:
        female_b64 = base64.b64encode(f.read()).decode('utf-8')
        
    js_content = f"""// Auto-generated assets to bypass CORS on local file:// execution
const ASSET_SHOP_BG = "data:image/jpeg;base64,{shop_bg_b64}";
const ASSET_MALE = "data:image/png;base64,{male_b64}";
const ASSET_FEMALE = "data:image/png;base64,{female_b64}";
"""
    with open("assets.js", "w", encoding="utf-8") as f:
        f.write(js_content)

if __name__ == "__main__":
    create_assets_js()
