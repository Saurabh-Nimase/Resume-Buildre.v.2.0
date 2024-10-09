document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Build resume content
    const resumeContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Education:</strong><br>${education}</p>
        <p><strong>Skills:</strong><br>${skills}</p>
        <p><strong>Experience:</strong><br>${experience}</p>
    `;

    // Display the resume
    const resumeDisplay = document.getElementById('resume-display');
    const resumeContentDiv = document.getElementById('resume-content');
    
    resumeContentDiv.innerHTML = resumeContent;
    resumeDisplay.style.display = 'block';
});

document.getElementById('download-btn').addEventListener('click', function () {
    // Import jsPDF library
    const { jsPDF } = window.jspdf;
    
    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Get the values again
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Add resume content to PDF
    doc.setFontSize(12);
    doc.text(20, 20, `Name: ${name}`);
    doc.text(20, 30, `Email: ${email}`);
    doc.text(20, 40, `Phone: ${phone}`);
    doc.text(20, 50, `Address: ${address}`);

    doc.text(20, 70, `Education:`);
    doc.text(20, 80, education);

    doc.text(20, 100, `Skills:`);
    doc.text(20, 110, skills);

    doc.text(20, 130, `Experience:`);
    doc.text(20, 140, experience);

    // Save the PDF with a filename
    doc.save('resume.pdf');
});
