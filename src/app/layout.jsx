import ReduxProvider from "@/redux-toolkit/ReduxProvider";
import "./globals.scss";
import { Toaster } from "sonner";

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
