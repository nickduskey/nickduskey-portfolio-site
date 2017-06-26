import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import LineChart from 'grommet/components/icons/base/LineChart';

const CLASS_ROOT = "title-section";

export default function Title3() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`,
    `${CLASS_ROOT}--column-reverse`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="neutral-1">
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Bottom Line</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">New product introductions in the past 2 years.</Headline>
        <Box direction="row" responsive={false} align="center" wrap={true}>
          <Value
            value={2}
            colorIndex="grey-1"
            size="xlarge"
            units="MM"
            icon={"$"}
          />
        </Box>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>in net new revenue</Heading>
      </Box>
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical:"medium"}}>
        <LineChart size="huge" colorIndex="light-1" />
      </Box>
    </InfographicSection>
  );
};