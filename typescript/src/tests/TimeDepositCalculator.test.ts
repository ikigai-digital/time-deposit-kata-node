import { TimeDeposit } from '../TimeDeposit'
import { TimeDepositCalculator } from '../TimeDepositCalculator'

const TEST_DATA = [
  {
    planType: 'basic',
    balance: 1234567.0,
    days: 45,
    result: 1235595.81,
  },
]

const plans: TimeDeposit[] = TEST_DATA.map(
  (data) => new TimeDeposit(data.planType, data.balance, data.days),
)

test('Should correctly calculate interest', () => {
  const calc = new TimeDepositCalculator()
  const plansWithInterest = calc.calculateInterest(plans)

  plansWithInterest.forEach((item, index) => {
    expect(item.balance).toBe(TEST_DATA[index].result)
  })
})
