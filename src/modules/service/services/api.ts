import axios from '@/modules/service/axios'

export const uploadFile = (file: any) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/file/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}