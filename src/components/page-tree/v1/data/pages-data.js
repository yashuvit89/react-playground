const backendData = [
  {
    id: '1',
    name: 'Page 1',
  },
  {
    id: '2',
    name: 'Page 2',
    children: [
      {
        id: '8',
        name: 'Page - 2 - 1',
      },
      {
        id: '9',
        name: 'Page - 2 - 2',
      },
    ],
  },
  {
    id: '3',
    name: 'Page 3',
    children: [
      {
        id: '6',
        name: 'Page 3 - 1',
        children: [
          {
            id: '10',
            name: 'Page 3 - 1 - 1',
          },
          {
            id: '11',
            name: 'Page 3 - 1 - 2',
          },
          {
            id: '12',
            name: 'Page 3 - 1 - 3',
          },
        ],
      },
      {
        id: '7',
        name: 'Page 3 - 2',
        children: [
          {
            id: '13',
            name: 'Page 3 - 2 - 1',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Page 4',
  },
  {
    id: '5',
    name: 'Page 5',
  },
]

export default function fetchData() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000, backendData)
  })
}
