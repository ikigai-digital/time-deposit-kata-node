import { TimeDeposit } from './TimeDeposit'

export class TimeDepositCalculator {
  public calculateInterest(xs: TimeDeposit[]) {
    for (let i = 0; i < xs.length; i++) {
      let a = 0

      if (xs[i].days > 30) {
        if (xs[i].n === 'student') {
          if (xs[i].days < 366) {
            a += (xs[i].b * 0.03) / 12
          }
        } else if (xs[i].n === 'premium') {
          if (xs[i].days > 45) {
            a += (xs[i].b * 0.05) / 12
          }
        } else if (xs[i].n === 'internal') {
          a += (xs[i].b * 0.1) / 12
        } else if (xs[i].n === 'basic') {
          a += (xs[i].b * 0.01) / 12
        }
      }

      const a2d = Math.round((a + Number.EPSILON) * 100) / 100

      xs[i].b += a2d
    }

    return xs
  }
}
