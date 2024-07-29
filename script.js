document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('student-name').value;
    const teacherName = document.getElementById('teacher-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    
    if (studentName && teacherName && appointmentDate && appointmentTime) {
        const appointment = {
            studentName,
            teacherName,
            appointmentDate,
            appointmentTime
        };
        
        addAppointmentToList(appointment);
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
});

function addAppointmentToList(appointment) {
    const listItem = document.createElement('li');
    listItem.textContent = `${appointment.studentName} has booked an appointment with ${appointment.teacherName} on ${appointment.appointmentDate} at ${appointment.appointmentTime}.`;
    document.getElementById('appointments-list').appendChild(listItem);
}

function clearForm() {
    document.getElementById('booking-form').reset();
}
