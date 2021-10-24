import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundations/Text';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonWrapper = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  
  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('right')}
  ${propToStyle('order')}
  ${propToStyle('padding')}
  ${propToStyle('flexGrow')}
  ${propToStyle('flexDirection')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

function Button({
  href, children, onClick, ...props
}) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
  onClick: () => {},
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export { Button as default };
