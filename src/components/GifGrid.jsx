import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifItem } from "./GifItem";

export const GifGrid = ({ category, categories,  onRemoveGif }) => {

    const { images, isLoading} = useFetchGifs(category);

    const removeGif = () => {
        onRemoveGif(category)
    }

    return (
    <>
        <div className="header-grid">
            <h3>{ category }</h3>
            {
                categories.length>1 && <button className="remove" onClick={ removeGif }>Remover (X)</button>
            }
        </div>
        
        {

            isLoading && (<h2>Cargando...</h2>) // Similar ternario -> ? : null
        }

        <div className="card-grid">
        {
            images.map((image) => (
                // <GifItem key={ id } title={title} url={url} /> // Una forma
                <GifItem
                    key={image.id}
                    {...image} // Exparcir todas las propiedades como props
                />
            ))
        }
        </div>
    </>
  )
}
