export interface LetterVerse {
  ref: string;
  text: string;
}

export interface StudyNote {
  label: string;
  text: string; // may contain <strong> / <em>
}

export interface MessiahLetter {
  num: number;
  char: string;
  paleo: string;
  name: string;
  slug: string;
  meanings: string;
  bridge: string;
  concept: string;
  connection: string;
  verses: LetterVerse[];
  studyNotes?: StudyNote[];
}

export const messiahLetters: MessiahLetter[] = [
  {
    num: 1, char: 'א', paleo: '𐤀', name: 'Aleph', slug: 'aleph',
    meanings: 'Strength · Leader · First',
    bridge: '"The letter Aleph speaks of the one who stands first and above all. Yahushua fulfills that in the most specific way — Yahuah appointed and ordained Him as firstborn, the first man through the door of resurrection and the first of an entirely new creation."',
    concept: 'First of the New Creation',
    connection: 'Yahushua is the firstborn of the new creation — the first man to be resurrected and glorified by the Father. His resurrection is not the end of the story, it is the beginning of an entirely new one. Every person who is born again enters that same new creation He opened. He holds the first rank not because of age or pre-existence, but because Yahuah appointed Him as the first through the door — the prototype of everything the Father is building. Just as the first Adam was the beginning of one creation, the Last Adam is the beginning of another.',
    verses: [
      { ref: 'Colossians 1:15', text: '"He is the image of the invisible Elohim, the firstborn over all creation."' },
      { ref: 'Psalm 89:27', text: '"I will also appoint him my firstborn, the highest of the kings of the earth."' },
      { ref: 'Revelation 3:14', text: '"These are the words of the Amen, the faithful and true witness, the beginning (firstborn/ruler) of the creation of Elohim." — Yahushua speaking about Himself.' },
    ],
    studyNotes: [
      { label: 'Study Note — Psalm 89:27', text: 'The language Yahuah uses here is <strong>appointment</strong> — "I will appoint him my firstborn." Yahushua did not hold this title by nature — He was <strong>chosen and set apart for it</strong> before the world began, then He earned it by walking it out perfectly through death and resurrection. That makes the appointment far more remarkable: Yahuah ordained a man to be first, and that man delivered on it completely.' },
    ],
  },
  {
    num: 2, char: 'ב', paleo: '𐤁', name: 'Bet', slug: 'bet',
    meanings: 'House · Dwelling · Inside',
    bridge: '"The letter Bet means house — a dwelling, an inner space where someone takes up residence. Yahushua was not a symbol of where Yahuah lives. He was the actual dwelling place. All the fullness of Yahuah lived inside Him bodily."',
    concept: 'The Dwelling Place of Yahuah',
    connection: 'Every priest, every temple, every tabernacle in the Tanakh was pointing toward the same thing — the day Yahuah would dwell among His people in a body. Yahushua was that day. He was not a representative of the temple or a man who visited the temple — He was the temple itself. When the religious leaders sought to destroy Him, they were attempting to tear down the one structure Yahuah actually inhabited. He told them plainly: destroy this temple and He would raise it in three days. They did not understand what they were dealing with.',
    verses: [
      { ref: 'John 1:14', text: '"And the Word became flesh and dwelt (tabernacled) among us, and we beheld His glory."' },
      { ref: 'Colossians 2:9', text: '"For in Him dwells all the fullness of the Godhead bodily."' },
      { ref: 'John 2:19–21', text: '"Destroy this temple, and in three days I will raise it up... But He was speaking of the temple of His body."' },
    ],
    studyNotes: [
      { label: 'Study Note — Colossians 2:9', text: 'The word <strong>"bodily"</strong> in this verse is doing significant work. Paul is not saying Yahuah\'s fullness was reflected in Yahushua or represented by Him — he is saying it <strong>dwelt in Him physically</strong>. This is the Bet made flesh. The entire concept of the dwelling place — from the Garden, to the tabernacle of Moses, to Solomon\'s temple — was always moving toward this one man and this one verse.' },
    ],
  },
  {
    num: 3, char: 'ג', paleo: '𐤂', name: 'Gimel', slug: 'gimel',
    meanings: 'Lift Up · Carry · Bestow',
    bridge: '"The letter Gimel carries the meaning of lifting up — raising something or someone to a higher place. Yahushua made this the centerpiece of His own testimony about Himself. He was not just lifted up — He said that lifting was the very reason He came."',
    concept: 'The Lifted Up One',
    connection: 'When Yahushua told Nicodemus that the Son of Man must be lifted up as Moses lifted up the serpent, He was connecting His death directly to the most unexpected image in the Torah — a bronze serpent on a pole, lifted so that anyone who looked at it would live. He took the curse, was raised up on a cross in the form of judgment, and through that lifting He became the source of life for everyone who looks to Him. Then after the cross He was lifted again — exalted to the right hand of the Father — and from there He poured out the Spirit.',
    verses: [
      { ref: 'John 3:14–15', text: '"As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up, that whoever believes in Him should not perish but have eternal life." — His own words.' },
      { ref: 'John 12:32', text: '"And I, if I am lifted up from the earth, will draw all peoples to Myself." — His own words.' },
      { ref: 'Acts 2:33', text: '"Therefore being exalted to the right hand of Elohim, and having received from the Father the promise of the Holy Spirit, He poured out this which you now see and hear."' },
    ],
  },
  {
    num: 4, char: 'ד', paleo: '𐤃', name: 'Dalet', slug: 'dalet',
    meanings: 'Door · Gate · Entrance',
    bridge: '"The letter Dalet is a door — the only way in or out. Yahushua did not say He knew the door, or that He could show you the door. He said He was the door. There is no other entrance, no side way in, no other path to the Father."',
    concept: 'The Only Door',
    connection: 'In a world full of teachers, traditions, and pathways that claim to lead to Yahuah, Yahushua made the most exclusive claim in all of Scripture. He is the door — singular, specific, and non-negotiable. Every system, every religion, every philosophy that offers another entrance is offering a wall with no opening. He said it plainly twice in John 10 and again in John 14. There is one door and He is it.',
    verses: [
      { ref: 'John 10:7, 9', text: '"I am the door of the sheep... I am the door. If anyone enters by Me, he will be saved, and will go in and out and find pasture." — His own words.' },
      { ref: 'John 14:6', text: '"I am the way, the truth, and the life. No one comes to the Father except through Me." — His own words.' },
      { ref: 'Psalm 118:20', text: '"This is the gate of Yahuah, through which the righteous shall enter." — Applied to Yahushua at His triumphal entry in Matthew 21.' },
    ],
  },
  {
    num: 5, char: 'ה', paleo: '𐤄', name: 'Hey', slug: 'hey',
    meanings: 'Behold · Reveal · Look Here',
    bridge: '"The letter Hey means behold — to reveal, to show, to make visible what was hidden. Yahushua is the full revelation of the Father made visible to human eyes. No one had ever seen the Father — Yahushua made Him seeable."',
    concept: 'The Revealed One',
    connection: 'Throughout the entire Tanakh, Yahuah remained unseen. His voice was heard, His works were witnessed, His presence filled the temple — but no man saw Him and lived. Yahushua changed that. He walked among people as the exact visible expression of the Father, so that anyone who looked at Him was seeing what the Father is like. Philip asked Yahushua to show them the Father, and Yahushua\'s answer was stunning — he was looking at Him the entire time.',
    verses: [
      { ref: 'John 14:9', text: '"He who has seen Me has seen the Father; so how can you say, \'Show us the Father\'?" — His own words.' },
      { ref: 'John 1:18', text: '"No one has seen Elohim at any time. The only begotten Son, who is in the bosom of the Father, He has declared Him."' },
      { ref: 'Isaiah 40:5', text: '"The glory of Yahuah shall be revealed, and all flesh shall see it together." — Messianic prophecy fulfilled in the one who made the Father visible.' },
    ],
  },
  {
    num: 6, char: 'ו', paleo: '𐤅', name: 'Waw', slug: 'waw',
    meanings: 'Nail · Hook · To Fasten',
    bridge: '"The letter Waw is a nail — a peg or spike used to fasten and hold. There is no more direct fulfillment of a Hebrew letter in all of Scripture than this one. Yahushua was nailed, and it was written about Him specifically a thousand years before it happened."',
    concept: 'The Pierced One',
    connection: 'Psalm 22 was written by David roughly a thousand years before crucifixion existed as a form of execution. Yet it describes in precise detail the scene at Calvary — the mocking crowds, the casting of lots for clothing, and the piercing of hands and feet. When Yahushua cried out "My El, my El, why have you forsaken me" from the cross, He was opening that Psalm for everyone watching. The Waw — the nail — was not just a letter. It was a prophecy in pictograph form waiting to be fulfilled in His body.',
    verses: [
      { ref: 'Psalm 22:16', text: '"For dogs have surrounded Me; the congregation of the wicked has enclosed Me. They pierced My hands and My feet." — Written approximately 1,000 years before crucifixion.' },
      { ref: 'John 20:25, 27', text: '"Unless I see the nail marks in his hands... Then He said to Thomas, \'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.\'"' },
      { ref: 'Zechariah 12:10 / John 19:37', text: '"They will look on me, the one they have pierced." — Yahuah speaking through Zechariah, confirmed by John as fulfilled in Yahushua at the cross.' },
    ],
    studyNotes: [
      { label: 'Study Note — Zechariah 12:10', text: 'In this verse Yahuah says <strong>"me whom they have pierced"</strong> — and yet John 19:37 applies it directly to Yahushua on the cross. Yahushua Himself explained it: <em>"He who hates Me hates My Father also"</em> (John 15:23). If hatred toward the Son reaches the Father, then the nail does too. Yahushua so completely represented and reflected Yahuah that what was done to the Son was felt by the Father. The piercing of the Son was the piercing of the heart of the one who sent Him.' },
    ],
  },
  {
    num: 7, char: 'ז', paleo: '𐤆', name: 'Zayin', slug: 'zayin',
    meanings: 'Sword · Weapon · To Cut',
    bridge: '"The letter Zayin is a sword or blade — something that cuts and divides. Yahushua does not come in this age with a physical sword but with the sword of His word, and the Messianic Servant declared that Yahuah had made His very mouth into a sharp blade."',
    concept: 'The Word That Cuts',
    connection: 'The sword that comes out of the mouth of Yahushua is not a figure of speech — it is the living, active word of Yahuah that He embodied and spoke. No one in Scripture was ever described this way. The Messianic Servant in Isaiah said Yahuah made his mouth like a sharp sword — and in Revelation, when Yahushua appears in His fullness, a two-edged sword comes from His mouth. In the age to come He will strike the nations with it. The word He speaks is not just communication. It is a weapon.',
    verses: [
      { ref: 'Isaiah 49:2', text: '"He made my mouth like a sharp sword." — The Messianic Servant speaking about Himself directly.' },
      { ref: 'Revelation 1:16', text: '"Out of His mouth went a sharp two-edged sword, and His countenance was like the sun shining in its strength." — Specifically describing Yahushua.' },
      { ref: 'Revelation 19:15', text: '"Now out of His mouth goes a sharp sword, that with it He should strike the nations."' },
    ],
  },
  {
    num: 8, char: 'ח', paleo: '𐤇', name: 'Chet', slug: 'chet',
    meanings: 'Fence · Enclosure · Protection',
    bridge: '"The letter Chet is a fence or enclosure — a boundary that keeps what is inside safe and keeps the enemy out. Yahushua is that fence for His flock. He stands between them and everything that would destroy them, and He declared that nothing can breach that boundary."',
    concept: 'The Protector of the Flock',
    connection: 'The security Yahushua offers His sheep is absolute — not conditional, not dependent on the strength of the believer, but held entirely in His hand and the Father\'s hand simultaneously. No force in creation can reach through both of those hands. He demonstrated that protection even in the hours before His death — when soldiers came to arrest Him in the garden, He stepped forward and asked who they sought, then made sure every one of His disciples walked away free. Even under arrest, the Chet held.',
    verses: [
      { ref: 'John 10:28–29', text: '"And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand. My Father, who has given them to Me, is greater than all; and no one is able to snatch them out of My Father\'s hand." — His own words.' },
      { ref: 'John 17:12', text: '"While I was with them in the world, I kept them in Your name. Those whom You gave Me I have kept; and none of them is lost." — His own words.' },
      { ref: 'Isaiah 53:6', text: '"Yahuah has laid on Him the iniquity of us all." — The Servant absorbs what would have destroyed the flock. The protection is not just physical — He stands in the way of judgment itself.' },
    ],
  },
  {
    num: 9, char: 'ט', paleo: '𐤈', name: 'Tet', slug: 'tet',
    meanings: 'Good · Surround · Coiled',
    bridge: '"The letter Tet is the first letter of Tov — the Hebrew word for good. Yahushua took that word and made it His own declaration. He is not just a good shepherd, He is the good shepherd — a specific, irreplaceable title He claimed for Himself alone."',
    concept: 'The Good Shepherd',
    connection: 'No prophet, priest, or king in the Tanakh ever called themselves the good shepherd. Ezekiel 34 records Yahuah\'s anger at the false shepherds of Israel and His promise to raise up one specific shepherd — His servant David — to replace them all. Yahushua stepped into that promise and fulfilled it completely. He knew His sheep by name, He sought the lost one, He laid down His life for the flock, and He rose again so that the shepherd could never be permanently taken from them.',
    verses: [
      { ref: 'John 10:11, 14', text: '"I am the good shepherd. The good shepherd gives His life for the sheep... I know My sheep and am known by My own." — His own words.' },
      { ref: 'Ezekiel 34:23', text: '"I will establish one shepherd over them, and he shall feed them — My servant David. He shall feed them and be their shepherd." — Yahuah promising a specific person, fulfilled in Yahushua.' },
      { ref: 'Micah 5:4', text: '"And He shall stand and feed His flock in the strength of Yahuah, in the majesty of the name of Yahuah His Elohim." — A specific Messianic shepherd prophecy.' },
    ],
  },
  {
    num: 10, char: 'י', paleo: '𐤉', name: 'Yod', slug: 'yod',
    meanings: 'Hand · Arm · Deed',
    bridge: '"The letter Yod is the smallest in the aleph-bet — a single stroke representing the hand or arm at work. Isaiah 53 asks to whom the arm of Yahuah has been revealed. The answer is the Servant. Yahushua is that arm made visible — and His name begins with the Yod."',
    concept: 'The Arm of Yahuah Revealed',
    connection: 'Isaiah 53 opens with a question: who has believed the report, and to whom has the arm of Yahuah been revealed? The chapter then answers its own question — the arm of Yahuah is the Suffering Servant, the one despised and rejected, the one who bore the sin of many. Yahushua is the working hand of the Father made flesh. And Yahushua Himself confirmed it — He and the Father were always working together, the Son doing only what He saw the Father do. The Yod, the smallest letter, begins His name for a reason.',
    verses: [
      { ref: 'Isaiah 53:1', text: '"Who has believed our report? And to whom has the arm of Yahuah been revealed?" — The arm of Yahuah is the Suffering Servant described in the verses that follow.' },
      { ref: 'John 5:17', text: '"My Father has been working until now, and I have been working." — His own words.' },
      { ref: 'Matthew 5:18', text: '"For assuredly I say to you, till heaven and earth pass away, one jot (yod) or one tittle will by no means pass from the law till all is fulfilled." — Yahushua protecting the smallest letter — the one that begins His own name.' },
    ],
  },
  {
    num: 11, char: 'כ', paleo: '𐤊', name: 'Kaf', slug: 'kaf',
    meanings: 'Open Palm · Bend · Submission',
    bridge: '"The letter Kaf is an open bending palm — the hand extended in submission or in receiving. Yahushua both submitted fully to the Father and is the one before whom every knee will bow. He is the Kaf in both directions — the one who bent, and the one before whom all will bend."',
    concept: 'Every Knee Will Bow',
    connection: 'In the garden of Gethsemane, Yahushua knelt and submitted His will entirely to the Father — "not My will, but Yours." That act of submission was not weakness. It was the most powerful moment in human history, because the obedience of that one man reversed what the disobedience of the first man had broken. And because He bent His knee before the Father in perfect submission, Yahuah highly exalted Him — so that one day every knee in heaven, earth, and under the earth will bend before the name of Yahushua.',
    verses: [
      { ref: 'Philippians 2:8–10', text: '"He humbled Himself and became obedient to death, even the death of the cross. Therefore Yahuah also has highly exalted Him... that at the name of Yahushua every knee should bow."' },
      { ref: 'Luke 22:41–42', text: '"He knelt down and prayed, saying, \'Father, if it is Your will, take this cup away from Me; nevertheless not My will, but Yours, be done.\'"' },
      { ref: 'Isaiah 45:23', text: '"To Me every knee shall bow, every tongue shall take an oath." — Applied directly to Yahushua in Romans 14:11.' },
    ],
  },
  {
    num: 12, char: 'ל', paleo: '𐤋', name: 'Lamed', slug: 'lamed',
    meanings: 'Staff · Authority · To Teach',
    bridge: '"The letter Lamed is the tallest in the aleph-bet — a shepherd\'s staff representing teaching authority and guidance. Yahushua taught as no man before or after Him — not by quoting other teachers but by His own authority. The crowds noticed immediately."',
    concept: 'The Authority That Teaches',
    connection: 'The scribes and Pharisees taught by citing tradition and the rulings of previous rabbis. Yahushua taught differently — He said "you have heard it said, but I say to you." That phrase alone would have been considered outrageous to a first century Jewish audience. He was not revising the Torah, He was revealing the depth of it with an authority that came directly from being the one Yahuah had put His words into. Moses himself prophesied that a prophet would come with Yahuah\'s own words in His mouth. That prophet was Yahushua.',
    verses: [
      { ref: 'Matthew 7:28–29', text: '"The people were astonished at His teaching, for He taught them as one having authority, and not as the scribes."' },
      { ref: 'John 13:13', text: '"You call Me Teacher and Master, and you say well, for so I am." — His own words.' },
      { ref: 'Deuteronomy 18:18', text: '"I will raise up for them a Prophet like you from among their brethren, and will put My words in His mouth." — Applied to Yahushua in Acts 3:22.' },
    ],
  },
  {
    num: 13, char: 'מ', paleo: '𐤌', name: 'Mem', slug: 'mem',
    meanings: 'Mighty · Revealed · Hidden',
    bridge: '"The letter Mem literally stands for water — it is the ancient picture of waves on the surface. Yahushua took that meaning and made it personal. He did not point to water or describe water — He claimed to be the source of it."',
    concept: 'Living Water',
    connection: 'No prophet, priest, or king in all of Scripture said what Yahushua said at Jacob\'s well. He identified Himself as the source of living water — water that ends thirst permanently, water that wells up into eternal life. He repeated it at the Feast of Tabernacles, standing in the Temple courts and crying out for anyone who thirsted to come to Him. No other man in Scripture ever made this claim about themselves. It belongs to Yahushua alone.',
    verses: [
      { ref: 'John 4:13–14', text: '"Whoever drinks of this water will thirst again, but whoever drinks of the water that I shall give him will never thirst. The water that I shall give him will become in him a fountain of water springing up into everlasting life."' },
      { ref: 'John 7:37–38', text: '"If anyone thirsts, let him come to Me and drink. He who believes in Me, as the Scripture has said, out of his heart will flow rivers of living water."' },
      { ref: 'Isaiah 12:3', text: '"Therefore with joy you will draw water from the wells of salvation." — Written 700 years before His birth.' },
    ],
    studyNotes: [
      { label: 'Study Note — Isaiah 12:3', text: 'The Hebrew word translated <strong>"salvation"</strong> in this verse is <strong>יְשׁוּעָה — Yahushua</strong>. The verse literally reads: <em>"you will draw water from the wells of Yahushua."</em> Isaiah named Him by letter 700 years before He stood in the Temple courts and declared the same thing about Himself. This is not a coincidence of translation — it is His name embedded in the prophecy, tied directly to the image of water.' },
    ],
  },
  {
    num: 14, char: 'נ', paleo: '𐤍', name: 'Nun', slug: 'nun',
    meanings: 'Seed · Heir · Continue',
    bridge: '"The letter Nun pictures a seed — life through death, continuation, the faithful heir. Yahushua used this image about Himself directly. He is the grain of wheat that fell into the ground, and through that death He produced a harvest that will never end."',
    concept: 'The Seed That Died and Lives',
    connection: 'A seed by itself remains alone. It holds potential but produces nothing until it dies and goes into the ground. Yahushua took that agricultural reality and applied it to His own death. His crucifixion was not a tragedy that Yahuah redeemed — it was the planting of the seed that Yahuah had always planned. The resurrection was the sprout breaking ground. Every person born again since then is part of the harvest that seed produced. And He now lives as the Heir of all things — the one appointed to receive everything the Father has.',
    verses: [
      { ref: 'John 12:24', text: '"Unless a grain of wheat falls into the ground and dies, it remains alone; but if it dies, it produces much grain." — His own words.' },
      { ref: 'Hebrews 1:2', text: '"In these last days spoken to us by His Son, whom He has appointed Heir of all things."' },
      { ref: 'Psalm 16:10', text: '"For You will not leave my soul in Sheol, nor will You allow Your Holy One to see corruption." — Applied to Yahushua\'s resurrection in Acts 2:31.' },
    ],
  },
  {
    num: 15, char: 'ס', paleo: '𐤎', name: 'Samech', slug: 'samech',
    meanings: 'Prop · Support · Uphold',
    bridge: '"The letter Samech is a prop or support — a structure that holds everything else up. Hebrews 1:3 says Yahushua upholds all things by the word of His power. This is written specifically and exclusively about the Son."',
    concept: 'The One Who Upholds',
    connection: 'The Samech is the support beneath everything else. Without it, what it holds collapses. Hebrews 1 describes Yahushua as the one upholding all things by the word of His power — and then immediately connects that to His work of purging sin and sitting at the right hand of Yahuah. The upholding and the atonement are the same act from different angles. Isaiah confirms it — the Servant is the one Yahuah upholds, the Elect One in whom the Father delights, and Matthew quotes that passage directly in connection with Yahushua\'s ministry.',
    verses: [
      { ref: 'Hebrews 1:3', text: '"Upholding all things by the word of His power, when He had by Himself purged our sins, sat down at the right hand of the Majesty on high."' },
      { ref: 'Isaiah 42:1', text: '"Behold! My Servant whom I uphold, My Elect One in whom My soul delights." — Yahuah speaking specifically about His Servant.' },
      { ref: 'Matthew 12:20', text: '"A bruised reed He will not break, and smoking flax He will not quench." — Matthew quoting Isaiah 42, applied directly to Yahushua\'s ministry.' },
    ],
  },
  {
    num: 16, char: 'ע', paleo: '𐤏', name: 'Ayin', slug: 'ayin',
    meanings: 'Eye · See · Understand',
    bridge: '"The letter Ayin is an eye — sight, understanding, discernment. Yahushua opened blind eyes both literally and spiritually, and Isaiah prophesied this specifically about the Messianic Servant centuries before He arrived."',
    concept: 'He Who Opens Blind Eyes',
    connection: 'Opening the eyes of the blind was not a coincidental miracle — it was a prophetic sign of identity. When John the Baptist sent messengers to ask if Yahushua was the one who was to come, Yahushua\'s answer was a list of specific acts from Isaiah\'s Messianic prophecies — and the blind receiving sight was at the top. He came to give sight to those who could not see spiritually, and He demonstrated that authority by giving sight to those who could not see physically. He stood in the Temple and declared it about Himself: the Spirit of Yahuah had sent Him to proclaim recovery of sight to the blind.',
    verses: [
      { ref: 'Isaiah 35:5', text: '"Then the eyes of the blind shall be opened, and the ears of the deaf shall be unstopped." — Messianic prophecy confirmed as fulfilled in Matthew 11:5.' },
      { ref: 'John 9:39', text: '"For judgment I have come into this world, that those who do not see may see, and that those who see may be made blind." — His own words.' },
      { ref: 'Luke 4:18', text: '"He has sent Me to proclaim recovery of sight to the blind." — Yahushua reading Isaiah 61 and declaring it fulfilled in Himself that day.' },
    ],
  },
  {
    num: 17, char: 'פ', paleo: '𐤐', name: 'Pey', slug: 'pey',
    meanings: 'Mouth · Word · Speak',
    bridge: '"The letter Pey is a mouth — the spoken word, the breath, the command released. Yahushua is not a man who carried messages from Yahuah. He is explicitly called the Word itself — the living spoken expression of the Father made flesh."',
    concept: 'The Living Word',
    connection: 'Every prophet said "thus says Yahuah." Yahushua said "I say to you." That distinction is everything. He was not transmitting words from another source — He was the Word, the very expression of Yahuah in spoken and visible form. John opens his account by identifying Yahushua as the Word that was in the beginning, and Revelation closes by giving Him the name "The Word of Elohim" as He rides on a white horse. From the first page to the last, He is the Pey — the mouth of Yahuah that spoke creation into existence and will one day speak the nations to judgment.',
    verses: [
      { ref: 'John 1:1, 14', text: '"In the beginning was the Word, and the Word was with Elohim, and the Word was Elohim... and the Word became flesh and dwelt among us."' },
      { ref: 'Revelation 19:13', text: '"He was clothed with a robe dipped in blood, and His name is called The Word of Elohim."' },
      { ref: 'Isaiah 49:2', text: '"He made my mouth like a sharp sword." — The Messianic Servant speaking about Himself. The mouth that carries the word is also the weapon.' },
    ],
  },
  {
    num: 18, char: 'צ', paleo: '𐤑', name: 'Tzadi', slug: 'tzadi',
    meanings: 'Righteous · Just · To Hunt',
    bridge: '"The letter Tzadi carries the meaning of righteousness. Yahushua is not just a righteous man — He is righteousness itself for those who believe. Jeremiah named Him directly: Yahuah Our Righteousness. That is not a title. It is His name."',
    concept: 'Our Righteousness',
    connection: 'No man can stand before Yahuah on the basis of his own righteousness — the bar is perfection and no human being meets it. Yahushua met it completely, then took what He earned and credited it to everyone who receives Him. He who knew no sin became sin so that those who are in Him can become the righteousness of Yahuah. This exchange — His perfect record for our broken one — is what the Tzadi points to. He is not just righteous. He is our righteousness. Without Him we have none.',
    verses: [
      { ref: 'Jeremiah 23:5–6', text: '"Behold, the days are coming... that I will raise to David a Branch of righteousness... and this is His name by which He will be called: YAHUAH OUR RIGHTEOUSNESS."' },
      { ref: 'Isaiah 53:11', text: '"By His knowledge My righteous Servant shall justify many, for He shall bear their iniquities."' },
      { ref: '2 Corinthians 5:21', text: '"For He made Him who knew no sin to be sin for us, that we might become the righteousness of Elohim in Him."' },
    ],
  },
  {
    num: 19, char: 'ק', paleo: '𐤒', name: 'Qof', slug: 'qof',
    meanings: 'Sun Rising · New Cycle · What Is Coming',
    bridge: '"The letter Qof pictures the sun rising at the horizon — darkness broken, a new cycle beginning, something arriving from beyond what the eye could see. Yahushua did not just perform resurrections. He declared Himself to be the resurrection — the sunrise that ends every darkness permanently."',
    concept: 'The Resurrection and the Life',
    connection: 'When Lazarus died and his sisters were grieving, Yahushua did not just say He could raise the dead. He said He was the resurrection — present tense, personal, identity-level. Not a power He possessed but a reality He embodied. Malachi prophesied that the Sun of Righteousness would rise with healing in His wings for those who feared the name of Yahuah. Luke records Zechariah prophesying over the infant Yahushua that the Dayspring from on high had come to give light to those sitting in the shadow of death. He is the Qof — the sunrise that never sets.',
    verses: [
      { ref: 'John 11:25', text: '"I am the resurrection and the life. He who believes in Me, though he may die, he shall live." — His own words.' },
      { ref: 'Malachi 4:2', text: '"But to you who fear My name the Sun of Righteousness shall arise with healing in His wings."' },
      { ref: 'Luke 1:78–79', text: '"Through the tender mercy of our Elohim, with which the Dayspring from on high has visited us, to give light to those who sit in darkness and the shadow of death."' },
    ],
  },
  {
    num: 20, char: 'ר', paleo: '𐤓', name: 'Resh', slug: 'resh',
    meanings: 'Head · Chief · Highest',
    bridge: '"The letter Resh is the head of a man — the chief, the highest position, the one at the top. Yahushua was rejected as the cornerstone by the very builders who should have recognized Him — and then Yahuah made Him the head over everything."',
    concept: 'The Chief Cornerstone',
    connection: 'Psalm 118 records a stone that the builders rejected becoming the chief cornerstone. Yahushua quoted that Psalm about Himself after the religious leaders challenged His authority in the temple courts. He was the stone they were looking at and refusing — the very one Yahuah had placed as the foundation of everything He was building. They rejected Him and handed Him to Rome. Yahuah raised Him and set Him as head over all things, above every name, in every age. The Resh they threw away became the Resh of the entire structure.',
    verses: [
      { ref: 'Psalm 118:22', text: '"The stone which the builders rejected has become the chief cornerstone." — Applied directly to Yahushua in Matthew 21:42 and Acts 4:11.' },
      { ref: 'Colossians 1:18', text: '"He is the head of the body, the assembly; He is the beginning, the firstborn from the dead, that in all things He may have the preeminence."' },
      { ref: 'Ephesians 1:22', text: '"He put all things under His feet, and gave Him to be head over all things to the assembly."' },
    ],
  },
  {
    num: 21, char: 'ש', paleo: '𐤔', name: 'Shin', slug: 'shin',
    meanings: 'Consume · Fire · Destroy',
    bridge: '"The letter Shin pictures teeth — something that consumes and destroys what is placed before it. Yahushua said He came to send fire on the earth, and He is the one who baptizes not just with water but with fire. The Shin belongs to Him."',
    concept: 'The Baptizer With Fire',
    connection: 'John the Baptist made a clear distinction when he spoke about the one coming after him — John baptized with water, but Yahushua would baptize with the Holy Spirit and fire. That fire fell on the day of Pentecost when tongues of flame appeared over the disciples and they were filled with the Spirit. Yahushua had promised it, purchased it through His death and resurrection, and poured it out from the right hand of the Father. He also declared plainly that He came to send fire on the earth and wished it were already burning. The Shin is His.',
    verses: [
      { ref: 'Luke 12:49', text: '"I came to send fire on the earth, and how I wish it were already kindled!" — His own words.' },
      { ref: 'Matthew 3:11', text: '"He will baptize you with the Holy Spirit and fire." — Said about Yahushua specifically by John the Baptist.' },
      { ref: 'Acts 2:3–4', text: '"There appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit." — The fulfillment of what He promised.' },
    ],
  },
  {
    num: 22, char: 'ת', paleo: '𐤕', name: 'Tav', slug: 'tav',
    meanings: 'Seal · Covenant · Complete',
    bridge: '"The letter Tav means seal, covenant, and complete — it is the final mark, the last word. Yahushua is every one of those things: He became the New Covenant in the flesh, He sealed it with His blood, and on the cross He declared it complete with the words \'It is finished.\'"',
    concept: 'Last Adam — New Covenant',
    connection: 'The Tav is the last letter — the seal at the end. Yahushua is the Last Adam: where the first Adam brought death into creation through disobedience, the Last Adam brought life back through perfect obedience and sacrifice. At the last supper He took the cup and declared that His blood was the seal of a New Covenant. When He said "It is finished" on the cross, He was the final letter completing the word Yahuah had been writing since Genesis.',
    verses: [
      { ref: '1 Corinthians 15:45', text: '"The first man Adam became a living being. The last Adam became a life-giving spirit."' },
      { ref: 'Luke 22:20', text: '"This cup is the new covenant in My blood, which is shed for you." — His own words.' },
      { ref: 'Isaiah 42:6', text: '"I will keep you and give you as a covenant for the people, as a light for the nations." — Yahuah speaking directly to His Messianic Servant.' },
    ],
    studyNotes: [
      { label: 'Study Note — Isaiah 42:6', text: 'The phrase <strong>"give you as a covenant"</strong> means the Servant Himself becomes the covenant — He is not merely the messenger of it, He is the substance of it. This is fulfilled in Yahushua and confirmed in His own words in Luke 22:20 and 1 Corinthians 11:25.' },
    ],
  },
];
