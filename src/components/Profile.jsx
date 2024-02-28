import React, { useContext } from 'react'
import userContext from '../contexts/userContext'

function Profile() {
    const {user} = useContext(userContext);
    if(!user) return <div>Please login</div>

    return (
        <div>Welcome : {user}</div>
    )
}

export default Profile