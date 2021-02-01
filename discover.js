
// First-Class-Ticket-handler....
function TicketHandel(ticket,isIncrease){
    const TicketInput = document.getElementById(ticket +'-count');
    const TicketCount = parseInt(TicketInput.value);
    let TicketNewCount = TicketCount;
    if( isIncrease==true){
        TicketNewCount =  TicketCount +1;
    }
    if( isIncrease==false && TicketCount >0){
        TicketNewCount = TicketCount -1;
    }
    
    let ticketPrice = document.getElementById(ticket +'First-Classticket') ;
    totalFirstPrice = ticketPrice *150;
    let ticketPricee = document.getElementById(ticket +'Economy-Classticket') ;
    totalEconomyPrice = ticketPricee *100;
    let totalAmount = totalFirstPrice +  totalEconomyPrice;

    TicketInput.value = TicketNewCount;
    calculate(totalAmount);
}
function calculate (){
    document.getElementById('total-price').innerText = '&' +totalAmount;


}
