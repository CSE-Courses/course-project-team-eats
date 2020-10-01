import pymysql

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
