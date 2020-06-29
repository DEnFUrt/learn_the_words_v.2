export default class SendNotification {
  constructor() {
    this.notification = null;
  }

  _regPermission() {
    return (
      Notification.requestPermission(
        (permission) => permission.toLowerCase() === 'granted' ? true : false
      )
    );    
  }

  canIsUse() {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
      return false;
    }
    //Проверяем, есть ли запрет на отправку уведослений 
    if (Notification.permission.toLowerCase() === 'denied') {
      return false;
    }

    // Проверим, есть ли права на отправку уведомлений
    if (Notification.permission.toLowerCase() === "granted") {
      return true;      
    }    

    // Если прав нет, пытаемся их получить
    if (Notification.permission.toLowerCase() !== 'denied') {
      return this._regPermission();
    }
  }

  send(title, options) {
    try {
      this.notification = new Notification(title, options);
    } catch (e) {
      console.error(e.messge);
    }
  }

  /* send(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
      alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }

    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
      // Если права есть, отправим уведомление
      this.notification = new Notification(title, options);
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // Если права успешно получены, отправляем уведомление
        if (permission === "granted") {
          this.notification = new Notification(title, options);

        } else {
          alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
        }
      });
    } else {
      // Пользователь ранее отклонил наш запрос на показ уведомлений
      // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
      alert(title);
    }
  } */
}