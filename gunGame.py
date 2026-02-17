import random


guns = ['green', 'red', 'purple', 'blue', 'white']

currentSelected = [guns[0], guns[1]]

goal = [guns[random.randint(0, 4)], guns[random.randint(0, 4)]]

totalMoves = 0
print("GAME START")
print(f"gun list: {', '.join(guns)}")
#while True:
print(f"goal: {goal}")
print(f"current guns: {currentSelected}")


