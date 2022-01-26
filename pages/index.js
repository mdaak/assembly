import Head from "next/head";
import Footer from "../Components/Footer.js";
import HeroSection from "../Components/HeroSection.js";
import TextWithBtn from "../Components/TextWithBtn.js";


export default function Home() {
  return (
    <div>
      <Head>
        <title>assembly</title>
        <meta name="keywords" content="assembly" />
      </Head>
      <HeroSection/>
      <TextWithBtn/>
      <Footer/>
    </div>
  );
}
