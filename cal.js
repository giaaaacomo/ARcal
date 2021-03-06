var load_event = document.createEvent('Event');
    load_event.initEvent('load', false, false);

    window.addEventListener("DOMContentLoaded", function(){
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {

            googleCalendarApiKey: 'AIzaSyBqP-1vFO7wAUAoL1kdyf25psL6WOWsh-M',
            events: '59nv6e2sgh8ohets0c0vca0eac@group.calendar.google.com',
			eventColor: "#a18575",
			eventTextColor: "ivory",
			aspectRatio:"1.1",
			firstDay: "1",
			eventTimeFormat: { hour: "2-digit",	minute: "2-digit",hour12: false },
			
        });
        calendar.render();


        var strs = window.location.search.split('?')[1].split("&")
        var month = undefined
        strs.forEach((el)=>{if (el.split('=')[0] == "month") {month = parseInt(el.split("=")[1])}});

        if (month>0) {
            for (let i=0 ; i<month; i++){
                document.querySelector('[title="Next month"]').click();
            }
        } else {
            for (let i=0 ; i<month*-1; i++){
                document.querySelector('[title="Previous month"]').click();
            }
        }
       setTimeout(()=>{window.dispatchEvent(load_event)}, 300);
    });