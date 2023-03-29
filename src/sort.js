const arrNum = [2, 4, 23, 1];
const arrStr = ["w", "mau", "aaa"];
const arrObj = [
  { title: "w", id: 2 },
  { title: "w", id: 3 },
  { title: "w", id: 1 },
];

function sortImpl(data) {
  const result = data.sort((a, b) => {
    if (a.id > b.id) {
        return -1
    }
  
  });
  return result;
}

console.log(sortImpl(arrObj));
