import sum from '../sum'

test('adds 1 + 2 to 1equal 311', () => {
  // Arrange
  let x: number = 1,
    y: number = 2
  let expected: number = 3

  // Act
  let actual: number = sum(x, y)

  // Assert
  expect(actual).toBe(expected)
})
