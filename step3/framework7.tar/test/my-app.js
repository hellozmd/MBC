// import Framework from 'framework7';

var app = new Framework7({
    root: '#todoPage',
    id: 'todo',
    name: 'todo',
    on: {
        init: function(page) {
            console.log('app init');
        },
    },
    routes: [
        {
            name: 'about',
            path: '/about/',
            url: './detailPage.html'
        }
    ]
});

var $$ = Dom7;
$$('.userInfo').on('click', function(e) {
    console.log('click');
});
$$(document).on("page:mounted", function(e) {
    console.log(e.detail.$pageEl[0].id);
    console.log('page mounted');
});
$$(document).on("page:init", function(e) {
    console.log(e);
    console.log('page init');
});
$$(document).on("page:reinit", function(e) {
    console.log('page reinit');
});
$$(document).on("page:beforein", function(e) {
    console.log('page brforein');
});
$$(document).on("page:afterin", function(e) {
    console.log('page afterin');
});
$$(document).on("page:afterout", function(e) {
    console.log('page afterout');
});
$$(document).on("page:beforeremove", function(e) {
    console.log('page beforeremove');
});


var view = app.view.create('.view-main');