// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log("yep");
    let response = await fetch(
      "https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*",
      {
        headers: {
          apikey: `${process.env.REACT_APP_SUPABASE_KEY}`,
          Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_AUTH}`,
        },
      }
    );
    let apiData = await response.json();
    setData(apiData);
    console.log(data); //works perfectly
  };

  return (
    <>
      <header className="m-5">
        <nav>
          <ul className="flex justify-between align-baseline text-white font-semibold">
            <li>STEAM</li>
            <li>
              <button className="bg-[#204b6b] rounded-full py-3 px-9">
                Install
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* slider */}

      <div>{/* slider---checkout swiperjs*/}</div>
      {/* slider */}

      <div>
        <h1>
          <span className="h-1 w-8 text-[#204b6b]-300">-</span>
          <span className="text-white">New &amp; Trending</span>
          <span className="">-</span>
        </h1>
      </div>

      {/* {data && data.map(() => `<div> ${data[0].id} </div>`)} */}
      {/* {data > 0 && (
        <div>
          {data.map((datas) => {
            <img src={datas.image} alt="" />;
          })}
        </div>
      )} */}
      {/* {data ? data.map(() => data[0]) : <p className="text-red"> Loading...</p>} */}
      {/* <div className="text-red">{data[0]}</div> */}

      <div className="mx-auto max-w-5xl">
        {data &&
          data.map((data) => (
            <>
              <div key={data.id}>
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <img src={data.image} alt="" />
                    </div>
                    <div className="flex flex-col lg:flex-row">
                      <div>
                        <h1>
                          {/* title */}
                          {data.title}
                        </h1>
                        <p>
                          {/* genre */}
                          {data.genre}
                        </p>
                      </div>
                      <div className="text-white ">
                        <p>${data.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
export default App;
