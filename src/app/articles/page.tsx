"use client"
import ArticleDetails from '@/components/ArticleDetails/ArticleDetails';
import { Article } from '@/types/Articles';
import React, { useEffect, useState } from 'react';
import styles from "./articles.module.css"
const Articles = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetcharticles = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a1297a7b31e44ab8beb64ad03daaec87');
                const data = await response.json();
                setArticles(data.articles)
            } catch (error) {
                console.error("error fetching articles", error)
            }
        }

        fetcharticles()
    }, [])
    return (
        <div className='container'>
            <h1>All Articles</h1>
            <div className={styles.articles}>
                {articles.map((article: Article, index) => (<ArticleDetails
                    key={index} article={article}></ArticleDetails>))}
            </div>

        </div >
    );
};

export default Articles;