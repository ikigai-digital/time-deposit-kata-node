import { TimeDeposit } from '../TimeDeposit'
import { TimeDepositCalculator } from '../TimeDepositCalculator'

const TEST_DATA = [
  {
    plan: 'basic',
    amount: 1234567.0,
    days: 45,
    result: 1235595.81,
  },
]

const plans: TimeDeposit[] = TEST_DATA.map(
  (data) => new TimeDeposit(data.plan, data.amount, data.days),
)

test('Should correctly calculate interest', () => {
  const calc = new TimeDepositCalculator()
  const plansWithInterest = calc.calculateInterest(plans)

  plansWithInterest.forEach((item, index) => {
    expect(item.b).toBe(TEST_DATA[index].result)
  })
})
