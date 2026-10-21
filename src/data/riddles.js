// riddles 1021 V8.js
// V8 (Sign, Seal, and Mark batch 1021 V2): Riddle 21, The Mark of the Beast — answer
// from the batch; teaser, nudge (Daniel 7:25), chain and next link drafted by Etsy
// and approved by Dutch 1021; next → the study Sign, Seal, and Mark. Its Why It
// Matters carries a bullet list: a `why` entry may itself be a list of strings.
// V7: Strong's numbers dropped from the lines under the verdict on Riddle 4 (Baal) and Riddle 20 (plēroō).
// V6 (Riddles Why It Matters 1019 V1): every tile riddle gains `why` — the short
// companion study ("Why It Matters") shown under the answer, after the verdict.
// Riddle 2 (a page riddle) has its own study, Why the Names Matter, and none here.
// STANDING RULE (Dutch): a riddle is never replaced or removed. New riddles are
// only added, and numbers never change.
// V5 (Etsy Doctrine Riddles 1019 V4): Riddle 20, Fulfilled (a second Torah
// riddle, pair 02). `doctrine` becomes `doctrines: ['NN', …]` — a pair can carry
// several riddles and a riddle can sit under several pairs. Riddles 2 and 3 join
// pair 01 (Sacred Names → 2, 3, 4); pair 02 → 5, 20; pair 08 → 1.
// V4 (Etsy Doctrine Riddles 1019 V3): sixteen doctrine riddles, numbers 4–19 in
// doctrine order, one per Old Paths pair (Pair 08 keeps Riddle 1). New optional
// field `doctrine` ties a riddle to its pair; the Old Paths cards and every
// doctrine page link to the riddle through it. `beneath` is optional.
// V3 (Etsy Riddles Board 1018 V2): Who Is "the Lord"? (/why-the-names-matter)
// joins the board as Riddle 2 — it went live 10/14 beside the standing riddle — so
// Guilty of All moves to 3. One-time renumber while the board was a day old;
// numbers never change again. New `kind`: 'page' riddles live on their own page
// (href + cta, no tiles). Teasers follow Dutch's rule: state only what mainstream
// Christianity teaches, so the reader agrees before the riddle turns it.
// V2 (Etsy Riddles Board 1018 V1): every riddle gains a permanent `number` and a
// `teaser`; One Name, One Father is the STANDING riddle (`standing: true`) — the
// homepage card and /riddle always show it and never rotate. /riddles is now one
// board: one riddle at a time, arrows by number, a numbered list under it.
// V1 (1017): created — the riddle collection, Guilty of All (new) and One Name,
// One Father (moved unchanged from src/pages/riddle.astro).
//
// ================================================================
//   RIDDLES — NEWEST FIRST. Add a new riddle at the TOP with the next `number`.
//   /riddles opens on riddles[0] (newestRiddle). The standing riddle
//   (standingRiddle, the one with `standing: true`) is the homepage card and
//   /riddle, and never rotates. Every riddle keeps its own page at /riddle/<slug>/.
//
//   number        permanent, counted OLDEST first (1, 2, 3 …). Never renumber:
//                 /riddles?n=<number> links depend on it. Must be unique.
//   doctrines     optional — ['NN', …], the two-digit `n` of each pair in
//                 doctrines.data.js ('01' … '17') the riddle belongs to. The Old
//                 Paths card links to every riddle of its pair (by number); both
//                 doctrine pages link to the pair's first riddle. A pair can carry
//                 several riddles; a riddle can sit under several pairs.
//   standing      true on exactly one riddle (One Name, One Father)
//   kind          'riddle' (default) — the three-tile reveal; or 'page' — a riddle
//                 that lives on its own page: it carries `href` (that page) and
//                 `cta` (the board's button text) and has no tiles, nudge, chain,
//                 verdict or next, and gets no /riddle/<slug>/ page
//   slug, title   the page URL and the small eyebrow above the page heading
//   teaser        one or two sentences shown above the tiles and in the board's
//                 numbered list. It states only what mainstream Christianity
//                 teaches; it never names, hints at, or questions the answer
//   line          the homepage corner-card line (shown only for the standing riddle)
//   tiles         three { ref, text } — KJV, with [Yahuah] etc. in brackets
//   nudgeLine     the line above the nudge verse
//   nudge         { ref, text }
//   chain         three [line, ref] — the answer's steps
//   verdict       the answer, large
//   beneath       the line under the verdict (optional; no line when absent)
//   next          { href, label } — the link under the answer
//   why           optional — the "Why It Matters" study under the answer: a list
//                 of paragraphs; *word* sets a transliteration or title in italics;
//                 an entry that is itself a list renders as a bulleted list
//
//   Nothing before the answer may name or hint at it — the tiles' challenge
//   line is the same for every riddle and lives in src/components/Riddle.astro.
// ================================================================

export const riddles = [
  {
    number: 21,
    slug: 'the-mark-of-the-beast',
    title: 'The Mark of the Beast',
    teaser: "Mainstream Christianity teaches that the mark of the beast is a computer chip, a barcode, or a tattoo. It will be forced on the world in the last days.",
    tiles: [
      { ref: 'Exodus 13:9', text: "And it shall be for a sign unto thee upon thine hand, and for a memorial between thine eyes, that the LORD’s [Yahuah’s] law may be in thy mouth: for with a strong hand hath the LORD [Yahuah] brought thee out of Egypt." },
      { ref: '2 Thessalonians 2:7-8', text: "For the mystery of iniquity doth already work: only he who now letteth will let, until he be taken out of the way. And then shall that Wicked be revealed, whom the Lord [Master] shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming:" },
      { ref: 'Revelation 14:9', text: "And the third angel followed them, saying with a loud voice, If any man worship the beast and his image, and receive his mark in his forehead, or in his hand," },
    ],
    nudgeLine: 'Daniel saw what the beast would set out to change.',
    nudge: { ref: 'Daniel 7:25', text: "And he shall speak great words against the most High, and shall wear out the saints of the most High, and think to change times and laws: and they shall be given into his hand until a time and times and the dividing of time." },
    chain: [
      ["Yahuah's Law is worn on the hand and between the eyes.", 'Exodus 13:9'],
      ['Lawlessness is already at work, and the lawless one is coming.', '2 Thessalonians 2:7-8'],
      ["The beast's mark goes in the same two places.", 'Revelation 14:9'],
    ],
    verdict: "Rebellion against Yahuah's law, worn where His Law was meant to be.",
    next: { href: '/blog/sign-seal-and-mark/', label: 'Read the study: Sign, Seal, and Mark' },
    why: [
      "The first clue was not picked at random. When Yahuah placed His Law \"upon thine hand\" and \"between thine eyes,\" He was speaking of a feast. Exodus 13:9 is the command for Hag HaMatzot, the seven days of unleavened bread. The feast and the Law sit together on the hand and the forehead. What a man keeps and what he obeys are worn in the same place.",
      "Daniel saw a power that would come against both. The little horn would \"think to change times and laws\" (Daniel 7:25). The word for times is *zimnin*, the appointed seasons. The word for laws is *dat*, the Law itself. The two things Yahuah bound on the hand and forehead are the two things the beast sets out to change. Paul called this power \"that Wicked,\" the lawless one (2 Thessalonians 2:8), and John saw the beast set his mark where the Law and the feasts belong (Revelation 14:9).",
      "The change did not come by the sword. It came by replacement. Yahuah's appointed times were set aside, and new days were put in their place:",
      [
        "Pesach gave way to Easter, its date cut loose from the Hebrew reckoning at the Council of Nicaea in 325 AD.",
        "The seventh-day Sabbath gave way to Sunday. The Council of Laodicea, around 364 AD, forbade Christians to rest on the Sabbath.",
        "The head of the year moved from Aviv (Exodus 12:2) to January 1, a Roman date.",
        "Yom Teruah, Yom Kippur, and Sukkot dropped out of Christian practice, while Christmas and New Year's Day were added.",
        "Shavuot was renamed and recounted so that it lands in late spring.",
      ],
      "Each one is a piece of the change. No single one of them is the mark. The mark is the whole pattern: Yahuah's times and Law traded for man's. Yahuah calls them \"my feasts\" (Leviticus 23:2), and Yahushua said that \"one jot or one tittle shall in no wise pass from the law\" (Matthew 5:18). Pesach and Easter cannot be worn on the same hand.",
      "This is why the mark is not a chip, a barcode, or a tattoo. It is rebellion against Yahuah's Law, carried in what a man does and what he holds true. Many keep the changed days without knowing where they came from. They inherited them from the pulpit and never checked them against the Book.",
      "Revelation draws the line plainly. The dragon makes war on those who \"keep the commandments of God\" (Revelation 12:17), and the saints at the end are found doing exactly that: \"here are they that keep the commandments of God, and the faith of Yahushua\" (Revelation 14:12). The Law the beast thought to change is the Law the overcomers are still keeping.",
    ],
  },
  {
    number: 20,
    doctrines: ['02'],
    slug: 'fulfilled',
    title: 'Fulfilled',
    teaser: "Mainstream Christianity teaches that Jesus fulfilled the Law, so the Law is finished. What He completed at the cross, the believer no longer has to keep.",
    tiles: [
      { ref: 'Matthew 5:17', text: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil." },
      { ref: 'Romans 8:4', text: "That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit." },
      { ref: 'Romans 13:8', text: "Owe no man any thing, but to love one another: for he that loveth another hath fulfilled the law." },
    ],
    nudgeLine: 'Paul named the law he meant.',
    nudge: { ref: 'Romans 13:9', text: "For this, Thou shalt not commit adultery, Thou shalt not kill, Thou shalt not steal, Thou shalt not bear false witness, Thou shalt not covet; and if there be any other commandment, it is briefly comprehended in this saying, namely, Thou shalt love thy neighbour as thyself." },
    chain: [
      ['He came to fulfil the Law, not to destroy it.', 'Matthew 5:17'],
      ['The same Law is fulfilled in us who walk after the Spirit.', 'Romans 8:4'],
      ['The believer who loves has fulfilled the Law.', 'Romans 13:8'],
    ],
    verdict: 'Fulfilled does not mean finished. The Law He fulfilled is still being fulfilled in everyone who walks it.',
    beneath: 'The verb is the same in all three: plēroō, to fill full.',
    next: { href: '/doctrines/old-paths/walk-after-the-door', label: 'Read the doctrine: The Walk After the Door' },
    why: [
      "The church teaches that Yahushua fulfilled the Law, so the Law is finished. He said, \"I am not come to destroy, but to fulfil\" (Matthew 5:17). Paul uses the same word for believers. \"The righteousness of the law\" is to be \"fulfilled in us, who walk not after the flesh, but after the Spirit\" (Romans 8:4). \"He that loveth another hath fulfilled the law\" (Romans 13:8). If fulfill means end, then every believer who walks in the Spirit ends the Law, and every act of love abolishes it. No one believes that. Fulfill does not mean finish.",
      "The Greek *pleroo* means to fill full, to carry out completely, to give the full measure. Yahushua fulfilled the Law by doing it fully and by showing its full depth. The rest of Matthew 5 does exactly that. Murder reaches to anger. Adultery reaches to the lustful look. The command grew larger in His hands, not smaller. The word He refused was *kataluo*, to loosen down or dissolve, the same word used for the temple stones \"thrown down\" (Matthew 24:2).",
      "The other prop is Romans 10:4, \"Messiah is the end of the law.\" The word is *telos*, goal or aim. Paul uses it the same way in 1 Timothy 1:5: \"the end of the commandment is charity.\" Love is the goal of the commandment, not its funeral. Messiah is where the Law was always aiming.",
      "This matters because Yahushua attached a warning to that very sentence. Whoever breaks \"one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven\" (Matthew 5:19). A teaching that tells people the Law is finished is a teaching that breaks the commandments and teaches men so. He said the Law would stand \"till heaven and earth pass\" (Matthew 5:18), and they are still here.",
      "Revelation identifies the people the dragon makes war against: the remnant \"which keep the commandments of Yahuah, and have the testimony of Yahushua Messiah\" (Revelation 12:17). The Law was fulfilled in them, not finished for them.",
    ],
  },
  {
    number: 19,
    doctrines: ['17'],
    slug: 'the-priesthood',
    title: "The Priesthood",
    teaser: "Mainstream Christianity teaches that pastors and priests stand between God and the people. The clergy carry a calling the people in the pews do not.",
    tiles: [
      { ref: "Exodus 19:6", text: "And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel." },
      { ref: "1 Peter 2:9", text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:" },
      { ref: "Matthew 23:8", text: "But be not ye called Rabbi: for one is your Master, even Christ [Messiah]; and all ye are brethren." },
    ],
    nudgeLine: "Revelation says what He made us.",
    nudge: { ref: "Revelation 1:6", text: "And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen." },
    chain: [
      ["Yahuah called the whole nation a kingdom of priests.", "Exodus 19:6"],
      ["Every believer is a royal priesthood.", "1 Peter 2:9"],
      ["One is your Master, and all are brethren.", "Matthew 23:8"],
    ],
    verdict: "Every believer is a priest. There is one Master, and no clergy class.",
    next: { href: '/doctrines/old-paths/a-kingdom-of-priests', label: "Read the doctrine: A Kingdom of Priests" },
    why: [
      "The church teaches that pastors and priests stand between God and the people, carrying a calling the pews do not. At Sinai Yahuah called the whole nation \"a kingdom of priests, and an holy nation\" (Exodus 19:6). Peter applies those words to every believer: \"ye are a chosen generation, a royal priesthood, an holy nation\" (1 Peter 2:9). Yahushua forbade the rank outright: \"be not ye called Rabbi: for one is your Master, even Messiah; and all ye are brethren\" (Matthew 23:8). One Master. Everyone else is a brother.",
      "Paul names the only one who stands between: \"one mediator between God and men, the man Messiah Yahushua\" (1 Timothy 2:5). Note that he calls Him \"the man.\" The veil of the Holy Place was torn at His death (Matthew 27:51), opening priestly access to the believer. Yahushua alone, as High Priest, entered the Most Holy by His own blood (Hebrews 9:11-12). There is no room left for a second tier.",
      "The words \"clergy\" and \"laity\" show the turn. Peter warned elders not to be \"lords over God's heritage\" (1 Peter 5:3). \"Heritage\" is *kleros*, and in that verse the *kleros* is the flock. The church later took that word for its officials, the clergy, and used *laos*, \"people,\" for everyone else, the laity. By around 110, Ignatius of Antioch was urging that nothing be done without the bishop. A ruling class grew from there.",
      "This matters because a priestly class becomes a gatekeeper. When only the clergy are thought fit to handle Scripture, the people stop studying it and receive whatever they are handed. The Bereans did the opposite. They \"searched the scriptures daily, whether those things were so,\" even after hearing Paul (Acts 17:11). A kingdom of priests reads for itself.",
      "Revelation gives the same title to all the redeemed, not to a few. Messiah \"hath made us kings and priests\" (Revelation 1:6). The song before the throne repeats it for every people redeemed by the blood: \"out of every kindred, and tongue, and people, and nation; and hast made us unto our God kings and priests\" (Revelation 5:9-10).",
    ],
  },
  {
    number: 18,
    doctrines: ['16'],
    slug: 'the-serpent-on-the-pole',
    title: "The Serpent on the Pole",
    teaser: "Mainstream Christianity teaches that crosses, crucifixes, and pictures of Jesus are aids to worship. The command against images was about pagan idols, not Christian art.",
    tiles: [
      { ref: "Deuteronomy 4:15-16", text: "Take ye therefore good heed unto yourselves; for ye saw no manner of similitude on the day that the LORD [Yahuah] spake unto you in Horeb out of the midst of the fire: Lest ye corrupt yourselves, and make you a graven image, the similitude of any figure, the likeness of male or female," },
      { ref: "Numbers 21:8", text: "And the LORD [Yahuah] said unto Moses, Make thee a fiery serpent, and set it upon a pole: and it shall come to pass, that every one that is bitten, when he looketh upon it, shall live." },
      { ref: "2 Kings 18:4", text: "He removed the high places, and brake the images, and cut down the groves, and brake in pieces the brasen serpent that Moses had made: for unto those days the children of Israel did burn incense to it: and he called it Nehushtan." },
    ],
    nudgeLine: "Yahushua said what the serpent pictured.",
    nudge: { ref: "John 3:14", text: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:" },
    chain: [
      ["Yahuah showed no form, so none would be made.", "Deuteronomy 4:15-16"],
      ["Yahuah Himself ordered the serpent made.", "Numbers 21:8"],
      ["Israel burned incense to it, and Hezekiah broke it.", "2 Kings 18:4"],
    ],
    verdict: "If the image Yahuah ordered became an idol, the images men make will too.",
    next: { href: '/doctrines/old-paths/no-manner-of-similitude', label: "Read the doctrine: No Manner of Similitude" },
    why: [
      "The church teaches that crosses, crucifixes, and pictures of Jesus are aids to worship, and that the image commandment was only about pagan idols. Moses gave the reason for the command: \"ye saw no manner of similitude on the day that Yahuah spake unto you... lest ye corrupt yourselves, and make you a graven image\" (Deuteronomy 4:15-16). The ban was on images of Yahuah Himself, not only pagan gods. Then came the hard case. Yahuah commanded Moses to make a serpent of brass and set it on a pole, so the bitten could look and live (Numbers 21:8). Seven centuries later, Hezekiah \"brake in pieces the brasen serpent that Moses had made: for unto those days the children of Israel did burn incense to it\" (2 Kings 18:4). He called it *Nehushtan*, a piece of brass. Scripture praises him for it.",
      "If an image Yahuah Himself commanded became an idol once people began to honor it, then images He never commanded stand on worse ground.",
      "The early assemblies resisted images. The Council of Elvira, around 305, ruled that pictures should not be placed in churches, lest what is worshipped be painted on walls. Five centuries later the Second Council of Nicaea (787) reversed course and approved the veneration of icons. The crucifix, the statue, and the painted face followed.",
      "This matters for two reasons. First, no one knows what Yahushua looked like. Scripture gives no description, and Isaiah says He had \"no form nor comeliness\" to draw the eye (Isaiah 53:2). Every picture is an artist's invention set before worshippers. Second, Yahushua used the serpent as a sign of belief, not an object to keep. \"As Moses lifted up the serpent... even so must the Son of man be lifted up: that whosoever believeth in him should... have eternal life\" (John 3:14-15). The healing came by trusting Yahuah's word, never by the brass. John's last line to the assembly is \"keep yourselves from idols\" (1 John 5:21).",
      "Revelation's final test of worship centers on an image. The world is told to \"make an image to the beast\" and worship it (Revelation 13:14-15). The people who refuse are the people who learned the second commandment and kept it.",
    ],
  },
  {
    number: 17,
    doctrines: ['15'],
    slug: 'the-book-of-life',
    title: "The Book of Life",
    teaser: "Reformed Christianity teaches that God chose before the world began who would be saved and who would be lost. Your eternal destiny was fixed before you were born.",
    tiles: [
      { ref: "Deuteronomy 30:19", text: "I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live:" },
      { ref: "Exodus 32:33", text: "And the LORD [Yahuah] said unto Moses, Whosoever hath sinned against me, him will I blot out of my book." },
      { ref: "Revelation 3:5", text: "He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels." },
    ],
    nudgeLine: "Peter said what He is willing.",
    nudge: { ref: "2 Peter 3:9", text: "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance." },
    chain: [
      ["Every man is told to choose.", "Deuteronomy 30:19"],
      ["A name can be blotted out of His book.", "Exodus 32:33"],
      ["Only the overcomer is promised his name stays.", "Revelation 3:5"],
    ],
    verdict: "A name that can be blotted out was never fixed.",
    next: { href: '/doctrines/old-paths/choose-life', label: "Read the doctrine: Choose Life" },
    why: [
      "Reformed teaching holds that Elohim chose, before the world began, who would be saved and who would be lost. Moses set a choice before Israel: \"I have set before you life and death... therefore choose life\" (Deuteronomy 30:19). A choice already made by someone else is no choice. Yahuah told Moses, \"Whosoever hath sinned against me, him will I blot out of my book\" (Exodus 32:33). And Yahushua promises the overcomer, \"I will not blot out his name out of the book of life\" (Revelation 3:5). Names can be written and names can be removed. The outcome is not sealed at birth.",
      "Scripture states Yahuah's desire plainly. He has \"no pleasure in the death of him that dieth: wherefore turn yourselves, and live\" (Ezekiel 18:32). He is \"not willing that any should perish, but that all should come to repentance\" (2 Peter 3:9). He \"will have all men to be saved\" (1 Timothy 2:4). A Judge who fixed the verdicts in advance would not plead with the accused to turn.",
      "The verse most often cited is Ephesians 1:4: \"he hath chosen us in him before the foundation of the world.\" The choosing is \"in him.\" Yahuah chose the way and the Son through whom it would come. Whoever enters Him is in the chosen one. The plan was fixed. The passengers were not.",
      "The doctrine was built by Augustine in his later writings, taken up by John Calvin, and fixed by the Synod of Dort in 1618-1619. Its five points were later summed up under the name TULIP.",
      "This matters because fatalism kills repentance. If the outcome is already decided, the call to turn is theater and the warnings are empty. It also makes Yahuah the author of the lost man's ruin, which Scripture never allows. James says no man should say he is tempted of Elohim (James 1:13). Even less should he say he was damned by Him before he drew breath.",
      "Revelation closes with an open door: \"whosoever will, let him take the water of life freely\" (Revelation 22:17). The invitation is to whosoever, and it is the last one in the Book.",
    ],
  },
  {
    number: 16,
    doctrines: ['14'],
    slug: 'the-morning-star',
    title: "The Morning Star",
    teaser: "Mainstream Christianity teaches that Lucifer was a high angel who fell from heaven and became Satan. Isaiah 14 tells his story.",
    tiles: [
      { ref: "Isaiah 14:4", text: "That thou shalt take up this proverb against the king of Babylon, and say, How hath the oppressor ceased! the golden city ceased!" },
      { ref: "Isaiah 14:11", text: "Thy pomp is brought down to the grave, and the noise of thy viols: the worm is spread under thee, and the worms cover thee." },
      { ref: "Isaiah 14:16", text: "They that see thee shall narrowly look upon thee, and consider thee, saying, Is this the man that made the earth to tremble, that did shake kingdoms;" },
    ],
    nudgeLine: "Ezekiel wrote the same song over another king.",
    nudge: { ref: "Ezekiel 28:2", text: "Son of man, say unto the prince of Tyrus, Thus saith the Lord GOD [Yahuah]; Because thine heart is lifted up, and thou hast said, I am a God, I sit in the seat of God, in the midst of the seas; yet thou art a man, and not God, though thou set thine heart as the heart of God:" },
    chain: [
      ["It is a proverb against the king of Babylon.", "Isaiah 14:4"],
      ["Worms cover him in the grave.", "Isaiah 14:11"],
      ["The onlookers call him a man.", "Isaiah 14:16"],
    ],
    verdict: "Isaiah 14 is about a man: the king of Babylon.",
    next: { href: '/doctrines/old-paths/a-proverb-against-babylon', label: "Read the doctrine: A Proverb Against the King of Babylon" },
    why: [
      "The church teaches that Lucifer was a high angel who fell and became Satan, and that Isaiah 14 tells his story. Isaiah names the subject in the opening line: \"take up this proverb against the king of Babylon\" (Isaiah 14:4). His end is a grave: \"thy pomp is brought down to the grave... the worm is spread under thee, and the worms cover thee\" (Isaiah 14:11). And the onlookers ask, \"Is this the man that made the earth to tremble?\" (Isaiah 14:16). A king, a grave, worms, a man. No angel appears in the chapter.",
      "The Hebrew in verse 12 is *heylel*, \"shining one,\" a taunt at the king who called himself a star. It is not a proper name. \"Lucifer\" came from Jerome's Latin Vulgate around 400, where *lucifer*, \"light-bearer,\" was the Latin word for the morning star. The KJV kept the Latin word as if it were a name. Earlier church writers such as Origen had already read the chapter as the fall of the adversary. Ezekiel 28 is read the same way, yet it addresses the prince of Tyre and twice calls him \"a man, and not God\" (Ezekiel 28:2, 9).",
      "The adversary is real in Scripture. Isaiah 14 simply is not his biography. The sin it describes is the pride of a king: \"I will ascend into heaven... I will be like the most High\" (Isaiah 14:13-14). That is Babylon's sin in every age, from Babel to the great city of Revelation.",
      "This matters because the popular reading takes Messiah's title and gives it to the enemy. Peter calls the coming light \"the day star\" (2 Peter 1:19), *phosphoros*, the light-bearer. Yahushua carries the light of His Father. He is not its source, but its bearer, the lamp that carries Yahuah's light. The Lucifer legend turns the light-bearer into the devil's name. Meanwhile the real warning of Isaiah 14, against proud men who claim the place of the Most High, is lost in a story about angels.",
      "Revelation hands the title back to its owner: \"I Yahushua... am the root and the offspring of David, and the bright and morning star\" (Revelation 22:16). And it ends Babylon exactly as Isaiah did: \"Babylon the great is fallen, is fallen\" (Revelation 18:2).",
    ],
  },
  {
    number: 15,
    doctrines: ['13'],
    slug: 'counted-righteous',
    title: "Counted Righteous",
    teaser: "Mainstream Christianity teaches that Christ's righteousness is credited to the believer's account. When God looks at you, He sees Jesus' obedience instead of yours.",
    tiles: [
      { ref: "Deuteronomy 6:25", text: "And it shall be our righteousness, if we observe to do all these commandments before the LORD [Yahuah] our God, as he hath commanded us." },
      { ref: "Ezekiel 18:20", text: "The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son: the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him." },
      { ref: "1 John 3:7", text: "Little children, let no man deceive you: he that doeth righteousness is righteous, even as he is righteous." },
    ],
    nudgeLine: "Revelation says what the bride wears.",
    nudge: { ref: "Revelation 19:8", text: "And to her was granted that she should be arrayed in fine linen, clean and white: for the fine linen is the righteousness of saints." },
    chain: [
      ["Doing the commandments \"shall be our righteousness.\"", "Deuteronomy 6:25"],
      ["The righteousness of the righteous is upon him.", "Ezekiel 18:20"],
      ["He that does righteousness is righteous.", "1 John 3:7"],
    ],
    verdict: "Righteousness is walked, not transferred.",
    next: { href: '/doctrines/old-paths/it-shall-be-our-righteousness', label: "Read the doctrine: It Shall Be Our Righteousness" },
    why: [
      "The church teaches that Messiah's righteousness is credited to the believer's account, so that Yahuah sees His obedience instead of theirs. Moses defined righteousness as something done: \"it shall be our righteousness, if we observe to do all these commandments\" (Deuteronomy 6:25). Ezekiel forbids transfer in either direction: \"the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him\" (Ezekiel 18:20). John warns, \"let no man deceive you: he that doeth righteousness is righteous\" (1 John 3:7). He even says \"let no man deceive you\" first, as if he saw the teaching coming.",
      "Two things must be kept distinct. Belief is counted for righteousness at entry. Abraham \"believed God, and it was counted unto him for righteousness\" (Romans 4:3). The blood pays the debt \"for the remission of sins that are past\" (Romans 3:25). That is pardon, and it is free. What Scripture does not teach is that Messiah's lifetime of obedience is then laid over the believer's life like a covering, so that his own conduct no longer counts. Forgiveness of the past is not a substitute for the walk ahead.",
      "The covering doctrine came out of the Reformation. Reformed teachers spoke of the \"active obedience\" of Messiah imputed to believers. The Westminster Confession (1646) set it in writing. Its own critics have long called it a legal fiction: Yahuah declaring true what He knows is not.",
      "This matters because it makes the believer's conduct invisible. If Yahuah sees only the Son's obedience, nothing the believer does or fails to do changes the record. Scripture says the opposite at every judgment scene. The dead are judged \"according to their works\" (Revelation 20:12). The returning Messiah brings His reward \"to give every man according as his work shall be\" (Revelation 22:12).",
      "Revelation also shows what the bride wears. To her \"was granted that she should be arrayed in fine linen, clean and white: for the fine linen is the righteousness of saints\" (Revelation 19:8). The Greek is *dikaiomata*, righteous acts. The garment is granted by favor, and it is woven from her own deeds.",
    ],
  },
  {
    number: 14,
    doctrines: ['12'],
    slug: 'the-olive-tree',
    title: "The Olive Tree",
    teaser: "Mainstream Christianity teaches that God has two peoples: Israel under the Law and the Church under grace. Each has its own plan and its own promises.",
    tiles: [
      { ref: "Numbers 15:16", text: "One law and one manner shall be for you, and for the stranger that sojourneth with you." },
      { ref: "Romans 11:17", text: "And if some of the branches be broken off, and thou, being a wild olive tree, wert graffed in among them, and with them partakest of the root and fatness of the olive tree;" },
      { ref: "Ephesians 2:19", text: "Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God;" },
    ],
    nudgeLine: "Yahushua counted the folds.",
    nudge: { ref: "John 10:16", text: "And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd." },
    chain: [
      ["One law for the homeborn and the stranger.", "Numbers 15:16"],
      ["Wild branches are grafted into the same tree.", "Romans 11:17"],
      ["Gentiles are fellowcitizens, not strangers.", "Ephesians 2:19"],
    ],
    verdict: "One tree, one people, one law.",
    next: { href: '/doctrines/old-paths/one-olive-tree', label: "Read the doctrine: One Olive Tree" },
    why: [
      "The church teaches that Elohim has two peoples, Israel under the Law and the church under grace, each with its own plan. Moses gave one rule: \"One law and one manner shall be for you, and for the stranger that sojourneth with you\" (Numbers 15:16; see also Exodus 12:49). Paul says the Gentile believer is a wild branch \"graffed in among them,\" sharing \"the root and fatness of the olive tree\" (Romans 11:17). And he says they are \"no more strangers and foreigners, but fellowcitizens with the saints\" (Ephesians 2:19). One tree, one household, one law.",
      "Jeremiah names the tree: Yahuah called Israel \"a green olive tree, fair, and of goodly fruit\" (Jeremiah 11:16). Paul tells Gentiles they were once \"aliens from the commonwealth of Israel\" (Ephesians 2:12), so being brought near means joining that commonwealth, not starting a second one. Those who belong to Messiah are \"Abraham's seed, and heirs according to the promise\" (Galatians 3:29), heirs through the one Seed, who is Messiah (Galatians 3:16).",
      "The two-peoples system is young. John Nelson Darby developed it in the 1830s, and the Scofield Reference Bible (1909) carried it into American seminaries and pulpits. Its mirror image, \"replacement theology,\" says the church replaced Israel. Both make two trees. Paul planted one. The branch is grafted in. It neither replaces the tree nor grows beside it.",
      "This matters because the two-peoples teaching hands the Gentile believer a separate rulebook. The commandments become \"Jewish\" and are set aside, while the promises are kept. But a grafted branch lives on the same root and bears the same fruit. Paul warns the branch, \"thou bearest not the root, but the root thee\" (Romans 11:18). A Gentile who cuts himself off from Israel's Law cuts himself off from the sap that feeds him.",
      "Revelation's city has twelve gates, and on them \"the names of the twelve tribes of the children of Israel\" (Revelation 21:12). Its foundations carry the names of the twelve apostles (Revelation 21:14). There is no thirteenth gate for a second people.",
    ],
  },
  {
    number: 13,
    doctrines: ['11'],
    slug: 'faith-alone',
    title: "Faith Alone",
    teaser: "Mainstream Christianity teaches that we are saved by faith alone. The moment you believe, your salvation is complete.",
    tiles: [
      { ref: "Romans 5:9-10", text: "Much more then, being now justified by his blood, we shall be saved from wrath through him. For if, when we were enemies, we were reconciled to God by the death of his Son, much more, being reconciled, we shall be saved by his life." },
      { ref: "James 2:24", text: "Ye see then how that by works a man is justified, and not by faith only." },
      { ref: "Matthew 24:13", text: "But he that shall endure unto the end, the same shall be saved." },
    ],
    nudgeLine: "Melchizedek set the table in this order.",
    nudge: { ref: "Genesis 14:18", text: "And Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God." },
    chain: [
      ["Justified by His blood now; saved by His life still to come.", "Romans 5:9-10"],
      ["The only time Scripture says \"faith only,\" it says not by it.", "James 2:24"],
      ["He that endures to the end shall be saved.", "Matthew 24:13"],
    ],
    verdict: "Deliverance begins at the blood and finishes in the walk.",
    next: { href: '/doctrines/old-paths/wine-and-the-bread', label: "Read the doctrine: The Wine and the Bread" },
    why: [
      "The church teaches that belief alone saves, and that deliverance is complete the moment one believes. Paul lays out two stages in two verses. \"Being now justified by his blood, we shall be saved from wrath through him\" (Romans 5:9). \"Being reconciled... by the death of his Son, we shall be saved by his life\" (Romans 5:10). Justified now, saved later. James is the only writer who uses the phrase \"faith only,\" and he denies it: \"by works a man is justified, and not by faith only\" (James 2:24). Yahushua puts the finish line at the end: \"he that shall endure unto the end, the same shall be saved\" (Matthew 24:13).",
      "Entry is by the blood, freely, apart from works. \"By grace are ye saved through faith... not of works\" (Ephesians 2:8-9). The very next verse gives the purpose: \"created in Messiah Yahushua unto good works\" (Ephesians 2:10). Scripture speaks of deliverance in three tenses: begun (Ephesians 2:8), being worked out \"with fear and trembling\" (Philippians 2:12), and \"ready to be revealed in the last time\" (1 Peter 1:5).",
      "The word \"alone\" was added. In his 1522 German New Testament, Martin Luther inserted *allein* (\"alone\") into Romans 3:28. The Greek has no such word. In the same year he called James \"an epistle of straw.\" He was answering Rome's system of purchased merit, and he swung to the other ditch.",
      "This matters because \"once saved, always saved\" makes endurance meaningless and warnings empty. Hebrews says we are partakers of Messiah \"if we hold the beginning of our confidence stedfast unto the end\" (Hebrews 3:14). The blood opens the door. The walk, in the commandments, carries the believer through it. Cut the second stage off, and the first is turned into a ticket instead of a beginning.",
      "Every one of the seven letters in Revelation ends with the same condition: \"to him that overcometh\" (Revelation 2:7, 11, 17, 26; 3:5, 12, 21). And to Smyrna: \"be thou faithful unto death, and I will give thee a crown of life\" (Revelation 2:10).",
    ],
  },
  {
    number: 12,
    doctrines: ['10'],
    slug: 'the-feasts',
    title: "The Feasts",
    teaser: "Mainstream Christianity teaches that the feasts were Jewish holidays, fulfilled and finished in Christ. The church has its own holy days now.",
    tiles: [
      { ref: "Leviticus 23:2", text: "Speak unto the children of Israel, and say unto them, Concerning the feasts of the LORD [Yahuah], which ye shall proclaim to be holy convocations, even these are my feasts." },
      { ref: "1 Corinthians 5:8", text: "Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth." },
      { ref: "Zechariah 14:16", text: "And it shall come to pass, that every one that is left of all the nations which came against Jerusalem shall even go up from year to year to worship the King, the LORD [Yahuah] of hosts, and to keep the feast of tabernacles." },
    ],
    nudgeLine: "The lights were hung for them on the fourth day.",
    nudge: { ref: "Genesis 1:14", text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:" },
    chain: [
      ["Yahuah calls them \"my feasts.\"", "Leviticus 23:2"],
      ["Paul told Gentile believers, \"let us keep the feast.\"", "1 Corinthians 5:8"],
      ["The nations keep Sukkot after His coming.", "Zechariah 14:16"],
    ],
    verdict: "The feasts are Yahuah's, and they still stand.",
    next: { href: '/doctrines/old-paths/signs-and-seasons', label: "Read the doctrine: Signs and Seasons" },
    why: [
      "The church teaches that the feasts were Jewish holidays, fulfilled and finished, and that the church now has its own days. Leviticus names the owner: \"the feasts of Yahuah... even these are my feasts\" (Leviticus 23:2). Paul, writing after the resurrection to a Gentile assembly in Corinth, says \"let us keep the feast\" (1 Corinthians 5:8), meaning Hag HaMatzot. And Zechariah sees the nations going up year by year \"to keep the feast of tabernacles\" (Zechariah 14:16). The feasts are Yahuah's, the Gentile assembly kept them, and the prophets see the nations keeping them still.",
      "The appointed times are older than Israel. On the fourth day Yahuah set the lights \"for signs, and for seasons\" (Genesis 1:14). The word for seasons is *moedim*, the same word Leviticus 23 uses for the feasts. They are written into the sky.",
      "\"Fulfilled\" does not mean finished. Paul calls the feasts and Sabbaths \"a shadow of things to come\" (Colossians 2:17). He wrote that after the cross, in the present tense. A shadow of things still to come cannot be retired.",
      "The separation came by decree. At Nicaea in 325, Constantine's council moved the Easter reckoning away from Pesach, urging the church to have nothing in common with the Jews. The Council of Laodicea, around 363, forbade believers to rest on the Sabbath. Christmas and Easter filled the space.",
      "This matters because the feasts tell the plan in order. Pesach is the Lamb. Hag HaMatzot is a life cleansed of leaven. Bikkurim is the firstfruits from the grave. Shavuot is the giving of the Law and the Spirit. Yom Teruah, Yom Kippur, and Sukkot point to the return, the judgment, and Yahuah dwelling with His people. Exchange them for holidays Scripture never names, and the calendar stops preaching.",
      "Revelation shows a great multitude before the throne \"with palms in their hands\" (Revelation 7:9). Palm branches belong to Sukkot (Leviticus 23:40). The last feast is still being kept.",
    ],
  },
  {
    number: 11,
    doctrines: ['09'],
    slug: 'clean-and-unclean',
    title: "Clean and Unclean",
    teaser: "Mainstream Christianity teaches that the food laws were for the Jews and ended at the cross. Peter's vision declared every animal clean to eat.",
    tiles: [
      { ref: "Genesis 7:2", text: "Of every clean beast thou shalt take to thee by sevens, the male and his female: and of beasts that are not clean by two, the male and his female." },
      { ref: "Acts 10:28", text: "And he said unto them, Ye know how that it is an unlawful thing for a man that is a Jew to keep company, or come unto one of another nation; but God hath shewed me that I should not call any man common or unclean." },
      { ref: "Isaiah 66:17", text: "They that sanctify themselves, and purify themselves in the gardens behind one tree in the midst, eating swine’s flesh, and the abomination, and the mouse, shall be consumed together, saith the LORD [Yahuah]." },
    ],
    nudgeLine: "Peter said it years after the cross.",
    nudge: { ref: "Acts 10:14", text: "But Peter said, Not so, Lord; for I have never eaten any thing that is common or unclean." },
    chain: [
      ["Noah knew clean from unclean before there was a Jew.", "Genesis 7:2"],
      ["Peter said the vision was about men.", "Acts 10:28"],
      ["At His coming, swine eaters are consumed.", "Isaiah 66:17"],
    ],
    verdict: "Clean and unclean was never Jewish, and it never ended.",
    next: { href: '/doctrines/old-paths/ye-shall-be-holy', label: "Read the doctrine: Ye Shall Be Holy" },
    why: [
      "The church teaches that the food laws were for the Jews and that Peter's vision ended them. Noah took clean beasts \"by sevens\" and unclean \"by two\" (Genesis 7:2). That was centuries before Abraham, Moses, or a single Jew. Peter explained his own vision: \"God hath shewed me that I should not call any man common or unclean\" (Acts 10:28). The vision was about men, not menus. Isaiah sees those \"eating swine's flesh, and the abomination, and the mouse\" consumed \"together\" at Yahuah's coming (Isaiah 66:17). The line between clean and unclean was drawn before Israel, never moved by Peter, and still stands at the end.",
      "Peter's own words in the vision tell the story. Years after the resurrection he said, \"I have never eaten any thing that is common or unclean\" (Acts 10:14). He had walked with Yahushua for three and a half years. He never heard Him end the food laws.",
      "The other verse used is Mark 7:19. The KJV reads \"purging all meats.\" Several modern versions add, in parentheses, that He \"declared all foods clean.\" That line is the translators' comment, not a word of the text. The subject of Mark 7 is unwashed hands, a tradition of the elders, not unclean animals. And the Greek *broma* means food, which in Scripture means what Yahuah called food in the first place. Paul agrees: food is \"sanctified by the word of God\" (1 Timothy 4:5). That word is Leviticus 11.",
      "This matters because holiness was first taught at the table. \"Ye shall therefore be holy, for I am holy\" closes the food chapter (Leviticus 11:44-45). Peter quotes that very line to believers (1 Peter 1:16). The command did not change when it crossed into the New Testament. A teaching that throws out the line teaches the believer that holiness has no daily shape.",
      "Revelation keeps the category to the last. Fallen Babylon becomes \"the hold of every foul spirit, and a cage of every unclean and hateful bird\" (Revelation 18:2). Unclean still means unclean.",
    ],
  },
  {
    number: 10,
    doctrines: ['07'],
    slug: 'the-inheritance',
    title: "The Inheritance",
    teaser: "Mainstream Christianity teaches that believers go to heaven when they die. Heaven is the home where they will live forever.",
    tiles: [
      { ref: "Psalm 115:16", text: "The heaven, even the heavens, are the LORD [Yahuah]’s: but the earth hath he given to the children of men." },
      { ref: "Matthew 5:5", text: "Blessed are the meek: for they shall inherit the earth." },
      { ref: "John 3:13", text: "And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven." },
    ],
    nudgeLine: "The redeemed say where they will reign.",
    nudge: { ref: "Revelation 5:10", text: "And hast made us unto our God kings and priests: and we shall reign on the earth." },
    chain: [
      ["The heavens are Yahuah's; the earth He gave to men.", "Psalm 115:16"],
      ["The meek inherit the earth.", "Matthew 5:5"],
      ["No man has ascended to heaven.", "John 3:13"],
    ],
    verdict: "The inheritance is the earth, received at the resurrection.",
    next: { href: '/doctrines/old-paths/inheritance-is-the-earth', label: "Read the doctrine: The Inheritance Is the Earth" },
    why: [
      "The church teaches that believers go to heaven when they die and live there forever. The Psalm settles the property lines: \"The heaven, even the heavens, are Yahuah's: but the earth hath he given to the children of men\" (Psalm 115:16). Yahushua named the inheritance: \"the meek... shall inherit the earth\" (Matthew 5:5), quoting Psalm 37:11. And He said plainly, \"no man hath ascended up to heaven\" (John 3:13). Peter added that David \"is not ascended into the heavens\" (Acts 2:34). The promise is the earth, and no one has gone up to collect a different one.",
      "The promise began with Abraham. Yahuah gave him the land \"for ever\" (Genesis 13:15), yet he died \"not having received the promises\" (Hebrews 11:13). Paul calls him \"heir of the world\" (Romans 4:13). A promise of land that was never received is a promise still waiting. It waits for the resurrection, not for a death that sends the soul elsewhere.",
      "The heaven-at-death teaching rests on the immortal soul (see Riddle 8). Greek thought taught the soul's escape from the material world. The church carried that hope into its hymns and funerals, and \"going home to glory\" replaced the Hebrew hope of the restored earth.",
      "This matters because the Law itself is built around inheritance. The Jubilee returned every man to his land (Leviticus 25:10). It restored what was lost and cancelled what was owed. That is the shape of the hope. When the believer's future is moved to the clouds, the earth becomes disposable, the Jubilee becomes a curiosity, and the resurrection becomes a footnote. Scripture runs the other way. Creation itself waits to be \"delivered from the bondage of corruption\" (Romans 8:21).",
      "Revelation does not send the redeemed up. It brings the city down. John saw \"a new heaven and a new earth,\" and the holy city \"coming down from God out of heaven,\" and heard that \"the tabernacle of God is with men, and he will dwell with them\" (Revelation 21:1-3). The inheritance is restored on earth.",
    ],
  },
  {
    number: 9,
    doctrines: ['06'],
    slug: 'the-beast-and-the-plagues',
    title: "The Beast and the Plagues",
    teaser: "Mainstream Christianity teaches that Revelation is a coded book of end-time events. Its beasts and plagues are decoded from the headlines.",
    tiles: [
      { ref: "Revelation 13:2", text: "And the beast which I saw was like unto a leopard, and his feet were as the feet of a bear, and his mouth as the mouth of a lion: and the dragon gave him his power, and his seat, and great authority." },
      { ref: "Daniel 7:17", text: "These great beasts, which are four, are four kings, which shall arise out of the earth." },
      { ref: "Exodus 7:20", text: "And Moses and Aaron did so, as the LORD [Yahuah] commanded; and he lifted up the rod, and smote the waters that were in the river, in the sight of Pharaoh, and in the sight of his servants; and all the waters that were in the river were turned to blood." },
    ],
    nudgeLine: "John saw the same water turn.",
    nudge: { ref: "Revelation 16:3", text: "And the second angel poured out his vial upon the sea; and it became as the blood of a dead man: and every living soul died in the sea." },
    chain: [
      ["The beast is built of a leopard, a bear, and a lion.", "Revelation 13:2"],
      ["Daniel already named those beasts as kings.", "Daniel 7:17"],
      ["Water to blood is Egypt's plague.", "Exodus 7:20"],
    ],
    verdict: "Revelation is decoded by the Law and the Prophets, not the newspaper.",
    next: { href: '/doctrines/old-paths/the-book-quotes', label: "Read the doctrine: The Book Quotes" },
    why: [
      "The church teaches that Revelation is a coded book of end-time events, decoded from the headlines. John's beast is \"like unto a leopard,\" with the feet \"of a bear\" and the mouth \"of a lion\" (Revelation 13:2). Those are Daniel's beasts, and Daniel says what they are: \"These great beasts... are four kings\" (Daniel 7:17). Revelation's sea and rivers turned to blood (Revelation 8:8; 16:3-4) are Egypt's first plague: \"all the waters that were in the river were turned to blood\" (Exodus 7:20). The key to Revelation is the Old Testament, not the evening news.",
      "John says the book was \"signified\" (Revelation 1:1), set forth in signs. Those signs are drawn from Moses and the prophets on nearly every page: lampstands, the tree of life, the ark, the plagues, Babylon, the beasts. A reader who knows Daniel and Exodus can read Revelation. A reader who knows only the newspaper will be rewriting his chart every ten years.",
      "The newspaper method has a history. The Reformers read the beast as a power already standing on the stage of history. In 1590 the Jesuit Francisco Ribera pushed the beast into a distant future, away from the Rome of his own day. John Nelson Darby and the Scofield Reference Bible spread that futurism in the 1800s and early 1900s. Hal Lindsey's *The Late Great Planet Earth* (1970) tied it to current events.",
      "This matters for two reasons. Every failed headline prediction makes a fresh crop of scoffers. Worse, a beast placed in the future is a beast no one watches in the present. Revelation was written to be kept, not merely decoded: \"Blessed is he that readeth... and keep those things which are written therein\" (Revelation 1:3).",
      "The Exodus pattern ends Revelation's story as it ended Egypt's. The plagues fell on Egypt while Israel was set apart in Goshen (Exodus 8:22). The overcomers in Revelation stand by the sea and sing \"the song of Moses the servant of God, and the song of the Lamb\" (Revelation 15:3). The book is the Exodus told again, for the whole earth.",
    ],
  },
  {
    number: 8,
    doctrines: ['05'],
    slug: 'the-living-soul',
    title: "The Living Soul",
    teaser: "Mainstream Christianity teaches that every person has an immortal soul. At death the soul lives on, fully conscious, in heaven or in hell.",
    tiles: [
      { ref: "Genesis 2:7", text: "And the LORD [Yahuah] God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul." },
      { ref: "Ezekiel 18:4", text: "Behold, all souls are mine; as the soul of the father, so also the soul of the son is mine: the soul that sinneth, it shall die." },
      { ref: "1 Timothy 6:16", text: "Who only hath immortality, dwelling in the light which no man can approach unto; whom no man hath seen, nor can see: to whom be honour and power everlasting. Amen." },
    ],
    nudgeLine: "Paul said when immortality is put on.",
    nudge: { ref: "1 Corinthians 15:53", text: "For this corruptible must put on incorruption, and this mortal must put on immortality." },
    chain: [
      ["Man became a living soul; he was not handed one.", "Genesis 2:7"],
      ["The soul that sins dies.", "Ezekiel 18:4"],
      ["Only He has immortality.", "1 Timothy 6:16"],
    ],
    verdict: "Man is mortal. Immortality is given at the resurrection.",
    next: { href: '/doctrines/old-paths/became-a-living-soul', label: "Read the doctrine: He Became a Living Soul" },
    why: [
      "The church teaches that every person has an immortal soul that lives on, conscious, after death. Genesis 2:7 says man \"became a living soul.\" Dust plus the breath of life equals a soul. Man does not have a soul; he is one. The same Hebrew phrase, *nephesh chayyah*, describes the animals in Genesis 1:24, translated \"living creature.\" Ezekiel 18:4 says \"the soul that sinneth, it shall die.\" Paul says Yahuah \"only hath immortality\" (1 Timothy 6:16). If immortality belongs to Him only, no man carries it by nature.",
      "Scripture describes death as sleep and silence. \"The dead know not any thing\" (Ecclesiastes 9:5). When breath goes, man \"returneth to his earth; in that very day his thoughts perish\" (Psalm 146:4). The spirit that returns to Elohim (Ecclesiastes 12:7) is *ruach*, the breath He lent, not a conscious person floating free.",
      "The immortal soul came from Plato. In the *Phaedo* he taught that the soul is trapped in the body and set free at death. Church writers trained in Greek thought carried the idea in. The Fifth Lateran Council made it binding dogma in 1513. The doctrine was decided by a council, not found in a text.",
      "This matters because it empties the resurrection. If the dead are already in glory, raising the body is an afterthought. Paul argued the reverse: if there is no resurrection, \"they also which are fallen asleep in Messiah are perished\" (1 Corinthians 15:18). Immortality is \"put on\" at the resurrection (1 Corinthians 15:53), and Paul tells believers to seek it (Romans 2:7). No one seeks what he already owns. The doctrine also opened the door to prayers to the dead and to saints, which the Law forbids (Deuteronomy 18:11). It feeds the teaching of endless torment as well (see Riddle 7).",
      "Revelation places the dead where Scripture always placed them, waiting. \"The sea gave up the dead which were in it; and death and hell delivered up the dead which were in them\" (Revelation 20:13). They are raised from the grave, not called back from heaven.",
    ],
  },
  {
    number: 7,
    doctrines: ['04'],
    slug: 'eternal-fire',
    title: "Eternal Fire",
    teaser: "Mainstream Christianity teaches that the wicked burn in hell forever. Their torment never ends, for all eternity.",
    tiles: [
      { ref: "Jude 1:7", text: "Even as Sodom and Gomorrha, and the cities about them in like manner, giving themselves over to fornication, and going after strange flesh, are set forth for an example, suffering the vengeance of eternal fire." },
      { ref: "2 Peter 2:6", text: "And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow, making them an ensample unto those that after should live ungodly;" },
      { ref: "Malachi 4:3", text: "And ye shall tread down the wicked; for they shall be ashes under the soles of your feet in the day that I shall do this, saith the LORD [Yahuah] of hosts." },
    ],
    nudgeLine: "Yahushua said what the fire does.",
    nudge: { ref: "Matthew 10:28", text: "And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell." },
    chain: [
      ["Sodom suffered \"eternal fire.\"", "Jude 1:7"],
      ["That fire turned Sodom to ashes, as an example.", "2 Peter 2:6"],
      ["The wicked become ashes under the feet.", "Malachi 4:3"],
    ],
    verdict: "Eternal fire is eternal in its result, not in its burning.",
    next: { href: '/doctrines/old-paths/wicked-consumed', label: "Read the doctrine: The Wicked Consumed" },
    why: [
      "The church teaches that the wicked burn forever in torment without end. Jude says Sodom and Gomorrha are \"set forth for an example, suffering the vengeance of eternal fire\" (Jude 1:7). Peter says the same cities were turned \"into ashes\" as \"an ensample\" (2 Peter 2:6). Sodom is not burning today. Malachi says the wicked \"shall be ashes under the soles of your feet\" (Malachi 4:3). Eternal fire, then, is fire whose work is final. What it burns never comes back.",
      "Scripture names the end plainly. \"The wages of sin is death\" (Romans 6:23), not life in another place. Yahushua warned of the One who can \"destroy both soul and body in hell\" (Matthew 10:28). The wicked \"shall consume; into smoke shall they consume away\" (Psalm 37:20). Revelation calls it \"the second death\" (Revelation 20:14).",
      "Revelation 14:11 says the smoke of their torment rises \"for ever and ever.\" Isaiah used the same words of Edom: \"the smoke thereof shall go up for ever\" (Isaiah 34:10). Edom is not burning either. The smoke is the lasting witness of a judgment that is finished.",
      "Endless torment needs a soul that cannot die, and that idea came from Greek philosophy (see Riddle 8). Augustine built the doctrine out at length in *The City of God* in the fifth century. Medieval art and poetry fixed its pictures in the public mind. Few in the pews ever learned that the picture came from the painters, not the prophets.",
      "This matters because it slanders the Judge. Yahuah says, \"I have no pleasure in the death of the wicked\" (Ezekiel 33:11). Judgment in Scripture is just, complete, and final, never cruelty without end. The doctrine also hands immortality to every sinner, when Scripture offers it only as a gift to those who seek it (Romans 2:7). Many have turned from Yahuah because they were told He keeps a torture chamber. He does not.",
      "Revelation closes with a world where \"there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain\" (Revelation 21:4). That promise could not stand beside a fire still burning living people.",
    ],
  },
  {
    number: 6,
    doctrines: ['03'],
    slug: 'the-gift-of-tongues',
    title: "The Gift of Tongues",
    teaser: "Charismatic Christianity teaches that speaking in tongues is a heavenly prayer language. It is a private, unknown speech that only the Spirit understands.",
    tiles: [
      { ref: "Acts 2:6", text: "Now when this was noised abroad, the multitude came together, and were confounded, because that every man heard them speak in his own language." },
      { ref: "1 Corinthians 14:22", text: "Wherefore tongues are for a sign, not to them that believe, but to them that believe not: but prophesying serveth not for them that believe not, but for them which believe." },
      { ref: "1 Corinthians 14:28", text: "But if there be no interpreter, let him keep silence in the church; and let him speak to himself, and to God." },
    ],
    nudgeLine: "The prophet named the gift before it came.",
    nudge: { ref: "Zephaniah 3:9", text: "For then will I turn to the people a pure language, that they may all call upon the name of the LORD [Yahuah], to serve him with one consent." },
    chain: [
      ["When the gift came, every hearer understood his own language.", "Acts 2:6"],
      ["Tongues are a sign for those who do not believe.", "1 Corinthians 14:22"],
      ["With no interpreter, the speaker keeps silent.", "1 Corinthians 14:28"],
    ],
    verdict: "The gift of tongues is a real language that someone understands.",
    beneath: "Note: \"unknown\" in 1 Corinthians 14 is italic in the KJV, added by the translators.",
    next: { href: '/doctrines/old-paths/a-pure-lip', label: "Read the doctrine: A Pure Lip" },
    why: [
      "The charismatic movement teaches that tongues are a heavenly prayer language, private and unknown. The first outpouring, at Shavuot, says otherwise: \"every man heard them speak in his own language\" (Acts 2:6). The word is *dialektos*, a spoken human language. Paul says tongues are \"for a sign, not to them that believe, but to them that believe not\" (1 Corinthians 14:22). And without an interpreter, \"let him keep silence in the church\" (1 Corinthians 14:28). Real languages, given as a sign to outsiders, under strict order.",
      "Paul draws the sign from Isaiah 28:11: \"with stammering lips and another tongue will he speak to this people\" (quoted in 1 Corinthians 14:21). In Isaiah, foreign speech was a warning to an Israel that would not hear. A sign meant for hearers cannot be private.",
      "The word \"unknown\" in 1 Corinthians 14 is printed in italics in the KJV. The translators added it; no Greek word stands behind it. The modern practice began in Topeka, Kansas, in January 1901 under Charles Parham, and spread from Azusa Street in Los Angeles in 1906. Parham first taught that the tongues were real foreign languages for missionaries. Reports came back that the missionaries were not understood. After that, the teaching shifted to a \"heavenly language\" that no one could check.",
      "This matters because Paul's test is understanding. \"I had rather speak five words with my understanding... than ten thousand words in an unknown tongue\" (1 Corinthians 14:19). A practice no one can understand cannot be tested, and Scripture commands testing: \"try the spirits whether they are of God\" (1 John 4:1). The Spirit produces self-control (Galatians 5:23), and \"the spirits of the prophets are subject to the prophets\" (1 Corinthians 14:32). Order is the mark of Yahuah's Spirit. Confusion is not (1 Corinthians 14:33).",
      "In Revelation, \"tongue\" always means a people. The everlasting gospel goes \"to every nation, and kindred, and tongue, and people\" (Revelation 14:6). Tongues were given so the nations could hear, not so a speaker could be heard by no one.",
    ],
  },
  {
    number: 5,
    doctrines: ['02'],
    slug: 'under-grace',
    title: "Under Grace",
    teaser: "Mainstream Christianity teaches that the Law was nailed to the cross. Believers live under grace now, and the commandments no longer bind them.",
    tiles: [
      { ref: "Matthew 5:18", text: "For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled." },
      { ref: "1 John 3:4", text: "Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law." },
      { ref: "Romans 6:15", text: "What then? shall we sin, because we are not under the law, but under grace? God forbid." },
    ],
    nudgeLine: "Paul answered it himself.",
    nudge: { ref: "Romans 3:31", text: "Do we then make void the law through faith? God forbid: yea, we establish the law." },
    chain: [
      ["Not one jot passes while heaven and earth stand.", "Matthew 5:18"],
      ["Sin is breaking the Law.", "1 John 3:4"],
      ["Under grace, sin is still forbidden.", "Romans 6:15"],
    ],
    verdict: "If sin still exists, the Law still stands.",
    next: { href: '/doctrines/old-paths/walk-after-the-door', label: "Read the doctrine: The Walk After the Door" },
    why: [
      "The church teaches that the Law was nailed to the cross and believers now live under grace. Yahushua set the limit: not one jot or tittle shall pass \"till heaven and earth pass\" (Matthew 5:18). Heaven and earth are still here. John defines sin: \"sin is the transgression of the law\" (1 John 3:4). Remove the Law and sin has no definition, yet every pulpit still preaches against sin. Paul answers the claim before anyone makes it: \"shall we sin, because we are not under the law, but under grace? God forbid\" (Romans 6:15).",
      "\"Under the law\" in Paul means under its sentence. In Romans 6:14 the issue is sin having dominion and the death it earns. Favor (*charis*, grace) lifts the sentence. It never erases the line that defines the crime. A pardoned man is not free to rob the same bank again.",
      "The \"nailed to the cross\" phrase comes from Colossians 2:14, \"blotting out the handwriting of ordinances that was against us... nailing it to his cross.\" The Greek *cheirographon* means a handwritten record of debt, a signed note of what is owed. What was nailed was the charge sheet against the sinner, not the commandments written by Yahuah's own finger. The idea that the Law itself died goes back to Marcion in the second century, who threw out the Law and the Old Testament together. Modern teaching of an \"age of grace\" carries the same root.",
      "This matters because the two belong in order. Deliverance enters by the blood, freely, apart from works. Then the delivered walk. Favor itself teaches \"that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly\" (Titus 2:11-12). Grace without the Law is pardon with no direction. The Law without grace is direction with no pardon. Scripture never offers either one alone.",
      "Revelation describes the saints at the end in plain words: \"here are they that keep the commandments of Yahuah, and the faith of Yahushua\" (Revelation 14:12). Both are named, and both are kept.",
    ],
  },
  {
    number: 4,
    doctrines: ['01'],
    slug: 'the-name',
    title: "The Name",
    teaser: "Mainstream Christianity teaches that God's name does not matter. \"The LORD\" and \"God\" are respectful titles, and the translators used them out of reverence.",
    tiles: [
      { ref: "Exodus 3:15", text: "And God said moreover unto Moses, Thus shalt thou say unto the children of Israel, The LORD [Yahuah] God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath sent me unto you: this is my name for ever, and this is my memorial unto all generations." },
      { ref: "Jeremiah 23:27", text: "Which think to cause my people to forget my name by their dreams which they tell every man to his neighbour, as their fathers have forgotten my name for Baal." },
      { ref: "Hosea 2:16", text: "And it shall be at that day, saith the LORD [Yahuah], that thou shalt call me Ishi; and shalt call me no more Baali." },
    ],
    nudgeLine: "The prophet who saw it coming named the trade.",
    nudge: { ref: "Hosea 2:17", text: "For I will take away the names of Baalim out of her mouth, and they shall no more be remembered by their name." },
    chain: [
      ["His name is for every generation, ours included.", "Exodus 3:15"],
      ["Forgetting His name meant trading it for Baal.", "Jeremiah 23:27"],
      ["Baali means \"my lord,\" and He said to call Him that no more.", "Hosea 2:16"],
    ],
    verdict: "Replacing the Name with \"the LORD\" is the very trade the prophets condemned.",
    beneath: "Note: Baal means lord, master, owner.",
    next: { href: '/doctrines/old-paths/the-name-that-endures', label: "Read the doctrine: The Name That Endures" },
    why: [
      "The church says the name does not matter, and that \"the LORD\" and \"God\" are titles of reverence. Yahuah said the opposite at the burning bush: \"this is my name for ever, and this is my memorial unto all generations\" (Exodus 3:15). The name was given with no end date.",
      "Jeremiah shows how a people loses it. The false prophets \"think to cause my people to forget my name by their dreams... as their fathers have forgotten my name for Baal\" (Jeremiah 23:27). The name was not taken by force. It faded from the pulpit, one sermon at a time, and *Baal* filled the space. *Baal* simply means lord or master. Hosea records Yahuah's answer: \"thou shalt call me Ishi; and shalt call me no more Baali\" (Hosea 2:16). The title the church calls reverent is the title Yahuah asked His bride to stop using.",
      "The habit grew from a tradition that the name was too holy to speak. That rule is not in the Law. The third commandment forbids taking the name in vain (Exodus 20:7). The Hebrew *nasa* means to lift or carry, and a name that cannot be spoken cannot be carried, in vain or otherwise. Later Greek copies of the Old Testament wrote *kurios* in its place, and English Bibles printed LORD. Reverence that hides what Yahuah commanded to be remembered is not reverence.",
      "This matters because the name is what is called upon. Joel says \"whosoever shall call on the name of Yahuah shall be delivered\" (Joel 2:32), and Paul repeats it for the nations (Romans 10:13). Malachi records a book of remembrance written \"for them that feared Yahuah, and that thought upon his name\" (Malachi 3:16). Yahushua said, \"I have declared unto them thy name\" (John 17:26). The Son came to restore what the prophets of dreams had buried.",
      "Revelation commends the assembly that \"hast not denied my name\" (Revelation 3:8). It ends with that name on the foreheads of the redeemed (Revelation 14:1). See also \"Why the Names Matter\" on nazaryah.com.",
    ],
  },
  {
    number: 3,
    doctrines: ['01'],
    slug: 'guilty-of-all',
    title: 'Guilty of All',
    teaser: 'Mainstream Christianity teaches that Jesus was 100% God and 100% man. As God in the flesh, He kept the whole Law perfectly.',
    line: 'Three verses about the Law. One answer about the Son. Can you find it?',
    tiles: [
      { ref: 'James 2:10', text: 'For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.' },
      { ref: '1 Peter 2:22', text: 'Who did no sin, neither was guile found in his mouth:' },
      { ref: 'Matthew 4:10', text: 'Then saith Jesus [Yahushua] unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord [Yahuah] thy God, and him only shalt thou serve.' },
    ],
    nudgeLine: 'He said it Himself outside the tomb.',
    nudge: { ref: 'John 20:17', text: 'Jesus [Yahushua] saith unto her, Touch me not; for I am not yet ascended to my Father: but go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God.' },
    chain: [
      ['Break one point and you are guilty of all.', 'James 2:10'],
      ['Yahushua broke no point.', '1 Peter 2:22'],
      ['The first point is to worship Yahuah, and Him only.', 'Matthew 4:10'],
    ],
    verdict: 'Yahushua had a God, and His God was Yahuah.',
    beneath: 'A co-equal God has no God above Him to worship. He would fail the first command and stand guilty of all.',
    next: { href: '/peah/commandment-one-and-the-man-who-kept-it/', label: 'Read the corner study' },
    why: [
      "The church teaches that Yahushua was fully God and fully man, and as God in the flesh He kept the whole Law. James 2:10 sets the standard: break one point and you are \"guilty of all.\" Peter says Yahushua \"did no sin\" (1 Peter 2:22), so He kept every point, the first commandment included. Matthew 4:10 shows how He kept it. Facing the adversary, He answered from Deuteronomy 6:13: \"Thou shalt worship Yahuah thy God, and him only shalt thou serve.\"",
      "Here is the riddle. Yahushua kept the first commandment by worshipping Yahuah as His own God. If He is Yahuah, He worshipped Himself, which no commandment asks. If He is a second person who is also God, then two stand as God and one serves the other, which is the very thing the first commandment forbids. Only one answer keeps 1 Peter 2:22 true: Yahushua is not Yahuah. He is the Son who worshipped Yahuah perfectly.",
      "More verses press the same point. Elohim \"cannot be tempted with evil\" (James 1:13), yet the Son \"was in all points tempted like as we are\" (Hebrews 4:15). He \"learned obedience\" (Hebrews 5:8). A being who cannot be tempted and cannot fail learns nothing.",
      "The two-natures formula comes from the Council of Chalcedon in 451. It was written to hold the Nicene creed together, and it is stated nowhere in Scripture. It asks the reader to believe that one person was tempted and untemptable, mortal and immortal, at the same moment.",
      "This matters because it erases the example. Peter says Messiah left \"an example, that ye should follow his steps\" (1 Peter 2:21). A man who kept the Law in the power of the Spirit proves the Law can be walked. A God who kept it proves nothing about anyone else. The doctrine that exalts His nature in the end excuses His followers from His path.",
      "Even glorified, He still names a God above Him. \"Him that overcometh will I make a pillar in the temple of my God\" (Revelation 3:12). He calls His people to the same road: \"even as I also overcame\" (Revelation 3:21).",
    ],
  },
  {
    number: 2,
    doctrines: ['01'],
    kind: 'page',
    slug: 'who-is-the-lord',
    title: 'Who Is “the Lord”?',
    line: '“The Lord died.” “The Lord is immortal.” Both are preached. Can both be true?',
    teaser: 'Mainstream Christianity teaches that the Lord died on the cross for our sins. It also teaches that the Lord is immortal and cannot die.',
    href: '/why-the-names-matter',
    cta: 'Unmask the titles',
  },
  {
    number: 1,
    doctrines: ['08'],
    standing: true,
    slug: 'one-name-one-father',
    title: 'One Name, One Father',
    teaser: 'Mainstream Christianity teaches that God is one God in three persons: Father, Son, and Holy Spirit. All three are co-equal, co-eternal, and share one name.',
    line: 'Three verses. One answer. Can you find it?',
    tiles: [
      { ref: 'Psalm 83:18', text: 'That men may know that thou, whose name alone is JEHOVAH [Yahuah], art the most high over all the earth.' },
      { ref: 'Isaiah 63:16', text: 'Doubtless thou art our father, though Abraham be ignorant of us, and Israel acknowledge us not: thou, O LORD [Yahuah], art our father, our redeemer; thy name is from everlasting.' },
      { ref: 'Isaiah 45:5', text: 'I am the LORD [Yahuah], and there is none else, there is no God beside me: I girded thee, though thou hast not known me:' },
    ],
    nudgeLine: 'Paul answered it in one sentence.',
    nudge: { ref: '1 Corinthians 8:6', text: 'But to us there is but one God [Elohim], the Father, of whom are all things, and we in him; and one Lord [Master] Jesus Christ, by whom are all things, and we by him.' },
    chain: [
      ['His name is Yahuah.', 'Psalm 83:18'],
      ['Yahuah is the Father.', 'Isaiah 63:16'],
      ['Beside Yahuah there is no other God.', 'Isaiah 45:5'],
    ],
    verdict: 'Yahuah the Father is the only true God.',
    beneath: 'One name. One Father. One God. No room for a second or third person.',
    next: { href: '/why-the-names-matter', label: 'Now unmask the titles' },
    why: [
      "The Trinity asks the reader to accept one name shared by three persons. The three verses will not allow it. Psalm 83:18 gives the name to one: \"whose name alone is Yahuah.\" Alone means not shared. Isaiah 63:16 says who wears that name: \"thou, O Yahuah, art our father.\" Isaiah 45:5 shuts the door: \"there is none else, there is no God beside me.\" One name, worn by one person, and that person is the Father.",
      "The prophets and apostles never taught the doctrine. Church councils settled it. Nicaea (325) declared the Son \"of one substance\" with the Father. Constantinople (381) added the Spirit as a third co-equal person. The working words, *ousia* (substance) and *hypostasis* (person), came out of Greek philosophy. Not one verse used to defend the doctrine contains them.",
      "The shared-name claim leans on Matthew 28:19, \"in the name\" singular. Yet every baptism recorded in Acts is done in the name of Yahushua (Acts 2:38; 8:16; 10:48; 19:5). Eusebius of Caesarea, writing before Nicaea, repeatedly quotes the verse in a shorter form. Even as printed, the one name is the Father's, and the Son carries it. Yahushua means \"Yahuah saves,\" and He came \"in my Father's name\" (John 5:43). A son who carries his father's name does not become his father.",
      "Yahushua prayed to \"the only true God\" and set Himself beside Him, not inside Him: \"and Yahushua Messiah, whom thou hast sent\" (John 17:3). He tied eternal life to knowing who that only true God is. Blend the Father into a three-person Godhead and that knowledge is lost. Worship drifts toward a concept no one in Scripture ever prayed to. Messiah said the true worshippers \"shall worship the Father\" (John 4:23).",
      "Revelation keeps the line to the end. The 144,000 stand with the Lamb, \"having his Father's name written in their foreheads\" (Revelation 14:1). One name, one Father, and the Lamb standing beside Him.",
    ],
  },
];

export const isPage = (r) => r.kind === 'page';
export const newestRiddle = riddles[0];
export const standingRiddle = riddles.find((r) => r.standing);
// Oldest first, by number — the board's arrows and numbered list.
export const riddlesByNumber = [...riddles].sort((a, b) => a.number - b.number);

const numbers = riddles.map((r) => r.number);
if (new Set(numbers).size !== numbers.length || numbers.some((n) => !Number.isInteger(n) || n < 1)) {
  throw new Error(`riddles.js: every riddle needs a unique whole-number \`number\` (got ${numbers.join(', ')})`);
}
const badKind = riddles.filter((r) => (r.kind ?? 'riddle') !== 'riddle' && r.kind !== 'page');
if (badKind.length) throw new Error(`riddles.js: unknown kind on ${badKind.map((r) => r.slug).join(', ')} ('riddle' or 'page')`);
const badPage = riddles.filter((r) => isPage(r) && !(r.href && r.cta));
if (badPage.length) throw new Error(`riddles.js: kind 'page' needs href and cta: ${badPage.map((r) => r.slug).join(', ')}`);
const badDoctrines = riddles.filter((r) => r.doctrines !== undefined
  && !(Array.isArray(r.doctrines) && r.doctrines.length && r.doctrines.every((d) => /^\d\d$/.test(d))
       && new Set(r.doctrines).size === r.doctrines.length));
if (badDoctrines.length) {
  throw new Error(`riddles.js: \`doctrines\` must be a list of distinct two-digit pair numbers: ${badDoctrines.map((r) => r.slug).join(', ')}`);
}
// Pair n → every riddle that tests it, by number, for the doctrine cards and pages.
export const riddlesForDoctrine = (n) => riddlesByNumber
  .filter((r) => r.doctrines?.includes(n))
  .map((r) => ({ href: `/riddles?n=${r.number}`, number: r.number }));
if (riddles.filter((r) => r.standing).length !== 1) {
  throw new Error('riddles.js: exactly one riddle must carry `standing: true`');
}
