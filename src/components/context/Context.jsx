import React from 'react'

const UserContext = React.createContext();

const UserProvider = ({children, name}) => {

    return (
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    );
}

const User = () => {
    const context = React.useContext(UserContext);
    return(
        <div>
            {context}
        </div>
    );
}

const ContextComponent = () => {
    const [name, setName] = React.useState('');

    const onChange = (evt) => {
        setName(evt.target.value)
    };

    return (
        <>
            <input type="text" onChange={onChange} value={name} />
            <UserProvider name={name}>
                <User></User>
            </UserProvider>
        </>
    );
}

export default ContextComponent;