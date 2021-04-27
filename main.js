const body = $("body");

body.append(`
    <div id="app-container">
        <div class="row">
            <h1 id="title">Get information on the of your choice</h1>
        </div>
        <div id="sections-parent">
            <div id="top-section" class="sections">
                <div class="row">
                    <h2 id="enter-info">Input requested information to receive details of charity</h2>
                </div>
                <div class="row" id="api">
                    <label class="title-inputs">Enter your API Key</label>
                    <input type="text" id="api-key-input">
                </div>
                <div class="row" id="ein">
                    <label class="title-inputs">Enter charity EIN</label>
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
                <div class="row">
                    <h3>Would you like to donate?</h3>
                </div>
                <div class="row">
                    <label class="title-inputs">Enter donation amount</label>
                    <input type="text" id="donation-input">
                </div>
            </div>
        </div>
    </div>
`);
