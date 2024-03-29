import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateClass() {
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newClass = { name, teacher };

        axios.post('http://localhost:3000/classes', newClass)
            .then(response => {
                console.log('Class created:', response.data);
                history.push('/');
            })
            .catch(error => {
                console.error('Error creating class:', error);
            });
    };

    return ( <
        div >
        <
        h1 > Create New Class < /h1> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Name: < /label> <
        input type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        required / >
        <
        /div> <
        div >
        <
        label > Teacher: < /label> <
        input type = "text"
        value = { teacher }
        onChange = {
            (e) => setTeacher(e.target.value) }
        required / >
        <
        /div> <
        button type = "submit" > Create < /button> <
        /form> <
        /div>
    );
}

export default CreateClass;