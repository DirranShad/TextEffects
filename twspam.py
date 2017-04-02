import sys, json
from time import sleep
from pyautogui import typewrite

def start1():
    loopstr = str(output[0])
    loopint = int(output[1])
    for x in range(loopint):
        typewrite(loopstr)
        typewrite(['enter'])

def start2():
    loopstr = str(output[0])
    loopint = int(output[1])
    for x in range(loopint):
        typewrite(loopstr + " " +str(x+1))
        typewrite(['enter'])

def start3():
    loopint = int(output[1])
    for x in range(loopint):
        sleep(1)
        typewrite(str(loopint - x))
        typewrite(['enter'])

def start4():
    loopstr = str(output[0])
    typewrite(loopstr[::-1])
    typewrite(['enter'])


def start5():
    endlist = []
    r = str(output[0])
    e = r.split(' ')
    for x in e:
        y = x + 'u'
        endlist.append(y)
    endlist.append('desu~')
    s = ' '.join(endlist)
    typewrite(s)
    typewrite(['enter'])

def start6():
    r = str(output[0])
    for x in list(r):
        typewrite(x)
        typewrite(['enter'])

def read_in():
    output = sys.stdin.readlines()
    return json.loads(output[0])

def main():
    global output
    output = read_in()
    input1 = int(output[2])
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
