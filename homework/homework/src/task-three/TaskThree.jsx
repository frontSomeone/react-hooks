import React, {useEffect, useState, useCallback} from 'react';
import { debounce } from 'lodash';
import './TaskThree.css';

function useFetch() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState();
    // функция для получения данных с Mock API
    let controller = new AbortController();
    useEffect(() => {
        if (search === undefined) {
            setPosts([]);
        } else {
            fetchData(search, controller);
            setLoad("Загрузка");
        }
    }, [search]);
    
        const fetchData = useCallback(debounce(async(search, controller) => {
            if (search === "") {
                setPosts([]);
            } else {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, {signal: controller.signal});
                setPosts(await response.json())
            }
            setLoad("");
    }, 500), []);
    
    return {setSearch, posts, load}
}

export default function TaskThree() {
    const {setSearch, posts, load} = useFetch();
    return (
        <div className="TaskThree">
            <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search posts"/>
            <h1>Posts</h1>
            <div>{load}</div>
            <ul>
                {posts.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}