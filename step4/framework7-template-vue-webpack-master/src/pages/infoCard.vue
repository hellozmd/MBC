<template>
    <f7-card class="info-container">
        <f7-card-header class="info-head">
            <div class="info-headTitle left-interval" v-on:click="$emit('enlarge-text')">
                BasicInfo
            </div>
        </f7-card-header>
        <f7-card-content class=" left-interval info-borderLine">
            <div class="" v-for="(value, key) in infoData" :key="key" v-bind:class="pickClass(attrName)">
                <div class="applicant attr-key">{{key}}</div>
                <div class="applicant attr-value">{{value}}</div>
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
        props: [
            'infoData', Object,
            'attrName', String
        ],
        data: function() {
            return {
            }
        },
        methods: {
            pickClass: function(attrName) {
                return attrName === 'BasicInfo' ? 'basic-infoDtl' : 'budget-detail';
            },
            isBudgetAttr: function() {
                return attrName === 'Budgeted';
            }
        }
    }
</script>

<!-- <div class="basic-infoDtl">
        <div class="asset-type attr-key">Asset Type</div>
        <div class="asset-type attr-value">{{infoData.assetType}}</div>
    </div>
    <div class="basic-infoDtl">
        <div class="companyName attr-key">Company Name</div>
        <div class="companyName attr-value">{{infoData.companyName}}</div>
    </div>
    <div class="basic-infoDtl">
        <div class="desc attr-key">Description</div>
        <div class="desc attr-value">infoData.description</div>
    </div> -->