import React from "react";

export const Product = () => {
  const [activeHearts, setActiveHearts] = React.useState(false);

  const onClickActiveHearts = (index) => {
    setActiveHearts(true, index);
  };

  const items = [
    {
      id: 1,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-1.png",
    },
    {
      id: 2,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-2.png",
    },
    {
      id: 3,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-3.png",
    },
    {
      id: 4,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-4.png",
    },
    {
      id: 5,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-5.png",
    },
    {
      id: 6,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-6.png",
    },
    {
      id: 7,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-7.png",
    },
    {
      id: 8,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-8.png",
    },
    {
      id: 9,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-9.png",
    },
    {
      id: 10,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      desc: "Крассивые кроссоовки",
      image: "/assets/sneaker-10.png",
    },
  ];

  return (
    <div className="main">
      {items.map((obj, index) => (
        <div key={obj.id} className="card">
          <div>{obj.title}</div>
          <img width={"120px"} src={obj.image} alt="sneakers" />
          <div>{obj.desc}</div>
          <img
            onClick={() => onClickActiveHearts(index)}
            className="heart"
            src={
              activeHearts === true
                ? "/assets/heart-liked.svg"
                : "/assets/heart-unliked.svg"
            }
            alt="heart"
          />
        </div>
      ))}
    </div>
  );
};
