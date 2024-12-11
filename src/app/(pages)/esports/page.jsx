'use client'

import React, { useState, useEffect } from 'react';
import { getNewsSearch } from '@/api';
import Article from '@/components/Article';
import { removeDuplicateData } from '@/utils';

const ESports = () => {
  const [filterArticles, setFilterArticles] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const newsWorld = await getNewsSearch("esports");
      const filteredArticles = removeDuplicateData(newsWorld);
      setFilterArticles(filteredArticles);
    } catch (err) {
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default ESports;
