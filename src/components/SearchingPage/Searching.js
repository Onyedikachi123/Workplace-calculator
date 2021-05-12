import React, { useEffect, useState, useRef } from 'react';
import Loading from '../Loading/Loading';
import Emoji from '../Emoji/Emoji';
import { axiosInstance } from "../../axios-instance";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { COMMENT } from '../../redux/actions'
import ErrorHandler from "../../containers/errorHandling/errorHandling";
import SearchingClass from './Searching.module.css';

const Searching = props => {
    const { companyName } = useSelector(state => state);
    const [errorMessage, setErrorMessage] = useState('');
    const modalBtn = useRef();

    const dispatch = useDispatch();

    const fetchComments = async (page) => {
        try {
            page = page || 1;
            const response = await axiosInstance({
                params: {
                    pageId: page
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

    useEffect(() => {

        fetchComments().then(response => {
            dispatch(COMMENT(response));
            console.log(response);
            props.history.push('/result');
        })
            .catch(error => {
                switch (error.response.data.error.status) {
                    case 500:
                        setErrorMessage(`An error ocurred, kindly try again later. `);
                        break;

                    default:
                        setErrorMessage(error.response.data.error.message);
                        break;
                }

                modalBtn.current.click();
                
            });

    },[])

    return (
        <React.Fragment>
            <div className="row vh-100 mt-5">
                <div className="col h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="search-text text-center mx-auto w-50">
                        <button style={{
                            display: 'none'
                        }} type="button" ref={modalBtn} class="btn btn-primary" data-toggle="modal" data-target="#errorModal">
                            Launch demo modal
                        </button>
                        <ErrorHandler closeError={()=> props.history.push('/')} errorMessage={errorMessage} />
                        <Emoji emojiClass={"display-4 " + SearchingClass.Emoji} symbol="❤️" label="love" />

                        <p className="h3 ">Searching the web for how people feel about your company...</p>
                        <div className="loader my-4">
                            <Loading />
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Searching);