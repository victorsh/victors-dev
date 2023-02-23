export const url_select = () => {
  let url = ''
  console.log(process.env.NEXT_PUBLIC_ENV)
  if (process.env.NEXT_PUBLIC_ENV === 'local') {
    url = "http://127.0.0.1:3000"
  } else if (process.env.NEXT_PUBLIC_ENV === 'development') {
    url = "https://dev.victorsdev.com"
  } else if (process.env.NEXT_PUBLIC_ENV === 'production') {
    url = "https://victorsdev.com"
  }

  return "http://127.0.0.1:3000"
}
