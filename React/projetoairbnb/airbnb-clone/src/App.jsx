import "./styles.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";



function App() {

   const elementData = data.map(elemento => {
    return ( <Card 
                   img =  {elemento.coverImg} 
                   rating = {elemento.stats.rating} 
                   reviewCount = {elemento.stats.reviewCount} 
                   country = {elemento.location} 
                   title = {elemento.title} 
                   price =  {elemento.price} 
                   openSpots = {elemento.openSpots} 
                   /> 
                  
                  );
  })


  return (
    <div className>
      <NavBar />
      <Hero />

        <section className="card-list">
        {elementData}
      </section>

    </div>
  );
}

export default App;
