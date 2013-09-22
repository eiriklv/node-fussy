var fussy = require('fussy');
var events = [
  {
    profile: 'test_user', // a unique ID to identify a user
    content: "a video advertisement about an upcoming movie featuring pirates",
    signal: fussy.POSITIVE
  }, {
    profile: 'test_user',
    content: "a youtube ad about hackers",
    signal: fussy.POSITIVE
  }, {
    profile: 'test_user',
    content: "a facebook ad selling cloud hosting",
    signal: fussy.POSITIVE
  }, {
    profile: 'test_user',
    content: "a video advertisement featuring video games",
    signal: fussy.NEGATIVE
  }, {
    profile: 'test_user',
    content: "a facebook ad about video games",
    signal: fussy.NEGATIVE
  }
];

var engine = new fussy.Engine();

for (var i=0 ; i < events.length ; i++) {
  engine.pushEvent(events[i]);
}

console.log(JSON.stringify(engine.profiles));