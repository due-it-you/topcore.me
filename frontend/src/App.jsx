import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/common/Header';
import AlbumSearchCard from './components/ui/album_search/AlbumSearchCard';
import CreateGridBody from './components/layout/CreateGridBody';
import SearchBar from './components/ui/album_search/SearchBar';
import SearchResult from './components/ui/album_search/SearchResult';

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CreateGridBody>
          <AlbumSearchCard>
            <SearchBar />
            <SearchResult>
            </SearchResult>
          </AlbumSearchCard>
        </CreateGridBody>
      </Layout>
    </>
  );
}

export default App;
