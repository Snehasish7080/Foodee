import {
  BlendMode,
  Canvas,
  fitbox,
  Group,
  ImageSVG,
  rect,
  Skia,
} from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { colors } from '../../utils/theme/colors';

type ExploreIconProps = {
  isFocused?: boolean;
};

const Icon = Skia.SVG.MakeFromString(
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
)!;

const ExploreIcon: React.FC<ExploreIconProps> = ({ isFocused }) => {
  const src = rect(0, 0, 20, 20);
  const dst = rect(0, 0, 16, 16);

  const paint = useMemo(() => Skia.Paint(), []);
  paint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(colors.grey.placeholder),
      BlendMode.SrcIn,
    ),
  );
  const focusedPaint = useMemo(() => Skia.Paint(), []);
  focusedPaint.setColorFilter(
    Skia.ColorFilter.MakeBlend(
      Skia.Color(colors.primary.main),
      BlendMode.SrcIn,
    ),
  );
  return (
    <Canvas style={{ width: 20, height: 20 }}>
      <Group
        layer={isFocused ? focusedPaint : paint}
        transform={fitbox('contain', src, dst)}>
        <ImageSVG svg={Icon} x={0} y={0} width={20} height={20} />
      </Group>
    </Canvas>
  );
};

export default ExploreIcon;
