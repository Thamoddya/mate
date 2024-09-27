import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import ThemedButton from '../../components/buttons/ThemeButton';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import PasswordInputField from '../../components/inputs/PasswordInputField';
import {AuthFunctions} from '../../functions/authFunctions';
import {AppDispatch, RootState} from '../../store/store';
import {TextStyles} from '../../styles/AppStyles';
import Colors from '../../styles/Colors';
import {AppNavigationParams} from '../../types/commonNavigationParams';

interface SignUpScreenProps extends AppNavigationParams {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {firstName, lastName, password, email, confirmPassword} = useSelector(
    (state: RootState) => state.auth,
  );

  // MARK: - Lifecycle
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }, []),
  );
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, [navigation]);

  // MARK: - Functions

  return (
    <ImageBackground
      source={require('../../assets/images/bgImg2.png')}
      style={styles.image}>
      <KeyboardAwareScrollView contentContainerStyle={[styles.safeView]}>
        <Text style={[styles.MainText]}>Create an account</Text>
        <Text style={[styles.subText]}>
          Fill in your details to get started.
        </Text>

        <View style={[styles.secondContainer]}>
          <CustomTextInput
            placeholder="Eg.John"
            keyboardType="default"
            label="First Name"
            value={firstName}
            onChangeText={(text: string) =>
              dispatch({type: 'auth/setFirstName', payload: text})
            }
          />
          <CustomTextInput
            placeholder="Eg. Doe"
            keyboardType="default"
            label="Last Name"
            value={lastName}
            onChangeText={(text: string) =>
              dispatch({type: 'auth/setLastName', payload: text})
            }
          />
          <CustomTextInput
            placeholder="Eg.example@example.com"
            keyboardType="email-address"
            label="Email"
            value={email}
            onChangeText={(text: string) =>
              dispatch({type: 'auth/setEmail', payload: text})
            }
            CustomProps={{
              autoCapitalize: 'none',
              autoComplete: 'email',
            }}
          />
          <PasswordInputField
            placeholder="*******"
            label="Password"
            value={password}
            onChangeText={(text: string) =>
              dispatch({type: 'auth/setPassword', payload: text})
            }
          />
          <PasswordInputField
            placeholder="*******"
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={(text: string) =>
              dispatch({type: 'auth/setConfirmPassword', payload: text})
            }
          />
        </View>
        <ThemedButton
          title="Sign Up"
          onPress={() => AuthFunctions.signUpProcess(navigation)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={[styles.subText, {textAlign: 'center', marginTop: 16}]}>
            Already have an account?{' '}
            <Text style={{color: Colors.PRIMARY_WHITE, fontWeight: 'bold'}}>
              Sign In
            </Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  MainText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_WHITE,
  },
  subText: {
    ...TextStyles.P,
    color: Colors.GRAY_300,
    textAlign: 'left',
  },
  secondContainer: {
    marginTop: 16,
  },
});
