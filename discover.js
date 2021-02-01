
// First-Class-Ticket-handler....
function FirstClassTicketHandler (isIncrease){
    const FirstClassTicketInput = document.getElementById('First-Classticket-count');
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


// const FirstClassTicketIncrease = document.getElementById('First-Classticket-increase').addEventListener('click' , function(){
//     const FirstClassTicketInput = document.getElementById('First-Classticket-count');
//     const FirstClassTicketCount = parseInt(FirstClassTicketInput.value);
//     const FirstClassTicketNewCount = FirstClassTicketCount + 1;
//     FirstClassTicketInput.value = FirstClassTicketNewCount;
// })
// const FirstClassTicketDecrease = document.getElementById('First-Classticket-decrease').addEventListener('click' , function(){
//     const FirstClassTicketInput = document.getElementById('First-Classticket-count');
//     const FirstClassTicketCount = parseInt(FirstClassTicketInput.value);
//     const FirstClassTicketNewCount = FirstClassTicketCount - 1;
//     FirstClassTicketInput.value = FirstClassTicketNewCount;
// })

// Economy-Class-Ticket-handler....
function EconomyClassTicketHnadler (isIncrease){
    const EconomyClassTicketInput = document.getElementById('Economy-Classticket-count');
    const EconomyClassTicketCount = parseInt(EconomyClassTicketInput.value);
    // const EconomyClassTicketNewCount = EconomyClassTicketCount + 1;
    let EconomyClassTicketNewCount = EconomyClassTicketCount ;
    if ( isIncrease == true){
        EconomyClassTicketNewCount = EconomyClassTicketCount +1;
    }
    if ( isIncrease == false && EconomyClassTicketCount >0){
        EconomyClassTicketNewCount = EconomyClassTicketCount -1;
    }
    EconomyClassTicketInput.value = EconomyClassTicketNewCount;
}
// const EconomyClassTicketIncrease= document.getElementById('Economy-Classticket-increase').addEventListener('click' , function(){
//     const EconomyClassTicketInput = document.getElementById('Economy-Classticket-count');
//     const EconomyClassTicketCount = parseInt(EconomyClassTicketInput.value);
//     const EconomyClassTicketNewCount = EconomyClassTicketCount + 1;
//     EconomyClassTicketInput.value = EconomyClassTicketNewCount;
// })
// const EconomyClassTicketDecrease = document.getElementById('Economy-Classticket-decrease').addEventListener('click' , function(){
//     const EconomyClassTicketInput = document.getElementById('Economy-Classticket-count');
//     const EconomyClassTicketCount = parseInt(EconomyClassTicketInput.value);
//     const EconomyClassTicketNewCount = EconomyClassTicketCount - 1;
//     EconomyClassTicketInput.value = EconomyClassTicketNewCount;
// })