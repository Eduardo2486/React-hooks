import React from 'react'

const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jennifer" },
    { id: "3", name: "Francisco" },
    { id: "4", name: "Clay" },
    { id: "5", name: "Oscar" },
    { id: "6", name: "Juan" },
    { id: "7", name: "Grace" },
    { id: "8", name: "Chris" },
    { id: "9", name: "Grant" },
    { id: "10", name: "Kim" }
];
  

const Memo = () => {
    const [name, setName] = React.useState("");
    const [search, setSearch] = React.useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };

    const searchName = () => {
        setSearch(name)
    } 

    const foundUsers = React.useMemo(() => {
        return users.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [search])
    

    return(
        <div>
            <input onChange={handleName} value={name} />
            <button onClick={searchName}>Search</button>
            <ul>
                {foundUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Memo;
