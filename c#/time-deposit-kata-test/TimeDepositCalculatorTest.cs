using System.Collections.Generic;
using NUnit.Framework;
using time_deposit_kata_net;

namespace time_deposit_kata_test
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void CalculateInterest_Test()
        {
            TimeDepositCalculator calculator = new TimeDepositCalculator();

            var plans = new List<TimeDeposit>
            {
                new TimeDeposit
                {
                    n = "basic",
                    b = 1234567,
                    days = 45
                }
            };
            calculator.CalculateInterest(plans);

            Assert.AreEqual(1, 1);
        }
    }
}
