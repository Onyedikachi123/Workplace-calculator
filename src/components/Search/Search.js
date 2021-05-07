import React from 'react';
import SearchClass from './Search.module.css';
import {NavLink} from 'react-router-dom';


const Search = props => {
    return (
        <React.Fragment>
            <div className="row w-75 my-5">
                <div className="col text-center ">
                    <div className={"form-group my-3 mx-auto "+SearchClass.FormGroup}>
                        <span className={"fa fa-search "+ SearchClass.FormIcon}></span>
                        <input type="text" className={"form-control "+ SearchClass.SearchInput} placeholder="Search Your Company Name..."/>
                    </div>
                        <NavLink to="/search" className="btn btn-info my-3 rounded">Search</NavLink>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Search;