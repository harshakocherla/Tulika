import React, { PureComponent } from 'react';

import { Dimensions, WebView, Share, Image } from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Left,
  Right,
  Title,
  Button,
} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

export default class NewsItem extends PureComponent {
  constructor(props) {
    super(props);
    this._handleShare = this._handleShare.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleClose() {
    return this.props.navigation.goBack();
  }
  _handleShare() {
    const { url, title } = this.props.navigation.state.params,
      message = `${title}\n\nRead more @\n${url}\n\nshared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` },
    );
  }

  render() {
    const { url, title } = this.props.navigation.state.params;
    if (url !== undefined) {
      return (
        <Container
          style={{ margin: 16, marginBottom: 0, backgroundColor: '#ffffff' }}
        >
          <Header>
            <Left>
              <Button transparent onPress={this._handleClose}>
                <Image
                  resizeMode="center"
                  style={{ width: 18, height: 18 }}
                  source={require('../images/ic_close_white_18dp.png')}
                />
              </Button>
            </Left>
            <Body>
              <Title children={title} />
            </Body>
            <Right>
              <Button transparent onPress={this._handleShare}>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require('../images/ic_share_white_18dp.png')}
                />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={{ height: webViewHeight }}>
            <WebView
              onError={this._handleClose}
              startInLoadingState
              scalesPageToFit
              source={{ uri: url }}
            />
          </Content>
        </Container>
      );
    } else {
      return null;
    }
  }
}
