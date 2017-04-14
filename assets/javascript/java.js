var words_array = ['cat', 'dog', 'tiger', 'lion', 'elephant', 'bear', 'raven', 'crow', 'deer', 'monkey', 'peacock', 'penguin', 'panther', 'platypus', 'turtle', 'wolf', 'zebra', 'rhinoceros'];
var rand_word = words_array[Math.floor(Math.random() * words_array.length)];
var hidden = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var wrong_array = [];
var remaining = 10;
var wins = 0;
var losses = 0;
var letter
underscore(rand_word);
console.log(rand_word);
console.log(hidden);
var bear = "<p>The largest land predators on Earth are polar bears, weighting over 1,700 lbs and standing over 11′ high. -In Churchill, Canada, residents leave their cars unlocked to offer an escape way for the people who might encounter polar bears.</p>"
var cat = "<p>1. There are cats who have survived falls from over 32 stories (320 meters) onto concrete. 2. A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.</p>"
var crow = "<p>Crows have the biggest brain to body ratio among all bird species. Evolved with a highly developed forebrain, where intelligence is regulated, the anatomy of the crow brain is much similar to humans</p>"
var deer = "<p>The moose or elk is the largest species in the deer family. It can grow up to 2 meters (6.5 feet) from hoof to shoulder and weigh around 820 kilograms (1,800 pounds). The Southern pudu is smallest species in the deer family. It weighs only around 9 kilograms (20 pounds) and gets to be only around 36 centimeters (14 inches) tall when fully grown.</p>"
var dog = "<p>According to a recent survey, the most popular name for a dog is Max. Other popular names include Molly, Sam, Zach, and Maggie. Contrary to popular belief, dogs do not sweat by salivating. They sweat through the pads of their feet. The Basenji is the only barkless dog in the world </p>"
var elephant = "<p>Elephants are the largest land animals in the world.The largest elephant on record was an adult male African elephant. It weighed about 24,000 pounds and was 13 feet tall at the shoulder! Only one mammal can’t jump — the elephant.</p>"
var lion = "<p>A lion may sleep up to 20 hours a day. A lion’s roar can be heard from as far as 5 miles away. Male lions defend the pride’s territory while females do most of the hunting. Despite this, the males eat first.</p>"
var monkey = "<p>Monkeys do not eat the skins of bananas, they peel the skin of their bananas. The Pygmy Marmoset is the world’s smallest monkey, according to sources.  It weighs 85 to 140 grams and measures 117-159 millimeters.</p>"
var panther = "<p>It turns out many of us have even the most basic of panther facts wrong. We tend to assume that a panther is an entirely separate species of big cat. However, when we discuss panther facts, we usually actually mean either jaguar or leopard facts, depending on the geographic location. This is because a panther is defined as a melanistic color variant of other species in the Panthera genus, which includes tigers, lions, jaguars and leopards.</p>"
var peacock = "<p>ONLY THE MALES ARE ACTUALLY PEACOCKS.The collective term for these birds is peafowl. The males are peacocks and the females are peahens. The babies are called peachicks.</p>"
var penguin = "<p>Mistakenly, some artists and writers have penguins based at the North Pole. The largest living species is the emperor penguin (Aptenodytes forsteri): on average adults are about 1.1 m (3 ft 7 in) tall and weigh 35 kg (77 lb) or more</p>"
var platypus = "<p>To seal itself off from water, the platypus shuts off all of those normal senses and finds prey based solely on electrical signals and mechanical waves that it picks up using its bill. This allows the platypus to create a perfect representation of its surroundings to find prey, all from its own watertight cocoon.</p>"
var raven = "<p>RAVENS ARE ONE OF THE SMARTEST ANIMALS. RAVENS CAN IMITATE HUMAN SPEECH. RAVENS ROAM AROUND IN TEENAGE GANGS.Ravens mate for life and live in pairs in a fixed territory. When their children reach adolescence, they leave home and join gangs, like every human mother’s worst nightmare.</p>"
var rhinoceros = "<p>There are now only three northern white rhinos left in the world</p>"
var tiger = "<p>Tigers do not normally roar at other animals, but instead they roar to communicate with far-off tigers. A tiger about to attack will therefore not roar, but might hiss and fuff instead.</p>"
var turtle = "<p>The oldest known sea turtle fossils date back about 150 million years, making them some of the oldest creatures on Earth. Just for some context, dinosaurs became extinct 65 million years ago</p>"
var wolf = "<p>Wolves do not make good guard dogs because they are naturally afraid of the unfamiliar and will hide from visitors rather than bark at them. A wolf pup’s eyes are blue at birth. Their eyes turn yellow by the time they are eight months old.</p>"
var zebra = "<p>Fighting between the males involves a lot of kicking and biting until the one or the other gives up. once the previous male is forced out the new dominant male will often kill all young foals that are still dependant on their mother's milk by kicking and biting or drowning them to death.</p>"


$('.container').click(function(e){
        $(this).focus();
    });

document.onkeyup = function(event) {
  // alert("button was pressed")
  letter = event.key; //I don't know why but it wasn't working when var was infront of it
  var truty = guess(letter);
  console.log(rand_word);
  console.log(letter);
  console.log(alphabet);
  if (truty === true) {
    checkletter(rand_word);
  } else {
    return;
  }

  if (hidden.indexOf('_') === -1) {
    wins++;
    alert("YOU ROCK")
    document.body.style.backgroundImage = "url('assets/images/" + rand_word + ".jpg')"
    document.getElementById("card-box").innerHTML = window[rand_word];
    rand_word = words_array[Math.floor(Math.random() * words_array.length)]; //same goes to here

    underscore(rand_word);
    wrong_array = [];
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    remaining = 10;;
  } else if (remaining <= 0) {
    losses++;
    alert("YOU SUCK")
    document.body.style.backgroundImage = "url('assets/images/" + rand_word + ".jpg')"
    document.getElementById("card-box").innerHTML = window[rand_word];
    rand_word = words_array[Math.floor(Math.random() * words_array.length)];
    underscore(rand_word);
    wrong_array = [];
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    remaining = 10;
  }

  document.getElementById("hiddenID").innerHTML = hidden;
  document.getElementById("wrongguessID").innerHTML = wrong_array;
  document.getElementById("remainingID").innerHTML = remaining;
  document.getElementById("winsID").innerHTML = wins;
  document.getElementById("lossesID").innerHTML = losses;

}

function underscore(word) {
  hidden = []
  for (i = 0; i < word.length; i++) {
    hidden.push("_");
  }
}

function guess(letter) {
  var guessedindex = alphabet.indexOf(letter);
  if (guessedindex === -1) {
    alert("You have used this letter, pick the new letter not "+letter.charCodeAt(0));
    return false;
  } else {
    delete alphabet[guessedindex];
    return true;
  }
}

function checkletter(word) {
  if (word.indexOf(letter) === -1) {
    wrong_array.push(letter);
    remaining--;
  } else {
    for (i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hidden[i] = letter;
      }
    }
  }
}
