import { createRef, FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const src = 'https://utteranc.es/client.js'
const repo = 'EndlessMilkyway/endlessmilkyway.github.io'

type UtteranceAttributeTypes = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current == null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtteranceAttributeTypes = {
      src,
      repo,
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <UtterancesWrapper ref={element} />
}

export default CommentWidget
