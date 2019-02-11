import React, { useContext, useReducer, useEffect } from 'react'
import * as GitHub from '../../../github-client'

function Query({ query, variables, children, normalize = data => data}) {
  const client = useContext(GitHub.Context)
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState}),
    {loaded: false, fetching: false, data: null, error: null}
  )
  useEffect(() => {
    client
    .request(query, variables)
    .then(res => 
    this.setState({
      data: normalize(res),
      error: null,
      loading: true,
      fetching: false,
    })
  })
  .catch(error =>
    this.setState({
      data: null,
      error,
      loading: false,
      fetching: false,
    }, [query, variables]))
    return children(state)
}
// loaded, fetching, data, error