//Global Variables
var mMore1Text = document.querySelector("#moreMental1 h5");
var mMore1Header = document.querySelector("#moreMental1 h4");
var mMore1Image = document.querySelector("#moreMental1 img");
var mMore1Button = document.querySelector("#moreMental1 button");
var mCounter1 = 0;

var mMore2Text = document.querySelector("#moreMental2 h5");
var mMore2Header = document.querySelector("#moreMental2 h4");
var mMore2Image = document.querySelector("#moreMental2 img");
var mMore2Button = document.querySelector("#moreMental2 button");
var mCounter2 = 0;

var mMore3Text = document.querySelector("#moreMental3 h5");
var mMore3Header = document.querySelector("#moreMental3 h4");
var mMore3Image = document.querySelector("#moreMental3 img");
var mMore3Button = document.querySelector("#moreMental3 button");
var mCounter3 = 0;

var mMore4Text = document.querySelector("#moreMental4 h5");
var mMore4Header = document.querySelector("#moreMental4 h4");
var mMore4Image = document.querySelector("#moreMental4 img");
var mMore4Button = document.querySelector("#moreMental4 button");
var mCounter4 = 0;

var pMore1Text = document.querySelector("#morePhysical1 h5");
var pMore1Header = document.querySelector("#morePhysical1 h4");
var pMore1Image = document.querySelector("#morePhysical1 img");
var pMore1Button = document.querySelector("#morePhysical1 button");
var pCounter1 = 0;

var pMore2Text = document.querySelector("#morePhysical2 h5");
var pMore2Header = document.querySelector("#morePhysical2 h4");
var pMore2Image = document.querySelector("#morePhysical2 img");
var pMore2Button = document.querySelector("#morePhysical2 button");
var pCounter2 = 0;

var pMore3Text = document.querySelector("#morePhysical3 h5");
var pMore3Header = document.querySelector("#morePhysical3 h4");
var pMore3Image = document.querySelector("#morePhysical3 img");
var pMore3Button = document.querySelector("#morePhysical3 button");
var pCounter3 = 0;

var pMore4Text = document.querySelector("#morePhysical4 h5");
var pMore4Header = document.querySelector("#morePhysical4 h4");
var pMore4Image = document.querySelector("#morePhysical4 img");
var pMore4Button = document.querySelector("#morePhysical4 button");
var pCounter4 = 0;

var eMore1Text = document.querySelector("#moreEnviormental1 h5");
var eMore1Header = document.querySelector("#moreEnviormental1 h4");
var eMore1Image = document.querySelector("#moreEnviormental1 img");
var eMore1Button = document.querySelector("#moreEnviormental1 button");
var eCounter1 = 0;

var eMore2Text = document.querySelector("#moreEnviormental2 h5");
var eMore2Header = document.querySelector("#moreEnviormental2 h4");
var eMore2Image = document.querySelector("#moreEnviormental2 img");
var eMore2Button = document.querySelector("#moreEnviormental2 button");
var eCounter2 = 0;

var eMore3Text = document.querySelector("#moreEnviormental3 h5");
var eMore3Header = document.querySelector("#moreEnviormental3 h4");
var eMore3Image = document.querySelector("#moreEnviormental3 img");
var eMore3Button = document.querySelector("#moreEnviormental3 button");
var eCounter3 = 0;

var eMore4Text = document.querySelector("#moreEnviormental4 h5");
var eMore4Header = document.querySelector("#moreEnviormental4 h4");
var eMore4Image = document.querySelector("#moreEnviormental4 img");
var eMore4Button = document.querySelector("#moreEnviormental4 button");
var eCounter4 = 0;

var rMore1Text = document.querySelector("#moreRelationship1 h5");
var rMore1Header = document.querySelector("#moreRelationship1 h4");
var rMore1Image = document.querySelector("#moreRelationship1 img");
var rMore1Button = document.querySelector("#moreRelationship1 button");
var rCounter1 = 0;

var rMore2Text = document.querySelector("#moreRelationship2 h5");
var rMore2Header = document.querySelector("#moreRelationship2 h4");
var rMore2Image = document.querySelector("#moreRelationship2 img");
var rMore2Button = document.querySelector("#moreRelationship2 button");
var rCounter2 = 0;

var rMore3Text = document.querySelector("#moreRelationship3 h5");
var rMore3Header = document.querySelector("#moreRelationship3 h4");
var rMore3Image = document.querySelector("#moreRelationship3 img");
var rMore3Button = document.querySelector("#moreRelationship3 button");
var rCounter3 = 0;

var rMore4Text = document.querySelector("#moreRelationship4 h5");
var rMore4Header = document.querySelector("#moreRelationship4 h4");
var rMore4Image = document.querySelector("#moreRelationship4 img");
var rMore4Button = document.querySelector("#moreRelationship4 button");
var rCounter4 = 0;

//Hamburger button
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

//Mental JS
function mentalAns1() 
{
    mCounter1++;

    if(mCounter1 ==1 || mCounter1%2!=0){
    mMore1Text.textContent = "Remember your good deeds. Give yourself credit for the good things you do for others each day.\n• Forgive yourself. Everyone makes mistakes. Learn from what went wrong, but don’t dwell on it.\n• Spend more time with your friends. Surround yourself with positive, healthy people";
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
    mMore2Text.textContent = "Get enough sleep. Exercise regularly. Just 30 minutes a day of walking can boost mood and reduce stress.\n• Build a social support network.\n• Set priorities. Decide what must get done and what can wait. Say no to new tasks if they are putting you into overload.\n• Think positive. Note what you’ve accomplished at the end of the day, not what you’ve failed to do.\n• Try relaxation methods. Mindfulness, meditation, yoga, or tai chi may help.\n• Seek help. Talk to a mental health professional if you feel unable to cope, have suicidal thoughts, or use drugs or alcohol to cope";
    mMore2Text.style.fontSize = "large";
    mMore2Header.textContent ="To reduce and manage your stress:";
    mMore2Image.style.display = "none";
    mMore2Button.textContent = "Show Less";
    }

    else
    {
    mMore2Text.textContent = "Everyone gets stressed from time to time. Stress can be good for you by giving you a rush of energy when you need it. But if your stress lasts for a long time, a condition known as chronic stress, your body's response to stress becomes harmful rather than helpful. Learning healthy ways to deal with stress can also boost your mental strength.";
    mMore2Text.style.fontSize = "medium";
    mMore2Header.textContent = "2. Reduce your stress";
    mMore2Image.style.display = "block";
    mMore2Button.textContent = "Show More";

    }
}

function mentalAns3() 
{
    mCounter3++;

    if(mCounter3 ==1 || mCounter3%2!=0)
    {
    mMore3Text.textContent = "Go to bed the same time each night and get up the same time each morning. Sleep in a dark, quiet, comfortable environment. Exercise daily (but not right before bedtime). Limit the use of electronics before bed. Relax before bedtime. A warm bath or reading might help. Avoid alcohol and stimulants such as caffeine late in the day. Avoid nicotine. Consult a health care professional if you have ongoing sleep problems.";
    mMore3Text.style.fontSize = "large";
    mMore3Header.textContent ="To increase sleep quaility:";
    mMore3Image.style.display = "none";
    mMore3Button.textContent = "Show Less";
    }
    
    else
    {
    mMore3Text.textContent = "In order to do everything we want to do in our day, we often sacrifice sleep in order to do the things we have to do. However that is not the ebst thing to do as lack of high quaility sleep can seriously hurt both you mental and physical health. It’s vital to your well-being. Sleeping properly helps you think more clearly, have quicker reflexes and focus better. Make sure to regularly sleep well.";
    mMore3Text.style.fontSize = "medium";
    mMore3Header.textContent = "3. Sleep Well";
    mMore3Image.style.display = "block";
    mMore3Button.textContent = "Show More";

    }
}

function mentalAns4() 
{
    mCounter4++;

    if(mCounter4 ==1 || mCounter4%2!=0)
    {
    mMore4Text.textContent = "Take some deep breaths. Breathe in through your nose to a count of 4, hold for 1 second and then exhale through the mouth to a count of 5. Repeat often. Enjoy a stroll. As you walk, notice your breath and the sights and sounds around you. As thoughts and worries enter your mind, note them but then return to the present. Practice mindful eating. Be aware of taste, textures, and flavors in each bite, and listen to your body when you are hungry and full. Find mindfulness resources in your local community, including yoga and meditation classes, mindfulness-based stress reduction programs, and books.";
    mMore4Text.style.fontSize = "large";
    mMore4Header.textContent ="To practice mindfullness:";
    mMore4Image.style.display = "none";
    mMore4Button.textContent = "Show Less";
    }
    
    else
    {
    mMore4Text.textContent = "Mindfullness can seem quite diffucult and apparently ineffective, however it is actullly really one of simplest and most powerful things one can do to keep their mind healthy. Mindfullness is an ancient practice that is about being completely aware of what’s happening inside and arounf you in the present moment. It means living a more intentional life instead of letting our minds run on autopilot. Becoming a more mindful person requires commitment and practice. These are some tips to help you get started.";
    mMore4Text.style.fontSize = "medium";
    mMore4Header.textContent = "4. Practice Mindfulness";
    mMore4Image.style.display = "block";
    mMore4Button.textContent = "Show More";

    }
}

//Physical  JS

function physicalAns1() 
{
    pCounter1++;

    if(pCounter1 ==1 || pCounter1%2!=0)
    {
    pMore1Text.textContent = "Take the stairs instead of the elevator. Park your car at the far end of the street or parking lot. Have “walking meetings” with colleagues at work. Rearrange your home so you can stand upright or walk on a treadmill while watching TV or using the computer. Set an alarm on your computer to go off every hour and prompt you to move around for a minute or two. Try walking as if you’re already late for the bus or an important meeting. Have small weights in your office or around your home for doing arm exercises.";
    pMore1Text.style.fontSize = "large";
    pMore1Header.textContent ="To increase your physical activity:";
    pMore1Image.style.display = "none";
    pMore1Button.textContent = "Show Less";
    }
    
    else
    {
    pMore1Text.textContent = "How well your body functions affects your ability to accomplish your daily activities. Sedentary behavior—which usually means sitting or lying down while awake—has been linked to a shorter lifespan and a wide range of medical problems. Any time you get up and move, you’re improving your chances for good health.";
    pMore1Text.style.fontSize = "medium";
    pMore1Header.textContent = "1. Increase your physical activity";
    pMore1Image.style.display = "block";
    pMore1Button.textContent = "Show More";

    }
}
function physicalAns2() 
{
    pCounter2++;

    if(pCounter2 ==1 || pCounter2%2!=0)
    {
    pMore2Text.textContent = "Maintain a healthy weight. Too much weight can make your knees and hips ache. Engage in muscle strengthening (resistance) activities that involve all your major muscle groups two or more times a week. Stay active all week long. Aim for 150 minutes of moderate intensity activity a week, such as brisk walking. Wear comfortable, properly fitting shoes. Eat a well-balanced diet. Get enough calcium and vitamin D daily to protect your bones. Try to avoid lifting heavy objects. If you need to lift something heavy, bend your knees and keep your back straight.";
    pMore2Text.style.fontSize = "large";
    pMore2Header.textContent ="To keep your body healthier:";
    pMore2Image.style.display = "none";
    pMore2Button.textContent = "Show Less";
    }
    
    else
    {
    pMore2Text.textContent = "Your bones, muscles and joints all work together to make your body an amazingly movable machine. Like any machine, your body can suffer some wear and tear. It needs regular care and maintenance to keep moving with ease.";
    pMore2Text.style.fontSize = "medium";
    pMore2Header.textContent = "2. Maintain your body";
    pMore2Image.style.display = "block";
    pMore2Button.textContent = "Show More";

    }
}

function physicalAns3() 
{
    pCounter3++;

    if(pCounter3 ==1 || pCounter3%2!=0)
    {
    pMore3Text.textContent = "Replace saturated fats in your diet with unsaturated fats. Use olive, canola, or other vegetable oils instead of butter, meat fats, or shortening. Cut back on sodium. Use fresh poultry, fish, and lean meat, rather than canned, smoked, or processed. Choose fresh or frozen vegetables that have no added salt and foods that have less than 5% of the Daily Value of sodium per serving. Rinse canned foods. Choose more complex carbs. Eat more complex carbs, like starches and fiber. These are found in whole-grain breads, cereals, starchy vegetables, and legumes. Cut added sugars. Pick food with little or no added sugar. Use the Nutrition Facts label to choose packaged foods with less total sugar. Get more fiber. Switch to whole grains and add different kinds of vegetables, beans, nuts, and seeds to your diet.";
    pMore3Text.style.fontSize = "large";
    pMore3Header.textContent ="To eat a healthier diet:";
    pMore3Image.style.display = "none";
    pMore3Button.textContent = "Show Less";
    }
    
    else
    {
    pMore3Text.textContent = "We make dozens of decisions every day. When it comes to deciding what to eat and feed our families, it can be a lot easier than you might think to make smart choices. A healthy eating plan not only limits unhealthy foods, but also includes a variety of healthy foods. Find out which foods to add to your diet and which to avoid.";
    pMore3Text.style.fontSize = "medium";
    pMore3Header.textContent = "3. Have a heatlhy diet";
    pMore3Image.style.display = "block";
    pMore3Button.textContent = "Show More";

    }
}
function physicalAns4() 
{
    pCounter4++;

    if(pCounter4 ==1 || pCounter4%2!=0)
    {
    pMore4Text.textContent = "Plan. Identify unhealthy patterns and triggers. Set realistic goals. Change your surroundings. Find ways to make healthier choices easy choices. Remove temptations. Work for changes in your community, like safe places to walk. Ask for support. Find friends, family, co-workers, neighbors, or groups for support. Fill your time with healthy activities. Try exercise, a favorite hobby, or spending time with family and friends. Track your progress. Record how things are going to help you stay focused and catch slip-ups. Imagine the future. Think about future benefits to stay on track. Reward yourself. Give yourself a healthy reward when you’ve achieved a small goal or milestone, like a massage. Be patient. Improvement takes time, and setbacks happen. Focus on progress, not perfection.";
    pMore4Text.style.fontSize = "large";
    pMore4Header.textContent ="To built healthy habits:";
    pMore4Image.style.display = "none";
    pMore4Button.textContent = "Show Less";
    }
    
    else
    {
    pMore4Text.textContent = "We know that making healthy choices can help us feel better and live longer. Maybe you’ve already tried to eat better, get more exercise or sleep, quit smoking, or reduce stress. It’s not easy. But research shows how you can boost your ability to create and sustain a healthy lifestyle.";
    pMore4Text.style.fontSize = "medium";
    pMore4Header.textContent = "4. Build healthy habits";
    pMore4Image.style.display = "block";
    pMore4Button.textContent = "Show More";

    }
}
//Enviormental JS
function enviormentalAns1() 
{
    eCounter1++;

    if(eCounter1 ==1 || eCounter1%2!=0)
    {
    eMore1Text.textContent = "Avoid outdoor allergens whenever possible. If pollen counts are high, stay inside with the windows closed and use the air conditioning. Avoid bringing pollen indoors. If you go outside, wash your hair and clothing when you come inside. Pets can also bring in pollen, so clean them too. Reduce indoor allergens. Keep humidity levels low in the home to keep dust mites and mold under control. Avoid upholstered furniture and carpets because they harbor allergens. Wash your bedding in hot water once a week. Vacuum the floors once a week. Talk with your doctor about medications and allergy shots.";
    eMore1Text.style.fontSize = "large";
    eMore1Header.textContent ="To reduce allergens:";
    eMore1Image.style.display = "none";
    eMore1Button.textContent = "Show Less";
    }
    
    else
    {
    eMore1Text.textContent = "A change in season can brighten your days with vibrant new colors. But blooming flowers and falling leaves can usher in more than beautiful backdrops. Airborne substances that irritate your nose can blow in with the weather. When sneezing, itchy eyes, or a runny nose suddenly appears, allergies may be to blame. Take steps to reduce your exposure to allergens.";
    eMore1Text.style.fontSize = "medium";
    eMore1Header.textContent = "1. Reduce allergens";
    eMore1Image.style.display = "block";
    eMore1Button.textContent = "Show More";

    }
}
function enviormentalAns2() 
{
    eCounter2++;

    if(eCounter2 ==1 || eCounter2%2!=0)
    {
    eMore2Text.textContent = "Avoid outdoor activities in the afternoons on warmer days, when the risk of air pollution is highest. Avoid strenuous outdoor activities if the air is polluted. Check your region’s air quality index, which is often reported in the local news. Orange and red mean it’s a bad air day and that children and adults with respiratory diseases should avoid the outdoors. Purple and maroon mean air pollution is extreme and everyone should try to stay inside. Consider reducing the time and intensity of your workout, if you want to exercise outside on days when you’re at risk. The best way to reduce exposure to outdoor air is to exercise indoors. ";
    eMore2Text.style.fontSize = "large";
    eMore2Header.textContent ="To reduce the effects of bad air quality on your health";
    eMore2Image.style.display = "none";
    eMore2Button.textContent = "Show Less";
    }
    
    else
    {
    eMore2Text.textContent = "The combination of high temperatures, few winds and breezes, pollution, and airborne particles can brew up an unhealthful mixture in the air, just waiting to enter your lungs. These substances can make it hard to breathe and can sap your energy. If the air quality is especially poor, it may take a few days for your body to recover. And if you’re regularly exposed to high levels of unhealthy air, the health consequences can linger for months or even years.";
    eMore2Text.style.fontSize = "medium";
    eMore2Header.textContent = "2. Air quaility";
    eMore2Image.style.display = "block";
    eMore2Button.textContent = "Show More";

    }
}
function enviormentalAns3() 
{
    eCounter3++;

    if(eCounter3 ==1 || eCounter3%2!=0)
    {
    eMore3Text.textContent = "Dress in layers. If you expect to be out in the wind, rain, or snow, wear a jacket with a waterproof and windproof outer shell. If you need help paying your home heating bills, you may qualify for an energy assistance program. Beat the sun and heat with an early morning or evening activity. Wear protective clothing, such as hats, long-sleeve shirts, and long pants or skirts. Use sunscreen that blocks both UVA and UVB with a sun protection factor (SPF) of at least 15, preferably 30, and reapply frequently. Use sunglasses that block both UVA and UVB. Try to stay in the shade when outdoors during peak sunlight. Go to an air-conditioned gym, do water workouts, or use a fitness video at home. Drink plenty of water before, during, and after exercise.";
    eMore3Text.style.fontSize = "large";
    eMore3Header.textContent ="To stay safe in the cold and heat:";
    eMore3Image.style.display = "none";
    eMore3Button.textContent = "Show Less";
    }
    
    else
    {
    eMore3Text.textContent = "Heat is the biggest danger in the summer months. Being hot for too long can cause many illnesses, some of which can be deadly. On the other hand, the cold air of winter can also be dangerous. And cold air can also pose threats to your health, whether you’re indoors or outside";
    eMore3Text.style.fontSize = "medium";
    eMore3Header.textContent = "3. Stay safe against the cold and heat";
    eMore3Image.style.display = "block";
    eMore3Button.textContent = "Show More";

    }
}
function enviormentalAns4() 
{
    eCounter4++;

    if(eCounter4 ==1 || eCounter4%2!=0)
    {
    eMore4Text.textContent = "Start by testing your home. You can do it yourself or hire a professional. If you find a radon problem in your home, take steps to fix it. If you smoke, stop. Smoking is an especially serious health risk when combined with radon. Get help for your radon questions at this national hotline: 1-800-55RADON (557-2366). Test the quaility of your water. Buy a water filter that can can perform reverse osmisis. ";
    eMore4Text.style.fontSize = "large";
    eMore4Header.textContent ="To reduce toxins in your enviorment:";
    eMore4Image.style.display = "none";
    eMore4Button.textContent = "Show Less";
    }
    
    else
    {
    eMore4Text.textContent = "Radon gas typically moves up through the ground and comes into homes through cracks in floors, walls, and foundations. Sometimes it enters the home through well water. Whatever the source, your home can trap radon inside, where it can build up. You might not be able to see or smell radon, but it can still harm you—slowly, and in ways that you can’t detect. Additonally, your water can contain dangeruous levels or a variety of toxins and metals. Filtering these regularly can healp lead to fewer permanently ingested chemials.";
    eMore4Text.style.fontSize = "medium";
    eMore4Header.textContent = "1. Reduce toxins";
    eMore4Image.style.display = "block";
    eMore4Button.textContent = "Show More";
    }
}
//Relationship JS
function relationshipAns1() 
{
    rCounter1++;

    if(rCounter1 ==1 || rCounter1%2!=0)
    {
    rMore1Text.textContent = "Join a group focused on a favorite hobby, such as reading, hiking, painting, or wood carving. Learn something new. Take a cooking, writing, art, music, or computer class. Take a class in yoga, tai chi, or another new physical activity. Join a choral group, theater troupe, band, or orchestra. Help with gardening at a community garden or park. Volunteer at a school, library, hospital, or place of worship. Participate in neighborhood events, like a park clean-up through your local recreation center or community association. Join a local community group or find other ways to get involved in things you care about. Travel to different places and meet new people.";
    rMore1Text.style.fontSize = "large";
    rMore1Header.textContent ="To find new connections:";
    rMore1Image.style.display = "none";
    rMore1Button.textContent = "Show Less";
    }
    
    else
    {
    rMore1Text.textContent = "Strong social connections might help protect health and lengthen life. Scientists are finding that our connections to others can have powerful effects on our health. Whether with family, friends, neighbors, romantic partners, or others, social connections can influence our physiology. Look for ways to get make strong connections with more people.";
    rMore1Text.style.fontSize = "medium";
    rMore1Header.textContent = "1. Make Connections";
    rMore1Image.style.display = "block";
    rMore1Button.textContent = "Show More";

    }
}

function relationshipAns2() 
{
    rCounter2++;

    if(rCounter2 ==1 || rCounter2%2!=0)
    {
    rMore2Text.textContent = "Ask for help. Make a list of ways others can help. For instance, someone might sit with the person while you do errands. Get organized. Make to-do lists, and set a daily routine. Try to take breaks each day. Finding respite care can help you create time for yourself or to spend with friends. Keep up with your hobbies and interests when you can. Join a caregiver’s support group. Meeting other caregivers may give you a chance to exchange stories and ideas. Eat healthy foods, and exercise as often as you can. Build your skills. Some hospitals offer classes on how to care for someone with an injury or illness. To find these classes, ask your doctor.";
    rMore2Text.style.fontSize = "large";
    rMore2Header.textContent ="2. To care for oneself and others healthily:";
    rMore2Image.style.display = "none";
    rMore2Button.textContent = "Show Less";
    }
    
    else
    {
    rMore2Text.textContent = "Many of us will end up having to take care of somebody, and while it is important to do so, we must also first take care of ourselves. The stress and strain of taking care of other people can take a toll on your health. It’s important to find ways to care for your health while caring for others. Depending on your circumstances, some self-care strategies may be more difficult to carry out than others. Choose ones that work for you.";
    rMore2Text.style.fontSize = "medium";
    rMore2Header.textContent = "2. Take care of yourself and others healthily";
    rMore2Image.style.display = "block";
    rMore2Button.textContent = "Show More";

    }
}

function relationshipAns3() 
{
    rCounter3++;

    if(rCounter3 ==1 || rCounter3%2!=0)
    {
    rMore3Text.textContent = "Start a walking group with friends, neighbors, or co-workers. Make the streets safer for walking by driving the speed limit and yielding to people who walk. Consider joining a low- or no-cost exercise group or an office sports team such as softball or kickball, and enroll kids in community sports teams or lessons. Participate in local planning efforts to develop walking paths, sidewalks, and bike paths. Work with parents and schools to encourage kids to safely walk or ride bikes to school. Join other parents to ask for more physical activity at school. Try different activities to find the ones you really enjoy, and have fun while being active! ";
    rMore3Text.style.fontSize = "large";
    rMore3Header.textContent ="To create an active community:";
    rMore3Image.style.display = "none";
    rMore3Button.textContent = "Show Less";
    }
    
    else
    {
    rMore3Text.textContent = "Where you live, work, or go to school can have a big impact on how much you move and even how much you weigh. Being active with others in your community can have a positive effect on your health habits and create opportunities to connect. You can help your community create ways to encourage more physical activity.";
    rMore3Text.style.fontSize = "medium";
    rMore3Header.textContent = "3. Do activities with other people";
    rMore3Image.style.display = "block";
    rMore3Button.textContent = "Show More";

    }
}

function relationshipAns4() 
{
    rCounter4++;

    if(rCounter4 ==1 || rCounter4%2!=0)
    {
    rMore4Text.textContent = "Share your feelings honestly. Ask for what you need from others. Listen to others without judgement or blame. Be caring and empathetic. Disagree with others respectfully. Conflicts should not turn into personal attacks. Avoid being overly critical, angry outbursts, and violent behavior. Expect others to treat you with respect and honesty in return. Compromise. Try to come to agreements that work for everyone. Protect yourself from violent and abusive people. Set boundaries with others. Decide what you are and aren't willing to do. It's okay to say no. Learn the differences between healthy, unhealthy, and abusive ways of relating to others. Visit www.thehotline.org/healthy-relationships/relationship-spectrum.";
    rMore4Text.style.fontSize = "large";
    rMore4Header.textContent ="To build strong relationships:";
    rMore4Image.style.display = "none";
    rMore4Button.textContent = "Show Less";
    }
    
    else
    {
    rMore4Text.textContent = "Strong, healthy relationships are important throughout your life. They can impact your mental and physical well-being. As a child you learn the social skills you need to form and maintain relationships with others. But at any age you can learn ways to improve your relationships. It's important to know what a healthy relationship looks like and how to keep your connections supportive.";
    rMore4Text.style.fontSize = "medium";
    rMore4Header.textContent = "4. Build healthy relationships";
    rMore4Image.style.display = "block";
    rMore4Button.textContent = "Show More";
    }
}