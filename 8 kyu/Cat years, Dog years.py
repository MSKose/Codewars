'''
https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
'''

# my solution
def human_years_cat_years_dog_years(human_years):
    cat_years = 15 if human_years == 1 else 24 if human_years == 2 else 24 + (human_years - 2) * 4
    dog_years = 15 if human_years == 1 else 24 if human_years == 2 else 24 + (human_years -2) * 5
    return [human_years, cat_years, dog_years]