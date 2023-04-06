//Get the articles from the document. Each article is written out by hand for now. I'll try to improve it.
let articles = document.getElementsByClassName("articleInfo")
console.log(articles)
let article1 = articles[0]  
let article2 = articles[1]
let article3 = articles[2]
let article4 = articles[3]

//Get the readmore buttons
let readmore = document.getElementsByClassName("readmore")
let readmore1 = readmore[0]
let readmore2 = readmore[1]
let readmore3 = readmore[2]
let readmore4 = readmore[3]

//Get the read less buttons
let readless = document.getElementsByClassName("readless")
let readless1 = readless[0]
let readless2 = readless[1]
let readless3 = readless[2]
let readless4 = readless[3]

//Function definition for readmore
function readmoreFunc(article){
    let children = article.children

    // The preview
    children[1].style.display="none"

    // The readmore button
    children[2].style.display="none"
    
    // The fullview
    children[3].style.display="block"

    // The readless button
    children[4].style.display="block"

    console.log(children[0].innerHTML)
}

//Function definition for read less
function readlessFunc(article){
    let children = article.children

    // The preview
    children[1].style.display="block"

    // The readmore button
    children[2].style.display="block"
    
    // The fullview
    children[3].style.display="none"

    // The readless button
    children[4].style.display="none"
}


// Applying the functions to each readmore / readless button
readmore1.addEventListener("click", function() { readmoreFunc(article1) })
readmore2.addEventListener("click", function() { readmoreFunc(article2) })
readmore3.addEventListener("click", function() { readmoreFunc(article3) })
readmore4.addEventListener("click", function() { readmoreFunc(article4) })

readless1.addEventListener("click", function() { readlessFunc(article1) })
readless2.addEventListener("click", function() { readlessFunc(article2) })
readless3.addEventListener("click", function() { readlessFunc(article3) })
readless4.addEventListener("click", function() { readlessFunc(article4) })

//NOTE: By wrapping the function calls in anonymous functions, you ensure that they are only called when the user clicks the corresponding button.
// Otherwise, they are called on page load. Weird, I know.
