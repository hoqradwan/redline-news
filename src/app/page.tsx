"use client"
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import { Article } from '@/types/Articles';
import React from 'react';
import styles from "./articles/articles.module.css"
import useFetchArticles from '@/hooks/useFetchArticles';
import Link from 'next/link';
const Home = () => {
  const { articles, loading, error } = useFetchArticles();
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    <p>{error}</p>
  }
  return (
    <>
      <div className='container'>
        <div className={styles.articles}>
          {articles.slice(0, 6).map((article: Article, index) => (<ArticleCard
            key={index} article={article}></ArticleCard>))}
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link href="/articles" style={{ textDecoration: "none", background: "#FF6347", color: "#fff", padding: "10px", margin: "10px", borderRadius: "5px" }}>See More</Link>
        </div>

      </div>


    </>

  );
};

export default Home;