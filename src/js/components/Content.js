import React, { Component } from 'react';

import scrollToTop from '../utils/scroll';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';

import InfographicSection from './InfographicSection';
import Title1 from '../sections/Title1';
import Title2 from '../sections/Title2';
import Title3 from '../sections/Title3';
import Intro from '../sections/Intro';
import End from '../sections/End';
import AdvancedSDWAN from '../sections/AdvancedSDWAN';
import Analyzely from '../sections/Analyzely';
import CincyBrewScene from '../sections/CincyBrewScene';
import NaaS from '../sections/NaaS';
import TagDeploy from '../sections/TagDeploy';
import TagInspector from '../sections/TagInspector';
import TagInspectorRealtime from '../sections/TagInspectorRealtime';

export default class Content extends Component {
  constructor(props) {
    super(props);

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.layout !== nextProps.layout) return true;
    else return false;
  }

  _onEndClick() {
    scrollToTop.scroll(200);
  }

  render() {
    return (
      <div>
      <Intro />
        <Title1 />

        <InfographicSection className="infographic__section infographic__section--1"
          colorIndex="light-1">
          <Tabs responsive={false} justify="center">

            <Tab title="CincyBrewScene">
              <Box className="infographic__slide" full="horizontal" align="center" appCentered={true}>
                <CincyBrewScene />
              </Box>
            </Tab>

            <Tab title="Tag Deploy">
              <Box className="infographic__slide" full="horizontal" align="center" appCentered={true}>
                <TagDeploy />
              </Box>
            </Tab>

          </Tabs>
        </InfographicSection>

        <Title2 />

        <InfographicSection className="infographic__section infographic__section--2"
          colorIndex="light-2">
          <Tabs responsive={false} justify="center">

            <Tab title="Network as a Service">
              <Box className="infographic__slide" full="horizontal" align="center" appCentered={true}>
                <NaaS />
              </Box>
            </Tab>

            <Tab title="Advanced SD-WAN">
              <Box className="infographic__slide">
                <AdvancedSDWAN />
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>

        <Title3 />

        <InfographicSection className="infographic__section infographic__section--3"
          colorIndex="light-1">
          <Tabs responsive={false} justify="center">

            <Tab title="Analyze.ly">
              <Box className="infographic__slide" full="horizontal" align="center" appCentered={true}>
                <Analyzely />
              </Box>
            </Tab>

            <Tab title="Tag Inspector">
              <Box className="infographic__slide">
                <TagInspector />
              </Box>
            </Tab>

            <Tab title="Tag Inspector Realtime">
              <Box className="infographic__slide">
                <TagInspectorRealtime />
              </Box>
            </Tab>

          </Tabs>
        </InfographicSection>
        <End onEndClick={this._onEndClick} />
      </div>
    );
  }
};