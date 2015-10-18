Template.webcam.onCreated(function () {
    Session.setDefault('webcamSnap', false);
});

Template.webcam.onRendered(function () {
    FlowRouter.reload();

    Session.set('webcamSnap', false);

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

    Webcam.attach('.webcam.module .webcam');
});

Template.webcam.events({
    'click .snap.photo.button': function (event) {
        event.preventDefault();

        Webcam.snap(function (image) {
            Session.set('webcamSnap', image);
        });
    },
    'click .retake.photo.button': function (event) {
        event.preventDefault();

        Session.set('webcamSnap', false);
    },
    'click .accept.photo.button': function (event, template) {
        event.preventDefault();

        var snapData = Session.get('webcamSnap');

        Session.set('acceptedPhoto', snapData);
    }
});

Template.webcam.helpers({
    image: function () {
        return Session.get('webcamSnap');
    }
});