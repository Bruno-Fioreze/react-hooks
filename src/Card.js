import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import Form from "./Form"

const Card = () => {
    const theme = useContext(ThemeContext)
    console.log("theme:values", theme)
    return (
        <div>
            <Form />
            <button>
                Card Button
            </button>
        </div>
    )
}

export default Card;