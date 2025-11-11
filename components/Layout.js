import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "VulnX Security" }) {
  return (
    <div className="min-h-screen flex flex-col bg-base text-text">
      <Head>
        <title>{title}</title>
        <meta name="og:site_name" content="VulnX Security" />
      </Head>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

