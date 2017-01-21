from pyautogui import typewrite
from time import sleep
import sys, json

def start1():
    loopstr = raw_input("What would you like to type? :")
    loopint = input("How many times would you like to type it? :")
    sleep(5)
    for x in range(loopint):
        print x+1
        typewrite(loopstr)
        typewrite(['enter'])

def start2():
    loopstr = raw_input("What would you like to type? :")
    loopint = input("How many times would you like to type it? :")
    sleep(5)
    for x in range(loopint):
        print x+1
        typewrite(loopstr + " " +str(x+1))
        typewrite(['enter'])

def start3():
    loopint = input("What number would you like to count down from? :")
    sleep(5)
    for x in range(loopint):
        sleep(1)
        typewrite(str(loopint - x))
        typewrite(['enter'])

def start4():
    while True:
        loopstr = raw_input("What would you like to reverse? :")
        sleep(5)
        typewrite(loopstr[::-1])
        typewrite(['enter'])


def start5():
    endlist = []
    r = raw_input("Enter sentence: ")
    e = r.split(' ')
    for x in e:
        y = x + 'u'
        endlist.append(y)
    endlist.append('desu~')
    s = ' '.join(endlist)
    sleep(5)
    typewrite(s)
    typewrite(['enter'])

def start6():
    r = raw_input("Enter sentence: ")
    sleep(5)
    for x in list(r):
        typewrite(x)
        typewrite(['enter'])

def main1():
    print "1. Spam \n2. Unique Spam \n3. Countdown \n4. Klat mas \n5. Weeb \n6. Vertical Text"
    input1 = input("Selection: ")
    if input1 == 1:
        start1()
    elif input1 == 2:
        start2()
    elif input1 == 3:
        start3()
    elif input1 == 4:
        start4()
    elif input1 == 5:
        start5()
    elif input1 == 6:
        start6()

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in()
    print lines

if __name__ == '__main__':
    main()
