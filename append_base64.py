import base64

def append_to_assets():
    with open("assets/Gemini_Generated_Image_yfbcsryfbcsryfbc.jpg", "rb") as f:
        hardware_b64 = base64.b64encode(f.read()).decode('utf-8')
        
    js_content = f"""
const ASSET_HARDWARE = "data:image/jpeg;base64,{hardware_b64}";
"""
    with open("assets.js", "a", encoding="utf-8") as f:
        f.write(js_content)

if __name__ == "__main__":
    append_to_assets()
