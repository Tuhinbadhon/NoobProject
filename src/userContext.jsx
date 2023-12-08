import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(storedData);
  }, []);

  const setUserDataContext = (data) => {
    // Generate a unique ID using uuid
    const id = uuid();

    // Add the unique ID to the user data
    const newData = { ...data, id };

    // Update the user data state
    setUserData((prevData) => [...prevData, newData]);

    // Update localStorage with the new user data
    localStorage.setItem("userData", JSON.stringify([...userData, newData]));
  };

  return (
    <UserContext.Provider value={{ userData, setUserDataContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
