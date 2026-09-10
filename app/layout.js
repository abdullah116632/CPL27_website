import "./globals.css";
export const metadata = {
  title: "CSE Premier League",
  description: "University cricket tournament of the CSE Department.",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
