// ArticleCard.tsx
import { Article } from '@/types/Articles';
import React from 'react';
import styles from './ArticleDetails.module.css';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className={styles.card}>
            <img src={article.urlToImage} alt={article.title} className={styles.image} />
            <h2 className={styles.title}>{article.title}</h2>
            <p><strong>Author:</strong> {article.author || "Unknown"}</p>
            <p className={styles.description}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Read More
            </a>
        </div>
    );
};

export default ArticleCard;
