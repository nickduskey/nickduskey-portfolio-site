import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const TagInspector = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='http://via.placeholder.com/350x350'
          heading='Tag Inspector'
          description='Scan your website for marketing tags, validate results.'
          link={<Anchor href='https://taginspector.com'
          label='Taginspector' />}
          contentPad='small' />
      </Box>
);

export default TagInspector;