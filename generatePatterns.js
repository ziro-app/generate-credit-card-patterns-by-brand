const brands = require('./brandsRawPatterns')
const createFile = require('./createFile')

const expandPatterns = range => {
    if (range instanceof Array) {
      let [start, end] = range
      if (start && end && start < end) {
        let pattern = []
        for (let i = start; i <= end; i++)
          pattern.push(i)
        return pattern
      }
      return []
    }
    return range
}

const generatePatterns = () => {
  if (brands instanceof Array)
    return brands.map(([brand, pattern]) => [brand, pattern.map(range => expandPatterns(range)).flat()])
  return brands
}

createFile(generatePatterns())