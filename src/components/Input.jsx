const Input = ({ type, placeholder, classList, name }) => {
  return (
    <input
      className={`${classList} input-bg w-[350px] h-[50px] rounded-[20px] px-[20px] text-[#A0AEC0] placeholder:text-[#A0AEC0]`}
      type={type}
      name={name}
      placeholder={placeholder}
      required
      autoComplete="off"
    />
  );
};

export default Input;
