import React, { FC, useState } from 'react';
import { ArticleShare } from './ArticleShare';
import AuthorAvatar from '../../assets/images/avatar-michelle.jpg';
import IconShare from '../../assets/icons/icon-share.svg';
import './ArticleActions.sass';

export const ArticleActions: FC = () => {
    const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
    return (
        <div className="px-5 article-actions-container">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                    <img
                        src={AuthorAvatar}
                        alt="Article author avatar"
                        className="avatar rounded-circle img-fluid me-3"
                    />
                    <div>
                        <h6 className="mb-1 author-name">Michelle Appleton</h6>
                        <span className="article-date">28 Jun 2020</span>
                    </div>
                </div>
                <div className="share-menu-container">
                    {showShareOptions ? <ArticleShare></ArticleShare> : null}
                    <button
                        onClick={() => setShowShareOptions(!showShareOptions)}
                        className="btn btn-share py-1 px-2 rounded-circle"
                    >
                        <img src={IconShare} alt="Share Article icon"></img>
                    </button>
                </div>
            </div>
        </div>
    );
};
