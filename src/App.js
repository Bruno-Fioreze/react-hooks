import React, { useState, useEffect } from "react";
import { ThemeContext, Theme } from "./Theme";
import Card from "./Card";

const App = () => {

  const [token, setToken] = useState();

    useEffect(() => {
        setTimeout(
            () => {
                setToken("1as5as51a6s1as5");
            }, 4000
        )
    }, [setToken]);

  return (
    <ThemeContext.Provider value={ {...Theme.primary, token} }>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App