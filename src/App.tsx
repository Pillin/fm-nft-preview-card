import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Card from "./components/Card";
import { Theme } from "./theme";

const Main = styled(motion.main)<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${(props: { theme?: Theme }) =>
    props.theme?.colors.neutral.veryDarkBlueM};
`;

export default function App() {
  return (
    <Main>
      <Card />
    </Main>
  );
}
