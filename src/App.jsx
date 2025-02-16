import './App.css'
import hccLogo from './assets/hcc_logo.png';
import CollegeEventsCalendar from "./CollegeEventsCalendar.jsx";

function App() {

  return (
    <>

        <div className="mb-5">
            <strong><h1>HCC Clubs & Events</h1></strong>
            <p>Your one-stop hub for all HCC club meetings and campus activities</p>
        </div>


        <CollegeEventsCalendar/>

        <div className="mt-5">
            <img src={hccLogo} alt="hcc logo" className="w-[75px] m-auto mb-5"/>
            <div className="m-auto">
                <span className="m-auto">Created by <a href="https://kharitonovegor.com" target="_blank">Egor Kharitonov</a> 2025</span>
                <br/>
                <span>Not affiliated with HCC</span>

            </div>
        </div>


    </>
  )
}

export default App
