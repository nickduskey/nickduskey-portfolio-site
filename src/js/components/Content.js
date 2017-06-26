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

export default class Content extends Component {
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

            <Tab title="Tab 1">
              <Box className="infographic__slide" full="horizontal">
                <span>A Tab component</span>
              </Box>
            </Tab>

            <Tab title="Tab 2">
              <Box className="infographic__slide">
                <span>Another Tab</span>
              </Box>
            </Tab>

          </Tabs>
        </InfographicSection>

        <Title2 />

        <InfographicSection className="infographic__section infographic__section--2"
          colorIndex="light-2">
          <Tabs responsive={false} justify="center">

            <Tab title="Tab 3">
              <Box className="infographic__slide" full="horizontal">
                <span>A Tab component</span>
              </Box>
            </Tab>

            <Tab title="Tab 4">
              <Box className="infographic__slide">
                <span>Another Tab</span>
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>

        <Title3 />

        <InfographicSection className="infographic__section infographic__section--3"
          colorIndex="light-1">
          <Tabs responsive={false} justify="center">
            <Tab title="Tab 5">
              <Box className="infographic__slide" full="horizontal">
                <span>A Tab component</span>
              </Box>
            </Tab>

            <Tab title="Tab 6">
              <Box className="infographic__slide">
                <span>Another Tab</span>
              </Box>
            </Tab>
          </Tabs>
        </InfographicSection>

        <End onEndClick={this._onEndClick} />
      </div>
    );
  }
};