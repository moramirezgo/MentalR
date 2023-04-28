// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions_practice,
            practice,
            instructions_hands,
            hands,
            instructions_bodies,
            bodies,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "PRETEST",
            deployMethod: "debug",
            contact_email: "moramirezgo@unal.edu.co - hcballenc@unal.edu.co",
                },
    });
});