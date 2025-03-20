import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// back to main branch test

import { clubEvents } from './assets/clubEvents.js';

function CollegeEventsCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Update selectedDate state when user clicks on a calendar day
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const tileContent = ({ date, view }) => {
        // Ensure we're only modifying month view tiles (not year or decade)
        if (view === "month") {
            const dayEvents = clubEvents.filter(
                (event) => event.date.toDateString() === date.toDateString()
            );

            // If there are events on this date, display their titles.

            if (dayEvents.length >= 1) {
                return (
                    <>
                        <br/>
                        {
                            dayEvents.length == 1 ?
                                (
                            <>
                                <span className="block md:hidden">{dayEvents.length} event</span>
                                <div className="event-titles hidden md:block">
                                    {dayEvents.map((event, index) => (
                                        <div key={index} style={{fontSize: "0.7rem", marginTop: "2px"}}>
                                            {event.title} {event.time}

                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                                :

                                (<span className="block">{dayEvents.length} events</span>)

                        }

                    </>

            )
            }

        }
        return null;
    };

    return (
        <div className="flex flex-row-2">


            <div>


                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    // The tileContent prop is what allows us to render event titles on each day
                    tileContent={tileContent}
                    className="w-[100%] md:w-[700px] h-[575px] md:text-base no-underline text-xs"
                    locale="en-US"

                    minDate = {new Date(2025, 1, 1)}
                    maxDate = {new Date(2026, 0, 1)}

                    prev2Label={null}
                    next2Label={null}

                />

            </div>

                <div className="flex flex-col p-4 w-[100%]  text-xs md:text-base md:w-[400px] h-[575px] border-[1px] border-solid text-left ">



                    <div className="mb-5 text-sm md:text-base font-normal">
                        <h2>List of events: </h2>
                        <h2>{selectedDate.toDateString()}</h2>
                    </div>
                                <div>
                                <div>

                            { clubEvents.filter((event) => event.date.toDateString() === selectedDate.toDateString()).map((event, index) => (
                                <div key={index} className="mb-5">

                                    <strong> {event.title} </strong> <br/>
                                    {event.location} {event.time} <br/>

                                            {
                                                event.description && event.description.length > 0 ? (
                                                    <p className="hidden md:block">{event.description}</p>
                                                ) : (
                                                    <p className="hidden md:block">No description for this event 🥲</p>
                                                )
                                            }

                                    {event.club} <br/>

                                            { event.link == "none" ? ( <p>No link</p>) : (
                                                <a href={event.link} target="_blank">More info</a>)}


                                </div>))}
                        </div>
                    </div>


                </div>


        </div>
    );
}

export default CollegeEventsCalendar;
