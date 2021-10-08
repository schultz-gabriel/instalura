import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export const TextStyleVariantsMap = {
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
  subTitle: css`
  font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
`,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
`,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  ${propToStyle('opacity')}
`;

export default function Text({
  tag, variant, children, href, cmsKey, ...props
}) {
  const websitePageContext = React.useContext(WebsitePageContext);

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {componentContent}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {componentContent}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: undefined,
};
