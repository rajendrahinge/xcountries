import { useEffect, useState } from 'react';
import ContriesCard from './ContriesCard';

function Contries() {
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/alls";
    const [flags, setFlags] = useState([]);

    // console.log({flags});

    useEffect(() => {
        fetch(API_ENDPOINT)
        .then((res)=>res.json())
        .then((data) => setFlags(data))
        .catch((error) => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.error("error feching data: ",jsonError);
                }).catch(genericError => {
                    console.error("error feching data: ",error.statusText);
                });
            } else {
                console.log("error feching data: ",error);
            }
        });
    },[]);



    return <div style={{
        display:"flex",
        flexWrap:"wrap"
    }}
    >
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