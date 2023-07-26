import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from './railwayimage.jpg'
import './Productcard.css'
import { Button } from 'react-bootstrap';
const cardStyle = {
  height: 'auto',
  width: '300px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
  textDecoration: 'none',
  textAlign: 'center'
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column'
};

const imageStyle = {
  height: '200px',
  width: '100%',
  objectFit: 'cover',
};

function Productscard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const df = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setdata(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    df();
  }, []);

  const options = {
    method: 'POST',
    url: 'https://trains.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'f3bcd41fc8msh8c576cd6fee2e0ap11954ajsn04c517477e40',
      'X-RapidAPI-Host': 'trains.p.rapidapi.com'
    },
    data: { search: 'Rajdhani' }
  };


  const productCards = data.map((item) => (
    <Link to={`/products/${encodeURIComponent(JSON.stringify(item.data))}`} className="card" key={item.id} style={cardStyle}>
      <div className="heading">
        {item.name}
      </div>
      <div className="content" style={contentStyle}>
        <div className="image">
          <img src={img} alt={item.title} style={imageStyle} />
          <h4><span >Train:No</span>{item.train_num}</h4>
        </div>
        <div className="description d-block" style={{ padding: '10px' }}>
          {item.description}
        </div>
        <div className='d-flex justify-content-between h-20 w-50' style={{padding:'10px',borderRadius:'10px'}}>
          <div  type="button" className="d-flex btn-primary" style={{marginRight:'1px black',backgroundColor:'#B84901',borderRadius:'10px',padding:'10px'}}>From:{item.train_from}</div>
          <div className="d-flex" style={{marginRight:'1px black',backgroundColor:'#B84901',borderRadius:'10px',padding:'10px'}}>To:{item.train_to}</div>
          
        </div>
      </div>
    </Link>

  ));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {productCards}
    </div>
  );
}

export default Productscard;
