import React from "react";
const ErrorHandler = props => (<React.Fragment>

    <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Error Occured</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <p className="text-danger h3">{props.errorMessage}</p>
      </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" onClick={props.closeError} data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
)

export default ErrorHandler;