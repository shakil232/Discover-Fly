
// First-Class-Ticket-handler....
function TicketHandel(ticket,isIncrease){
    const FirstClassTicketInput = document.getElementById(ticket +'-count');
    const FirstClassTicketCount = parseInt(FirstClassTicketInput.value);
    let FirstClassTicketNewCount =  FirstClassTicketCount;
    if( isIncrease==true){
        FirstClassTicketNewCount =  FirstClassTicketCount +1;
    }
    if( isIncrease==false && FirstClassTicketCount >0){
        FirstClassTicketNewCount = FirstClassTicketCount -1;
    }
    FirstClassTicketInput.value = FirstClassTicketNewCount;
}





// // First-Class-Ticket-handler....
// function FirstClassTicketHandler (isIncrease){
//     const FirstClassTicketInput = document.getElementById('First-Classticket-count');
//     const FirstClassTicketCount = parseInt(FirstClassTicketInput.value);
//     let FirstClassTicketNewCount =  FirstClassTicketCount;
//     if( isIncrease==true){
//         FirstClassTicketNewCount =  FirstClassTicketCount +1;
//     }
//     if( isIncrease==false && FirstClassTicketCount >0){
//         FirstClassTicketNewCount = FirstClassTicketCount -1;
//     }
//     FirstClassTicketInput.value = FirstClassTicketNewCount;
//     let totalFirstClassTicketPrice =  FirstClassTicketNewCount *150;
   
// }

// // Economy-Class-Ticket-handler....
// function EconomyClassTicketHnadler (isIncrease){
//     const EconomyClassTicketInput = document.getElementById('Economy-Classticket-count');
//     const EconomyClassTicketCount = parseInt(EconomyClassTicketInput.value);
    
//     let EconomyClassTicketNewCount = EconomyClassTicketCount ;
//     if ( isIncrease == true){
//         EconomyClassTicketNewCount = EconomyClassTicketCount +1;
//     }
//     if ( isIncrease == false && EconomyClassTicketCount >0){
//         EconomyClassTicketNewCount = EconomyClassTicketCount -1;
//     }
//     EconomyClassTicketInput.value = EconomyClassTicketNewCount;
//     let totalEconomyClassTicketPrice = EconomyClassTicketNewCount *100;
    
// }
