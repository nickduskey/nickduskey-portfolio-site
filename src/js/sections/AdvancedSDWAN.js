import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const AdvancedSDWAN = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='images/sdwan.png'
          heading='Advanced SD-WAN'
          description='Cutting edge Software-Defined Wide Area Network provided as a service.'
          link={<Anchor href='http://cbbconnect.com/sdwan/'
          label='Advanced SD-WAN' />}
          contentPad='small' />
      </Box>
);

export default AdvancedSDWAN;