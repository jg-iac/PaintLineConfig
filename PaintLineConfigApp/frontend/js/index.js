


console.log("index.js loaded");



    function booleanToString(value) {
        return value ? "YES" : "NO";
    }

    const colorMap = {
    "Black": "#000000",
    "Pebble": "#B4AEA2",
    "Dark Atmosphere": "#665B48",
    "Very Dark Atmosphere": "#393530",
    "Flint": "#CCCBC4"
    };



    document.getElementById("saveBtn").addEventListener("click", function () {

        const part = document.getElementById("part").value;
        const robot = document.getElementById("robot").value;
        const color = document.getElementById("color").value;
        const flame1 = document.getElementById("flame1").checked;
        const flame2 = document.getElementById("flame2").checked;
        const style = document.getElementById("style").value;
        const qty = document.getElementById("qty").value;


        if (
            part === "Select Part" ||
            robot === "Select Robot" ||
            color === "Select Color" ||
            // flame1 === "Select Flame" ||
            style === "Select Style" ||
            qty === ""
        ) {
            alert("Please make a selection for all fields.");
            return;
        }

        const tableBody = document.getElementById("configTableBody");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${part}</td>
            <td>${robot}</td>
            <td><span class="color-box" style="background-color: ${colorMap[color]};"></span> ${color}</td>
            <td>${booleanToString(flame1)}<img class="flame-icon" src="${flame1 ? 'assets/flame_one_on.png' : 'assets/flame_one_off.png'}")}</td>
            <td>${booleanToString(flame2)}<img class="flame-icon" src="${flame2 ? 'assets/flame_two_on.png' : 'assets/flame_two_off.png'}")}</td>
            <td>${style}</td>
            <td>${qty}</td>
            <td> <button id="deleteRowBtn" class="button"><i class="fa-solid fa-trash"></i></button></td>
            `;
            
            tableBody.appendChild(row);
        });
        // <td>${booleanToString(flame1)}</td>

    const partDescriptions = {
    "w421 RH": "RH Map Pocket (All varieties)",
    "w421 LH": "LH Map Pocket (All varieties)",
    "w424 RH": "Front Door Substrate",
    "w424 LH": "Front Door Substrate",
    "w425 RH": "Rear Door LWB Substrate",
    "w425 LH": "Rear Door LWB Substrate",
    "w426 RH": "Rear Door SWB Substrate",
    "w426 LH": "Rear Door SWB Substrate",
    "w741": "IP Upper Substrate",
    "w743": "IP Center Speaker",
    "w727": "" //TBD
};

document.getElementById("description").readOnly = false;
document.getElementById("part").addEventListener("change", function () {

    const selectedPart = this.value;
    // console.log(selectedPart)
    const descriptionField = document.getElementById("description");

    descriptionField.value = partDescriptions[selectedPart] || "";
});



    const partQty = {
    "w421 RH": 12,
    "w421 LH": 12,
    "w424 RH": 30,
    "w424 LH": 30,
    "w425 RH": 30,
    "w425 LH": 30,
    "w426 RH": 1,
    "w426 LH": 1,
    "w741": 30,
    "w743": 6
};

document.getElementById("part").addEventListener("change", function () {

    const selectedPart = this.value;
    const qtyField = document.getElementById("qty");

    qtyField.value = partQty[selectedPart] || "";
});