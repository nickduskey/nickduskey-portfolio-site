import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import Clock from 'grommet/components/icons/base/Clock';

const CLASS_ROOT = "title-section";

export default function Title2() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-2">
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
        <Clock size="huge" colorIndex="grey-1" />
      </Box>
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Time to Market</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">I led an agile transformation at a publicly traded technology services firm.</Headline>
        <Box direction="row" responsive={false} align="center">
          <Value
            value={66}
            colorIndex="grey-1"
            size="xlarge"
            units="%"
          />
        </Box>
        <Heading className={`${CLASS_ROOT}__stat-desc`} tag="h4" strong={true}>
          reduction in time-to-market for new products.
        </Heading>
      </Box>
    </InfographicSection>
  );
};