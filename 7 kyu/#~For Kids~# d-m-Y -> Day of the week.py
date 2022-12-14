'''
https://www.codewars.com/kata/5885b5d2b632089dc30000cc

#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
'''

# my solution
from datetime import datetime as dt

def day_of_week(date):
    day = dt.strptime(date, '%d/%m/%Y')
    return day.strftime("%A")

#! alternative-solution
from dateutil.parser import parse

def day_of_week(date):
    return parse(date, dayfirst=True).strftime("%A")