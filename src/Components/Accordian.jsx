import React, { useState } from 'react'

const Accordian = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const Accordian1 = () => {
        setShow(!show)
    }
    const Accordian2 = () => {
        setShow1(!show1)
    }
    const Accordian3 = () => {
        setShow2(!show2)
    }
    return (
        <>
            <div className="container my-5" style={{ borderRadius: '10px', border: '1px solid', padding: '20px', cursor: 'pointer' }}>
                <hr />
                <div className="ac contaiiner my-3" onClick={Accordian1}>
                    <h2>Introduction<i className="fa-solid  fa-arrow-down float-end mx-5"></i></h2>
                    {show && <div><ol className="list-group list-group-numbered p-3">
                        <li className="info list-group-item">My self <b><i>Shariq Shahood</i></b></li>
                        <li className="info list-group-item">Currently, I am pursuing my degree in <b>BSCS</b> from <b>PAF-KIET.</b></li>
                        <li className="info list-group-item">I am in Third year <b>6<sup>th</sup></b> Semester with 3.34 CGPA</li>
                    </ol></div>}
                </div>
                <hr />
                <div className="ac contaiiner my-3" onClick={Accordian2}>
                    <h2>Education<i className="fa-solid fa-arrow-down float-end mx-5"></i></h2>
                    {show1 && <div><ol className="list-group list-group-numbered p-3">
                        <li className="info list-group-item"><b>Matriculation :</b> Sir Syed Model Secondary School</li>
                        <li className="info list-group-item"><b>Intermediate :</b> Jinnah Government College, Karachi</li>
                        <li className="info list-group-item"><b>Bechelors :</b><b> PAF-KIET</b> Pakistan Air Force Karachi Institue of Economics & Technology</li>
                    </ol></div>}
                </div>
                <hr />
                <div className="ac contaiiner my-3" onClick={Accordian3}>
                    <h2>Portfolio<i className="fa-solid fa-arrow-down float-end mx-5"></i></h2>
                    {show2 && <div><ol className="list-group list-group-numbered p-3">
                            <a href="https://shariqshahood.netlify.app/" target="_blank" style={{textDecoration: 'none', color:'red',fontWeight:'bold'}}>Click Me <i className="fa-solid fa-eye"></i></a>
                    </ol></div>}
                </div>
                <hr />
            </div>
        </>
    )
}

export default Accordian
