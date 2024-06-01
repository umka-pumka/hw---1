import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page1() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Page 1</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
           
        </div>
    );
};
