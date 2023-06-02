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

const storeIds = [];

const filteredArray = colorsArray.filter(element=>{
    const checkDuplicate = storeIds.includes(element.id);

    if(!checkDuplicate){
        storeIds.push(element.id)
    return true;
    }
    return false;
});
console.log(filteredArray);