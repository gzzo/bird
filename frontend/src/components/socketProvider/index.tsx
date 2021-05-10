import React, {
  createContext,
  ReactElement,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react'
import { Socket, Channel } from 'phoenix'
import { noop } from 'lodash'

import log from 'util/log'

const SocketContext = createContext(null)

type UseChannel = {
  channel: Channel
}

export function useChannel(
  channelName: string,
  callback: (channel: Channel) => void
): UseChannel {
  const socket = useContext(SocketContext)
  const [channel, setChannel] = useState<Channel>()

  useEffect(() => {
    if (!socket) {
      return noop
    }

    const newChannel = socket.channel(channelName, {})

    callback(newChannel)

    newChannel
      .join()
      .receive('ok', (resp: any) => {
        log(`[channel: ${channelName}] - Joined ok`, resp)
      })
      .receive('error', (resp: any) => {
        log(`[channel: ${channelName}] - Joined error`, resp)
      })

    setChannel(newChannel)

    return () => {
      log(`[channel: ${channelName}] - Leaving`)
      newChannel.leave()
    }
  }, [callback, channelName, setChannel, socket])

  return {
    channel,
  }
}

export function SocketProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const newSocket = new Socket('/socket')
    newSocket.connect()
    setSocket(newSocket)
  }, [setSocket])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
