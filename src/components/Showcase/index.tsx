import React from "react";
import "./styles.scss";
import cupcakeLogo from "../../assets/cupcake.png";
import ShowcaseCard from "../ShowcaseCard";

const Showcase = () => {
  const cardsMock = [
    {
      id: 1,
      image: cupcakeLogo,
      title: "Cupcake",
      description: "Sweet cupcake",
      price: 9.99,
    },
    {
      id: 2,
      image: cupcakeLogo,
      title: "Cupcake",
      description: "Sweet cupcake",
      price: 9.99,
    },
    {
      id: 3,
      image: cupcakeLogo,
      title: "Cupcake",
      description: "Sweet cupcake",
      price: 9.99,
    },
    {
      id: 4,
      image: cupcakeLogo,
      title: "Cupcake",
      description: "Sweet cupcake",
      price: 9.99,
    },
    {
      id: 5,
      image: cupcakeLogo,
      title: "Cupcake",
      description: "Sweet cupcake",
      price: 9.99,
    },
  ];

  return (
    <div className="showcase-container">
      {!!cardsMock.length &&
        cardsMock.map((card) => {
          const { id, image, title, description, price } = card;
          return (
            <ShowcaseCard
              key={id}
              image={image}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
    </div>
  );
};

export default Showcase;
