import pymysql
import eats_algo
#comment


def user_spec_autocomplete(option):
    db = pymysql.connect(host='us-cdbr-east-02.cleardb.com',
                     user='bc4af97fe5f893',
                     password='e7b5398d',
                     db='heroku_e1cbc82b93d254b')
    cursor = db.cursor()
    if(True):
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
        db.close()
