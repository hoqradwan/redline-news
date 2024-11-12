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
                const response = await fetch('/api/articles');
                if (!response.ok) throw new Error("Failed to fetch articles");

                const data = await response.json();
                setArticles(data.articles);
            } catch (err) {
                setError("Error fetching articles");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return { articles, loading, error };
};

export default useFetchArticles;
