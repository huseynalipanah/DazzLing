import React, { useContext, useEffect, useState } from 'react'
import "./SectionBodyRight.scss"
import { searchContext } from '../../Context/searchContext'
import { NavLink } from 'react-router-dom'
const SectionBodyRight = () => {
const {handleSearch} = useContext(searchContext)
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
    <div className='section-body-right'>
      <div className="search-bar">
      <input type="text" onChange={(e) => handleSearch(e)} placeholder='Search'/>
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="cards-right">
      {data
      .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
      .map((x) => (
        <div className="card-right" key={x._id}>
            <div className="card-img">
              <img src={x.img} alt="" />
            </div>
            <div className="card-nd">
              <div className="card-name">
              <span>{x.name}</span>
              </div>
              <div className="card-date">
              
              <span>
                {new Date(x.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              </div>
            </div>
            
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionBodyRight