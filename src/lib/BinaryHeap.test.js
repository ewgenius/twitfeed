import BinaryHeap from './BinaryHeap'

it('creates new biary heap', () => {
  const heap = new BinaryHeap(x => x);

  [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].map(i => heap.push(i))

  heap.remove(2)
  while (heap.size() > 0)
    print(heap.pop())
})