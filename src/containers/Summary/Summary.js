import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useSelector, useDispatch } from "react-redux";
import GoodComments from './good-comments';
import BadComments from './bad-comments';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import SumNav from "./SummaryNav";
import Pagination from "../../components/Pagination/Pagination";
import { axiosInstance } from "../../axios-instance";
import { COMMENT } from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const GET_CONTENT = async (newPage, companyName) => {
    try {
        
        const response = await axiosInstance({
            params: {
                pageId: newPage
            },
            method: "POST",
            data: {
                company_name: companyName
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

const Summary = props => {
    let { pageId, companyName, comments } = useSelector(state => state);
    console.log(pageId, companyName, comments)
    const [page, setPage] = useState(pageId);
    const [__comments, setComments] = useState(comments);
    const [PrevIsDisabled, setPrevDisability] = useState(true);
    const [isSearching, setSearching] = useState(false);
    const [NextIsDisabled, setNextDisability] = useState(false);
    const dispatch = useDispatch();

    const handlePrevBtn = async () => {
        if (pageId === 1) {
            return;
        }
        let newPage = --pageId;
        if(newPage === 1){
            setPrevDisability(true); 
        }
        setPage(newPage);
        const response = await GET_CONTENT(newPage, companyName);
        if(response){
            setSearching(false); 
            dispatch(COMMENT(response))
        }
    }

    const handleNextBtn = async () => {
        setSearching(true); 
        
        let newPage = ++pageId;
        setPage(newPage);
        setPrevDisability(false)
        const response = await GET_CONTENT(newPage, companyName);
        
        if(response){
            setSearching(false); 
            setComments(response.comments)
            dispatch(COMMENT(response))
        }
       
    }

    return (
        <React.Fragment>
            <SumNav />
            <div className="row ">
                <div className="col h-100 d-flex flex-column align-items-center">
                    <div className="mx-auto mt-2 w-75">
                        <h3 className="h3 text-info text-center my-1"> What employees are saying about <span className="text-danger font-weight-bold text-capitalize">{companyName}</span></h3>
                        {isSearching ? (<div className="text-center my-5"> <Loading /> </div>) : (<Router>
                            <Switch>
                                <Route path="/result" exact render={()=> <GoodComments comments={__comments}/>} />
                                <Route path="/result/bd-comments" component={BadComments} />
                            </Switch>
                        </Router>
                        )}
                         {isSearching || comments.length < 5 ? null : (<Pagination
                            PrevIsDisabled={PrevIsDisabled}
                            NextIsDisabled={NextIsDisabled}
                            handleNextBtn={handleNextBtn}
                            handlePrevBtn={handlePrevBtn}
                        />)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Summary;

