import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const currTime = new Date().toLocaleTimeString("en-SG");
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function Header(){
    return <div className="header">
        <h1>Attic Pizzeria</h1>
    </div>
}
function Pizza({name,ingrediant,price,image}){
    return(
        <div className="pizza">
            <img style={{height: 200, width: 200}} src={image}/>
            <p>{name}</p>
            <p>{ingrediant}</p>
            <p>{price}</p>
        </div>
    )
}
function Menu(){
    return(
        <div className="menu">
            <h2>Our Menu</h2>
            {pizzaData.map((pizza) => (
                <Pizza
                    key={pizza.name}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={"$"+pizza.price}
                    image={pizza.photoName}
                />
            ))}
        </div>
    )
}
function Footer(){
    if (currTime >= "10:00:00" & currTime <= "22:00:00"){
    return(
        <div className="order">
        <footer>We're currently open</footer>
        <button className="btn">Order</button>
        </div>
    )}
    else{
        return(
            <footer>Sorry we're closed</footer>
        )
    }
}

function App() {
    return(
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);