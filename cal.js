var load_event = document.createEvent('Event');
    load_event.initEvent('load', false, false);

    window.addEventListener("DOMContentLoaded", function(){
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {

            googleCalendarApiKey: 'AIzaSyBqP-1vFO7wAUAoL1kdyf25psL6WOWsh-M',
            events: '59nv6e2sgh8ohets0c0vca0eac@group.calendar.google.com',
        });
        calendar.render();


        const urlParams = new URLSearchParams(window.location.search);
        var month = urlParams.get('month');
        if (month>0) {
            for (let i=0 ; i<month; i++){
                document.querySelector('[title="Next month"]').click();
            }
        } else {
            for (let i=0 ; i<month*-1; i++){
                document.querySelector('[title="Previous month"]').click();
            }
        }
        window.dispatchEvent(load_event)
    });