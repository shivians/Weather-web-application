import React from "react";
import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("");

  const uses=localStorage.getItem("email")
  console.log(uses)
  const submitHandler = async (e) => {
    e.preventDefault();
    if (search) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e03f08264363e664bf4e65b62afa7fda`;
      const response = await axios.get(url);
      setCity([response.data.main]);
    } else {
      alert("please type city");
    }
  };
  return (
    <div className="dash-container">

      <div className="row">
        <div className="col-sm-10 col-md-6 mx-auto">
          <div className="main mt-5">
            <form action="">
              <input
                type="text"
                placeholder="Enter city name"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button onClick={submitHandler}> Search</button>
            </form>
            <div className="weather-data mt-5">
              {city.length ? (
                <div className="display-data shadow p-4">
                  <h4 className=" city text-center ">{search.toUpperCase()}</h4>
                  <h4 className=" city text-center ">{city[0].temp}°Cel</h4>
                  <h3 className="text-center">
                    Min:{city[0].temp_min}°Cel | Max: {city[0].temp_max}°Cel
                  </h3>
                  <hr className="city-hr shadow" />
                </div>
              ) : (
                <h1 className="text-center">No data found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
