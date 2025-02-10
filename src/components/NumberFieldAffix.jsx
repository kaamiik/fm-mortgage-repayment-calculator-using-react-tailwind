import {
  NumberField,
  Label,
  Input,
  Group,
  FieldError,
} from 'react-aria-components';

function NumberFieldAffix({ type, label, symbol }) {
  if (type === 'prefix')
    return (
      <NumberField
        className="flex flex-col gap-150"
        defaultValue={0}
        minValue={0}
        isRequired={true}
      >
        <Label>{label}</Label>
        <Group className="data-focus-within:border-lime group data-invalid:border-red grid cursor-pointer grid-cols-[auto_1fr] rounded-sm border border-slate-500 transition-all duration-300 ease-in-out has-hover:border-slate-900 data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted">
          <p className="text-500 group-data-focus-within:bg-lime group-data-invalid:bg-red w-fit rounded-l-sm bg-slate-100 px-200 py-150 transition-colors duration-300 ease-in-out group-data-focus-within:text-slate-900 group-data-invalid:text-white">
            {symbol}
          </p>
          <Input className="text-500 w-full cursor-pointer px-200 text-slate-900 outline-0 transition-all duration-300 ease-in-out" />
        </Group>
        <FieldError className="text-300 text-red">
          This field is required
        </FieldError>
      </NumberField>
    );

  if (type === 'suffix')
    return (
      <NumberField
        className="flex flex-col gap-150"
        defaultValue={0}
        minValue={0}
        isRequired={true}
      >
        <Label>{label}</Label>
        <Group className="data-focus-within:border-lime group data-invalid:border-red grid cursor-pointer grid-cols-[1fr_auto] rounded-sm border border-slate-500 transition-all duration-300 ease-in-out has-hover:border-slate-900 data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted">
          <Input className="text-500 w-full cursor-pointer px-200 text-slate-900 outline-0 transition-all duration-300 ease-in-out" />
          <p className="text-500 group-data-focus-within:bg-lime group-data-invalid:bg-red w-fit rounded-r-sm bg-slate-100 px-200 py-150 transition-colors duration-300 ease-in-out group-data-focus-within:text-slate-900 group-data-invalid:text-white">
            {symbol}
          </p>
        </Group>
        <FieldError className="text-300 text-red">
          This field is required
        </FieldError>
      </NumberField>
    );
}

export default NumberFieldAffix;
