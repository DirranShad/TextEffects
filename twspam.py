from pyautogui import typewrite
from time import sleep
import sys, json

def start1():
    loopstr = str(lines[0])
    loopint = int(lines[1])
    for x in range(loopint):
        typewrite(loopstr)
        typewrite(['enter'])

def start2():
    loopstr = str(lines[0])
    loopint = int(lines[1])
    for x in range(loopint):
        typewrite(loopstr + " " +str(x+1))
        typewrite(['enter'])

def start3():
    loopint = int(lines[0])
    for x in range(loopint):
        sleep(1)
        typewrite(str(loopint - x))
        typewrite(['enter'])

def start4():
    loopstr = str(lines[0])
    typewrite(loopstr[::-1])
    typewrite(['enter'])


def start5():
    endlist = []
    r = str(lines[0])
    e = r.split(' ')
    for x in e:
        y = x + 'u'
        endlist.append(y)
    endlist.append('desu~')
    s = ' '.join(endlist)
    typewrite(s)
    typewrite(['enter'])

def start6():
    r = str(lines[0])
    for x in list(r):
        typewrite(x)
        typewrite(['enter'])

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    global lines
    lines = read_in()
    input1 = int(lines[2])
    if input1 == 0:
        start1()
    elif input1 == 1:
        start2()
    elif input1 == 2:
        start3()
    elif input1 == 3:
        start4()
    elif input1 == 4:
        start5()
    elif input1 == 5:
        start6()

if __name__ == '__main__':
    main()
