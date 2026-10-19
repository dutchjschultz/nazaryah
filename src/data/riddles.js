// riddles 1019 V5.js
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
//
//   Nothing before the answer may name or hint at it — the tiles' challenge
//   line is the same for every riddle and lives in src/components/Riddle.astro.
// ================================================================

export const riddles = [
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
    beneath: 'The verb is the same in all three: plēroō (G4137), to fill full.',
    next: { href: '/doctrines/old-paths/walk-after-the-door', label: 'Read the doctrine: The Walk After the Door' },
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
    beneath: "Note: Baal (H1168) means lord, master, owner.",
    next: { href: '/doctrines/old-paths/the-name-that-endures', label: "Read the doctrine: The Name That Endures" },
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
