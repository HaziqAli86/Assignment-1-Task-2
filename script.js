document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  const viewApplicationsBtn = document.getElementById("viewApplications");
  const applicationsTable = document.getElementById("applicationsTable");

  let applications = []; // Array to store applications

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect application data
    const application = {
      name:
        document.getElementById("name").value +
        " " +
        document.getElementById("surname").value,
      email: document.getElementById("inputEmail4").value,
      phone: document.getElementById("inputPhone").value,
      address:
        document.getElementById("inputAddress").value +
        ", " +
        document.getElementById("inputCity").value,
      resume:
        document.getElementById("formFile").files.length > 0
          ? document.getElementById("formFile").files[0].name
          : "No file",
      coverLetter: document.getElementById("coverLetter").value,
      schoolName: document.getElementById("schoolName").value,
      highestEducation: document.getElementById("highestEducation").value,
      graduationYear: document.getElementById("graduationYear").value,
      majorField: document.getElementById("majorField").value,
      previousJobTitle: document.getElementById("jobTitle").value,
      previousCompany: document.getElementById("companyName").value,
      skills: document.getElementById("skills").value,
      availableFrom: document.getElementById("availableFrom").value,
      willingToRelocate: document.getElementById("willingToRelocate").value,
      referenceName: document.getElementById("referenceName").value,
      referenceContact: document.getElementById("referenceContact").value,
    };

    applications.push(application); // Add the application to the array
    alert("Application submitted!"); // Notify user of successful submission
    form.reset(); // Reset the form
  });

  viewApplicationsBtn.addEventListener("click", function () {
    // Clear previous application data
    applicationsTable.style.display = "block"; // Ensure the table is visible

    if (applications.length === 0) {
      alert("No applications to display.");
      applicationsTable.style.display = "none"; // Hide if no applications
      return;
    }

    // Display the last submitted application (or modify this to show a list)
    const app = applications[applications.length - 1];

    // Populate the application data into the HTML structure
    document.getElementById("appName").textContent = app.name;
    document.getElementById("appEmail").textContent = app.email;
    document.getElementById("appPhone").textContent = app.phone;
    document.getElementById("appAddress").textContent = app.address;
    document.getElementById("appResume").textContent = app.resume;
    document.getElementById("appCoverLetter").textContent = app.coverLetter;
    document.getElementById(
      "appEducation"
    ).textContent = `${app.highestEducation} in ${app.majorField} (${app.graduationYear}) from ${app.schoolName}`;
    document.getElementById(
      "appJobTitles"
    ).textContent = `${app.previousJobTitle} at ${app.previousCompany}`;
    document.getElementById("appSkills").textContent = app.skills;
    document.getElementById(
      "appAvailability"
    ).textContent = `Available from: ${app.availableFrom}, Willing to relocate: ${app.willingToRelocate}`;
    document.getElementById(
      "appReferences"
    ).textContent = `${app.referenceName}, ${app.referenceContact}`;
  });
});
