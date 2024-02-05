const list = [
    {
      name: 'McDonalds',
      orderTime:'04/02/2024',
      logo: 'https://p.sda1.dev/15/ca9c663280e33ec4295c1d150c3b06ea/mcdonalds-logo@logotyp.us.png'
    },
    {
        name: 'Starbucks',
        orderTime:'01/02/2024',
        logo: 'https://p.sda1.dev/15/c010533ee581f01b2d285ec46b72906e/starbucks-logo@logotyp.us.png'
    },
    {
        name: 'KFC',
        orderTime:'30/01/2024',
        logo: 'https://p.sda1.dev/15/a7b152b0b3baab39ce47f675cefd82f8/kfc-logo@logotyp.us.png'
    },
    {
        name: 'Costa',
        orderTime:'04/01/2024',
        logo: 'https://p.sda1.dev/15/582e6732d623e33813328f5a1adcf3bc/costa-coffee-logo@logotyp.us.png'
    },
  ];
  export default [
    {
      url: '/api/history',
      type: 'get',
      response() {
        return {
          code: 200,
          msg: 'success',
          data: {
            list
          }
        };
      }
    }
  ];
  
  
