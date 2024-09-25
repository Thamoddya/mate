import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import OnboardScreen from './src/Screens/common/OnboardScreen';
import SplashScreen from './src/Screens/common/SplashScreen';
import {store} from './src/store/store';
import {Colors} from './src/styles/Colors';
import {AppNavigationParams} from './src/types/commonNavigationParams';

const Stack = createNativeStackNavigator<AppNavigationParams>();

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerBackVisible: false,
  headerTitle: '',
  headerTintColor: Colors.PRIMARY_BLACK,
  headerStyle: {backgroundColor: Colors.PRIMARY_WHITE},
  headerShadowVisible: false,
  statusBarColor: Colors.PRIMARY_WHITE,
};

const backTitleEnable: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitle: '',
  headerShadowVisible: false,
  headerStyle: {backgroundColor: Colors.PRIMARY_WHITE},
  headerShown: true,
};

const disableHeader: NativeStackNavigationOptions = {
  headerShown: false,
};

const transludeStatusBar: NativeStackNavigationOptions = {
  statusBarTranslucent: true,
  statusBarColor: Colors.PRIMARY_WHITE,
};

const blackStatusBar: NativeStackNavigationOptions = {
  statusBarColor: Colors.PRIMARY_BLACK,
};

interface ScreenConfig {
  name: keyof AppNavigationParams;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const screens: ScreenConfig[] = [
  {
    name: 'Splash',
    component: SplashScreen,
    options: {
      ...ScreenOptions,
      statusBarTranslucent: true,
    },
  },
  {
    name: 'Onboard',
    component: OnboardScreen,
    options: {
      ...ScreenOptions,
      ...blackStatusBar,
      statusBarTranslucent: true,
    },
  },
];

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'fade',
          }}
          initialRouteName="Splash">
          {screens.map(({name, component, options}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
