const backendData = [
  {
    id: '1',
    name: 'Alpha',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis veritatis eos, a magnam, quisquam ipsa impedit, ducimus maiores dolorum repellat eius deserunt nulla inventore delectus error. Optio odit atque, nam harum, quos dolores aliquam incidunt ullam porro expedita ut?',
  },
  {
    id: '2',
    name: 'Beta',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quis veniam ipsa inventore eius minus beatae adipisci sit ipsam aspernatur.',
  },
  {
    id: '3',
    name: 'Page 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique?',
  },
]

export default function fetchData() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000, backendData)
  })
}
