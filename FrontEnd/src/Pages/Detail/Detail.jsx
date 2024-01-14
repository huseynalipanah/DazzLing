import React, { useEffect, useState } from "react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/" + id);
      const newData = await response.json();
      setDetail(newData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <img src={detail.img} alt="" />
      <h1>{detail.name}</h1>
      <span>
        {new Date(detail.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </span>
      <p>{detail.title}</p>
    </div>
  );
};

export default Detail;
