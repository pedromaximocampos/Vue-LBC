export default {
    incrementCounter(context){
        // Allowed to run async code
        // context.commit('incrementCounter', context.state.counter);
        setTimeout(function (){
            context.commit('incrementCounter')
        }, 2000)
    },
    increaseCounter(context, payload){
        context.commit('increaseCounter', payload.num)
    },
}