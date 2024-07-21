import { createContext, useContext } from "react"

export type GlobalContent={
    fileObject:any,
    setFileObject:Function
}

export const GlobalContext=createContext<GlobalContent>({
    fileObject:{},
    setFileObject:()=>{}
})

export const useGlobalContext=()=>useContext(GlobalContext)