import { useContext, createContext} from "react";

export const userContext= createContext({
    user:[],
    addUser: ()=>{},
    removeUser:()=>{},
    updateUser:()=>{}
})

export const UserContextProvider= userContext.Provider

export default function useUser(){
    return useContext(userContext)
}