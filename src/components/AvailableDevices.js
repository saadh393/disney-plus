/*  
💥 Title : AvailableDevices
📃 Description : Available Devices will be shown here.
✍ Author : Saad Hasan
⌚ Date : 07/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import "../styles/availableDevices.css";
import console from "../assets/icons/console.png";
import tv from "../assets/icons/tv.png";
import laptop from "../assets/icons/laptop.png";
import ipad from "../assets/icons/ipad.png";

const AvailableDevices = () => {
  return (
    <>
      <section className="availableDeviceWrapper">
        <div>
          <h2>Available on your favourite devices</h2>

          <Row className="deviceRow">
            <Col md={3} className="deviceCol">
              <DeviceItem
                img={tv}
                device={"TV"}
                subs={["Amazon", "Android", "Apple", "Chromecaset", "LG", "Samsung"]}
              />
            </Col>

            <Col md={3} className="deviceCol">
              <DeviceItem img={laptop} device={"Computer"} subs={["Chrome OS", "MacOS", "Windows PC"]} />
            </Col>

            <Col md={3} className="deviceCol">
              <DeviceItem
                img={ipad}
                device={"Mobile & Tablet"}
                subs={["Amazon Fire", "Android Phones", "iPhone & iPad"]}
              />
            </Col>
            <Col md={3} className="deviceCol">
              <DeviceItem img={console} device={"Game Console"} subs={["PS4", "PS5", "Xbox One"]} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AvailableDevices;
