import styled from 'styled-components';

const Line = styled('span')`
  display: inline-block;
  font-size: ${({ fontSize }) => fontSize || 14}px;
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? `${letterSpacing}px` : 'normal')};
  text-decoration: ${({ lineThrough }) => (lineThrough ? 'line-through' : 'none')};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color, theme }) => color || theme.primary};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
`;

export default Line;
