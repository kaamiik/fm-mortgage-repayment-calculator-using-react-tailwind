function ResultsSection() {
  return (
    <div className="flex flex-col gap-200 bg-slate-900 px-300 py-400 text-center md:p-500 lg:justify-center lg:rounded-es-[80px]">
      <img
        className="mx-auto"
        src="/public/assets/images/illustration-empty.svg"
        alt=""
      />
      <h2 className="text-600 text-white">Results shown here</h2>
      <p className="text-balance text-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

export default ResultsSection;
