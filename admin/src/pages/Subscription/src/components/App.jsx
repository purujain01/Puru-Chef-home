import React from "react";
import Main from "./Main";
import Chart from "./Chart";

const App = () => {
    return (
        <>
    <div className="box1">
    <Main
        content= "TOTAL CUSTOMERS"
        number = "123"
    />
    </div>
    <div className="box2">
    <Main
        content= "TOTAL PRODUCTS SOLD"
        number = "123"
    />
    </div>
    <div className="box3">
    <Main
        content= "TOTAL NEWSLETTER SUBSCRIPTION"
        number = "123"
    />
    </div>

    <h1 className="salesText">Sales Performance</h1>

    <Chart />

    </>
    )
}

export default App;