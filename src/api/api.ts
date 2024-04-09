import {API_KEY} from '../config'

export const API = {
  removeBG: async (b64: string) => {
    const formData = new FormData()
    formData.append('image_file_b64', b64)
    formData.append('size', 'full')
    formData.append('position', 'original')
    formData.append('semitransparency', 'false')
    formData.append('add_shadow', 'false')
    formData.append('scale', 'original')
    formData.append('roi', '0% 0% 100% 100%')
    formData.append('crop', 'false')
    formData.append('channels', 'rgba')
    formData.append('format', 'auto')
    formData.append('type', 'auto')
    formData.append('crop_margin', '0px')

    return await fetch('http://192.168.2.12:5002/api/removebg', {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
      },
      body: formData
    })
      .then(response => response.blob())
      .then(blob => {
        return URL.createObjectURL(blob)
      })
  }
}
