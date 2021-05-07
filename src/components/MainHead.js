/*  
💥 Title : MainHead
📃 Description : This is Main Component of Home page. It whill show
✍ Author : Saad Hasan
⌚ Date : 23/ April/ 2021 
*/
/*  🔥 React Dependencies 🔥 */
import disneyIcon from "../assets/logo-nopad.svg";
import brands from "../assets/brands.png";

const MainHead = () => {
  return (
    <>
      <main>
        <section className="d-flex main-section">
          <div className="main-contents">
            <img src={disneyIcon} className="disny-icon" />
            <h1>Stream all your favourites and more.</h1>
            <div className="row pricing mt-4">
              <div className="col monthly">
                <h2>
                  $11.50 <small>| Month</small>
                </h2>
                <button className="btn btn-primary  mt-4 mb-2">Sign UP Now</button>
              </div>
              <div className="col yearly">
                <h2>
                  $119.50 <small>| Year</small>
                </h2>
                <button className="btn btn-primary  mt-4">Save ON 12 Month</button>
              </div>
            </div>
            <small>
              Subscription required for both monthly and yearly plans. *Savings compared to 12 months of the monthly
              subscription price.
            </small>
          </div>
          <div className="brands">
            <img src={brands} />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainHead;
