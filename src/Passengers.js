import "./Passengers.css";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Passengers() {
  const [passengers, setPassengers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setPassengers(result.data);
        setTotalPages(result.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, [page]);

  const className = "Passengers" + (isLoading ? " loading" : "");

  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Company</td>
            <td>Country</td>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => {
            return (
              <tr key={passenger._id}>
                <td>{passenger.name}</td>
                <td>{passenger.airline.name}</td>
                <td>{passenger.airline.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        onClickPage={(page) => setPage(page)}
        currentPage={page}
      />
    </div>
  );
}
