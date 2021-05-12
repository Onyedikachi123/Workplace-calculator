import React from "react";
import Emoji from '../../components/Emoji/Emoji';
import { useSelector } from "react-redux";

const BadComments = props => {
    const __comments = useSelector(state => state.comments);

    const badComments = __comments.slice(0, 4).map(comment => (<li className="p-2" key={comment.title}> <span className="fa fa-user-circle text-dark mr-2"></span> <span className="border-bottom border-info p-1  lead"> {comment.title}</span></li>));

    console.log(__comments);

    return (
        <React.Fragment>
            <div className="text-info mx-auto">
                <div className="my-5">
                    <Emoji emojiClass="mr-2 h3" symbol="🤨" label="not-impressed" /><span>37%</span>
                </div>

                <div className="comments mt-5 text-center">
                    <ul className="list-unstyled">
                        {badComments}
                    </ul>
                    {badComments.length < 5 ? null : <small className="text-dark">See more...</small>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default BadComments;