import React from 'react'
import {useParams, Link, Route} from 'react-router-dom'


function Home(props) {
    return (
        <Link to = {"pizza/"}>
            <h1>Declan</h1>
            <button>Pizza</button>
        </Link>   
    )
}

export default Home
