import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });

    response = await response.json();

    setFoodData(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade parent"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/15/23/05/momos-4935232_960_720.jpg"
                className="d-block w-100"
                alt="..."
                style={{ filter: "background(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/15/23/05/momos-4935232_960_720.jpg"
                className="d-block w-100"
                alt="..."
                style={{ filter: "background(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/17/49/cupcakes-1283247_1280.jpg"
                className="d-block w-100"
                style={{ filter: "background(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="m-3 container">
        {foodCat.length !== 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div className="fs-3 m-3" key={data._id}>
                  {data.CategoryName}
                </div>
                <hr />
                {foodData.length !== 0 ? (
                  foodData
                    .filter((filterData) => {
                      return (
                        data.CategoryName === filterData.CategoryName &&
                        filterData.name.toLowerCase().includes(search)
                      );
                    })
                    .map((item) => {
                      return (
                        <div
                          key={item._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            // cardname={item.name}
                            // options={item.options[0]}
                            // desc={item.description}
                            // foodimg={item.img}
                            foodItem={item}
                            options={item.options[0]}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>Emptyyyyyyy</div>
                )}
              </div>
            );
          })
        ) : (
          <div> "Emptyyyyyyy"</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
