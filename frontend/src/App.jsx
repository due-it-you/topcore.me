import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import AlbumSearchCard from './components/ui/album_search/AlbumSearchCard';
import CreateGridBody from './components/layout/CreateGridBody';
import SearchBar from './components/ui/album_search/SearchBar';
import SearchResult from './components/ui/album_search/SearchResult';
import SearchedAlbum from './components/ui/album_search/SearchedAlbum';
import DropAlbumGrid from './components/ui/drop_album_grid/DropAlbumGrid';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CreateGridBody>
          <AlbumSearchCard>
            <SearchBar />
            <SearchResult>
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
              <SearchedAlbum />
            </SearchResult>
          </AlbumSearchCard>
          <DropAlbumGrid />
        </CreateGridBody>
      </Layout>
    </>
  );
}

export default App;
