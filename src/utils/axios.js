import axios from 'axios'

export default axios.create({
  baseURL: 'https://us-central1-social-ape-43919.cloudfunctions.net/api'
})