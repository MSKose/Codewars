'''
https://www.codewars.com/kata/56c9f47b0844d85f81000fc2

DESCRIPTION:
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
'''

# my solution
def sort_photos(pics):
    sorted_list = sorted(pics, key=lambda e: (int(e[0:4]), int(e[8:])))
    last_element = sorted_list[-1][0:8] + str(int(sorted_list[-1][8:]) + 1)
    return sorted_list[-5:] + [last_element]