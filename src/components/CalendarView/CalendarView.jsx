import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';
import { gcalKey } from '../../api-gcal';
import { calId } from '../../api-gcal';

const CalendarView = (props) => {
    const [events, setEvents] = useState(undefined);
    
    useEffect(() => {
        getEvents(calId, gcalKey)
    },
    []);

    const getEvents = async (id, key) => {
        await axios
            .get(`https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${key}`)
            .then((res) => {
                formatEvents(res.data.items);
            })
    }

    const formatEvents = (data) => {
        let formattedEvents = data.map((el) => {
            if(el.start.dateTime) {
                return {
                    "title" : el.summary,
                    "start" : el.start.dateTime,
                    "end" : el.end.dateTime,
                }
            }
            else {
                return {
                    "title" : el.summary,
                    "start" : el.start.date,
                    "end" : el.end.date,
                }
            }
        })
        
        setEvents(formattedEvents);
    }

    return ( 
        <>
            {events !== undefined ?
                <FullCalendar
                    plugins={[dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={events}
                />
            :
            null
            }
        </>
     );
}
 
export default CalendarView;