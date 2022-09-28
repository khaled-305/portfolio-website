import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello 👋, my name is Chikeziem. I am an IT expert passionate about
          software development. Experienced in working with teams in different
          software development stages, ensuring a high-quality and fulfillment
          of business market needs.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
