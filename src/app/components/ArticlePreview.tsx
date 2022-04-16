import React, { FC } from 'react';
import { ArticleActions } from './ArticleActions';
import { ArticleImage } from './ArticleImage';
import { ArticleInfo } from './ArticleInfo';

export const ArticlePreview: FC = () => {
    return (
        <div>
            <ArticleImage></ArticleImage>
            <ArticleInfo></ArticleInfo>
            <ArticleActions></ArticleActions>
        </div>
    );
};
