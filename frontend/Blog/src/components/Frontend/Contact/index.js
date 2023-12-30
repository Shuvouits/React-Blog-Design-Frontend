import MyGoogleMap from "../Map";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="map">
          <MyGoogleMap />
        </div>
        <div className="contact-form">
          <h3>HAVE A QUESTION ?</h3>
          <p>
            Curabitur et porta metus. Vestibulum facilisis ac purus eget
            iaculis. Proin vulputate enim mag maximus lectus aliquam vitae.
          </p>
          <form>
            <div className="contact-form-first">
              <div>
                <label for='name'>Name</label>
                <br></br>
                <input type="text"  id="name"></input>
              </div>
              <div>
                <label for='email'>EMAIL</label>
                <br></br>
                <input type="text" id="email"></input>
              </div>
            </div>

            <div className="contact-form-second">
              <div>
                <label for='message'>MESSAGE</label>
                <br></br>
                <textarea id="message" rows='10' ></textarea>
              </div>
            </div>
            <button>SEND MESAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
