const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (name) => {
  console.log(`Hello: ${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Doing ${activity} sounds fun.`);

    rl.question('What do you listen to while doing that? ', (listen) => {
      console.log(`I will give ${listen} a listen.`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favMeal) => {
        console.log(`${favMeal} is a Good choice`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (favToEat) => {
          console.log(`${favToEat} sounds yummy`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`Glad to hear ${sport} is your favourite`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(` ${superpower} sounds like an awesome superpower`);
                
              console.log(`    
              G-E-N-E-R-A-T-I-N-G P-R-O-F-I-L-E


              Hello I'm ${name} and I like to listen to ${listen} while doing ${activity} in my spare time. My favourite meal of the day is ${favMeal} and my favourite food for that meal is ${favToEat}. My favourite sport is ${sport} and my superpower would be ${superpower}

                 `);

              rl.close();
            });
          });
        });
      });
    });
  });
});
