<template>
    <f7-page id="detailPage">
            <f7-navbar>
                    <f7-nav-left>
                        <f7-link class="return-icon backbtn-offset" @click="$f7router.back()">
                            <f7-icon icon="icon-back" class="color-white"></f7-icon>
                        </f7-link>
                    </f7-nav-left>
                    <f7-nav-title class="detailTitle">
                        {{cid}}
                    </f7-nav-title>
                    <div class="right"></div>
            </f7-navbar>
                <div class="cards">
                    <infoCardA v-bind:infoData="basicInfo" attrName="BasicInfo" v-on:enlarge-text="test1">
                    </infoCardA>
                    <infoCardA v-bind:infoData="budgeted" attrName="Budgeted">
                    </infoCardA>
                    <infoCardC v-bind:infoData="supportingDoc">
                    </infoCardC>
                    
                </div>
            
    </f7-page>
</template>
    <script>
import "../css/detailPage.css";
import store from "../store/store.js";
import infoCardA from "../pages/infoCard.vue";
import infoCardB from "../pages/infoCard2.vue";
import infoCardC from "../pages/infoCard3.vue";
export default {
    components: {
        infoCardA,
        infoCardB,
        infoCardC
    },
    data: function() {
        return {
        cid: this.$f7route.params.id,
        basicInfo: {
            applicant: "GLADYS CHIU",
            assetType: "OLL warehouses, depots, trucks & others",
            companyName: "Gold Talent Business Consultion (Shanghai)",
            description: "Subject: ${FORM_TYPE} Form Number"
        },
        budgeted: {
            totalCommitment: "",
            PreApplication: "",
            thisApplication: "$123456789",
            budgetVariance: ""
        },
        supportingDoc: [
            { docIcon: "doc.png", docName: "A4_CER1101.doc", docID: "A4 CER1101" },
            { docIcon: "doc.png", docName: "A4_OLR 1101.doc", docID: "A4 OLR 1101" }
        ]
        };
    },
    methods: {
        test1: function () {
            console.log('emit event' + 1);
        }
        // computedBudget: budgetNum => {
        // return budgetNum === "" ? "--" : budgetNum;
        // },
        // budgetDisplayColor: budgetNum => {
        // return budgetNum === "" ? { color: "black" } : { color: "#067bff" };
        // },
    }
};
</script>