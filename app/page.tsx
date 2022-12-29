"use client";

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { Container } from "../components/container";
import FeaturesSection from "../components/Sections/features/features-section";
import HeroSection from "../components/Sections/hero-section";
import JoinWaitListSection from "../components/Sections/join-waitlist/join-waitlist-section";
import SneakPeakSection from "../components/Sections/sneak-peak/sneak-peak-section";

export default function Homepage() {
  useEffect(() => {
    mixpanel.init("8b643d48491a13461e65525a8a2829fe");
    mixpanel.track("page-load");
  }, []);

  return (
    <div className="overflow-hidden">
      <Container className="py-[6.4rem]">
        <HeroSection />
        <FeaturesSection />
        <SneakPeakSection />
        <JoinWaitListSection />
      </Container>
    </div>
  );
}
