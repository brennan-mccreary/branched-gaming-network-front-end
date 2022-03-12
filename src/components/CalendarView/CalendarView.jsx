import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const CalendarView = (props) => {
    // let calenderEl = 'calendar'

    // let calendar = new Calendar(calenderEl, {
    //     plugins: [ googleCalendarPlugin, dayGridPlugin ],
    //     googleCalendarApiKey: 'AIzaSyB128WIvrznpnFgzCGu7NAP911yClrXCyk',
    //     events: {
    //         googleCalendarId: 'st9rrb0fsavh5aro6pilmn3vj8@group.calendar.google.com'
    //     }
    // })

    return ( 
        <>
            Cal-com
            <FullCalendar
                plugins={[ googleCalendarPlugin, dayGridPlugin ]}
                initialView="dayGridMonth"
                googleCalendarApiKey= 'AIzaSyB128WIvrznpnFgzCGu7NAP911yClrXCyk'
                events={[{ title: 'event 1', date: '2022-03-11' }, {googleCalendarId: 'st9rrb0fsavh5aro6pilmn3vj8@group.calendar.google.com'}]}
            />

            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23616161&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showTz=0&src=st9rrb0fsavh5aro6pilmn3vj8@group.calendar.google.com"  
                width="800" 
                height="600" 
                scrolling="no">
            </iframe>
        </>
     );
}
 
export default CalendarView;