import { View, Text } from 'react-native';
import styled from 'styled-components';
import { COLORS, SIZES } from '.';

export const Container = styled(View)({
  flex: 1,
});

export const CenterItems = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled(Text)({
  fontSize: SIZES.FONT_32,
  color: COLORS.TEXT,
});

export const SubTitle = styled(Text)({
  fontSize: SIZES.FONT_30,
  color: COLORS.TEXT,
});

export const Description = styled(Text)({
  fontSize: SIZES.FONT_16,
  color: COLORS.TEXT,
  marginTop: 20,
  width: 240,
});

export const HeaderText = styled(Text)({
  fontSize: SIZES.FONT_20,
  color: COLORS.TEXT,
});

export const AppText = styled(Text)({
  fontSize: SIZES.FONT_16,
  color: COLORS.TEXT,
});
