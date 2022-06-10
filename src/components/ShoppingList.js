import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit  }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setsearch] = useState("");
  function onSearchChange(event) {
    setsearch(event.target.value);

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All"  ){
      return search===""? true: item.name.toLowerCase().includes(search.toLowerCase())}

    return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());



  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
