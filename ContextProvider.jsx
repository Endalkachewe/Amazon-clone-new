import { createContext, useState } from "react"


const colorContext=createContext()
export const ThemeProvider = ({chidren}) => {
    const [color, setColor] = useState('light')
    const colorToggler = () => {
        setColor((pre)=>pre==='light'?'dark':'light')
    }

    return (
        <colorContext.Provider value={{color, colorToggler}} >
            {chidren}
        </colorContext.Provider>
    )
}

