const Project=require('../models/project')
const Ticket=require('../models/ticket')
const User=require('../models/user')
const moment=require('moment')

module.exports.renderNewResolvedTicketsTimeline =async (req,res)=>{
    //Todays Date
    const now = new Date();
    //Date 15 days ago
    const date15DaysAgo=new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))

    
    //Getting DATA for New tickets added 15 days ago
    const newTickets=await Ticket.find({
        status:'New',
        createdAt:{
            $gte: date15DaysAgo
        }
    }
)
    const newTicketTimelineData={
        totalTickets:newTickets.length,
        timeline:[]
    }

    //loop over dates in Tickets collection
    for (let d = date15DaysAgo; d <= now; d.setDate(d.getDate() + 1)) {
        let date14DaysAgo=new Date((date15DaysAgo).getTime() - (1 * 24 * 60 * 60 * 1000))
            const tickets=await Ticket.find({status:'New'})
                                .where('createdAt')
                                .gt(date14DaysAgo)
                                .lt(date15DaysAgo)
                                .exec()
            
            const selectedDateData={
                                date:d,
                                formattedDate:moment(d).format('MMM D'),
                                ticketCount: tickets.length,
                                }
            newTicketTimelineData.timeline.push(selectedDateData)
    }
    
    //Getting DATA for RESOLVED tickets added 15 days ago for this function
    let date15DaysAgoR=new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))
    
    const resolvedTickets=await Ticket.find({
        status:'Resolved',
        createdAt:{
            $gte: date15DaysAgoR
        }
    }
)
    const resolvedTicketTimelineData={
        totalTickets:resolvedTickets.length,
        timeline:[]
    }

    //loop over dates in Tickets collection

    for (let d = date15DaysAgoR; d <= now; d.setDate(d.getDate() + 1)) {
        let date14DaysAgoR=new Date((date15DaysAgoR).getTime() - (1 * 24 * 60 * 60 * 1000))
            const tickets=await Ticket.find({status:'Resolved'})
                                .where('createdAt')
                                .gt(date14DaysAgoR)
                                .lt(date15DaysAgoR)
                                .exec()
            
            const selectedDateData={
                                date:d,
                                formattedDate:moment(d).format('MMM D'),
                                ticketCount: tickets.length,
                                }
            resolvedTicketTimelineData.timeline.push(selectedDateData)
    }


    const timeLineData={
            newTicketTimeline:newTicketTimelineData,
            resolvedTicketTimeline: resolvedTicketTimelineData
    }
    res.json(timeLineData)
}

module.exports.renderTicketsByType=async(req,res)=>{
    const ticketByTypeData=[]
    const uiTickets=await Ticket.find({type:'UI'})
    const uiTicketData={
        type:'UI',
        count:uiTickets.length
    }
    ticketByTypeData.push(uiTicketData)

    const backendTickets=await Ticket.find({type:'Backend'})
    const backendTicketData={
        type:'Backend',
        count:backendTickets.length
    }
    ticketByTypeData.push(backendTicketData)


    const runtimeTickets=await Ticket.find({type:'Runtime'})
    const runtimeTicketsData={
        type:'Runtime',
        count:runtimeTickets.length
    }
    ticketByTypeData.push(runtimeTicketsData)

    res.json(ticketByTypeData)
}

module.exports.renderTicketsByStatus=async(req,res)=>{
    const ticketsByStatusData=[]
    const newTickets=await Ticket.find({status:'New'})
    const newTicketData={
        status:'New',
        count:newTickets.length
    }
    ticketsByStatusData.push(newTicketData)

    const reviewedTickets=await Ticket.find({status:'Reviewed'})
    const reviewedTicketData={
        status:'reviewed',
        count:reviewedTickets.length
    }
    ticketsByStatusData.push(reviewedTicketData)


    const inProgressTickets=await Ticket.find({status:'In Progress'})
    const inProgressTicketsData={
        status:'In Progress',
        count:inProgressTickets.length
    }
    ticketsByStatusData.push(inProgressTicketsData)

    const resolvedTickets=await Ticket.find({status:'Resolved'})
    const resolvedTicketsData={
        status:'Resolved',
        count:resolvedTickets.length
    }
    ticketsByStatusData.push(resolvedTicketsData)

    res.json(ticketsByStatusData)
}
module.exports.renderTicketsByStatus=async(req,res)=>{
    const ticketsByStatusData=[]
    const newTickets=await Ticket.find({status:'New'})
    const newTicketData={
        status:'New',
        count:newTickets.length
    }
    ticketsByStatusData.push(newTicketData)

    const reviewedTickets=await Ticket.find({status:'Reviewed'})
    const reviewedTicketData={
        status:'reviewed',
        count:reviewedTickets.length
    }
    ticketsByStatusData.push(reviewedTicketData)


    const inProgressTickets=await Ticket.find({status:'In Progress'})
    const inProgressTicketsData={
        status:'In Progress',
        count:inProgressTickets.length
    }
    ticketsByStatusData.push(inProgressTicketsData)

    const resolvedTickets=await Ticket.find({status:'Resolved'})
    const resolvedTicketsData={
        status:'Resolved',
        count:resolvedTickets.length
    }
    ticketsByStatusData.push(resolvedTicketsData)

    res.json(ticketsByStatusData)
}

module.exports.renderTicketsByPriority=async(req,res)=>{
    const ticketsByPriorityData=[]
    const pendingTickets=await Ticket.find({priority:'Pending'})
    const pendingTicketData={
        priority:'pending',
        count:pendingTickets.length
    }
    ticketsByPriorityData.push(pendingTicketData)

    const lowTickets=await Ticket.find({priority:'Low'})
    const lowTicketData={
        status:'low',
        count:lowTickets.length
    }
    ticketsByPriorityData.push(lowTicketData)


    const  moderateTickets=await Ticket.find({priority:'Moderate'})
    const moderateTicketsData={
        priority:'Moderate',
        count: moderateTickets.length
    }
    ticketsByPriorityData.push(moderateTicketsData)

    const highTickets=await Ticket.find({priority:'High'})
    const highTicketsData={
        priority:'High',
        count:highTickets.length
    }
    ticketsByPriorityData.push(highTicketsData)

    const urgentTickets=await Ticket.find({priority:'Urgent'})
    const urgentTicketsData={
        priority:'Urgent',
        count:urgentTickets.length
    }
    ticketsByPriorityData.push(urgentTicketsData)

    res.json(ticketsByPriorityData)
}

// module.exports.renderNRTProjectData=async (req,res)=>{

//     const tickets= await Ticket.find({project:req.params.id}).populate({path:'project'})
//     //Todays Date
//     const now = new Date();
//     //Date 15 days ago
//     const date15DaysAgo=new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))

    
//     //Getting DATA for New tickets added 15 days ago
//     const newTickets=await Ticket.find({
//         status:'New',
//         createdAt:{
//             $gte: date15DaysAgo
//         }
//     }
// )
//     const newTicketTimelineData={
//         totalTickets:newTickets.length,
//         timeline:[]
//     }

//     //loop over dates in Tickets collection
//     for (let d = date15DaysAgo; d <= now; d.setDate(d.getDate() + 1)) {
//         let date14DaysAgo=new Date((date15DaysAgo).getTime() - (1 * 24 * 60 * 60 * 1000))
//             const tickets=await Ticket.find({status:'New'})
//                                 .where('createdAt')
//                                 .gt(date14DaysAgo)
//                                 .lt(date15DaysAgo)
//                                 .exec()
            
//             const selectedDateData={
//                                 date:d,
//                                 formattedDate:moment(d).format('MMM D'),
//                                 ticketCount: tickets.length,
//                                 }
//             newTicketTimelineData.timeline.push(selectedDateData)
//     }
    
//     //Getting DATA for RESOLVED tickets added 15 days ago for this function
//     let date15DaysAgoR=new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))
    
//     const resolvedTickets=await Ticket.find({
//         status:'Resolved',
//         createdAt:{
//             $gte: date15DaysAgoR
//         }
//     }
// )
//     const resolvedTicketTimelineData={
//         totalTickets:resolvedTickets.length,
//         timeline:[]
//     }

//     //loop over dates in Tickets collection

//     for (let d = date15DaysAgoR; d <= now; d.setDate(d.getDate() + 1)) {
//         let date14DaysAgoR=new Date((date15DaysAgoR).getTime() - (1 * 24 * 60 * 60 * 1000))
//             const tickets=await Ticket.find({status:'Resolved'})
//                                 .where('createdAt')
//                                 .gt(date14DaysAgoR)
//                                 .lt(date15DaysAgoR)
//                                 .exec()
            
//             const selectedDateData={
//                                 date:d,
//                                 formattedDate:moment(d).format('MMM D'),
//                                 ticketCount: tickets.length,
//                                 }
//             resolvedTicketTimelineData.timeline.push(selectedDateData)
//     }


//     const timeLineData={
//             newTicketTimeline:newTicketTimelineData,
//             resolvedTicketTimeline: resolvedTicketTimelineData
//     }
//     console.log(timeLineData)
//     res.json(timeLineData)
// }