import { useState, React } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const SpecialtyCookieForm = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        price: 0,
        img: "",
        description: "",
    });

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const getBase64 = (img) => {
        return (
            new Promise (resolve => {
                let fileInfo;
                let baseURL = "";

                let reader = new FileReader();
                reader.readAsDataURL(img);

                reader.onload = ()=> {
                    console.log("help me", reader);
                    baseURL = reader.results;
                    console.log(baseURL);
                    resolve(baseURL);
                };
                console.log(fileInfo);
            })
        )
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:8000/api/specialtyCookie/create", form)
        .then(res => {
            console.log(res)
            history.push("/SpecialtyCookies")
        })
        .catch(err => {
            console.log(err.response.data.err.errors);
            // setErrors(err.response.data.err.errors);
        })
        
        
    }
    const handleFileInputChange = (event) => {
        console.log(event.target.file[0]);
        let {img} = form;
        img = event.targetimg[0];
        getBase64(img)
            .then(results => {
                img["base64"] = results;
                console.log ("img is" + img);
                console.log(results)
                // setform ({
                //     baseURL : reult,
                //     file
                // });
            })
        .catch(err => {
            console.log(err);
        })
        // setForm ({
        //     img: eventNames.target.img
        // })
    }
    return (
        <div>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" id="floatingInput" />
                    <label for="name"></label>
                </div>
                <div className="form-floating">
                    <input type="number" name="price" className="form-control" id="floatingPassword" />
                    <label for="price">Price</label>
                </div>
                <div className="form-floating mb-3" onChange={{handleFileInputChange, onChangeHandler}}>
                    <input type="file" name="img" className="form-control" />

                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="description" className="form-control" id="floatingInput" />
                    <label for="description">Description</label>
                </div>
                <input className='btn btn-primary my-3' type="submit" />
            </form>
        </div>
    );
}