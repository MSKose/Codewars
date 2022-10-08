'''
https://www.codewars.com/kata/5842df8ccbd22792a4000245

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
'''

# my solution
def expanded_form(num):
    strn = str(num)
    arr = []
    
    for idx, el in enumerate(strn[::-1]):
        if el != '0':
            arr.append(el + ('0' * idx)) 
            
    arr.reverse()
            
    return ' + '.join(arr)

#! alternative-solution
def expanded_form(num):
    num = str(num)
    st = ''
    for j, i in enumerate(num):
        if i != '0':
            st += ' + {}{}'.format(i, (len(num[j+1:])*'0'))
    return st.strip(' +')
# wow, nice use of strip