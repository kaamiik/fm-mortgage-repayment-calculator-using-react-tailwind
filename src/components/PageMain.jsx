import CalculatorSection from './CalculatorSection';
import ResultsSection from './ResultsSection';

function PageMain() {
  return (
    <main className="flex-1 md:flex md:items-center">
      <div className="mx-auto grid max-w-[43rem] bg-white md:my-500 md:overflow-hidden md:rounded-3xl lg:max-w-[63em] lg:grid-cols-2">
        <CalculatorSection />
        <ResultsSection />
      </div>
    </main>
  );
}

export default PageMain;
