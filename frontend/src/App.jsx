import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import AlbumSearchCard from './components/ui/album_search/AlbumSearchCard';
import CreateGridBody from './components/layout/CreateGridBody';
import AlbumGridEditor from './components/ui/album_grid_editor/AlbumGridEditor';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CreateGridBody>
          <AlbumSearchCard />
          <AlbumGridEditor />
        </CreateGridBody>
      </Layout>
    </>
  );
}

export default App;
