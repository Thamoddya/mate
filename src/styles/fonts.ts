export const Fonts = {
  SFProDisplayBlack: 'SF-Pro-Display-Black',
  SFProDisplayBold: 'SF-Pro-Display-Bold',
  SFProDisplayLight: 'SF-Pro-Display-Light',
  SFProTextBold: 'SF-pro-text-bold',
  SFProTextLight: 'SF-pro-text-light',
  SFProTextMedium: 'SF-pro-text-medium',
  SFProTextRegular: 'SF-pro-text-regular',
} as const;

export type FontName = keyof typeof Fonts;
