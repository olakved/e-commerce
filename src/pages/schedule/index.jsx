import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Schedule() {
  const { isLoading, error, data } = useQuery(["foods"], () =>
    axios.get("http://localhost:3001/foods").then((res) => res.data)
  );
  console.log(data);

  return (
    <div>
      <h1>Schedule Component </h1>
    </div>
  );
}

export default Schedule;
