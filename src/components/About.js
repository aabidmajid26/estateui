import '../styles/About.css';


export default function About() {
    return (

        <section id="about-us">
            <div class="container">
                <h2>About</h2>
                <div class="row">
                <div class="col-md-6">
                    <p>
                        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </p>
                    <p>Sample about examples</p>
                    <ul>
                    <li>Lorem ipsum </li>
                    <li>Negotiation and leasing</li>
                    <li>Easy to reach</li>
                    <li>Something something</li>
                    </ul>
                </div>
                <div class="col-md-6 card-box">
                    <h2 class="card-title">Talk to Us</h2>
                    <ul class="contact-list">
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Phone Icon" />
                            <span class="contact-type">Phone:</span>
                            <a href="tel:+919797814442">+91-1234567890</a>
                        </li>
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Email Icon" />
                            <span class="contact-type">Email:</span>
                            <a href="mailto:example@example.com">example@example.com</a>
                        </li>
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Address Icon" />
                            <span class="contact-type card-text">Address:</span> Pune Town Square, Pune
                        </li>
                    </ul>


{/*                     
                    <ul class="contact-list">
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Phone Icon" />
                            <span class="contact-type">Phone:</span>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </li>
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Email Icon" />
                            <span class="contact-type">Email:</span>
                            <a href="mailto:example@example.com">example@example.com</a>
                        </li>
                        <li>
                            <img id='icon-image' src={require("../images/phone-icon.png")} alt="Address Icon" />
                            <span class="contact-type">Address:</span>
                            123 Main St, Anytown, USA
                        </li>
                    </ul> */}

                </div>
                </div>
            </div>
        </section>

    )
}