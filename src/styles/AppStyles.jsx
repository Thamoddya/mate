import {Dimensions, StyleSheet} from 'react-native';
import {Fonts} from './fonts';

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  subContainer: {
    padding: 16,
  },
  HomeSubContainer: {
    padding: 16,
    marginTop: 16,
  },
});

export const SpaceStyles = StyleSheet.create({
  m4: {
    gap: 4,
  },
  m8: {
    gap: 8,
  },
  m16: {
    gap: 16,
  },
});

export const TextStyles = StyleSheet.create({
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Fonts.SFProDisplayBold,
  },
  H2: {
    fontSize: 22,
    lineHeight: 28,
    color: '#000',
    fontWeight: '700',
    letterSpacing: -0.3,
    fontFamily: Fonts.SFProDisplayBold,
  },
  H3: {
    fontSize: 18,
    lineHeight: 24,
    color: '#000',
    fontWeight: '500',
    letterSpacing: -0.3,
    fontFamily: Fonts.SFProTextMedium,
  },
  H4: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.SFProTextRegular,
  },
  H5: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.SFProTextRegular,
  },
  H6: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.SFProTextRegular,
  },
  H7: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    fontFamily: Fonts.SFProDisplayBold,
  },
  P: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.SFProTextRegular,
    lineHeight: 20,
  },
});

export const ScreenSizes = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
