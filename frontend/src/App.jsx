import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import AlbumSearchCard from './components/ui/album_search/AlbumSearchCard';
import CreateGridBody from './components/layout/CreateGridBody';
import SearchBar from './components/ui/album_search/SearchBar';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CreateGridBody>
          <AlbumSearchCard>
            <SearchBar />
          </AlbumSearchCard>
        </CreateGridBody>
      </Layout>
    </>
  );
}

export default App;
