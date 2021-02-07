import React, { useEffect, useState } from 'react';

const Photo = ({ match }) => {
    useEffect(() => {
        fetchItem();
        // console.log("match", match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        // console.log("item", item);
    }

    return (
        <div>
            <div>
                <img src={item.url} alt="" />
                <h1>{item.title}</h1>
            </div>
        </div>
    )
}

export default Photo;
