import NotificationHelper from './notification-helper'
import CONFIG from '../globals/config'

const WebsocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data)
    NotificationHelper.sendNotification({
      title: `${movie.title} sedang tayang`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    })
  },
}

export default WebsocketInitiator
