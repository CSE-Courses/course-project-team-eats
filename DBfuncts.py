import pymysql

def miles_spec(miles):
    db = pymysql.connect(host="tethys.cse.buffalo.edu",
                     user="jtdilapo",
                     password="50330831",
                     db="cse442_542_2020_fall_teama_db",
                     port=3306)
    cursor = db.cursor()
    cursor.execute("SELECT * FROM restaurant_info WHERE miles_from_ub < %s", miles)

    data = cursor.fetchall()
    print(data)
    db.close()

def food_spec(food):
    db = pymysql.connect(host="tethys.cse.buffalo.edu",
                         user="jtdilapo",
                         password="50330831",
                         db="cse442_542_2020_fall_teama_db",
                         port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM giancarlos WHERE description REGEXP %s", food)

    data = cursor.fetchall()
    print(data)
    db.close()