import {useFocusEffect} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScreenStyles, TextStyles} from '../../styles/AppStyles';
import {Colors} from '../../styles/Colors';

const OnboardScreen = () => {
  // MARK: - Refs
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const insets = useSafeAreaInsets();
  //MARK: Lifecycle
  useFocusEffect(
    React.useCallback(() => {
      actionSheetRef.current?.setModalVisible(true);
    }, []),
  );

  // MARK: - Component
  const CustomActionSheet: React.FC = () => {
    return (
      <ActionSheet
        indicatorStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.30)',
          marginTop: 20,
        }}
        gestureEnabled={true}
        safeAreaInsets={insets}
        drawUnderStatusBar={false}
        //Top node of the ActionSheet
        animated={true}
        closable={false}
        enableGesturesInScrollView={true}
        headerAlwaysVisible={true}
        keyboardHandlerEnabled={true}
        overdrawEnabled={true}
        backgroundInteractionEnabled={false}
        overlayColor="transparent"
        elevation={0}
        statusBarTranslucent={true}
        containerStyle={{
          backgroundColor: 'rgba(25, 25, 25, 0.60)',
          height: Dimensions.get('window').height / 2,
        }}
        ref={actionSheetRef}>
        <View style={[styles.transparentActionSheet]}>
          <Text style={[styles.mainText]}>Get started</Text>
          <Text style={[styles.subText]}>
            Sign up today and have access to all the features of the app.
          </Text>
          <View style={{flexGrow: 1}} />
          <Pressable>
            <Image
              style={[styles.btnImage]}
              source={require('../../assets/images/onboardBtn.png')}
            />
          </Pressable>
          <View style={{flexGrow: 1}} />
        </View>
      </ActionSheet>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container, styles.mainContainer]}>
      <Image
        style={[styles.image]}
        source={require('../../assets/images/onboard.png')}
      />
      {<CustomActionSheet />}
    </SafeAreaView>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  transparentActionSheet: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 10,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_WHITE,
    textAlign: 'center',
  },
  subText: {
    ...TextStyles.H6,
    color: Colors.GRAY_500,
    textAlign: 'center',
  },
  btnImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
});
