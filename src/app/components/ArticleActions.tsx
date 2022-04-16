import React, { FC, useState } from 'react';
import { ArticleShare } from './ArticleShare';

export const ArticleActions: FC = () => {
    const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
    return (
        <div>
            <div>
                <img src="src/assets/images/avatar-michelle.jpg" alt="Article author avatar" />
                <h6>Michelle Appleton</h6>
                <small>28 Jun 2020</small>
                <button onClick={() => setShowShareOptions(!showShareOptions)}>
                    <img src="src/assets/icons/icon-share.svg" alt="Share Article icon"></img>
                </button>
            </div>
            {showShareOptions ? <ArticleShare></ArticleShare> : null}
        </div>
    );
};
