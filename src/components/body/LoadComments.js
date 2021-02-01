import React from 'react';
import dateFormat from "dateformat";
const LoadComments = (props) => {

    return (
        props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h3>Author:{comment.author}</h3>
                    <p>Comment: {comment.comment}</p>
                    <h4>Rating:{comment.rating}</h4>
                    <p>Date:{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>

                </div>
            )
        })


    );
};

export default LoadComments;