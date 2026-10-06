const products = [
    { id: 1, name: "Product 1", price: 120000 },
    { id: 2, name: "Product 2", price: 95000 },
    { id: 3, name: "Product 3", price: 210000 },
    { id: 4, name: "Product 4", price: 180000 },
    { id: 5, name: "Product 5", price: 76000 },

    { id: 6, name: "Product 6", price: 134000 },
    { id: 7, name: "Product 7", price: 99000 },
    { id: 8, name: "Product 8", price: 250000 },
    { id: 9, name: "Product 9", price: 175000 },
    { id: 10, name: "Product 10", price: 89000 },

    { id: 11, name: "Product 11", price: 142000 },
    { id: 12, name: "Product 12", price: 199000 },
    { id: 13, name: "Product 13", price: 110000 },
    { id: 14, name: "Product 14", price: 305000 },
    { id: 15, name: "Product 15", price: 67000 },

    { id: 16, name: "Product 16", price: 158000 },
    { id: 17, name: "Product 17", price: 92000 },
    { id: 18, name: "Product 18", price: 410000 },
    { id: 19, name: "Product 19", price: 225000 },
    { id: 20, name: "Product 20", price: 130000 }
]

const list$ = document.getElementById("list-item")
const Pagination$ = document.getElementById("Pagination")
const page$$ = document.querySelectorAll(".page")

let counter = products.length

let itemsPerPage = 1 // pagination btn
let currentPage = 1 // live page

// slice array for pagination part
function sliceArray(products, currentpage) {
    let start = (currentpage - 1) * itemsPerPage
    let end = currentpage * itemsPerPage
    return products.slice(start, end)
}

// creat pagination btn
for (let x = 0; x < counter / 5; x++) {

    // creat btn 
    let div = document.createElement("div")
    div.className = "page"
    Pagination$.append(div)

    // content of page btn
    div.innerHTML = itemsPerPage
    // and 2 , 3 , 4 ...
    itemsPerPage++

    // SET click event for all page btn
    div.addEventListener("click", function (e) {
        currentPage = +e.target.textContent
        generateItem(currentPage)
    })

}

// render function for creat pages and item
function generateItem(currentpage) {
    list$.innerHTML = ""

    // slice array item and 👇
    let boxOfItem = sliceArray(products, currentpage)

    // generate item for list 👆
    boxOfItem.forEach(function (item) {

        // div
        let div$ = document.createElement("div")
        div$.className = "item"
        // h3
        let h3 = document.createElement("h3")
        h3.innerHTML = item.name
        div$.append(h3)

        list$.append(div$)

    })
}

// after reloading run this function
window.addEventListener("load", function () {
    generateItem(currentPage)
})

// comment 1