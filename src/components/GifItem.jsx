
export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={ url } />
        <h4>{ title }</h4>
    </div>
  )
}
