import { Network } from 'relay-runtime'
import { API_ENDPOINT } from './constants'

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  const csrf_token = document.querySelector('meta[name=csrf-token]').getAttribute('content')
  return fetch(API_ENDPOINT, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'X-CSRF-Token': csrf_token,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
}

const network = Network.create(fetchQuery)

export default network
