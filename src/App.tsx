import { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { BrowserRouter } from "react-router";
import { ProcessContextProvider } from './contexts/ProcessContext';
import { OSContextProvider, useOSContext } from './contexts/OSContext';
import { KernelProvider } from './kernel/react/KernelProvider';
import { DialogProvider } from './components/Dialog/DialogProvider';
import { AuthProvider } from './contexts/AuthContext';
import { themeOf } from './system/themes';
import AppContent from './AppContent';

/** Applies the user-selected react95 theme from OSContext. */
const Themed = ({ children }: { children: ReactNode }) => {
    const { theme } = useOSContext();
    return <ThemeProvider theme={themeOf(theme) as never}>{children}</ThemeProvider>;
};

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'ms_sans_serif';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes winOpen {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.82); }
    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @keyframes winMinimize {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to   { opacity: 0; transform: translate(-50%, 230%) scale(0.2); }
  }
`;

const App = () => (
  <BrowserRouter>
      <GlobalStyles />
      <KernelProvider>
        <OSContextProvider>
          <Themed>
            <ProcessContextProvider>
              <DialogProvider>
                <AuthProvider>
                  <AppContent />
                </AuthProvider>
              </DialogProvider>
            </ProcessContextProvider>
          </Themed>
        </OSContextProvider>
      </KernelProvider>
    </BrowserRouter>
);

export default App;