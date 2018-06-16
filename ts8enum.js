var Respnse;
(function (Respnse) {
    Respnse["No"] = "No";
    Respnse["Yes"] = "Yes";
})(Respnse || (Respnse = {}));
function respond(receipt, message) {
    console.log("i have sent you message: " + receipt + "umm wait got it: " + message);
}
respond("prince rana ", Respnse.Yes);
