import operator
import random
import DBfuncts

# list of all user preference lists
#preferences = []

# key, value pairs of all restaurants with their scores
master_list = {}

# list of ties at the end (if any)
ties = []

thewinner = []

# index 0 = 5 points, index 1 = 4 points, index 2 = 3 points, index 3 = 2 points, index 1 = 1 point

# **********THIS DATA HANDLING WILL NEED TO CHANGE ONCE WE CONNECT IT TO THE WEBSITE**********

# sample data for user 1
#user_1 = ["Anchor Bar", "Duffs", "Chinese Cookery", "Deep South Taco", "Blue Bull Tavern"]

# sample data for user 2
#user_2 = ["Allen Burger Venture", "Sato Ramen", "Taisho Bistro", "Jasmines", "NY Beer Project"]

# sample data for user 3
#user_3 = ["Deep South Taco", "Jasmines", "Chinese Cookery", "Blue Bull Tavern", "Taisho Bistro"]

# sample data for user 4
#user_4 = ["Duffs", "NY Beer Project", "Anchor Bar", "Sato Ramen", "Deep South Taco"]

# sample data for user 5
#user_5 = ["Jasmines", "Blue Bull Tavern", "Sato Ramen", "Duffs", "Anchor Bar"]

# adding each user's preference list to preferences
#preferences.append(user_1)
#preferences.append(user_2)
#preferences.append(user_3)
#preferences.append(user_4)
#preferences.append(user_5)


#####################################################################################################

# breaks preference apart and adds one copy of each restaurant to master_list and initializes all scores to 0
def createMasterList(preferences):
    for list in range(0, len(preferences)):
        for restaurant in preferences[list]:
            if restaurant not in master_list:
                master_list.update({restaurant: 0})


# determines each restaurants placement in preference list (top pick -> bottom pick) and calls scoring method associated with that placement
def getPosition(preferences):
    for list in range(0, len(preferences)):
        for i in range(0, len(preferences)):
            if i == 0:
                updateFirst(preferences[list][0])
            elif i == 1:
                updateSecond(preferences[list][1])
            elif i == 2:
                updateThird(preferences[list][2])
            elif i == 3:
                updateFourth(preferences[list][3])
            elif i == 4:
                updateFifth(preferences[list][4])


# updates score when restaurant places first in a preference list
def updateFirst(restaurant):
    val = master_list.get(restaurant)
    val = val + 5
    master_list.update({restaurant: val})


# updates score when restaurant places second in a preference list
def updateSecond(restaurant):
    val = master_list.get(restaurant)
    val = val + 4
    master_list.update({restaurant: val})


# updates score when restaurant places third in a preference list
def updateThird(restaurant):
    val = master_list.get(restaurant)
    val = val + 3
    master_list.update({restaurant: val})


# updates score when restaurant places fourth in a preference list
def updateFourth(restaurant):
    val = master_list.get(restaurant)
    val = val + 2
    master_list.update({restaurant: val})


# updates score when restaurant places fifth in a preference list
def updateFifth(restaurant):
    val = master_list.get(restaurant)
    val = val + 1
    master_list.update({restaurant: val})


# determines the restaurant that should be outputted to the front end AFTER tie handling
def winner():
    winner = max(master_list.items(), key=operator.itemgetter(1))[0]
    if master_list.get(winner) in ties:
        winner = resolveTies()

    print("Winner: ", winner)
    thewinner.append(winner)
    return winner


# determines if there are any first place ties
def getTies():
    rev_dict = {}

    for key, value in master_list.items():
        rev_dict.setdefault(value, set()).add(key)

        allTies = [key for key, values in rev_dict.items() if len(values) > 1]

    global ties
    ties = [max(allTies)]


# resolves the ties by randomly selecting one of the first place tied restaurants
def resolveTies():
    tie_list = []

    for key, value in master_list.items():
        if value in ties:
            tie_list.append(key)

    return random.choice(tie_list)


# prints all key, value pairs - FOR DEBUGGING PURPOSES
def scores():
    for key, value in master_list.items():
        print(key, ":", value)
        print('\n')


# main - handles all function calls
def main(preferences):
    createMasterList(preferences)
    getPosition(preferences)
    getTies()
    scores()
    winner()


# call to main
#main()