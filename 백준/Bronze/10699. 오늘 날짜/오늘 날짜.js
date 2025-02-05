const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().length === 1 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
const day = new Date().getDate().toString().length === 1 ? "0" + new Date().getDate() : new Date().getDate();

console.log(`${year}-${month}-${day}`);