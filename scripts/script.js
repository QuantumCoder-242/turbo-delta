$(document).ready(function () {
  console.log("doc is ready");

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html(""); 
    let userName = $("#userName").val().trim().toLowerCase(); 

    if (userName) {
      let coolFacts = generateCoolNameFacts(userName);
      $("#coolNameFactsOutput").html(coolFacts);

     
      let anagram = generateAnagram(userName);
      let anagramMessage = "<p>A fun <strong>anagram</strong> of your name is " + anagram + "</p>";
      $("#coolNameFactsOutput").append(anagramMessage);

      
    } else {
      $("#coolNameFactsOutput").html("Please enter your <strong>name</strong> to get cool facts!");

    }
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = `<p>${nameLength(userName)}</p>`;
  coolFacts += `<p>${nameStart(userName)}</p>`;
  coolFacts += `<p>${nameEnd(userName)}</p>`;
  coolFacts += `<p> ${reverseName(userName)}</p>`;
  coolFacts += `<p>${vowelCount(userName)}</p>`;
  coolFacts += `<p>${consonantCount(userName)}</p>`;
  coolFacts += `<p>${isPalindrome(userName)}</p>`;
  
  return coolFacts;
}


function nameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "The <strong>first letter</strong> of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;
  return "The <strong>last letter</strong> of your name is " + name[lastIndex];
}

function reverseName(name) {
  return "Your name in <strong>reverse</strong> is: " + name.split('').reverse().join('');
}

function generateAnagram(name) {
  let arr = name.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  return arr.join('');
}

function vowelCount(name) {
  const vowels = 'aeiou';
  let count = 0;
  for (let letter of name) {
    if (vowels.includes(letter)) count++;
  }
  return "Number of <strong>vowels</strong> in your name is " + count;
}

function consonantCount(name) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let count = 0;
  for (let letter of name) {
    if (consonants.includes(letter)) count++;
  }
  return "Number of <strong>consonants</strong> in your name is " + count;
}

function isPalindrome(name) {
  let reversedName = name.split('').reverse().join('');
  return name === reversedName ? "Your name is a <strong>palindrome!</strong>" : "Your name is <strong>not a palindrome</strong>.";
}



