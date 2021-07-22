import React from 'react'
import kelly from "../../assets/23.jpg"
import governmebticon from "../../assets/govlogo.png"
import cowinicon from "../../assets/cowiniconsmall.png"


function HospitalMain() {
    return (
        <>
                 <div className="container-fluid">
                        <div className="row">
                                <div className='col-md-6 p-0'>
                                          <img className="img-fluid image-left-hospital" src={kelly} alt="" />
                                </div>
                                <div className='col-md-6'>
                                        <div className='row login-form-container'>
                                               <div className='col-md-7 col-sm-7 col-xs-5 mx-auto text-center '>
                                                   <div>
                                                       <img className="img-fluid government-emblem" src={governmebticon} alt="" />
                                                   </div>

                                                   <div className='mt-3'>
                                                      <img src={cowinicon} alt="" className="img-fluid cowin-icon" />
                                                   </div>

                                                   <div className='mt-3'>
                                                         <form>
                                                                    <input
                                                                        type="tel"
                                                                        placeholder='Phone no'
                                                                        required
                                                                        className='form-control hospital-id'
                                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                    /> 

                                                                    <button className='login-btn mt-4'>LOGIN</button>
                                                         </form>
                                                   </div>
                                                      
                                               </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </>
    )
}

export default HospitalMain
