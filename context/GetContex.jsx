import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GetDataContex = createContext();

const GetDataContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://10.10.3.74:7777/get_owner");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const state = {};
  return (
    <GetDataContex.Provider value={state}>{children}</GetDataContex.Provider>
  );
};

export default GetDataContextProvider;
