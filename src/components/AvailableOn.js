/*  
💥 Title : AvailableOn
📃 Description : Available on Devices List
✍ Author : Saad Hasan
⌚ Date : 25/ April/ 2021 
*/

import { Col, Row } from "react-bootstrap"

/*  🔥 React Dependencies 🔥 */

const AvailableOn = () => {
    return <>
        <section>
            <h2>Available On Your Favourite Devices</h2>
            <Row>
                <Col md={3}>TV</Col>
                <Col md={3}>Compter</Col>
                <Col md={3}>Mobile And Tablet</Col>
                <Col md={3}>Game Console</Col>
            </Row>
        </section>  </>;
};

export default AvailableOn;
