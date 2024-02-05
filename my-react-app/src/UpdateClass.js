import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateClass() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const history = useHistory();

    useEffect(() => {
                axios.get(http: //localhost:3000/classes/${id})
                    .then(response => {
                        setName(response.data.name);
                        setTeacher(response.data.teacher);
                    })
                    .catch(error => {
                        console.error('Error fetching class:', error);
                    });
                }, [id]);

            const handleSubmit = (event) => {
                event.preventDefault();
                const updatedClass = { name, teacher };

                axios.put(http: //localhost:3000/classes/${id}, updatedClass)
                    .then(response => {
                        console.log('Class updated:', response.data);
                        history.push('/');
                    })
                    .catch(error => {
                        console.error('Error updating class:', error);
                    });
                };

                return ( <
                    div >
                    <
                    h1 > Update Class < /h1> <
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
                    button type = "submit" > Update < /button> <
                    /form> <
                    /div>
                );
            }

            export default UpdateClass;