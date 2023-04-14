import React, { createContext } from 'react'

export let authContext = createContext();

let UserContext = ({ children }) => {
    return (
        <authContext.Provider value='raju'>
            {children}
        </authContext.Provider>
    )
}

export default UserContext;