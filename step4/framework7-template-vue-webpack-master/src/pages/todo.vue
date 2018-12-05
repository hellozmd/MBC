<template>
    <f7-page id="todo" ptr @ptr:refresh="loadMore">
        <f7-navbar>
            <f7-nav-title class="page-title">
                Todo
            </f7-nav-title>
            <f7-nav-right>
                <f7-link panel-open="right">
                    <f7-icon icon="icon-menu">menu</f7-icon>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-toolbar tabbar>
            <f7-link tab-link="#tab-1" tab-link-active>
                <f7-icon ios="f7:data" md="material:data-fill" size="20px"></f7-icon>
                <!--<span class="tabbar-label no-shadow">Todo</span> -->
            </f7-link>
            <f7-link tab-link="#tab-2">
                <f7-icon ios="f7:data" md="material:data-fill" size="20px"></f7-icon>
            </f7-link>
            <f7-link tab-link="#tab-3">
                <f7-icon ios="f7:data" md="material:data-fill" size="20px"></f7-icon>
            </f7-link>
        </f7-toolbar>
        <div class="cards cards-rwd">
            <f7-card class=" userinfo-size" v-for="userInfo in userInfoList">
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
    module.exports = {
        data: function () {
            return {
                userInfoList: [
                    { id: "CRE2018-0511", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0512", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0513", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" },
                    { id: "CRE2018-0514", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition" }
                ],
                
            }
        },
        methods: {
                showDetail: function (data, event) {
                    console.log(data.id);
                    console.log(this.$f7router);
                    this.$f7router.navigate('/detail/' + data.id, {
                        query: {
                            cid: data.id,
                        }
                    });
                },
                loadMore: function (event, done) {
                    console.log(this.userInfoList);
                    setTimeout(() => {
                        for(let i = 0; i < 4; i++)
                            this.userInfoList.push({
                                id: "CRE2018-0514", date: "2018-11-18", status: "Pendeing for FINCON", totalAmount: "2500001", unbudgeted: "----", applicant: "HELEN TONG", revenueMode: "Acquisition"
                            });
                    done();
                    }, 2000)
                }
        }
    }   
    require ('../css/todo.css'); 
</script>
<style scoped>
</style>