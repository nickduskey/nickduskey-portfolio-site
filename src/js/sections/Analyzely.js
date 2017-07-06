import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const Analyzely = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='images/analyzely.jpg'
          heading='Analyze.ly'
          description='Automatically upload third party data to Google Analytics.'
          link={<Anchor href='http://analyze.ly/'
          label='Analyze.ly' />}
          contentPad='small' />
      </Box>
);

export default Analyzely;