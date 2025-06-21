import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProfileCard() {
  const params = useParams();
  useEffect(() => {
    if (!params.slug) return;

    const fetchData = async () => {
      const res = await axios.get(`profile_cards/${params.slug}`);
    };
  });
}
