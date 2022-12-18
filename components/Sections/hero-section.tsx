"use client";

import { Button, IconWrapper } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

const HeroSection = () => {
  return (
    <Hero>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0"
        href="/"
        variant="secondary"
        size="small"
      >
        Dashlit 1.0 almost ready. Subscribe Now!
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in  pb-6 opacity-0 [--animation-delay:200ms]">
        Dashlit is the best
        <br className="hidden md:block" /> browser productivity dashboard.
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Best way to manage your links, todo, customize you browser home screen,
        <br className="hidden md:block" /> manage your meetings, mails and much
        more.
      </HeroSubtitle>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        href="https://app.dashlit.com/"
        variant="primary"
        size="large"
      >
        Get Started{" "}
        <IconWrapper>
          <ChevronIcon />
        </IconWrapper>
      </Button>
      <HeroImage />
    </Hero>
  );
};

export default HeroSection;
