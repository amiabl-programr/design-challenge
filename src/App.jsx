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
    try {
      let response = await fetch(
        `https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*`,
        {
          headers: {
            apikey: `${process.env.REACT_APP_SUPABASE_KEY}`,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_AUTH}`,
          },
        }
      );
      let apiData = await response.json();
      setData((prevData) => [...prevData, ...apiData]); // Append new data to existing data
      console.log(apiData); //works perfectly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

      <div className="mx-auto max-w-5xl px-5">
        {data &&
          data.slice(0, 20).map((data) => (
            <>
              <div key={data.id}>
                <div
                  className="flex flex-col lg:flex-row 
                mb-10 rounded-3xl bg-[#17202D] lg:pr-[34px]"
                >
                  <div>
                    <img
                      src={data.image}
                      className="rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-3xl 
                       w-full h-full"
                      height={599}
                      alt=""
                    />
                  </div>

                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col p-5 lg:p-0 lg:pt-[53px] lg:pl-[51px] 
                    rounded-tr-2xl rounded-br-2xl pr-5 "
                  >
                    <div>
                      <h1 className="text-white font-semibold text-[28px]  ">
                        {data.title}
                      </h1>
                      <ul className=" text-white my-[18px]">
                        {data.tags &&
                          data.tags.map((tag) => {
                            return (
                              <li
                                className="inline mr-4 font-normal
                            text-xl"
                              >
                                {tag}
                              </li>
                            );
                          })}
                      </ul>
                      <hr className="bg-[#214B6B] h-[10px] w-[127px] border-none rounded-[20px]" />
                    </div>
                    <div
                      className="text-white font-bold text-[40px] lg:text-5xl self-end pb-5
                    lg:pb-9"
                    >
                      <p>${data.price}</p>
                    </div>
                  </a>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
export default App;
