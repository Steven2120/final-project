const body = $("body");

//created and appended all html elements to DOM using jquery
body.append(`
    <div id="app-container">
        <div class="row">
            <h1 id="title">Get information on the charity of your choice</h1>
        </div>
        <div id="sections-parent">
            <div id="top-section" class="sections">
                <div class="row">
                    <h2 id="enter-info">Input requested information to receive details of charity</h2>
                </div>
                <div class="row" id="api">
                    <label id="api-label" class="title-inputs">Enter your API Key</label>
                    <input type="text" id="api-key-input">
                </div>
                <div class="row" id="ein">
                    <label id="ein-label" class="title-inputs">Enter charity EIN</label>
                    <input type="text" id="ein-input">
                </div>
                <div class="row">
                    <button id="search-button" class="btn btn-secondary">Search</button>
                </div>
            </div>

            <div id="results" class="sections">
                <div class="row">
                    <h2 id="result-title">Charity Results</h2>
                </div>
            </div>

            <div id="donation" class="sections">
                <div id="donation-title-div" class="row">
                    <h3 id="donation-title">Would you like to donate?</h3>
                </div>
                <div id="donation-user" class="row">
                    <label id="donation-label" class="title-inputs">Enter donation amount</label>
                    <input type="text" id="donation-input">
                    <button id="donation-button" class="btn btn-secondary">Donate</button>
                </div>
            </div>
        </div>
    </div>
`);

//queried api text input, ein text input, and search button
const apiInput = $("#api-key-input");
const einInput = $("#ein-input");
const searchButton = $("#search-button");
const resultOutput = $("#results");

//add click event listener to search button and fetch api raw data
searchButton.click(() => {
  const URL =
    "http://data.orghunter.com/v1/charitybasic" +
    `?user_key=${apiInput.val()}` +
    `&ein=${einInput.val()}`;

  const CORS_WORKAROUND = "https://cors-anywhere.herokuapp.com/" + URL;

  fetch(CORS_WORKAROUND)
    .then((rawResponse) => {
      console.log("Response", rawResponse);
      return rawResponse.json();
    })
    .then((json) => {
      console.log("Json", json);
      resultOutput.append(`
        <div id="result-parent">
            <div id="result-1" class="result-row">Name: ${json.data.name}</div>
            <div id="result-2" class="result-row">Established: ${json.data.rullingDate}</div>
            <div id="result-3" class="result-row">Street: ${json.data.street}</div>
            <div id="result-4" class="result-row">City: ${json.data.city}</div>
            <div id="result-5" class="result-row">State: ${json.data.state}</div>
            <div id="result-6" class="result-row">Zip code: ${json.data.zipCode}</div>
            <div id="result-7" class="result-row">Country: ${json.data.country}</div>
            <div id="result-8" class="result-row">Classification: ${json.data.nteeType}</div>
            <div id="result-9" class="result-row">Brief description: ${json.data.nteeClass}</div>
            <div id="result-10" class="result-row">Type: ${json.data.organization}</div>
            <div id="result-11" class="result-row">Status: ${json.data.affiliation}</div>
            <div id="result-12" class="result-row">Total assets: ${json.data.assetAmount}</div>
            <div id="result-13" class="result-row">Asset code range: ${json.data.assetCodeDesc}</div>
            <div id="result-14" class="result-row">Exemption status: ${json.data.exemptStatus}</div>
            <div id="result-15" class="result-row">Contribution: ${json.data.foundation}</div>
        </div>
        `);
    });
});

const donationArea = $("#donation-user");
const donationButton = $("#donation-button");
const donationInput = $("#donation-input");
const donationSent = $("<div id='donation-confirmation'></div>");
donationArea.append(donationSent);

donationButton.click(() => {
  for (const num of donationInput.val()) {
    if (/[0-9]/.test(num)) {
      donationSent.text(
        `Your $${Number(donationInput.val()).toFixed(
          2
        )} dollar donation is confirmed!`
      );
      donationSent.css({
        color: "green",
        "font-size": "2em",
        "text-align": "center",
        "margin-bottom": "2rem",
      });
    } else {
      donationSent.text("Please enter a correct amount!");
      donationSent.css({
        color: "red",
        "font-size": "2em",
        "text-align": "center",
        "margin-bottom": "2rem",
      });
    }
  }
});
