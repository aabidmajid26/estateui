import { Link } from "react-router-dom"


import '../styles/Body.css';

export default function Body() {
    return (
        <>
            <div id="content">
                <h3>Queens Tower</h3>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <Link to="/contact">Enquire</Link>
            </div>
        </>
    )
}