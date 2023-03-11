import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <div className="App">
      < Navbar />
      <div className="content">
        < Home />
      </div>
      <div className="merch">
      <h1>GirlsInTech Merch</h1>
        <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/334679970_527775589481394_482207997836348791_n.jpg?stp=dst-jpg_s600x600&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF0JExSJ7t6dwOIkqwEqMfDaWXdq-0BYQ5pZd2r7QFhDgDDJ7gwlmi_GHo_5nG3QweGoQWBorjtVFAee-dRJQvT&_nc_ohc=OWNMWcjhz_EAX_nqiKT&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfDL6y5KhRXY886nMhVNHJvrugEO53VpNGIioWJI6YktWw&oe=640DE95F" alt="" />
      </div>
    </div>
  );
}

export default App;
