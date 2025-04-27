app.service('UserService', function() {
    var registeredEvents = [];

    return {
        registerEvent: function(event) {
            registeredEvents.push(event);
        },
        getRegisteredEvents: function() {
            return registeredEvents;
        }
    };
});
