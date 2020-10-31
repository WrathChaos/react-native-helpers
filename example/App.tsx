import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {Card, Container} from 'react-native-card-collection';
import {
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid,
  isIPhoneNotchFamily,
  hasNotch,
  isIPhoneXsMax,
  numberFormat,
  getStatusBarHeight,
  normalizeText,
} from './build/dist/index';

const dim = Dimensions.get('window');

export default class App extends React.Component {
  renderDeviceInfoContainers() {
    return (
      <View>
        <Container title="Device OS" subtitle={isIOS ? 'iOS' : 'Android'} />
        <Container title="Screen Height" subtitle={ScreenHeight} />
        <Container title="Screen Width" subtitle={ScreenWidth} />
      </View>
    );
  }

  renderNotchContainers() {
    return (
      <View>
        <Container
          title="hasNotch?"
          subtitle={hasNotch() ? 'iPhone Notch Family' : 'Normal iPhone Family'}
        />
        <Container
          title="isIPhoneXsMax?"
          subtitle={
            isIPhoneXsMax(dim) ? 'YES! iPhone XsMax' : 'NOT iPhone XsMax'
          }
        />
        <Container
          title="getStatusBarHeight?"
          subtitle={getStatusBarHeight()}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Helpers</Text>
        <Card>{this.renderDeviceInfoContainers()}</Card>
        <View style={{marginTop: 24}}>
          <Card headerText="Notch Information">
            {this.renderNotchContainers()}
          </Card>
        </View>
        <View style={{marginTop: 24}}>
          <Card headerText="NumberFormat">
            <Container
              title="Default"
              subtitle={
                <Text style={{textAlign: 'center'}}>
                  {numberFormat(1093495)}
                </Text>
              }
            />
            <Container
              title="GBP"
              subtitle={
                <Text style={{textAlign: 'center'}}>
                  GBP:{' '}
                  {numberFormat(1093495, 'en', {
                    style: 'currency',
                    currency: 'GBP',
                  })}
                </Text>
              }
            />
            <Container
              title="JPY"
              subtitle={
                <Text style={{textAlign: 'center'}}>
                  JPY:{' '}
                  {numberFormat(50494134, 'ja', {
                    style: 'currency',
                    currency: 'JPY',
                  })}
                </Text>
              }
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleStyle: {
    fontSize: normalizeText(30),
    fontWeight: '700',
    paddingBottom: 36,
  },
});
