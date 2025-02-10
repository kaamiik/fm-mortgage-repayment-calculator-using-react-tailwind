import Button from './Button';
import Radios from './Radios';
import NumberFieldAffix from './NumberFieldAffix';

function CalculatorSection() {
  return (
    <div className="flex flex-col gap-300 px-300 py-400 sm:gap-500 md:p-500">
      <div className="flex flex-col items-start gap-100 sm:flex-row sm:justify-between">
        <h1 className="text-600 text-slate-900">Mortgage Calculator</h1>
        <Button category="link">Clear All</Button>
      </div>
      <form className="flex flex-col gap-300 sm:gap-500" action="">
        <div className="flex flex-col gap-300">
          <NumberFieldAffix type="prefix" label="Mortgage Amount" symbol="£" />
          <div className="flex flex-col gap-300 sm:flex-row">
            <NumberFieldAffix
              type="suffix"
              label="Mortgage Term"
              symbol="years"
            />
            <NumberFieldAffix type="suffix" label="Interest Rate" symbol="%" />
          </div>
          <Radios label="Mortgage Type" />
        </div>
        <div className="sm:self-start">
          <Button category="primary">Calculate Repayments</Button>
        </div>
      </form>
    </div>
  );
}

export default CalculatorSection;
