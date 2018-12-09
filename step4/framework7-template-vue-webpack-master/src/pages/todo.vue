<template>
    <f7-page id="todo" ptr @ptr:refresh="loadMorePtr"
        infinite
        :infinite-distance="30"
        :infinite-preloader="this.$store.state.infiniteStatus"
        @infinite="loadMoreInScrollBottom">
        <f7-navbar>
            <f7-nav-title class="page-title">
                Todo
            </f7-nav-title>
            <f7-nav-right>
                <f7-link class="menu-offset">
                    <f7-icon color="white" ios="f7:menu" md="material:menu" size="30px">
                </f7-icon>
        </f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-toolbar tabbar labels>
            <f7-link tab-link="#todo" tab-link-active text="Todo" icon-ios="f7:data_fill" icon-md="material:data"></f7-link>
            <f7-link tab-link="#approval" text="Approval" icon-ios="f7:favorites" icon-md="material:favorites"></f7-link>
            <f7-link tab-link="#me" text="Me" icon-ios="f7:person" icon-md="material:person"></f7-link>
        </f7-toolbar>
        <div class="cards cards-rwd">
            <f7-card class=" userinfo-size" v-for="userInfo in userInfoList" :key="userInfo.id">
                <div class="user-info" @click="showDetail(userInfo, $event)">
                <div class="info-tag">
                    <div class="info-value">{{userInfo.id}}</div>
                    <div class="info-key">{{userInfo.date}}</div>
                </div>
                <div class="info-tag">
                    <div class="user-status-box">
                        <div class="user-status">
                            {{userInfo.status}}
                        </div>
                    </div>
                </div>
                <div class="info-tag">
                    <div class="info-key">TotalAmount</div>
                    <div class="info-value">{{userInfo.totalAmount}}</div>
                </div>
                <div class="info-tag">
                    <div class="info-key">Unbudgeted</div>
                    <div class="info-value">{{userInfo.unbudgeted}}</div>
                </div>
                <div class="info-tag">
                    <div class="info-key">Applicant</div>
                    <div class="info-value">{{userInfo.applicant}}</div>
                </div>
                <div class="info-tag">
                    <div class="info-key">RevenueMode</div>
                    <div class="info-value">{{userInfo.revenueMode}}</div>
                </div>
                </div>
            </f7-card>
        </div>
    </f7-page>
</template>

<script>
    function computeInfinite(self) {
        let cardLength = self.Dom7('.cards')[0].scrollHeight;
        if(cardLength > self.$f7.height - 88)
            self.$store.commit('setInfiniteStatus', true);
        else self.$store.commit('setInfiniteStatus', false)
    }
    export default {
        data: function () {
            return {
                userInfoList: [
                    { id: "CRE2018-0511", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0512", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0513", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0514", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" }
                ],
                allowInfinite: true,
                showPreloader: false,
            }
        },
        methods: {
            showDetail: function (data, event) {
                        console.log(this.$store);
                this.$f7router.navigate('/detail/' + data.id, {
                    query: {
                        cid: data.id,
                    }
                });
            },
            loadMorePtr: function (event, done) {
                setTimeout(() => {
                    this.loadDataMock();
                done();
                }, 2000)
                setTimeout(() => {
                    computeInfinite(this);
                }, 2200)
            },
            loadMoreInScrollBottom: function () {
                const self = this;
                if(!self.allowInfinite) return;
                    self.allowInfinite = false;
                setTimeout( () => {
                    if(self.userInfoList.length > 50) {
                        self.$store.commit('setInfiniteStatus', true); return;
                    }
                    self.loadDataMock();
                    self.allowInfinite = true;
                    computeInfinite(self);
                }, 1000)
            },
            loadDataMock: function() {
                for(let i = 0; i < 4; i++) {
                    let genId = new Date().toJSON() + i;
                    this.userInfoList.push({
                        id: genId, date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition"
                    });
                }
            },
        },
        mounted: function() {
            let that = this;
            computeInfinite(that);
            that.$f7router.app.on('orientationchange', function(e, page) {
                if(that.$el.id === 'todo') {
                    console.log(11);
                    computeInfinite(that);
                }
            })
        }
    }   
    import '../css/todo.css';
    import '../css/framework7-icons.css'; 
</script>
<style scoped>
</style>