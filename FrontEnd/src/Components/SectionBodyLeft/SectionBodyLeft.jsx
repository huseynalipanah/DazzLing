import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SectionBodyLeft.scss";
import { searchContext } from "../../Context/searchContext";

const SectionBodyLeft = () => {
  const [data, setData] = useState([]);
const {search} = useContext(searchContext)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="cards">
      {data
      .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
      .map((x) => (
        <div className="card" key={x._id}>
          <div className="card-nd">
            <div className="card-name">
              <span>{x.name}</span>
            </div>
            <div className="card-date">
              <i className="fa-regular fa-calendar-days"></i>
              <span>
                {new Date(x.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="card-it">
            <div className="card-img">
              <img src={x.img} alt="" />
            </div>
            <div className="card-tb">
              <div className="card-title">
                <p>{x.title}</p>
              </div>
              <div className="detail-btn">
                <NavLink to={"/detail/" + x._id}>
                  Countinue reading <i className="fa-solid fa-angle-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBodyLeft;
