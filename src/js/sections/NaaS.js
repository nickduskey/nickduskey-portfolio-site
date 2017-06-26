import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const NaaS = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='http://via.placeholder.com/350x350'
          heading='Network as a Service'
          description='Fully managed enterprise network offered as a service.'
          link={<Anchor href='https://www.cincinnatibell.com/business/internet/managed-cloud-network'
          label='Network as a Service' />}
          contentPad='small' />
      </Box>
);

export default NaaS;