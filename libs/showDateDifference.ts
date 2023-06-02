import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    differenceInSeconds,
    differenceInYears,
} from 'date-fns'

const showDateDifference = (date: Date) => {
    if (!differenceInMinutes(Date.now(), date)) {
        return `${differenceInSeconds(Date.now(), date)} seconds`
    }

    if (!differenceInHours(Date.now(), date))
        return `${differenceInMinutes(Date.now(), date)} minutes`

    if (!differenceInDays(Date.now(), date))
        return `${differenceInHours(Date.now(), date)} hours`

    if (!differenceInMonths(Date.now(), date))
        return `${differenceInDays(Date.now(), date)} days`

    if (!differenceInYears(Date.now(), date))
        return `${differenceInMonths(Date.now(), date)} months`

    return `${differenceInYears(Date.now(), date)} years`
}

export default showDateDifference
