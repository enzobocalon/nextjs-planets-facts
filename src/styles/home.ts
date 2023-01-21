import styled from 'styled-components';

export const MainContent = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    padding-inline: 1rem;
  }

  @media (max-width: 1024px) {
    margin-top: 3rem;

    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  `;
