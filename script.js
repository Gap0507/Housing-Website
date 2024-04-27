var banner = document.getElementById("bannerhead")
var popularDestinationsSection = document.getElementById("popularDestinationsSection")
var Featured=document.getElementById("Featured")
var popularschemes=document.getElementById("popularschemes")
var schemecards=document.getElementById("schemecards")
var trend=document.getElementById("trend")
var trendcards=document.getElementById("trendcards")
var Rent=document.getElementById("Rent")
var Rentcards=document.getElementById("Rentcards")
var Buy=document.getElementById("Buy")
var Buycards=document.getElementById("Buycards")
var sellform=document.getElementById("sellform")
var Sell=document.getElementById("Sell")
var Sellcards=document.getElementById("Sellcards")
var Sellhead=document.getElementById("Sellhead")

function f1(e) {
    banner.style.display = 'none';
    popularDestinationsSection.style.display = 'none';
    Featured.style.display = 'none';
    popularschemes.style.display = 'none';
    schemecards.style.display = 'none';
    trend.style.display = 'none';
    trendcards.style.display = 'none';
    Rent.style.display = 'block';
    Rentcards.style.display = 'block';
    Buy.style.display = 'none';
    Buycards.style.display = 'none';
    Sellhead.style.display='none'
    sellform.style.display='none';
    Sell.style.display='none';
    Sellcards.style.display='none';
}

function f2(e) {
    banner.style.display = 'none';
    popularDestinationsSection.style.display = 'none';
    Featured.style.display = 'none';
    popularschemes.style.display = 'none';
    schemecards.style.display = 'none';
    trend.style.display = 'none';
    trendcards.style.display = 'none';
    Rent.style.display = 'none';
    Rentcards.style.display = 'none';
    Buy.style.display = 'block';
    Buycards.style.display = 'block';
    Sellhead.style.display='none'
    sellform.style.display='none';
    Sell.style.display='none';
    Sellcards.style.display='none';
}
function f3(e,button) {
    banner.style.display = 'none';
    popularDestinationsSection.style.display = 'none';
    Featured.style.display = 'none';
    popularschemes.style.display = 'none';
    schemecards.style.display = 'none';
    trend.style.display = 'none';
    trendcards.style.display = 'none';
    Rent.style.display = 'none';
    Rentcards.style.display = 'none';
    Buy.style.display = 'none';
    Buycards.style.display = 'none';
    Sellhead.style.display='Block'
    sellform.style.display='block';
    Sell.style.display='block';
    Sellcards.style.display='block';
 
}

// On the subpage
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var cardTitle = urlParams.get('cardTitle');
    var marketedBy = urlParams.get('marketedBy');
    var address = urlParams.get('address');
    var rentSale = urlParams.get('rentSale');
    var price = urlParams.get('price');
    var bhk = urlParams.get('bhk');
    var month = urlParams.get('month');
    var size = urlParams.get('size');
    var agent = urlParams.get('agent');

    // Update HTML elements with the data
    if (cardTitle) {
        var cardTitleElement = document.getElementById('project-head');
        if (cardTitleElement) {
            cardTitleElement.textContent = cardTitle;
        }
    }

    if (marketedBy) {
        var marketedByElement = document.getElementById('project-group');
        if (marketedByElement) {
            marketedByElement.textContent = marketedBy;
        }
    }

    if (address) {
        var addressElement = document.getElementById('project-address');
        if (addressElement) {
            addressElement.textContent = address;
        }
    }

    if (rentSale) {
        var rentSaleElement = document.getElementById('project-type');
        if (rentSaleElement) {
            rentSaleElement.textContent = rentSale;
        }
    }

    if (price) {
        var priceElement = document.getElementById('project-price');
        if (priceElement) {
            priceElement.textContent = price;
        }
    }

    if (bhk) {
        var projectBhkElement = document.getElementById('project-bhk');
        if (projectBhkElement) {
            projectBhkElement.textContent = bhk;
        }
    }

    if (month) {
        var projectMonthElement = document.getElementById('project-month');
        if (projectMonthElement) {
            projectMonthElement.textContent = month;
        }
    }

    if (size) {
        var projectSizeElement = document.getElementById('project-size');
        if (projectSizeElement) {
            projectSizeElement.textContent = size;
        }
    }

    if (agent) {
        var projectAgentElement = document.getElementById('project-agent');
        if (projectAgentElement) {
            projectAgentElement.textContent = agent;
        }
    }
});
