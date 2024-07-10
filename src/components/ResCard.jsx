import resList from "./MockData";
const ResCard = (props) => {
    const {resData} = props;
    // const [name, cuisines, avgRating, sla] = resList.info;
    return (
        <div className="bg-orange-300 h-80 w-40 p-1 m-2 " >
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt=""  className="h-36 w-100%"/>
            <div className="font-bold p-1">
            <h1>{resData.name}</h1>
            <h1>{resData.info.name}</h1>
            <h2>{resData.info.avgRating}</h2>
            <h2>{resData.info.sla.deliveryTime + " min"}</h2>
            <p>{resData.info.cuisines.join(", ")}</p>
            <p>{resData.info.isOpen}</p>
            </div>
        </div>
    )
}

export default ResCard;