import { useCallback, useState } from "react";
import { AppContainer } from "./components/AppContainer/app.style";
import { MainSection } from "./components/MainSection/main.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/Button/button.style";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const opositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <AppContainer>
          <MainSection>
            <h1>Você está no {currentTheme} mode</h1>
            <Button onClick={() => setCurrentTheme(opositeTheme())}>
              Trocar para o {opositeTheme()} mode
            </Button>
          </MainSection>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
