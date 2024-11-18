import React from "react";

export const Sort = () => {
  const categories = ["Все", "Новые", "Старые", "Популярные"];

  const [active, setActive] = React.useState(0);

  const onClickActive = (index) => {
    setActive(index);
  };

  return (
    <nav>
      {categories.map((value, index) => (
        <p
          onClick={() => onClickActive(index)}
          className={active === index ? "active" : undefined}
        >
          {value}
        </p>
      ))}
    </nav>
  );
};
