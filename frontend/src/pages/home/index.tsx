import React, { ReactElement, useRef, useState, useCallback } from 'react'

import Page from 'components/page'
import { useChannel } from 'components/socketProvider'

export default function Home(): ReactElement {
  const [messages, setMessages] = useState([])

  const { channel } = useChannel(
    'room:lobby',
    useCallback(
      (ch) => {
        ch.on('new_msg', (payload) => {
          setMessages((prev) => [...prev, payload])
        })
      },
      [setMessages]
    )
  )
  const inputRef = useRef<HTMLInputElement>()

  return (
    <Page>
      Home test 1
      <input ref={inputRef} />
      <button
        onClick={() => {
          channel.push('new_msg', { body: inputRef.current.value ?? '' })
          inputRef.current.value = ''
        }}
        type="button"
      >
        send
      </button>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.body}</div>
        ))}
      </div>
    </Page>
  )
}
