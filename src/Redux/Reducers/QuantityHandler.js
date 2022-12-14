let qty=1

const quantityHandler = (state=qty,action) => {
 if (action.type=='INCREASE') {
    let outcome = JSON.parse(localStorage.getItem("selectedProducts"));
    const currentId = outcome.findIndex((e) => {
      return e.id == action.payload;
    });
    console.log(currentId);
    let currentProduct = outcome.find((e) => {
      return e.id == action.payload;
    });
    currentProduct.qty = currentProduct.qty + 1;
    currentProduct.totalPrice =
      currentProduct.totalPrice + currentProduct.price;
    outcome[currentId] = currentProduct;
    localStorage.setItem("selectedProducts", JSON.stringify(outcome));
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
   let reccentProduct = items.find((e) => {
      return e.id == action.payload;
    });
 return state=reccentProduct.qty
 }else if (action.type=='DECREASE') {
      let outcome = JSON.parse(localStorage.getItem("selectedProducts"));
    const currentId = outcome.findIndex((e) => {
      return e.id == action.payload;
    });
    console.log(currentId);
    let currentProduct = outcome.find((e) => {
      return e.id == action.payload;
    });
   if (currentProduct.qty==1) {
    return
   }else{
    currentProduct.qty = currentProduct.qty - 1;
    currentProduct.totalPrice =
      currentProduct.totalPrice - currentProduct.price;
    outcome[currentId] = currentProduct;
    localStorage.setItem("selectedProducts", JSON.stringify(outcome));
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    let reccentProduct = items.find((e) => {
      return e.id == action.payload;
    });
    return state=reccentProduct.qty;
   }
 }else{
 return state
 }
}

export default quantityHandler