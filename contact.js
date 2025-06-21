// Load only after <script src="https://cdn.jsdelivr.net/...> is included in HTML
console.log("📩 contact.js loaded...");

const form = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");

if (form) {
  // Fill time field
  const timeField = document.getElementById("timeField");
  if (timeField) {
    timeField.value = new Date().toLocaleString();
  }

  // Initialize EmailJS with correct public key
  emailjs.init("z7-iOjTGAy-3hiTiK"); // ✅ Use your real PUBLIC KEY

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("📤 Sending message...");

    emailjs.sendForm("service_4kvr12e", "template_cxdue7o", form)
      .then(() => {
        formMessage.innerText = "✅ Message sent successfully!";
        formMessage.style.color = "limegreen";
        form.reset();
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        formMessage.innerText = "❌ Failed to send. Please try again.";
        formMessage.style.color = "red";
      });
  });
} else {
  console.error("❌ Form not found.");
}
