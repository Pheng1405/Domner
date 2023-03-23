import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
const Posts = () =>{
    const user = useSelector(state=>state.user.userProfile);
    const [tour, setTour] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState("createdAt");
    const [sortData, setSortData] = useState(-1);
    const [editId, setEditId] = useState();
    let tourUrl = `http://localhost:8080/api/tour/mytours/${user.id}?page=${currentPage}&sortType=${sortType}&sortData=${sortData}`;
    
    const deleteConfirmation = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try{
                const deleteStatus = await axios.delete(`http://localhost:8080/api/tour/${id}`, {
                    headers:{
                        'authorization' : `Bearer ${JSON.parse(localStorage.getItem("access-token")).token}`,
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your post has been deleted.',
                    'success'
                  )
              }
              catch(e){
                Swal.fire(
                    'Failed!',
                    `Your post could not deleted.`,
                    'success'
                  )
              }

              
            }
          })
    }
    useEffect(() => {
        const getData = async () =>{
            const response = await axios.get(tourUrl, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
            }
            );
            setTour(response.data);
        }
        getData();
        // alert(tourUrl);
        console.log(tourUrl)
    }, [currentPage, sortData, sortType]);
    return(
        <>
            <div className="container justify-content-center align-content-center" style={{height : "80vh"}}>
                {
                    tour.totalTour > 0
                    ? 
                        <>
                        <div className="h-100 table-responsive">
                            <div className="container">
                                <div className="col mt-3">
                                    <select className="me-3 mb-3 p-1" onChange={(e)=>{setSortData(e.target.value); setSortType("price")}}>
                                        <option className="p-1" value="-1">Highest Price</option>
                                        <option className="p-1" value="1">Lowest Price</option>
                                    </select>
                                    <select className="p-1" name="" id="" onChange={(e)=>{setSortData(e.target.value); setSortType("createdAt")}}>
                                        <option className="p-1" value="-1">Latest</option>
                                        <option className="p-1" value="1">Oldest</option>
                                    </select>
                                </div>
                            </div>
                            <table style={{height : "70%"}} className="table mb-0 bg-white overflow-scroll">
                                <thead className="bg-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Cover</th>
                                        <th>Status</th>
                                        <th>Price</th>
                                        <th>Province</th>
                                        <th>Itinerary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                            tour.data.map((e) =>{
                                                e.statusColor = e.status == 'pending' ? 'bg-primary' : e.status == 'declined' ? 'bg-danger' :  'bg-success';
                                                return(
                                                    <tr key={e._id}>
                                                        <td>
                                                            {e.name}
                                                        </td>
                                                        <td>
                                                            {e.description.substring(0,40)}
                                                        </td>
                                                        <td>
                                                            <img src={e.imageCover} width={45} height={45} alt="" />
                                                        </td>
                                                        <td>
                                                            
                                                            <span className={`badge  rounded-pill d-inline ${e.statusColor}`}>{e.status}</span>
                                                        </td>
                                                        <td>{e.price}$</td>
                                                        <td>
                                                            
                                                            { e.provinceId ?  e.provinceId.name : "Unknown"}
                                                        </td>
                                                        <td>
                                                            Itinerary
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <button onClick={()=> setEditId(e._id)} className="btn btn-warning btn-sm btn-rounded me-2" data-bs-toggle="modal" data-bs-target="#editModal">
                                                                    Edit
                                                                </button>
                                                                <button onClick={() => deleteConfirmation(e._id)} className="btn btn-danger btn-sm btn-rounded">
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                    }
                                    
                                </tbody>
                            </table>
                            <nav className="float-end mt-3">
                                <ul className="pagination pagination-sm ">
                                    {
                                        tour.pageItem.map((e,i)=>{
                                            return(
                                                <li key={i} onClick={()=>setCurrentPage(e)} className="page-item"><a className="page-link text-black" href="#">{e}</a></li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                             </nav>
                            <div className="container d-flex justify-content-end my-4">
                                <Link className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#postModal">
                                    Add New Post
                                </Link>
                            </div>
                        </div>


                        <div className="modal" id="editModal">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                
                                <div className="container-fluid">
                                    {
                                        editId && 
                                        <EditPost id={editId}/>
                                    }
                                </div>
                                
                                </div>
                            </div>
                        </div>

                        {/* Post Modal */}
                        <div className="modal" id="postModal">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                
                                <div className="container-fluid">
                                    {
                                        <AddPost/>
                                    }
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        </>
                    : 
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h1 className="text-center">NO POST</h1>
                            <p className="mt-2">Please post more tour since we couldn't find any your tour post.</p>
                            <div className="text-center mt-3">
                            <   Link to={`add-post`} className="btn btn-primary text-white">Add New Post</Link>
                            </div>
                        </div>
                    </div>
                }
            
            </div>
            
                
            
        </>
    )
}

export default Posts;