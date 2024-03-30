export { default as CosmopolitanIcon } from './cosmopolitan.svg?react';
export { default as GinTonicIcon } from './gin-tonic.svg?react';
export { default as NegroniIcon } from './negroni.svg?react';
export { default as PinaColada } from './pina-colada.svg?react';

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
