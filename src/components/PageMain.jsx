import React from 'react';
import CalculatorSection from './CalculatorSection';
import ResultsSection from './ResultsSection';

function PageMain() {
  const [mortgageData, setMortgageData] = React.useState({
    amount: null,
    term: null,
    rate: null,
    type: null,
    results: null,
  });

  function handleCalculation(results) {
    setMortgageData((prev) => ({ ...prev, results }));
  }

  function handleClearAll() {
    setMortgageData({
      amount: null,
      term: null,
      rate: null,
      type: null,
      results: null,
    });
  }
  return (
    <main className="flex-1 md:flex md:items-center">
      <div className="mx-auto grid max-w-[43rem] bg-white drop-shadow-[0_32px_64px_hsla(202,55,16,10)] md:my-500 md:overflow-hidden md:rounded-3xl lg:max-w-[63em] lg:grid-cols-2">
        <CalculatorSection
          mortgageData={mortgageData}
          onCalculate={handleCalculation}
          onClearAll={handleClearAll}
        />
        <ResultsSection results={mortgageData.results} />
      </div>
    </main>
  );
}

export default PageMain;
