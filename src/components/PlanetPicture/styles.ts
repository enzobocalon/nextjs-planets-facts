import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  position: relative;
  min-height: 350px;

  img {
    width: 100%;
  }
`;

export const Geology = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 150px;
`;
