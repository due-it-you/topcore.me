import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from './../../../../api/lib/apiClient';

export default function ProfileCard() {
  const params = useParams();
  const [albums, setAlbums] = useState(null);
  const [profileCard, setProfileCard] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/profile_cards/${params.slug}`);
      setAlbums(response.data.albums);
      setProfileCard(response.data.profileCard);
    }

    fetchData();
  }, []);

  return <></>;
}
