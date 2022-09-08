var cards = [
	{
		type: "classmoney",
		name: "Pieniądze klasowe",
		transactions: [
			{
				name: "Radosław Barylak",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Jakub Broja",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Piotr Ciechanowski",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Seweryn Gusta",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Łukasz Klimaszewski",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Mateusz Kuć",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
			{
				name: "Łukasz Łata",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
            {
				name: "Mateusz Płużek",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
            {
				name: "Igor Sadkowski",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			},
            {
				name: "Igor Skóra",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+10.00"
			}
		]
	},
	{
		type: "trip",
		name: "Wycieczka",
		transactions: [
			{
				name: "Radosław Barylak",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
			{
				name: "Jakub Broja",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
			{
				name: "Łukasz Klimaszewski",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
			{
				name: "Łukasz Łata",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
            {
				name: "Mateusz Płużek",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
            {
				name: "Daniel Smolis",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			},
            {
				name: "Dominik Żychowski",
				type: "credit",
				date: "08 Września, 2022",
				amount: "+70.00"
			}
		]
	},

];
function generateCards() {
	var output = "";
	cards.forEach(function(cards, index) {
		output += "<div class='credit-card " + cards.type + "'>";
		output += "<div class='card-image'></div>";
		output += "<div class='credit-card_name'>" + cards.name + "</div>";
		output += "</div>"
	});
	return output;
}
document.querySelector('.cards').innerHTML = generateCards();
document.querySelector('.credit-card.classmoney').classList.add('active');;
function showTransactions(creditCards, card) {
	var output = "";
	var total = 0;
	for (var i = 0; i < creditCards.length; i++) {
		if (creditCards[i] === card) {
			for (var n = 0; n < cards[i].transactions.length; n++) {
				output += "<div class='transaction-item " + cards[i].transactions[n].type + "'>";
				output += "<div class='transaction-item_details'>";
				output += "<h3>"+ cards[i].transactions[n].name +"</h3>";
				output += "</div>";
				output += "<div class='transaction-item_amount'><span>PLN </span><p class='amount'>"+ cards[i].transactions[n].amount +"</p></div>";
				output += "</div>"; 
				total += parseFloat(cards[i].transactions[n].amount);
			}
			document.querySelector('.transactions').innerHTML = output;
			document.querySelector('.total-balance').innerHTML = total.toFixed(2);
		} 
	}
}
var cardsList = document.querySelectorAll('.credit-card');
var creditCard = document.querySelector( '.credit-card' );
var activeCard = document.querySelector('.credit-card.active');
var transaction = document.querySelector('.transactions');
showTransactions(cardsList, activeCard);
transaction.classList.add('show')
for(let i = 0; i < cardsList.length; i++) {
	cardsList[i].addEventListener("click", function(e) {
		e.preventDefault;
		for(let n = 0; n < cardsList.length; n++) {
			if(cardsList[n].classList.contains('active')) {
				cardsList[n].classList.remove('active');
			}
		}
		this.classList.add('active');
		showTransactions(cardsList, this);
		transaction.classList.remove("show");
		void transaction.offsetWidth;

		transaction.classList.add("show");		
  });
}
var modalControl = document.querySelector('.modal-control');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');
modalControl.addEventListener('click', function() {
	document.querySelector('.modal').classList.add('open');
}, false);
modal.addEventListener('click', function() {
	document.querySelector('.modal').classList.remove('open');
}, false);
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "1234"){
        location.href = "main.html";
    }
    else{
        document.getElementById("alert").innerHTML = "Invalid username or password";
    }
}
