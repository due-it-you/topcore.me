import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from './../../../../api/lib/apiClient';

export default function ProfileCard() {
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/profile_cards/${params.slug}`);
    }

    fetchData();
  }, []);

  return <></>;
}
