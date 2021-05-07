import React, {useState, useReducer} from 'react';
import WelcomePageClass from './Welcome.module.css';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import Footer from '../../components/Footer/Footer';

const initState = {
    search_status: false,
    hasResult: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            let new_search_status = action.payload; 
            return{...state, search_status: new_search_status}    
        default:
            break;
    }
    return state;
}

const Welcome = props => {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <React.Fragment>
            <NavBar link={"/"} location={"About"} />
            <main className={WelcomePageClass.Welcome}>
                <div className="contain h-100 d-flex flex-column justify-content-center align-items-center">
                    <Banner />
                    <div className="text-center">
                        <img src=".." alt="logo" />
                    </div>
                    <Search  />
{/* clickedSearchBtn={dispatch({type: 'SEARCH', payload: true})} */}
                </div>
            </main>
            <Footer />

        </React.Fragment>
    )
}

export default Welcome;