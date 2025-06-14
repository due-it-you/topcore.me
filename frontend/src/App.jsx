import { useState } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Header from './components/common/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

export default App;
