import React, { Component } from 'react';

import InfographicSection from '../components/InfographicSection';
import EndButton from '../components/EndButton';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Group from 'grommet/components/icons/base/Group';

export default class End extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactModalVisible: false,
      contact: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false,
      thankYou: false,
      error: {
        status: false,
        message: ''
      }
    }

    this._handleChange = this._handleChange.bind(this);
    this._onContactClick = this._onContactClick.bind(this);
    this._onContactSubmit = this._onContactSubmit.bind(this);
    this._onContactClose = this._onContactClose.bind(this);
  }

  _onContactClick() {
    this.setState({
      contactModalVisible: true
    });
  }

  _handleChange(event) {
    const field = event.target.name;
    const contact = this.state.contact;
    contact[field] = event.target.value;

    this.setState({
      contact
    });
  }

  _onContactSubmit(event) {
    event.preventDefault();

    this.setState({
      submitting: true
    });

    const formData = this.state.contact;
    console.log('formData:', formData);

    fetch('https://formspree.io/me@nickduskey.com', {
      headers: new Headers({
        Accept: 'application/json'
      }),
      method: 'post',
      body: new FormData(document.getElementById('contact-form'))
    }).then((res) => {
      if (res.status === 200) {
        this.setState({
          submitting: false,
          thankYou: true,
          contact: {
            name: '',
            email: '',
            message: ''
          }
        })
      } else {
        this.setState({
          error: {
            status: true,
            message: 'Oops, something went wrong.'
          }
        })
      }
    })
    console.log('contactInput:', this.state.contact);
  }

  _onContactClose() {
    this.setState({
      contactModalVisible: false
    });
  }

  render() {
    const contactModal = (this.state.contactModalVisible) ? (
      <div className="contact-modal">
        <Layer closer={true}
          flush={false}
          onClose={this._onContactClose}>
          <Box full="horizontal" align="center" appCentered={true}>
            <Form compact={false} id="contact-form">
              <Header>
                <Heading>
                  Get in touch
                </Heading>
              </Header>
              <FormField>
                <TextInput
                  id="name"
                  name="name"
                  value={this.state.contact.name}
                  onDOMChange={this._handleChange}
                  placeHolder="Your name"
                />
              </FormField>
              <FormField>
                <TextInput
                  id="email"
                  name="email"
                  value={this.state.contact.email}
                  onDOMChange={this._handleChange}
                  placeHolder="Your email address"
                />
              </FormField>
              <FormField>
                <textarea
                  id="message"
                  name="message"
                  value={this.state.contact.message}
                  onChange={this._handleChange}
                  placeholder="Your message"
                />
              </FormField>
              <Footer pad={{"vertical": "medium"}}>
                <Button label="Submit"
                  type="submit"
                  primary={true}
                  onClick={this._onContactSubmit} />
              </Footer>
            </Form>
          </Box>
        </Layer>
      </div>
    ) : undefined;
    return (
      <div id="contact-section">
        <InfographicSection className="infographic__section infographic__section--end"
          colorIndex="light-2">
          {contactModal}
          <Box direction="row" justify="center" align="center">
            <Box pad="large" alignSelf="start">
              <Group size="huge" colorIndex="neutral-2" />
            </Box>
            <Box>
              <Headline size="large">Let me know if you like what you saw here.</Headline>
              <Button onClick={this._onContactClick} label="Get in touch"
                primary={true} />
            </Box>
          </Box>
          <EndButton onClick={this.props.onEndClick}/>
        </InfographicSection>
      </div>
    );
  };
};