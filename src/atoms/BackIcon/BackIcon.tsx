import {
  BlendMode,
  Canvas,
  Group,
  ImageSVG,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {colors} from '../../utils/theme/colors';

const Icon = Skia.SVG.MakeFromString(
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 12L8 17M3 12L8 7M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
)!;

type BackIconProps = {
  color?: string;
};
const BackIcon = ({color = colors.grey.main}: BackIconProps) => {
  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(Skia.Color(color), BlendMode.SrcIn),
  );

  return (
    <Canvas
      style={{
        width: 24,
        height: 24,
      }}>
      <Group layer={paint}>
        <ImageSVG svg={Icon} x={0} y={0} />
      </Group>
    </Canvas>
  );
};

export default BackIcon;
