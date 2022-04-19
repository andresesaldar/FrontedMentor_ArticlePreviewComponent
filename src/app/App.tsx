import React, { FC } from 'react';
import { ArticlePreview } from './components/ArticlePreview';

export const App: FC = () => {
    return (
        <div className="bg-core-light w-100 h-100 d-flex flex-row align-items-center justify-content-center">
            <ArticlePreview></ArticlePreview>
        </div>
    );
};
