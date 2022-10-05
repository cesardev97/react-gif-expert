import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        
        setCategories([value, ...categories]);
    }

    const onRemoveGif = (value) => {
        setCategories(categories.filter(x => x !== value))
    }
  
    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory onNewCategory= { onAddCategory } />

            { 
                categories.map(category => (
                    <GifGrid 
                        categories={ categories }
                        onRemoveGif={ onRemoveGif }
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
        </>
    )
}
