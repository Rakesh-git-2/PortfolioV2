import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const theme = themes.light;
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={theme.secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={theme} />
            </CursorProvider>
          ) : (
            <Main theme={theme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
