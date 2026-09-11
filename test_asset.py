import re
import base64
from io import BytesIO
from PIL import Image

def test():
    with open('assets.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const ASSET_CHAR1 = "data:image/png;base64,(.*?)";', content)
    if not match:
        print("ASSET_CHAR1 not found!")
        return
        
    b64_data = match.group(1)
    try:
        img_data = base64.b64decode(b64_data)
        img = Image.open(BytesIO(img_data))
        print("Image size:", img.size)
        print("Image mode:", img.mode)
        # Check if it has content
        extrema = img.convert("L").getextrema()
        print("Extrema (min, max):", extrema)
    except Exception as e:
        print("Error decoding image:", e)

if __name__ == "__main__":
    test()
