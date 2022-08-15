'''
https://www.codewars.com/kata/586c1cf4b98de0399300001d/

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
'''

# my solution
def combat(health, damage):
    x = health - damage
    return x if x > 0 else 0

#! alternative-solution
def combat(health, damage):
    return max(0, health-damage)
# clever

