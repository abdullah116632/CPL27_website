import Image from "next/image";
import RegistrationCard from "./registration-card";
import MatchCard from "./match-card";
const container =
  "mx-auto w-[min(1450px,calc(100%-36px))] min-[781px]:w-[min(1450px,calc(100%-64px))]";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[715px] overflow-hidden text-white min-[781px]:h-[585px] min-[1100px]:h-[max(800px,min(50vw,950px))]"
    >
      <Image
        className="hidden object-cover object-right-top min-[781px]:block"
        src="/cricket-stadium-desktop.png"
        alt="Cricket equipment in a floodlit stadium"
        fill
        priority
        sizes="100vw"
      />
      <Image
        className="object-cover object-center min-[781px]:hidden"
        src="/cricket-stadium-mobile.png"
        alt="Cricket equipment in a floodlit stadium"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#011521fa_0%,#031827ed_25%,#03182780_48%,transparent_73%)] max-[780px]:bg-[linear-gradient(90deg,#011521fa_0%,#011521b5_70%,#01152160)]" />
      <div className={`${container} relative z-10 flex h-full items-center`}>
        <div className="w-full">
          <p className="text-[9px] tracking-[3px] text-[#d4dde3] min-[781px]:text-[10px]">
            &nbsp; CSE FACULTY PRESENTS
          </p>
          <h1 className="m-0 font-[Impact,Arial_Narrow,sans-serif] text-[47px] leading-[.92] tracking-[3px] [text-shadow:2px_2px_#000] min-[781px]:text-6xl min-[1100px]:text-7xl">
            CPL <em className="font-normal not-italic">-</em> CSE
          </h1>
          <h2 className="m-0 -skew-x-3 font-[Impact,Arial_Narrow,sans-serif] text-[31px] leading-none tracking-[3px] text-[#78b82e] [text-shadow:2px_2px_#000] min-[781px]:text-[37px] min-[1100px]:text-[50px]">
            PREMIER LEAGUE
          </h2>
          <div className="my-[18px] h-0.5 w-[90%] max-w-[390px] bg-[linear-gradient(90deg,#78b82e,#78b82e,transparent)] text-right leading-[1px]">
            ●
          </div>
          <p className="m-0 mb-1 text-base leading-[1.25] min-[781px]:text-lg">
            The Ultimate Cricket Showdown of the
            <br />
            <b className="text-[#78b82e]">CSE Faculty!</b>
          </p>
          <p className="m-0 text-xs leading-[1.4] min-[781px]:text-[13px]">
            Where talent meets teamwork and champions are made.
            <br />
            Represent. Compete. Conquer.
          </p>
          <div
            id="registration"
            className="mt-3.5 flex flex-col gap-[18px] min-[781px]:flex-row"
          >
            <RegistrationCard
              href="/player-registration"
              title={
                <>
                  PLAYER
                  <br />
                  REGISTRATION
                </>
              }
            >
              Register as an individual player
              <br />
              and get drafted by your team.
            </RegistrationCard>
            <RegistrationCard
              team
              href="/team-registration"
              title={
                <>
                  TEAM
                  <br />
                  REGISTRATION
                </>
              }
            >
              Register your team and
              <br />
              compete for glory.
            </RegistrationCard>
          </div>
          <MatchCard className="mt-6 hidden w-[475px] max-w-full min-[1100px]:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
