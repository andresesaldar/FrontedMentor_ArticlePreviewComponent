import React, { FC } from 'react';
import ArticleImageSrc from '../../assets/images/drawers.jpg';

export const ArticleImage: FC = () => {
    return <img src={ArticleImageSrc} alt="Article Image" />;
};
