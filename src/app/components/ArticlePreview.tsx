import React, { FC } from 'react';
import { ArticleActions } from './ArticleActions';
import { ArticleImage } from './ArticleImage';
import { ArticleInfo } from './ArticleInfo';
import './ArticlePreview.sass';

export const ArticlePreview: FC = () => {
    return (
        <div className="card d-flex article-preview-container border-0 shadow-lg position-relative">
            <div className="article-image-container">
                <ArticleImage></ArticleImage>
            </div>
            <div className="article-info-container">
                <div className="mb-3">
                    <ArticleInfo></ArticleInfo>
                </div>
                <ArticleActions></ArticleActions>
            </div>
        </div>
    );
};
