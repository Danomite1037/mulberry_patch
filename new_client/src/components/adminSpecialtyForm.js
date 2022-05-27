import { useState, React } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Resizer from "react-image-file-resizer";


const SpecialtyCookieForm = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        price: 0,
        img: "",
        description: "",
    });

    const [errors,setErrors] = useState ({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/specialtyCookie/create", form)
            .then(res => {
                console.log(res)
                history.go("/SpecialtyCookies")
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })


    }

    //converts img to text
    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file, //the file object what th input in form is
                200, // width in px
                200, // hight in px
                "JPEG", // what the format is converthed to
                80,// img quality 0-100
                0,// rotation of img
                (uri) => {
                    resolve(uri); //getting new img url
                },
                "base64" // what is will be formatted as
            );
        });
        const onChangeImg = async (event) => {
            const file = event.target.files[0];
            const image = await resizeFile(file);
            console.log(image);
            setForm({
                ...form,
                img : image
            })
        };
        
    return (
        <div className="w-50 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className=" m-3" >
                    <label htmlFor="price">Picture</label>
                    <input type="file" onChange={onChangeImg} name="img" className="form-control" />

                </div>
                <div className=" m-3">
                    <label htmlFor="name">Cookie Name</label>
                    <input type="text" onChange={onChangeHandler} name="name" className="form-control" id="floatingInput" />
                    <span className="alert-danger"> {errors.name&&errors.name.message} </span>
                </div>
                <div className=" m-3">
                    <label htmlFor="price">Price</label>
                    <input type="number" onChange={onChangeHandler}name="price" className="form-control" id="floatingPassword" />
                    <span className="alert-danger"> {errors.price&&errors.price.message} </span>
                </div>
                <div className=" m-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" onChange={onChangeHandler} name="description" className="form-control" id="floatingInput" />
                </div>
                <input className='btn btn-primary my-3' type="submit" />
            </form>
        </div>
    );
}

export default SpecialtyCookieForm;