const addItem = [];
let items = "";
let outcome = "";
const addItems = (state = addItem, action) => {
  if (action.type === "ADDITEM") {
    if (!localStorage.selectedProducts) {
      action.payload = {
        ...action.payload,
        qty: 1,
        totalPrice: action.payload.price,
      };
      items = [...state, action.payload];
      localStorage.setItem("selectedProducts", JSON.stringify(items));

      return (items = JSON.parse(localStorage.getItem("selectedProducts")));
    } else {
      action.payload = {
        ...action.payload,
        qty: 1,
        totalPrice: action.payload.price,
      };
      outcome = JSON.parse(localStorage.getItem("selectedProducts"));
      items = [...outcome, action.payload];
      localStorage.setItem("selectedProducts", JSON.stringify(items));

      return (items = JSON.parse(localStorage.getItem("selectedProducts")));
    }
  } else if (action.type === "DELETEITEM") {
    outcome = JSON.parse(localStorage.getItem("selectedProducts"));
    let filtered = outcome.filter((e) => {
      return e.id != action.payload.id;
    });
    localStorage.setItem("selectedProducts", JSON.stringify(filtered));
    return (items = JSON.parse(localStorage.getItem("selectedProducts")));
  } else {
    if (localStorage.selectedProducts) {
      return (state = JSON.parse(localStorage.getItem("selectedProducts")));
    } else {
      return state;
    }
  }
};

export default addItems;
