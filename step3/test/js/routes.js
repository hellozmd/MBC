routes = [
        {
            name: 'about',
            path: '/about/:id',
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
    ];