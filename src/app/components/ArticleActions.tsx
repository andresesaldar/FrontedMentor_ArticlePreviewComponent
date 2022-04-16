import React, { FC, useState } from 'react';
import { ArticleShare } from './ArticleShare';
import AuthorAvatar from '../../assets/images/avatar-michelle.jpg';
import IconShare from '../../assets/icons/icon-share.svg';

export const ArticleActions: FC = () => {
    const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
    return (
        <div>
            <div>
                <img src={AuthorAvatar} alt="Article author avatar" />
                <h6>Michelle Appleton</h6>
                <small>28 Jun 2020</small>
                <button onClick={() => setShowShareOptions(!showShareOptions)}>
                    <img src={IconShare} alt="Share Article icon"></img>
                </button>
            </div>
            {showShareOptions ? <ArticleShare></ArticleShare> : null}
        </div>
    );
};
