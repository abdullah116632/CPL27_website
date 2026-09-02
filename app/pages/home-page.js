import Hero from "../components/hero";
import TournamentInfo from "../components/tournament-info";
import SiteFooter from "../components/site-footer";
const navItems = ["Home", "About", "Schedule", "Teams", "Registration", "Contact"];
const container = "mx-auto w-[min(1450px,calc(100%-36px))] min-[781px]:w-[min(1450px,calc(100%-64px))]";
const Navigation = () => <header className="absolute inset-x-0 top-0 z-20 h-[66px] border-b border-white/15 bg-[#021522f5] text-white min-[781px]:h-[76px]"><div className={`${container} flex h-full items-center justify-between`}><a className="flex items-center gap-2.5" href="#home"><i className="grid size-[42px] place-items-center border border-dashed border-[#b7c0c8] not-italic min-[781px]:size-[46px]">🏏</i><span><b className="block text-xl">CPL</b><small className="block text-[8px] tracking-[1px] text-[#78b82e]">CSE PREMIER LEAGUE</small></span></a><nav className="hidden h-full items-center gap-6 min-[1050px]:flex min-[1200px]:gap-11">{navItems.map((item,index)=><a className={`relative grid h-full place-items-center text-sm hover:text-[#78b82e] ${index===0?"text-[#78b82e] after:absolute after:bottom-[15px] after:h-0.5 after:w-[38px] after:bg-[#78b82e]":""}`} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav><a className="hidden rounded-md bg-[#639d28] px-5 py-3 text-[13px] hover:bg-[#73ae32] min-[781px]:block" href="#updates">Get Updates ♧</a><details className="relative min-[1050px]:hidden"><summary className="cursor-pointer list-none text-2xl">☰</summary><nav className="absolute right-0 top-10 w-52 border border-white/20 bg-[#051b2b] p-2 shadow-2xl">{navItems.map(item=><a className="block border-b border-white/10 p-3 text-sm" href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav></details></div></header>;
const HomePage = () => (
    <main className="overflow-hidden bg-white text-[#122030]">
      <Navigation />
      <Hero />
      <TournamentInfo />
      <SiteFooter />
    </main>
  );

export default HomePage;
