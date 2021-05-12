import React from 'react';

const Pagination = props => {

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mt-3">
                <li className={props.PrevIsDisabled ? `page-item disabled` : "page-item"}>
                    <button className="page-link" onClick={props.handlePrevBtn} tabIndex="-1">Previous</button>
                </li>
                <li className={props.NextIsDisabled ? `page-item disabled` : "page-item"}>
                    <button className="page-link" onClick={props.handleNextBtn} href="#">Next</button>
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;