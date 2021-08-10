import "./bottombar.scss"
import { Instagram, LinkedIn, Mail, Twitter } from "@material-ui/icons"

export default function Bottombar() {

    return (
        <div className = "bottombar"> 
            <div className="wrapper">
                <div className="left"> 
                <a href="https://www.linkedin.com/in/mikecsaucedo/" target="_blank" rel="noopener noreferrer" className="icon"> <LinkedIn/></a>
                <a href="https://twitter.com/mike1sauce" target="_blank" rel="noopener noreferrer" className="icon"> <Twitter/></a>
                <a href="https://www.instagram.com/mike1sauce/" target="_blank" rel="noopener noreferrer" className="icon"> <Instagram/></a>
                <a href="mailto:mikecsaucedo@gmail.com" target="_blank" rel="noopener noreferrer" className="icon"> <Mail/></a>
                </div>
                

            </div>
        </div>
    );
}
