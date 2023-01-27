'''

'''

# my solution
def count_developers(lst):
    count = 0
    for i in range(len(lst)):
        if lst[i]['continent'] == 'Europe' and lst[i]['language'] == 'JavaScript':
            count += 1
    return count  