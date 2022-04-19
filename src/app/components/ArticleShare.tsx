import React, { FC } from 'react';
import FacebookShareIcon from '../../assets/icons/icon-facebook.svg';
import TwitterShareIcon from '../../assets/icons/icon-twitter.svg';
import PinterestShareIcon from '../../assets/icons/icon-pinterest.svg';
import './ArticleShare.sass';

export const ArticleShare: FC = () => {
    return (
        <div className="px-5 share-menu card d-flex flex-row">
            <span className="me-3 menu-title">SHARE</span>
            <a href="#" className="me-3">
                <img src={FacebookShareIcon} alt="Share to facebook icon" />
            </a>
            <a href="#" className="me-3">
                <img src={TwitterShareIcon} alt="Share to facebook icon" />
            </a>
            <a href="#">
                <img src={PinterestShareIcon} alt="Share to pinterest icon" />
            </a>
        </div>
    );
};
