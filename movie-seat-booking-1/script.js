let selectedSeats = 0;

document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seatsContainer');

    // Number of rows and columns for the seat grid
    const rows = 5;
    const cols = 10;

    // Create the seat grid
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.setAttribute('data-row', row);
            seat.setAttribute('data-col', col);
            seat.addEventListener('click', toggleSeat);
            seatsContainer.appendChild(seat);
        }
    }
});

function toggleSeat() {
    this.classList.toggle('selected');
    updateSelectedSeats();
}

function updateSelectedSeats() {
    const selected = document.querySelectorAll('.seat.selected');
    selectedSeats = selected.length;
    document.getElementById('selectedSeats').innerText = selectedSeats;
}

function bookSeats() {
    alert(`Booked ${selectedSeats} seat(s)!`);
}
