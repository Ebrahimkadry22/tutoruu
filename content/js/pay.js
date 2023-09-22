function load () {
    const preload = document.querySelector('.load')
    window.addEventListener('load',()=> {
    preload.style.display='none'
})
}
load()
const  ApiKey = `ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T0RrMU9UQTBMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuWDhYNUFEQTdLYm9HYW9wcWVsQzR5eVM5djJhYVlqTXMxdWJEWGdYQWFqdlVKMFpzY090dWxVYmc2OHBFdVhDMFJpTTZvMmUyWXczcmJwd0luajcwRkE=`

async function oneStep () {
    let data = {
        "api_key": ApiKey
    }
    let request = await fetch('https://accept.paymob.com/api/auth/tokens',{
        method: 'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    let response = await request.json()
    let token = response.token
    // console.log(token);
    twostep(token)
}

async function twostep (token) {
    let data = {
        "auth_token":  token,
        "delivery_needed": "false",
        "amount_cents": "100",
        "currency": "EGP",
        "items": [
          ],
       
      }
    let request = await fetch('https://accept.paymob.com/api/ecommerce/orders',{
        method: 'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    let response = await request.json()
    // console.log(response.id);
    let id = response.id
    threestep(token,id)


}



async function threestep (token , id) {
    let data = {
        "auth_token": token,
        "amount_cents": "100", 
        "expiration": 3600, 
        "order_id": id,
        "billing_data": {
          "apartment": "803", 
          "email": "claudette09@exa.com", 
          "floor": "42", 
          "first_name": "Clifford", 
          "street": "Ethan Land", 
          "building": "8028", 
          "phone_number": "+86(8)9135210487", 
          "shipping_method": "PKG", 
          "postal_code": "01898", 
          "city": "Jaskolskiburgh", 
          "country": "CR", 
          "last_name": "Nicolas", 
          "state": "Utah"
        }, 
        "currency": "EGP", 
        "integration_id": 4186217
        
      }

    let request = await fetch('https://accept.paymob.com/api/acceptance/payment_keys' , {
        method: 'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    let response = await request.json()
    let tokenn = response.token
    // console.log(tokenn);

    cardpayment(tokenn)

}

async function cardpayment (token) {
    let iframUrl = `https://accept.paymob.com/api/acceptance/iframes/786434?payment_token=${token}`
location.href = iframUrl
}




oneStep()