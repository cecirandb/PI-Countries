import React from 'react';
import { useState, useEffect } from 'react-dom';
import s from './Loading.module.css';

function Loading() {
    const [loading, setLoading] = useState('Loading')
    useEffect(()=>{
        setTimeout(()=>{
            if (loading==='Loading') setLoading('Loading.')
            if (loading==='Loading.') setLoading('Loading..')
            if (loading==='Loading..') setLoading('Loading...')
            if (loading==='Loading...') setLoading('Loading')
            
        },500)
    },[loading])
    return (
        <div>
            <div className={s.loading}>
                <h1>{loading}</h1>
            </div>
        </div>
    )
}

export default Loading;
