import React from 'react'

let users;
const fetchUser = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            return resolve({
                name: "John",
                age: 35
            })
        },4000);
    })
}

const Users = () => {
    if (!users) {
        throw fetchUser().then(usersFetch => users = usersFetch)
    }


    return (
        <>
            <span>{users.name}</span>
            <span>{users.age}</span>
        </>
    );
};

const Suspense = () => {
    return (
        <div>
            <React.Suspense fallback={<>Loading...</>}>
                <Users />
            </React.Suspense>
        </div>
    );
};

export default Suspense;
