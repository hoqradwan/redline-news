"use client"
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import { Article } from '@/types/Articles';
import React from 'react';
import styles from "./articles.module.css"
import useFetchArticles from '@/hooks/useFetchArticles';
const Articles = () => {
    const { articles, loading, error } = useFetchArticles();
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        <p>{error}</p>
    }
    return (
        <div className='container'>
            <h1>Articles</h1>
            <div className={styles.articles}>
                {articles.map((article: Article, index) => (<ArticleCard
                    key={index} article={article}></ArticleCard>))}
            </div>

        </div >
    );
};

export default Articles;