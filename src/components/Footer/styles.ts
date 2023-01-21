import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-inline: 1rem;

    > div { // Custom Box
      padding-block: 0;
      width: 100%;
      max-width: 255px;

      span {
        padding-top: 1.5rem;
        opacity: .5;
        font-weight: bold;
      }

      p {
        padding-bottom: 1.5rem;
        font-size: 2.25rem;
        font-family: ${({theme}) => theme.titleFont};
        font-weight: bold;
        text-transform: uppercase;
      }
    }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      max-width: 100%;
    }
  }
`;
