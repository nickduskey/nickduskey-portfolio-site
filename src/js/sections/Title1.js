import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import CloudSoftware from 'grommet/components/icons/base/CloudSoftware';
import InfographicSection from '../components/InfographicSection';

const CLASS_ROOT = "title-section";

export default function Title1 () {
  const classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`,
    `${CLASS_ROOT}--column-reverse`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-3">
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>What have I done?</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">I've helped global organizations launch better products faster.</Headline>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>Between 2013 and 2016</Heading>
        <Box direction="row" responsive={false} align="center" wrap={true}>
          <Value
            value={5}
            colorIndex="grey-1"
            size="large"
          />
        </Box>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>New S/P/IaaS products launched.</Heading>
      </Box>
      <Box pad={{vertical: "medium", between: "medium"}} direction="column"
         className={`${CLASS_ROOT}__col-1`}justify="center">
        <CloudSoftware size="huge" colorIndex="grey-1" />
      </Box>
    </InfographicSection>
  );
};