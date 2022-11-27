import { useState } from "react"
const PopularPlace = () =>{
    // const [btnState, setBtnState] = useState(false)
    // function handleColorBtn(){
    //     setBtnState(btnState => !btnState)
    // }

    // let toggleClassCheck = btnState ? 'active' : '';

    const [appState, changeState] = useState({
        activeObject : null,
        object : [{id : 1}, {id : 2}, {id: 3}, {id : 4}, {id : 5} ]
    });

    function toggleActive(index){
        changeState({...appState, activeObject: appState.object[index]});
    }


    function toggleActiveStyle(index){
        if(appState.object[index] === appState.activeObject){
            return "myButton active";
        }
        else{
            return "myButton";
        }
    }

    const Category = [
        {
            id : 1,
            category : "All"
        },
        {
            id : 2,
            category : "Trending"
        },
        {
            id : 3,
            category : "Popular"
        },
        {
            id : 4,
            category : "Feature"
        },
        {
            id : 5,
            category : "Recommend"
        },
        {
            id : 6,
            category : "Tour packages"
        }
    ];

     const pop_tour_package = [
        {
            package_id : 1,
            package_title : "Koh Rong",
            package_location : "Sihanouk",
            package_description : "Located near the coast of Sihanoukville, Cambodia, Koh Rong is famous for its serene beauty. Often described as an ‘island paradise’ by visiting tourists, the island boasts pristine white sandy beaches, warm crystal-clear ocean waters, and a hot tropical climate. ",
            package_price : 199,
            package_thumbnail : "jpg",
            package_category : "test",
            package_filter : "Trending"
        },
        {
            package_id : 2,
            package_title : "Angkor Wat",
            package_location : "Siem Reap",
            package_description : "Located near the coast of Sihanoukville, Cambodia, Koh Rong is famous for its serene beauty. Often described as an ‘island paradise’ by visiting tourists, the island boasts pristine white sandy beaches, warm crystal-clear ocean waters, and a hot tropical climate. ",
            package_price : 299,
            package_thumbnail : "jpg",
            package_category : "test",
            package_filter : "Popular"
        },
        {
            package_id : 3,
            package_title : "Koh Pen",
            package_location : "Kampong Cham",
            package_description : "Located near the coast of Sihanoukville, Cambodia, Koh Rong is famous for its serene beauty. Often described as an ‘island paradise’ by visiting tourists, the island boasts pristine white sandy beaches, warm crystal-clear ocean waters, and a hot tropical climate. ",
            package_price : 99,
            package_thumbnail : "jpg",
            package_category : "test",
            package_filter : "Feature"
        },
        {
            package_id : 4,
            package_title : "Koh Rong",
            package_location : "Sihanouk",
            package_description : "Located near the coast of Sihanoukville, Cambodia, Koh Rong is famous for its serene beauty. Often described as an ‘island paradise’ by visiting tourists, the island boasts pristine white sandy beaches, warm crystal-clear ocean waters, and a hot tropical climate. ",
            package_price : 199,
            package_thumbnail : "jpg",
            package_category : "test",
            package_filter : "Recommend"
        },
        {
            package_id : 5,
            package_title : "Koh Rong",
            package_location : "Sihanouk",
            package_description : "Located near the coast of Sihanoukville, Cambodia, Koh Rong is famous for its serene beauty. Often described as an ‘island paradise’ by visiting tourists, the island boasts pristine white sandy beaches, warm crystal-clear ocean waters, and a hot tropical climate. ",
            package_price : 199,
            package_thumbnail : "jpg",
            package_category : "test",
            package_filter : "Recommend"
        }
     ]


    

    const [filter, setFilter] = useState("All");
    const filterResult = (catItem) =>{
        const result = pop_tour_package.filter((currentData) =>{
            // console.log(currentData)
            // console.log(currentData.package_filter)
            // console.log(catItem)
            if(catItem === "All"){
                console.log(currentData.package_filter);
                return currentData.package_filter;
            }
            console.log(catItem)
            return currentData.package_filter === catItem;
        });

        setFilter(result);
        setItem(result);
       
    }

    const [item, setItem] = useState(pop_tour_package);
    
    


    return (
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>Popular Tour <span>Package</span></h1></div>
                    </div>
                    <div className='row mt-xl-3 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                        </div>
                    </div>
            </div>

            <div className="menu-tabs container d-flex justify-content-center mt-3">
                <div className="container-fluid d-flex justify-content-evenly">
                    {/* <button className="myButton active">All</button>
                    <button className="myButton">Trending</button>
                    <button className="myButton">Popular</button>
                    <button className="myButton">Feature</button>
                    <button className="myButton">Recommend</button>
                    <button className="myButton">Tour packages</button> */}

                    {
                        Category.map((element, index) =>(
                            <button key={index} className={toggleActiveStyle(index)} onClick={()=>{toggleActive(index) ; filterResult(element.category); } }>{element.category}</button>
                            
                        ))
                    }
                </div>
            </div>

            <div className="menu-items ps-5 pe-5 container mt-5 ">
                <div className="row">
                    
                    {
                        item.map((element, index) =>(
                                <div className="overflow-hidden col-12 col-md-6 col-lg-4 col-xl-3 p-0 mb-3">
                                    <div className="menu-item">
                                <div className="row">
                                    <div className="place-box">
                                        <div className="w-100 h-50 overflow-hidden">
                                            <img src="https://dummyimage.com/300.png/09f/fff" className="fit-cover" alt="" />
                                        </div>

                                        <div className="w-100 h-50">
                                            <div className="container-fluid">

                                                {/* @place-title */}
                                                <div className="row row pt-3 ps-3 pe-3 pb-0 m-0">
                                                    <div className="col-6 p-0">
                                                        <h5>{element.package_title}</h5>
                                                    </div>
                                                    <div className="col-6 p-0 d-flex justify-content-end">
                                                        <p className="fw-bold">$ {element.package_price}</p>
                                                    </div>
                                                </div>

                                                {/* @location */}
                                                <div className="row mt-2 ps-3">
                                                    <div className="col-12 d-flex align-items-center">
                                                        <p className="p-0">Location : {element.package_location}</p>
                                                    </div>
                                                    
                                                </div>

                                                {/* @description */}

                                                <div className="row ps-3 pe-2 mt-1">
                                                    <div className="col-12">
                                                        <span className="fw-light">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique illum doloribus vitae.
                                                        </span>
                                                    </div>
                                                </div>


                                                {/* @ btn more */}
                                                <div className="row">
                                                    <div className="col-12 d-flex justify-content-end">
                                                        <button className="btn btn-success fw-light mt-2">Read more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                        )) 
                    }

                    
                    

                    

                    
                    
                    
                    
                </div>
            </div>

            
        </>
    )
}

export default PopularPlace