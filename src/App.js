import "./App.css";
import styled from "styled-components";
import { Panel } from "components/panel";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledApp>


      <Panel />
    </StyledApp>
  );
}

export default App;
