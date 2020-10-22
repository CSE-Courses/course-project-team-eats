import unittest
import DBfuncts

class TestDBfunctions(unittest.TestCase):

    def test_miles_from_ub(self):
        self.assertEqual(DBfuncts.miles_spec(7), ((3, 'Red Lobster - Amherst\n', '4010 Maple Rd Buffalo, NY 14226-1030', 'Seafood', '2.5', '(716) 837-0202'), (4, "Giancarlo's", '5110 Main Street Buffalo, NY 14221', 'Italian', '6.1', '(716) 650-5566'), (5, 'Hooked - Buffalo', '5195 Main St Williamsville, NY 14221', 'Seafood', '5.4', '(716) 428-3957')))
        self.assertEqual(DBfuncts.miles_spec(3),((3, 'Red Lobster - Amherst\n', '4010 Maple Rd Buffalo, NY 14226-1030', 'Seafood', '2.5', '(716) 837-0202'),))
        self.assertEqual(DBfuncts.miles_spec(1),())



    def test_food_finder(self):
        self.assertEqual(DBfuncts.food_spec("chicken"), (('chicken milanese', 'panko crusted chicken\nbreast, smashed baby potatoes, arugula, basil pesto,\njulienned artichokes, fennel, shaved parmigiano,\nbalsamic glaze'), ('buffalo chicken', 'mozzarella, bleu cheese, buffalo chicken, hot sauce')))
        self.assertEqual(DBfuncts.food_spec("tomato"),(('tomato basil bisque', None),))
        self.assertEqual(DBfuncts.food_spec("test"),())


    def test_algorithm(self):
        self.assertEqual(DBfuncts.user_spec_autocomplete('test1'),['Jasmines'])

    def test_algorithm(self):
        self.assertEqual(DBfuncts.user_spec_autocomplete('test2'),['Kyoto Japanese Restaurant'])


if __name__ == '__main__':
    unittest.main()
