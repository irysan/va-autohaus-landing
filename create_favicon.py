#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a 32x32 image with V&A logo
img = Image.new('RGBA', (32, 32), (17, 24, 39, 255))  # Dark gray background
draw = ImageDraw.Draw(img)

# Try to use a simple font, fallback to default
try:
    font = ImageFont.truetype("Arial.ttf", 12)
except:
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 12)
    except:
        font = ImageFont.load_default()

# Draw V&A text in golden yellow
draw.text((16, 16), "V&A", font=font, fill=(251, 191, 36, 255), anchor="mm")

# Save as ICO
img.save('public/favicon.ico', format='ICO', sizes=[(16,16), (32,32)])
print("Favicon created successfully!")
