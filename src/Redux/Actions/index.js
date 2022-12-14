export const addItem=(product)=>{
return {
type:"ADDITEM",
payload:product
}
}
export const deleteItem=(product)=>{
return {
type:"DELETEITEM",
payload:product
}
}
export const saveItem=(product)=>{
return {
type:"SAVEITEM",
payload:product
}
}
export const removeItem=(product)=>{
return {
type:"REMOVEITEM",
payload:product
}
}
export const increaseItemQty=(productId)=>{
return {
type:"INCREASE",
payload:productId
}
}
export const decreaseItemQty=(productId)=>{
return {
type:"DECREASE",
payload:productId
}
}