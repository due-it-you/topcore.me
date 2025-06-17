import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import CreateGridBody from './components/layout/CreateGridBody';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CreateGridBody />
      </Layout>
    </>
  );
}

export default App;
