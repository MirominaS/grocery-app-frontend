const BASE_URL = 'http://localhost:3000/grocery'

export const placeOrder = async (orderData) => {
    try {
       const response = await fetch(`${BASE_URL}/orders`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(orderData)
       })
       return await response.json()
    } catch (error) {
        console.log("Error Placing order:",error)
    }
}