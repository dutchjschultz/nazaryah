// doctrine-v2 1022 V4.js
// V4 (Sacred Names doctrine brief 1022 V1): 01 Sacred Names, text from its 1022 V1
// preview — five word tabs (Kurios open first), no Strong's numbers.
// V3 (brief 1022 V4): Further Reading is gone (the Go Deeper strip replaces it,
// filled from study tags); the Hadēs tab gains `study`, the link to The Rich Man
// and Lazarus under What it built.
// V2 (Hell Doctrine V2 brief 1022 V2): the Departure's open word cards, Gehenna
// box, page timeline, What It Built and Read It Again are gone. Where It Came From
// is two paragraphs (`roots`), then the six words return as tabs (`tabs`, in
// departure-tabs.js shape, rendered by DoctrineTabs), each with every section.
// V1 (Hell Doctrine V2 brief 1022 V1): content for the trial doctrine layout
// (DoctrinePageV2), keyed by the pair's `n`. Only Hell (04) is written. A pair
// reaches this file only when doctrines.data.js sets its `layout: "v2"`; set it
// back to "classic" and the old page (body, tabs) renders untouched.
//
// Text is the 1022 V1 preview's, word for word. Inline markup is limited to
// <em>; strings are rendered with set:html. No Strong's numbers on these pages.
//
// SHAPE
//   oldPaths   { kicker, title, subtitle, sections[{ title, paras?, keepers? }],
//                closing, torah[], witness[], turn }
//   departure  { kicker, title, subtitle, attribution, taught[], roots[],
//                tabs { tabs[] }, oldPath }
//   a tab's id is that word's anchor on the Greek Influence page
//   (/doctrines/borrowed-words#<id>); the entry itself is not edited here.

export const doctrineV2 = {
  "01": {
    oldPaths: {
      kicker: "The Old Path · Sacred Names",
      title: "The Name That Endures",
      subtitle: "He Gave It to Be Remembered — Generation to Generation",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `At the burning bush Moses asked for a name, and Yahuah gave one. "This is my name for ever, and this is my memorial unto all generations" (Exodus 3:15). It was not a title for one age. It was a name to be remembered by every generation after.`,
            `Moses told Israel to "fear this glorious and fearful name, YAHUAH THY GOD" (Deuteronomy 28:58). David says the Name belongs to One alone: "thou, whose name alone is Yahuah, art the most high over all the earth" (Psalm 83:18). And the Son carries it in His own name. Yahushua means "Yahuah saves." Every time His name is spoken, it says who saves.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `The Name was spoken, called on, and placed on the people. Abram built an altar "and called upon the name of Yahuah" (Genesis 12:8). The priests blessed Israel with it, and Yahuah said, "they shall put my name upon the children of Israel; and I will bless them" (Numbers 6:27).`,
            `The prophets warned what happens when the Name is dropped. False prophets would "cause my people to forget my name," just "as their fathers have forgotten my name for Baal" (Jeremiah 23:27). Baal means "lord" or "master." Israel did not stop worshiping. They traded the Name for a title. So Yahuah promised, "I will take away the names of Baalim out of her mouth" (Hosea 2:17).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"I will publish the name of Yahuah" (Deuteronomy 32:3).`],
            ["David", `"Thy name, O Yahuah, endureth for ever" (Psalm 135:13).`],
            ["Elijah", `"call ye on the name of your gods, and I will call on the name of Yahuah" (1 Kings 18:24).`],
            ["Joel", `"whosoever shall call on the name of Yahuah shall be delivered" (Joel 2:32).`],
            ["Malachi", `a book of remembrance for those "that thought upon his name" (Malachi 3:16).`],
            ["Yahushua", `"I have manifested thy name unto the men which thou gavest me" (John 17:6).`],
          ],
        },
      ],
      closing: `And at the end, John saw the Lamb on mount Sion with His people, "having his Father's name written in their foreheads" (Revelation 14:1).`,
      torah: ["Exodus 3:15", "Deuteronomy 28:58", "Numbers 6:27"],
      witness: ["Psalm 83:18", "Psalm 135:13", "Jeremiah 23:27", "Malachi 3:16", "Revelation 14:1"],
      turn: {
        text: "But Christianity went another way. It put a title where the Name stood, and told the people the Name did not matter.",
        label: "The Departure: Sacred Names",
      },
    },

    departure: {
      kicker: "The Departure · 01",
      title: "Sacred Names",
      subtitle: "What's In A Name? Everything.",
      attribution: "You've been praying to a title Caesar wore and calling it the Name.",
      taught: [
        `Open almost any English Bible and the Name is gone. Where Moses wrote Yahuah, the reader sees "the LORD," close to seven thousand times. Where the prophets wrote Elohim, Elyon, and Yahuah of hosts, the reader sees God, Most High, and Almighty. Ask about it, and the answer is kind and quick: God knows your heart. He answers to any name. What matters is that you love Him.`,
        `Every branch of the church says it in its own way. In 2008 the Vatican told Catholic bishops that the Name is not to be spoken or sung in Catholic worship. Baptist, Methodist, charismatic, and nondenominational churches pray to "the Lord" and close "in Jesus' name," and many call the Hebrew names a fad. The Father is "the Lord God," the Son is "the Lord Jesus," and the pulpit treats the two as one.`,
      ],
      roots: [
        `The message was Hebrew before it was Greek. Yahushua and His apostles read the Name in the scrolls of Moses and the prophets. When those scrolls were put into Greek, the Name had no Greek word, and some of the earliest Greek copies simply wrote it in Hebrew letters in the middle of the Greek. Later copies put <em>kurios</em>, "lord," in its place.`,
        `The titles that came in were not empty. <em>Kurios</em> was Caesar's title. <em>Theos</em> was the word for Zeus and the gods of Olympus. <em>Sōtēr</em> was what the god-kings of Egypt called themselves. "All-ruling" and "Most High" were praises sung to Isis and to Zeus. A name given "for ever" was traded for words any god could wear. And once the Father and the Son were both "Lord" and both "God," the reader could no longer tell who was speaking to whom. Five Greek words carried it in. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "kurios", greek: "Kurios", kjv: "Lord", role: "The root word", more: "Kurios on Greek Influence",
            verse: { ref: "Matthew 22:44", text: "Yahuah said unto my Master, Sit thou on my right hand, till I make thine enemies thy footstool?" },
            taught: [`Yahushua asked the Pharisees a riddle: how can David call his own son "Lord"? In the King James it reads, "The LORD said unto my Lord." The pulpit answers: because the Son is the LORD God Himself. Two Lords, one God. This verse is used to prove that the Son is the same God as the Father.`],
            word: [
              `*Kurios* means "lord" or "master." It was also Caesar's title. Believers were pressed to say "Lord Caesar," and old Polycarp was put to death rather than say it. Greek gods were called *kurios* too. Invitations survive asking guests to dine "at the couch of the lord Serapis." Paul knew that world: "there be gods many, and lords many" (1 Corinthians 8:5).`,
              `In the Greek copy of this verse, the same word stands twice: *kurios* said to *kurios*. A Greek reader sees two lords of the same rank, and cannot tell them apart.`,
            ],
            hebrew: [
              `But Yahushua was quoting David, and David wrote in Hebrew: "Yahuah said unto my Master, Sit thou at my right hand, until I make thine enemies thy footstool" (Psalm 110:1).`,
              `The first word is the Name itself, *Yahuah*. The second is *adon*, "my master," the word Sarah used of Abraham: "my lord being old also" (Genesis 18:12). It is a word for men. David saw two different persons: Yahuah, and the man Yahuah would seat beside Him. Yahuah even told Israel to stop calling Him "Baali," "my lord," so His Name would not be mixed with another: "thou shalt call me Ishi; and shalt call me no more Baali" (Hosea 2:16).`,
            ],
            reread: [`"Yahuah said to my master: Sit at My right hand, until I make your enemies your footstool." Then Yahushua asked, "If David then call him Master, how is he his son?" (Matthew 22:45). The Messiah is David's son and David's master, a man Yahuah raised up and seated at His right hand. Peter said it plainly at Shavuot: "God hath made that same Yahushua, whom ye have crucified, both Master and Messiah" (Acts 2:36). Made. Yahuah does not make Himself anything.`],
            timeline: [
              ["The burning bush", `Yahuah gives His Name to Moses: "this is my name for ever" (Exodus 3:15).`],
              ["About 250 BC – 100 AD", `Some early Greek copies still write the Name in Hebrew letters. Later copies put *kurios* in its place.`],
              ["About 155 AD", `Polycarp is told to say "Lord Caesar" and live. He refuses and is put to death.`],
              ["1611", `The King James translators print "LORD" in capitals almost everywhere the Name stands.`],
              ["Today", `The pulpit: "It doesn't matter what you call Him. He knows your heart."`],
            ],
            built: [
              `The lost Name: Yahuah's own Name, given for all generations, hidden behind a title nearly seven thousand times.`,
              `A blurred Father and Son: both called "Lord," until the reader cannot tell who is speaking to whom, and the Trinity fills the gap.`,
              `A Son called "Lord" in the Father's place, when Scripture calls Him the master Yahuah made.`,
            ],
          },
          {
            id: "theos", greek: "Theos", kjv: "God", role: "The root word", more: "Theos on Greek Influence",
            verse: { ref: "John 10:34", text: "Yahushua answered them, Is it not written in your law, I said, Ye are gods?" },
            taught: [`The crowd picked up stones because, they said, "thou, being a man, makest thyself God" (John 10:33). The pulpit says the crowd understood Him perfectly: the Son was claiming to be God. Then Yahushua quotes a Psalm about "gods," and most preachers hurry past it. Some call it a clever dodge. The whole passage is used to prove that He said He was God.`],
            word: [
              `*Theos* was the everyday Greek word for Zeus, Hermes, and the other gods of Mount Olympus. Even dead emperors were declared a *theos*.`,
              `When Paul healed a lame man at Lystra, the crowd cried, "The gods are come down to us in the likeness of men," and called Barnabas Jupiter and Paul Mercurius (Acts 14:11-12). To a Greek ear, *theos* means a higher kind of being, a different nature from man. Read that way, "Ye are gods" makes no sense, so the pulpit skips it.`,
            ],
            hebrew: [
              `But Yahushua was quoting a Psalm, and the Psalm is in Hebrew: "I have said, Ye are gods; and all of you are children of the most High" (Psalm 82:6).`,
              `The Hebrew word is *elohim*. It means mighty ones with authority. It is a rank, not a nature. In this Psalm the elohim are Israel's judges, men who "shall die like men" (Psalm 82:7). Yahuah even told Moses, "See, I have made thee a god to Pharaoh" (Exodus 7:1). Moses did not become a different kind of being. He was given authority.`,
            ],
            reread: [`"Is it not written in your Torah, I said, You are elohim, men with authority from Yahuah? Then why do you stone Me for saying I am His Son?" He finishes the thought Himself: "Say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of God?" (John 10:36). He did not say, "I am God." He said He was the Son, set apart and sent by the Father. The verse used to prove He claimed to be God is the verse where He corrects the charge.`],
            timeline: [
              ["About 750 BC", `Homer's *theoi* are Zeus and the gods of Olympus.`],
              ["42 BC", `Rome declares Julius Caesar a god after his death. The Greek east calls him *theos*.`],
              ["About 48 AD", `At Lystra a crowd calls Paul and Barnabas gods come down in the likeness of men (Acts 14:11).`],
              ["325 AD", `The creed of Nicaea calls the Son "very God of very God," of one substance with the Father.`],
              ["Today", `The pulpit: "They tried to stone Him because He said He was God."`],
            ],
            built: [
              `The Trinity: *theos* read as a divine nature three persons share, instead of a rank Yahuah gives.`,
              `The "He is God" proof texts: every *theos* read as a nature, so the Son who was sent becomes the One who sent Him.`,
            ],
          },
          {
            id: "soter", greek: "Sōtēr", kjv: "Saviour", role: "The root word", more: "Sōtēr on Greek Influence",
            verse: { ref: "Luke 2:11", text: "For unto you is born this day in the city of David a Saviour, which is Messiah the Master." },
            taught: [`This verse is read at every Christmas service. The baby in the manger, the pulpit says, is "the Savior of the world," God Himself come down as a child. The Son saves, and the Son is God. So the One who saves and the One who was born are made one and the same person.`],
            word: [
              `*Sōtēr*, "savior," was a title of gods and kings. Zeus was hailed as Zeus Sōtēr. The Greek king of Egypt called himself Ptolemy Sōtēr, and under his son the Torah was put into Greek.`,
              `Caesar Augustus, the very emperor named in Luke 2:1, was praised on a stone at Priene as a savior, and his birthday as the start of "good news" for the world. In the Greek copy, the angel's words sound like Caesar's own announcement. A Greek reader hears that a new god-king has been born to save the world.`,
            ],
            hebrew: [
              `The Hebrew word beneath is *yasha*, to save. And Yahuah says who saves: "I, even I, am Yahuah; and beside me there is no saviour" (Isaiah 43:11). He says it again: "there is none beside me" (Isaiah 45:21).`,
              `That is why the child was named before He was born: "thou shalt call his name YAHUSHUA: for he shall save his people from their sins" (Matthew 1:21). *Yahushua* means "Yahuah saves." The child's own name tells you who saves. The baby in the manger is the way Yahuah provided, not a second savior beside Him.`,
            ],
            reread: [`"Unto you is born this day, in the city of David, the one through whom Yahuah saves: the Messiah, the master." Luke shows it in the same chapter. Old Simeon took the child in his arms and blessed Yahuah: "For mine eyes have seen thy salvation" (Luke 2:30). Thy salvation, Yahuah's. Mary had already said whom she praised: "my spirit hath rejoiced in God my Saviour" (Luke 1:47). Yahuah saves. The Son is the way He provided.`],
            timeline: [
              ["About 304 BC", `Ptolemy I, the Greek king of Egypt, takes the title Sōtēr.`],
              ["About 250 BC", `Under his son, the Torah is put into Greek. Yahuah's deliverance is carried in the god-kings' word.`],
              ["9 BC", `A stone at Priene hails Augustus as a savior and his birthday as "good news."`],
              ["325 AD", `The creed of Nicaea says the Son "for our salvation came down," as very God.`],
              ["Today", `The pulpit: "Jesus is your Savior," and the Father who saves is left out.`],
            ],
            built: [
              `A second savior: prayers, songs, and altar calls aimed at the Son as the one who saves, against "beside me there is no saviour" (Isaiah 43:11).`,
              `A name with no meaning: the name that says "Yahuah saves" turned into a sound, so no one hears whom it names.`,
            ],
          },
          {
            id: "pantokrator", greek: "Pantokratōr", kjv: "Almighty", role: "The root word", more: "Pantokratōr on Greek Influence",
            verse: { ref: "Revelation 4:8", text: "And the four beasts had each of them six wings about him; and they were full of eyes within: and they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come." },
            taught: [`This is the song of heaven, and most churches sing it. The hymn finishes the line: "God in three Persons, blessed Trinity!" The pulpit says three holies mean three persons, and "Almighty" means the all-powerful God who is Father, Son, and Spirit together.`],
            word: [
              `*Pantokratōr* means "the all-ruler." The Greeks praised their gods as all-ruling, and temple hymns in Egypt praised the goddess Isis the same way.`,
              `Later the church painted "Christ Pantocrator," the Son as ruler of all, on its icons and in the domes of its churches. The word lets the reader put anyone on the throne. It carries no name at all.`,
            ],
            hebrew: [
              `The four beasts are singing Isaiah's song: "Holy, holy, holy, is Yahuah of hosts: the whole earth is full of his glory" (Isaiah 6:3). Where the Greek says "Almighty," the prophets wrote *Tsebaoth*, hosts, armies. Yahuah is the commander of heaven's armies. The Greek Old Testament often turned "Yahuah of hosts" into "Lord Almighty," and the Name and the armies were lost together.`,
              `And "holy" three times is how Hebrew says "most holy." Hebrew repeats a word to make it strong. Jeremiah does the same: "O earth, earth, earth, hear the word of Yahuah" (Jeremiah 22:29). Nobody thinks there are three earths.`,
            ],
            reread: [`"Most holy, most holy, most holy is Yahuah of hosts, Commander of heaven's armies, who was, and is, and is to come." Then watch who sits on the throne and who comes to it. The song is sung to One: "for thou hast created all things" (Revelation 4:11). Then the Lamb "came and took the book out of the right hand of him that sat upon the throne" (Revelation 5:7). The Lamb comes to the throne and receives from the One sitting on it. The scene the hymn calls a Trinity shows one on the throne, and His Son coming to Him.`],
            timeline: [
              ["About 250 BC on", `The Greek Old Testament often turns "Yahuah of hosts" into "Lord Almighty," *kurios pantokratōr*.`],
              ["About 100 BC", `Temple hymns in Egypt praise Isis as the all-ruling one.`],
              ["Sixth century", `At Sinai, the Pantocrator icon shows the Son as ruler of all.`],
              ["1826", `Reginald Heber's hymn joins Isaiah's song to the Trinity: "God in three Persons, blessed Trinity!"`],
              ["Today", `The pulpit: "Holy, holy, holy: Father, Son, and Holy Spirit."`],
            ],
            built: [
              `The Trinity hymn: Isaiah's "most holy" sung as three persons.`,
              `The enthroned Son: the Pantocrator image puts the Son on the Father's throne.`,
              `A lost title: "Yahuah of hosts," used more than two hundred times by the prophets, gone from the reader's Bible.`,
            ],
          },
          {
            id: "hypsistos", greek: "Hypsistos", kjv: "Most High", role: "The root word", more: "Hypsistos on Greek Influence",
            verse: { ref: "Acts 16:17", text: "The same followed Paul and us, and cried, saying, These men are the servants of the most high God, which shew unto us the way of salvation." },
            taught: [`A slave girl with an evil spirit follows Paul through Philippi, and everything she says is true. The pulpit says even the devil knows who God is. Paul only cast the spirit out because she was a nuisance, drawing the crowd's eyes to herself. The lesson preached is that demons believe and tremble.`],
            word: [
              `*Hypsistos* means "highest." Across the Greek world men worshiped Zeus Hypsistos, "Zeus the Most High," and a nameless "Most High God" in shrines from Macedonia to Asia Minor.`,
              `So when a girl with a spirit of divination called out "the most high God," a Greek crowd heard their own high god. And the Greek has no "the" before "way": she offered *a* way of deliverance, one road among many. The pulpit hears a true confession. Philippi heard Zeus.`,
            ],
            hebrew: [
              `In the Torah, the Most High is *Elyon*, and it is joined to the Name. Melchizedek blessed Abram "of the most high God" (Genesis 14:19). When Abram answered the king of Sodom, he put the Name in front of the title so no one could mistake whom he meant: "I have lift up mine hand unto Yahuah, the most high God, the possessor of heaven and earth" (Genesis 14:22).`,
              `David said it outright: "thou, whose name alone is Yahuah, art the most high over all the earth" (Psalm 83:18). The title belongs to the Name. Pull it away from the Name, and any god can wear it.`,
            ],
            reread: [`"These men serve Zeus the Highest, and they show you a way to be saved." That is why Paul was "grieved" (Acts 16:18). A spirit of divination was folding Yahuah into the gods of Greece and making Paul's message one more road among many. Paul answered the title with a name: "I command thee in the name of Yahushua Messiah to come out of her." He did what Abram did at Sodom. He would not let the Most High be anyone but Yahuah.`],
            timeline: [
              ["Abram's day", `Abram joins the title to the Name: "Yahuah, the most high God" (Genesis 14:22).`],
              ["About 250 BC", `The Greek Torah puts *hypsistos* for Elyon (Genesis 14:18).`],
              ["First century AD", `Zeus Hypsistos and "the Most High God" are worshiped in shrines across Macedonia and Asia Minor.`],
              ["About 50 AD", `At Philippi a girl with a spirit of divination calls out the title, and Paul casts the spirit out (Acts 16:16-18).`],
              ["Today", `The pulpit: "Even the devil knows who God is."`],
            ],
            built: [
              `One God by many names: "the Most High" treated as a title any religion can share, so the Name seems optional.`,
              `The demon's witness: a pagan title heard as a true confession, and Paul's grief explained away.`,
            ],
          },
        ],
      },
      oldPath: `The old path keeps the Name. Yahuah gave it at the burning bush and bound it to every generation. "Thy name, O Yahuah, endureth for ever" (Psalm 135:13). Caesar's title, Zeus's titles, and a god-king's boast stand where the Name should be. Take them out, and the Father and the Son stand clear again: Yahuah, beside whom "there is no saviour" (Isaiah 43:11), and Yahushua, whose very name says "Yahuah saves." Restoring the Name is nothing new. It is obeying a command that never ended. And Revelation shows it restored, the Lamb's people "having his Father's name written in their foreheads" (Revelation 14:1), and in the city to come, "his name shall be in their foreheads" (Revelation 22:4).`,
    },
  },

  "04": {
    oldPaths: {
      kicker: "The Old Path · Hell",
      title: "The Wicked Consumed",
      subtitle: "The Fire Finishes Its Work",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Scripture gives one wage for sin, and it is death. "The soul that sinneth, it shall die" (Ezekiel 18:4). Paul says the same: "the wages of sin is death" (Romans 6:23). Life without end is called a gift. The wicked do not receive it.`,
            `When judgment comes, the fire does what fire does. It burns until nothing is left. Malachi says the day "shall burn as an oven," and the wicked will be "stubble," with "neither root nor branch" left (Malachi 4:1). They become "ashes under the soles of your feet" (Malachi 4:3). David says "into smoke shall they consume away" (Psalm 37:20). Obadiah says they "shall be as though they had not been" (Obadiah 16).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Yahuah showed Israel what His fire does, more than once. Fire came out from before Him and "devoured" Nadab and Abihu, "and they died" (Leviticus 10:2). Fire "consumed the two hundred and fifty men" who stood with Korah (Numbers 16:35). Sodom and Gomorrah were overthrown with brimstone and salt, and nothing grew there again (Deuteronomy 29:23).`,
            `Peter says those cities were turned "into ashes" as an "ensample" to the ungodly who came after (2 Peter 2:6). The example Yahuah left is ashes, not a fire still burning.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `Sodom overthrown, the land burned, not even grass growing (Deuteronomy 29:23).`],
            ["David", `"Yet a little while, and the wicked shall not be" (Psalm 37:10).`],
            ["Malachi", `the wicked burned to stubble, then ashes (Malachi 4:1-3).`],
            ["Yahushua", `fear the one able "to destroy both soul and body in hell" (Matthew 10:28).`],
            ["Paul", `the wicked "punished with everlasting destruction" (2 Thessalonians 1:9).`],
            ["John", `fire came down out of heaven "and devoured them" (Revelation 20:9).`],
          ],
        },
      ],
      closing: `And at the very end, death itself is thrown into the fire, "the second death" (Revelation 20:14). After that, "there shall be no more death" (Revelation 21:4).`,
      torah: ["Leviticus 10:2", "Deuteronomy 29:23"],
      witness: ["Malachi 4:1-3", "Psalm 37:20", "Matthew 10:28", "2 Peter 2:6"],
      turn: {
        text: "But Christianity went another way. It taught a fire that never finishes, and a soul that never dies.",
        label: "The Departure: Hell",
      },
    },

    departure: {
      kicker: "The Departure · 04",
      title: "Hell",
      subtitle: "A Fire That Never Finishes, Borrowed From the Greeks",
      attribution: "You've been quoting Homer and Dante and calling it Scripture.",
      taught: [
        `At most funerals and most altar calls, the teaching is the same. When an unsaved person dies, his soul goes straight to hell. There he is awake, aware, and burning, and it never ends. Ten thousand years from now he will still be burning, with no hope of relief.`,
        `Catholic churches teach it, with purgatory added for those not bad enough for hell. Baptist, Methodist, Pentecostal, and nondenominational churches teach the same endless burning without purgatory. The rich man of Luke 16, crying out from the flames, is usually the proof. "Turn or burn" is how many preachers put it.`,
      ],
      roots: [
        `The English word "hell" covers four different words in the New Testament. Only one of them is Hebrew. When Yahushua warned of "hell fire," He said Gehenna, the Valley of Hinnom just outside Jerusalem. Jeremiah said it would become "the valley of slaughter," where the dead would be buried until there was no room left (Jeremiah 7:32). Isaiah saw the "carcases" of the rebels there, with a worm that does not die and a fire not quenched (Isaiah 66:24). Carcases are dead bodies, not living souls.`,
        `The rest came out of Greek religion. Hades was the Greek god of the dead, and his name became the name of his kingdom. Tartarus was the pit where Zeus locked the Titans. Plato taught that the soul can never die, and that the worst souls are punished in Tartarus forever. Six Greek words carried that world into the church. Choose a word.`,
      ],
      // The word tabs, in DoctrineTabs' own shape (departure-tabs.js), rendered
      // by that component with `bare` and `warmGreek`. Marks: *italic*.
      // ids are the Greek Influence anchors, so #word-<id> and each tab's link
      // land on the right word.
      tabs: {
        tabs: [
          {
            id: "hades", greek: "Hadēs", kjv: "hell", role: "The root word", more: "Hadēs on Greek Influence",
            verse: { ref: "Acts 2:27", text: "Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption." },
            taught: [`Hell is a place of fire, and the lost go there the moment they die. The rich man of Luke 16 is the usual proof: "in hell he lift up his eyes, being in torments." So Hades, preachers say, is burning right now, and it is full of souls who are awake and suffering.`],
            word: [
              `To the Greeks, Hades was a god. He was a son of Kronos and a brother of Zeus, and when the brothers divided the world, he drew the underworld as his share. His name became the name of his kingdom.`,
              `In Homer's *Odyssey*, Odysseus travels to that kingdom and the dead speak to him. They remember their lives, they grieve, and they want news of the living. Later Greek writers added rivers, judges, and punishments.`,
              `When the Greek translators of the Old Testament came to the Hebrew word *Sheol*, they wrote *Hadēs*. The word came in, and the god's living kingdom of the dead came in with it.`,
            ],
            hebrew: [
              `*Sheol* is the grave, the pit, the place of the dead, and it is quiet. "There is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest" (Ecclesiastes 9:10). "In death there is no remembrance of thee" (Psalm 6:5).`,
              `Good men went there too. Jacob expected to "go down into the grave" mourning for Joseph (Genesis 37:35). *Sheol* is not a place of punishment. It is where every dead man waits for the resurrection.`,
            ],
            reread: [`"Thou wilt not leave my soul in the grave, neither wilt thou suffer thine Holy One to see corruption." Yahushua lay in a tomb, not in a fire, and Yahuah raised Him out of it.`],
            timeline: [
              ["About 750 BC", `Homer's *Odyssey* pictures Hades as a kingdom where the dead talk, remember, and grieve.`],
              ["About 250 BC on", `The Greek translation of the Old Testament renders *Sheol* as *Hadēs*.`],
              ["1611", `The King James translators render *Hadēs* as "hell" ten times and as "grave" once (1 Corinthians 15:55).`],
              ["1901", `The American Standard Version leaves the words untranslated, "Sheol" and "Hades," so readers can see they are not "hell."`],
              ["Today", `Funeral sermons place the lost in a burning Hades the moment they die.`],
            ],
            study: ["Read the study: The Rich Man and Lazarus", "/blog/the-rich-man-and-lazarus"],
            built: [
              `A fire already burning, before any judgment has been held.`,
              `A judgment day with nothing left to decide, though Yahushua said the dead "shall come forth" from the graves to be judged (John 5:28-29).`,
              `A parable, the rich man and Lazarus, read as a map of the afterlife.`,
            ],
          },
          {
            id: "tartaroo", greek: "Tartaroō", kjv: "cast down to hell", role: "The root word", more: "Tartaroō on Greek Influence",
            verse: { ref: "2 Peter 2:4", text: "For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment;" },
            taught: [`Hell is the devil's kingdom. He rules it, and his demons torment the souls of sinners there.`],
            word: [
              `In Hesiod's poem of the gods, Tartarus is a pit as far below Hades as the sky is above the earth. A bronze anvil dropped from the earth would fall nine days to reach it. Zeus threw the defeated Titans into it and shut them behind bronze gates.`,
              `Plato later made it the prison of human souls. In his telling, souls too wicked to be cured are thrown into Tartarus and never come out.`,
              `Peter used the word once. It is a Greek place-name, and it brought the Greek prison of the Titans along with it.`,
            ],
            hebrew: [`No Hebrew word stands behind it. The nearest picture is Isaiah's: the "host of the high ones" shall be "gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited" (Isaiah 24:21-22). Shut up now, judged later.`],
            reread: [`Angels cast down, chained in darkness, "reserved unto judgment." A holding place before the judgment, for angels, not a furnace for men.`],
            timeline: [
              ["About 700 BC", `Hesiod's *Theogony* describes Tartarus as the prison of the Titans.`],
              ["About 380 BC", `Plato makes Tartarus the place where incurable souls are punished forever.`],
              ["About 65 AD", `Peter borrows the place-name once, for the angels that sinned.`],
              ["1611", `Tartarus, Hades, and Gehenna all become one English word, "hell."`],
              ["Today", `Medieval art's picture lives on: Satan ruling hell and torturing the damned.`],
            ],
            built: [
              `Satan as the king of hell, when Scripture has him thrown into the fire, not ruling it (Revelation 20:10).`,
              `Demons as torturers of men.`,
              `The angels' prison confused with the punishment of men.`,
            ],
          },
          {
            id: "aion", greek: "Aiōnios", kjv: "everlasting", role: "The root word", more: "Aiōnios on Greek Influence",
            verse: { ref: "Matthew 25:46", text: "And these shall go away into everlasting punishment: but the righteous into life eternal." },
            taught: [`The punishment lasts as long as the life. If eternal life never ends, everlasting punishment never ends, so the wicked must burn forever.`],
            word: [
              `*Aiōn* meant an age, a lifetime, a long span of time. Plato changed that. In his *Timaeus* he set *aiōn*, the timeless forever of the gods' world, against *chronos*, ordinary time.`,
              `In later Greek and Roman religion, Aion became a god of unending time, pictured with a serpent wound around his body. The philosopher's timeless forever took the place of the Hebrew idea of an age.`,
            ],
            hebrew: [`*Olam* is a long span whose end is hidden from view. Aaron's sons held "an everlasting priesthood" (Exodus 40:15), yet it gave way to Messiah's. A servant who loved his master served him "for ever" (Exodus 21:6), that is, for life. Jonah in the fish said the earth's bars were about him "for ever" (Jonah 2:6). It lasted three days.`],
            reread: [`"Everlasting punishment" is "everlasting destruction" (2 Thessalonians 1:9): a punishment whose result never reverses. It is like "eternal judgment" (Hebrews 6:2) and "eternal redemption" (Hebrews 9:12), each done once with a result that lasts. Sodom suffered "eternal fire" (Jude 7) and is ashes today (2 Peter 2:6). Even the smoke that rises "for ever and ever" (Revelation 14:11) is Isaiah's smoke over Edom, which rises "for ever" (Isaiah 34:10). Edom is not burning now.`],
            timeline: [
              ["About 360 BC", `Plato's *Timaeus* makes *aiōn* the timeless eternity of the gods.`],
              ["Later centuries BC", `Aion is worshiped as a god of endless time.`],
              ["About 420 AD", `Augustine argues that "eternal" must mean endless for the punishment as well as the life.`],
              ["1611", `The King James Version renders the word "everlasting" and "eternal."`],
              ["Today", `Matthew 25:46 is the first verse quoted to prove endless torment.`],
            ],
            built: [
              `Endless conscious torment as church doctrine.`,
              `A penalty the Torah never names. The Torah's penalty for sin is death.`,
            ],
          },
          {
            id: "aidios", greek: "Aidios", kjv: "everlasting", role: "The root word", more: "Aidios on Greek Influence",
            verse: { ref: "Jude 6", text: "And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day." },
            taught: [`The chains of hell never come off, and its darkness never ends. This verse is used to show that hell is forever.`],
            word: [`*Aidios* was Aristotle's word for what has no beginning and no end. He taught that the heavens and their turning were *aidios*: never made and never ending. It is a philosopher's word for a universe with no Creator.`],
            hebrew: [`*Olam* again. Only Yahuah is truly without beginning or end: "from everlasting to everlasting, thou art God" (Psalm 90:2).`],
            reread: [`"Everlasting chains under darkness unto the judgment." The chains hold until the day. The word tells how sure the hold is, not that judgment never comes.`],
            timeline: [
              ["About 350 BC", `Aristotle calls the heavens *aidios*, uncreated and unending.`],
              ["About 65 AD", `Jude uses the word once, for the chains on the fallen angels.`],
              ["Later", `The church reads Jude 6 alongside Matthew 25:46 as a second proof of endless hell.`],
            ],
            built: [
              `The angels' holding place read as the final hell itself.`,
              `A second proof text for endless torment, borrowed from a word about chains.`,
            ],
          },
          {
            id: "katachthonios", greek: "Katachthonios", kjv: "under the earth", role: "The root word", more: "Katachthonios on Greek Influence",
            verse: { ref: "Philippians 2:10", text: "That at the name of Yahushua every knee should bow, of things in heaven, and things in earth, and things under the earth;" },
            taught: [`Souls are alive under the earth right now, in a realm of the dead. Yahushua went down there after His death to preach to them and set some free.`],
            word: [
              `The Greeks had gods "under the earth": Hades, Persephone, Hecate, and Hermes, who led the dead down. They were honored at night, with offerings poured into pits in the ground.`,
              `Greeks wrote curses on thin lead sheets, addressed them to the gods under the earth, and dropped them into graves and wells so the dead would carry them down.`,
            ],
            hebrew: [`The dead are in the dust, asleep. "Many of them that sleep in the dust of the earth shall awake" (Daniel 12:2). "Awake and sing, ye that dwell in dust" (Isaiah 26:19).`],
            reread: [`Every knee bows, in heaven, on earth, and under the earth. Those under the earth bow when they are raised, as Daniel said. John saw the same whole creation praising, "such as are under the earth" among them (Revelation 5:13).`],
            timeline: [
              ["About 700 BC", `Hesiod and Homer describe the gods under the earth.`],
              ["About 400 BC", `Lead curse tablets to the underworld gods are common across the Greek world.`],
              ["About 60 AD", `Paul uses the word once, for every knee bowing.`],
              ["About 390 AD", `"He descended into hell" appears in a creed of the church at Aquileia, later part of the Apostles' Creed.`],
              ["Middle Ages", `The "harrowing of hell" becomes a favorite story: Christ breaking into the underworld to free souls.`],
            ],
            built: [
              `"He descended into hell" in the creed recited every Sunday.`,
              `A living underworld of souls between death and resurrection.`,
              `Prayers to the dead, and prayers for them.`,
            ],
          },
          {
            id: "apokatastasis", greek: "Apokatastasis", kjv: "restitution", role: "The root word", more: "Apokatastasis on Greek Influence",
            verse: { ref: "Acts 3:21", text: "Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began." },
            taught: [`In some churches, "restitution of all things" means every person will be saved in the end, even the devil. Hell is real, they say, but it is a cleansing fire, and everyone comes out.`],
            word: [
              `The Stoics taught a great circle of time. The stars return to their first places, the world is burned up in fire, and everything begins again, over and over. *Apokatastasis* was their word for that return.`,
              `About 230 AD, Origen took the word into the church. He taught that every soul, even demons and the devil, would one day be purified and restored. His teaching was condemned in the sixth century, but it never went away.`,
            ],
            hebrew: [`*Shuv*, to return, to restore. The prophets used it for Israel brought home: "I will bring again the captivity of my people Israel and Judah ... and I will cause them to return to the land" (Jeremiah 30:3).`],
            reread: [`The restitution is what "all his holy prophets" spoke of: Yahuah's people and land restored under Messiah. Not the rescue of the devil.`],
            timeline: [
              ["About 300 BC", `The Stoics teach the endless cycle of fire and return.`],
              ["About 230 AD", `Origen teaches that all souls, even the devil, will be restored.`],
              ["Sixth century", `Origen's teaching is condemned.`],
              ["1790s", `The Universalist Church organizes in America.`],
              ["2011", `"Love Wins" brings the idea back to evangelical readers.`],
            ],
            built: [
              `Universalism, the backlash against a hell too cruel to believe.`,
              `Second-chance teachings after death.`,
              `Endless torment and everyone-saved, two sides of one error. Both begin with a soul that cannot die.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed Hades. The wages of sin is death, and death is the end of life, not life in another place. Yahuah's fire consumes, the way it consumed Sodom, Nadab and Abihu, and the men who stood with Korah. Life without end is a gift, given to those who come through Messiah. And at the very end, John saw death and hell themselves cast into the lake of fire, "the second death" (Revelation 20:14). After that, "there shall be no more death" (Revelation 21:4).`,
    },
  },
};

export const v2For = (pair) =>
  pair?.layout === "v2" ? doctrineV2[pair.n] ?? null : null;
