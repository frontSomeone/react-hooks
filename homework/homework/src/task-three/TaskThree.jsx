import React, {useCallback, useEffect, useState} from 'react';
import { debounce, get } from 'lodash';
import './TaskThree.css';

function useFetch() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    // функция для получения данных с Mock API
    useEffect(() => {
        if (search) {
            let controller = new AbortController();
            fetchData(search, controller);
        }
    }, [search]);
    
    const fetchData = useCallback(debounce(async(search, controller) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, {signal: controller.signal});
        setPosts(await response.json())
    }, 500), []);
    return {setSearch, posts}
}


export default function TaskThree() {
    const {setSearch, posts} = useFetch();
    return (
        <div className="TaskThree">
            <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts"/>
            <h1>Posts</h1>
            <ul>
                {posts.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}