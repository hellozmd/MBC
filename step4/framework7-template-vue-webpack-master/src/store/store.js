import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        infiniteStatus: false
    },

    getters:{
        getInfiniteStatus(state){
            return state.infiniteStatus;
        }
    },
    actions:{
        setInfiniteStatus({commit,state}, status){
            commit("setInfiniteStatus", status);
        }
    },
    mutations:{
        setInfiniteStatus(state, status){
            state.infiniteStatus = status;
        }
    }
});

export default store;