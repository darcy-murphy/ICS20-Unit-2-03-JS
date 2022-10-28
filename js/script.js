function enterClicked() {
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value
  document.getElementById("address").innerHTML =
    "Your info is: " + streetNumber + " " + streetName + "."
}