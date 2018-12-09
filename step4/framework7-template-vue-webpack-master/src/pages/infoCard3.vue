<template>
    <f7-card class="info-container">
        <f7-card-header class=" info-head">
            <div class="info-headTitle left-interval">
                Supporting Document
            </div>
        </f7-card-header>
        <f7-card-content class=" docList left-interval ">
            <div class="docTab" v-for="(doc,index) in infoData" :key="doc.docID" v-bind:class="index === 0 ? '' : 'top-line'">
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
</template>
<script>
    export default {
        props: ['infoData'],
        data: function() {
            return {
            }
        }
    }
</script>
