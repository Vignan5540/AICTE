import React from "react";

let Avatar10 = "/media/xs/avatar1.jpg";
let Avatar11 = "/media/xs/avatar2.jpg";
let Avatar3 = "/media/xs/avatar4.jpg";
let Avatar4 = "/media/xs/avatar6.jpg";
let Avatar9 = "/media/xs/avatar7.jpg";
let Avatar6 = "/media/xs/avatar8.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function AllocatedTask() {

    return (
        <div className="card">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Allocated Task Members</h6>
            </div>
            <div className="card-body">
                <div className="flex-grow-1 mem-list">
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar6} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Lucinda Massey</h6>
                                <span className="small text-muted">Ui/UX Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar4} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Ryan Nolan</h6>
                                <span className="small text-muted">Website Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar9} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Oliver	Black</h6>
                                <span className="small text-muted">App Developer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar10} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Adam Walker</h6>
                                <span className="small text-muted">Quality Checker</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar4} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Brian Skinner</h6>
                                <span className="small text-muted">Quality Checker</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar11} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Dan Short</h6>
                                <span className="small text-muted">App Developer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar3} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Jack Glover</h6>
                                <span className="small text-muted">Ui/UX Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AllocatedTask;