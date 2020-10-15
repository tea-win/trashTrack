# -*- coding: utf-8 -*-
"""
Created on Sat Jan 11 22:02:41 2020

"""

import cv2
import azure_class
import numpy as np
import time
import easygui

name = 'webcam_pic.jpg'


def take_picture(f):
    cv2.imwrite(filename=name, img=f)
    cv2.destroyAllWindows()


# istantiate Azure
az = azure_class.AzureClass()
# istantiate video camera
webcam = cv2.VideoCapture(1)
_, __ = webcam.read()
ind = {}
ave = np.zeros((__.shape))  # shape of video camera data
num = 10  # number of iterations

# build the average and standrad deviation of still image
for i in range(num):
    _, compFrame = webcam.read()
    ind[i] = compFrame
    ave += compFrame

ave = ave / num
std = np.zeros((__.shape))

for i in range(num):
    std += (ind[i] - ave) ** 2

std = np.sqrt(std / (num - 1))
comp = np.sum(std)  # base number to compare to

print('Starting to compare compost')
# live feed recording data and do stuff if criteria matched
while True:
    check, frame = webcam.read()
    __ = np.sum(np.abs(ave - frame))
    if __ > 3 * comp:  # test this value out
        time.sleep(1)
        take_picture(frame)
        if az.isCompost(name):
            print("Compostable")
            print("Correct! Thank you for composting :)")
            easygui.msgbox("Correct! Thank you for composting :)", title="correct")
            # cv2.imshow("correct", correct_image)
        else:
            print("Not compostable")
            print("Incorrect! This is not compost!")
            easygui.msgbox("We are dissapointed in you! How can you get it wrong????!!!! :)", title="incorrect")
            # cv2.imshow("incorrect", incorrect_image)
        break
        # else:
        # does that

    # when we want to break the loop
    # webcam.release()
    # cv2.destroyAllWindows
