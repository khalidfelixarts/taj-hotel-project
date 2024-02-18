import ReduxProvider from "@/redux-toolkit/ReduxProvider";
import "./globals.scss";
import { Toaster } from "sonner";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "Taj Hotels",
  description: "Luxury Hotels and Resorts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Toaster richColors position="bottom-right" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
