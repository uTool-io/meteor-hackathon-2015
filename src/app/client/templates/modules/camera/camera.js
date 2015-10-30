'use strict';

var getPicture = function (options) {
    MeteorCamera.getPicture(options, function (error, photo) {
        if (error) {
            console.error('error', error);
        }
        if (photo) {
            Session.set('cameraSnap', photo);
        }
    });
};

Template.cameraMDG.onCreated(function () {
    Session.setDefault('cameraSnap', null);
});

Template.cameraMDG.onRendered(function () {
    Session.set('cameraSnap', null);
});

Template.cameraMDG.events({
    'click #camera-event': function () {
        getPicture({
            width: 350,
            height: 350,
            quality: 75
        });
    },
    'click #library-event': function () {
        if (Meteor.isCordova) {
            getPicture({
                width: 350,
                height: 350,
                quality: 75,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
        } else {
            console.error('Cordova only feature.');
        }
    },
    'click .retake.photo.button': function (event) {
        event.preventDefault();

        Session.set('cameraSnap', null);
    },
    'click .accept.photo.button': function (event, template) {
        event.preventDefault();

        var snapData = Session.get('cameraSnap');

        Session.set('acceptedPhoto', snapData);
    }
});

Template.cameraMDG.helpers({
    image: function () {
        return Session.get('cameraSnap');
    }
});

