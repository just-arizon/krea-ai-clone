// app/layout.tsx
"use client";

import { useState, useEffect } from "react"; // Importing useState and useEffect
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { metadata, viewport } from "./metadata";
import ProgressBar from "@/components/progressbar"; // Import ProgressBar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true); // Track loading state

  // UseEffect hook to hide the progress bar once loading is complete
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false); // Set loading to false to hide the progress bar
    }, 3000); // Set a delay to match your progress (3 seconds in this case)
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Show the progress bar first */}
          <ProgressBar />
          <Navbar />
          
          {/* Only show content once loading is false */}
          {!loading && (
            <div className="relative flex flex-col h-fit">
              <main>{children}</main>
              <Footer />
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
