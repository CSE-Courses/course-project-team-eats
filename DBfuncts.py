import pymysql
import eats_algo

def test(food):
    return food

def miles_spec(miles):
    db = pymysql.connect(host="tethys.cse.buffalo.edu",
                     user="jtdilapo",
                     password="50330831",
                     db="cse442_542_2020_fall_teama_db")
    cursor = db.cursor()
    cursor.execute("SELECT * FROM restaurant_info WHERE miles_from_ub < %s", miles)
    data = cursor.fetchall()
    print(data)
    return data
    db.close()

def food_spec(food):
    db = pymysql.connect(host="tethys.cse.buffalo.edu",
                     user="jtdilapo",
                     password="50330831",
                     db="cse442_542_2020_fall_teama_db")
    cursor = db.cursor()
    cursor.execute("SELECT item, description FROM giancarlos WHERE item REGEXP %s", food)
    data = cursor.fetchall()
    print(data)
    return data
    db.close()

def user_spec_autocomplete(option):
    db = pymysql.connect(host="tethys.cse.buffalo.edu",
                        user="jtdilapo",
                        password="50330831",
                        db="cse442_542_2020_fall_teama_db")
    cursor = db.cursor()
    if(option == "test1"):
        preferences = []
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
        return eats_algo.thewinner
    else:
        preferences = []
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_6", "Siena Restaurant", "Duffs", "Kyoto Japanese Restaurant","Adam's Rib", "Jazzboline Restaurant & Bar"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_7", "Allen Burger Venture", "Siena Restaurant", "Taisho Bistro", "Jasmines", "NY Beer Project"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_8", "Kyoto Japanese Restaurant", "Jasmines", "Diegos Mexican Grill", "Blue Bull Tavern", "Taisho Bistro"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_9", "Adam's Rib", "NY Beer Project", "Anchor Bar", "Sato Ramen", "Kyoto Japanese Restaurant"))
        db.commit()
        cursor.execute("INSERT IGNORE INTO user_info (username, restaurant_1, restaurant_2, restaurant_3, restaurant_4, restaurant_5) VALUES (%s, %s, %s, %s, %s, %s)",("user_10", "Olive Garden", "Blue Bull Tavern", "Sato Ramen", "Santora's Pizza Pub & Grill", "Kyoto Japanese Restaurant"))
        db.commit()

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_6")
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

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_7")
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

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_8")
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

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_9")
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

        cursor.execute("SELECT * FROM user_info WHERE username = %s", "user_10")
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
        return eats_algo.thewinner
        db.close()
