import React from 'react';
import Simulator from './components/Simulator';
import Layout from './layouts/Layout';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
const App: React.FC = () => {

  return (
    <Layout>
      <Simulator />
    </Layout>
  )
}

export default App
