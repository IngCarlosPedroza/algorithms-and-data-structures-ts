import mapForLoop from './map-for-loop'
import mapNative from './map-native'

const testSubjects = [
  mapForLoop,
  mapNative
]

testSubjects.forEach(({ fun, id }) => {
  describe(`Map algorithm "${id}"`, () => {
    it('maps values according to the mapper function.', () => {
      expect(fun((n: number) => n + 1, [0, 1, 2]))
        .toEqual([1, 2, 3])

      expect(fun((b: boolean) => !b, [true, false, true]))
        .toEqual([false, true, false])
    })
  })
})
