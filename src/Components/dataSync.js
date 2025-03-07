const saveCart=(item)=>{
    console.log(typeof(item),item.product.product_id,item.product.price)
    let balance=JSON.parse(localStorage.getItem("balance"))
    let cartItems=[]
    if(localStorage.getItem("cartItems")){
        cartItems=JSON.parse(localStorage.getItem("cartItems"))
    }
    const isExist=cartItems.find(el=>(el.product_id===item.product.product_id))
    if(isExist){
        // alert("Already exist")
        return false
    }
    else{
    cartItems.push(item.product)
    balance=balance+parseInt(item.product.price)
    localStorage.setItem("balance",JSON.stringify(balance))
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    return true
    }
}


const getCartAmount=()=>{
    const balance=JSON.parse(localStorage.getItem("balance"))
    return balance
}


const getCartProducts=()=>{
    const products=localStorage.getItem("cartItems")
    if(products){
        // console.log(JSON.parse(products))
        return JSON.parse(products)
    }
    else{
        return []
    }
}


const saveWish=(item)=>{
    console.log(typeof(item),item.product.product_id,item.product.price)
    let cartItems=[]
    if(localStorage.getItem("wishItems")){
        cartItems=JSON.parse(localStorage.getItem("wishItems"))
    }
    const isExist=cartItems.find(el=>(el.product_id===item.product.product_id))
    if(isExist){
        // alert("Already exist")
        return false
    }
    else{
    cartItems.push(item.product)
    localStorage.setItem("wishItems",JSON.stringify(cartItems))
    return true
    }
}


const getOrders=()=>{
    let items=JSON.parse(localStorage.getItem("orderItems"));
    let orders=[]
        if(items){
            items.forEach(el=>
            {
                el.forEach(pro=>{
                    orders=[...orders,pro]
                })
            }
            )
            return orders
        }
        else{
            return []
        }
}

export {saveCart,getCartAmount,getCartProducts,saveWish,getOrders}