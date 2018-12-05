import React from 'react'

const ModalView = () => {
    return (
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Modal</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content.
                Any content can be placed inside the modal and it can use the Bootstrap grid classNamees.</p>
                        <p>
                            Codigo original: <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">Codeply</a>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary-outline" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalView
