import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([])

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/fooddata", {
      method: "POST",
      headers: {
        'content-Type': 'application/json'
      }
    });
    response = await response.json();
    // console.log(response[0],response[1])
    setfooditem(response[0]);
    setfoodcat(response[1]);

  }
  useEffect(() => {
    loaddata()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="container ">
        {
          foodcat !== []
            ? foodcat.map((data) => {
              // console.log(data);
              return (
                <div className="row mb-3  ">
                  <div key={data._id} className="fs-3 m-2 ">{data.CategoryName}</div>
                  <hr />
                  {fooditem !== [] 
                  ? fooditem.filter((item) => item.CategoryName === data.CategoryName)
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className=" col-12 col-md-6 col-lg-3 ">
                          <Card foodItem={filterItems}
                          options={filterItems.options[0]}
                          ></Card>
                        </div>
                      )
                    }

                    ) : <div>No such Data found</div>}
                  

                </div>

              )

            })
            : ""
        }

      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
