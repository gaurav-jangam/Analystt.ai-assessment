import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import axios from 'axios';


const Dashboard = () => {

    const [details, setDetails] = useState();
    const [currentPage, setCurrentpage] = useState(1);
    const [postPerpage, setPostperpage] = useState(3);

    const getData = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setDetails(data);
    }

    useEffect(() => {
        getData()
    }, [])

    const lastPostIndex = currentPage * postPerpage;
    const firstPostIndex = lastPostIndex - postPerpage;

    return (
        <div className='app'>
            <div className='container'>
                {!details ? (
                    <Spinner/>
                )
                    : (details.slice(firstPostIndex, lastPostIndex).map((item) => (
                        <Card
                            key={item.id}
                            data={item}
                        />
                    )))}
            </div>
            <Pagination
                totalPosts={details?.length}
                postPerpage={postPerpage}
                setCurrentPage={setCurrentpage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Dashboard