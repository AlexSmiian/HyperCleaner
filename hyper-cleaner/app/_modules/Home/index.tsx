import CenteredContainer from "@/app/_ui/CenteredContainer";
import Hero from "@/app/_components/Home/Hero";
import WhatYouGet from "@/app/_components/Home/WhatYouGet";
import Technology from "@/app/_components/Home/Technology";
import AboutUs from "@/app/_components/Home/AboutUs";
import HowItWork from "@/app/_components/Home/HowItWork";
import Footer from "@/app/_components/Home/Footer";
import OurUsers from "@/app/_components/Home/OurUsers";

export default function Home() {
    return (
      <CenteredContainer elementType={'main'}>
          <Hero />
          <WhatYouGet />
          <Technology />
          <OurUsers />
          <AboutUs />
          <HowItWork />
          <Footer />
      </CenteredContainer>
    );
}
