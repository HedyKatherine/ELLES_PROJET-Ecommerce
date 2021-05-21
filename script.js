function sendToPage(){
    var input = document.getElementById("search").value;
    // var inputs = input.toLowerCase()
 

    // productList.forEach( product =>
    //     productName =  product.name
       
    //     )
    //     if (input.toLowerCase() == productName) {
    //         console.log(productName)
    //         location.href = "articles/tops.html";
    //         location.href = "articles/jeans.html";
    //         location.href = "articles/accesoires.html";
    //         location.href = "articles/chaussures.html";
    //         return false;
    //     }
    //     else {
    //         alert('Cet article est indisponible.');
    //     }
    // }

     
    if (input.toLowerCase() == "robe" || input == "T-shirt" || input == "chemise" || input == "top" || input == "haut" || input == "pull"){
        location.href = "articles/tops.html";
        return false;
    }
    else if (input.toLowerCase() == "jeans" || input == "jean" || input == "pantalon" || input == "pantalons"){
        location.href = "articles/jeans.html";
        return false;
    }
    else if (input.toLowerCase() == "accessoire" || input == "accessoires" || input == "sac" || input == "lunette" || input == "lunettes" || input == "masque"){
        location.href = "articles/accesoires.html";
        return false;
    }
    else if (input.toLowerCase() == "chaussure" || input == "chaussures"  || input == "talon" || input == "talons" || input == "escarpin" || input == "basket" || input == "converse"){
        location.href = "articles/chaussures.html";
        return false;
    }
    else {
        alert('Cet article est indisponible.');
    }
        }


