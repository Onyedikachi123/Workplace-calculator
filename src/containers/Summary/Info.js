import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Emoji from '../../components/Emoji/Emoji';

const __comments = [
    { id: "#12342", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12343", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12344", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12345", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: "#12346", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];

const Info = props => {

    const comments = __comments.slice(0, 5).map(comment => (<li className="p-2" key={comment.id}> <span className="fa fa-user-circle text-dark mr-2"></span> <span className="border-bottom border-info p-1  lead"> {comment.text}</span></li>));

    return (
        <React.Fragment>
            <NavBar link={"/"} location={"Logo"} />

            <div className="row mt-5">
                <div className="col ">
                    <div className=" text-center text-info mx-auto w-50">
                        <p className="h3 my-4 text-capitalize">what people said about your company</p>
                        <div className="my-5">
                        <Emoji emojiClass="mr-2  h2" symbol="😊" label="smile" /><span className="h2">43%</span>
                        </div>

                        <div className="comments mt-5 text-center">
                            <ul className="list-unstyled">
                                {comments}
                            </ul>
                           { comments.length < 5 ? null : <small className="text-dark">See more...</small>}
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
};

export default Info;