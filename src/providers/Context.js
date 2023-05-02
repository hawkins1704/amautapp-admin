import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (newValue) => {
        setUser(newValue);
    };

    return (
        <MyContext.Provider value={{ user, updateUser }}>
            {children}
        </MyContext.Provider>
    );
};
