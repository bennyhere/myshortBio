function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dNUcruG5R6":
        Script1();
        break;
  }
}

function Script1()
{
  const userId = Math.random().toString(36).substring(2);
const timeVisited = new Date().toLocaleString('en-US');
const player = GetPlayer();
const timeSpent = player.GetVar("NumericEntry");//Storyline variables assigned to JS variables
//display it in an alert
//alert("Hello");
alert("Thank you for graciously investing "+(timeSpent/1000)+"  seconds of your precious time to read about me until now. If you're intrigued to learn more, I invite you to click on my LinkedIn link.");
var xhr = new XMLHttpRequest();
xhr.open("POST", "url", true); 
// Replace with your endpoint URL
xhr.setRequestHeader("Content-Type", "application/json");
var data = JSON.stringify(
{ 
"userId": userId,
"timeVisited": timeVisited,
"timeSpent": timeSpent
});
xhr.send(data);
}

