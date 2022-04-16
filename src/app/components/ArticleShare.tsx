import { FC } from "react";

export const ArticleShare: FC = () => {
    return (
        <div>
            <span>SHARE</span>
            <a href="#">
                <img src="src/assets/icons/icon-facebook.svg" alt="Share to facebook icon"/>
            </a>
            <a href="#">
                <img src="src/assets/icons/icon-twitter.svg" alt="Share to facebook icon"/>
            </a>
            <a href="#">
                <img src="src/assets/icons/icon-pinterest.svg" alt="Share to pinterest icon"/>
            </a>
        </div>
    )
}