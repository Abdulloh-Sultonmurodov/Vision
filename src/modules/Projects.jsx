import {
  AddIcon,
  FigmaIcon,
  MoreIcon,
  TicIcon,
  TriangleICon,
  XDIcon,
} from "../assets/icons";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      img: <XDIcon />,
      title: "Chakra Soft UI Version",
      budget: "$14,000",
      status: "Working",
      completion: "60%",
      moreImg: <MoreIcon />,
    },
    {
      id: 2,
      img: <TriangleICon />,
      title: "Add Progress Track",
      budget: "$3,000",
      status: "Canceled",
      completion: "10%",
      moreImg: <MoreIcon />,
    },
    {
      id: 3,
      img: <FigmaIcon />,
      title: "Fix Platform Errors",
      budget: "Not set",
      status: "Done",
      completion: "100%",
      moreImg: <MoreIcon />,
    },
  ];

  return (
    <div className="w-[1100px] h-[453px] rounded-[20px] table-bg py-[25px] px-[22px]">
      <div className="flex justify-between">
        <h2 className="text-white text-[18px]">Projects</h2>
        <button className="text-white hover:text-[#0075FF] cursor-pointer">
          <AddIcon />
        </button>
      </div>
      <div className="flex items-center gap-[5px] mt-[6px] mb-[28px]">
        <TicIcon />
        <p className="text-[#A0AEC0] text-[14px]">30 done this month</p>
      </div>
      <div>
        <div className="flex justify-between mt-[23px] border-b-[1px] border-[#56577A] pb-[12px]">
          <p className="text-[#A0AEC0] text-[10px] mr-[450px]">COMPANIES</p>
          <p className="text-[#A0AEC0] text-[10px]">BUDGET</p>
          <p className="text-[#A0AEC0] text-[10px] ">STATUS</p>
          <p className="text-[#A0AEC0] text-[10px] mr-[110px]">COMPLETION</p>
        </div>
        {projectList.map((item) => {
          return (
            <div
              className="flex items-center justify-between my-[19px] border-b-[1px] border-[#56577A] pb-[12px]"
              key={item.id}
            >
              <div className="flex items-center gap-[17px]">
                {item.img}
                <p className="text-white text-[10px]">{item.title}</p>
              </div>
              <div className="flex gap-[100px]">
                <div>
                  <p className="text-[14px] text-white">{item.budget}</p>
                </div>
                <div>
                  <p className="text-[14px] text-white">{item.status}</p>
                </div>
                <div>
                  <p className="text-white text-[14px]">{item.completion}</p>
                </div>
                <div>{item.moreImg}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
