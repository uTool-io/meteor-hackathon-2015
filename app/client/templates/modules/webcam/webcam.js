Template.webcam.onRendered(function () {
    //FlowRouter.triggers.exit([Webcam.reset()]);

    Webcam.on('error', function (error) {
        console.error(error);
    });

    Webcam.set({
        width: 320,
        height: 240,
        dest_width: 640,
        dest_height: 480,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    Webcam.attach('.webcam.module');
});

Template.webcam.events({
    'click .snap.button': function () {
        Webcam.snap(function (image) {
            Session.set('webcamSnap', image);
        })
    }
});

Template.webcam.helpers({
    image: function () {
        return Session.get('webcamSnap');
    }
});