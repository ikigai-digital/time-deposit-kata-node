package org.ikigaidigital

import java.math.BigDecimal
import java.math.RoundingMode

class TimeDepositCalculator {
    fun calculateInterest(xs: List<TimeDeposit>) {
        for (i in xs.indices) {
            var a = 0.0
            if (xs[i].days > 30) {
                if (xs[i].n === "student") {
                    if (xs[i].days < 366) {
                        a += xs[i].b * 0.03 / 12
                    }
                } else if (xs[i].n === "premium") {
                    if (xs[i].days > 45) {
                        a += xs[i].b * 0.05 / 12
                    }
                } else if (xs[i].n === "internal") {
                    a += xs[i].b * 0.1 / 12
                } else if (xs[i].n === "basic") {
                    a += xs[i].b * 0.01 / 12
                }
            }
            val a2d = BigDecimal(a).setScale(2, RoundingMode.HALF_UP)
            xs[i].b += a2d.toDouble()
        }
    }
}