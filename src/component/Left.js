import React, { useContext, useEffect } from "react";
import ContextData from "../context/product-data";
import "../style/left.css";

const Left = () => {
  const { allProducts, categories, setActive, active } =
    useContext(ContextData);

  const categorys = categories.map((data) => {
    return (
      <a
        className="buton"
        onClick={() => {
          setActive(data);
        }}
        key={data.category}
      >
        {data.category}
      </a>
    );
  });

//   useEffect(() => {
//     // setActive(allProducts);
//   }, []);

  // useEffect(() => console.log(active), [active]);
  // console.log(categories);
  return (
    <div className="list-parent">
      <div className="select-order">Select Your Order</div>
      <div className="tabs-btn">
        <a className="buton"onClick={()=>setActive([])}>All</a>
        {categorys}</div>
    </div>
  );
};

export default Left;
