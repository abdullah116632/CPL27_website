import Image from "next/image";
import RegistrationCard from "./registration-card";
import CountdownCard from "./countdown-card";
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
      <div className={`${container} relative z-10 flex h-full items-start pt-[82px] min-[781px]:items-center min-[781px]:pt-0`}>
        <div className="w-full">
          <p className="m-0 mb-1 whitespace-nowrap text-[clamp(10px,3.3vw,18px)] leading-[1.25]">
            The Ultimate Cricket Showdown of the{" "}
            <b className="text-[#78b82e]">CSE Faculty!</b>
          </p>
          <h1 className="m-0 font-[Impact,Arial_Narrow,sans-serif] text-[47px] leading-[.92] tracking-[3px] [text-shadow:2px_2px_#000] min-[781px]:text-6xl min-[1100px]:text-7xl">
            CPL <em className="font-normal not-italic">-</em> CSE
          </h1>
          <h2 className="m-0 -skew-x-3 font-[Impact,Arial_Narrow,sans-serif] text-[31px] leading-none tracking-[3px] text-[#78b82e] [text-shadow:2px_2px_#000] min-[781px]:text-[37px] min-[1100px]:text-[50px]">
            PREMIER LEAGUE
          </h2>
          <p className="m-0 mt-1.5 flex items-center gap-2 text-[22px] tracking-[1px] text-[#d4dde3] min-[781px]:text-[26px] min-[1100px]:text-[35px]">
            Organized by
            <Image
              className="h-[42px] w-auto min-[781px]:h-[50px] min-[1100px]:h-16"
              src="/nirban-logo.png"
              alt="নির্বান ২০"
              width={770}
              height={429}
            />
          </p>
          <div className="my-[18px] h-0.5 w-[90%] max-w-[390px] bg-[linear-gradient(90deg,#78b82e,#78b82e,transparent)] text-right leading-[1px]">
            ●
          </div>
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
          <CountdownCard className="mt-6 w-[475px] max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
