import {useState} from 'react'

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false); //state variable hasLiked with default value false
    //states are not consistent over browser reloads/rerenders
    //but when states are changed, react automatically rerenders the component to reflect the change onscreen

    //hook - special functions that let you tap into react features

  return (
    <div className="card" >
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️':'🤍'}
      </button>
    </div>
    
  )
}


const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true}/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}
  

export default App
