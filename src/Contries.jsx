import { useEffect, useState } from 'react';
import ContriesCard from './ContriesCard';

function Contries() {
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    const [flags, setFlags] = useState([]);
    const [error, setError] = useState(null);

    // console.log({flags});

    useEffect(() => {
        fetch(API_ENDPOINT)
        .then((res)=>res.json())
        .then((data) => setFlags(data))
        .catch((error) => {
            setError(error.message);
            console.error(error);
        });
    },[]);



    return <div style={{
        display:"flex",
        flexWrap:"wrap"
    }}
    >
         {error && <p>Error: {error}</p>}
        {flags.map((flag) => (
                <ContriesCard   
                    name={flag.name} 
                    flagImg={flag.flag} 
                    flagAltText={flag.abbr} 
                    />
            ))}
        </div>
}

export default Contries;