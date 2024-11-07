function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function sendmail(){
  // Collecting form data
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceId = "service_a8y01va";
  const templateId = "template_j4hs279";

  // Sending email via EmailJS
  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      console.log(res);
      alert("Message sent successfully"); // Show alert first

      // Clear form fields after alert
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message. Please try again.");
    });
}
