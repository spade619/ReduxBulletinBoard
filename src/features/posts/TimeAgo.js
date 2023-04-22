import {parseISO, formatDistanceToNow} from 'date-fns'

import React, { useState, useEffect } from 'react'

const TimeAgo = ({timestamp}) => {
    console.log('tasdafgasdqw',timestamp)
     let timeAgo = ''
    // const [timeAgo, setTimeAgo] = useState()
    if(timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
         timeAgo = `${timePeriod} ago`
        console.log('date',timeAgo)
    }
//    useEffect(() => {
     
//     const date = parseISO(timestamp)
       
//         const timePeriod = formatDistanceToNow(date)
//         // timeAgo = `${timePeriod} ago`
//         setTimeAgo(timePeriod)
//         console.log('date',timePeriod)
//    }, [timeAgo, timestamp])
   
  return (
    <div>
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
      
    </span>
    </div>
  )
}

export default TimeAgo