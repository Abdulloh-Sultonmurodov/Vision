import { AddIcon } from "../assets/icons";
import { User1, User2, User3 } from "../assets/images";

const Author = () => {
  const authorList = [
    {
      id: 1,
      img: User1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      job: "Manager",
      employment: "Organization",
      status: "Online",
      date: "14/06/21",
      edit: "Edit",
    },
    {
      id: 2,
      img: User2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      job: "Programmer",
      employment: "Developer",
      status: "Offline",
      date: "14/06/21",
      edit: "Edit",
    },
    {
      id: 3,
      img: User3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      job: "Executive",
      employment: "Projects",
      status: "Online",
      date: "14/06/21",
      edit: "Edit",
    },
  ];

  return (
    <div className="w-[1100px] h-[488px] rounded-[20px] table-bg py-[25px] px-[22px]">
      <div className="flex justify-between">
        <h2 className="text-white text-[18px]">Authors Table</h2>
        <button className="text-white hover:text-[#0075FF] cursor-pointer">
          <AddIcon />
        </button>
      </div>
      <div>
        <div className="flex justify-between mt-[23px] border-b-[1px] border-[#56577A] pb-[12px]">
          <p className="text-[#A0AEC0] text-[10px] mr-[300px]">AUTHOR</p>
          <p className="text-[#A0AEC0] text-[10px]">FUNCTION</p>
          <p className="text-[#A0AEC0] text-[10px] ">STATUS</p>
          <p className="text-[#A0AEC0] text-[10px] mr-[150px]">EMPLOYED</p>
        </div>
        {authorList.map((item) => {
          return (
            <div
              className="flex justify-between my-[10px] border-b-[1px] border-[#56577A] pb-[12px]"
              key={item.id}
            >
              <div className="flex items-center gap-[15px] mr-[280px]">
                <img src={item.img} alt="Users" width={40} height={40} />
                <div>
                  <p className="text-white text-[10px]">{item.name}</p>
                  <p className="text-[#A0AEC0] text-[14px]">{item.email}</p>
                </div>
              </div>
              <div className="flex gap-[20px] items-center">
                <div className="mr-[90px]">
                  <p className="text-[14px] text-white">{item.job}</p>
                  <p className="text-[14px] text-[#A0AEC0]">
                    {item.employment}
                  </p>
                </div>
                <div className="rounded-[8px] text-white border-[1px] w-[65px] h-[25px] flex items-center justify-center mr-[90px]">
                  {item.status}
                </div>
                <div className="mr-[100px]">
                  <p className="text-white text-[14px] mr-[10px]">
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="text-[#A0AEC0] text-[14px]">{item.edit}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
