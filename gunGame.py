import random
from collections import deque

guns = deque(['green', 'red', 'purple', 'blue', 'white'])

currentSelected = [guns[0], guns[1]]
tempList = list(guns)
random.shuffle(tempList)
goal = deque(tempList)

totalMoves = 0
guns.popleft()
guns.popleft()

print("GAME START")
#move gun order
while True:
    print(f"current order: {currentSelected[0]}, {currentSelected[1]}, {guns[0]}, {guns[1]}, {guns[2]}")
    print(f"goal: {list(goal)}")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    print(f"current guns: {currentSelected}")
    if(currentSelected[0] == goal[0] and currentSelected[1] == goal[1] and 
       guns[0] == goal[2] and guns[1] == goal[3] and guns[2] == goal[4]):
        break
    entry = input("Choose which gun to swap (1, 2 or swap): ")
    if(entry == "1" or entry == "2"):
        guns.append(currentSelected[int(entry)-1])
        currentSelected[int(entry)-1] = guns.popleft()
    elif(entry == "swap"):
        currentSelected[0], currentSelected[1] = currentSelected[1], currentSelected[0]
    else:
        print('invalid entry')
    print()
print("you win!")
