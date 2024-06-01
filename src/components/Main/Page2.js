import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Page2() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Page 2</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
           
        </div>
    );
};
