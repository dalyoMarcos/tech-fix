import sys
from PIL import Image

def get_image_info(path):
    img = Image.open(path)
    print(f"Size: {img.size}")

if __name__ == "__main__":
    get_image_info(sys.argv[1])
