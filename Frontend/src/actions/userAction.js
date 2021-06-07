import axios from 'axios'

const sendResumeAction = (a) => {
  let formData = new FormData();
  formData.append('filePath', a)

  return new Promise((resolve, reject) => {
    console.log('Date', formData)
    axios.post(`http://127.0.0.1:8000/scoreFile`, formData).then(res => {
      resolve(res)
    }).catch(err => {
      console.log('Failed', err)
    })
  })
}

export {
  sendResumeAction
}




// let formDta = new FormData();
// formDta.append('tracking', userObj )

// post ('/settings/location-settings/', formDta, config).then(response => {
//   resolve(response)
// }).catch(err => {
//   reject(err)
// })