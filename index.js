const notie = require('notie')

/**
 * In app notifications
 */
var notier
var texts = {
  submit: 'Yes',
  cancel: 'Cancel'
}

/**
 * General notifier.
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts    Notie options
 * @return {Promise}
 */
module.exports = notier = (message, opts) => {
  return new Promise((resolve, reject) => {
    notie.alert(Object.assign({
      text: message,
      position: 'bottom'
    }), (data) => {
      resolve(data)
    }, (err) => {
      reject(err)
    })
  })
}

/**
 * Info type notification
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts    Notie options
 * @return {Promise}
 */
notier.info = (message, opts) => notier(message, Object.assign({}, {type: 'info'}, opts))

/**
 * Success type notification
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts    Notie options
 * @return {Promise}
 */
notier.success = (message, opts) => notier(message, Object.assign({}, {type: 'success'}, opts))

/**
 * Warning type notification
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts    Notie options
 * @return {Promise}
 */
notier.warning = (message, opts) => notier(message, Object.assign({}, {type: 'warning'}, opts))

/**
 * Error type notification
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts    Notie options
 * @return {Promise}
 */
notier.error = (message, opts) => notier(message, Object.assign({}, {type: 'error'}, opts))

/**
 * Confirm notification. Ask a question to confirm action.
 * @param  {String} message Message to be displayed
 * @param  {Object=} opts   Notie options
 * @return {Promise}        Resolved if user accepts; rejected otherwise.
 */
notier.confirm = (message, opts) => new Promise((resolve, reject) => {
  notie.confirm(Object.assign({
    text: message,
    submitText: texts.submit,
    cancelText: texts.cancel,
    submitCallback: (data) => {
      resolve(data)
    },
    cancelCallback: () => {
      reject()
    }
  }, opts))
})

/**
 * Sets global texts to be used in options.
 * @param  {String} options.submitText Submit text (confirm)
 * @param  {String} options.cancelText Cancel text (confirm)
 */
notier.setTexts({ submit, cancel }) => {
  texts.submit = submit
  texts.cancel = cancel
}
