const saveItem = [];
let items = "";
let outcome = "";
const saveItems = (state = saveItem, action) => {
  if (action.type === "SAVEITEM") {
    if (!localStorage.savedProducts) {
      items = [...state, action.payload];
      console.log(items);
      localStorage.setItem("savedProducts", JSON.stringify(items));

      return (items = JSON.parse(localStorage.getItem("savedProducts")));
    } else {
      outcome = JSON.parse(localStorage.getItem("savedProducts"));
      items = [...outcome, action.payload];
      console.log(items);
      localStorage.setItem("savedProducts", JSON.stringify(items));

      return (items = JSON.parse(localStorage.getItem("savedProducts")));
    }
  } else if (action.type === "REMOVEITEM") {
    outcome = JSON.parse(localStorage.getItem("savedProducts"));
    let filtered = outcome.filter((e) => {
      return e.id != action.payload.id;
    });
    localStorage.setItem("savedProducts", JSON.stringify(filtered));
    return (items = JSON.parse(localStorage.getItem("savedProducts")));
  } else {
    if (localStorage.savedProducts) {
      return (state = JSON.parse(localStorage.getItem("savedProducts")));
    } else {
      return state;
    }
  }
};

export default saveItems;
