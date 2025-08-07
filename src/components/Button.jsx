const Button = ({ children, classList }) => {
  return (
    <button
      className={`${classList} px-[150px] py-[15px] bg-[#0075FF] rounded-[12px] text-white text-[10px] font-bold mt-[36px] cursor-pointer hover:bg-[#0075FF]/60 duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
