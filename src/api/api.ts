import {CORP_URL, STORAGE_TOKEN} from '../config'

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

    const token = window.localStorage.getItem(STORAGE_TOKEN) as string

    return await fetch(`${CORP_URL}/api/removebg`, {
      method: 'POST',
      headers: {
        'x-api-key': token
      },
      body: formData
    })
      .then(response => response.blob())
      .then(blob => {
        return URL.createObjectURL(blob)
      })
  }
}
