import React from 'react';
import Button from './Button';
import Radios from './Radios';
import NumberFieldAffix from './NumberFieldAffix';
import { calculateMortgage } from '../utils';

function CalculatorSection({ onCalculate, onClearAll }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log('formData', formData);

    const amount = parseFloat(formData.get('amount'));
    const rate = parseFloat(formData.get('rate'));
    const term = parseFloat(formData.get('term'));
    const type = formData.get('type');

    if (!amount || !rate || !term || !type) return;

    const results = calculateMortgage(amount, rate, term, type);
    onCalculate(results);
    console.log('results', results);
  }

  return (
    <div className="flex flex-col gap-300 px-300 py-400 sm:gap-500 md:p-500">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-300 sm:gap-500"
        action=""
      >
        <div className="flex flex-col items-start gap-100 sm:flex-row sm:justify-between">
          <h1 className="text-600 text-slate-900">Mortgage Calculator</h1>
          <Button type="reset" category="link" onClick={onClearAll}>
            Clear All
          </Button>
        </div>

        <div className="flex flex-col gap-300">
          <NumberFieldAffix
            type="prefix"
            label="Mortgage Amount"
            symbol="£"
            name="amount"
          />
          <div className="flex flex-col gap-300 sm:flex-row">
            <NumberFieldAffix
              type="suffix"
              label="Mortgage Term"
              symbol="years"
              name="term"
            />
            <NumberFieldAffix
              type="suffix"
              label="Interest Rate"
              symbol="%"
              name="rate"
            />
          </div>
          <Radios label="Mortgage Type" name="type" />
        </div>
        <div className="sm:self-start">
          <Button category="primary">Calculate Repayments</Button>
        </div>
      </form>
    </div>
  );
}

export default CalculatorSection;
