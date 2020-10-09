import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((c) => (
                    <GifGrid key={c} category={c} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
