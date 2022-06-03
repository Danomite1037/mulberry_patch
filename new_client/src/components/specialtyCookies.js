import { React, useEffect, useState } from "react";
import SpecialtyCookieForm from "./adminSpecialtyForm";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css';
import Modal from "./modelForSpecialty";

const SpecialtyCookies = (props) => {
    const [cookie, setCookie] = useState([]);
    const [modal, setModal] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/specialtyCookie/all")
            .then(res => {
                console.log(res.data)
                setCookie(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const onClickHandler = (id) => {
        // console.log("you clicked the product with id" + id)
        axios.get("http://localhost:8000/api/specialtyCookie/findOne/"+id)
            .then(res => {
                console.log(res.data);
                setModal(res.data)
            })
            .catch(err => console.log(err))
    }

    

        return (
            <div>
                <h1>Specialty Cookies</h1>
                <SpecialtyCookieForm />
                {
                    
                    cookie.map((item, i) => {
                        return(
                            <div id="specialtyCookie" key={i} className="d-inline-block" >
                                <div>
                                    <img id="cookieImg" src={item.img} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title"> {item.name} </h5>
                                        <button type="button" onClick={() => onClickHandler(item._id)} className="m-2 btn btn-primary d-block mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Details</button>
                                        <Link className="btn btn-primary">Order</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Modal name={modal.name} img={modal.img} id={modal._id} details={modal.description}/>
            </div>
        );
    
}

    export default SpecialtyCookies;