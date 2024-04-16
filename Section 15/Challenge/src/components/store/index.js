import { createStore } from "vuex";
import productsModule from './modules/products/index.js'
import cartModule from './modules/cart/index.js'

const store = createStore({
    modules:{
        products: productsModule,
        cart: cartModule,
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        login(state, payload) {
            state.isLoggedIn = payload.auth
        },
        logout(state, payload) {
            state.isLoggedIn = payload.auth
        },
    },
    actions: {
        login(context) {
            context.commit('login', {auth: true})
        },
        logout(context){
            context.commit('logout', {auth: false})
        }
    },
    getters: {
        getAuth(state) {
            return state.isLoggedIn
        }
    }
})
export default store