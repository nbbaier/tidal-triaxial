function copyLink(event) {
  const href = window.location.href;
  const headingId = event.target.querySelector("a").getAttribute("href");
  const link = href + headingId;
  alert(link);

  // Create a temporary input element to copy the link
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", link);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy"); // Copy the link to clipboard
  document.body.removeChild(tempInput); // Remove the temporary input element
}
