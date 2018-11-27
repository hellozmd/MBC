var app = new Framework7({
// App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
  on: {
    pageInit: function(page) {
      console.log(page.app.name + ' ' + page.app.id);
      console.log(page);
    },
    popupOpen: function(popup) {
      console.log(popup);
      console.log(popup);
    }
  }
});
var mainView = app.views.create('.view-main');