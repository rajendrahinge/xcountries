
const ContriesCard = ({name,flagImg,flagAltText}) => {
    return  <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"10px",
                    margin:"10px",
                    border: "1px solid gray",
                    borderRadius: "4px",
                    width: "200px",
                    height: "200px"
                }}
            >
            <img src={flagImg} style={{
                height: "100px", width: "100px"
            }} alt={flagAltText}/>
            <h2>{name}</h2>
        </div>
}



export default ContriesCard;