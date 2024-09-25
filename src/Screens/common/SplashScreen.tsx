import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { ScreenStyles } from '../../styles/AppStyles';

interface SplashScreenProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const isLogged = false;

  //MARK: useEffect
  useEffect(() => {
    setTimeout(() => {
      //MARK: Navigation
      if (isLogged) {
        navigation.navigate('BottomTabNavigation');
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Onboard'}],
        });
      }
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={[ScreenStyles.container, styles.container]}>
      {/* <LogoMain /> */}
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
