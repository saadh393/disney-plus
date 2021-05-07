/*  
💥 Title : NowStreaming
📃 Description : Now Streaming with Premier Access
✍ Author : Saad Hasan
⌚ Date : 24/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import image from "../assets/Raya_Side_Align_1440_en-US.jpg";
import "../styles/NowStreaming.css";

const NowStreaming = () => {
  return (
    <>
      <section className="nowStreaming">
        <div className="nowStreaming-wrapper">
          <div className="nowStreaming-image">
            <img src={image} />
          </div>
          <div className="nowStreaming-content">
            <h1>Now Streaming with Premier Access</h1>
            <p>
              See Raya and the Last Dragon before it's available to all Disney+ subscribers on 4 June. Watch as many
              times as you like with Premier Access for S$38.98 and your Disney+ subscription. Learn more.
            </p>
            <button>GET PREMIER ACCESS NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NowStreaming;
