from pyautogui import typewrite
from time import sleep

r = "lol"
sleep(3)
for x in list(r):
    typewrite(x)
    typewrite(['enter'])




import sys, json

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_in()
    print lines

if __name__ == '__main__':
    main()
