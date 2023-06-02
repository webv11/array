const colorsArray = [
    { id: 1, name: "red" },
    { id: 2, name: "yellow" },
    { id: 2, name: "green" },
    { id: 3, name: "brown" },
    { id: 4, name: "gray" },
    { id: 5, name: "white" },
    { id: 5, name: "red" },
    { id: 6, name: "black" }
  ];
  
  const storeName = [];
  
  const filteredArray = colorsArray.filter(color => color.name !== "green")
  console.log(filteredArray);