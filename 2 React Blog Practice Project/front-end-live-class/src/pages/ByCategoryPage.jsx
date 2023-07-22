import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout.jsx";
import {postCategories, postList, postNewest} from "../ApiRequest/ApiRequest.js";
import Loader from "../component/Loader.jsx";
import BlogList from "../component/BlogList.jsx";
import {useParams} from "react-router-dom";

const ByCategoryPage = () => {

    let {id}=useParams();

    const [list,setList]=useState(null);


    useEffect(()=>{
        (async () => {
            let res= await postList(id);
            setList(res)
        })()
    },[id])


    return (
        <Layout>
            {
                list===null ? <Loader/>:<BlogList list={list}/>
            }
        </Layout>
    );
};

export default ByCategoryPage;