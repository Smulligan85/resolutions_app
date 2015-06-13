if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: [
      { title: "Resolution #1" },
      { title: "Resolution #2" },
      { title: "Resolution #3" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
