
game = {
  Xhod: true,
  Xh: [],
  Oh: [],
  win: [
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
  ]
}

document.addEventListener('click', event => {
  const cel = event.target
  const iCell = cel.classList.contains('grid')
  const Disabled = cel.classList.contains('disabled')

  if (iCell && !Disabled) {
      const cellValue = cel.dataset.value

      game.xhod === true
          ? game.Xh.push(cellValue)
          : game.Oh.push(cellValue)

      cel.classList.add('disabled')
      cel.classList.add(game.xhod ? 'x' : 'o')

      game.xhod = !game.xhod

      game.win.forEach(win => {
          const xWins = win.every(state => game.Xh.includes(state))
          const oWins = win.every(state => game.Oh.includes(state))

          if (xWins) {
              document.querySelectorAll('.grid').forEach(cell => cell.classList.add('disabled'))
              alert('Х Победили!')
          }
          if (oWins) {
              document.querySelectorAll('.grid').forEach(cell => cell.classList.add('disabled'))
              alert('О Победили!')
          }
      })
  }
})

document.querySelector('.restart').addEventListener('click', () => {
  document.querySelectorAll('.grid').forEach(cell => {
      cell.classList.remove('disabled', 'x', 'o')
  })

  game.xhod = true
  game.Xh = []
  game.Oh = []
})