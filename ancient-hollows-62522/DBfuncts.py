import pymysql
import eats_algo



def addUser(option):
    print("HERE")
    db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                     user='bc4af97fe5f893',
                     password='e7b5398d',
                     db='heroku_e1cbc82b93d254b')
    cursor = db.cursor()
    if(True):
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_"+option[0], option[1], option[2], option[3],option[4],option[5]))
        db.commit()
        return option

def deleteAll():
    db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                         user='bc4af97fe5f893',
                         password='e7b5398d',
                         db='heroku_e1cbc82b93d254b')
    cursor = db.cursor()
    cursor.execute("DELETE FROM user_info")
    data = cursor.fetchall()
    db.close()

def algo():
    db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                    user='bc4af97fe5f893',
                    password='e7b5398d',
                    db='heroku_e1cbc82b93d254b')
    cursor = db.cursor()
    if(True):
        preferences = []
        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_1")
        data = cursor.fetchall()
        first = True
        prepreferences = []
        for k in data[0]:
            if first:
                ""
            else:
                prepreferences.append(k)
            first = False
        preferences.append(prepreferences)

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_2")
        data = cursor.fetchall()
        first = True
        prepreferences = []
        for k in data[0]:
            if first:
                ""
            else:
                prepreferences.append(k)
            first = False
        preferences.append(prepreferences)

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_3")
        data = cursor.fetchall()
        first = True
        prepreferences = []
        for k in data[0]:
            if first:
                ""
            else:
                prepreferences.append(k)
            first = False
        preferences.append(prepreferences)

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_4")
        data = cursor.fetchall()
        first = True
        prepreferences = []
        for k in data[0]:
            if first:
                ""
            else:
                prepreferences.append(k)
            first = False
        preferences.append(prepreferences)

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_5")
        data = cursor.fetchall()
        first = True
        prepreferences = []
        for k in data[0]:
            if first:
                ""
            else:
                prepreferences.append(k)
            first = False
        preferences.append(prepreferences)
        print(preferences)
        eats_algo.main(preferences)
        db.close()
        db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                            user='bc4af97fe5f893',
                            password='e7b5398d',
                            db='heroku_e1cbc82b93d254b')
        cursor = db.cursor()
        cursor.execute("DELETE FROM user_info")
        data = cursor.fetchall()
        db.close()
        win = eats_algo.thewinner
        eats_algo.thewinner = []
        return win








def testdata():
    db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                     user='bc4af97fe5f893',
                     password='e7b5398d',
                     db='heroku_e1cbc82b93d254b')
    cursor = db.cursor()
    if(True):

        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_1", "Anchor Bar", "Chinese Cookery", "Duffs","Deep South Taco", "Blue Bull Tavern"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_2", "Allen Burger Venture", "Sato Ramen", "Taisho Bistro", "Jasmines", "NY Beer Project"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_3", "Jasmines", "Deep South Taco", "Chinese Cookery", "Blue Bull Tavern", "Taisho Bistro"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_4", "Duffs", "NY Beer Project", "Anchor Bar", "Sato Ramen", "Deep South Taco"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_5", "Jasmines", "Blue Bull Tavern", "Sato Ramen", "Duffs", "Anchor Bar"))
        db.commit()


