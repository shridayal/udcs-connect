import api from './axios'

export const getStudentProfile = async () => {
  const response = await api.get('/students/profile/')
  return response.data
}