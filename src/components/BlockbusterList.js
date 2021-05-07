/*  
💥 Title : BlockbusterList
📃 Description : Block Buster Flims
✍ Author : Saad Hasan
⌚ Date : 24/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Row } from "react-bootstrap";
import wanda from "../assets/WandaVIsion_MLP_en-SG.jpg";
import avnger from "../assets/AvengersEndgame_MLP_en-SG.jpg";
import blackPanther from "../assets/BlackPanther_MLP_en-SG.jpg";
import frozen from "../assets/Frozen2_MLP_en-SG.jpg";
import hamilton from "../assets/Hamilton_MLP_en-SG.jpg";
import mulan from "../assets/Mulan2020_MLP_en-SG.jpg";
import soul from "../assets/Soul_EN.jpg";
import starwar from "../assets/StarWars_RiseOfTheSkywalker_MLP_en-SG.jpg";
import mandalorian from "../assets/The_Mandalorian_EMEA_UKI.png";
import "../styles/BlockBuster.css";

const BlockbusterList = () => {
  const images = [wanda, avnger, blackPanther, frozen, hamilton, mulan, soul, starwar, mandalorian];
  return (
    <>
      <section>
        <div className="blockbluster-wrapper">
          <h2>Stream Disney+ Originals and blockbuster films.</h2>
          <p>
            Discover exclusive Disney+ Originals you can’t find anywhere else and enjoy the biggest hit movies from
            Disney, Pixar, Marvel, Star Wars and more.
          </p>
          <Row>
            {images.map((image) => (
              <Col md={4}>
                <div className="blockbuster-movie-images">
                  <img src={image} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default BlockbusterList;
