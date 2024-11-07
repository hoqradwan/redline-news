// src/hooks/useFetchArticles.ts

import { useEffect, useState } from 'react';
import { Article } from '@/types/Articles';

const useFetchArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a1297a7b31e44ab8beb64ad03daaec87');
                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);
            } catch (err) {
                setError("Error fetching articles")
                console.log(err)
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return { articles, loading, error };
};

export default useFetchArticles;
