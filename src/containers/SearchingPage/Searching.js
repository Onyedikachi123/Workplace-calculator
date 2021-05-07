import React from 'react';
import Loading from '../../components/Loading/Loading';
import NavBar from '../../components/NavBar/NavBar';
import Emoji from '../../components/Emoji/Emoji';
import LoadInfo from "../../components/LoadInfo/LoadInfo";
import SearchingClass from './SearchingClass.module.css';


const Searching = props => {
    // let stat;
    // setTimeout(()=>{
    //      stat = (
    //         <div className={SearchingClass.LoadInfo }>
    //             <LoadInfo emojiSymbol="🤨" emojiLabel="not-impressed" />
    //         </div>)
    // }, 5000)
    
    return (
        <React.Fragment>
            <NavBar link={"/"} location={"Logo"} />

            <div className="row vh-100 mt-5">
                <div className="col h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="search-text text-center mx-auto w-50">
                        <Emoji emojiClass="display-4" symbol="❤️" label="love" />
                        <p className="h3 ">Searching the web for how people feel about your company...</p>
                        <div className="loader my-4">
                            <Loading />
                        </div>
                    </div>
                    {/* {stat} */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Searching;