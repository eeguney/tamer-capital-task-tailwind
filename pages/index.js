import Head from "next/head";
import Hero from "../components/Hero/Hero";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anasayfa - Ferhan Cihaner</title>
        <meta name="description" content="Anasayfa - Ferhan Cihaner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 lg:px-32">
        <Hero />
      </div>

      <SocialMediaLinks />
    </>
  );
}
