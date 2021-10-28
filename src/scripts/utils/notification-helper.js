const NotificationHelper = {
  sendNotification({ title, options }) {
    // cek ketersediaan fitur notifikasi
    if (!this._checkAvailability()) {
      console.log('Notifikasi tidak support')
      // eslint-disable-next-line no-useless-return
      return
    }

    // cek izin notofikasi dari browser / user
    if (!this._checkPermission()) {
      console.log('user belum mengizinkan notifikasi')
      this._requestPermission()
      // eslint-disable-next-line no-useless-return
      return
    }

    // tampilkan notofikasi
    this._showNotification({ title, options })
  },
  _checkAvailability() {
    return !!('Notification' in window)
  },
  _checkPermission() {
    return Notification.permission === 'granted'
  },
  async _requestPermission() {
    const status = await Notification.requestPermission()
    if (status === 'denied') {
      console.log('Notification Denied')
    }

    if (status === 'default') {
      console.log('permission closed')
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready
    serviceWorkerRegistration.showNotification(title, options)
  },
}

export default NotificationHelper
