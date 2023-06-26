export default function singleSignOn() {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('redirectUrl')
  const authServer = import.meta.env.VITE_APP_AUTHSERVER
  const redirectUrl = window.location.href.split('?')[0]
  sessionStorage.setItem('redirectUrl', redirectUrl)
  window.location.href = `${authServer}/oauth/authorize?client_id=SampleClientId&client_secret=secret&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUrl,
  )}`
}
