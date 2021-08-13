import React from "react";
import Subs from "./Subs";


const App = () => {
    return (
        <>
    <h1 className="newsletter">Newsletter</h1>
    <div className="newsOne">
    <Subs 
    name= "Mr Nobody"
    email = "nobody@gmail.com"
    number = "123456789"

    />
    </div>
    <div className="newsTwo">
    <Subs
    name= "Mr Nobody"
    email = "nobody@gmail.com"
    number = "123456789"
     />
    </div>
    <div className="newsThree">
    <Subs
    name= "Mr Nobody"
    email = "nobody@gmail.com"
    number = "123456789"
     />
    </div>

    </>
    )
}

export default App;