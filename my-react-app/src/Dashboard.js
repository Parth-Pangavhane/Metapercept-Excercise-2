import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [classes, setCLlasses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/classes')
            .then(response => {
                setCLlasses(response.data);
            })
            .catch(error => {
                console.errror("Error getting in classes:", error);
            });
    }, []);

    return ( <
        div >
        <
        h1 > Classes < /h1> <
        Link to = "/create" > Create New Class < /Link> <
        table >
        <
        thead >
        <
        tr >
        <
        th > I D < /th> <
        th > Name < /th> <
        th > Teacher < /th> < 
        th > Action < /th>



        <
        /tr>< /thead >
        <
        tbody > {
            classes.map(classItem => ( <
                tr key = { classItem.id } >
                <
                td > { classItem.id } < /td> <
                td > { classItem.name } < /td> <
                td > { classItem.teacher } < /td> <
                td > < Link to = { `/update/${classItem.id}` } > Edit < /Link> <
                button > Delete < /button>< /td >



                <
                /
                tr >
            ))
        } <
        /tbody>



        <
        /
        table >
        <
        /div>
    );
}


export default Dashboard;