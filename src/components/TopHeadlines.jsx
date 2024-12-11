'use client'

import { getNewsTopHeadlines } from '@/api';
import { removeDuplicateData } from '@/utils';
import Article from './Article';
import React,{useState,useEffect} from 'react';

const TopHeadlines = () => {
  const fetchData = async () => {
    const newsTop = await getNewsTopHeadlines();
    return removeDuplicateData(newsTop);
  };

  const [filterArticles, setFilterArticles] = useState([]);

  useEffect(() => {
    fetchData().then((articles) => {
      setFilterArticles(articles);
    });
  }, []);

  return (
    <div className=' w-30% sm:w-[700px]'>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default TopHeadlines;
