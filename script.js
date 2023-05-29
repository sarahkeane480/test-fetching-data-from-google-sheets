



// ==================================================================
// Displays the array of entries
// This gets run inside of the loadEntries() function.
function showEntries(entries) {
    console.log(entries);
    document.getElementById("entries").innerHTML = entries;
}





// ==================================================================
// Loading entries

// Apps Script URL that provides .tsv data from our google sheet 
let tsvLink = "https://script.google.com/macros/s/AKfycbxmsaoqLsJHsjRsqd2TMK2XyGwUDoYkVFNCQf5M71WZOHQvnZC6oDx_jNQQYucYUe9e/exec"

// Loads entries into an array, then calls showEntries(entries) 
function loadEntries(tsvLink) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // parse entries from TSV data into an array
        let entries = d3.tsvParseRows(this.responseText);

        showEntries(entries);
    }
    xhttp.open("GET", tsvLink, true);
    xhttp.send();
}

loadEntries(tsvLink)

// ==================================================================



