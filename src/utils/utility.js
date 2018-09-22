import moment from 'moment'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const getUpdatedDisplayTimeString = (currentDisplayTime) => {
  const currentTime = moment.duration(`00:${currentDisplayTime}`)
  const updatedTime = currentTime.subtract(1, 'second')
  const minute = updatedTime.get('minute')
  const second = updatedTime.get('second')
  const updatedMinute = minute < 10 ? `0${minute}` : minute
  const updatedSecond = second < 10 ? `0${second}` : second
  const updatedDisplayTimeString = `${updatedMinute}:${updatedSecond}`

  return updatedDisplayTimeString
}

export const checkValidTime = (currentDisplayTime) => {
  const currentTime = moment.duration(`00:${currentDisplayTime}`)

  if (currentTime.get('minute') === 0 & currentTime.get('second') === 0) {
    return false
  } else {
    return true
  }
}
