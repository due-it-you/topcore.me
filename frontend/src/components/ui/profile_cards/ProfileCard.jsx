import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from './../../../../api/lib/apiClient';
import Layout from '@/components/layout/Layout';
import Header from '@/components/common/Header';
import Album from '../album_grid_editor/Album';
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
      <Layout color={bgColor}>
        <Header />
        <div className="flex min-h-screen items-center justify-center">
          <div className="aspect-square w-110">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              {albums &&
                albums.map((album, index) => {
                  return (
                    <div key={index}>
                      <a href={album.externalUrl} target="_blank">
                        <div className="aspect-square rounded-xl bg-[#0E1012]">
                          <div>
                            <img
                              src={album.imageUrl}
                              alt={album.name}
                              className="aspect-square h-full w-full rounded-xl border border-white object-cover"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            <div className="mt-2 w-full text-right">
              <div className="inline-block rounded-lg bg-white px-4 py-2 font-bold text-black">
                <span className="text-gray-500">by</span> {displayName}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
