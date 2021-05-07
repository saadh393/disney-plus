/*  
💥 Title : DeviceItem
📃 Description : Device
✍ Author : Saad Hasan
⌚ Date : 07/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const DeviceItem = ({ img, device, subs }) => {
  return (
    <>
      <div className="deviceDiv">
        <img src={img} className="deviceImage" alt={device} />
        <h4>{device}</h4>
        <ul>
          {subs.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DeviceItem;
