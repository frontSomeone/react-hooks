import React, {useCallback, useEffect, useState} from 'react';
import { debounce } from 'lodash';
import './TaskThree.css';

function useFetch() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    // функция для получения данных с Mock API
    let controller = new AbortController();
    useEffect(() => {
        controller.abort();
        }, []);

    useEffect(debounce(() => {
        fetchData(search)
    }, 500), [search]);
    
    const fetchData = useCallback(async (search) => {
        controller.abort();
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`);
        console.log(response);
        setPosts(response.json())
        return await response.json();
    });
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