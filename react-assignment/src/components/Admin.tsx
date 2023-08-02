import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import { GrEdit } from "react-icons/gr";

import "../css/Admin.css";

export default function Admin() {
  const [datas, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("data: ", datas);
  }, [datas]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/courts/goal@gmail.com"
      );
      setData([response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Address</th>
            <th>Place</th>
            <th>Phone</th>
            <th>Email</th>
            <th>StartTime</th>
            <th>EndTime</th>
            <th>CourtType</th>
            <th>NumberOfCourt</th>
            <th>Price</th>
            {/* <th>Courts</th> */}
          </tr>
        </thead>
        <tbody>
          {datas.map((item: any) => (
            <tr key={item._id}>
              <td>
                <div className="icons">
                  {/* <RiDeleteBin5Fill size={20} />
                  <GrEdit size={20} /> */}
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.place}</td>
              <td>{item.contact.mobile}</td>
              <td>{item.contact.email}</td>
              <td>{item.startTime}</td>
              <td>{item.endTime}</td>
              <td>{item.courtType}</td>
              <td>{item.numberOfCourt}</td>
              <td>{item.pricePerHour}</td>
              {/* {item.courts.map((court: any, courtIndex: number) => (
                     
                        <td>{court.courtName}</td>
                    
                    ))} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
