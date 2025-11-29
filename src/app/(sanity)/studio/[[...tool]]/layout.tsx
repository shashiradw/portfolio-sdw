import { Metadata } from "next";

const metadata: Metadata = {
  title: "NextGen Portfolio CMS",
  description: "Content Management System",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
        {children}
      </body>
    </html>    
  );
}