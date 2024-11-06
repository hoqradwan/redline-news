"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const ArticleDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is article details page</h1>
            <p>This is article {id}</p>
        </div>
    );
};

export default ArticleDetails;