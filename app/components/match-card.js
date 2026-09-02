const Badge = ({ code, name, blue }) => {
  return (
    <div
      className={`mx-auto h-[86px] w-[82px] [clip-path:polygon(9%_0,91%_0,100%_75%,50%_100%,0_75%)] border-4 pt-2 text-center ${blue ? "border-[#56a8df] bg-[#103958]" : "border-[#7ab640] bg-[#193c25]"}`}
    >
      <b className="block text-lg">{code}</b>
      <small className="text-[9px] font-bold">{name}</small>
    </div>
  );
};

const MatchCard = ({ className = "" }) => {
  return (
    <article
      id="schedule"
      className={`rounded-[14px] bg-[linear-gradient(145deg,#071e31,#031524)] px-3 py-[17px] pb-[14px] text-white shadow-lg min-[781px]:px-6 ${className}`}
    >
      <h3 className="text-center font-[Impact,Arial_Narrow,sans-serif] text-[19px] tracking-[.7px]">
        UPCOMING <span className="text-[#78b82e]">MATCH</span>
      </h3>
      <div className="mt-[15px] grid grid-cols-[1fr_90px_1fr] items-center min-[781px]:grid-cols-[1fr_100px_1fr]">
        <Badge code="CC" name="CODE CRUSADERS" />
        <div className="text-center">
          <small className="bg-[#629e27] px-[11px] py-1 text-[8px]">
            MATCH 01
          </small>
          <b className="my-1 block font-[Impact,sans-serif] text-3xl">VS</b>
          <p className="my-1.5 text-[10px]">▣ 25 MAY 2025</p>
          <p className="my-1.5 text-[10px]">◷ 10:00 AM</p>
        </div>
        <Badge code="BB" name="BYTE BLAZERS" blue />
      </div>
      <div className="mt-1 grid grid-cols-[1fr_1.25fr_1fr] text-center text-[10px]">
        <b>Code Crusaders</b>
        <span>● University Ground</span>
        <b>Byte Blazers</b>
      </div>
    </article>
  );
};

export default MatchCard;
