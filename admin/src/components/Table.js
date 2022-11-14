import React from 'react';
import { useState, useEffect} from 'react';
import './Table.css';

function Table() {
	const [data, setData] = useState([]);
	useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://127.0.0.1:5000/reports')
      response = await response.json()
      setData(response)
    }
    fetchMyAPI()
  }, [])
  console.log(data)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ) 
}

export default Table;
