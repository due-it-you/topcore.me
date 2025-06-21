import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from './../../../../api/lib/apiClient';
import Layout from '@/components/layout/Layout';
import Header from '@/components/common/Header';
import CreateGridBody from '@/components/layout/CreateGridBody';

export default function ProfileCard() {
  const params = useParams();
  const [albums, setAlbums] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [gridRows, setGridRows] = useState(null);
  const [gridColumns, setGridColumns] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/profile_cards/${params.slug}`);
      setAlbums(response.data.albums);
      setBgColor(response.data.profileCard.bgColor);
      setDisplayName(response.data.profileCard.displayName);
      setGridRows(response.data.profileCard.gridRows);
      setGridColumns(response.data.profileCard.gridColumns);
    }

    fetchData();
  }, []);

  return (
    <>
      {albums &&
        albums.map((album, index) => {
          return <div key={index}>{album.name}</div>;
        })}
      <div>{bgColor}</div>
      <div>{displayName}</div>
      <div>{gridColumns}</div>
      <div>{gridRows}</div>
      {/* <Layout color={profileCard.bgColor}>
        <Header />
        <CreateGridBody setColor={setColor} color={bgColor} />
      </Layout> */}
    </>
  );
}
