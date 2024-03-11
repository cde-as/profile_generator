const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        profile.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.favoriteFood = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;

              // Output the profile
              console.log("\nProfile Generator:");
              console.log(`Hi, I am ${profile.name}`);
              console.log(`An activity I like to do is: ${profile.activity}`);
              console.log(`And I like listening to: ${profile.music}`);
              console.log(`My favourite meal is: ${profile.meal}`);
              console.log(`and my go to order is: ${profile.favoriteFood}`);
              console.log(`Challenge me at: ${profile.sport}`);
              console.log(`My superpower is: ${profile.superpower}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
