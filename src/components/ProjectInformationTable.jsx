import React from "react";


let Avatar1='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar2='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar3='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar4='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar5='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar6='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'
let Avatar7='https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'

function ProjectInformationTable (){
    
        return(
            <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <div className="info-header">
                        <h6 className="mb-0 fw-bold ">Project Information</h6> 
                    </div>
                </div>
                <div className="card-body">
                    <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="table-responsive">
                                <table id="myProjectTable" className="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"  role="grid" aria-describedby="myProjectTable_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Title: activate to sort column descending">Title</th>
                                            <th className="sorting" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1"  aria-label="Date Start: activate to sort column ascending">Date Start</th>
                                            <th className="sorting" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1"  aria-label="Deadline: activate to sort column ascending">Deadline</th>
                                            <th className="dt-body-right sorting" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1"  aria-label="Leader: activate to sort column ascending">Leader</th>
                                            <th className="sorting" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1" aria-label="Completion: activate to sort column ascending">Completion</th>
                                            <th className="dt-body-right sorting" tabIndex="0" aria-controls="myProjectTable" rowSpan="1" colSpan="1" aria-label="Stage: activate to sort column ascending">Stage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Box of Crayons</a></td>
                                            <td>23-02-2021</td>
                                            <td>1 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar4} alt="Aatar" className="avatar sm rounded-circle me-2" /><a href="#!">Peter</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >85%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-warning">MEDIUM</span></td>
                                        </tr>
                                        <tr role="row" className="even">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Fast Cad</a></td>
                                            <td>14-04-2021</td>
                                            <td>2 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar7} alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#!">Benjamin</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100" >76%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-secondary">MEDIUM</span></td>
                                        </tr>
                                        <tr role="row" className="odd">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Gob Geeklords</a></td>
                                            <td>16-03-2021</td>
                                            <td>10 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar5} alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#!">Evan</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" >65%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-success">LOW</span></td>
                                        </tr>
                                        <tr role="row" className="even">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Java Dalia</a></td>
                                            <td>17-03-2021</td>
                                            <td>8 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar6} alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#!">Connor</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" >48%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-secondary">MEDIUM</span></td>
                                        </tr>
                                        <tr role="row" className="odd">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Practice to Perfect</a></td>
                                            <td>12-02-2021</td>
                                            <td>1 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar2} alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#!">Colin</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >80%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-success">LOW</span></td>
                                        </tr>
                                        <tr role="row" className="even">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Rhinestone</a></td>
                                            <td>18-02-2021</td>
                                            <td>2 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar3} alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#!">Adam</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >90%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-danger">HIGH</span></td>
                                        </tr>
                                        <tr role="row" className="odd">
                                            <td tabIndex="0" className="sorting_1"><a href="projects">Social Geek Made</a></td>
                                            <td>10-01-2021</td>
                                            <td>4 Month</td>
                                            <td className=" dt-body-right"><img src={Avatar1} alt="Avatar" className="avatar sm  rounded-circle me-2" /><a href="#!">Keith</a></td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" >78%</div>
                                                </div>
                                            </td>
                                            <td className=" dt-body-right"><span className="badge bg-warning">MEDIUM</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }


export default ProjectInformationTable;