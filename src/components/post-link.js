import React from "react";
import "../styles/post-link.css";

const RANDOM_IMAGE = "https://source.unsplash.com/collection/175083/640x360";

export default function PostLink() {
    return (
        <div className="post-link">
            <div>
                <img src={RANDOM_IMAGE} className="post-link-image" alt="post-cover" />
            </div>
            <div className="post-link-text">
                <h2>初のGatsby！</h2>
                <p className="post-link-body">偶然見つけたGatsbyを使って、サイトを作ってみました</p>
                <p className="post-link-date">2023年4月20日</p>
            </div>
        </div>
    );
}