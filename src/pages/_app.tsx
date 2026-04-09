import "@/styles/globals.css";
import AppShell from "@/components/layouts/AppShell";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
