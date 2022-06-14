let myData = {
    firstName:"Ryan",
    lastName:"Chung"
};
const App = Vue.createApp({
    data(){
        return myData;
    }
});

App.mount("#app");