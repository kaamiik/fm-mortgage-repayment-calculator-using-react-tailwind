// Reference: https://moderncss.dev/pure-css-custom-styled-radio-buttons/
import { RadioGroup, Radio, FieldError, Label } from 'react-aria-components';

function Radios({ label }) {
  return (
    <RadioGroup className="flex flex-col gap-150" isRequired={true}>
      <Label>{label}</Label>
      <Radio
        className="text-500 data-selected:bg-lime/15 data-selected:border-lime hover:border-lime data-selected:after:inset-shadow-input relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 before:m-[2.25px] before:h-[20px] before:w-[20px] before:rounded-full before:border-2 before:border-slate-700 before:content-[''] after:absolute after:m-[7.25px] after:ml-[7px] after:h-[11px] after:w-[11px] after:scale-0 after:rounded-full after:transition-colors after:duration-200 after:ease-in-out after:content-[''] data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted data-selected:after:scale-100"
        value="repayment"
      >
        Repayment
      </Radio>
      <Radio
        className="text-500 data-selected:bg-lime/15 data-selected:border-lime hover:border-lime data-selected:after:inset-shadow-input relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 before:m-[2.25px] before:h-[20px] before:w-[20px] before:rounded-full before:border-2 before:border-slate-700 before:content-[''] after:absolute after:m-[7.25px] after:ml-[7px] after:h-[11px] after:w-[11px] after:scale-0 after:rounded-full after:transition-colors after:duration-200 after:ease-in-out after:content-[''] data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted data-selected:after:scale-100"
        value="interest"
      >
        Interest Only
      </Radio>
      <FieldError role="alert" className="text-300 text-red">
        This field is required
      </FieldError>
    </RadioGroup>
  );
}

export default Radios;

// function RadioButton({ children, name, id }) {
//   return (
//     <label
//       className="text-500 hover:border-lime has-checked:bg-lime/15 has-checked:border-lime flex cursor-pointer items-center gap-200 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-150 ease-in-out has-focus:outline-2 has-focus:outline-offset-2 has-focus:outline-slate-900 has-focus:outline-dotted"
//       htmlFor={id}
//     >
//       <input
//         className="before:inset-shadow-input m-[2.25px] grid h-[20px] w-[20px] cursor-pointer appearance-none place-content-center rounded-full border-2 border-slate-700 text-slate-700 before:h-[11px] before:w-[11px] before:scale-0 before:rounded-full before:transition-transform before:duration-150 before:ease-in-out before:content-[''] checked:before:scale-100 focus:outline-0"
//         type="radio"
//         name={name}
//         id={id}
//       />
//       {children}
//     </label>
//   );
// }

// export default RadioButton;
