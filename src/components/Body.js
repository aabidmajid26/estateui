import { Link } from "react-router-dom"

import Contact from "./Contact";


import '../styles/Body.css';

export default function Body() {
    return (
        <div id="content-king" >
            <div id="content" className="col-4">
                <h3>Queens Tower</h3>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <Link to="/contact">Enquire</Link>
            </div>
            <Contact />
        </div>
    )
}