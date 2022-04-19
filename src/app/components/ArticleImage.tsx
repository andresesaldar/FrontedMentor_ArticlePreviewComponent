import React, { FC } from 'react';
import ArticleImageSrc from '../../assets/images/drawers.jpg';
import './ArticleImage.sass';

export const ArticleImage: FC = () => {
    return <img src={ArticleImageSrc} alt="Article Image" className="h-100 w-100 article-image" />;
};
