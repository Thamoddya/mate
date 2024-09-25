import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {TextStyles} from '../../styles/AppStyles';
import {Colors} from '../../styles/Colors';

interface SplashScreenProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const isLogged = false;

  //MARK: useEffect
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    Platform.OS === 'android' &&
      StatusBar.setBackgroundColor(Colors.PRIMARY_BLACK);
    setTimeout(() => {
      //MARK: Navigation
      if (isLogged) {
        navigation.navigate('BottomTabNavigation');
      } else {
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'Onboard'}],
        // });
      }
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.splashText]}>MATE</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BLACK,
    flex: 1,
  },
  splashText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_WHITE,
    fontSize: 40,
  },
});
