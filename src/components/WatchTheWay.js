/*  
💥 Title : WatchTheWay
📃 Description : Watch the Way You want
✍ Author : Saad Hasan
⌚ Date : 24/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import wandaVision from "../assets/wanda.png";
import "../styles/WatchTheWay.css";

const WatchTheWay = () => {
  return (
    <>
      <section className="watchTheWay">
        <div className="watchTheWay-wrapper">
          <div className="watchTheWay-content">
            <h1>Watch the way you want.</h1>
            <p>
              Enjoy the big screen experience on your TV, with an ever-growing selection of titles in stunning 4K*.
              Download any show on your mobile or tablet to watch on the go. Plus, you can stream on four screens at
              once and have up to 7 profiles for a personalised viewing experience, so everyone will be happy. Enjoy all
              of these features and more at no extra cost.
            </p>
            <small>*Compatible equipment required.</small>
          </div>

          <div className="watchTheWay-image">
            <img src={wandaVision} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchTheWay;
