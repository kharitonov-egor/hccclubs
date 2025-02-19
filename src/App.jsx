import './App.css'
import hccLogo from './assets/hcc_logo.png';
import CollegeEventsCalendar from "./CollegeEventsCalendar.jsx";

function App() {

  return (
      <>

          <div className="mb-5">
              <div className="flex flex-row gap-0 items-center justify-center">
                  <div className="w-[50px] justify-normal mr-[7px]">
                      <img src={hccLogo} alt="hcc logo" className="w-[50px] "/>
                  </div>

                  <div>
                      <strong><h1>HCC Clubs & Events</h1></strong>
                  </div>

              </div>

              <p>Your one-stop hub for all HCC club meetings and campus activities</p>
          </div>


          <CollegeEventsCalendar/>

          <div className="mt-5">

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
