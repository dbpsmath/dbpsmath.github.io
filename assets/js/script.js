document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.querySelector(".motd")
    var motds = Array("Please wait while your MOTD is loading...", "Bone appetit!", "iShowSpeed is cringe", "I love javascript (please send help)", "Made using github codespaces", "Not google sites!", '"Easy enough for a toddler, not easy for a sys admin"', '"Goodbye 3kh0 ):"', '"Schools are literally 1984"', 'Imagine not blocking this', 'This is a random MOTD', '"Be responsible" -No one', '"I cant think of any more" -DBP', '"Please contribute MOTDs" - DBP', '"How do I type?"', "The closest we've ever gotten to world peace is when everyone did the gagnam style", "Approved by me (unofficial)", "I can't think of anything", "Support Ukraine!", "Here's a math fact to recoop for your time there spent playing games, you'll never need it in life", "hyperplexed do the hub", "Thin crust", "Fun fact: The song world cup isn't, and will never be funny.", "skid");
  
    var randomMOTD = motds[Math.floor(Math.random() * motds.length)];
    quoteText.innerHTML = randomMOTD
});

function abcloak() {
    const tab = window.open('about:blank', '_blank');
    const iframe = tab.document.createElement('iframe');
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '100vw';
    stl.height = '100vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = document.location.href;
    tab.document.body.appendChild(iframe);
}