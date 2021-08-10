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
    const [selected, setSelected] = useState("fte");//default selection
    const[data, setData] = useState([])
    const list = [
        {
            id: "fte",
            title: "Full Time",
        },
        {
            id: "intern",
            title: "Internships",
        },

    ];

useEffect(() => {

    switch(selected){
        case "fte":
            setData(featuredPortfolio);
            break;
        case "intern":
            setData(webPortfolio);
            break;
        default:
            setData(featuredPortfolio);
    }
}, [selected]);
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Experience</h1>
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
        //cut out card and replace with below for featured pop up
        //<div className={d.featured ? "card featured" : "card"}
                <div className="card">
                <div className="top">
                    <img src={d.img} className="user" alt="" />


                </div>

                <div className="bottom">

                    <h3> {d.title}</h3>
                    <h4 className="gradient"> 
                    {d.job}</h4>
                    <span > 
                    {d.res}</span>
                </div>
                <div className="center">
                </div>
            </div>

                ))}

            </div>
        </div>
    );
}
