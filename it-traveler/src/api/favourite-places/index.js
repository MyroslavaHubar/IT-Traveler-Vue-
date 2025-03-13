import { clientFetch } from '../clientFetch'

const BASE_PLACE_URL = '/points'

export const getFavouritePlaces = () => {
  return clientFetch.get(BASE_PLACE_URL)
}

export const addFavouritePlaces = (body) => {
  return clientFetch.post(BASE_PLACE_URL, body)
}

export const updateFavouritePlaces = (body) => {
  return clientFetch.put(BASE_PLACE_URL, body)
}

export const deleteFavouritePlaces = (body) => {
  return clientFetch.delete(BASE_PLACE_URL, body)
}
