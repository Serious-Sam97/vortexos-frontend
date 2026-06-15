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
    /* Reach (touch): kill the grey tap flash + double-tap zoom; let scroll areas
       have momentum on iOS. The shell drives its own gestures via pointer events. */
    -webkit-tap-highlight-color: transparent;
    overscroll-behavior: none;
  }

  /* Scrollable surfaces get momentum scrolling on touch. */
  * {
    -webkit-overflow-scrolling: touch;
  }

  /* Accessibility: a clearly-visible focus ring for keyboard users only
     (mouse/touch clicks don't trigger :focus-visible, so the retro look is kept). */
  :focus-visible {
    outline: 2px solid #1e90ff;
    outline-offset: 1px;
  }

  /* Touch shell: taller Start-menu rows so they're comfortable to tap.
     Scoped to the mobile Start menu only — desktop menus are untouched. */
  .vortex-start-mobile li {
    min-height: 42px;
    display: flex;
    align-items: center;
  }

  /* Touch shell: grow in-app menu bars / toolbars / dropdown items so they're
     tappable. Gated on html[data-shell="mobile"] (set by SettingsApplier, which
     also reflects forced Tablet Mode) — a mouse desktop never matches. */
  html[data-shell="mobile"] .vx-menubar { height: 30px; font-size: 13px; }
  html[data-shell="mobile"] .vx-menulabel { padding: 0 14px; font-size: 13px; height: 100%; }
  html[data-shell="mobile"] .vx-menuitem { padding: 9px 18px 9px 8px; font-size: 13px; }
  html[data-shell="mobile"] .vx-toolbtn { min-width: 34px; height: 32px; }

  /* Screen-reader-only utility (visually hidden, still announced). */
  .sr-only {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  body {
    font-family: var(--vx-font, 'ms_sans_serif');
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