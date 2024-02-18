const getGroupPrice = (bookCount: number) => {
  const discountFactors: { [key: number]: number } = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  }
  return bookCount * 8 * discountFactors[bookCount]
}

export const calculatePrice = (books: string[]) => {
  const groups = books.reduce((groupedBooks: string[][], book: string) => {
    const smallestSuitableGroup = groupedBooks
      .filter((group) => !group.includes(book))
      .sort((a, b) => a.length - b.length)[0]

    if (smallestSuitableGroup) {
      smallestSuitableGroup.push(book)
    } else {
      groupedBooks.push([book])
    }

    return groupedBooks
  }, [])

  return groups.reduce((total, group) => total + getGroupPrice(group.length), 0)
}
