const container =
  "mx-auto w-[min(1450px,calc(100%-36px))] min-[781px]:w-[min(1450px,calc(100%-64px))]";
const navItems = [
  "Home",
  "About",
  "Schedule",
  "Teams",
  "Registration",
  "Contact",
];
const Heading = ({ children }) => (
  <h3 className="mb-3 font-[Impact,Arial_Narrow,sans-serif] text-base tracking-[.7px] text-[#78b82e]">
    {children}
  </h3>
);
const SiteFooter = () => (
  <footer
    id="contact"
    className="bg-[linear-gradient(120deg,#071d2e,#021420)] text-[#d6dfe5]"
  >
    <div
      className={`${container} grid gap-8 py-[27px] pb-[22px] min-[781px]:grid-cols-2 min-[1100px]:grid-cols-[1.4fr_.8fr_1fr_1.35fr]`}
    >
      <div className="border-b border-white/10 pb-4 min-[781px]:border-0">
        <Heading>CPL - CSE PREMIER LEAGUE</Heading>
        <p className="m-0 max-w-[300px] text-[11px] leading-[1.7]">
          An initiative by the CSE Department to bring together passion,
          performance and sportsmanship. Let the best team win!
        </p>
        <div className="mt-3 text-lg">ⓕ　◎　𝕏　▶　ⓘ</div>
      </div>
      <div className="border-b border-white/10 pb-4 min-[781px]:border-0">
        <Heading>QUICK LINKS</Heading>
        {navItems.map((item) => (
          <a
            className="mb-1.5 block text-[11px] hover:text-[#78b82e]"
            href={`#${item.toLowerCase()}`}
            key={item}
          >
            › &nbsp;{item}
          </a>
        ))}
      </div>
      <div className="border-b border-white/10 pb-4 min-[781px]:border-0">
        <Heading>CONTACT US</Heading>
        <p className="mb-2 text-[11px] leading-[1.7]">
          ✉ &nbsp;cpl.cse@university.edu
        </p>
        <p className="mb-2 text-[11px] leading-[1.7]">
          ⌕ &nbsp;+91 98765 43210
        </p>
        <p className="text-[11px] leading-[1.7]">
          ⌖ &nbsp;CSE Department,
          <br />　 University Campus
        </p>
      </div>
      <div id="updates">
        <Heading>STAY UPDATED</Heading>
        <p className="m-0 max-w-[300px] text-[11px] leading-[1.7]">
          Subscribe to get the latest updates, match schedules and
          announcements.
        </p>
        <form className="mt-[13px] flex h-[37px]">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="min-w-0 flex-1 rounded-l-md border-0 px-3 text-xs text-[#122030]"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className="rounded-r-md bg-[#639d28] px-4 text-[11px] text-white hover:bg-[#73ae32]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="bg-[linear-gradient(90deg,#559423,#75ae30)] py-[11px] text-[11px]">
      <div
        className={`${container} flex flex-col items-center gap-1.5 text-center min-[781px]:flex-row min-[781px]:justify-between`}
      >
        <span>© 2025 CPL - CSE Premier League. All Rights Reserved.</span>
        <span>Play Fair. Play Hard. Play Together.</span>
      </div>
    </div>
  </footer>
);
export default SiteFooter;
