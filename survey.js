const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyAnswers = [];

const survey= function() {
  rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
    console.log(`Nice to meet you ${name}:)!`);
    surveyAnswers.push(`Name: ${name}`);

      rl.question('What\'s an activity you like doing?', (activity) => {
        console.log(`${activity} sounds like a lot of fun`);
        surveyAnswers.push(`Activity : ${activity}`);

          rl.question('What do you listen to while doing that?', (music) => {
            console.log(`Who doesn't love ${music}!`);
            surveyAnswers.push(`Music: ${music}`);

              rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
                console.log(`I also love ${meal} :)`);
                surveyAnswers.push(`Meal: ${meal}`);

                  rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
                    console.log(`I'd love to try some ${food}`);
                    surveyAnswers.push(`Food: ${food}`);

                      rl.question('Which sport is your absolute favourite?', (sport) => {
                        console.log(`${sport} sounds like a lot of fun`);
                        surveyAnswers.push(`Sport: ${sport}`);
                      
                          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
                            console.log(`I'm speechless...`);
                            surveyAnswers.push(`Superpower: ${superpower}`);


                            console.log(`We've learned a lot about ${name} today! They love listening to ${music} while they're ${activity}, while eating ${food} for ${meal}. They wish they could play ${sport} all the time. In ${name}'s words... "${superpower}".`);

                            rl.close();
                          })
                      })
                  })
              })
          })
      })
  })
}
survey();