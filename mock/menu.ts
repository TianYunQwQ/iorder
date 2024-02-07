const menu = [
    { src: 'https://p.sda1.dev/15/c17f728d68f4a3fe687d615d8dd0d03e/image2.jpg',
      name: 'Cookie Sandwich', 
      ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', 
      price: 100, 
      count: 0 
    },
    { src: 'https://p.sda1.dev/15/b7e3450a77f12ce98d31273704762d5b/image1.jpg', 
      name: 'Combo Burger', 
      ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', 
      price: 100, 
      count: 0 
    },
    { src: 'https://p.sda1.dev/15/f3521d7dcabaa62dc19756a5b6237336/image3.jpg', 
      name: 'Combo Sandwich', 
      ingredients: 'Shortbread, chocolate turtle cookies, and red velvet.', 
      price: 100, 
      count: 0 
    }
  ]
  export default () => { return[
    {
      url: '/api/menu',
      type: 'get',
      response() {
        return {
          code: 200,
          msg: 'success',
          data: {
            menu
          }
        };
      }
    }
  ];}

