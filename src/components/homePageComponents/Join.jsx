const whyWillJoinData = [
  "Networking Opportunities",
  "Learning and Skill Development",
  "Exploring Entrepreneurship",
  "Empowerment and Inspiration",
];
const Join = () => {
  return (
    <div className="py-6 lg:mx-auto">
      <h2 className="  text-2xl font-bold"> Why will you join?</h2>
      <div className="w-10 h-1 mt-1 bg-gradient-to-r from-[#19c3fc]  to-[#19d449] bg-white rounded-sm"></div>

      <div className="  ">
        <div className="lg:ms-10 mt-4  grid grid-cols-1 lg:grid-cols-2 gap-5 font-medium">
          {whyWillJoinData.map((data, i) => (
            <div key={i} className="group box1">
              <div className="flex group-hover:bg-[#011921] transition ease-in cursor-pointer border-[#19c3fc] justify-items-center gap-4 place-items-center border-[1px] p-2 w-fit px-5 py-5 rounded-full">
                <div className="group-hover:joinShadowcolor transition ease-in border-[#19c3fc]  shadow-[#19c3fc] border-[1px] w-12 h-12 text-center flex mx-auto  place-items-center rounded-full">
                  <p className="mx-auto">i</p>
                </div>
                <p className="inline-block">{data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;