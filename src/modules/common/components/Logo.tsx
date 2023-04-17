import { Image, ImageProps } from '@chakra-ui/react';

import logoImage from '../assets/logo.svg';

type LogoProps = ImageProps;

export function Logo(props: LogoProps) {
  return <Image src={logoImage} alt="Dooo logo" {...props} />;
}
