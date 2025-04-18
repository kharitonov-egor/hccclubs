import React from 'react';

import { useState } from "react";


import { DayPicker } from "react-day-picker";
import "./react-day-picker/style.css";

import Pin from "./assets/pin.svg"
import Clock from "./assets/clock.svg"
import Description from "./assets/description.svg"
import Organization from "./assets/organization.svg"

import Link from "./assets/link.svg"


// testing new branch

// back to main branch test

import { clubEvents } from './assets/clubEvents.js';

function CollegeEventsCalendar() {

    const today = new Date();

    const modifiers = { hasEvent: clubEvents.map(e => e.date), today: [today]};

    const modifiersClassNames = {
        hasEvent: 'has-event',
        // today: 'today-highlight'
    };

    const [selected, setSelected] = useState(new Date());

    const handleSelect = (day) => {
        console.log(day);
        if (day.getTime() != selected.getTime()) {
            setSelected(day);
        }

    };


    return (
        <div className="flex md:flex-row flex-col">

            <div className="p-2">

                <DayPicker
                    animate
                    mode="single"
                    selected={selected}
                    onSelect={handleSelect}
                    modifiers={modifiers}
                    modifiersClassNames={modifiersClassNames}

                />

                <div className="mt-5 hidden md:block">

                    <div className="m-auto">
                        <span className="m-auto">Created by <a href="https://kharitonovegor.com" target="_blank">Egor Kharitonov</a></span>
                        <br/>
                        <span>Not affiliated with HCC</span>

                    </div>
                </div>


            </div>

            <div className="flex flex-col p-2 w-[100%] md:w-[500px] h-[550px] text-left">


                <div className="mb-5 text-base font-semibold">
                    <h2 className="">{
                        selected ? `${selected.toDateString()}` : "Pick a day."
                    }</h2>
                </div>

                <div>
                    <div>

                        {clubEvents.filter((event) => event.date.toDateString() == selected.toDateString()).map((event, index) => (

                            <div key={index} className="mb-5 border p-3 rounded-lg bg-gray-50 flex flex-col gap-2.5">

                                <div className="flex flex-row gap-5">

                                    <strong><h1 className="text-lg font-bold">{event.title}</h1></strong>
                                    {event.date.toDateString() == today.toDateString() ? <h2 className="font-bold text-red-500">TODAY!</h2> : null}
                                </div>

                                <div className="flex flex-row gap-1 font-medium">
                                    <img src={Clock} className="w-[16px]" alt=""/>

                                    <div>
                                        <p>{event.date.toDateString()}</p>
                                    </div>

                                    <div>
                                        <p>{event.time}</p>
                                    </div>


                                </div>


                                <div className="flex flex-row gap-1 font-medium">
                                    <img src={Pin} className="w-[16px]" alt=""/>
                                    {event.location}
                                </div>

                                {
                                    event.description && event.description.length > 0 ? (
                                        <div className="flex flex-row gap-1">

                                            <img src={Description} className="w-[16px] mb-auto mt-1" alt=""/>
                                            <p>{event.description}</p>

                                        </div>

                                    ) : (
                                        <p>No description for this event 🥲</p>
                                    )
                                }
                                <div className="flex flex-row gap-1">
                                    <img src={Organization} className="w-[16px]" alt=""/>
                                    {event.club}
                                </div>



                                    <div className="flex flex-row gap-1">
                                        <img src={Link} className="w-[16px]" alt=""/>

                                        {event.link == null ? (<p>Sorry. No link to more info</p>) : (
                                        <a href={event.link} target="_blank">More info</a>)}
                                    </div>


                            </div>))

                        }


                    </div>

                    <div className="mt-5 mb-5 block md:hidden">

                        <div className="m-auto">
                            <span className="m-auto">Created by <a href="https://kharitonovegor.com" target="_blank">Egor Kharitonov</a></span>
                            <br/>
                            <span>Not affiliated with HCC</span>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default CollegeEventsCalendar;
