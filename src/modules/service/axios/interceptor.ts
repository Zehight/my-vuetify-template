import singleSignOn from '@/modules/sso'

import { ResponseCode } from '@/@types/http.d'

const { Success, TokenExpired } = ResponseCode

export function requestSuccessFunc(requestObj: any) {
  return Promise.resolve(requestObj)
}

export function requestFailFunc(requestError: any) {
  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj: any) {
  const { data } = responseObj

  switch (data.code) {
  case Success:
    // 业务成功
    return data
  case TokenExpired:
    // 登录过期
    singleSignOn()
    break
  default:
    return data
  }

  return data
}

export function responseFailFunc(responseError: any) {
  return Promise.reject(responseError)
}
