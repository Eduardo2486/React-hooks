import React from 'react'

const Effect = () => {
    const [users, setUsers] = React.useState({users: []});

    React.useEffect(() => {
        fetch('https://dummyjson.com/users').then(res => res.json()).then(data => {
            setUsers(data);
        })
    });

    return(
        <div>
            <ul>    
               {
                    users.users.map((user)=>{
                        return <li key={user.id}>{user.firstName}</li>
                    })
               }
            </ul>
        </div>
    );
}

export default Effect;
