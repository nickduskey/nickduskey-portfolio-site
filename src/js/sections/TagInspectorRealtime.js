import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const TagInspectorRealtime = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='http://via.placeholder.com/350x350'
          heading='Tag Inspector Realtime'
          description='Monitor marketing tag behavior in real time.'
          link={<Anchor href='https://taginspector.com/wp/realtime/'
          label='Tag Inspector Realtime' />}
          contentPad='small' />
      </Box>
);

export default TagInspectorRealtime;