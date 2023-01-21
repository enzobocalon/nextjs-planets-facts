import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 350px;

  @media (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5%;

    > * {
      flex: 1;
      max-width: 50%;
    }
}

  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 1rem;

    > * {
      max-width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
`;

export const Title = styled(motion.h1)`
  font-size: 5rem;
  font-family: ${({theme}) => theme.titleFont};
  text-transform: uppercase;
`;

export const Description = styled.p`
  line-height: 150%;
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;

export const Source = styled.p`
  margin-block: 1.5rem;
  font-size: 1rem;
  opacity: .5;

  a {
    color: inherit;
    font-weight: bold;
    margin-left: 8px;

    img {
      margin-left: 4px;
    }
  }
`;
