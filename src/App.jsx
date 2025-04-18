import './App.css'
import hccLogo from './assets/hcc_logo.png';
import CollegeEventsCalendar from "./CollegeEventsCalendar.jsx";

function App() {

  return (
      <>

          <div className="mb-5">
              <div className="flex flex-row gap-0 items-center justify-center mb-1">
                  <div className="w-[50px] justify-normal mr-[7px]">
                      <img src={hccLogo} alt="hcc logo" className="w-[50px] "/>
                  </div>

                  <div>
                      <strong><h1 className="text-3xl md:text-5xl">HCC Clubs Events</h1></strong>
                  </div>

              </div>

              <p>Your one-stop hub for all HCC clubs meetings</p>
              <p><span className="text-red-500">Red</span> dot = event that day</p>
          </div>


          <CollegeEventsCalendar/>


      </>
  )
}

export default App
