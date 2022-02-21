import './hero.css'
export default function Hero({marvelHero}) {
const {name, weapon, alias, hobbies} = marvelHero
const hobbiesList = hobbies.map((hobby, index) => <li key ={index}> {hobby}</li>)  
  return (
    <div  className="hero">
      <h2>Hero: {name} </h2>
      <h3>Weapon: {weapon}</h3>
      <h3>Alias: {alias}</h3>
    <ul>{hobbiesList}</ul>
    </div>
    
  )
}