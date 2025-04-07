import Navbar from ".././Components/Navbar";
export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
          {children}
        </body>
      </html>
    );
  }