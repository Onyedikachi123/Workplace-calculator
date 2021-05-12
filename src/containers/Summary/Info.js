import React from 'react';
import Emoji from '../../components/Emoji/Emoji';
import { useSelector } from "react-redux";
import GoodComments from './good-comments';
import BadComments from './bad-comments';
import { Route, Switch } from "react-router-dom";

const Info = props => {
    const __comments = useSelector(state => state.comments);

    const comments = __comments.slice(0, 5).map(comment => (<li className="p-2" key={comment.id}> <span className="fa fa-user-circle text-dark mr-2"></span> <span className="border-bottom border-info p-1  lead"> {comment.text}</span></li>));

    return (
        <React.Fragment>

            <div className="row mt-5">
                <div className="col ">
                  <Switch>
                      <Route path="/gd-comments" component={GoodComments}/>
                      <Route path="/bd-comments" component={BadComments}/>
                  </Switch>

                </div>
            </div>
        </React.Fragment>
    )
};

export default Info;