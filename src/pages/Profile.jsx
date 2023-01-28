import { useState } from "react";

const Profile = (req, res) =>{
    const [user, setUser] = useState([]);

    return(
        user.length 
        ? 
        user.map( e=>
            <li>
                {e.id}
            </li>    
        )
        :
        <div>USer not Authenticated</div>

    )
}
export default Profile;