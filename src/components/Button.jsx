import { Children } from 'react';

function Button({ children, category }) {
  if (category === 'primary')
    return (
      <button className="bg-lime text-500 hover:bg-lime/50 focus-visible:bg-lime/50 flex cursor-pointer justify-center gap-150 rounded-full px-500 py-200 text-slate-900 transition-colors delay-300 ease-in-out">
        <img src="/assets/images/icon-calculator.svg" alt="" />
        {children}
      </button>
    );

  if (category === 'link')
    return (
      <button
        className="text-400 cursor-pointer text-slate-700 underline transition-colors delay-300 ease-in-out hover:text-slate-900 focus-visible:text-slate-900"
        type="button"
      >
        {children}
      </button>
    );
}

export default Button;
