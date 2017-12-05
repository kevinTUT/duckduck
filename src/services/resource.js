import axios from 'axios'
const API_ROOT = 'http://localhost:9999'

export default function resource(child) {
  return new Promise((resolve, reject) => {
    axios.get(API_ROOT + child).then(response => resolve(response.data), reject)
  })
}
