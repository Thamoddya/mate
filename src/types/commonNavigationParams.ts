export type CommonNavigationParams = {
  Splash: undefined;
  Onboard: undefined;
  BottomTabNavigation: undefined;
};

export type AuthNavigationParams = {
  SignIn: undefined;
  VerificationDetails: undefined;
  SignUpSuccess: undefined;
  SignUp: undefined;
};

export type AppNavigationRoutes = {
  Home: undefined;
};
export type AppNavigationParams = CommonNavigationParams &
  AuthNavigationParams &
  AppNavigationRoutes;
