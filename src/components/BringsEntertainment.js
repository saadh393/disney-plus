/*  
💥 Title : BringsEntertainment
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 25/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "../styles/BlockBuster.css";
import { Col, Row } from "react-bootstrap";
import deadpool from "../assets/Deadpool2_MLP_en-SG.jpg";
import kingsman from "../assets/Kingsman_TheGoldenCircle_MLP_en-SG.jpg";
import warofthe from "../assets/WarOfThePlanetOfApes_MLP_en-SG.jpg";
import howmetyour from "../assets/HowIMetYourMother_MLP_en-SG.jpg";
import bigSky from "../assets/BigSky_MLP_en-SG.jpg";
import greys from "../assets/GreysAnatomy_MLP_en-SG.jpg";
import mazerunner from "../assets/MazeRunner_TheDeathCure_MLP_en-SG.jpg";
import mlb from "../assets/24_MLP_en-SG.jpg";
import uki from "../assets/UKI_The_Simpsons_Tile.png";

const BringsEntertainment = () => {
  const images = [deadpool, kingsman, warofthe, howmetyour, bigSky, greys, mazerunner, mlb, uki];

  return (
    <>
      <section>
        <div className="blockbluster-wrapper">
          <h2>Star brings you entertainment for every mood.</h2>
          <p>
            With thousands of hours of entertainment, from favourites to brand-new originals and exclusives, Star has
            something for every moment and every mood.
          </p>
          <Row>
            {images.map((image) => (
              <Col md={4}>
                <div className="blockbuster-movie-images">
                  <img src={image} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default BringsEntertainment;
