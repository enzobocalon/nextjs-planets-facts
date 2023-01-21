import styled from 'styled-components';

interface Props {
  shouldRenderAsColumns: boolean
  isActive: boolean
  isClickable: boolean
}

export const BoxContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${({shouldRenderAsColumns}) => shouldRenderAsColumns ? 'column' : 'row'};
  align-items: ${({shouldRenderAsColumns}) => shouldRenderAsColumns ? 'flex-start' : 'center'};
  gap: 1rem;

  padding: 1rem;
  border: 1px solid ${({theme, isActive}) => isActive ? theme.backgroundColor : theme.borderColor};
  background-color: ${({theme, isActive}) => isActive ? theme.activeColor : 'transparent'};
  margin-bottom: 1rem;

  cursor: ${({isClickable}) => isClickable ? 'pointer' : 'auto'};
`;
