import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import trainimg from './railwayimage.jpg'
function ProductListing() {
  const [indidata, setindidata] = useState([]);
  const { data } = useParams();
  const { id, days } = JSON.parse(decodeURIComponent(data));

  useEffect(() => {
    // Your logic here if needed
  }, [data]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={trainimg} alt="Train Image" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{id}</h2>
          <div className="row">
            {Object.keys(days).map((day) => (
              <div key={day} className="col-md-2">
                <div className={`card ${days[day] === "1" ? "bg-success" : ""}`}>
                  <div className="card-body">
                    {day}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1>Coaches Available </h1>
          <div className="row mt-3">
            {["3A", "2A", "1A"].map((className) => (
              <div key={className} className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    {className}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <p>Arrival Time: {arriveTime}</p>
          <p>Departure Time: {departTime}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
