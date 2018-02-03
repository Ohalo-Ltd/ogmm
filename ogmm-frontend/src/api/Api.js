

class Api {

  getForSale() {
    return [
      {
        name: '22x Fund',
        category: 'Security Token', // not sure what we meant by category
        dateAdded: '2018-01-28T15:40:16Z',
        quantity: 3.5,
        price: 1000000,
        currency: 'GBP',
        owner: 'Ellen Ripley',
        pointer: '/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/cat.jpg',
        address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
        description: 'Looking to sell all my 22x Fund tokens. Contact me if you have any questions',
      },
      {
        name: 'Bloom',
        category: 'Utility Token',
        dateAdded: '2018-01-28T15:40:16Z',
        quantity: 12000,
        price: 1800,
        currency: 'EUR',
        owner: 'John Rambo',
        pointer: null,
        address: null,
        description: 'Selling blooms y\'all'
      },
      {
        name: 'Quantstamp',
        category: 'Utility Token',
        dateAdded: '2018-01-28T15:40:16Z',
        quantity: 92,
        price: 32000,
        currency: 'USD',
        owner: 'Beatrix Kiddo',
        pointer: '/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/cat.jpg',
        address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
        description: '',
      }
    ];
  }
}

export default new Api();
