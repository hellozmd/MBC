<template>
    <f7-card class="info-container">
        <f7-card-header class=" info-head">
            <div class="info-headTitle left-interval">
                Have Bargeted
            </div>
        </f7-card-header>
        <f7-card-content class=" left-interval ">
            <div class="budget-detail">
                <div class="attr-key">Total Lease Commitment</div>
                <div class="budget-number" v-bind:style="budgetDisplayColor(infoData.PreApplication)">
                    {{computedBudget(infoData.totalCommitment)}}
                </div>
            </div>
            <div class="budget-detail">
                <div class="attr-key">Previous application(s)</div>
                <div class="budget-number" v-bind:style="budgetDisplayColor(infoData.PreApplication)">
                    {{computedBudget(infoData.PreApplication)}}
                </div>
            </div>
            <div class="budget-detail">
                <div class="attr-key">This Application</div>
                <div class="budget-number" v-bind:style="budgetDisplayColor(infoData.thisApplication)">
                    {{computedBudget(infoData.thisApplication)}}
                </div>
            </div>
            <div class="budget-detail">
                <div class="attr-key">Budget Variance</div>
                <div class="budget-number" v-bind:style="budgetDisplayColor(infoData.budgetVariance)">
                    {{computedBudget(infoData.budgetVariance)}}
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
</template>
<script>
    export default {
        props: ['infoData'],
        data: function() {
            return {
            }
        },
        methods: {
            computedBudget: budgetNum => {
                return budgetNum === "" ? "--" : budgetNum;
            },
            budgetDisplayColor: budgetNum => {
                return budgetNum === "" ? { color: "black" } : { color: "#067bff" };
            },
        }
    }
</script>
