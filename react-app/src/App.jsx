import {useState, useEffect} from 'react'

const Card = ({title}) => {
  const[count, setCount]=useState(0);
  const [hasLiked, setHasLiked] = useState(false); //state variable hasLiked with default value false
    //states are not consistent over browser reloads/rerenders
    //but when states are changed, react automatically rerenders the component to reflect the change onscreen

    //hook - special functions that let you tap into react features
    useEffect(() => {
      console.log("${title} has been liked: ${hasLiked}");
    }, [hasLiked]); //dependency array (deps) -- only if hasLiked changed, then this useEffect will be called

    // useEffect(()=>{
    //   console.log("CARD RENDERED")
    // }, []); //runs only when this component appears

    //conditional rednering -- show different ui depending on diff criteria

  return (
    <div className="card" onClick={()=> setCount(count+1)}>
      <h2>{title} <br/> {count || null}</h2>

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
