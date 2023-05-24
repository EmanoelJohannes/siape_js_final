import toast from 'react-hot-toast'

export function useSnack() {
  const showErrorMessage = (title) => {
    toast.error(title, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }
  const showSuccessMessage = (title) => {
    toast.success(title, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }

  return {
    showErrorMessage,
    showSuccessMessage
  }
}
