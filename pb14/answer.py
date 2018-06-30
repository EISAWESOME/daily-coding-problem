#!/usr/bin/env python3
# Time : 19:37

import math
from random import random
from PIL import Image
from PIL import ImageDraw

# Square area = (2r)²
# Circle area = π * r²
# Cirle-Square area ratio = π / 4
# So if you pick K random points in the square,  K * π / 4 should be inside the circle
# With L being the number of points inside the circle, whe have
# π = 4M / K
def approx_pi(nb_trials):
    inside_circle = 0
    img = Image.new('RGB', (500, 500), "white")
    draw = ImageDraw.Draw(img)        
    for _ in range(nb_trials):

      # Picks point at random in a 1 x 1 square
        x = random()
        y = random()
        # If the picked point lands in a r=1 circle
        if math.hypot(x, y) < 1:          
            inside_circle +=1
            draw.point((int(x * 500), int(y * 500)), fill="blue")
    img.save('pi.png')
    print('π is approx.: ', round((4.0 * inside_circle / nb_trials), 3))


approx_pi(10**6)