import './App.css';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import CreateGridBody from './components/layout/CreateGridBody';

function App() {
  const [color, setColor] = useState('#121212');
  return (
    <>
      <Layout color={color}>
        <Header />
        <CreateGridBody setColor={setColor} />
      </Layout>
    </>
  );
}

export default App;
