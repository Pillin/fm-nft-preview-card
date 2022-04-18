import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../theme";

export const H1 = styled(motion.h1)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-style: normal;
  word-wrap: normal;

  font-weight: 600;
  font-size: 22px;
  line-height: 28px;

  @media (min-width: 769px) {
  }
`;

export const H2 = styled(motion.h2)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.softBlue};
  font-style: normal;
  word-wrap: normal;

  font-weight: 300;
  font-size: 18px;
  line-height: 26px;

  @media (min-width: 769px) {
  }
`;

export const H3 = styled(motion.h3)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.cyan};
  font-style: normal;
  word-wrap: normal;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 769px) {
  }
`;

export const H4 = styled(motion.h4)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.softBlue};
  font-style: normal;
  word-wrap: normal;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 769px) {
  }
`;

export const P = styled(motion.p)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.softBlue};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 769px) {
  }
`;

export const Span = styled(motion.span)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  :hover {
    color: #00fff8;
  }

  @media (min-width: 769px) {
  }
`;
