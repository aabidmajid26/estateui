import { Link } from "react-router-dom"

import Contact from "./Contact";


import '../styles/Body.css';
import Carousel from "./Carousel";

export default function Body() {
    return (
        <div id="content-king" >
            <div className="col-12 col-lg-6 col-md-6 carousel-and-bigname">
                <div id="content" >
                    <h3>Queens Tower</h3>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>
                    <Link to="/contact">Enquire</Link>
                </div>
                <div >
                    <Carousel />
                </div>
            </div>
            <div >
                <Contact />
            </div>
        </div>
    )
}