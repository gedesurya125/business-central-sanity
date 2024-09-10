import {sanityClient} from '../utils/sanityClient'

const createSanityProducts = (bcProductData: any) => {
  try {
    const doc = {
      _type: 'bcProduct',
      name: 'Product Title',
    }

    const result = sanityClient.create(doc)
    console.log('This is the client result', result)
  } catch (error) {
    console.log('Creating BC Products error')
  }
}

//TODO Continue with fetching external data and create the record dynamically
