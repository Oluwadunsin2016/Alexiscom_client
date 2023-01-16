let increasedItems=JSON.parse(localStorage.getItem("selectedProducts"));

const quantityHandler = (state=increasedItems,action) => {
 if (action.type=='INCREASE') {
    let outcome = JSON.parse(localStorage.getItem("selectedProducts"));
    const currentId = outcome.findIndex((e) => {
      return e.id == action.payload.id;
    });
    console.log(currentId);
    let currentProduct = outcome.find((e) => {
      return e.id == action.payload.id;
    });
    currentProduct.qty = currentProduct.qty + 1;
    currentProduct.totalPrice =
      currentProduct.totalPrice + currentProduct.price;
    outcome[currentId] = currentProduct;
    localStorage.setItem("selectedProducts", JSON.stringify(outcome));
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    return items
 }else if (action.type=='DECREASE') {
      let outcome = JSON.parse(localStorage.getItem("selectedProducts"));
    const currentId = outcome.findIndex((e) => {
      return e.id == action.payload.id;
    });
    console.log(currentId);
    let currentProduct = outcome.find((e) => {
      return e.id == action.payload.id;
    });
   if (currentProduct.qty==1) {
    localStorage.setItem("selectedProducts", JSON.stringify(outcome));
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    return items
   }else{
    currentProduct.qty = currentProduct.qty - 1;
    currentProduct.totalPrice =
      currentProduct.totalPrice - currentProduct.price;
    outcome[currentId] = currentProduct;
    localStorage.setItem("selectedProducts", JSON.stringify(outcome));
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    return items;
   }
 }else{
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    return items
 }
}

export default quantityHandler