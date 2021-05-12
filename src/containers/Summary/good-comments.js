import React from "react";
// import Emoji from '../../components/Emoji/Emoji';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Emoji from "../../components/Emoji/Emoji";
import SummaryClass from './Summary.module.css'


const GoodComments = props => {
    let goodComments = (<div className=" text-center">
    <p 
        className="h3 text-center text-muted my-5 p-5"> 
        Ooops looks like you entered an incorrect company name 
        <Emoji emojiClass="mr-2 " symbol="🧐" label="shcoked" />. Please try again..</p>
        <a href='/' className="btn btn-info">try again..</a>
        </div>)

    if (props.comments.length > 0){
        goodComments = props.comments
        .map(comment => (
            <li className="p-2"
                key={comment.title}>
                <div className="d-flex">
                    <div>
                    <span className="fa fa-user-circle fa-2x text-dark mr-2"></span>
                    </div>
                    <div>
                        <small className="text-muted">{comment.employee}</small>
                    <p className="border-bottom border-info p-1 ">   
                    {comment.comment}</p>
                    </div>
                    
                </div>

            </li>));
    }



    return (
        <React.Fragment>
            <div className={"text-muted "+SummaryClass.GoodComments}>
                {/* <div className="my-2">
                    <Emoji emojiClass="mr-2 h3" symbol="😊" label="smile" /><span className="h3">43%</span>
                </div> */}

                <div className="comments mt-3">
                    <ul className="list-unstyled">
                        {goodComments}
                    </ul>
                   
                </div>
            </div>

        </React.Fragment>
    )
}

export default GoodComments;