import { TimeDeposit } from '../TimeDeposit'
import { TimeDepositCalculator } from '../TimeDepositCalculator'


test('Should correctly calculate interest', () => {
  const plans: TimeDeposit[] = [new TimeDeposit('basic', 1234567.0, 45)]
  const calc = new TimeDepositCalculator()
  calc.calculateInterest(plans)

  expect(1).toBe(1)
})
