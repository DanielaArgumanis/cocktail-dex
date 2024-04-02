// @Icons
export { default as CosmopolitanIcon } from './cosmopolitan.svg?react';
export { default as GinTonicIcon } from './gin-tonic.svg?react';
export { default as MoonIcon } from './moon-icon.svg?react';
export { default as NegroniIcon } from './negroni.svg?react';
export { default as PinaColadaIcon } from './pina-colada.svg?react';
export { default as SunIcon } from './sun-icon.svg?react';

// @MUI
import styled from '@emotion/styled';

const SVGIconWrapper = styled.div<{
  size?: string;
}>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

type SVGIconProps = {
  icon: React.FunctionComponent;
  size?: string;
};

const SVGIcon: React.FC<SVGIconProps> = ({ icon: Icon, ...rest }) => {
  return (
    <SVGIconWrapper {...rest}>
      <Icon />
    </SVGIconWrapper>
  );
};

export default SVGIcon;
