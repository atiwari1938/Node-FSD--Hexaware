const flightDetails = new Map([
    ['AR123', { source: 'Delhi', destination: 'Bangalore', date: '2024-04-10', time: '14:00' }],
    ['AR456', { source: 'Delhi', destination: 'Goa', date: '2024-04-11', time: '18:00' }],
    ['AR789', { source: 'Chennai', destination: 'Mumbai', date: '2024-04-12', time: '10:30' }]
]);

function getFlightStatus(flightNumber) {
    if (flightDetails.has(flightNumber)) {
        const flight = flightDetails.get(flightNumber);
        const currentDateTime = new Date();
        const flightDateTime = new Date(`${flight.date}T${flight.time}`);
        
        if (currentDateTime > flightDateTime) {
            return `The Flight ${flightNumber} has already left from ${flight.source} to ${flight.destination} at ${flight.time}`;
        } else {
            return `The Flight ${flightNumber} is leaving at ${flight.time} from ${flight.source} to ${flight.destination}`;
        }
    } else {
        return `Invalid flight number: ${flightNumber}`;
    }
}

const flightNumber = 'AR456';
console.log(getFlightStatus(flightNumber));
