import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react-corso-api.netlify.app/.netlify/functions/holiday";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  const nextHoliday = () => {
    setSelected(prevValue => {
      return prevValue + 1 === data.data.length ? 0 : selected + 1
    })
  }

  const prevHoliday = () => {
    setSelected(prevValue => {
      return prevValue - 1 < 0 ? data.data.length - 1 : selected - 1
    })
  }

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data)
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (data.success) {
    return (<>
    {
      data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={nextHoliday} prev={prevHoliday}></SingleHoliday> : <h4>No vacanze</h4>
    }
    </>);
  } else {
    return <h2>...Loading</h2>
  }

};

export default Holiday;
