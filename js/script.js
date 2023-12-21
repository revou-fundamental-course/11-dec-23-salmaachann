const userName = prompt('Please enter your name:');
const welcomeMessage = document.getElementById('welcome-message');
const userNameSpan = document.getElementById('user-name');

if (userName) {
    welcomeMessage.textContent = `Halo ${userName}, Welcome To Our Website`;
    userNameSpan.textContent = userName;
}


// JavaScript for Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation and submission logic goes here
    // Use document.getElementById and other DOM methods as needed
});


function submitForm() {
    // Retrieve form values
    const nama = document.getElementById('nama').value;
    const tgl_lahir = document.getElementById('tgl_lahir').value;
    const jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    // Display submitted values
    const submittedValues = document.getElementById('submitted-values');
    submittedValues.innerHTML = `
        <h3>Submitted Values:</h3>
        <p><strong>Current Time:</strong> ${formattedDate} ${formattedTime}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tgl_lahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenis_kelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

const resultContainer = document.querySelector('.result-container');
    if (nama || tgl_lahir || jenis_kelamin || pesan) {
        resultContainer.style.display = 'block';
        resultContainer.style.border = '2px solid black'; // Show the border when there is content
    } else {
        resultContainer.style.display = 'none';
    }
}