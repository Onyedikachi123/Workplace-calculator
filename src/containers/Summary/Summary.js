import React from 'react';
import Emoji from '../../components/Emoji/Emoji';
import NavBar from '../../components/NavBar/NavBar';


const __comments = [
    { id: "#12342", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12343", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12344", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12345", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12346", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];


 const Summary = props => {
    const comments = __comments.slice(0, 2).map(comment => (<li className="p-2" key={comment.id}> <span className="fa fa-user-circle text-dark mr-2"></span> <span className="border-bottom border-info p-1  lead"> {comment.text}</span></li>));

    return(
    <React.Fragment>
                    <NavBar link={"/"} location={"Logo"} />

        <div className="mx-auto mt-5 text-center w-50">
            <p className="h3 text-info my-3"> Summary about your company</p>

            <div className="good-summary p-2 border-bottom">
                <Emoji emojiClass="mr-3 " symbol="😊" label="smile"/><span>43%</span>
                <div className="comments-preview">
                <ul className="list-unstyled">
                                {comments}
                            </ul>
                           { comments.length < 2 ? null : <small className="d-block text-dark mr-3 text-right">See more...</small>}

                </div>
            </div>
            <div className="bad-summary mt-4 p-2 border-bottom">
                <Emoji emojiClass="mr-3 " symbol="🤨" label="not-impressed"/><span>37%</span>
                <div className="comments-preview">
                <ul className="list-unstyled">
                                {comments}
                            </ul>
                            { comments.length < 2 ? null : <small className="d-block text-dark mr-3 text-right">See more...</small>}
                </div>
            </div>
        </div>
    </React.Fragment>
)}; 

export default Summary;