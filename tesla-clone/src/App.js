import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styles/Themes";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        {/* <Header /> */}
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
