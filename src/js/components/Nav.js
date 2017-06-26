import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Headline from 'grommet/components/Headline';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';
import GrommetLogo from
  'grommet/components/icons/base/BrandGrommetOutline';

import Progress from './Progress';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);
  }

  _onClick() {
    if (this.props.progress >= 95) {
      this.setState({layerActive: true});
    }
  }

  _onLayerClose() {
    this.setState({layerActive: false});
  }

  render() {
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]:
          this.props.progress >= 95 || this.props.progress <= 0
      }
    );

    const navCta = (this.props.progress >= 95)
      ? <Anchor label={'Share'} icon={<Share />} reverse={true}
          onClick={this._onClick} primary={true} />
      : undefined;

    const layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true}
          align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for checking out my portfolio, I'm glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type="email"
              link="http://www.nickduskey.com/"
              title="Nick Duskey - Product Manager"
              text="Nick Duskey is helping businesses build smarter software that empowers both the users and the developers." />
              <SocialShare type="twitter"
              link="http://www.nickduskey.com/"
              title="Nick Duskey - Product Manager"
              text="@NickDuskey is helping businesses build smarter #software that empowers both the users and the developers." />
              <SocialShare type="facebook"
              link="http://www.nickduskey.com/" />
              <SocialShare type="linkedin"
              link="http://www.nickduskey.com/"
              title="Nick Duskey - Product Manager"
              text="Nick Duskey is helping businesses build smarter software that empowers both the users and the developers." />
            </div>
          </div>
        </Layer>
      </div>
    ) : undefined;
    return (
      <Header className={classes} direction="column" pad={{between:"none"}}
        align="start">
        {layer}
        <Box full="horizontal" direction="row" align="center" justify="between"
          responsive={false} colorIndex="light-1" pad="medium">
          <Menu
            responsive={true}
            label={<MenuIcon />}
            inline={true}
            direction="row"
          >
            <Anchor href="#">
              First Action
            </Anchor>
            <Anchor href="#">
              Second Action
            </Anchor>
            <Anchor href="#">
              Third Action
            </Anchor>
          </Menu>
          {navCta}
        </Box>
        <Progress progress={this.props.progress}/>
      </Header>
    );
  }
};
Nav.propTypes = {
  progress: PropTypes.number
};