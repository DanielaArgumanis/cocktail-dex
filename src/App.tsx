
import './App.css'
import theme from '@theme/Theme';
import Layout from './components/Layout/Layout'
import { ThemeProvider } from '@emotion/react';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  )
}

export default App
