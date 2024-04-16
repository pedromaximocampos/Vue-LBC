export default {
    setAuth(state, payload){
        state.is_logged_in = payload.isAuth;
    }
}