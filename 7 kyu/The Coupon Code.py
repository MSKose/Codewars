'''
https://www.codewars.com/kata/539de388a540db7fec000642

Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False
'''

# my solution
import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    MONTH = ["January","February","March","April","May","June","July", "August","September","October","November","December"]

    current_date = current_date.split()
    expiration_date = expiration_date.split()
    
    current_month =  MONTH.index(current_date[0]) + 1
    current_day = int(current_date[1][:-1])
    current_year = int(current_date[2])
    
    expiration_month = MONTH.index(expiration_date[0]) + 1
    expiration_day = int(expiration_date[1][:-1])
    expiration_year = int(expiration_date[2])
    
    expiration = datetime.datetime(expiration_year, expiration_month, expiration_day)
    current = datetime.datetime(current_year, current_month, current_day)

    if entered_code != correct_code or type(entered_code) != type(correct_code):
        return False
    
    if expiration < current:
        return False
    
    return True

#! alternative-solution
import datetime
def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code is correct_code:
        return(datetime.datetime.strptime(current_date,'%B %d, %Y') <= datetime.datetime.strptime(expiration_date,'%B %d, %Y'))
    return False