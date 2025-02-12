export function calculateMortgage(
  mortgageAmount,
  annualRate,
  termYears,
  mortgageType
) {
  const r = annualRate / 12 / 100; // Monthly interest rate
  const n = termYears * 12; // Total number of payments

  if (mortgageType === 'repayment') {
    const monthlyPayment = (
      mortgageAmount *
      ((r * (1 + r) ** n) / ((1 + r) ** n - 1))
    ).toFixed(2);
    const totalRepayment = (monthlyPayment * n).toFixed(2);
    return { monthlyPayment, totalRepayment };
    // -------------------------------------------------------------------------
  } else if (mortgageType === 'interest') {
    const monthlyPayment = ((mortgageAmount * (annualRate / 100)) / 12).toFixed(
      2
    );
    const totalRepayment = (monthlyPayment * n + mortgageAmount).toFixed(2);
    return { monthlyPayment, totalRepayment };
  }
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
    value
  );
