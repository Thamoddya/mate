import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from './Colors';
import {Fonts} from './fonts';

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BLACK,
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: Fonts.SFProDisplayBold,
  },
  H2: {
    fontSize: 22,
    lineHeight: 28,
    color: '#FFF',
    fontWeight: '700',
    letterSpacing: -0.3,
    fontFamily: Fonts.SFProDisplayBold,
  },
  H3: {
    fontSize: 18,
    lineHeight: 24,
    color: '#FFF',
    fontWeight: '500',
    letterSpacing: -0.3,
    fontFamily: Fonts.SFProTextMedium,
  },
  H4: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: Fonts.SFProTextRegular,
  },
  H5: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: Fonts.SFProTextRegular,
  },
  H6: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: Fonts.SFProTextRegular,
  },
  H7: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    fontFamily: Fonts.SFProDisplayBold,
  },
  P: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: Fonts.SFProTextRegular,
    lineHeight: 20,
  },
});

export const ScreenSizes = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
