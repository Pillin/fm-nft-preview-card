import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../theme";
import Image from "./Image";
import { ReactComponent as Etherum } from "../icons/icon-ethereum.svg";
import { ReactComponent as Clock } from "../icons/icon-clock.svg";
import { ReactComponent as View } from "../icons/icon-view.svg";
import { H1, H2, H3, H4, P, Span } from "./Typography";

const Container = styled(motion.section)<{ theme?: Theme }>`
  max-width: 350px;
  width: 100%;
  height: 596px;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 21px 0px;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlueC};
`;

const HR = styled(motion.hr)<{ theme?: Theme }>`
  border: ${({ theme }) => `1px solid ${theme.colors.neutral.veryDarkBlueL}`};
`;

const Row = styled(motion.section)<{ justifyContent?: string }>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 0px 16px;
  justify-content: ${({ justifyContent }) => justifyContent};
`;
const ContainerVariant = {
  initial: { y: -500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 }
};

const ImageVariants = {
  initial: {},
  animate: {},
  beforeHover: {},
  hover: {}
};

const IconVariants = {
  beforeHover: {
    opacity: 0
  },
  initial: {},
  animate: {},
  hover: {
    opacity: 0.5
  }
};

const TextVariant = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 500, opacity: 0 },
  hover: {
    color: "#00FFF8"
  }
};

const TextAnimation = {
  variants: TextVariant,
  initial: "initial",
  animate: "animate",
  exit: "exit"
};

const IconContainer = styled(motion.section)`
  background: #00fff8;
  position: absolute;
  z-index: 2;
  mix-blend-mode: normal;
  opacity: 0.5;
  width: 100%;
  border-radius: 8px;
  opacity: 0;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = () => {
  return (
    <Container
      variants={ContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Row initial="beforeHover" whileHover="hover">
        <Image
          animations={{
            variants: ImageVariants,
            initial: "initial",
            whileHover: "hover"
          }}
          style={{ borderRadius: "8px" }}
          mobile="/images/image-equilibrium.jpg"
          desktop="/images/image-equilibrium.jpg"
        />

        <IconContainer
          initial="beforeHover"
          whileHover="hover"
          variants={IconVariants}
        >
          <View />
        </IconContainer>
      </Row>

      <H1 {...TextAnimation} whileHover="hover">
        Equilibrium #3429
      </H1>
      <H2 {...TextAnimation}>
        Our Equilibrium collection promotes balance and calm.
      </H2>

      <Row justifyContent="space-between">
        <H3 {...TextAnimation}>
          <Etherum />
          {`  0.041 ETH`}
        </H3>
        <H4 {...TextAnimation}>
          <Clock />
          {`  3 days left`}
        </H4>
      </Row>
      <HR />

      <Row justifyContent="flex-start">
        <Image
          style={{
            borderRadius: "50%",
            border: "1px solid white",
            width: "33px"
          }}
          mobile="/images/image-avatar.png"
          desktop="/images/image-avatar.png"
        />
        <P {...TextAnimation}>
          Creation of <Span>Jules Wyven</Span>
        </P>
      </Row>
    </Container>
  );
};

export default Card;
