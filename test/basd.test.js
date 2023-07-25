const basd = require('../lib/basd')

describe('Basd', () => {

  describe('#hash()', () => {
    it('should hash a string', () => {
      const data = 'test'
      const result = basd.hash(data)
      expect(result).to.be.a('string')
    })

    it('should throw an error if data is null', () => {
      const data = null
      expect(() => basd.hash(data)).to.throw()
    })

    it('should hash an object', () => {
      const data = { test: 'value' }
      const result = basd.hash(data)
      expect(result).to.be.a('string')
    })
  })

  describe('#uuid()', () => {
    it('should generate a uuid', () => {
      const result = basd.uuid()
      expect(result).to.be.a('string')
    })

    it('should generate a uuid with a prefix', () => {
      const prefix = 'test'
      const result = basd.uuid(12, prefix)
      expect(result).to.be.a('string')
      expect(result.startsWith(prefix)).to.be.true
    })
  })

})
