import { FaArrowRight, FaUser, FaUsers } from "react-icons/fa6";

const RegistrationCard = ({ team = false, title, children, href }) => (
  <a
    className={`grid min-h-[105px] w-full max-w-[310px] grid-cols-[58px_1fr_32px] items-center rounded-xl border border-white/50 p-2.5 shadow-xl transition hover:-translate-y-1 hover:border-[#78b82e] min-[781px]:grid-cols-[66px_1fr_34px] min-[781px]:p-3.5 ${team ? "bg-[linear-gradient(135deg,#0b3658f5,#051e34f5)]" : "bg-[linear-gradient(135deg,#064a2ff5,#04281ff5)]"}`}
    href={href ?? `mailto:cpl.cse@university.edu?subject=${team ? "Team" : "Player"}%20Registration`}
  >
    <i
      className={`grid size-12 place-items-center rounded-full text-2xl not-italic min-[781px]:size-[54px] ${team ? "bg-[#245a87] text-base" : "bg-[#65a428]"}`}
    >
      {team ? <FaUsers /> : <FaUser />}
    </i>
    <span>
      <b className="text-[17px] leading-[1.1]">{title}</b>
      <small className="mt-[7px] block text-[10px] leading-[1.4]">
        {children}
      </small>
    </span>
    <strong className="grid size-8 place-items-center rounded-full bg-white text-[21px] text-[#123249]">
      <FaArrowRight />
    </strong>
  </a>
);
export default RegistrationCard;
