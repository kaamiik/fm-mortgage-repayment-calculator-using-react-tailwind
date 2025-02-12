import React from 'react';
import Button from './Button';
import Radios from './Radios';
import NumberFieldAffix from './NumberFieldAffix';
import { calculateMortgage } from '../utils';

function CalculatorSection({ mortgageData, onCalculate, onClearAll }) {
  const [localData, setLocalData] = React.useState({ ...mortgageData });

  function handleChange(name, value) {
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { amount, rate, term, type } = localData;
    if (!amount || !rate || !term || !type) return;

    const results = calculateMortgage(amount, rate, term, type);
    onCalculate(results);
  }

  function handleClear() {
    setLocalData({
      amount: null,
      term: null,
      rate: null,
      type: null,
    });
    onClearAll();
  }

  return (
    <div className="flex flex-col gap-300 px-300 py-400 sm:gap-500 md:p-500">
      <div className="flex flex-col items-start gap-100 sm:flex-row sm:justify-between">
        <h1 className="text-600 text-slate-900">Mortgage Calculator</h1>
        <Button category="link" onClick={handleClear}>
          Clear All
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-300 sm:gap-500"
        action=""
      >
        <div className="flex flex-col gap-300">
          <NumberFieldAffix
            type="prefix"
            label="Mortgage Amount"
            symbol="£"
            value={localData.amount}
            onChange={(val) => handleChange('amount', val)}
          />
          <div className="flex flex-col gap-300 sm:flex-row">
            <NumberFieldAffix
              type="suffix"
              label="Mortgage Term"
              symbol="years"
              value={localData.term}
              onChange={(val) => handleChange('term', val)}
            />
            <NumberFieldAffix
              type="suffix"
              label="Interest Rate"
              symbol="%"
              value={localData.rate}
              onChange={(val) => handleChange('rate', val)}
            />
          </div>
          <Radios
            label="Mortgage Type"
            value={localData.type}
            onChange={(val) => handleChange('type', val)}
          />
        </div>
        <div className="sm:self-start">
          <Button category="primary">Calculate Repayments</Button>
        </div>
      </form>
    </div>
  );
}

export default CalculatorSection;
