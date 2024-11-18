import React, {useEffect, useState} from 'react';
import { debounce } from 'lodash';
import './TaskThree.css';

function useFetch() {
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState();
    console.log(load);
    console.log(posts);
    console.log(search);
    
    // функция для получения данных с Mock API
    let controller = new AbortController();
    useEffect(() => {
        if (search) {
            fetchData(search, controller);
            setLoad("Загрузка");
        }
        if (posts) {
            setLoad("");
        }
        if (search === "") {
            setPosts([]);
        }
    }, [search]);
    
        const fetchData = debounce(async(search, controller) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, {signal: controller.signal});
        console.log(response);
        
        setPosts(await response.json())
    }, 500);
    
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