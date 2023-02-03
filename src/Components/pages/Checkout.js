import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "../Payment";

const Checkout = ({ changedIncreasedToNaira, changedToNaira, user }) => {
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [zipCode, setZipCode] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
const [cities, setCities] = useState({state:'unknown', cities:["Choose your state first"]})

useEffect(() => {
if (currentState!=='') {
 getCities()
}
}, [currentState])




  const statesCities = [
    { state: "Abia", cities: ["Aba", "Arochukwu", "Umuahia"] },
    { state: "Adamawa", cities: ["Jimeta", "Mubi", "Numan", "Yola"] },
    {
      state: "Akwa Ibom",
      cities: ["Ikot Abasi", "Ikot Ekpene", "Oron", "Uyo"],
    },
    { state: "Anambra", cities: ["Awka", "Onitsha"] },
    {
      state: "Bauchi",
      cities: ["Azare", "Bauchi", "Jama′are", "Katagum", "Misau"],
    },
    { state: "Bayelsa", cities: ["Brass"] },
    { state: "Benue", cities: ["Makurdi"] },
    { state: "Borno", cities: ["Biu", "Dikwa", "Maiduguri"] },
    { state: "Cross River", cities: ["Calabar", "Ogoja"] },
    {
      state: "Delta",
      cities: ["Asaba", "Burutu", "Koko", "Sapele", "Ughelli", "Warri"],
    },
    { state: "Ebonyi", cities: ["Abakaliki"] },
    { state: "Edo", cities: ["Benin City"] },
    { state: "Ekiti", cities: ["Ado-Ekiti", "Effon-Alaiye", "Ikere-Ekiti"] },
    { state: "Enugu", cities: ["Enugu", "Nsukka"] },
    { state: "FCT - Abuja", cities: ["Abuja"] },
    { state: "Gombe", cities: ["Deba Habe", "Gombe", "Kumo"] },
    { state: "Imo", cities: ["Owerri"] },
    {
      state: "Jigawa",
      cities: ["Birnin Kudu", "Dutse", "Gumel", "Hadejia", "Kazaure"],
    },
    { state: "Kaduna", cities: ["Jemaa", "Kaduna", "Zaria"] },
    { state: "Kano", cities: ["Kano"] },
    { state: "Katsina", cities: ["Daura", "Katsina"] },
    { state: "Kebbi", cities: ["Argungu", "Birnin Kebbi", "Gwandu", "Yelwa"] },
    { state: "Kogi", cities: ["Idah", "Kabba", "Lokoja", "Okene"] },
    {
      state: "Kwara",
      cities: ["Ilorin", "Jebba", "Lafiagi", "Offa", "Pategi"],
    },
    {
      state: "Lagos",
      cities: [
        "Badagry",
        "Epe",
        "Ikeja",
        "Ikorodu",
        "Lagos",
        "Mushin",
        "Shomolu",
      ],
    },
    { state: "Nasarawa", cities: ["Keffi", "Lafia", "Nasarawa"] },
    {
      state: "Niger",
      cities: [
        "Agaie",
        "Baro",
        "Bida",
        "Kontagora",
        "Lapai",
        "Minna",
        "Suleja",
      ],
    },
    { state: "Ogun", cities: ["Abeokuta", "Ijebu-Ode", "Ilaro", "Shagamu"] },
    { state: "Ondo", cities: ["Akure", "Ikare", "Oka-Akoko", "Ondo", "Owo"] },
    {
      state: "Osun",
      cities: [
        "Ede",
        "Ikire",
        "Ikirun",
        "Ila",
        "Ile-Ife",
        "Ilesha",
        "Ilobu",
        "Inisa",
        "Iwo",
        "Oshogbo",
      ],
    },
    { state: "Oyo", cities: ["Ibadan", "Iseyin", "Ogbomosho", "Oyo", "Saki"] },
    { state: "Plateau", cities: ["Bukuru", "Jos", "Vom", "Wase"] },
    { state: "Rivers", cities: ["Bonny", "Degema", "Okrika", "Port Harcourt"] },
    { state: "Sokoto", cities: ["Sokoto"] },
    { state: "Taraba", cities: ["Ibi", "Jalingo", "Muri"] },
    { state: "Yobe", cities: ["Damaturu", "Nguru"] },
    { state: "Zamfara", cities: ["Gusau", "Kaura Namoda"] },
  ];

  const getCities=()=>{
const result=statesCities.find(city=>city.state==currentState)
setCities(result)
}

  const shipping={
    street: address,
    city: currentCity,
    state: currentState,
    postal_code: zipCode,
    country,
  };
  console.log(user);

  const state = useSelector((state) => state.addItems);
  var total = 0;

  const orderData = {
    products: state,
    customer: user,
    shipping: shipping,
  };

  const totalProductsToNaira = () => {
    const converted = JSON.stringify(total * 440);
    if (converted.length > 12) {
      const num = converted.length - 12;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(7, -3);
      const bil = converted.slice(4, -6);
      const tril = converted.slice(1, -9);
      return `${converted.slice(0, num)},${tril},${bil},${mil},${thouEnd}.00`;
    } else if (converted.length > 9) {
      const num = converted.length - 9;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(5, -3);
      const bil = converted.slice(2, -6);
      return `${converted.slice(0, num)},${bil},${mil},${thouEnd}.00`;
    } else if (converted.length > 6) {
      const num = converted.length - 6;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(1, 4);

      return `${converted.slice(0, num)},${mil},${thouEnd}.00`;
    } else if (converted.length > 3) {
      const num = converted.length - 3;
      const thouEnd = converted.slice(-3);
      return `${converted.slice(0, num)},${thouEnd}.00`;
    } else {
      return `${converted}.00`;
    }
  };

  const itemList = (item) => {
    total = total + item.totalPrice;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
          <small className="text-muted">Qantity: {item.qty}</small>
          <p className="mt-2 mb-0 text-muted">
            {item.qty} x &#8358;{changedToNaira(item)}
          </p>
        </div>
        <span className="text-muted">
          &#8358;{changedIncreasedToNaira(item)}
        </span>
      </li>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="textColor">Your Product(s)</span>
              <span className="badge buttonColor rounded-pill">
                {state.length > 0 && state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              {state.length && (
                <li className="list-group-item d-flex justify-content-between">
                  <span>
                    <strong>Total</strong>
                  </span>
                  <strong>&#8358;{totalProductsToNaira()}</strong>
                </li>
              )}
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    disabled
                    value={user.firstname}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    disabled
                    value={user.lastname}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    disabled
                    placeholder=""
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    value={address}
                    onChange={e=>setAddress(e.target.value)}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select onChange={(event) => setCountry(event.target.value)}
                    value={country} className="form-select" id="country" required="">
                    <option>Choose...</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    onChange={(event) => setCurrentState(event.target.value)}
                    value={currentState}
                    required=""
                  >
                    <option>Choose...</option>
                    {statesCities.map((state, id) => (
                      <option key={id} value={state.state}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="address2" className="form-label">
                    City
                  </label>
                  <select
                    className="form-select"
                    id="city"
                    onChange={(event) => setCurrentCity(event.target.value)}
                    value={currentCity}
                    required=""
                  >
                    <option>Choose...</option>
                    {cities.cities.map((city, id) => (
                      <option key={id} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    value={zipCode}
                    placeholder=""
                    required=""
                    onChange={e=>setZipCode(e.target.value)}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/cart" className="btn btn-outline-danger">
                  Back
                </Link>
                <Payment  total={total} zipCode={zipCode} country={country} city={cities} address={address} orderData={orderData} user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
