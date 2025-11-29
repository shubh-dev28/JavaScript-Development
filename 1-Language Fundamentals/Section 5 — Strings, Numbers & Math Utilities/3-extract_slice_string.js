// ⭐ 5.3 — Extracting & Slicing Text

// we will mainly use 2 methods - .slice(start, end) and .substring(start, end). 

// Slice = Extracts from start index to end index (not included). .slice(start, end). supports negative indexing
console.log('Shibu Saransh'.slice(0,5)) // 5 excluded
console.log('Shibu Saransh'.slice(-7)) // last 7 character extracted.

// .substring(start, end) - similarly works, but no negative value allowed, Automatically swaps values if start > end.
let userName = 'Shibu Saransh'
console.log(userName.substring(0,5))
console.log(userName.substring(-7))

// Extract First Name & Last Name - best use case
let fullName = "Shibu Saransh";
let spaceIndex = fullName.indexOf(" ");
let firstName = fullName.slice(0, spaceIndex);
let lastName = fullName.slice(spaceIndex + 1); // return all remaining string starting from it
console.log(firstName, lastName); // Shibu Saransh

// Extract Username From Email
let email = 'shibusaransh@gmail.com'
email = 'shibuisking@yahoo.com'
console.log(`Username is ${email.slice(0,email.indexOf('@'))}`)
// Extract Domain of Email
console.log(`The domain of this email is - ${email.slice(email.indexOf('@'))}`)

// Show Short Version of Long Text - preview.
let desc = "Remote developer building amazing full stack apps.";
console.log(desc.slice(0, 25) + "...");

// Exercises
// Exercise 1 — Email Extraction - done alreadu
// Exercise 2 — Name Extraction - done. rest easy doable
// Exercise 3 — Mobile Masking - not imp now
// Exercise 4 — Bio Preview
let bio = "I will become a high paying remote full stack developer.";
console.log(bio.slice(0,21) + '....')

// Quiz
// extract the last 4 characters
// slice
// convert to 2,7
// slice