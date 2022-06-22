
var counterVar = 0
let isProfileActive = false
function AlterProfile(){
  // Get a reference to the last interval + 1
  const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }

  isProfileActive = (isProfileActive ? false : true)
  console.log(isProfileActive)
  const phrases = ["I am a lifelong student. ",
                   "I am an American Ninja Warrior. ",
                   "I am an app developer. ",
                   "I am a problem solver. ",
                   "I am a creator. ",
                   "I am a leader. ",
                   "I am a communicator. "]

  let profile = document.getElementById('profile-description')
  let old_phrase = profile.innerText

  console.log(old_phrase)

  after = "<button id='profile-button' onclick='AlterProfile()'><i class='fa \
          fa-refresh' style=color:white'></i></button>"

  let index = counterVar % 7
  let new_phrase = phrases[index]
  counterVar++

  console.log(new_phrase)
  new_phrase = new_phrase.slice(6, new_phrase.length)

  let i = 0

  setInterval(function(){
    if (i < new_phrase.length){
      profile.innerText = "I am a" + new_phrase.slice(0,i)
      i++
    }
  }, 60)
}
