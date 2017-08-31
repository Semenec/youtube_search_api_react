export const getUrl = ( url, key, method, part, valueSearch, result ) => {
  return `${url}${key}?key=${method}&part=${part}&q=${valueSearch}&maxResults=${result}`
}
