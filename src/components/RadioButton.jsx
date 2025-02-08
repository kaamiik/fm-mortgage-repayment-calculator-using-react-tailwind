// Reference: https://moderncss.dev/pure-css-custom-styled-radio-buttons/

function RadioButton({ children, name, id }) {
  return (
    <label
      className="text-500 hover:border-lime has-checked:bg-lime/15 has-checked:border-lime flex cursor-pointer items-center gap-200 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors delay-150 ease-in-out has-focus:outline-2 has-focus:outline-offset-2 has-focus:outline-slate-900 has-focus:outline-dotted"
      htmlFor={id}
    >
      <input
        className="before:inset-shadow-input m-[2.25px] grid h-[20px] w-[20px] cursor-pointer appearance-none place-content-center rounded-full border-2 border-slate-700 text-slate-700 before:h-[11px] before:w-[11px] before:scale-0 before:rounded-full before:transition-transform before:delay-150 before:ease-in-out before:content-[''] checked:before:scale-100 focus:outline-0"
        type="radio"
        name={name}
        id={id}
      />
      {children}
    </label>
  );
}

export default RadioButton;
