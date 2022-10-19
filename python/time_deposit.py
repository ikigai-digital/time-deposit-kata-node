class TimeDeposit:
    def __init__(self, n, b, days):
        self.n = n
        self.b = b
        self.days = days


class TimeDepositCalculator:
    def __init__(self, xs):
        self.xs = xs

    def calculateInterest(self):
        a = 0
        for td in self.xs:
            if td.days > 30:
                if td.n == 'student':
                    if td.days < 366:
                        a += (td.b * 0.3)/12
                elif td.n == 'premium':
                    if td.days > 45:
                        a += (td.b * 0.05)/12
                elif td.n == 'internal':
                    a += (td.b * 0.1)/12
                elif td.n == 'basic':
                    a += (td.b * 0.01) / 12
            td.b = round(td.b + ((a * 100) / 100), 2)
        return self.xs
