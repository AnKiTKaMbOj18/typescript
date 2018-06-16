enum Respnse {
    No = "No",
    Yes = "Yes"
}
function respond(receipt: string, message: Respnse) {

    console.log("i have sent you message: "+receipt+"umm wait got it: "+message);
}
respond("prince rana ",Respnse.Yes);