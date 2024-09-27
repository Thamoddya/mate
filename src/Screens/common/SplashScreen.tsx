import {useFocusEffect} from '@react-navigation/native'; // Import useFocusEffect
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {TextStyles} from '../../styles/AppStyles';
import Colors from '../../styles/Colors';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const isLogged = false;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Reset opacity before triggering animation again
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      });

      const timeout = setTimeout(() => {
        if (isLogged) {
          navigation.navigate('BottomTabNavigation');
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'Onboard'}],
          });
        }
      }, 3000);

      return () => clearTimeout(timeout);
    }, [navigation]),
  );

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.PRIMARY_BLACK);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Text style={[styles.splashText, {opacity: fadeAnim}]}>
        Mate
      </Animated.Text>
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
