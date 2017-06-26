import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

const CincyBrewScene = () => (
  <Box direction="row" justify="center" full="horizontal" align="center">
        <Card thumbnail='http://via.placeholder.com/350x350'
          heading='CincyBrewScene'
          description="Use machine learning to plan a brewery crawl, we'll even call an Uber for you."
          link={<Anchor href='http://www.hackathon.io/cincybrewscene'
          label='CincyBrewScene at hackathon.io' />}
          contentPad='small' />
      </Box>
);

export default CincyBrewScene;