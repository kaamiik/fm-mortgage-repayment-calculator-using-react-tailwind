import Button from './Button';
import RadioButton from './RadioButton';

function PageMain() {
  return (
    <main className="flex-1">
      <fieldset>
        <legend>Mortgage Type</legend>
        <div className="mt-150 flex flex-col gap-150">
          <RadioButton name="mortgage" id="repayment">
            Repayment
          </RadioButton>
          <RadioButton name="mortgage" id="interest">
            Interest Only
          </RadioButton>
        </div>
      </fieldset>
    </main>
  );
}

export default PageMain;
