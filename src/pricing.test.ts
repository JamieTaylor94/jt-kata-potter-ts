import { calculatePrice } from './pricing'

describe('book price calculator', () => {
  it('no books is zero get out of my shop', () => {
    expect(calculatePrice([])).toBe(0)
  })

  it('one books cost eight euros', () => {
    expect(calculatePrice(['Book1'])).toBe(8)
  })

  it('two of the same books cost sixteen euros', () => {
    expect(calculatePrice(['Book1', 'Book1'])).toBe(16)
  })

  it('two different books have a 5% discount', () => {
    expect(calculatePrice(['Book1', 'Book2'])).toBe(15.2)
  })

  it('three different books have a 10% discount', () => {
    expect(calculatePrice(['Book1', 'Book2', 'Book3'])).toBe(21.6)
  })

  it('four different books have a 20% discount', () => {
    expect(calculatePrice(['Book1', 'Book2', 'Book3', 'Book4'])).toBe(25.6)
  })

  it('five different books have a 25% discount', () => {
    expect(calculatePrice(['Book1', 'Book2', 'Book3', 'Book4', 'Book5'])).toBe(
      30
    )
  })

  it('two different books have 5% discount and one is full price', () => {
    expect(calculatePrice(['Book1', 'Book2', 'Book1'])).toBe(23.2)
  })

  it('answer to the ultimate question of life, the universe, and everything', () => {
    expect(
      calculatePrice([
        'Book1',
        'Book1',
        'Book2',
        'Book2',
        'Book3',
        'Book3',
        'Book4',
        'Book5',
      ])
    ).toBe(51.2)
  })
})
