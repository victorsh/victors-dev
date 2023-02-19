export const url_select = () => {
  let url = ''
  if (process.env.NODE_ENV === 'development') {
    url = process.env.NEXT_PUBLIC_LOCAL_URL
  } else if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_PROD_URL
  }

  return url
}
