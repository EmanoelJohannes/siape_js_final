export const welcome = () => {

  const today = new Date()
  const hour = today.getHours()

  let message = ''

  if (hour < 12) {
    message = 'Morning'
  } else if (hour < 18) {
    message = 'Afternoon'
  } else {
    message = 'Evening'
  }

  return message
}
