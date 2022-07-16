import React from "react";
import './post.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faComment} from "@fortawesome/free-solid-svg-icons"
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons"
import {faRetweet} from "@fortawesome/free-solid-svg-icons"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"


const PostComponent = ({postObj}) => {
    const {name, photo, nickname, content, image, date, comments, reposts, likes} = postObj;

    return (
    <div className="main-conteiner">
        <div >
            <img src={photo} alt={name} className="left-side-img"></img>
        </div>
        <div className="right-side-content">
            <div className="content-tittle">
                <div >
                    <span className="autor-name">{name}</span>
                    <span className="autor-nickname-date">{nickname} {date}</span>
                </div>
                <div className="autor-angle-down">
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </div>
            </div>
            <div className="content-main">
                <p className="content-main-title">{content}</p>
                <img src={image} alt={content} className="content-main-img"></img>
            </div>
            <div className="content-footer-icons">
                <div className="comment-icon">
                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    <span>{comments}</span>
                </div>
                <div className="repost-icon">
                    <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                    <span>{reposts}</span>
                </div>
                <div className="like-icon">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    <span>{likes}</span>
                </div>
                <div className="share-icon">
                    <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default PostComponent;