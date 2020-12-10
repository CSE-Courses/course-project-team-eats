import unittest
import DBfuncts

class TestDBfunctions(unittest.TestCase):

    def test_insert_delete(self):
        self.assertEqual(DBfuncts.testdata(),None)
        self.assertEqual(DBfuncts.deleteAll(), None)

    def test_food_finder(self):
        self.assertEqual(DBfuncts.testdata(), None)
        self.assertEqual(DBfuncts.algo(),(['Jasmines']))

    def test_insert_delete(self):
        self.assertEqual(DBfuncts.addUser("[1,Duffs,Jasmines,Subway,KFC,Planta]"),("[1,Duffs,Jasmines,Subway,KFC,Planta]"))
        self.assertEqual(DBfuncts.addUser("[2,Duffs,KFC,Chipotle,Chop House,Planta]"),("[2,Duffs,KFC,Chipotle,Chop House,Planta]"))
        self.assertEqual(DBfuncts.addUser("[3,Duffs,Sato Ramen,Subway,Chop House,KFC]"),("[3,Duffs,Sato Ramen,Subway,Chop House,KFC]"))
        self.assertEqual(DBfuncts.addUser("[4,McDonalds,Jasmines,Subway,Chiptole,Planta]"),("[4,McDonalds,Jasmines,Subway,Chiptole,Planta]"))
        self.assertEqual(DBfuncts.addUser("[5,Duffs,Arbys,Sato,Chop House,Merge]"),("[5,Duffs,Arbys,Sato,Chop House,Merge]"))
        self.assertEqual(DBfuncts.deleteAll(), None)


if __name__ == '__main__':
    unittest.main()
