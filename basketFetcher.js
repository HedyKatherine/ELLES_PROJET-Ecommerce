$(function() {

  let basketProducts = [];
  // counteur de totalités de produits ajoutés
  var counter = 0;

//recupere le panier grace a storage
  if(localStorage.getItem("basketProducts") != null){
    basketProducts =  JSON.parse(localStorage.getItem("basketProducts"));
  } 
  // recupere le counter depuis storage
  if(localStorage.getItem("counter") != null){
    counter =  localStorage.getItem("counter");
 } 
//liste view
  listProductViewComponent = '';
  basketProducts.forEach( product =>
 
    listProductViewComponent += `<tr> 
                       <td> 
                          <img src= ${product.pic} class="img-fluid w-50 d-block mx-auto" > 
                          </td> 
                          <td> 
                          <p class="text-muted small text-center">${product.name}<br> Brand: Andrew</p>
                        </td> 
                        <td> 
                        <p class="price text-center">${product.price}€</p> 
                        </td> 
                        <td> 
                          <p class="text-muted small text-center cart-quantity-input">${product.quantity} <br> Brand: Andrew</p>
                        </td> 
                        <td class="text-right d-block">
                        <p  class="btn btn-danger btn-round" data-id = ${product.id} id='btn-delet' > Supprimer</p>
                        </td>
                    </tr>`
                    )
 $('#productListViewId').html(listProductViewComponent)

 calculatTotalPriceAndDisplay()
 
   function calculatTotalPriceAndDisplay() {
    let total = calculTotalPrice();
    displayPrice(total);
    addRemoveProductListeners()
   }

   function calculTotalPrice() {
    let total = 0
    basketProducts.forEach( product =>
      total = total + (product.quantity * product.price)
      )
     return  Math.round(total)
   }

   function displayPrice(value) {
    $('#total').html(value)
    console.log(value)
   }
 

function addRemoveProductListeners(){
  //ON cible le button avec le classe "btn-danger" pour supprimer les produits
  var removeButtons = document.getElementsByClassName('btn-danger');
  //pour chaque bouttons on ajoute un lisener
  for(var i = 0; i < removeButtons.length; i++){
  var button = removeButtons[i]
  button.addEventListener('click', removeBasketProduct)
  } 
 }
//La fonction qui supprime les produits du panier
function removeBasketProduct(event){
  var buttonClicked = event.target
  // on recupere le data-id qui represente l id du produit cliqué
  let productId = $(buttonClicked).attr("data-id")
// on cherche l index de produit cliqué dans la liste du panier
  let index = basketProducts.findIndex((basketProduct)=>{
    return  basketProduct.id === productId;
  });

  if(index > -1){
// on met a jour le conteur de la quantité total du produit
    counter = counter - basketProducts[index].quantity
    // on supprime le produit selectionne de la liste
    basketProducts.splice(index, 1)
// mettre a jour le storage pour que les autres paye ayent les meme quantité 
    localStorage.setItem("counter", counter)
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  }

  
  calculatTotalPriceAndDisplay()
  //remove graphique
  buttonClicked.parentElement.parentElement.remove()

}
  })

 
  









