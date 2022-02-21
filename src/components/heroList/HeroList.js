import Hero from "../hero/Hero"
export default function HeroList({data}){
  return (
    <div>
      {data.map((hero) => {
        return <Hero marvelHero = {hero}/>
      })}
    </div>
  )
}