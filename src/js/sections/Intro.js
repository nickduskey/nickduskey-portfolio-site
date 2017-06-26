import React from 'react';

import InfographicSection from '../components/InfographicSection';
import StartButton from '../components/StartButton';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import User from 'grommet/components/icons/base/User';
import UserManager from 'grommet/components/icons/base/UserManager';
import UserFemale from 'grommet/components/icons/base/UserFemale';

export default function Intro () {
  return (
    <InfographicSection className="infographic__section infographic__section--start"
      colorIndex="light-1">
      <div className="infographic__section-header">
        <Headline size="large" strong={true}>Nick Duskey, Product Manager</Headline>
      </div>
      <Headline size="small">Bringing new products to life and empowering teams to make the best products possible.</Headline>
      <Box direction="row" full="horizontal" justify="center" align="center"
        pad={{vertical: "medium"}} responsive={false}>
        <UserManager size="xlarge" colorIndex="neutral-2" />
        <UserFemale size="xlarge" colorIndex="neutral-1" />
        <User size="xlarge" colorIndex="neutral-2" />
      </Box>
      <Footer justify="center" align="center">
        <StartButton text="scroll down to continue"/>
      </Footer>
    </InfographicSection>
  );
}