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

export function setLocalNotification () {

  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {

      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(async ({ status }) => {

            if (status === 'granted') {
              
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleNotificationAsync({
                content: {
                  title: "Let's take a quiz !",
                  body: "👋 You didn't take any quiz today",
                  data: { data: "goes here" },
                },
                trigger: { seconds: (tomorrow.getTime() - Date.now())/1000 },
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }else{
              
            }
          })
          
      }
    })

}