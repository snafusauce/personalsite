import "./test.scss"
import Emoji from "../emoji"

export default function test() {

    return (
        <div className= "test" id="test">
            <div className="left">
                <div className="imgContainer2">
                    <img src="assets/s.jpeg" alt="A man in the snow with their child"/>
                </div>
                <div className="imgContainer">
                    <img src="assets/mount-fuji-japan.jpeg" alt="A man in the snow with their child"/>
                </div>
                <div className="imgContainer3">
                    <img src="assets/berk.jpeg" alt="A man in the snow with their child"/>
                </div>

            </div>
   
            <div className="right">
                <div className="wrapper">
                <h2 className="gradient">About Mike</h2>
                <h1>Story and Background.</h1>
                <span>
                  Hello and thank you for checking out my page! I've coded this myself using React.js and css, please
                  do let me know if you find any bugs <Emoji symbol="🐞" label="bug"/>. 
                  <br></br><br></br> My name is Mike, as you've seen a few times on this site, and 
                  I'm a first generation college graduate working in tech and aspiring to make the world better one product launch at a time. 
                                    <br></br><br></br>  That's basically it, but here's more information below:
              </span>

              <h2>About Mike</h2>

                </div>
                </div>
        </div>
    )
}
