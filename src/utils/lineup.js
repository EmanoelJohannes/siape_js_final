export const remainingBudget = lineup => {
  const actualBudget = lineup.players.reduce(
    (total, { price }) => total + parseFloat(price),
    0
  )

  const maxBudget = parseFloat(lineup.contest.salary)
  return (maxBudget - actualBudget)
}

export const calculateLength = lineup => lineup.players.length === 5

export const calculateBudget = lineup => {
  const actualBudget = lineup.players.reduce(
    (total, { price }) => total + parseFloat(price),
    0
  )

  const maxBudget = parseFloat(lineup.contest.salary)
  return maxBudget >= actualBudget
}

export const verifyPlayersTeams = lineup => {
  const teams = lineup.players.reduce((r, a) => {
    r[a.team.name] = r[a.team.name] || []
    r[a.team.name].push(a)
    return r
  }, Object.create(null))

  const result = Object.values(teams).some(team => team.length > 3)

  return !result
}

export const verifyPlayersRoles = lineup => {
  let isSingle = true
  lineup.players
    .filter(player => !!player.role)
    .map(({ role }) => role)
    .sort()
    .sort((a, b) => {
      if (a.name === b.name) isSingle = false
    })

  return isSingle
}

export const validate = lineup => {
  const length = calculateLength(lineup)
  const budget = calculateBudget(lineup)
  const roles = verifyPlayersRoles(lineup)
  const teams = verifyPlayersTeams(lineup)

  return length && budget && roles && teams
}

export const showValidate = lineup => {
  const length = calculateLength(lineup)
  const budget = calculateBudget(lineup)
  const roles = verifyPlayersRoles(lineup)
  const teams = verifyPlayersTeams(lineup)

  return {
    length,
    budget,
    roles,
    teams
  }
}

export const order = (game, lineup) => {
  switch (game) {
    case 'lol':
      const lolOrders = ['Top', 'Jungler', 'Mid', 'ADC', 'Support']
      const lolOrder = lineup.slice().sort((a, b) => {
        const playerA = a.role.name
        const playerB = b.role.name

        return lolOrders.indexOf(playerA) - lolOrders.indexOf(playerB)
      })

      return lolOrder
    default:
      return lineup
  }
}
