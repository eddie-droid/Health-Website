
var mMore1Text = document.querySelector("#moreMental1 h5");
var mMore1Header = document.querySelector("#moreMental1 h4");
var mMore1Image = document.querySelector("#moreMental1 img");
var mMore1Button = document.querySelector("#moreMental1 button");
var mCounter1 = 0;

var mMore2Text = document.querySelector("#moreMental2 h5");
var mMore2Header = document.querySelector("#moreMental2 h4");
var mMore2Image = document.querySelector("#moreMental2 img");
var mMore2Button = document.querySelector("#moreMental3 button");
var mCounter2 = 0;

function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
        	navlinks.style.display = "none";
        	
            
                menuicon.style.color = "#ff890a";
        } else {
            navlinks.style.display = "block";
            
                menuicon.style.color = "white";
        }
}

function mentalAns1() 
{
    mCounter1++;

    if(mCounter1 ==1 || mCounter1%2!=0){
    mMore1Text.textContent = "Remember your good deeds. Give yourself credit for the good things you do for others each day • Forgive yourself. Everyone makes mistakes. Learn from what went wrong, but don’t dwell on it • Spend more time with your friends. Surround yourself with positive, healthy people";
    mMore1Text.style.fontSize = "x-large";
    mMore1Header.textContent ="To develop a more positive mindset:";
    mMore1Image.style.display = "none";
    mMore1Button.textContent = "Show Less";
    }
else{
    mMore1Text.textContent = "Science says that people who have good mental health have fewer negative emotions and are able to bounce back from hardships more quickly. Likewaise, having good mental health means being able to hold onto positive emotions longer and appreciate them more.";
     mMore1Text.style.fontSize = "medium";
    mMore1Header.textContent = "1. Have a positive attitude";
    mMore1Image.style.display = "block";
    mMore1Button.textContent = "Show More";
    }
}

function mentalAns2() 
{
    mCounter2++;

    if(mCounter2 ==1 || mCounter2%2!=0)
    {
    mMore2Text.textContent = "Get enough sleep. Exercise regularly. Just 30 minutes a day of walking can boost mood and reduce stress • Build a social support network • Set priorities. Decide what must get done and what can wait. Say no to new tasks if they are putting you into overload • Think positive. Note what you’ve accomplished at the end of the day, not what you’ve failed to do • Try relaxation methods. Mindfulness, meditation, yoga, or tai chi may help • Seek help. Talk to a mental health professional if you feel unable to cope, have suicidal thoughts, or use drugs or alcohol to cope";
    mMore2Text.style.fontSize = "large";
    mMore2Header.textContent ="To reduce and manage your stress:";
    mMore2Image.style.display = "none";
    mMore2Button.textContent = "Show Less";
    }
else
    {
    mMore2Text.textContent = "Everyone feels stressed from time to time. Stress can give you a rush of energy when it’s needed most. But if stress lasts a long time—a condition known as chronic stress—those “high-alert” changes become harmful rather than helpful. Learning healthy ways to cope with stress can also boost your resilience.";
    mMore2Text.style.fontSize = "medium";
    mMore2Header.textContent = "2. Reduce your stress";
    mMore2Image.style.display = "block";
    mMore2Button.textContent = "Show More";

    }
}