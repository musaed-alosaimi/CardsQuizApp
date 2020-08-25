import { AsyncStorage } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'


export function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

const NOTIFICATION_KEY = 'FlashCardApp:notifications'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Log your stats!',
    body: "👋 You didn't take any quiz today !",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {

  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log(data)
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log(status)
            if (status === 'granted') {
              
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(18)
              tomorrow.setMinutes(19)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }else{
              throw new Error('Notification permission not granted');
            }
          })
          
      }
    })

}