import logo from './logo.svg';
import './App.css';
import * as PushAPI from "@pushprotocol/restapi";

// const fetchNotif = async() => {
//     const spams = await PushAPI.user.getFeeds({
//         user: 'eip155:1:0x9E9725400681C01e1C1e5678020b3d54D568d842', // user address in CAIP
//         spam: true,
//         env: 'staging'
//     });

//     console.log('Spams: \n\n', spams);
// }
function App() {
  return (
    <div className="App">
        <div>
          Hello there!
        </div>
        {/* <button onClick={fetchNotif}>Get notifications</button> */}
    </div>
  );
}

export default App;
