$(function() {

  let basketProducts = [];
//recupere le panier grace a storage
  if(localStorage.getItem("basketProducts") != null){
    basketProducts =  JSON.parse(localStorage.getItem("basketProducts"));
  } 
  
  listProductViewComponent = '';
  basketProducts.forEach( product =>
 
    listProductViewComponent += `<tr> 
                       <td> 
                          <img src= ${product.pic} class="img-fluid w-50" > 
                          </td> 
                          <td> 
                          <p class="text-muted small">${product.name}<br> Brand: Andrew</p>
                        </td> 
                        <td> 
                        <var class="price">£${product.price}</var> -->
                        </td> 
                        <td> 
                          <p class="text-muted small">${product.quantity} <br> Brand: Andrew</p>
                        </td> 
                       
                    </tr>`
                    )
 $('#productListViewId').html(listProductViewComponent)


  let total = 0
   basketProducts.forEach( product =>
    total = total + (product.quantity * product.price)
    )
   console.log(total)
 
  })