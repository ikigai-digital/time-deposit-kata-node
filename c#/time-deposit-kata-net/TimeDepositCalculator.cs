using System;
using System.Collections.Generic;

namespace time_deposit_kata_net
{
    public class TimeDepositCalculator
    {
        public void CalculateInterest(List<TimeDeposit> xs)
        {
            for (int i = 0; i < xs.Count; i++)
            {
                double a = 0;

                if (xs[i].days > 30)
                {
                    if (xs[i].n == "student")
                    {
                        if (xs[i].days < 366)
                        {
                            a += xs[i].b * 0.03 / 12;
                        }
                    }
                    else if (xs[i].n == "premium")
                    {
                        if (xs[i].days > 45)
                        {
                            a += xs[i].b * 0.05 / 12;
                        }
                    }
                    else if (xs[i].n == "internal")
                    {
                        a += xs[i].b * 0.1 / 12;
                    }
                    else if (xs[i].n == "basic")
                    {
                        a += xs[i].b * 0.01 / 12;
                    }
                }

                xs[i].b += Math.Round(a, 2);
            }
        }
    }
}

