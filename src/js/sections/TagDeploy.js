import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const TagDeploy = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='images/tagdeploy.jpg'
          heading='Tag Deploy'
          description='Continuous integration for Google Tag Manager.'
          link={<Anchor href='http://tagdeploy.com/'
          label='Tag Deploy' />}
          contentPad='small' />
      </Box>
);

export default TagDeploy;