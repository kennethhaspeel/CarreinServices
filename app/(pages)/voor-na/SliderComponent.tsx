import { StaticImageData } from 'next/image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export const SliderComponent = ({foto_voor,foto_na}:{foto_voor:StaticImageData,foto_na:StaticImageData}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={foto_voor.src} srcSet={foto_voor.src} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={foto_na.src} srcSet={foto_na.src} alt="Image two" />}
    />
  );
};


