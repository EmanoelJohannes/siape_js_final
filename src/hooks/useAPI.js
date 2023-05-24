import React, { useState } from "react";
import useSWR from 'swr'

import { api } from '@/services/api'

export function useAPI({ url }) {
  const [loading, setLoading] = useState(false)

  const { data, error, mutate, isValidating } = useSWR(url, async url => {
    try {
      setLoading(true)
      const response = await api.get(url)
      return response.data
    } catch (error) {
      return {
        data: null,
        error: 'Ocorreu um erro'
      }
    } finally {
      setLoading(false)
    }
  })

  return { loading, data, error, mutate, isValidating }
}
