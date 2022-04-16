import React, { FC } from 'react';
import './App.sass';
import { ArticlePreview } from './components/ArticlePreview';

export const App: FC = () => {
    return (
        <div>
            <ArticlePreview></ArticlePreview>
        </div>
    );
};
