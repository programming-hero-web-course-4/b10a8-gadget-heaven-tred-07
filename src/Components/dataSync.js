const saveCart=(item)=>{
    console.log(typeof(item),item.product.product_id,item.product.price)
    let balance=JSON.parse(localStorage.getItem("balance"))
    let cartItems=[]
    if(localStorage.getItem("cartItems")){
        cartItems=JSON.parse(localStorage.getItem("cartItems"))
    }
    const isExist=cartItems.find(el=>(el.product_id===item.product.product_id))
    if(isExist){
        alert("Already exist")
    }
    else{
    cartItems.push(item.product)
    balance=balance+parseInt(item.product.price)
    localStorage.setItem("balance",JSON.stringify(balance))
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }
    console.log(cartItems,balance)
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


const removeProduct=(item)=>{
    
    const cartItems=JSON.parse(localStorage.getItem("cartItems"))
    const newItems=cartItems.filter(el=>(el.product_id!=item.product.product_id))
    localStorage.setItem("cartItems",JSON.stringify(newItems))
    console.log("removeProduct func",item,cartItems,newItems)
}

export {saveCart,getCartAmount,getCartProducts}