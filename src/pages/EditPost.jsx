import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// const imageToBase64 = require('image-to-base64');

const EditPost = (props) =>{
    const [provinces, setProvinces] = useState([]);

    const navigate = useNavigate();
    const id = props.id;
    const tourUrl = `http://localhost:8080/api/tour/${id}`;
    useEffect(()=>{
        const getProvince = async () => {
            const response = await axios.get("http://localhost:8080/api/provinces");
            setProvinces(response.data.data);
        }
        getProvince();
     }, []);

    
     
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [pro, setPro] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [arrImage, setArrayImage] = useState([]);

    const handleCover = async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setCover(base64);
    }
    const handleImages = async (e) =>{
        const file = e.target.files;
        let arr = [];
        for(let i=0 ; i<file.length ; i++){
            arr.push(await convertBase64(file[i]));  
        }
        setArrayImage(arr);
        
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            name,
            price,
            imageCover : cover,
            images : arrImage,
            provinceId : pro,
            description
        }
        let updateStatus = "";
        try{
            updateStatus = await axios.put(
                tourUrl,
                data,
                {
                    headers:{
                        'authorization' : `Bearer ${JSON.parse(localStorage.getItem("access-token")).token}`,
                    }
                });

            // console.log(updateStatus)
            updateStatus  ? navigate('../posts') : navigate('./');
         }
        catch(e){
            console.log(updateStatus);
        }

    }





    return(
       <div className="container-fluid d-flex justify-content-center">
        <div className="col-12">
            <form className="container" onSubmit={handleSubmit}>
                {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                <div className="row mb-4">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form6Example2">Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="form6Example2" className="form-control" />
                        
                    </div>
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example3">Price</label>
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" id="form6Example3" className="form-control" />
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example4">Cover</label>
                    <input type="file" onChange={((e)=>handleCover(e))} id="form6Example4" className="form-control" />
                </div>

                {/* <!-- Image input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example5">Image</label>
                    <input type="file" multiple onChange={(e)=>handleImages(e)} id="form6Example5" className="form-control" />
                </div>

                {/* <!-- Number input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example6">Itinerary</label>
                    <input type="number" id="form6Example6" className="form-control" />
                    
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example6">Province</label>
                    <select className="form-select" value={pro} onChange={(e)=>setPro(e.target.value)} name="" id="province">
                        {
                            provinces.map((e) =>{
                                return(
                                    <option key={e._id} value={e._id}>{e.name}</option>
                                )
                            })
                        }
                    </select>      
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form6Example6">Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    
                </div>

            

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-success btn-block mb-4" data-bs-dismiss="modal">Update</button>
            </form>
        </div>
       </div>
    );
}

export default EditPost;