import "@/assets/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/toaster";
import { ThemeProvider } from "@/app/providers/theme-provider";

export const metadata = {
  icons: {
    icon: "/images/logo.svg",
  },
};

const themeScript = `
(function(){
  var k='theme',v=localStorage.getItem(k);
  if(v==='dark'||(!v&&window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark');
  else
    document.documentElement.classList.remove('dark');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
