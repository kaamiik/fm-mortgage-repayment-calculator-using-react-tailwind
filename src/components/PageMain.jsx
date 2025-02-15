import React from 'react';
import CalculatorSection from './CalculatorSection';
import ResultsSection from './ResultsSection';

function PageMain() {
  const [results, setResults] = React.useState(null);

  function handleCalculation(results) {
    setResults(results);
  }

  function handleClearAll() {
    setResults(null);
  }

  return (
    <main className="flex-1 md:flex md:items-center">
      <div className="mx-auto grid max-w-[43rem] bg-white drop-shadow-[0_32px_64px_hsla(202,55,16,10)] md:my-500 md:overflow-hidden md:rounded-3xl lg:max-w-[63em] lg:grid-cols-2">
        <CalculatorSection
          onCalculate={handleCalculation}
          onClearAll={handleClearAll}
        />
        <ResultsSection results={results} />
      </div>
    </main>
  );
}

export default PageMain;
