const form = document.getElementById("form");

console.log(form);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(form.elements);
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const country = document.getElementById("country");
    const weeklyReport = document.getElementById("weeklyReport");
    const pullRequest = document.getElementById("pullRequest");
    const deployment = document.getElementById("deployment");
    const secure = document.getElementById("secure");
    const range = document.getElementById("range");

    if (firstName.value !== "" && lastName.value !== "" && country.value !== ""){

        console.log ("firstName.value:", firstName.value);
        console.log ("lastName.value:", lastName.value);
        console.log ("country.value:", country.value);
        console.log ("Weekly Reports:", weeklyReport.checked);
        console.log ("Pull Requests:", pullRequest.checked);
        console.log ("deployment:", deployment.checked);
        console.log ("Run security check upon login:", secure.checked);
        confirm("are you sure you want to submit?");

        firstName.value = "";
        lastName.value = "";
        country.value = "";
        weeklyReport.checked = false;
        pullRequest.checked =false;
        deployment.checked =false;
        secure.checked = true;
}
});