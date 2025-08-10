const DashboardFooter = () => {
  return (
    <div className="flex justify-between items-center mx-[23px] mb-[40px]">
      <p className="text-[14px] text-white">
        @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
      </p>
      <div className="flex items-center gap-[46px]">
        <a className="text-[white] text-[14px]" href="/">
          Marketplace
        </a>
        <a className="text-[white] text-[14px]" href="/">
          Blog
        </a>
        <a className="text-[white] text-[14px]" href="/">
          License
        </a>
      </div>
    </div>
  );
};

export default DashboardFooter;
