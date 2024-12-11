'use client'

import { API_TOKEN_NEWS } from '@/api'
import Article from '@/components/Article'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Search = () => {
  const [newsData, setNewsData] = useState([])  
  const [loading, setLoading] = useState(false)  
  const searchParams = useSearchParams()
  const search = searchParams ? searchParams.get('q') : null 
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getNews = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${API_TOKEN_NEWS}&q=${search}&pageSize=10`, { signal })
        const responseToJson = await response.json()
        const randomArticle = responseToJson?.articles
        const filterArticles = randomArticle.filter(article => article?.source?.id !== null)
        setLoading(false)
        setNewsData(filterArticles)
      } catch (error) {
        console.log('Error:', error) 
      }
    }

    getNews()

    return () => {
      controller.abort() 
    }
  }, [search]) 
  
  return (
    <div className='w-[700px]'>
      {loading ? (
        <p>Loading...</p>  
      ) : (
        <>
          {newsData.map((article, idx) => (
            <div key={`${article?.title}-${idx}`}>
              <Article data={article} />  
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Search
