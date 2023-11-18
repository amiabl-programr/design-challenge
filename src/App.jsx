import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
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

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data &&
          data.slice(0, 6).map((item) => {
            return (
              <SwiperSlide className="rounded-3xl">
                <img src={item.image} className="rounded-3xl" alt="slider" />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className="mt-[54px]">
        <h1>
          <span className="h-1 w-8 text-[#204b6b]-300">-</span>
          <span className="text-white">New &amp; Trending</span>
          <span className="">-</span>
        </h1>

        <div>
          <label htmlFor="">
            <input type="text" placeholder="Search" />
          </label>

          <select name="" id="">
            <option value="Price">Price</option>
          </select>
        </div>
      </div>

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
