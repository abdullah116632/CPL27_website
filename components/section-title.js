const SectionTitle = ({ main, green }) => (
  <>
    <h3 className="font-[Impact,Arial_Narrow,sans-serif] text-[19px] tracking-[.7px]">
      {main} <span className="text-[#78b82e]">{green}</span>
    </h3>
    <div className="my-2.5 mb-[17px] h-[3px] w-[43px] bg-[#78b82e]" />
  </>
);
export default SectionTitle;
