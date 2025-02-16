import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

/**
 * Example events.
 * Each event has a JS Date and additional info like title/club.
 * NOTE: The month is 0-indexed in JavaScript, so 1 means February.
 */


const clubEvents = [
    {
        date: new Date(2025, 1, 21),
        time: "5pm",
        title: "Board and table top games",
        club: "SHPE",
        link: "https://discord.com/channels/1237208303977762906/1237208407124213851/1340024791196762122",
        location: "Oblivion Park",
        description: "asd",
    },
    {
        date: new Date(2025, 1, 24),
        time: "12pm",
        title: "Chess workshop",
        club: "Chess club",
        link: "https://discord.com/channels/1276572778753167460/1276572902279352330/1338884665448075274",
        location: "Quite Lounge",
    },
    {
        date: new Date(2025, 1, 18),
        time: "3pm",
        title: "We are people meeting",
        club: "We are people",
        link: "https://discord.com/channels/1284304662043951268/1284304662849126421/1336386353943937085",
        location: "DHUM 301",
    },
    {
        date: new Date(2025, 1, 13),
        time: "3:30pm",
        title: "SGA General Body Meeting",
        club: "SGA",
        link: "none",
        location: "DTEC 300",
    },
    {
        date: new Date(2025, 1, 20),
        time: "3:30pm",
        title: "SGA General Body Meeting",
        club: "SGA",
        link: "none",
        location: "DTEC 300",
    },
    {
        date: new Date(2025, 1, 27),
        time: "3:30pm",
        title: "SGA General Body Meeting",
        club: "SGA",
        link: "none",
        location: "DTEC 300",
    },
    {
        date: new Date(2025, 1, 20),
        time: "6:30pm",
        title: "HTML & CSS Workshop",
        club: "Coding club",
        link: "none",
        location: "DTEC 426",
    },



];

function CollegeEventsCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Update selectedDate state when user clicks on a calendar day
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    /**
     * tileContent: Display the event title(s) directly under
     * the day number in the calendar tile.
     */

    const tileContent = ({ date, view }) => {
        // Ensure we're only modifying month view tiles (not year or decade)
        if (view === "month") {
            const dayEvents = clubEvents.filter(
                (event) => event.date.toDateString() === date.toDateString()
            );

            // If there are events on this date, display their titles.

            if (dayEvents.length >= 2) {
                return (
                    <>
                        <br/>
                        <span>{dayEvents.length} events</span>
                    </>

                )
            }

            if (dayEvents.length > 0) {
                return (
                    <div className="event-titles">
                        {dayEvents.map((event, index) => (
                            <div key={index} style={{ fontSize: "0.7rem", marginTop: "2px" }}>
                                {event.title} {event.time}

                            </div>
                        ))}
                    </div>
                );
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
                    className="w-[700px] h-[550px] no-underline"
                    locale="en-US"
                    minDate = {new Date(2025, 1, 1)}
                    maxDate = {new Date(2026, 0, 1)}

                    prev2Label={null}
                    next2Label={null}

                />

            </div>

                <div className="flex flex-col p-4 w-[300px] h-[550px] border-[1px] border-solid border-[#a0a096] text-left">



                    <div className="mb-5 text-[1.25rem] font-normal">
                        <h2>List of events: </h2>
                        <h2>{selectedDate.toDateString()}</h2>
                    </div>
                                <div>
                                <div>

                            { clubEvents.filter((event) => event.date.toDateString() === selectedDate.toDateString()).map((event, index) => (
                                <div key={index} className="mb-5">

                            <strong> {event.title} </strong> <br/>
                            {event.location} {event.time} <br/>
                            {event.club} <br/>
                                    <a href={event.link} target="_blank">Link</a> <br/>

                                </div>))}
                        </div>
                    </div>


                </div>


        </div>
    );
}

export default CollegeEventsCalendar;
