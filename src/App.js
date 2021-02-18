import "./AApp.css";
import "./Components/HeaderComponent";
import HeaderComponents from "./Components/HeaderComponent.jsx";
import SectionComponent from "./Components/SectionComponent.jsx";
import SideMenu from "./Components/SideMenu";
import MyFooter from "./Components/footer";
import NavBar from "./Components/NavBar";
//import PosForm from "./Components/PositionForm";
import DisplayMapClass from "./Components/DisplayMapClass";
import WaypointsSA from "./Components/WaypointsSA";
import Parameters from "./Components/parameters";

function App() {
  return (
    <div>
      <SideMenu />

      <div className="App">
        <header className="App-header">
          <p>
            <HeaderComponents />
          </p>
        </header>
        <NavBar />
        <DisplayMapClass />
        <WaypointsSA />
        <Parameters />
        <SectionComponent />
        
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
