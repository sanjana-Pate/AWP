app.factory('EventService', function() {
    let upcomingEvents = [
        { 
            name: "Music Concert", 
            date: "2025-05-10", 
            location: "City Hall", 
            image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", 
            description: "An exciting evening of music!" 
        },
        { 
            name: "Art Exhibition", 
            date: "2025-06-15", 
            location: "Art Gallery", 
            image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", 
            description: "Display of modern art." 
        }
    ];

    let pastEvents = [];
    let selectedEvent = null;
    let registrations = [];

    return {
        // Upcoming Events
        getUpcomingEvents: function() {
            return upcomingEvents;
        },

        // Past Events
        getPastEvents: function() {
            return pastEvents;
        },

        // Delete and Move Events
        deleteUpcomingEvent: function(index) {
            upcomingEvents.splice(index, 1);
        },
        moveToPastEvents: function(index) {
            let event = upcomingEvents.splice(index, 1)[0];
            pastEvents.push(event);
        },

        // Selected Event (for Register/View)
        setSelectedEvent: function(event) {
            selectedEvent = event;
        },
        getSelectedEvent: function() {
            return selectedEvent;
        },

        // Add New Event
        addEvent: function(event) {
            upcomingEvents.push(event);
        },

        // Registrations
        saveRegistration: function(registrationData) {
            registrations.push(registrationData);
        },
        getRegistrations: function() {
            return registrations;
        }
    };
});
