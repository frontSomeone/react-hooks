import React, {useCallback, useState} from 'react';
import { debounce } from 'lodash';
import './TaskThree.css';

function useFetch() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    // функция для получения данных с Mock API
    useCallback(() => fetchData(search), [search]);
    
    
    const fetchData = useCallback(debounce((search) => {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`)
    .then(response => {
        setPosts(response.json());
    })
    return response.json();
}, 500), [])
    return {setSearch, posts}
}


export default function TaskThree() {
    const {setSearch, posts} = useFetch();
    return (
        <div className="TaskThree">
            <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts"/>
            <h1>Posts</h1>
            <ul>
                {posts.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}