export default {
    namespaced:true,
    state(){
        return {
            // state properties here
            items: [],
            total: 0,
            qty: 0,
        }
    },
    mutations:{
        addProduct(state, payload){
            const productData = payload
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );
            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProduct(state, payload){
            const prodId = payload.productId
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        }
    },
    actions:{
        addToCart(context, payload){
            context.commit('addProduct', payload);
        },
        removeFromCart(context, payload){
            context.commit('removeProduct', payload);
        }
    },
    getters:{
        totalPrize(state){
            return state.total;
        },
        totalQuantity(state){
            return state.qty;
        },
        getProductsInCart(state){
            return state.items;
        },


    }
}