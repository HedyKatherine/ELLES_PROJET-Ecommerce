$(function() {
// id accesoires 11, 12, 13, 14, 15, 16
const bagPink = new Product('images/accesoires/pexels-artem-beliaikin-1100779.jpg', 'Sac Champêtre rose', 29.90, '11', 0, "Article description");
const bagGray = new Product('images/accesoires/content-pixie-ZB4eQcNqVUs-unsplash.jpeg', 'Sac Arianne gris', 129.90, '12', 0, "Article description");
const mask_earrings = new Product('images/accesoires/deepa-_-HgOccqaZQZo-unsplash.jpeg', 'Masque Stylus', 19.90, '13', 0, "Article description");
const bagGucci = new Product('images/accesoires/james-ree-ZmeFtu11Hpc-unsplash.jpeg', 'Sac Nova Black', 229.90, '14', 0, "Article description");
const bagStraw = new Product('images/accesoires/tamaki-kato-7croK2-BiVQ-unsplash.jpeg', 'Sac Konoa', 99.90, '15', 0, "Article description");
const glasses = new Product('images/accesoires/tamara-bellis-LJqRUWr9V0w-unsplash.jpeg', 'Lunettes de soleil Ava', 109.90, '16', 0, "Article description");
// id chaussures 21, 22, 23, 24, 25, 26
const heelBlack = new Product('images/chaussures/andrew-tanglao-tjvURCarBf0-unsplash.jpg', 'Escarpin Night Blue', 159.90, '21', 0, "Article description");
const sneakersPink = new Product('images/chaussures/barbora-polednova-VRK4bIBHo1E-unsplash.jpg', 'Basket Pinko rose', 159.90, '22', 0, "Article description");
const sneakersBlack = new Product('images/chaussures/camila-damasio-mWYhrOiAgmA-unsplash.jpg', 'Converse Black', 85.90, '23', 0, "Article description");
const heelBeige = new Product('images/chaussures/emily-gouker-Zx76sbAndc0-unsplash.jpg', 'Escarpin Nude Mila', 169.90, '24', 0, "Article description");
const heelGray = new Product('images/chaussures/eric-nopanen-72eYgGJVzQM-unsplash.jpg', 'Escarpin Bella Disco', 259.90, '25', 0, "Article description");
const sneakersMulticolored = new Product('images/chaussures/jade-scarlato-1OZF3M5EKwI-unsplash.jpg', 'Basket Nike Pastel', 189.90, '26', 0, "Article description");
// id jeans 31, 32, 33, 34, 35, 36
const jeansSkinny = new Product('images/jeans/haley-phelps-RgJ-NU_qWjM-unsplash.jpg', 'Jean Darko', 95.90, '31', 0, "Article description");
const jeansBlack = new Product('images/jeans/mnz-m1m2EZOZVwA-unsplash.jpg', 'Jean Strauss', 195.90, '32', 0, "Article description");
const jeansBlue = new Product('images/jeans/pexels-anna-shvets-4557647.jpg', 'Jean Xo Light', 93.90, '33', 0, "Article description");
const jeansHoley = new Product('images/jeans/pexels-ava-motive-1034859.jpg', 'Jean Harley', 98.90, '34', 0, "Article description");
const jeansHigh = new Product('images/jeans/pexels-cottonbro-4505451.jpg', 'Jean Calypso', 75.90, '35', 0, "Article description");
const jeansGray = new Product('images/jeans/timur-m-axiSdi0IWtc-unsplash.jpeg', 'Jean Urbano', 94.90, '36', 0, "Article description");
// id top 41, 42, 43, 44, 45, 46
const topBlack = new Product('images/top/ian-dooley-C6BrEIucDDU-unsplash.jpg', 'Crop top Skull Peace', 25.90, '41', 0, "Article description");
const sweaterRed = new Product('images/top/tamara-bellis-CuXt1N5SjlE-unsplash.jpg', 'T-shirt Skull Peace', 55.90, '42', 0, "Article description");
const dressGreen = new Product('images/top/pexels-anne-985635.jpg', 'Robe Greena', 225.90, '43', 0, "Article description");
const dressBlack = new Product('images/top/pexels-pixabay-356170.jpg', 'Robe Dalila', 125.90, '44', 0, "Article description");
const topStriped = new Product('images/top/tamara-bellis-avYD_iPH_c4-unsplash.jpg', 'Marinière Reda', 65.90, '45', 0, "Article description");
const topMulticolored = new Product('images/top/romane-gautun-p4skZXXOD3Q-unsplash.jpg', 'Top Jeli', 95.90, '46', 0, "Article description");
// ajout de produit creer dans la liste de produits
var productList = [bagPink, bagGray, mask_earrings, bagGucci, bagStraw, glasses, heelBlack, sneakersPink, sneakersBlack, heelBeige, heelGray, sneakersMulticolored, 
jeansSkinny,jeansBlack, jeansBlue, jeansHoley, jeansHigh, jeansGray, topBlack, sweaterRed, dressGreen, dressBlack, topStriped, topMulticolored]

      //incrementer le total de icon panier
      var counter = 0;

      //creer une liste de basket
      let basketProducts = [];

      if(localStorage.getItem("basketProducts") != null){
        basketProducts =  JSON.parse(localStorage.getItem("basketProducts"));
      }     

      if(localStorage.getItem("counter") != null){
             counter =  localStorage.getItem("counter");
      } 
      
    
$('.button-plus').click(function () { 
                counter++;
                localStorage.setItem("counter", counter);
                $('.basketIcon').text(counter);

                $('.quantity-field').val(counter)[0];
                console.log($('.quantity-field').val(counter))
                
    //Ajout produit au panier
    let idProdutClicked = $(this).attr('id')
   
     //NE FONCTIONNE PAS
     let basketProductIndex = basketProducts.findIndex((basketProduct)=>{
      return  basketProduct.id === idProdutClicked;
    });

    if(basketProductIndex > -1) {
      basketProducts[basketProductIndex].quantity++;
      localStorage.setItem("basketProducts", JSON.stringify(basketProducts)); 
      return
    } 

      let product = getProductById(idProdutClicked);
      product.quantity++
      basketProducts.push(product)
      // saauvgarder la liste mise a jour
      localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
      console.log(basketProducts)
 
  //   for(var item in basketProducts) {
  //     // si le nom du produit est dans le panier , la quantité est augmenté, on eneregiste le panier
  //    if(basketProducts[item].id === idProdutClicked) {
  //      basketProducts[item].quantity ++;
  //     // saauvgarder la liste mise a jour
  //      localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  //      return;
  //    }
  //  }
 
  //  let product = getProductById(idProdutClicked);
  //   basketProducts.push(product)
  //   // saauvgarder la liste mise a jour
  //   localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  //   console.log(basketProducts)

    
        });

$('.button-minus').click(function () { 
            if (counter > 0) {
                counter--;
                localStorage.setItem("counter", counter);
                $('.basketIcon').text(counter);
            }
 //Ajout produit au panier
 let idProdutClicked = $(this).attr('id')
 
 // on recupere le index du produit dans la basketproduct
 let basketProductIndex = basketProducts.findIndex((basketProduct)=>{
  return  basketProduct.id === idProdutClicked;
});
// si l index du produit existe dans la basketproduct, on supprime
if (basketProductIndex > -1) {
  basketProducts.splice(basketProductIndex, 1);
  //sauvgarde la liste mise a jour
  localStorage.setItem("basketProducts", basketProducts);
 console.log(basketProducts)
}

    });
        
    $('.basketIcon').text(counter);
  // fonction getProductById  
    function getProductById(id) {
        let productIndex = productList.findIndex((product)=>{
            return  product.id === id;
        });
        var productFound = productList[productIndex];
        return productFound;
    }
  


})