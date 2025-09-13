
document.addEventListener("DOMContentLoaded", () => {
    const welcome = document.getElementById("welcome");
    const name = prompt("Masukkan Nama Anda:");
    if (name) {
      welcome.textContent = `Hi ${name}, Welcome To Website`;
    }
  });
  
 
  document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const message = document.getElementById("messageText").value;
    const output = document.getElementById("output");
  
    output.innerHTML = `
      <p><b>Current time:</b> ${new Date()}</p>
      <p><b>Nama:</b> ${name}</p>
      <p><b>Tanggal Lahir:</b> ${dob}</p>
      <p><b>Jenis Kelamin:</b> ${gender}</p>
      <p><b>Pesan:</b> ${message}</p>
    `;
  });
  