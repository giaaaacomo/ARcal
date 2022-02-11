window.addEventListener("load", function(){
		  
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
         
			googleCalendarApiKey: 'AIzaSyBqP-1vFO7wAUAoL1kdyf25psL6WOWsh-M',
      		events: '59nv6e2sgh8ohets0c0vca0eac@group.calendar.google.com',
        });
        calendar.render();
      });
