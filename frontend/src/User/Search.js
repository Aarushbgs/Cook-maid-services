import React, { useState } from 'react'
import './Search.css'
import Usernav from './Usernav';

const Search = () => {


    const [location, setLocation] = useState('Sarvodaya Nagar');
    const [serviceType, setServiceType] = useState('maid');
    const [services, setServices] = useState([]);
    const [searched, setsearched] = useState(false);




    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/worker/search?location=${location}&type=${serviceType}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setsearched(true);
            const data = await response.json();
            setServices(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <Usernav />
            <div className='search-app'>

                <h1>Search for Maid and Cook in your Area</h1>
                <div>



                    <label>Location:
                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="Sarvodaya Nagar">Sarvodaya Nagar</option>
                            <option value="Chanakya Nagar">Chanakya Nagar</option>
                            <option value="TownShip">TownShip</option>
                            <option value="Harakh">Harakh</option>
                            <option value="Profesr Colony">Profesr Colony</option>
                        </select>

                    </label>

                    <label>
                        Service Type:
                        <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                            <option value="Maid">Maid</option>
                            <option value="Cook">Cook</option>
                        </select>
                    </label>
                    <button onClick={handleSearch}>Search</button>
                </div>

                {searched && (

                    <div>

                        <h2>Results:</h2>
                        <div className="card-container">

                            {services.map((service) => (
                                <div className="card" key={service._id}>
                                    <h3>{service.name}</h3>
                                    <p><strong>Location:</strong> {service.location}</p>
                                    <p><strong>Type:</strong> {service.type}</p>
                                    <p><strong>Monthly Fee:</strong> {service.Fee}</p>
                                    <p><strong>Mobile no:</strong> {service.Mobile}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                )}
            </div>

        </>

    )
}

export default Search