import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateClass from "./CreateClass";
import UpdateClass from "./UpdateClass";

function App() {
    return ( <
        Router >
        <
        div >
        <
        Switch >
        <
        Route path = "/"
        extract component = { Dashboard }
        /> <
        Route path = "/create"
        component = { CreateClass }
        /> <
        Route path = "/update/:id"
        component = { UpdateClass }
        /> < /
        Switch > < /
        div > < /
        Router >
    );
}

export default App;