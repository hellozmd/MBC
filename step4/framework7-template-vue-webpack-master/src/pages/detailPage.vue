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
                    <f7-card class="info-container">
                        <f7-card-header class="info-head">
                            <div class="info-headTitle left-interval" @click="getCityList">
                                Basic Info
                            </div>
                        </f7-card-header>
                        <f7-card-content class=" left-interval info-borderLine">
                            <div class="basic-infoDtl">
                                <div class="applicant attr-key">Applicant</div>
                                <div class="applicant attr-value">{{basicInfo.applicant}}</div>
                            </div>
                            <div class="basic-infoDtl">
                                <div class="asset-type attr-key">Asset Type</div>
                                <div class="asset-type attr-value">{{basicInfo.assetType}}</div>
                            </div>
                            <div class="basic-infoDtl">
                                <div class="companyName attr-key">Company Name</div>
                                <div class="companyName attr-value">{{basicInfo.companyName}}</div>
                            </div>
                            <div class="basic-infoDtl">
                                <div class="desc attr-key">Description</div>
                                <div class="desc attr-value">basicInfo.description</div>
                            </div>
                        </f7-card-content>
                        <f7-card-footer class=" info-foot">
                            <div class="show-more">
                                <img src="../images/enter.png" class="more-icon">
                            </div>
                            <div class="show-moreInfo">
                                More
                            </div>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="info-container">
                        <f7-card-header class=" info-head">
                            <div class="info-headTitle left-interval">
                                Have Bargeted
                            </div>
                        </f7-card-header>
                        <f7-card-content class=" left-interval ">
                            <div class="budget-detail">
                                <div class="attr-key">Total Lease Commitment</div>
                                <div class="budget-number" v-bind:style="budgetDisplayColor(budgeted.PreApplication)">
                                    {{computedBudget(budgeted.totalCommitment)}}
                                </div>
                            </div>
                            <div class="budget-detail">
                                <div class="attr-key">Previous application(s)</div>
                                <div class="budget-number" v-bind:style="budgetDisplayColor(budgeted.PreApplication)">
                                    {{computedBudget(budgeted.PreApplication)}}
                                </div>
                            </div>
                            <div class="budget-detail">
                                <div class="attr-key">This Application</div>
                                <div class="budget-number" v-bind:style="budgetDisplayColor(budgeted.thisApplication)">
                                    {{computedBudget(budgeted.thisApplication)}}
                                </div>
                            </div>
                            <div class="budget-detail">
                                <div class="attr-key">Budget Variance</div>
                                <div class="budget-number" v-bind:style="budgetDisplayColor(budgeted.budgetVariance)">
                                    {{computedBudget(budgeted.budgetVariance)}}
                                </div>
                            </div>
                        </f7-card-content>
                        <f7-card-footer class=" info-foot">
                            <div class="show-more">
                                <img src="../images/enter.png" class="more-icon">
                            </div>
                            <div class="show-moreInfo">
                                More
                            </div>
                        </f7-card-footer>
                    </f7-card>

                    <f7-card class="info-container">
                        <f7-card-header class=" info-head">
                            <div class="info-headTitle left-interval">
                                Supporting Document
                            </div>
                        </f7-card-header>
                        <f7-card-content class=" docList left-interval ">
                            <div class="docTab" v-for="(doc,index) in supportingDoc" :key="doc.docID" v-bind:class="index === 0 ? '' : 'top-line'">
                                <div class="doc-info">
                                    <div class="doc-iconBox">
                                        <img src="../images/doc.png" class="doc-icon">
                                    </div>
                                    <div>
                                        <div class="docName attr-value">{{doc.docName}}</div>
                                        <div class="docID attr-key">{{doc.docID}}</div>
                                    </div>
                                </div>
                                <div class="downloadBox">
                                    <div>
                                        <img src="../images/DOWNLOAD.png" class="downloadIcon">
                                    </div>
                                </div>
                            </div>
                        </f7-card-content>
                        <f7-card-footer class=" info-foot">
                            <div class="show-more">
                                <img src="../images/enter.png" class="more-icon">
                            </div>
                            <div class="show-moreInfo">
                                More
                            </div>
                        </f7-card-footer>
                    </f7-card>
                </div>
            
    </f7-page>
</template>
    <script>
import "../css/detailPage.css";
import store from "../store/store.js";
export default {
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
    computedBudget: budgetNum => {
      return budgetNum === "" ? "--" : budgetNum;
    },
    budgetDisplayColor: budgetNum => {
      return budgetNum === "" ? { color: "black" } : { color: "#067bff" };
    },
    getCityList: () => {
        console.log(this.$store.getters.getCityFn);
    },
  },
  computed: {
  }
};
</script>