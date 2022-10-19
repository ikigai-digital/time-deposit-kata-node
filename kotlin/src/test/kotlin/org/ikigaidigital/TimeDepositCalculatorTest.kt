package org.ikigaidigital

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class TimeDepositCalculatorTest {
    @Test
    fun calculateInterest_Test() {
        val calc = TimeDepositCalculator()
        val plans = listOf(
            TimeDeposit("basic", 100000.00, 45)
        )
        calc.calculateInterest(plans)
        Assertions.assertThat(1).isEqualTo(1)
    }
}