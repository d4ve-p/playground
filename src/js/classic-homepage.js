currentLinkId = 1

function menuClick(e) {
    var target = e.target
    document.getElementById(currentLinkId).className = "";
    currentLinkId = target.id;
    target.className = "active";
}