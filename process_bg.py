import sys
from PIL import Image

def process_spritesheet(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # Any pixel very close to white becomes transparent
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    process_spritesheet(sys.argv[1], "assets/male.png")
    process_spritesheet(sys.argv[2], "assets/female.png")
