// import Framework from 'framework7';
var app = new Framework7({
    root: '#app',
    id: 'app',
    name: 'app',
    on: {
        init: function (page) {
            console.log('app init');
        },
    },
    routes: [
        {
            name: 'about',
            path: '/about/',
            url: './detailPage.html',
            on: {
                pageInit: function (e) {
                    var params = app.utils.parseUrlQuery(this.url);
                    var id = params.id;
                    var $$ = Dom7;
                    $$('.detailTitle')[0].innerHTML = id;
                    function DtlViewModel() {
                        var self = this;
                        self.basicInfo = ko.observable(
                            {
                                applicant: "GLADYS CHIU", assetType: "OLL warehouses, depots, trucks & others",
                                companyName: "Gold Talent Business Consultion (Shanghai)", description: "Subject: ${FORM_TYPE} Form Number"
                            }
                        );
                        self.bargeted = ko.observable(
                            { totalCommitment: "", PreApplication: "", thisApplication: "$123456789", budgetVariance: "" }
                        );
                        self.supportingDoc = ko.observableArray([
                            { docIcon: "doc.png", docName: "A4_CER1101.doc", docID: "A4 CER1101" },
                            { docIcon: "doc.png", docName: "A4_OLR 1101.doc", docID: "A4 OLR 1101" }
                        ]);
                        self.judgeBargetValue = function (barget) {
                            return barget === '' ? '--' : barget;
                        }
                        self.judgeBargetColor = function (barget) {
                            return barget === '' ? 'black' : '067BFF';
                        }
                        self.isTopDoc = function(index) {
                            return index === 1 ? '0px' : '1px';
                        }
                    }
                    var dtlViewModel = new DtlViewModel();
                    ko.applyBindings(dtlViewModel, document.getElementById('detailPage'));

                    var $$ = Dom7;
                    $$('.returnIcon').on('click', function (e) {
                        app.router.back();
                    })
                },
            },
        }
    ]
});

var $$ = Dom7;
function viewModel() {
    console.log('data-bind');
    var self = this;
    self.userInfoList = ko.observableArray(
        [
            { id: "CRE2018-0511", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
            { id: "CRE2018-0512", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
            { id: "CRE2018-0513", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
            { id: "CRE2018-0514", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" }
        ]
    )
    self.showDetailPage = function (e) {
        app.router.navigate({
            name: 'about',
            query: {
                id: this.id,
            },
        });
    }
}
viewModel = new viewModel();
ko.applyBindings(viewModel, document.getElementById('todoPage'));

// Pull to refresh content
var $ptrContent = $$('.ptr-content');
$ptrContent.on('ptr:refresh', function (e) {
    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            viewModel.userInfoList.push(
                {
                    id: "CRE2018-0513", date: "2018-11-18", status: "Pendeing for FINCON",
                    totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG",
                    revenueMode: "Acquisition"
                }
            );
        }
        app.ptr.done(); // or e.detail();
    }, 2000);
})


var view = app.view.create('.view-main');
var allowInfinite = true;

// Last loaded index
var lastItemIndex = $$('.list li').length;

// Max items to load
var maxItems = 200;

// Append items per load
var itemsPerLoad = 20;
app.infiniteScroll.create('.infinite-scroll-content')
// Attach 'infinite' event handler
$$('.infinite-scroll-content').on('infinite', function (e) {
    if (!allowInfinite) return;
    allowInfinite = false;
    // Emulate 1s loading
    setTimeout(function () {
        allowInfinite = true;

        if (lastItemIndex >= maxItems) {
            app.infiniteScroll.destroy('.infinite-scroll-content');
            $$('.infinite-scroll-preloader').remove();
            return;
        }
        for (let i = 0; i < 3; i++) {
            viewModel.userInfoList.push(
                {
                    id: "CRE2018-0513", date: "2018-11-18", status: "Pendeing for FINCON",
                    totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG",
                    revenueMode: "Acquisition"
                }
            )
        }
    }, 1000);
});

// $$(document).on("page:mounted", function (e) {
//     console.log(e.detail.$pageEl[0].id);
//     console.log('page mounted');
// });
// $$(document).on("page:init", function (e) {
//     console.log('page init');
// });
// $$(document).on("page:reinit", function (e) {
//     console.log('page reinit');
// });
// $$(document).on("page:beforein", function (e) {
//     console.log('page brforein');
// });
// $$(document).on("page:afterin", function (e) {
//     console.log('page afterin');
// });
// $$(document).on("page:afterout", function (e) {
//     console.log('page afterout');
// });
// $$(document).on("page:beforeremove", function (e) {
//     console.log('page beforeremove');
// });