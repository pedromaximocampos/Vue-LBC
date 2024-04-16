export default {
    incrementCounter(state){
        state.counter += 1;
    },
    increaseCounter(state, num){
        console.log(state);
        state.counter +=  num
    },
}