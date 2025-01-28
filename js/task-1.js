const item = document.querySelectorAll(".item");
const categories = document.querySelectorAll("#categories");

console.log(`Number of categories: ${item.length}`);

// console.log(item);
// console.log(categories);
// console.log(item.length);

item.forEach((item) => {

    const title = item.querySelector("h2").textContent; 
    console.log(`Category: ${title}`);

    const num = item.querySelectorAll("li").length;
    console.log(`Elements: ${num}`);
    
})
