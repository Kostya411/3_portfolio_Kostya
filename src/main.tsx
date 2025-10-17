
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {thema} from "./styles/Thema.tsx";

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={thema}>
    <App />
      <GlobalStyles/>
  </ThemeProvider>,
)
