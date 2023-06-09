interface InputPros {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputPros> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className='
        w-full
        p-4
        text-lg
        border-2
        border-neutral-800
        rounder-md
        outline-none
        text-black
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursos-not-allowed
      '
    >
      {}
    </input>
  );
};

export default Input;
