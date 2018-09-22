import moment from 'moment'

/* let currentTime = moment.duration(20, 'minutes')

console.log('currentTime 1', currentTime)

currentTime = moment.duration({ minutes: 15, seconds: 20 })

console.log('currentTime 2', currentTime)

currentTime = moment.duration('11:35')

console.log('currentTime 3', currentTime)

const milliseconds = currentTime.asMilliseconds()

console.log('milliseconds', milliseconds)

let seconds = currentTime.asSeconds()

console.log('seconds 1', seconds)

currentTime = currentTime.subtract(1, 'second')

console.log('currentTime 4', currentTime)

seconds = currentTime.asSeconds()

console.log('seconds 2', seconds)

let formatTime = currentTime.toString()

console.log('formatTime', formatTime)

currentTime = moment().set({
    'minute': 3,
    'second': 40
})

let getTime = currentTime.get()

console.log('getTime', getTime)
 */

let currentTime = moment.duration({ minutes: 5, seconds: 20 })

console.log('currentTime 1', currentTime)

currentTime = currentTime.subtract(1, 'second')

console.log('currentTime 2', currentTime)

console.log(currentTime.get('minute'), ':', currentTime.get('second'))

