import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    dataPortfolio,

} from "../..//data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const[data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "data",
            title: "Data",
        },

    ];

useEffect(() => {

    switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "mobile":
            setData(mobilePortfolio);
            break;
        case "web":
            setData(webPortfolio);
            break;
        case "data":
            setData(dataPortfolio);
            break; 
        default:
            setData(featuredPortfolio);
    }
}, [selected]);
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul> 
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}

            </ul>
            <div className="container">
                {data.map((d) => (

                <div className="item">
                <img
                src={d.img}
                alt="placeholder image"
                />
                <h3>{d.title}</h3>
                </div> 
                ))}



            </div>
        </div>
    );
}
