'''
https://www.codewars.com/kata/571640812ad763313600132b

Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.
'''

# my solution
def alex_mistakes(number_of_katas, time_limit):
    minutes_per_kata = 6
    pushup_time = 5
    pushup_count = 0

    while number_of_katas * minutes_per_kata + pushup_time <= time_limit:
        pushup_count += 1
        time_limit -= pushup_time
        pushup_time *= 2

    return pushup_count