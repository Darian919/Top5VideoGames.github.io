//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// menu function

function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
                menuicon.style.color = "#2a1f14";
        } else {
            navlinks.style.display = "block";
                menuicon.style.color = "#f6eee4";
        }
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "I wanted to create a forum where people could share their knowledge on these video games. I also wanted to see other opinions regarding these games and other options that could have been chosen. This was purely made out of curiousity.";
}
 
//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "I chose these five games because I had an amazing experience with all of them. They were also the first games that came to mind. My game choices do vary but these were the most memorable game experiences for me which is why I chose them as a result.";
}
 
//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "Plenty! There are many that I enjoyed and decided to exclude. I did not have enough room for everything and there would have been a bunch of text. This bores people. This is why I limited it to just five.";
} 
 //Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "In some aspects, yes! I do believe that these video games have more character than other games. They are not completely better than other video games. Each game has something unique, something that it brings to the table which is why these are not better, simply unique.";
}
 
