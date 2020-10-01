import { getApi } from './utilities/axios'

// Preference would have been to use redux saga to make this call
export const getProducts = async () => {
  const url = 'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/24906c5560f4747b8363c138e33efd1a99093ba5/product.json'
  try {
    const { code = 200, data={} } = await getApi(url)
    return { data, code}
  } catch ({ response }) {
    console.info(response)
    return response.data
  }
}
