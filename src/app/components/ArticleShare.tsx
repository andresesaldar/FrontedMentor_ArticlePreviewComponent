import React, { FC } from 'react';
import FacebookShareIcon from '../../assets/icons/icon-facebook.svg';
import TwitterShareIcon from '../../assets/icons/icon-twitter.svg';
import PinterestShareIcon from '../../assets/icons/icon-pinterest.svg';

export const ArticleShare: FC = () => {
    return (
        <div>
            <span>SHARE</span>
            <a href="#">
                <img src={FacebookShareIcon} alt="Share to facebook icon" />
            </a>
            <a href="#">
                <img src={TwitterShareIcon} alt="Share to facebook icon" />
            </a>
            <a href="#">
                <img src={PinterestShareIcon} alt="Share to pinterest icon" />
            </a>
        </div>
    );
};
