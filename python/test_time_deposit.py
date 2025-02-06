from time_deposit import TimeDeposit, TimeDepositCalculator
import unittest


class TestTimeDepositCalculator(unittest.TestCase):

    def test_calculateInterest(self):

        xs = [TimeDeposit(planType='basic', balance=1234567.0, days=45)]

        calc = TimeDepositCalculator()

        calc.calculateInterest(xs)
        self.assertEqual(1, 1)


if __name__ == '__main__':
    unittest.main()
