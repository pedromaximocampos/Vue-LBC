export default {
    finalCounter(state){
        return state.counter * 2;
    },
    normalizedCounter(state){
        const finalCounter = state.counter * 3;
        if (finalCounter < 0){
            return  0
        }
        if (finalCounter > 100){
            return 100
        }
        return finalCounter
    },
}