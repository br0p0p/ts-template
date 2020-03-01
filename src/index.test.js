import { add } from '.'

describe('add', () => {
  it('adds', () => {
    expect(add(1, 2, 3, 4, 5)).toEqual(15)
  })
})
