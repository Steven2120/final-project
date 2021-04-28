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
                <h2 id="result-title">Results</h2>
            </div>

            <div id="donation" class="sections">
                <div id="donation-title-div" class="row">
                    <h3 id="donation-title">Would you like to donate?</h3>
                </div>
                <div id="donation-user" class="row">
                    <label id="donation-label" class="title-inputs">Enter donation amount</label>
                    <input type="text" id="donation-input">
                </div>
            </div>
        </div>
    </div>
`);

//queried api text input, ein text input, and search button
const apiInput = $("#api-key-input");
const einInput = $("#ein-input");
const searchButton = $("#search-button");

//add click event listener to search button and fetch api raw data
searchButton.click(() => {
  const URL = `http://data.orghunter.com/v1/charitybasic?user_key=${apiInput.val()}&ein=${einInput.val()}`;
  console.log(URL);
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((rawResponse) => {
      console.log("Response", rawResponse);
      return rawResponse.json();
    })
    .then((json) => {
      console.log("Json", json);
    });
});
