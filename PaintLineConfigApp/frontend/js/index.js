


console.log("index.js loaded");




    document.getElementById("saveBtn").addEventListener("click", function () {

        const part = document.getElementById("part").value;
        const robot = document.getElementById("robot").value;
        const color = document.getElementById("color").value;
        const flame = document.getElementById("flame").value;
        const style = document.getElementById("style").value;


        if (
            part === "Select Part" ||
            robot === "Select Robot" ||
            color === "Select Color" ||
            flame === "Select Flame" ||
            style === "Select Style"
        ) {
            alert("Please make a selection for all fields.");
            return;
        }

        const tableBody = document.getElementById("configTableBody");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${part}</td>
            <td>${robot}</td>
            <td>${color}</td>
            <td>${flame}</td>
            <td>${style}</td>

        `;

        tableBody.appendChild(row);
    });
