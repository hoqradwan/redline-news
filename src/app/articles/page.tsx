"use client"
import { Article } from '@/types/Articles';
import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetcharticles = async () => {
            const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a1297a7b31e44ab8beb64ad03daaec87');
            const data = await response.json();
        }

        fetcharticles()
    }, [])
    return (
        <div>
            All articles are here
        </div>
    );
};

export default Articles;