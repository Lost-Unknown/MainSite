"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className=" gradient-back px-2 md:px-6 lg:px-10">
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default layout;
