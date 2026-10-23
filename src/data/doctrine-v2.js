// doctrine-v2 1022 V22.js
// V22: Communion doctrine brief 1022 V1: 20, text from its 1022 V1 preview — five word tabs (Anamnēsis open first)
// V21: Clergy over the People doctrine brief 1022 V1: 19, text from its 1022 V1 preview — four word tabs (Episkopos open first; hiereus and laikos share one)
// V20: Images in Worship doctrine brief 1022 V1: 18, text from its 1022 V1 preview — three word tabs (Stauros open first)
// V19: Predestination doctrine brief 1022 V2: 17, text from its 1022 V2 preview — two word tabs (Proorizō open first)
// V18: Lucifer doctrine brief 1022 V1: 16, text from its 1022 V1 preview — four word tabs (Phōsphoros · Heōsphoros open first)
// V17: Imputed Righteousness doctrine brief 1022 V1: 15, text from its 1022 V1 preview — three word tabs (Dikaiosynē / Dikē open first)
// V16: Rightly Divided doctrine brief 1022 V1: 14, text from its 1022 V1 preview — three word tabs (Orthotomeō new, open first)
// V15: Faith Alone doctrine brief 1022 V2: 13, text from its 1022 V2 preview — five word tabs (Pistis open first); mystērion and eucharistia go to Communion
// V14: Calendar & Feasts doctrine brief 1022 V1: 12, text from its 1022 V1 preview — five word tabs (Kairos open first)
// V13: Purification & Holiness doctrine brief 1022 V1: 11, text from its 1022 V1 preview — two word tabs (Hagios / Hagnos open first)
// V12: The Trinity doctrine brief 1022 V1: 10, text from its 1022 V1 preview — six word tabs (Logos open first); the other six words stay on Greek Influence
// V11: Going to Heaven doctrine brief 1022 V1: 09, text from its 1022 V1 preview — three word tabs (Ouranos open first); the Old Path close links Paradise Restored
// V10: The Millennium doctrine brief 1022 V2: 08, text from its 1022 V2 preview — two word tabs (Chilioi open first)
// V9: The Rapture doctrine brief 1022 V1: 07, text from its 1022 V1 preview — four word tabs (Harpazō open first; Parousia and Epiphaneia moved from 06)
// V8: The Seven-Year Tribulation doctrine brief 1022 V1: 06, text from its 1022 V1 preview — three word tabs (Hebdomas open first); series kickers
// V7: Immortal Soul doctrine brief 1022 V1: 05 Immortal Soul, text from its 1022 V1 preview — six word tabs (Psychē open first)
// V6: Tongue Talking doctrine brief 1022 V1: 03 Tongue Talking, text from its 1022 V1 preview — five word tabs (Pneuma open first), Charisma new
// V5: Torah Dismissal doctrine brief 1022 V2: 02 Torah Dismissal, text from its 1022 V2 preview — six word tabs (Charis open first); syneidēsis dropped for the six-tab cap
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

  "02": {
    oldPaths: {
      kicker: "The Old Path · Torah Dismissal",
      title: "The Walk After the Door",
      subtitle: "Deliverance Opens It. Torah Is What Walking Looks Like.",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Torah was never the door. Yahuah opens the door, by the blood He provides. Israel was not handed the Law in Egypt and told to earn their way out. The blood went on the doorposts first, and Yahuah said, "when I see the blood, I will pass over you" (Exodus 12:13). Only after that did He speak at Sinai, and He began with what He had already done: "I am Yahuah thy God, which have brought thee out of the land of Egypt" (Exodus 20:2).`,
            `The door comes first, then the walk. Paul gives both in one breath: "being now justified by his blood," and "being reconciled, we shall be saved by his life" (Romans 5:9-10). And the walk is not out of reach. Moses said the commandment is "not hidden from thee, neither is it far off," but "very nigh unto thee ... that thou mayest do it" (Deuteronomy 30:11, 14).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Israel walked out of Egypt free, and Torah showed them how free people live. David sang it: "I will walk at liberty: for I seek thy precepts" (Psalm 119:45). Solomon called the commandment "a lamp" and the law "light" (Proverbs 6:23). A lamp is for walking at night, not for opening a locked door.`,
            `Put the two together wrongly and you get two errors at once. One man thinks keeping the Law earns his way in. Another thinks being let in means he no longer needs to walk. Scripture holds both halves in order: the blood opens, and the commandments are the road.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Abraham", `"kept my charge, my commandments, my statutes, and my laws" (Genesis 26:5), centuries before Sinai.`],
            ["Moses", `"I have taught you statutes and judgments, even as Yahuah my God commanded me" (Deuteronomy 4:5).`],
            ["David", `"O how love I thy law! it is my meditation all the day" (Psalm 119:97).`],
            ["Daniel", `his enemies could find no fault "except we find it against him concerning the law of his God" (Daniel 6:5).`],
            ["Yahushua", `"Think not that I am come to destroy the law ... I am not come to destroy, but to fulfil" (Matthew 5:17).`],
            ["Paul", `"thou thyself also walkest orderly, and keepest the law" (Acts 21:24).`],
            ["John", `"hereby we do know that we know him, if we keep his commandments" (1 John 2:3).`],
          ],
        },
      ],
      closing: `And at the end, John saw the same two marks on Yahuah's people: they "keep the commandments of God, and have the testimony of Yahushua Messiah" (Revelation 12:17). The testimony is the door. The commandments are the walk.`,
      torah: ["Exodus 20:2", "Deuteronomy 30:11-14"],
      witness: ["Psalm 119:44-45", "Proverbs 6:23", "Romans 5:9-10"],
      turn: {
        text: "But Christianity went another way. It taught that favor ended the Law, that the commandments were nailed to the cross, and that the walk is optional once the door is open.",
        label: "The Departure: Torah Dismissal",
      },
    },

    departure: {
      kicker: "The Departure · 02",
      title: "Torah Dismissal",
      subtitle: "Favor Didn't Kill the Law — It Lifted the Sentence",
      attribution: "You've been quoting the philosophers and calling it Scripture.",
      taught: [
        `The Law was nailed to the cross. We are under grace now, not under the law. The Old Testament was for the Jews, and the New Testament is for the church. Just love God and follow your heart. Most believers have never heard anything else.`,
        `Catholic teaching divides the Law into three parts. The ceremonial and civil laws ended with Messiah. The moral law stands, summed up in the Ten Commandments, but the Sabbath has passed to Sunday. Reformed and Presbyterian churches say much the same. Baptist, evangelical, and Pentecostal churches often go further: the whole Law is gone, and believers follow "the law of love" or "the leading of the Spirit" instead.`,
      ],
      roots: [
        `Yahushua said the opposite: "Think not that I am come to destroy the law, or the prophets" (Matthew 5:17). The split came later. About 144 AD, Marcion taught that the God of the Law and the God of Messiah were two different gods, and threw out the whole Old Testament. The church cast him out, but kept much of his split. It kept the door and threw away the road.`,
        `The Greek words helped. To a Greek, <em>nomos</em> was a city's custom, made by men and changed by men. <em>Charis</em> was a lovely gift that asked nothing back. A covenant became a Greek "will" that a newer will cancels. The heart became the seat of feelings, and repentance became regret. And Paul's warnings about the pagan star-powers were turned against Yahuah's own Sabbaths and feasts. Six Greek words carried the split into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "charis", greek: "Charis", kjv: "grace", role: "The root word", more: "Charis on Greek Influence",
            verse: { ref: "Romans 6:14", text: "For sin shall not have dominion over you: for ye are not under the law, but under grace." },
            taught: [
              `We are not under the law anymore. We are under grace. Grace means God gave us a free gift we did not earn, so the commandments no longer apply to us. Trying to keep the Sabbath or the feasts is going back under the law. That is called legalism.`,
            ],
            word: [
              `*Charis* was an everyday Greek word for charm, beauty, and a kindness done. But the Greeks also made it into goddesses. Hesiod, an early Greek poet, wrote of the Charites, the Graces, daughters of Zeus who handed out beauty and delight.`,
              `The word itself is not evil. But to a Greek ear, *charis* was a lovely gift that asked nothing back. Read that way, grace became a gift that sets the Law aside.`,
            ],
            hebrew: [
              `Behind *charis* stands the Hebrew word *chen*, favor. When the Torah was put into Greek, *charis* was used for *chen* the very first time it appears: "But Noah found grace in the eyes of Yahuah" (Genesis 6:8). The next verse tells us what kind of man found it: "Noah walked with God" (Genesis 6:9).`,
              `*Chen* is the kindness a greater one shows to a lesser one. Moses shows how favor and the way belong together: "if I have found grace in thy sight, shew me now thy way" (Exodus 33:13). Favor does not cancel the way. Favor is what lets a man walk in it.`,
            ],
            reread: [`Now read it the way Paul meant it: sin will not rule over you anymore, because you are no longer under the Law's sentence of death. You are under Yahuah's favor, the favor that shows you His way. "Not under the law" means not under its penalty. Messiah "redeemed us from the curse of the law" (Galatians 3:13), not from the Law. Paul answers the pulpit in the very next verse: "What then? shall we sin, because we are not under the law, but under grace? God forbid" (Romans 6:15). And John tells us what sin is: "sin is the transgression of the law" (1 John 3:4).`],
            timeline: [
              ["About 700 BC", `Hesiod names the Charites, the Graces, daughters of Zeus.`],
              ["About 250 BC", `The Torah is put into Greek, and *chen* becomes *charis* (Genesis 6:8).`],
              ["About 144 AD", `Marcion teaches that the God of the Law and the God of grace are two different gods.`],
              ["About 412 AD", `Augustine, in *On the Spirit and the Letter*, sets the Law that kills against the grace that gives life.`],
              ["1520s", `Luther sets law and gospel against each other: the Law only accuses; grace alone saves.`],
              ["1909", `The Scofield Reference Bible splits history into a "dispensation of law" and a "dispensation of grace."`],
            ],
            built: [
              `Grace as a hall pass: saved by grace, so the commandments become optional.`,
              `"Legalism," the name pinned on anyone who keeps the Sabbath or the feasts.`,
              `A door with no road: the blood is preached, and the bread, the commandments, is not.`,
            ],
          },
          {
            id: "nomos", greek: "Nomos", kjv: "law", role: "The root word", more: "Nomos on Greek Influence",
            verse: { ref: "Romans 10:4", text: "For Messiah is the end of the law for righteousness to every one that believeth." },
            taught: [
              `Messiah is the end of the law. When He came, the Law was over, finished and done away. Believers now live by faith, not by rules. The Ten Commandments may be good advice, but nobody is bound to keep them anymore.`,
            ],
            word: [
              `*Nomos* is the Greek word for law. In the Greek world it meant the rules a city made for itself: custom, habit, laws written by men. Greek teachers called the Sophists said these laws were made up, and could be changed whenever people liked. So to a Greek ear, "the law" sounded like a code of rules and penalties. When the Greek text puts *nomos* where Moses wrote Torah, that Greek sound comes along with it.`,
              `The word for "end" is *telos*. To Aristotle it meant the goal, the purpose a thing is aimed at. An acorn's *telos* is the oak. But "end" in English usually means stop, and a word for goal was heard as termination.`,
            ],
            hebrew: [
              `The Hebrew word beneath *nomos* is *Torah*. It comes from *yarah*, which means to aim, to shoot an arrow, to point the way. Torah is not a city's rulebook. It is a Father's instruction, pointing His children down the path. And Paul's "law" is Moses' Torah: he quotes "Thou shalt not covet" and calls it the law (Romans 7:7).`,
              `Paul tells us what he means. A few verses later he quotes Moses: "The word is nigh thee, even in thy mouth, and in thy heart" (Romans 10:8). That is Deuteronomy 30, where Moses is speaking of the commandment: "it is not hidden from thee, neither is it far off ... that thou mayest do it" (Deuteronomy 30:11, 14). He did not quote Moses to end Moses.`,
            ],
            reread: [`Now read it the way Paul meant it: Messiah is the goal the Torah was aiming at all along, so that everyone who trusts Him is made right with Yahuah. A target does not destroy the arrow. It is what the arrow was shot at. Paul said it plainly earlier in the same letter: "Do we then make void the law through faith? God forbid: yea, we establish the law" (Romans 3:31). And again: "the law is holy, and the commandment holy, and just, and good" (Romans 7:12).`],
            timeline: [
              ["About 430 BC", `The Sophists teach that *nomos* is man-made custom, set against nature.`],
              ["About 350 BC", `Aristotle makes *telos* his word for purpose, the goal a thing is made for.`],
              ["About 250 BC", `The Greek copy of the Torah uses *nomos* for Torah, and a Father's instruction now sounds like a legal code.`],
              ["About 144 AD", `Marcion cuts the Law and the Prophets out of his Bible altogether.`],
              ["1830s", `Darby's dispensations: the Law belonged to Israel's age, and the church lives in the age of grace.`],
              ["Today", `"The end of the law" is the first verse quoted to say the Law is over.`],
            ],
            built: [
              `The commandments read as Israel's old rules, not the believer's walk.`,
              `Nine out of ten: the Sabbath dropped, the other nine kept as "moral law."`,
              `Moses against Messiah: the Law and the good news set against each other.`,
            ],
          },
          {
            id: "stoicheia", greek: "Stoicheia", kjv: "elements", role: "The root word", more: "Stoicheia on Greek Influence",
            verse: { ref: "Galatians 4:9-10", text: "But now, after that ye have known God, or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage? Ye observe days, and months, and times, and years." },
            taught: [
              `The Galatians were Christians who started keeping the Jewish law. Paul calls the Sabbath, the new moons, and the feasts "weak and beggarly elements." Keeping holy days is bondage. And Colossians settles it: Messiah took the Law "out of the way, nailing it to his cross" (Colossians 2:14), so "let no man therefore judge you" about Sabbaths, new moons, or food (Colossians 2:16).`,
            ],
            word: [
              `*Stoicheia* means the basic parts of something: the ABCs, the building blocks. Greek philosophers taught that the whole world was built from four: earth, water, air, and fire. In time, many in the Greek world came to treat these elements, and the stars moving across the sky, as spirits that ruled men's lives.`,
              `Those powers were thought to govern the days and the months, so people kept lucky and unlucky days to please them. That was the world the Galatians came out of.`,
            ],
            hebrew: [
              `No Hebrew word stands behind it. Paul tells us who the Galatians had been, one verse earlier: "when ye knew not God, ye did service unto them which by nature are no gods" (Galatians 4:8). They were pagans who had served false gods. So when Paul asks why they "turn again," he means back to the gods they left, not to a Torah they never had.`,
              `Moses warned against that very thing: do not look at "the sun, and the moon, and the stars" and be "driven to worship them" (Deuteronomy 4:19). But Yahuah's days are different. He calls them "my feasts" (Leviticus 23:2), appointed meetings with Him. Paul did not call Yahuah's feasts beggarly. He called the star-days beggarly.`,
            ],
            reread: [`Now read it the way Paul meant it: you know Yahuah now; better yet, He knows you. So why go back to the weak, worthless star powers you once served, and keep their days and seasons all over again? You cannot go back to a place you have never been. And what was nailed to the cross in Colossians? "The handwriting of ordinances that was against us" (Colossians 2:14). The word is *cheirographon*, a handwritten note of debt. The record of what we owed was nailed up, not the Torah. The rules Paul does reject there are "touch not; taste not; handle not," which he calls "the commandments and doctrines of men" (Colossians 2:21-22).`],
            timeline: [
              ["About 450 BC", `Empedocles teaches that all things are made of four elements: earth, water, air, and fire.`],
              ["About 50 AD", `Paul warns former pagans in Galatia not to go back to their old days and seasons.`],
              ["About 60 AD", `Paul warns the Colossians against philosophy and "the rudiments of the world."`],
              ["321 AD", `Constantine orders rest on "the venerable day of the sun."`],
              ["About 364 AD", `The Council of Laodicea forbids Christians to rest on the Sabbath.`],
              ["Today", `"Galatians says keeping days is bondage."`],
            ],
            built: [
              `No Sabbath and no feasts: Yahuah's appointed times treated as if they were the pagans' star-days.`,
              `Colossians 2:14 read as the Law nailed to the cross, when it was the record of debt.`,
              `Man's calendar kept instead: the continuous Roman week and the church holidays kept, while the days Yahuah named are called bondage.`,
            ],
          },
          {
            id: "diatheke", greek: "Diathēkē", kjv: "testament", role: "The root word", more: "Diathēkē on Greek Influence",
            verse: { ref: "Hebrews 8:13", text: "In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away." },
            taught: [
              `The old covenant has vanished away. God made a new covenant with the church, and the Law belonged to the old one. That is why we have an Old Testament and a New Testament. The first is over, and the second replaced it.`,
            ],
            word: [
              `*Diathēkē* is the word the King James prints here as "covenant," and in other places as "testament." In Greek law it meant a will, the paper a man leaves behind when he dies. A will takes effect at death, and a newer will cancels the older one.`,
              `Read that way, a "new covenant" sounds like a new will that throws out the old one, and so the Bible got its "Old Testament" and "New Testament."`,
            ],
            hebrew: [
              `But this writer is quoting Jeremiah, word for word (Hebrews 8:8-12). Jeremiah wrote: "Behold, the days come, saith Yahuah, that I will make a new covenant with the house of Israel, and with the house of Judah" (Jeremiah 31:31). The Hebrew word is *berit*, a covenant, a binding promise between two sides, like a marriage.`,
              `"New" is *chadash*, renewed, repaired. The same root gives the Hebrew word for the new moon: the same moon, made new again. And what goes into the renewed covenant? "I will put my law in their inward parts, and write it in their hearts" (Jeremiah 31:33). The Torah is not thrown out of the new covenant. It is written into it.`,
            ],
            reread: [`Now read it the way Jeremiah meant it: the first arrangement, the one the people broke, served by an earthly tent and animal blood, is worn out and passing away. The writer names it in the next verse: "ordinances of divine service, and a worldly sanctuary" (Hebrews 9:1). And he tells us where the fault was: "finding fault with them" (Hebrews 8:8), with the people, not the Law, "because they continued not in my covenant" (Hebrews 8:9). The broken arrangement wore out. The Torah did not. Yahuah wrote it again, this time on the heart, like a husband renewing his vows with a wife who wandered.`],
            timeline: [
              ["About 250 BC", `The Greek Torah uses *diathēkē*, a will, for *berit*, a covenant.`],
              ["About 170 AD", `Melito of Sardis lists "the books of the old covenant," among the first to use the phrase for a set of books.`],
              ["About 207 AD", `Tertullian, writing in Latin, calls the two parts of Scripture two "testaments."`],
              ["About 405 AD", `Jerome's Latin Bible prints *testamentum*, and English later follows it as "testament."`],
              ["1611", `The King James Bible prints "The Old Testament" and "The New Testament" as the names of the two halves.`],
              ["Today", `"That's Old Testament. We're New Testament believers."`],
            ],
            built: [
              `Replacement: the old will cancelled, and the church set in Israel's place.`,
              `Half a Bible: the Torah and the Prophets read as background, not instruction.`,
              `A new covenant without the Law, the very thing Jeremiah said would be written on the heart left out.`,
            ],
          },
          {
            id: "kardia", greek: "Kardia", kjv: "heart", role: "The root word", more: "Kardia on Greek Influence",
            verse: { ref: "Hebrews 8:10", text: "For this is the covenant that I will make with the house of Israel after those days, saith Yahuah; I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people:" },
            taught: [
              `In the new covenant, God writes His law on our hearts, so we don't need the written commandments anymore. If you love God, your heart will lead you. God looks at the heart, not at rules. Just follow your heart.`,
            ],
            word: [
              `*Kardia* means heart. In the old Greek poets, like Homer, the heart was where a man felt: his courage, his anger, his longing. The philosopher Plato put thinking in the head and the feelings down in the chest.`,
              `So to a Greek ear, the heart is the feeling part of a man, not the thinking part. Read that way, a law "written in their hearts" sounds like a warm feeling that takes the place of the written commandment.`,
            ],
            hebrew: [
              `But this verse quotes Jeremiah: "I will put my law in their inward parts, and write it in their hearts" (Jeremiah 31:33). The Hebrew word for heart is *lev*. In Hebrew, the heart is where a man thinks, understands, and decides: his mind and his will, not only his feelings. That is why the verse can put "mind" and "hearts" side by side.`,
              `And look at what gets written there: "my law," My Torah. The same Torah Moses gave: "these words, which I command thee this day, shall be in thine heart" (Deuteronomy 6:6). The new covenant does not trust the heart. It rewrites the heart with the Torah.`,
            ],
            reread: [`Now read it the way Jeremiah meant it: I will put My Torah into their thinking and write it where they make their choices, and I will be their God, and they will be My people. A heart with Yahuah's Torah written on it does not drift away from the commandments. It loves them. Ezekiel says the Spirit is given to "cause you to walk in my statutes" (Ezekiel 36:27). And John said, "this is the love of God, that we keep his commandments: and his commandments are not grievous" (1 John 5:3).`],
            timeline: [
              ["About 750 BC", `Homer makes the heart the seat of courage, anger, and passion.`],
              ["About 360 BC", `Plato puts reason in the head and the feelings in the chest.`],
              ["About 250 BC", `The Greek Torah renders *lev* as *kardia*, and the feeling-heart comes with the word.`],
              ["1799", `Schleiermacher calls religion a matter of feeling, not of doctrine or deeds.`],
              ["Today", `"God looks at your heart, not at rules."`],
            ],
            built: [
              `"Follow your heart": feeling set over the commandment.`,
              `A law with no words: the "law on the heart" turned into a vague sense of love, with the commandments themselves left out.`,
            ],
          },
          {
            id: "metanoia", greek: "Metanoia", kjv: "repentance", role: "The root word", more: "Metanoia on Greek Influence",
            verse: { ref: "Acts 26:20", text: "But shewed first unto them of Damascus, and at Jerusalem, and throughout all the coasts of Judaea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance." },
            taught: [
              `Repentance means feeling sorry for your sins and changing your mind about Messiah. You admit you are a sinner, you believe, and you are saved. It is a moment at the altar, not a change in how you live. Telling people to keep commandments after that is adding works.`,
            ],
            word: [
              `*Metanoia* in plain Greek means a change of mind, or regret, an afterthought. The Greeks even pictured her as a goddess. Lucian, a Greek writer, describes a famous painting by Apelles in which Metanoia, Repentance, stands dressed in mourning, weeping and ashamed, as the truth arrives.`,
              `To the Greek ear, repentance was a feeling: sorrow, regret, a mind changed. Nothing in the word asks a man to walk a different way.`,
            ],
            hebrew: [
              `Behind the Greek word stands the Hebrew *shuv*. It means to turn around, to stop walking one way and walk back the other. Ezekiel shows what the turn looks like: "if the wicked will turn from all his sins that he hath committed, and keep all my statutes, and do that which is lawful and right, he shall surely live" (Ezekiel 18:21).`,
              `Now look at Paul's verse again. He says three things: "repent," "turn to God," and "do works meet for repentance." That is not a feeling. That is *shuv* in three steps. Moses said the same: "And shalt return unto Yahuah thy God, and shalt obey his voice according to all that I command thee this day" (Deuteronomy 30:2).`,
            ],
            reread: [`Now read it the way Paul meant it: I told everyone, Jews first, then Gentiles, to turn around, come back to Yahuah, and live a life that proves they have truly come back. A turn that never changes direction is not a turn. The blood opens the way home. Turning is the walk home, on Yahuah's road, by His commandments.`],
            timeline: [
              ["About 330 BC", `Apelles paints *Calumny*, with Metanoia, Repentance, mourning at the end of the scene.`],
              ["About 160 AD", `Lucian describes the painting: Repentance weeping and ashamed.`],
              ["About 405 AD", `Jerome's Latin Bible renders "repent" as *paenitentiam agite*, later read as "do penance."`],
              ["1215", `The Fourth Lateran Council requires every Catholic to confess to a priest at least once a year.`],
              ["1500s", `The Reformers throw out penance, but leave repentance as an inner sorrow and a change of mind.`],
              ["Today", `"Repent just means change your mind."`],
            ],
            built: [
              `The altar call: repentance as one moment of sorrow, not a life turned around.`,
              `Penance: sorrow worked off through a priest, instead of a return to the commandments.`,
              `"Works" as a dirty word, though Paul himself preached "works meet for repentance."`,
            ],
          },
        ],
      },
      oldPath: `The old path is simple. Yahuah delivers by the blood of the Lamb He provided. That is the door, and no one walks through it by keeping rules. But the door opens onto a road, and the road is the Torah. Paul put both in one place: "being now justified by his blood," and "being reconciled, we shall be saved by his life" (Romans 5:9-10). The blood is the entry. The bread, the commandments, is the walk. Yahushua said whoever does and teaches the commandments "shall be called great in the kingdom of heaven" (Matthew 5:19). Paul believed "all things which are written in the law and in the prophets" (Acts 24:14). And Revelation names the people who stand at the end: "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Yahushua" (Revelation 14:12).`,
    },
  },

  "03": {
    oldPaths: {
      kicker: "The Old Path · Tongue Talking",
      title: "A Pure Lip",
      subtitle: "He Promised a Language, Not a Noise",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah promised His people a language, not a noise. "Then will I turn to the people a pure language, that they may all call upon the name of Yahuah, to serve him with one consent" (Zephaniah 3:9). In Hebrew it is a pure lip. The point of the gift is understanding: all of them calling on one Name, together.`,
            `When the gift came on Shavuot, it came that way. The disciples spoke, and "every man heard them speak in his own language" (Acts 2:6). Men from fifteen lands said, "we do hear them speak in our tongues the wonderful works of God" (Acts 2:11). They were real languages, spoken to be understood.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `In the wilderness, Yahuah put His Spirit on seventy elders, and "they prophesied" (Numbers 11:25). When two of them prophesied in the camp, Joshua wanted them stopped. Moses answered, "would God that all Yahuah's people were prophets" (Numbers 11:29). Joel promised the day would come: "your sons and your daughters shall prophesy" (Joel 2:28).`,
            `On Shavuot, Peter stood up and said, "this is that which was spoken by the prophet Joel" (Acts 2:16). And Paul, who spoke in tongues more than them all, said he would rather speak "five words with my understanding" than ten thousand in a tongue (1 Corinthians 14:18-19). The gift was given to teach, and teaching needs words people understand.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"would God that all Yahuah's people were prophets" (Numbers 11:29).`],
            ["Joel", `"your sons and your daughters shall prophesy" (Joel 2:28).`],
            ["Zephaniah", `"a pure language," so all may call on the Name "with one consent" (Zephaniah 3:9).`],
            ["Peter", `"this is that which was spoken by the prophet Joel" (Acts 2:16).`],
            ["Paul", `"five words with my understanding, that by my voice I might teach others also" (1 Corinthians 14:19).`],
          ],
        },
      ],
      closing: `And at the end John saw a great multitude "of all nations, and kindreds, and people, and tongues" before the throne, and they "cried with a loud voice," one cry from every tongue (Revelation 7:9-10).`,
      torah: ["Numbers 11:25-29", "Deuteronomy 18:18"],
      witness: ["Zephaniah 3:9", "Joel 2:28-29", "Acts 2:6-11", "1 Corinthians 14:19"],
      turn: {
        text: "But Christianity went another way. It traded the pure lip for a sound no one can understand.",
        label: "The Departure: Tongue Talking",
      },
    },

    departure: {
      kicker: "The Departure · 03",
      title: "Tongue Talking",
      subtitle: "Is That Really the Spirit — Or Is It the Script?",
      attribution: "You've been quoting the oracle at Delphi and calling it Scripture.",
      taught: [
        `When the Holy Spirit fills you, you will speak in tongues. It will not be a language you learned, or one anyone around you knows. It is a heavenly prayer language, the "tongues of angels" (1 Corinthians 13:1). The Assemblies of God and most Pentecostal churches teach that tongues are the first outward evidence of being baptized in the Spirit. If you have never spoken in tongues, you have not received the fullness.`,
        `It is not only the Pentecostal churches. Charismatic believers in Baptist, Methodist, Lutheran, Episcopal, and nondenominational churches pray in tongues. Since 1967 the Catholic Charismatic Renewal has carried it into Catholic parishes. Prophetic words, being "slain in the Spirit," shaking, and laughing are all taken as signs that God is in the room. Anyone who asks questions is warned not to "quench the Spirit."`,
      ],
      roots: [
        `The Greeks had a holy place at Delphi. There a priestess of Apollo, called the Pythia, sat on a three-legged stool in the temple and was said to speak in a frenzy. Temple officials called prophets received her answers and put them into shape. Plato praised this kind of "madness" as a gift from the gods. In the worship of Dionysus, women danced themselves into a frenzy and were said to stand outside themselves, <em>ekstasis</em>.`,
        `About 170 AD, a man named Montanus brought this kind of prophecy into the church in Phrygia. He fell into frenzies and spoke strange words, and claimed the Spirit was speaking through him. The churches of Asia condemned it. It faded, and then it returned. In Topeka, Kansas, in 1901, Agnes Ozman spoke in tongues at Charles Parham's Bible school. In 1906, under William Seymour, it spread from Azusa Street in Los Angeles. In 1960, Dennis Bennett carried it into the mainline churches. The gift Scripture describes is a known human language with a purpose anyone can check. What came out of Azusa Street was something else. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "pneuma-delphi", greek: "Pneuma", kjv: "Spirit", role: "The root word", more: "Pneuma on Greek Influence",
            verse: { ref: "Acts 2:4", text: "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance." },
            taught: [
              `On that day the Holy Spirit fell on the disciples, and they began to speak in tongues. Many churches teach that the same thing still happens today. The Spirit takes control, your mind steps aside, and a heavenly language comes out. If it has not happened to you, some say you have not really received the Spirit.`,
            ],
            word: [
              `*Pneuma* means breath or wind. But at Delphi, the most famous temple of the Greek world, *pneuma* meant something more. A priestess called the Pythia sat over a crack in the ground. The Greeks said a sacred *pneuma* rose up and came over her, and she spoke words that were not her own. The Greek writers Strabo and Plutarch both describe it, and Plutarch served as a priest at Delphi. To the Stoics, *pneuma* was a fiery divine substance running through all things.`,
              `To a Greek reader, "filled with the *pneuma*" meant a person taken over and speaking in a frenzy. That is the picture many pulpits still see in this verse.`,
            ],
            hebrew: [
              `Peter tells us what happened that day: "this is that which was spoken by the prophet Joel" (Acts 2:16). Joel wrote, "I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy" (Joel 2:28).`,
              `The Hebrew word for spirit is *ruach*. It means breath or wind: Yahuah's own breath, His power going out to do His work. Luke calls it "the power of the Highest" (Luke 1:35), and Yahushua called it "the promise of my Father" and "power from on high" (Luke 24:49). When the *ruach* came on men in the Hebrew Scriptures, they did not lose their minds. The seventy elders prophesied in front of Moses with clear heads (Numbers 11:25), and Moses wished all of Yahuah's people could do the same (Numbers 11:29).`,
            ],
            reread: [`The way Luke meant it: they were all filled with Yahuah's power, and began to speak in other languages, real ones, as His breath gave them the words to say. Luke tells us right away what kind of tongues they were. Men from many nations came running, "because that every man heard them speak in his own language" (Acts 2:6). They asked, "how hear we every man in our own tongue, wherein we were born?" (Acts 2:8). No one needed someone to decode it. The gift was a language people understood, not a sound no one could.`],
            timeline: [
              ["About 700 BC", `At Delphi, Apollo's priestess gives his answers when the sacred *pneuma* is said to come over her.`],
              ["About 20 AD", `The Greek geographer Strabo writes that a breath rises from a chasm at Delphi and inspires the priestess.`],
              ["About 31 AD", `On Shavuot the disciples speak real languages, and men from many nations hear them in their own tongue.`],
              ["About 100 AD", `Plutarch, a priest at Delphi, writes that the priestess speaks when the *pneuma* comes upon her.`],
              ["1901", `Agnes Ozman speaks in tongues at Charles Parham's school in Topeka. Parham teaches these are real foreign languages for missionaries. Those who go overseas find no one can understand them.`],
              ["1906", `The Azusa Street revival in Los Angeles spreads tongues as the sign of the Spirit.`],
            ],
            built: [
              `Tongues as the proof of the Spirit: the idea that every true believer must speak in an unknown language.`,
              `A private prayer language: sounds that no one understands, not even the one speaking.`,
              `A Spirit that switches off the mind: the believer as a vessel taken over, like the priestess at Delphi.`,
            ],
          },
          {
            id: "python", greek: "Pythōn", kjv: "divination", role: "The root word", more: "Pythōn on Greek Influence",
            verse: { ref: "Acts 16:16", text: "And it came to pass, as we went to prayer, a certain damsel possessed with a spirit of divination met us, which brought her masters much gain by soothsaying:" },
            taught: [
              `This was a fortune-teller in a pagan city. She had a demon, and Paul cast it out. Most preachers treat it as a side story about witchcraft, with nothing to do with what happens in church. Speaking by the Spirit in worship, they say, is a different thing altogether.`,
            ],
            word: [
              `The Greek does not say "a spirit of divination." It says she had "a spirit of *Pythōn*." Python was the great serpent of Delphi. The Greeks said Apollo killed it and took over its shrine, and his priestess there was called the Pythia after it. So Luke is naming the very spirit that spoke through the oracle at Delphi.`,
              `Plutarch notes that in his day, people with a voice speaking out of them were called "Pythons." The English hid the name, so readers never see the link.`,
            ],
            hebrew: [
              `Moses shut the door on this long before. Among Yahuah's people there must not be found one "that useth divination" or "a consulter with familiar spirits" (Deuteronomy 18:10-11). A familiar spirit, an *ov*, is a spirit that speaks out of a person.`,
              `Isaiah tells us how it sounded: "Seek unto them that have familiar spirits, and unto wizards that peep, and that mutter: should not a people seek unto their God?" (Isaiah 8:19). Peeping and muttering: strange sounds coming out of a person. Yahuah's people were to seek Him, not a voice.`,
            ],
            reread: [`The way Luke meant it: as we went to prayer, a girl met us who had the spirit of Python, the spirit of Apollo's oracle at Delphi. Listen to what the spirit said: "These men are the servants of the most high God, which shew unto us the way of salvation" (Acts 16:17). Every word was true, and it sounded holy. Paul did not call it the Holy Spirit. He was grieved, and he said, "I command thee in the name of Yahushua Messiah to come out of her" (Acts 16:18). A spirit that takes over a person's mouth follows Python's pattern, even when the words sound religious.`],
            timeline: [
              ["Sinai", `The Torah forbids divination and familiar spirits among Yahuah's people (Deuteronomy 18:10-11).`],
              ["About 550 BC", `The Greek hymns tell of Apollo killing the serpent Python at Delphi and taking its shrine for his oracle.`],
              ["About 50 AD", `Paul casts the spirit of Python out of a slave girl at Philippi (Acts 16:16-18).`],
              ["About 100 AD", `Plutarch notes that people with a voice speaking from inside them are now called "Pythons."`],
              ["About 390", `The oracle has fallen silent as Roman laws close the pagan temples.`],
              ["Today", `A voice that takes over the mouth is welcomed as the Holy Spirit, as long as the words sound holy.`],
            ],
            built: [
              `Testing by feeling, not by Torah: if it sounds holy and feels powerful, it must be from God.`,
              `A spirit that speaks through people: the oracle's pattern brought into worship under a new name.`,
            ],
          },
          {
            id: "prophetes", greek: "Prophētēs", kjv: "prophet", role: "The root word", more: "Prophētēs on Greek Influence",
            verse: { ref: "1 Corinthians 14:29", text: "Let the prophets speak two or three, and let the other judge." },
            taught: [
              `Many churches have "prophets" who stand up and give "a word from the Lord." Sometimes it comes right after a message in tongues, as its interpretation. The church is told to judge it, but judging usually means asking whether it feels right, or whether it "bears witness" in your spirit. Few ever open the Torah to test it. If a word fails, the prophet is "still learning."`,
            ],
            word: [
              `At Delphi, the priestess did not give plain answers. Her words were said to come out wild and hard to follow. A temple official called the *prophētēs* stood by and shaped her words into an answer people could take home, often in verse.`,
              `Plato says the same. About 360 BC he wrote that no man in his right mind receives inspired divination, and that the prophets are not the ones in the frenzy; they are the ones who explain it. So in the Greek world, a prophet was the interpreter for a spirit-seized speaker. Many churches now follow that same pattern: first the strange sounds, then someone to explain them.`,
            ],
            hebrew: [
              `Peter shows us the Hebrew word beneath it. He quotes Moses: "A prophet shall Yahuah your God raise up unto you of your brethren, like unto me" (Acts 3:22). Moses says what a prophet is: "I will ... put my words in his mouth; and he shall speak unto them all that I shall command him" (Deuteronomy 18:18).`,
              `The Hebrew word is *navi*: one who speaks Yahuah's words plainly, with his own mouth and his own mind. A *navi* was always tested. If his word did not come to pass, he spoke "presumptuously" (Deuteronomy 18:22). If he led people to other gods, even with signs, he was false (Deuteronomy 13:1-3). Isaiah gives the test in one line: "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them" (Isaiah 8:20).`,
            ],
            reread: [`The way Paul meant it: let two or three men who speak Yahuah's words speak in turn, and let the others test what they say against the Torah. Paul says the prophets stay in control the whole time: "the spirits of the prophets are subject to the prophets" (1 Corinthians 14:32). No frenzy, no one taken over, and no second man needed to explain what the first one meant.`],
            timeline: [
              ["Sinai", `A prophet speaks Yahuah's words and is tested by them (Deuteronomy 18:18-22).`],
              ["About 360 BC", `Plato calls prophets the interpreters of those who speak in a god-sent frenzy.`],
              ["About 55 AD", `Paul: prophets speak in turn, stay in control, and are judged (1 Corinthians 14:29-32).`],
              ["About 170 AD", `Montanus, with two women, Priscilla and Maximilla, claims a "New Prophecy" spoken in ecstasy; the churches of his day reject it.`],
              ["1948", `The Latter Rain movement in Saskatchewan claims to restore prophets and apostles.`],
              ["Today", `A message in tongues, then an "interpretation," then "thus saith the Lord," tested by no one.`],
            ],
            built: [
              `Tongues plus interpretation: the Delphi pattern of a spirit-seized speaker and someone to explain him.`,
              `New words from heaven: "prophetic words" treated like Scripture but never tested by the Torah.`,
              `Prophets whose failed words are excused instead of judged.`,
            ],
          },
          {
            id: "ekstasis", greek: "Ekstasis", kjv: "trance", role: "The root word", more: "Ekstasis on Greek Influence",
            verse: { ref: "Acts 10:10", text: "And he became very hungry, and would have eaten: but while they made ready, he fell into a trance," },
            taught: [
              `Peter fell into a trance. Many preachers say the Spirit came on him so strongly that he left his senses. That is used to defend what happens in some churches: people falling to the floor, shaking, laughing, or lying still for a long time. They call it being "slain in the Spirit." If it overpowers you, they say, it must be God.`,
            ],
            word: [
              `*Ekstasis* means "standing outside yourself." The Greeks used it for the wild worship of Dionysus, the god of wine. His women ran through the hills in a frenzy, out of their minds. Plato praised this kind of madness as a gift from the gods, better than a sound mind, and named the priestess at Delphi as his example.`,
              `About 40 AD, Philo of Alexandria wrote that when the divine Spirit arrives, the human mind is driven out. About 170, Montanus lived it out. As Epiphanius later recorded, he said a man is like a lyre, and the Spirit plays him like a pick. So to a Greek reader, a trance meant losing yourself: the god takes over and you are gone. That is the picture the pulpit brings to this verse.`,
            ],
            hebrew: [
              `The Greek Old Testament used this same word for something very different. When Yahuah put Adam into a deep sleep to make the woman, the translators wrote *ekstasis* (Genesis 2:21). They did it again when Abram fell into a deep sleep and Yahuah gave him His covenant promise (Genesis 15:12). The Hebrew word there is *tardemah*, a deep sleep: man at rest while Yahuah works. No frenzy at all.`,
              `And Yahuah said how He speaks to His prophets: "I Yahuah will make myself known unto him in a vision, and will speak unto him in a dream" (Numbers 12:6). A Hebrew vision came to a man who could see, hear, and answer back.`,
            ],
            reread: [`The way Luke meant it: he was very hungry, but while they were getting the meal ready, Yahuah showed him a vision. Look at what Peter did inside that trance. He argued back and refused to eat anything common or unclean (Acts 10:14). He still knew the Torah well enough to refuse. Afterward he "doubted in himself what this vision which he had seen should mean" (Acts 10:17), and later he "rehearsed the matter from the beginning, and expounded it by order" (Acts 11:4). His mind was awake the whole time. "For God is not the author of confusion, but of peace" (1 Corinthians 14:33).`],
            timeline: [
              ["405 BC", `Euripides' *The Bacchae*: the women of Dionysus run wild, out of their minds in his worship.`],
              ["About 370 BC", `Plato's *Phaedrus*: madness sent by the gods brings the greatest blessings.`],
              ["About 250 BC on", `The Greek Old Testament uses *ekstasis* for Adam's deep sleep (Genesis 2:21).`],
              ["About 170 AD", `Montanus prophesies in ecstasy, out of his own control; the churches of his day reject him.`],
              ["1801", `At Cane Ridge, Kentucky, crowds at a camp meeting fall, shake, and cry out, and it is called the work of the Spirit.`],
              ["1994", `The "Toronto Blessing" spreads holy laughter and falling to churches around the world.`],
            ],
            built: [
              `Slain in the Spirit: falling, shaking, and holy laughter treated as signs of Yahuah.`,
              `The mind switched off: the idea that the deeper the worship, the less you are in control.`,
            ],
          },
          {
            id: "charisma", greek: "Charisma", kjv: "gift", role: "The root word", more: "Charisma on Greek Influence",
            verse: { ref: "1 Corinthians 12:4", text: "Now there are diversities of gifts, but the same Spirit." },
            taught: [
              `The gifts of the Spirit are signs of power: tongues, healing, prophecy, miracles. A church that has them is alive. A church that does not is dead. The "charismatic" churches are the ones where the Spirit is moving, and the first gift every believer should seek is tongues.`,
            ],
            word: [
              `*Charisma* is built on *charis*, the word for favor. To the Greeks, the Charites, the three Graces, were goddesses who handed out charm, beauty, and delight. Hesiod named them about 700 BC.`,
              `Early in the 1900s, the German scholar Max Weber made "charisma" the word for a leader's magnetic personal power. In the 1960s, the new tongues movement inside the older churches took the name "charismatic." The word had come to mean a feeling of power and a strong personality.`,
            ],
            hebrew: [
              `Yahuah's gifts build His house. He filled Bezalel "with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship" (Exodus 31:3), so the tabernacle could be built.`,
              `Paul says the same of the gifts: they are "for the edifying of the body of Messiah" (Ephesians 4:12). "For God is not the author of confusion, but of peace" (1 Corinthians 14:33). "Let all things be done decently and in order" (1 Corinthians 14:40).`,
            ],
            reread: [`"Diversities of gifts." Not one gift that everyone must have. Paul asks plainly, "do all speak with tongues?" (1 Corinthians 12:30). The answer is no. Notice too that in the King James Version, the word "unknown" in "unknown tongue" is printed in italics (1 Corinthians 14:2). The translators added it. Paul did not write it.`],
            timeline: [
              ["About 700 BC", `Hesiod names the three Graces, the Charites.`],
              ["About 55 AD", `Paul writes that the gifts are many and are given to build up the assembly.`],
              ["1922", `Max Weber's *Economy and Society*, published after his death, makes "charisma" mean personal power.`],
              ["1960", `Dennis Bennett, an Episcopal priest in California, announces he has spoken in tongues.`],
              ["1967", `The Catholic Charismatic Renewal begins.`],
              ["1972", `Linguist William Samarin studies recorded tongues and finds no human language in them.`],
            ],
            built: [
              `The charismatic movement, which measures gifts by sensation, not by building up the assembly.`,
              `Tongues sought first, though Paul lists them last.`,
              `Churches judged by their noise instead of their order.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed Delphi. Yahuah promised "a pure language," so that all could call on His Name "with one consent" (Zephaniah 3:9). On Shavuot His power came, and every man heard the wonderful works of God in his own language. The gift was a real language, spoken to be understood, tested by the Torah, and given to build up the assembly in good order. And at the end, John saw every nation and tongue before the throne, crying out with one loud voice (Revelation 7:9-10).`,
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
  "05": {
    oldPaths: {
      kicker: "The Old Path · Immortal Soul",
      title: "He Became a Living Soul",
      subtitle: "He Did Not Receive One",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah "formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul" (Genesis 2:7). Man was not handed a soul. He became one. The Hebrew is <em>nephesh chayyah</em>, a living creature, the same words used of the cattle in Genesis 1:24. Dust plus the breath of Yahuah makes a living person. Take the breath away and the dust is what is left: "dust thou art, and unto dust shalt thou return" (Genesis 3:19).`,
            `A <em>nephesh</em> can die. "The soul that sinneth, it shall die" (Ezekiel 18:4). When a man dies, "his thoughts perish" (Psalm 146:4), and "the dead know not any thing" (Ecclesiastes 9:5). The breath goes back to the One who gave it (Ecclesiastes 12:7). Only Yahuah "hath immortality" (1 Timothy 6:16). Men receive it at the resurrection, when "this mortal must put on immortality" (1 Corinthians 15:53).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Yahuah told Adam the plain truth: "thou shalt surely die" (Genesis 2:17). The serpent said the opposite: "Ye shall not surely die" (Genesis 3:4). Then Yahuah set cherubims at the way of the tree of life, "lest he put forth his hand ... and live for ever" (Genesis 3:22-24). Life without end was kept behind a guarded gate.`,
            `Israel lived by that. Their kings "slept with" their fathers and were buried (1 Kings 2:10). The Torah forbade asking the dead anything; the "necromancer" was an abomination to Yahuah (Deuteronomy 18:11-12). The dead were not watching. They were waiting.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"dust thou art, and unto dust shalt thou return" (Genesis 3:19).`],
            ["Job", `"till the heavens be no more, they shall not awake" (Job 14:12).`],
            ["Solomon", `"the dead know not any thing" (Ecclesiastes 9:5).`],
            ["Daniel", `"many of them that sleep in the dust of the earth shall awake" (Daniel 12:2).`],
            ["Yahushua", `"Our friend Lazarus sleepeth; but I go, that I may awake him" (John 11:11).`],
            ["Paul", `"this mortal must put on immortality" (1 Corinthians 15:53).`],
          ],
        },
      ],
      closing: `In Revelation, Yahushua says, "I am he that liveth, and was dead" (Revelation 1:18). He truly died. To His people He promises, "be thou faithful unto death, and I will give thee a crown of life" (Revelation 2:10). Life is given, not owned. And the guarded gate opens again: "Blessed are they that do his commandments, that they may have right to the tree of life" (Revelation 22:14).`,
      torah: ["Genesis 2:7", "Genesis 3:19", "Genesis 3:22"],
      witness: ["Ezekiel 18:4", "Ecclesiastes 9:5", "Psalm 146:4", "1 Timothy 6:16", "1 Corinthians 15:53"],
      turn: {
        text: "But Christianity went another way. It believed the serpent: a soul that cannot die, awake and on the move the moment the body stops.",
        label: "The Departure: Immortal Soul",
      },
    },

    departure: {
      kicker: "The Departure · 05",
      title: "Immortal Soul",
      subtitle: "You Are Not Immortal — And the Serpent Told You Otherwise",
      attribution: "You've been quoting Plato's Phaedo and calling it Scripture.",
      taught: [
        `Every person has a soul that can never die. When the body stops, the soul slips out and lives on, fully awake, and goes straight to heaven or straight to hell.`,
        `Rome teaches it as settled doctrine: each soul is made directly by God, it is immortal, and it does not perish when it leaves the body at death. The Westminster Confession, the standard of Presbyterian churches, says souls "neither die nor sleep" but "immediately return to God." Baptist, Methodist, Pentecostal, and nondenominational pulpits say the same at every graveside: "absent from the body, ... present with the Master" (2 Corinthians 5:8). Across the whole church the undying soul is not argued. It is assumed.`,
      ],
      roots: [
        `The first voice to say it was the serpent's: "Ye shall not surely die" (Genesis 3:4). The Torah says man "became a living soul" (Genesis 2:7), a <em>nephesh</em>, a living creature, the same words used of the cattle in Genesis 1:24. And a <em>nephesh</em> can die (Ezekiel 18:4).`,
        `The Greeks gave the serpent's lie a philosophy. About 380 BC Plato wrote the <em>Phaedo</em>, the story of Socrates' last day, in which Socrates argues that the soul cannot die and that death only sets it free from the body. When the Hebrew Scriptures were put into Greek, <em>nephesh</em> became <em>psychē</em>, and Plato's meaning traveled with the word. (The underworld that soul was sent to, <em>Hadēs</em>, is opened on the Hell page.) Six Greek words carried the undying soul into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "psyche", greek: "Psychē", kjv: "soul", role: "The root word", more: "Psychē on Greek Influence",
            verse: { ref: "Acts 2:27", text: "Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption." },
            taught: [
              `When Yahushua died, His soul stayed awake and went down to hell for three days. Some say He preached there. Some say He suffered there. The Apostles' Creed, recited in Catholic and Protestant churches alike, says, "he descended into hell." This verse is used to prove that the soul keeps living after the body dies.`,
            ],
            word: [
              `The Greek copy of this verse uses two words. *Psychē* was Plato's word for a soul that cannot die. It leaves the body and lives on. In later Greek and Roman story Psyche became a maiden with butterfly wings: the soul flying free of the body.`,
              `*Hadēs* was the Greek god of the dead and the name of his underworld (opened on the Hell page). Put those two words together, and a Greek reader sees a living soul down in the underworld. That is what the pulpit still sees.`,
            ],
            hebrew: [
              `But Peter was quoting David, and David wrote in Hebrew: "For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption" (Psalm 16:10).`,
              `The Hebrew word for soul is *nephesh*. It means a living creature, the person, his life (Genesis 2:7). It can even mean a corpse: the Nazirite "shall come at no dead body," in Hebrew no dead *nephesh* (Numbers 6:6). The Hebrew word for hell is *Sheol*. It means the grave. Solomon says there is no work and no knowledge there (Ecclesiastes 9:10). So David is saying the same thing twice: You will not leave me in the grave. You will not let me rot.`,
            ],
            reread: [`Now read it the way David meant it: "You will not leave My life in the grave. You will not let My body decay." Peter explains it himself a few verses later: "his soul was not left in hell, neither his flesh did see corruption" (Acts 2:31). Then he says David is still dead and buried, his tomb still there: "David is not ascended into the heavens" (Acts 2:29, 34). This verse is not about a soul visiting the underworld. It is about a body that walked out of the tomb on the third day.`],
            timeline: [
              ["The Garden", `The serpent: "Ye shall not surely die" (Genesis 3:4). The first lie.`],
              ["About 380 BC", `Plato gives the lie a philosophy: the *psychē* cannot die (*Phaedo*).`],
              ["About 250 BC", `In Alexandria the Torah is put into Greek; *nephesh* becomes *psychē*, and Plato's meaning comes with the word.`],
              ["About 210 AD", `Tertullian appeals openly to Plato's view that every soul is immortal.`],
              ["About 420 AD", `Augustine, a reader of the Platonists before his conversion, makes the immortal soul a pillar of Western teaching.`],
              ["1513", `Rome's Fifth Lateran Council condemns anyone who says the soul is mortal.`],
              ["1646", `The Protestant Westminster Confession: souls "having an immortal subsistence, immediately return to God" at death.`],
            ],
            built: [
              `Hell as endless torment. An undying soul must suffer forever (see The Departure: Hell).`,
              `Heaven at death. The soul flies upward, like Psyche on her wings.`,
              `A judgment at death, and then a second one. Scripture knows one judgment, and the dead come to it out of the grave: "death and hell delivered up the dead which were in them" (Revelation 20:13).`,
              `Purgatory, prayers for the dead, and praying to saints. All of them need the dead to be awake somewhere.`,
            ],
          },
          {
            id: "pneuma", greek: "Pneuma", kjv: "spirit", role: "The root word", more: "Pneuma on Greek Influence",
            verse: { ref: "Luke 23:46", text: "And when Yahushua had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost." },
            taught: [
              `When Yahushua died, His spirit left His body and went straight to the Father in heaven, while His body lay in the tomb. This verse is used to prove that every believer's spirit does the same. The moment you die, your spirit flies home to God, awake and aware. And when someone shows that the soul can die, the answer comes back: "Well, the spirit lives on."`,
            ],
            word: [
              `*Pneuma* means breath or wind. But the Greek philosophers called the Stoics, from about 300 BC, taught that *pneuma* was a fiery, divine breath running through the whole universe. A man's spirit, they said, was a spark of that fire, and some of them taught that the souls of the wise lived on after death until the world was burned up.`,
              `When the church read "spirit" that way, the word stopped meaning breath. It became a second self that lives on after the body dies.`,
            ],
            hebrew: [
              `Yahushua was quoting David: "Into thine hand I commit my spirit" (Psalm 31:5). The Hebrew word is *ruach*. It means breath or wind. And man and beast have the same *ruach*: "as the one dieth, so dieth the other; yea, they have all one breath" (Ecclesiastes 3:19). If a man's *ruach* is a thinking person that lives on, so is a cow's.`,
              `Solomon tells us where the breath goes at death: "Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it" (Ecclesiastes 12:7). The breath goes back to the One who gave it. Neither one goes back thinking: "His breath goeth forth, he returneth to his earth; in that very day his thoughts perish" (Psalm 146:4).`,
            ],
            reread: [`Now read it the way Yahushua meant it: "Father, I give My breath back into Your hands. I trust You to give it back to Me." Three days later He said so Himself. When Mary reached for Him outside the tomb, He told her: "Touch me not; for I am not yet ascended to my Father" (John 20:17). His spirit had not flown to heaven on the day He died. He lay dead in the tomb, His life kept safe in His Father's hand, until the Father raised Him up.`],
            timeline: [
              ["About 300 BC", `The Stoics: *pneuma* is divine fire; the human spirit is a spark of it that survives the body.`],
              ["About 230 AD", `Origen divides man into body, soul, and spirit.`],
              ["1646", `The Westminster Confession borrows Solomon's words: souls "immediately return to God who gave them," now read as a living person going home.`],
              ["1909", `The Scofield Reference Bible's note on 1 Thessalonians 5:23 teaches man as three parts, spirit, soul, and body, to millions of Protestant readers.`],
              ["Today", `When the soul argument fails: "Well, the spirit lives on."`],
            ],
            built: [
              `The "spirit lives on" fallback: the same undying self, moved to a new word.`,
              `The spirit going to heaven at death: Ecclesiastes 12:7 read through the Stoics instead of through Genesis 2:7.`,
              `The same move turned the Spirit of Yahuah, His own breath and power, into a third person of a Trinity.`,
            ],
          },
          {
            id: "athanasia", greek: "Athanasia", kjv: "immortality", role: "The root word", more: "Athanasia on Greek Influence",
            verse: { ref: "1 Corinthians 15:53", text: "For this corruptible must put on incorruption, and this mortal must put on immortality." },
            taught: [
              `Your soul is already immortal. It was made that way and it can never die. Rome's catechism calls the soul "immortal"; the Protestant confessions say it has "an immortal subsistence." So this verse is only about the body catching up. At the resurrection your body will finally become as deathless as your soul already is.`,
            ],
            word: [
              `*Athanasia* means deathlessness, not able to die. In Homer's old Greek poems, the gods are simply called "the deathless ones." Not being able to die was what made a god a god.`,
              `Then Plato, the Greek philosopher, gave that same deathlessness to every human soul (*Phaedo*). So when the church read Paul's word, it heard Plato: man already has it inside him.`,
            ],
            hebrew: [
              `Paul tells us which verse he has in mind. In the very next line he says, "then shall be brought to pass the saying that is written, Death is swallowed up in victory" (1 Corinthians 15:54). He is quoting Isaiah: "He will swallow up death in victory" (Isaiah 25:8). The Hebrew word *bala* means to swallow up, the way the earth swallowed Korah. "In victory" is *netsach*, forever, for good. Yahuah will swallow up death for good. It is something He will do at the end, not something man already owns.`,
              `Today Scripture gives deathlessness to One alone: Yahuah, "Who only hath immortality" (1 Timothy 6:16). And after the fall, man was kept away from the tree of life, "lest he put forth his hand, and take also of the tree of life, and eat, and live for ever" (Genesis 3:22). He did not have it, and he was not allowed to take it.`,
            ],
            reread: [`Now read it the way Paul meant it: "This body that dies has to be clothed with deathlessness. It does not have it yet. It will receive it on the day Yahuah swallows up death for good." You only put on what you do not already have. Paul says what would happen to the dead if there were no resurrection: "Then they also which are fallen asleep in Messiah are perished" (1 Corinthians 15:18). If the soul lived on anyway, they could not perish. And "who only hath immortality" is the Father, "whom no man hath seen" (1 Timothy 6:16). The Son truly died (Revelation 1:18) until "God the Father ... raised him from the dead" (Galatians 1:1).`],
            timeline: [
              ["About 750 BC", `Homer: the gods are "the deathless ones."`],
              ["About 380 BC", `Plato: the human soul is deathless by nature (*Phaedo*).`],
              ["About 150 AD", `Justin Martyr still pushes back: souls are not immortal by their own nature (*Dialogue with Trypho* 5).`],
              ["About 210 AD", `Tertullian accepts the soul's immortality, and the pushback fades.`],
              ["1513", `Rome defines the immortality of the soul as dogma (Fifth Lateran Council).`],
              ["1992", `The Catechism of the Catholic Church: the soul "is immortal."`],
            ],
            built: [
              `Man given the mark of a god: a nature that cannot die.`,
              `A resurrection made almost unnecessary. If the soul already lives on, the raising of the dead becomes an afterthought instead of the hope.`,
              `Endless existence for the wicked, since a deathless soul must be somewhere (see The Departure: Hell).`,
            ],
          },
          {
            id: "daimonion", greek: "Daimonion", kjv: "devil", role: "The root word", more: "Daimonion on Greek Influence",
            verse: { ref: "1 Corinthians 10:20", text: "But I say, that the things which the Gentiles sacrifice, they sacrifice to devils, and not to God: and I would not that ye should have fellowship with devils." },
            taught: [
              `Behind every idol stands a living spirit, a demon roaming the earth. Many teachers say demons are the restless spirits of beings who died. Rome honors appearances of the departed saints and asks them to pray for the living. And at Protestant funerals the same idea turns gentle: Grandma is still near, watching over us.`,
            ],
            word: [
              `*Daimonion* is the word the KJV renders "devils." To the Greeks, a *daimōn* was a spirit being, and very often the soul of someone who had died. The Greek poet Hesiod taught that the good men of a golden age long ago became *daimones* when they died. Now, he said, they roam the earth unseen, watching over the living (*Works and Days*).`,
            ],
            hebrew: [
              `But Paul is quoting Moses: "They sacrificed unto devils, not to God; to gods whom they knew not, to new gods that came newly up, whom your fathers feared not" (Deuteronomy 32:17). The Hebrew word is *shedim*. Moses tells us what they are: false gods, "gods whom they knew not," the idols of the nations. Nothing in the verse is about the spirits of the dead.`,
              `The Torah forbids "a consulter with familiar spirits, or a wizard, or a necromancer" (Deuteronomy 18:11), and the prophets forbid seeking the dead at all: "should not a people seek unto their God? for the living to the dead?" (Isaiah 8:19). Yahuah's people go to Him, not to the dead.`,
            ],
            reread: [`Paul keeps reading from the same song of Moses in the next breath, asking whether they mean to "provoke" Him "to jealousy" (1 Corinthians 10:22). Moses had written, "They have moved me to jealousy with that which is not God" (Deuteronomy 32:21). Paul is warning about idol worship, Israel's oldest sin. He is not saying the dead are wandering near us. Solomon settled that: "the dead know not any thing" (Ecclesiastes 9:5).`],
            timeline: [
              ["About 700 BC", `Hesiod: the dead of the golden age become *daimones*, guardians of the living.`],
              ["About 385 BC", `Plato: *daimones* carry messages between gods and men (*Symposium*).`],
              ["About 593 AD", `Pope Gregory the Great's *Dialogues* fill the church with stories of souls of the dead appearing to the living.`],
              ["1848", `The séance movement, Spiritualism, begins in New York and spreads through Protestant America.`],
              ["Today", `At the funeral: "She's watching over us now."`],
            ],
            built: [
              `Loved ones watching over the living: Hesiod's guardians, preached at funerals.`,
              `Séances and spirit contact: the very thing Deuteronomy 18 forbids.`,
              `Saints as go-betweens who hear the prayers of the living.`,
            ],
          },
          {
            id: "phantasma", greek: "Phantasma", kjv: "spirit", role: "The root word", more: "Phantasma on Greek Influence",
            verse: { ref: "Matthew 14:26", text: "And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear." },
            taught: [
              `Even the disciples believed in ghosts. They saw a figure on the water in the dark and thought it was a spirit of the dead. Many take this as proof that ghosts are real: the dead can come back and be seen. Catholic writers have long told of souls from purgatory appearing to ask for prayers, and many Protestants say a departed loved one came to them in the night.`,
            ],
            word: [
              `The Greek copy of Matthew uses *phantasma* here. It means an apparition, a ghost. The Greeks believed the dead could be seen. In Homer's *Odyssey* the shades of the dead rise up from the underworld to speak with the hero. Plato wrote that the souls of wicked men hang around graves and are seen there as ghostly shapes, *phantasmata* (*Phaedo*).`,
              `So a Greek reader took this verse as one more ghost story.`,
            ],
            hebrew: [
              `Whatever the frightened fishermen shouted in their own tongue, the Scriptures they grew up on had already answered it. The dead do not come back to visit: "he that goeth down to the grave shall come up no more. He shall return no more to his house" (Job 7:9-10). The Hebrew word for grave there is *Sheol*.`,
              `And the prophets warned against reaching for the dead: "Seek unto them that have familiar spirits ... should not a people seek unto their God? for the living to the dead?" (Isaiah 8:19). "Familiar spirit" is *ob*, the ghost-voice a medium claims to call up. Yahuah's people were told to have nothing to do with it.`,
            ],
            reread: [`Matthew is telling us what they were afraid of. He is not teaching that ghosts are real. Yahushua answered their fear at once: "Be of good cheer; it is I; be not afraid" (Matthew 14:27). When they thought the same thing after He rose, He showed them His hands and feet: "handle me, and see; for a spirit hath not flesh and bones, as ye see me have" (Luke 24:39). He did not come back as a ghost. He came back in a body, raised from the dead.`],
            timeline: [
              ["About 750 BC", `Homer: the shades of the dead rise to speak with Odysseus.`],
              ["About 380 BC", `Plato: ghostly shapes of souls hang around graves (*Phaedo*).`],
              ["About 30 AD", `The disciples cry "phantasma" on the water, a fear Yahushua corrected.`],
              ["About 100 AD", `Pliny the Younger's haunted house in Athens.`],
              ["About 593 AD", `Souls of the dead appear to the living in Gregory the Great's *Dialogues*.`],
              ["Today", `Ghosts, hauntings, and visits from the departed.`],
            ],
            built: [
              `Ghost belief: the dead said to be awake, wandering, and able to appear.`,
              `Souls from purgatory asking the living for prayers and Masses.`,
              `Fear of the dead, where Scripture says the dead sleep until the resurrection.`,
            ],
          },
          {
            id: "nous", greek: "Nous", kjv: "mind", role: "The root word", more: "Nous on Greek Influence",
            verse: { ref: "Romans 7:25", text: "I thank God through Yahushua Messiah our Master. So then with the mind I myself serve the law of God; but with the flesh the law of sin." },
            taught: [
              `Paul is saying the real Paul is his mind. The body is only flesh, a shell that drags him down. When the body dies, the mind, the true person, is set free and keeps on thinking with God. Catholic teaching, following Thomas Aquinas, calls the "intellectual soul" incorruptible. Many evangelicals say it this way: "You are a spirit, you have a soul, and you live in a body."`,
            ],
            word: [
              `*Nous* means mind. Greek philosophers made it the highest part of man. About 450 BC Anaxagoras taught that *Nous*, a cosmic Mind, orders all things. Plato taught that the thinking part of the soul is divine and cannot die, and that the body is its prison. Aristotle said the active mind alone is "immortal and eternal" (*On the Soul*).`,
            ],
            hebrew: [
              `Paul tells us what he means three verses earlier: "For I delight in the law of God after the inward man" (Romans 7:22). That is David's language. David did not keep Yahuah's word in an undying mind. He kept it in his heart: "Thy word have I hid in mine heart, that I might not sin against thee" (Psalm 119:11). The Hebrew word is *lev*, the heart, the inner man who thinks, chooses, and loves Yahuah's Torah.`,
              `And the Hebrew heart dies with the man: "His breath goeth forth, he returneth to his earth; in that very day his thoughts perish" (Psalm 146:4). There is no mind that slips out of the body and keeps on thinking.`,
            ],
            reread: [`Now read it the way Paul meant it: "In my heart I choose to serve Yahuah's Torah, but my flesh keeps pulling me toward sin." Paul never asks to escape his body. He asks for it to be rescued: "who shall deliver me from the body of this death?" (Romans 7:24). A few verses on he gives the answer, not a mind floating free, but a body raised up: "he that raised up Messiah from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you" (Romans 8:11).`],
            timeline: [
              ["About 450 BC", `Anaxagoras: *Nous*, a cosmic Mind, orders all things.`],
              ["About 360 BC", `Plato: the reasoning part of the soul is divine and immortal (*Timaeus*).`],
              ["About 330 BC", `Aristotle: the active mind alone is "immortal and eternal" (*On the Soul*).`],
              ["About 1270", `Thomas Aquinas argues that the intellectual soul cannot perish.`],
              ["1641", `Descartes' *Meditations*: "I think," the mind a separate substance from the body.`],
              ["Today", `The near-death story: "Your consciousness lives on after the brain stops."`],
            ],
            built: [
              `The mind that survives death: Plato's soul moved into the brain.`,
              `Consciousness after death: the near-death testimony treated as proof against Psalm 146:4.`,
              `The body treated as a prison to escape, not a body to be raised.`,
            ],
          },
        ],
      },
      oldPath: `Scripture places the hope of the dead in one event: the resurrection. Yahushua called death sleep (John 11:11-14), and said the dead would hear His voice and come out of the graves (John 5:28-29), not down from heaven and not up from a fire. The serpent said, "Ye shall not surely die." Plato gave the lie a name, and six Greek words gave it a home in the Bible. The Torah says what it always said: the soul that sinneth, it shall die, and those who are Yahuah's shall rise and put on immortality at the last trump (1 Corinthians 15:52-53). John saw the end of it: "there shall be no more death, neither sorrow, nor crying" (Revelation 21:4).`,
    },
  },
  "06": {
    oldPaths: {
      kicker: "The Old Path · Seven-Year Tribulation · Revelation · 1 of 3",
      title: "The Book Quotes",
      subtitle: "Every Symbol Was Already Written",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `The Revelation brings in no new symbol. Every picture in it was written first in the Law and the Prophets. The trumpets and vials echo the plagues of Egypt (Exodus 7-12). The judgments "seven times" over come from Leviticus (Leviticus 26:18-28). The beasts come from Daniel (Daniel 7). The eaten scroll comes from Ezekiel (Ezekiel 2:9-3:3), and the lampstands from Zechariah (Zechariah 4). Read the book against those pages and it explains itself.`,
            `Daniel's clock is written there too. "Seventy weeks are determined upon thy people" (Daniel 9:24). They are weeks of years, 490 in all, and the count never stops: seven weeks, then sixty-two, then one. In that last week Messiah would "confirm the covenant with many," and "in the midst of the week" cause "the sacrifice and the oblation to cease" (Daniel 9:27).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Torah taught Israel to count years in sevens: "seven sabbaths of years ... seven times seven years" (Leviticus 25:8). Jacob had already served a week of years for Rachel. "Fulfil her week," Laban told him, and Jacob served seven more years (Genesis 29:27-28).`,
            `Then the last week came. Yahushua began to preach, saying "The time is fulfilled" (Mark 1:15). After about three and a half years He was cut off at Pesach in 31 AD, in the midst of the week. His blood was "shed for many" (Matthew 26:28), and after His offering "there is no more offering for sin" (Hebrews 10:18). For about three and a half more years the word stayed with Israel. Then Stephen was stoned, about 34 AD, and the scattered believers "went every where preaching the word" (Acts 8:4). The seventieth week was finished, start to end.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Daniel", `read Jeremiah's seventy years and was given seventy weeks (Daniel 9:2, 24).`],
            ["Ezekiel", `ate the roll, and it was "as honey for sweetness" (Ezekiel 3:3).`],
            ["Yahushua", `"The time is fulfilled" (Mark 1:15).`],
            ["Stephen", `saw "the heavens opened" as the last week closed (Acts 7:56).`],
            ["Paul", `"when the fulness of the time was come, God sent forth his Son" (Galatians 4:4).`],
            ["John", `took the little book and ate it, as Ezekiel had (Revelation 10:10).`],
          ],
        },
      ],
      closing: `Daniel was told to "seal the book, even to the time of the end" (Daniel 12:4). John was told the opposite: "Seal not the sayings of the prophecy of this book: for the time is at hand" (Revelation 22:10). The book Daniel sealed, the Revelation opens.`,
      torah: ["Genesis 29:27-28", "Exodus 7-12", "Leviticus 25:8", "Leviticus 26:18-28"],
      witness: ["Daniel 9:24-27", "Daniel 12:4", "Ezekiel 2:9-3:3", "Zechariah 4", "Mark 1:15", "Hebrews 10:18", "Revelation 22:10"],
      turn: {
        text: "But Christianity went another way. It cut Daniel's last week loose, moved it two thousand years ahead, and handed Messiah's covenant to the Antichrist.",
        label: "The Departure: The Seven-Year Tribulation",
      },
    },

    departure: {
      kicker: "The Departure · 06 · Revelation · 1 of 3",
      title: "The Seven-Year Tribulation",
      subtitle: "Daniel's Last Week Was Cut Loose and Moved Two Thousand Years",
      attribution: "You've been quoting a Jesuit's commentary and calling it Scripture.",
      taught: [
        `Most prophecy preachers teach it the same way. Daniel's clock ran for sixty-nine weeks, up to Messiah. Then it stopped. The whole church age is a gap, a pause between the sixty-ninth week and the seventieth. When the church is taken out, the clock starts again. A world ruler, the Antichrist, signs a seven-year covenant with Israel, and a third temple is built. In the middle of the seven years he breaks the covenant, stops the sacrifices, and sets himself up in the temple. Three and a half years of Great Tribulation follow, and the seals, trumpets, and vials of the Revelation are all crowded into those seven years.`,
        `Baptist, Pentecostal, Assemblies of God, Bible church, and nondenominational pulpits preach that plan, and study Bibles print it in their notes. The Catholic Church does not teach the rapture, but its catechism still waits for a "final trial" and a coming Antichrist at the end of the age, and the future-Antichrist scheme was first drawn up by one of its own priests. Either way, Daniel's last week is still ahead, and the "he" who confirms the covenant is the enemy.`,
      ],
      roots: [
        `This doctrine did not come from a Greek god. It came from a broken count. The Greek translators wrote Daniel's "weeks" as <em>hebdomas</em>, a word Greek thinkers already treated as a sacred seven, a unit that stands on its own. Paul's "falling away" was <em>apostasia</em>, the Greek word for a revolt against a king. And "he who now letteth" was <em>katechō</em>, a plain verb for holding back, which Greek temples also used for men held fast by a god.`,
        `The gap came later. About 200 AD Hippolytus of Rome set the last week apart at the end of the world. About 1590 the Jesuit Francisco Ribera moved most of the Revelation into a future three and a half years under one Antichrist, away from Rome. In the 1830s John Nelson Darby built the gap into a system, and in 1909 the Scofield Reference Bible printed it beside the text. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "hebdomas", greek: "Hebdomas", kjv: "week", role: "The root word", more: "Hebdomas on Greek Influence",
            verse: { ref: "Daniel 9:27", text: "And he shall confirm the covenant with many for one week: and in the midst of the week he shall cause the sacrifice and the oblation to cease, and for the overspreading of abominations he shall make it desolate, even until the consummation, and that determined shall be poured upon the desolate." },
            taught: [
              `Sixty-nine weeks ran from the decree to rebuild Jerusalem up to Messiah. Then the clock stopped. The seventieth week is still future. The "he" who confirms the covenant is the Antichrist, who will sign a seven-year treaty with Israel and break it halfway through.`,
            ],
            word: [
              `*Hebdomas* simply means "a seven." But Greek thinkers made the seven sacred. The followers of Pythagoras called it the virgin number and gave it to the goddess Athena. The lawgiver Solon divided a man's life into ten sevens of years, and a medical writing from the school of Hippocrates was named *On Sevens*.`,
              `When the Greek translators came to Daniel's *shabua*, they wrote *hebdomas*. The word did not cut the week loose by itself. But a seven that stands alone, a unit with its own meaning, is easy to lift out of a count and set down somewhere else. Later teachers did exactly that.`,
            ],
            hebrew: [
              `*Shabua* is a seven, a week, and it can be a week of years. Laban told Jacob, "Fulfil her week," and Jacob served seven more years (Genesis 29:27-28). Torah taught Israel to count "seven sabbaths of years" to the jubilee (Leviticus 25:8).`,
              `Daniel's count is one count: seven weeks, then sixty-two, then one, seventy in all (Daniel 9:24-27). Nowhere does Scripture count seventy and mean sixty-nine, then two thousand years, then one.`,
            ],
            reread: [`"He shall confirm the covenant with many for one week." The one who confirms it is the Messiah of verse 26, "cut off, but not for himself." His blood was "shed for many" (Matthew 26:28). In the midst of the week, at Pesach in 31 AD, He caused the sacrifice to cease: after His offering "there is no more offering for sin" (Hebrews 10:18). About three and a half more years ran to Stephen, about 34 AD. The week is finished.`],
            timeline: [
              ["About 600 BC", `Solon divides a man's life into ten sevens of years.`],
              ["Second century BC", `The Greek translation of Daniel renders the seventy weeks as *hebdomades*.`],
              ["About 200 AD", `Hippolytus of Rome sets the last week apart at the end of the world, with the Antichrist in its midst.`],
              ["1830s", `John Nelson Darby makes the church age a "parenthesis" between the sixty-ninth and seventieth weeks.`],
              ["1909", `The Scofield Reference Bible prints the future seventieth week in its notes on Daniel 9.`],
              ["Today", `Every Middle East peace deal is watched as the start of the seven years.`],
            ],
            built: [
              `A seven-year tribulation that Scripture never names.`,
              `Messiah's covenant handed to the Antichrist.`,
              `The church age as a pause in prophecy, and a third temple waited for, though "there is no more offering for sin."`,
            ],
          },
          {
            id: "apostasia", greek: "Apostasia", kjv: "falling away", role: "The root word", more: "Apostasia on Greek Influence",
            verse: { ref: "2 Thessalonians 2:3", text: "Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition;" },
            taught: [
              `Some teach that the "falling away" is a great turning from the faith in the last generation. Others go further. They say *apostasia* means "departure," and the departure is the rapture: the church leaves the earth first, and only then is the man of sin revealed.`,
            ],
            word: [
              `In Greek histories, *apostasia* and its sister word *apostasis* named a revolt: a city or a province standing away from its king. It was a political word, for rebels and deserters.`,
              `The Greek history of the Maccabees uses it for what Antiochus forced on Judea. His officers came to the town of Modein to push the people into the *apostasia* and make them sacrifice to idols (1 Maccabees 2:15). To a Jew who read Greek, *apostasia* meant leaving the Torah.`,
            ],
            hebrew: [
              `*Mered*, rebellion. When the tribes beyond Jordan built an altar, they swore it was not "in rebellion, or ... in transgression against Yahuah" (Joshua 22:22). The Greek translators wrote *apostasia* there. Rebellion against Yahuah, not a trip to the sky.`,
            ],
            reread: [`Paul was accused of teaching the Jews "to forsake Moses" (Acts 21:21). In Greek it is the same word: an *apostasia* from Moses. The falling away is a falling away from the Law. That is why the one revealed after it is "that Wicked," the lawless one (2 Thessalonians 2:8), and why the power already at work is "the mystery of iniquity," of lawlessness (2 Thessalonians 2:7).`],
            timeline: [
              ["About 430 BC", `Herodotus uses the word family for the Greek cities' revolt against Persia.`],
              ["167 BC", `Antiochus IV forces Judea to leave the Law; the Greek history of the Maccabees calls it *apostasia*.`],
              ["About 51 AD", `Paul writes that the day will not come "except there come a falling away first."`],
              ["1526–1560", `Tyndale's New Testament and the Geneva Bible render it "a departing," meaning a departing from the faith.`],
              ["1949–1950", `E. Schuyler English argues that the departure is the rapture itself.`],
              ["Today", `Some pulpits call 2 Thessalonians 2:3 a rapture verse.`],
            ],
            built: [
              `A church gone from the earth before the man of sin appears.`,
              `Paul's warning turned into a comfort.`,
              `Lawlessness preached as liberty. The teaching that the Law is done away is itself the falling away Paul warned of.`,
            ],
          },
          {
            id: "katecho", greek: "Katechō", kjv: "letteth", role: "The root word", more: "Katechō on Greek Influence",
            verse: { ref: "2 Thessalonians 2:7", text: "For the mystery of iniquity doth already work: only he who now letteth will let, until he be taken out of the way." },
            taught: [
              `The one who "letteth," or restrains, is the Holy Spirit living in the church. When the church is raptured, the Spirit's restraint is taken out of the way with it, and the Antichrist is free to appear.`,
            ],
            word: [
              `*Katechō* is a plain verb: to hold fast, to hold back. Greek temple religion gave it a special use. At the temple of Serapis in Memphis, Egypt, men called *katochoi* lived shut inside the sacred grounds, sometimes for years. They were "held fast" by the god and could not leave until he let them go.`,
              `Paul's word carries little of that. The pagan freight here is small. The bigger change came later, when "he who now letteth" was made into the Holy Spirit as a separate person, one who could pack up and leave the earth.`,
            ],
            hebrew: [
              `No Hebrew word stands behind Paul's phrase. The picture beneath it is Daniel's. The fourth beast stands, and then a little horn comes up among its horns, plucking others up "by the roots" (Daniel 7:7-8). One power holds the ground until it is taken out of the way, and another rises in its place.`,
            ],
            reread: [`"Ye know what withholdeth" (2 Thessalonians 2:6). The Thessalonians knew. It was already there in Paul's day, holding: "he who now letteth." The earliest Christian writers said it was the Roman empire. Yahuah's Spirit is not taken out of the way. He promised to pour it "upon all flesh" (Joel 2:28), and Yahushua said, "I am with you alway, even unto the end of the world" (Matthew 28:20).`],
            timeline: [
              ["160s BC", `*Katochoi* are held fast at the temple of Serapis in Memphis.`],
              ["About 51 AD", `Paul writes of "what withholdeth."`],
              ["About 200 AD", `Tertullian says the restraint is the Roman state.`],
              ["476 AD", `The last emperor in the West is removed. Over the following centuries the bishop of Rome rises in the city the emperors left.`],
              ["1520s", `Luther and the Reformers name the papacy as the man of sin.`],
              ["1800s on", `Dispensational teachers make the restrainer the Holy Spirit in the church, removed at the rapture.`],
            ],
            built: [
              `The Spirit pictured as a separate person who leaves the earth.`,
              `A church that expects to be gone before the trouble.`,
              `The Reformers' reading of Rome set aside, the very reading Ribera's futurism was written to answer.`,
            ],
          },
        ],
      },
      oldPath: `Scripture counts seventy weeks and means seventy. The last of them belonged to Messiah. He confirmed the covenant with His own blood, was cut off in the midst of the week at Pesach in 31 AD, and ended the power of every other offering. The week closed about 34 AD, when Stephen fell and the word went out to the nations. Nothing is left on Daniel's clock for an Antichrist. The Revelation is read through the Law and the Prophets it quotes, not through a countdown with a hole cut in it. And the book Daniel was told to seal, John was told to leave open: "Seal not the sayings of the prophecy of this book: for the time is at hand" (Revelation 22:10).`,
    },
  },
  "07": {
    oldPaths: {
      kicker: "The Old Path · The Rapture · Revelation · 2 of 3",
      title: "Gathered at the Trumpet",
      subtitle: "The Gathering Comes After the Tribulation",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `At Sinai the trumpet sounded "exceeding loud," and Moses "brought forth the people out of the camp to meet with God" (Exodus 19:16-17). Yahuah gathered His people by trumpets (Numbers 10:2-3), and He set a yearly memorial of the blowing at Yom Teruah (Leviticus 23:24). The gathering of the saints follows the same pattern.`,
            `Scripture gives the order plainly. "Immediately after the tribulation of those days" the Son of man comes, and His angels gather His elect "with a great sound of a trumpet" (Matthew 24:29-31). It is "the last trump" (1 Corinthians 15:52). It does not come until the man of sin is revealed (2 Thessalonians 2:1-3). He will "appear the second time" (Hebrews 9:28), not a second time and then a third. One coming, one gathering, after the trouble.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Yahuah's people were kept through trouble, not taken out before it. In Noah's day the flood "took them all away," the wicked, and "Noah only remained alive" (Matthew 24:39; Genesis 7:23). In Egypt the plagues fell while Israel was still in the land, but Yahuah would "sever in that day the land of Goshen" (Exodus 8:22). In Babylon three men walked "in the midst of the fire," and the fire "had no power" on them (Daniel 3:25, 27).`,
            `At Sinai the people went out to meet Yahuah and stood at the foot of the mountain. They did not go up into the cloud and stay there. They met Him, and He "came down upon mount Sinai" (Exodus 19:20).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Noah", `carried through the flood: "Noah only remained alive" (Genesis 7:23).`],
            ["Moses", `brought the people out "to meet with God" (Exodus 19:17).`],
            ["Hananiah, Mishael, and Azariah", `"walking in the midst of the fire," with "no hurt" (Daniel 3:25).`],
            ["Yahushua", `"I pray not that thou shouldest take them out of the world" (John 17:15).`],
            ["Paul", `"the dead shall be raised incorruptible" at "the last trump" (1 Corinthians 15:52).`],
            ["John", `"your brother, and companion in tribulation" (Revelation 1:9).`],
          ],
        },
      ],
      closing: `The Revelation opens with that one day: "Behold, he cometh with clouds; and every eye shall see him" (Revelation 1:7).`,
      torah: ["Genesis 7:23", "Exodus 8:22", "Exodus 19:16-20", "Leviticus 23:24", "Numbers 10:2-3"],
      witness: ["Daniel 3:25-27", "Matthew 24:29-31, 39", "John 17:15", "1 Corinthians 15:52", "2 Thessalonians 2:1-3", "Hebrews 9:28", "Revelation 1:7, 9"],
      turn: {
        text: "But Christianity went another way. It split the one coming in two, and promised the church a secret escape before the trouble.",
        label: "The Departure: The Rapture",
      },
    },

    departure: {
      kicker: "The Departure · 07 · Revelation · 2 of 3",
      title: "The Rapture",
      subtitle: "The Secret Escape the Apostles Never Preached",
      attribution: "You've been quoting a Left Behind novel and calling it Scripture.",
      taught: [
        `Any moment now, the teaching goes, Messiah will come for His church. He will not come all the way to earth. He will stop in the air, and every true believer will vanish in an instant. Cars will drift without drivers, and the world will wonder where millions went. Seven years of tribulation follow on earth while the church is safe in heaven. Then He comes again, this time with His saints, to fight at Armageddon.`,
        `That is the pretribulation rapture. It is preached in most Baptist, Pentecostal, Assemblies of God, Calvary Chapel, Bible church, and nondenominational pulpits. Some teachers move the rapture to the middle of the seven years, or to just before the wrath. Catholic, Orthodox, Lutheran, and Reformed churches reject the secret rapture, but most of their pulpits still picture the saints caught up to go away to heaven, rather than going out to meet their King and coming back with Him.`,
      ],
      roots: [
        `The word "rapture" is Latin. Jerome's Latin Bible put "we shall be caught up" as <em>rapiemur</em>, and English took "rapture" from it. The Greek behind it, <em>harpazō</em>, was the word for Hades snatching a girl away to his kingdom. Paul's "to meet" was <em>apantēsis</em>, a city's welcome for a king on the road. His "coming" was <em>parousia</em>, the state visit of an emperor, and "appearing" was <em>epiphaneia</em>, a god showing himself in power.`,
        `The system came much later. The Jesuit Manuel Lacunza finished a book about 1790 on a future coming and a thousand-year kingdom. It was printed in Spain by 1812 and put into English by Edward Irving in 1827. In the 1830s John Nelson Darby taught a secret coming for the church before the tribulation and another after it. The Scofield Reference Bible spread it in 1909, <em>The Late Great Planet Earth</em> in 1970, and the <em>Left Behind</em> novels from 1995. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "harpazo", greek: "Harpazō", kjv: "caught up", role: "The root word", more: "Harpazō on Greek Influence",
            verse: { ref: "1 Thessalonians 4:17", text: "Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Master in the air: and so shall we ever be with the Master." },
            taught: [
              `"Caught up" is the rapture. In a moment, believers are snatched off the earth and carried to heaven. The rest of the world is left behind to face seven years of tribulation.`,
            ],
            word: [
              `*Harpazō* is a hard word. It means to snatch, to seize by force, the way a robber grabs a purse or a wolf takes a sheep. The Greeks used it for gods stealing people away. In the hymn to Demeter, Hades seizes the girl Persephone in his chariot and carries her down to his kingdom, while her mother searches the whole earth not knowing where she went.`,
              `The Harpies, whose name comes from the same root, were the "snatchers." When a man vanished without a trace, Homer's people said the Harpies had carried him off. A person snatched by a god simply disappeared.`,
              `About 400 AD Jerome's Latin Bible put the word as *rapiemur*, "we shall be seized," and English made "rapture" of it.`,
            ],
            hebrew: [
              `The Hebrew word for taking by force is *gazal*, used of robbery: "that which he took violently away" (Leviticus 6:4). But when Scripture shows a man taken up, the taking is seen. Elijah went up "by a whirlwind into heaven," and "Elisha saw it" (2 Kings 2:11-12). Yahushua was "taken up" while the disciples "beheld" (Acts 1:9).`,
            ],
            reread: [`"Caught up together with them in the clouds, to meet the Master in the air." The catching up is how the living join the risen dead at the meeting. It happens at "the trump of God," after "the dead in Messiah shall rise first" (1 Thessalonians 4:16). When the Spirit "caught away Philip," Philip "was found at Azotus," still on the earth and still preaching (Acts 8:39-40). And of Messiah's own taking up, the angels said He "shall so come in like manner as ye have seen him go" (Acts 1:11). Seen, not secret.`],
            timeline: [
              ["About 600 BC", `The hymn to Demeter tells of Hades snatching Persephone away.`],
              ["About 50 AD", `Paul writes 1 Thessalonians: "caught up ... to meet the Master."`],
              ["About 400 AD", `Jerome's Latin Bible renders it *rapiemur*.`],
              ["1830s", `John Nelson Darby teaches a secret, any-moment catching away before the tribulation.`],
              ["1970", `*The Late Great Planet Earth* calls the rapture "the ultimate trip."`],
              ["1995", `*Left Behind* opens with millions vanishing from the earth.`],
            ],
            built: [
              `Believers who vanish without a trace, as in the Greek stories.`,
              `An any-moment escape, with no sign to wait for.`,
              `A "left behind" world given seven more years to decide.`,
            ],
          },
          {
            id: "apantesis", greek: "Apantēsis", kjv: "to meet", role: "The root word", more: "Apantēsis on Greek Influence",
            verse: { ref: "Matthew 25:6", text: "And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him." },
            taught: [
              `We meet the Master in the air and go back up with Him to heaven. The marriage supper of the Lamb is held there during the seven years, while the earth suffers below.`,
            ],
            word: [
              `*Apantēsis* was a civic word. When a king, a governor, or a general came near a Greek city, its leading men went out on the road to meet him. They greeted him outside the walls, then turned around and escorted him into the city. The going out was never the destination. The visitor was.`,
              `Here the Greek custom does not mislead. It explains the verse. The error came from readers who forgot what the word meant.`,
            ],
            hebrew: [
              `*Liqra'th*, to meet, to go toward. Moses brought the people out of the camp "to meet with God," and they stood at the foot of the mountain while Yahuah "came down upon mount Sinai" (Exodus 19:17, 20). They went out. He came down.`,
            ],
            reread: [`The virgins "go ye out to meet him," and then "they that were ready went in with him to the marriage" (Matthew 25:10). When the brethren at Rome heard Paul was coming, "they came to meet us as far as Appii forum," and he went on with them into the city (Acts 28:15-16). So it is in the air. The saints go out to meet the King, and He comes on to the earth with them: "his feet shall stand in that day upon the mount of Olives ... and all the saints with thee" (Zechariah 14:4-5).`],
            timeline: [
              ["About 300 BC on", `Greek cities greet arriving kings by going out to meet them on the road.`],
              ["About 50 AD", `Paul writes "to meet the Master in the air."`],
              ["About 60 AD", `The brethren meet Paul on the road and bring him into Rome (Acts 28:15).`],
              ["About 400 AD", `Jerome's Latin Bible renders it *obviam*, "to meet."`],
              ["1830s", `The meeting becomes a departure: up to heaven for seven years.`],
              ["Today", `The marriage supper is taught as a seven-year banquet in heaven.`],
            ],
            built: [
              `A meeting turned into a departure.`,
              `Heaven as the destination, though "the meek ... shall inherit the earth" (Matthew 5:5).`,
              `A wedding feast held in the sky while the earth burns, and a church promised an exit before the trouble, taught not to prepare for it.`,
            ],
          },
          {
            id: "parousia", greek: "Parousia", kjv: "coming", role: "The root word", more: "Parousia on Greek Influence",
            verse: { ref: "1 Thessalonians 4:15-16", text: "For this we say unto you by the word of the Master, that we which are alive and remain unto the coming of the Master shall not prevent them which are asleep. For the Master himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Messiah shall rise first:" },
            taught: [
              `This is the rapture. One day, without warning, Messiah will come secretly for His church. Believers will vanish: cars without drivers, planes without pilots. Seven years of tribulation follow for those left behind. Then He comes back a second time, openly, to rule the earth.`,
            ],
            word: [
              `*Parousia* means "arrival" or "presence." In the Greek world it was the word for an emperor's royal visit to a city. Cities prepared for it, struck coins for it, and turned out in crowds to greet it. Nothing about it was secret. A *parousia* was the loudest day of the year.`,
              `Here the Greek meaning is not the problem. The problem came much later, when teachers cut this one word away from its partner, *epiphaneia*, and made it a second, hidden coming.`,
            ],
            hebrew: [
              `Paul says the Master comes "with the trump of God." That is the *shofar*, Israel's ram's horn. A few verses later Paul names the day: it "so cometh as a thief in the night" (1 Thessalonians 5:2). That is the prophets' day of Yahuah. Joel joined the horn and the day together: "Blow ye the trumpet in Zion ... for the day of Yahuah cometh" (Joel 2:1).`,
              `The Hebrew word for day is *yom*. The prophets speak of one day of Yahuah, "the great and the terrible day of Yahuah" (Joel 2:31), not two comings with seven years in between. And a shofar is blown so that everyone hears it.`,
            ],
            reread: [`On the day of Yahuah, the Master comes down with a shout and the blast of the shofar. The dead rise first. It is the same coming Yahushua described: "as the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be" (Matthew 24:27). The day comes "as a thief" only for the careless: "But ye, brethren, are not in darkness, that that day should overtake you as a thief" (1 Thessalonians 5:4). A shout, an archangel, a trumpet, and the dead rising out of their graves. Whatever this is, it is not secret, and it is the last day, not the first of seven years.`],
            timeline: [
              ["First century", `The empire: *parousia* names Caesar's royal visit to a city.`],
              ["About 1590", `Francisco Ribera, a Jesuit priest, moves most of the Revelation into a future three and a half years under one Antichrist.`],
              ["1830s", `John Nelson Darby teaches a secret coming for the church before the tribulation, and another coming after it.`],
              ["1909", `The Scofield Reference Bible prints the two-coming plan in the notes of millions of Bibles.`],
              ["1970–1995", `*The Late Great Planet Earth* and the *Left Behind* novels make the rapture a household word.`],
              ["Today", `The pulpit: "He could come for His church at any moment, before the tribulation."`],
            ],
            built: [
              `The secret rapture, a hidden coming for the church before the real one.`,
              `Two second comings, one for the church and one seven years later for the world.`,
              `Escape instead of endurance. Believers are told they will be gone before trouble comes, though Yahushua said, "he that shall endure unto the end, the same shall be saved" (Matthew 24:13).`,
            ],
          },
          {
            id: "epiphaneia", greek: "Epiphaneia", kjv: "appearing", role: "The root word", more: "Epiphaneia on Greek Influence",
            verse: { ref: "2 Thessalonians 2:8", text: "And then shall that Wicked be revealed, whom the Master shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming:" },
            taught: [
              `Second Thessalonians 2 is preached as a timetable. First the church is raptured, and "he who now letteth" is taken out of the way with it (2 Thessalonians 2:7). Then the Antichrist is revealed and rules for seven years. At the end Messiah comes back in glory and destroys him. This verse, they say, is that later coming, the "glorious appearing," seven years after the rapture. First He comes for His saints, then with His saints.`,
            ],
            word: [
              `*Epiphaneia* was the word for a god showing himself: appearing suddenly in power, often to rescue his worshipers. Temples set up inscriptions recording the appearings of their gods. Kings took the word as a title. The Greek king Antiochus IV called himself Epiphanes, "god manifest," and stamped it on his coins.`,
              `This is the same Antiochus who stopped the daily sacrifice and set up an idol altar in Yahuah's temple in 167 BC. Futurist teachers make him the model of their coming Antichrist. The word Paul used for Messiah's appearing was the very title that king had stolen.`,
            ],
            hebrew: [
              `Paul is quoting Isaiah: "with the breath of his lips shall he slay the wicked" (Isaiah 11:4). "The spirit of his mouth" is the Hebrew *ruach*: breath, wind, spirit. The Branch from Jesse's root kills the wicked one by the word of His mouth.`,
              `The appearing is Isaiah's too: "the glory of Yahuah shall be revealed, and all flesh shall see it together" (Isaiah 40:5). "Revealed" is *galah*, uncovered, laid open. All flesh, together, at once. Not the church first and the world seven years later.`,
            ],
            reread: [`"The brightness of his coming." In Greek it is the *epiphaneia* of His *parousia*: both words in one phrase, about one event. Look where Paul began the chapter: "by the coming of our Master Yahushua Messiah, and by our gathering together unto him" (2 Thessalonians 2:1). The gathering, what the pulpit calls the rapture, and the coming that destroys the Wicked are the same *parousia*, in the same chapter. And the gathering does not come first: "that day shall not come, except there come a falling away first, and that man of sin be revealed" (2 Thessalonians 2:3). The "blessed hope" and the "glorious appearing" are one hope (Titus 2:13).`],
            timeline: [
              ["175 BC", `Antiochus IV takes the throne and the title Epiphanes.`],
              ["167 BC", `He stops the sacrifice and defiles the temple.`],
              ["About 51 AD", `Paul joins the two words: "the brightness of his coming."`],
              ["1830s", `John Nelson Darby teaches that the church is taken away before the man of sin appears, splitting the coming "for" the saints from the coming "with" them.`],
              ["1909", `The Scofield Reference Bible prints the two stages in its notes.`],
              ["2004", `The twelfth *Left Behind* novel is titled *Glorious Appearing*.`],
            ],
            built: [
              `A coming in two stages, seven years apart.`,
              `The blessed hope cut away from the glorious appearing.`,
              `A first coming the world never sees, against "every eye shall see him" (Revelation 1:7).`,
            ],
          },
        ],
      },
      oldPath: `There is one coming, on one day, and the whole world sees it. The trumpet sounds, the dead rise, the living are caught up to meet the King, and He comes on with all His saints. He comes after the tribulation, not before it, and His people are kept through it, as Noah and Israel were kept. When He comes He raises the dead, ends death, and holds the judgment. Darby and Scofield gave the church an escape plan; the prophets gave it a day. The Revelation opens with that day: "Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen" (Revelation 1:7).`,
    },
  },
  "08": {
    oldPaths: {
      kicker: "The Old Path · The Millennium · Revelation · 3 of 3",
      title: "The Strong Man Bound",
      subtitle: "The Thousand Years Began at the Cross",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `The first promise in Scripture is a war and its end. The woman's seed would bruise the serpent's head (Genesis 3:15). Yahushua said how it would be done: no one can "spoil his goods, except he first bind the strong man" (Matthew 12:29). He said it while casting out devils "by the Spirit of God" (Matthew 12:28). The binding had begun.`,
            `At the cross it was done. "Now shall the prince of this world be cast out" (John 12:31). Through death He destroyed "him that had the power of death, that is, the devil" (Hebrews 2:14). The Revelation gives the reason for the binding: "that he should deceive the nations no more" (Revelation 20:3). So the word went to the nations, "to turn them ... from the power of Satan unto God" (Acts 26:18). The thousand is a number of fullness, as Yahuah keeps covenant "to a thousand generations" (Deuteronomy 7:9).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Isaiah had asked the question long before: "Shall the prey be taken from the mighty?" Yahuah answered, "Even the captives of the mighty shall be taken away" (Isaiah 49:24-25). Yahushua walked it out. He cast out devils, and when the seventy came back saying, "Master, even the devils are subject unto us," He answered, "I beheld Satan as lightning fall from heaven" (Luke 10:17-18).`,
            `Then the strong man's goods were taken, and his goods were the nations. While Peter was still speaking to Cornelius and his house, the Spirit fell on them (Acts 10:44). Paul says that at the cross principalities and powers were "spoiled," and a "shew" was made of them "openly" (Colossians 2:14-15).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `Yahuah keeps covenant "to a thousand generations" (Deuteronomy 7:9).`],
            ["Isaiah", `"the prey of the terrible shall be delivered" (Isaiah 49:25).`],
            ["Yahushua", `"first bind the strong man" (Matthew 12:29).`],
            ["Paul", `sent "to turn them ... from the power of Satan unto God" (Acts 26:18).`],
            ["Peter", `"a thousand years as one day" (2 Peter 3:8).`],
            ["John", `"the Son of God was manifested, that he might destroy the works of the devil" (1 John 3:8).`],
          ],
        },
      ],
      closing: `The Revelation shows the same triumph from heaven's side. The dragon is cast down, and the saints overcome him "by the blood of the Lamb, and by the word of their testimony" (Revelation 12:11).`,
      torah: ["Genesis 3:15", "Deuteronomy 7:9"],
      witness: ["Isaiah 49:24-25", "Matthew 12:28-29", "Luke 10:17-18", "John 12:31", "Hebrews 2:14", "Acts 10:44", "Acts 26:18", "Colossians 2:14-15", "2 Peter 3:8", "Revelation 12:11", "Revelation 20:2-3"],
      turn: {
        text: "But Christianity went another way. It left the strong man loose, and moved his binding to a golden age still to come.",
        label: "The Departure: The Millennium",
      },
    },

    departure: {
      kicker: "The Departure · 08 · Revelation · 3 of 3",
      title: "The Millennium",
      subtitle: "A Kingdom Still Waiting — for a Strong Man Already Bound",
      attribution: "You've been quoting Papias and Cerinthus and calling it Scripture.",
      taught: [
        `Most evangelical pulpits teach that the thousand years of Revelation 20 have not begun. When Messiah returns, Satan will be chained in a pit, and Messiah will rule the whole earth from Jerusalem for a literal thousand years. Many add a rebuilt temple, with priests and animal sacrifices again, from Ezekiel 40-48. At the end Satan is let loose, a last rebellion is crushed, and then comes the judgment.`,
        `That is the premillennial teaching of Baptist, Pentecostal, Assemblies of God, and Bible churches. Some Reformed churches teach the reverse: the gospel will slowly win the world and bring a golden age before He returns. The Catholic Church rejects an earthly kingdom, but since Augustine it has read the thrones of Revelation 20 as the seats of its own rulers, the church reigning now. Seventh-day Adventists place the thousand years in heaven, with the earth left empty. Each puts the thousand years somewhere Scripture did not: in a golden age to come, in heaven, or in the rule of a church.`,
      ],
      roots: [
        `Greek religion had its own thousand years. In Plato's <em>Republic</em>, the souls of the dead travel a thousand years, below the earth or in the heavens, before they choose a new life. Rome's poet Virgil wrote that after a thousand years the souls drink from the river of forgetting and go back into bodies. The Greeks also sang of a golden age under Kronos, when the earth gave its fruit without labor. And a pit at the bottom of the world, where the gods shut up their beaten enemies, was old Greek myth.`,
        `Early in the church those ideas met Revelation 20. About 100 AD Cerinthus, a heretic, promised a thousand years of wedding feasts in an earthly kingdom. Papias, early in the 100s, told of vines with ten thousand branches, and Justin and Irenaeus taught a thousand years in a rebuilt Jerusalem. Eusebius later wrote that Papias had taken the apostles' figures as if they were literal. About 426 AD Augustine read the binding as the strong man bound at Messiah's first coming. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "chilioi", greek: "Chilioi", kjv: "thousand", role: "The root word", more: "Chilioi on Greek Influence",
            verse: { ref: "Revelation 20:2", text: "And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years," },
            taught: [
              `A literal thousand years, still future, beginning when Messiah returns. Satan is bound then, not now. Until then he is loose and in charge of the world.`,
            ],
            word: [
              `Plato ended his *Republic*, about 375 BC, with the story of Er, a soldier who saw the world of the dead. The souls made a thousand-year journey, under the earth or in the heavens, and then came back to choose new lives. In the *Phaedrus* he measured the soul's wanderings in periods of a thousand years. Virgil carried the idea into Latin: after a thousand years the souls drink the river Lethe and return to the upper world.`,
              `Cerinthus, about 100 AD, gave the church its first earthly millennium. Eusebius preserves the reports: after the resurrection, a kingdom on earth, with a thousand years of wedding festivals and the pleasures of the flesh. The thousand-year golden age was a Greek dream before it was a Christian one.`,
            ],
            hebrew: [
              `*Eleph*, a thousand, is often a number of fullness. Yahuah keeps covenant "to a thousand generations" (Deuteronomy 7:9). He owns "the cattle upon a thousand hills" (Psalm 50:10). "A thousand years in thy sight are but as yesterday" (Psalm 90:4), and Peter says it again: "a thousand years as one day" (2 Peter 3:8).`,
            ],
            reread: [`"Bound him a thousand years." The Revelation is a book of signs; its message was "signified" to John (Revelation 1:1). The angel, the key, the chain, the pit, and the dragon are all pictures, and the thousand goes with them: the full span Yahuah set between the binding and the loosing. Yahushua bound the strong man at His first coming (Matthew 12:29). The "little season" of loosing comes at the end (Revelation 20:3, 7).`],
            timeline: [
              ["About 375 BC", `Plato's *Republic* sends the souls of the dead on a thousand-year journey.`],
              ["About 100 AD", `Cerinthus teaches a thousand years of feasting in an earthly kingdom.`],
              ["Early 100s", `Papias tells of an earthly reign with vines of ten thousand branches.`],
              ["About 155 AD", `Justin Martyr teaches a thousand years in a rebuilt Jerusalem, though he admits many believers held otherwise.`],
              ["About 426 AD", `Augustine, in book 20 of *The City of God*, places the binding of the strong man at the first coming.`],
              ["1909", `The Scofield Reference Bible prints a future thousand-year kingdom, with Israel restored in the land.`],
            ],
            built: [
              `A golden age on earth still waited for.`,
              `A temple with animal sacrifices again, though "there is no more offering for sin" (Hebrews 10:18).`,
              `A devil pictured as free and ruling now, as if the cross had not bound him.`,
            ],
          },
          {
            id: "abyssos", greek: "Abyssos", kjv: "bottomless pit", role: "The root word", more: "Abyssos on Greek Influence",
            verse: { ref: "Revelation 20:3", text: "And cast him into the bottomless pit, and shut him up, and set a seal upon him, that he should deceive the nations no more, till the thousand years should be fulfilled: and after that he must be loosed a little season." },
            taught: [
              `Today the devil roams free and runs the world. When Messiah returns, an angel will throw him into a real pit beneath the earth and lock it for a thousand years.`,
            ],
            word: [
              `*Abyssos* means "without a bottom." In Greek it was the deep that cannot be measured. Greek myth put a pit at the bottom of the world. In Hesiod it is Tartarus, as far below the earth as the sky is above it, where Zeus shut up the beaten Titans behind bronze gates. A defeated rebel, chained and locked in the depths: the Greeks knew that picture well.`,
              `The Greek translators used *abyssos* for the Hebrew deep of Genesis 1:2. Later Christian art joined the abyss, Tartarus, and Hades into one fiery pit under the ground, and that is the pit most people picture in Revelation 20.`,
            ],
            hebrew: [
              `*Tehom*, the deep. "Darkness was upon the face of the deep" (Genesis 1:2). Jonah cried, "the depth closed me round about" (Jonah 2:5), and came out on the third day. Paul uses the same picture for Messiah's grave: "Who shall descend into the deep? (that is, to bring up Messiah again from the dead.)" (Romans 10:7).`,
            ],
            reread: [`"Cast him into the bottomless pit, and shut him up ... that he should deceive the nations no more." Messiah went down into the deep and came up holding the keys: "I am he that liveth, and was dead ... and have the keys of hell and of death" (Revelation 1:18). The devils already feared that deep while He walked the earth. They "besought him that he would not command them to go out into the deep" (Luke 8:31). The pit is not a hole under the ground, waiting. It is the restraint Messiah put on the deceiver, so the nations could hear.`],
            timeline: [
              ["About 700 BC", `Hesiod tells of the Titans locked in Tartarus behind bronze gates.`],
              ["About 250 BC on", `The Greek translation of Genesis renders *tehom* as *abyssos*.`],
              ["About 30 AD", `Devils beg Yahushua not to send them into the deep (Luke 8:31).`],
              ["About 57 AD", `Paul calls Messiah's grave "the deep" (Romans 10:7).`],
              ["About 426 AD", `Augustine reads the abyss as the hearts of the wicked, where the devil is shut in and kept from deceiving the nations.`],
              ["Today", `The pit is pictured as a fiery prison beneath the earth, still empty.`],
            ],
            built: [
              `A devil loose and ruling now.`,
              `The binding Yahushua spoke of moved two thousand years into the future.`,
              `Fear of the devil's power, in place of trust in the keys Messiah already holds.`,
            ],
          },
        ],
      },
      oldPath: `The strong man was bound at the cross, and his house has been plundered ever since. Nation after nation has heard the word he once kept from them. The thousand years is the full span of that binding, not a golden age still to come. A thousand years still waiting to start hands the dragon an age the cross already took from him. At the end he is loosed "a little season" (Revelation 20:3), and then he is "cast into the lake of fire" (Revelation 20:10). The Revelation shows the triumph already won: "they overcame him by the blood of the Lamb, and by the word of their testimony" (Revelation 12:11).`,
    },
  },
  "09": {
    oldPaths: {
      kicker: "The Old Path · Going to Heaven",
      title: "The Inheritance Is the Earth",
      subtitle: "The Land Was the Promise",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Scripture draws a plain line. "The heaven, even the heavens, are Yahuah's: but the earth hath he given to the children of men" (Psalm 115:16). Yahuah promised Abraham the land "for an everlasting possession" (Genesis 17:8), and He never traded that promise for a cloud. David said, "the meek shall inherit the earth" (Psalm 37:11), and "The righteous shall inherit the land, and dwell therein for ever" (Psalm 37:29).`,
            `The dead do not go up. "No man hath ascended up to heaven," Yahushua said (John 3:13). Peter said even David "is not ascended into the heavens" (Acts 2:34); his tomb was still with them (Acts 2:29). The dead sleep in the dust (Daniel 12:2) until the last trump, when they are raised (1 Corinthians 15:52) to inherit the earth made new.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `The fathers lived as strangers in the land they were promised, and they wanted to be buried in it. Jacob said, "bury me with my fathers" (Genesis 49:29). Joseph made Israel swear, "ye shall carry up my bones from hence" (Genesis 50:25), and they did (Joshua 24:32). They "died in faith, not having received the promises" (Hebrews 11:13). They expected to rise where they lay.`,
            `Moses promised scattered Israel that Yahuah would "bring thee into the land which thy fathers possessed" (Deuteronomy 30:5). Every fiftieth year the Jubilee gave each family its land back, because Yahuah said, "the land is mine" (Leviticus 25:23).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Abraham", `the land given "for an everlasting possession" (Genesis 17:8).`],
            ["Joseph", `"ye shall carry up my bones from hence" (Genesis 50:25).`],
            ["Job", `his Redeemer "shall stand at the latter day upon the earth" (Job 19:25).`],
            ["David", `"the meek shall inherit the earth" (Psalm 37:11).`],
            ["Daniel", `"thou shalt rest, and stand in thy lot at the end of the days" (Daniel 12:13).`],
            ["Yahushua", `"Blessed are the meek: for they shall inherit the earth" (Matthew 5:5).`],
          ],
        },
      ],
      closing: `Revelation ends where the promise began. The redeemed sing, "we shall reign on the earth" (Revelation 5:10). And the city does not go up; it comes "down from God out of heaven," because "the tabernacle of God is with men, and he will dwell with them" (Revelation 21:2-3).`,
      torah: ["Genesis 17:8", "Deuteronomy 30:5"],
      witness: ["Psalm 115:16", "Psalm 37:29", "Job 19:25", "Matthew 5:5"],
      turn: {
        text: "But Christianity went another way. It traded the land for the sky, and the resurrection for a flight upward at death.",
        label: "The Departure: Going to Heaven",
      },
    },

    departure: {
      kicker: "The Departure · 09",
      title: "Going to Heaven",
      subtitle: "You're Not Going Anywhere — And That's Actually Good News",
      attribution: "You've been singing Plato's hope and calling it Scripture.",
      taught: [
        `At nearly every funeral the preacher says it: she is in heaven now, looking down on us. Going to heaven when you die is the hope most churchgoers carry. The goal of the believer's life, they are told, is to leave this earth behind and live up there for ever, in a mansion on a street of gold.`,
        `Rome teaches that those who die in God's favor, once they are fully purified, go to heaven and see God face to face. The Westminster Confession says the souls of the righteous are "received into the highest heavens" at death. Evangelists ask, "If you died tonight, would you go to heaven?" Pentecostal and Baptist choirs sing "I'll Fly Away." Catholic or Protestant, the funeral agrees on one point: the dead believer is up there now.`,
      ],
      roots: [
        `The Greeks sent their favored dead away from the earth. Homer put a few heroes on the Elysian plain at the ends of the world, and Hesiod put them on the Isles of the Blessed. Plato went further: the soul that lived well would "return and dwell in its native star" (<em>Timaeus</em>). Rome carried it on; Cicero pictured the souls of great men living in the Milky Way.`,
        `Scripture tells a different story. "The heaven, even the heavens, are Yahuah's: but the earth hath he given to the children of men" (Psalm 115:16). The dead sleep in the dust until the last day, and then they rise to inherit the earth made new. Three Greek words carried the other hope in. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "ouranos", greek: "Ouranos", kjv: "heaven", role: "The root word", more: "Ouranos on Greek Influence",
            verse: { ref: "Matthew 5:3", text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven." },
            taught: [
              `The kingdom of heaven is the place God's people go when they die. Stay humble now, and one day you will live in heaven with God. The pulpit reads every "kingdom of heaven" as a home above the clouds. The Beatitudes become a promise of a ticket out of this world.`,
            ],
            word: [
              `*Ouranos* was a god before it was a sky. In Hesiod's poem about the birth of the gods, Ouranos is the Sky himself, the first king of heaven and father of the Titans, until his son Kronos overthrew him.`,
              `Plato later taught that a soul which lived well would go back up to live in its own star. So to a Greek reader, heaven was where the good soul came from and where it goes home. Read that way, "the kingdom of heaven" is a place up there that you go to.`,
            ],
            hebrew: [
              `Yahushua spoke these words in Hebrew, and two verses later He quotes David: "Blessed are the meek: for they shall inherit the earth" (Matthew 5:5). David wrote it first: "But the meek shall inherit the earth; and shall delight themselves in the abundance of peace" (Psalm 37:11). The poor in spirit and the meek are the same people. One verse says the kingdom of heaven is theirs. The other says the earth is.`,
              `The Hebrew word for heaven is *shamayim*. It is Yahuah's throne: "The heaven is my throne, and the earth is my footstool" (Isaiah 66:1). And David says who lives where: "The heaven, even the heavens, are Yahuah's: but the earth hath he given to the children of men" (Psalm 115:16). The kingdom of heaven is the kingdom that comes from heaven, Yahuah's rule, not a place men move to. Luke gives the same saying as "yours is the kingdom of God" (Luke 6:20).`,
            ],
            reread: [`Now read it the way Yahushua meant it: "Happy are the poor in spirit, for the rule of Yahuah, the kingdom that comes down from His throne, belongs to them." He taught the same people how to pray for it: "Thy kingdom come. Thy will be done in earth, as it is in heaven" (Matthew 6:10). The kingdom comes here. Nobody prays for a kingdom to come to him if he is about to leave for it. And no one has gone up yet: "no man hath ascended up to heaven" (John 3:13).`],
            timeline: [
              ["About 700 BC", `Hesiod: Ouranos, the Sky, is the first king of the gods.`],
              ["About 360 BC", `Plato: the soul that lived well returns to dwell in its own star (*Timaeus*).`],
              ["1646", `The Westminster Confession: the souls of the righteous are "received into the highest heavens" at death.`],
              ["1898", `The hymn "When We All Get to Heaven" sets the hope above the clouds.`],
              ["Today", `The pulpit: "She's in heaven now, looking down on us."`],
            ],
            built: [
              `Heaven at death: the soul flies upward the moment the body dies.`,
              `A gospel of leaving: the earth written off as a waiting room, though Yahuah gave it to the children of men.`,
              `The resurrection made an afterthought, since the dead are said to be home already.`,
            ],
          },
          {
            id: "paradeisos", greek: "Paradeisos", kjv: "paradise", role: "The root word", more: "Paradeisos on Greek Influence",
            verse: { ref: "Luke 23:43", text: "And Yahushua said unto him, Verily I say unto thee, To day shalt thou be with me in paradise." },
            taught: [
              `The thief on the cross died and went straight to heaven that same day. This verse is read at funerals, Catholic and Protestant, to prove the dead are with Yahushua right now. Paradise is heaven, a resting place above where souls wait for the end. If a thief could go there the day he died, the pulpit says, so will every believer.`,
            ],
            word: [
              `*Paradeisos* came from Persia. It was the word for a king's walled park, a royal garden with trees, water, and animals. The Greek writer Xenophon used it for the Persian kings' parks. The Greek Torah then used it for the garden of Eden.`,
              `Later teachers lifted the garden into the sky and made it a waiting room for the souls of the dead. About 210 AD Tertullian taught that paradise already held the souls of the martyrs. That is the paradise the pulpit sees in this verse.`,
            ],
            hebrew: [
              `The Hebrew word beneath is *gan*, a garden. The first paradise was planted on the earth: "And Yahuah Elohim planted a garden eastward in Eden; and there he put the man whom he had formed" (Genesis 2:8). Where the Greek Torah says *paradeisos*, Moses wrote *gan*.`,
              `Scripture never moves that garden into the sky. It brings it back. John hears of "the tree of life, which is in the midst of the paradise of God" (Revelation 2:7), and then sees that tree beside the river in the city that comes down to the earth (Revelation 22:1-2). And the thief had not asked to go to heaven. He asked for the kingdom: "Master, remember me when thou comest into thy kingdom" (Luke 23:42).`,
            ],
            reread: [`The Greek copies were written without commas; where the comma goes is a translator's choice. Move it one word: "Verily I say unto thee to day, thou shalt be with me in paradise." I tell you today, on this day with both of us dying, you will be with Me in the garden when I come in My kingdom. Yahushua Himself did not go to paradise that day. He lay in the tomb, and on the morning He rose He told Mary, "Touch me not; for I am not yet ascended to my Father" (John 20:17). The thief asked to be remembered when the kingdom comes. That is what he was promised.`],
            timeline: [
              ["About 400 BC", `Xenophon uses *paradeisos* for the Persian kings' walled parks.`],
              ["About 250 BC", `In Alexandria the Greek Torah calls Eden's garden a *paradeisos* (Genesis 2:8).`],
              ["About 210 AD", `Tertullian teaches that paradise already holds the souls of the martyrs.`],
              ["1611", `The King James Version places the comma before "To day."`],
              ["Today", `The pulpit: "The thief went to heaven the day he died, and so will you."`],
            ],
            built: [
              `A heavenly waiting room: souls resting in a paradise above until the end.`,
              `The deathbed ticket: one last-minute prayer said to send a soul straight to heaven that day.`,
              `The restored garden of Revelation forgotten in favor of a cloud.`,
            ],
          },
          {
            id: "makarios", greek: "Makarios", kjv: "blessed", role: "The root word", more: "Makarios on Greek Influence",
            verse: { ref: "Revelation 14:13", text: "And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Master from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them." },
            taught: [
              `This verse is read at funerals. "Blessed are the dead": they are happy now, in glory, free from pain, singing with the angels. The pulpit says our loved ones are already enjoying their reward. Rome gives the title "Blessed" to dead believers it declares to be in heaven, a step toward sainthood. Their work on earth is done, and their joy in heaven has begun.`,
            ],
            word: [
              `*Makarios* means blessed or happy. In Homer, the *makares*, "the blessed ones," were the gods themselves, living at ease on Olympus. Hesiod wrote of the Isles of the Blessed, where heroes went after death to a happy land at the edge of the world.`,
              `So "the blessed dead" sounded to a Greek like heroes enjoying the good life somewhere far away. That is still the picture at most funerals.`,
            ],
            hebrew: [
              `The Hebrew word beneath "blessed" is *ashrei*. It is kin to the verb Proverbs uses for walking a path: "go in the way of understanding" (Proverbs 9:6). The first Psalm opens with it: "Blessed is the man that walketh not in the counsel of the ungodly." Instead, "his delight is in the law of Yahuah" (Psalm 1:1-2). Blessed is not about where a man is. It is about how he walked.`,
              `And the prophets say what the righteous dead do: they rest. "He shall enter into peace: they shall rest in their beds, each one walking in his uprightness" (Isaiah 57:2). Daniel was told the same: "But go thou thy way till the end be: for thou shalt rest, and stand in thy lot at the end of the days" (Daniel 12:13).`,
            ],
            reread: [`Now read it the way John meant it: "Happy are those who walked with Yahuah and die in the Master. From now on they rest from their labor, and the way they walked follows them." Look at the verse just before: "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Yahushua" (Revelation 14:12). The blessed dead are the ones who walked in the commandments and held the testimony. They are not up in glory singing. They rest, like Daniel, until the day of reward: "behold, I come quickly; and my reward is with me" (Revelation 22:12).`],
            timeline: [
              ["About 750 BC", `Homer: the *makares*, "the blessed ones," are the gods at ease on Olympus.`],
              ["About 700 BC", `Hesiod: heroes go after death to the Isles of the Blessed (*Works and Days*).`],
              ["About 250 BC on", `The Greek Psalms put *makarios* for *ashrei*: "Blessed is the man" (Psalm 1:1).`],
              ["1646", `The Westminster Confession: the souls of the righteous, "made perfect in holiness," go at once to heaven.`],
              ["Today", `At the funeral: "Blessed are the dead; they're with the Master now."`],
            ],
            built: [
              `The blessed dead in glory: loved ones pictured as awake and rejoicing above.`,
              `Comfort without the resurrection: the hope moved from the last day to the day of death.`,
              `Rewards handed out at death, not at His coming, and the church declaring who is already in glory.`,
            ],
          },
        ],
      },
      oldPath: `The old path keeps the inheritance on the earth. "The righteous shall inherit the land, and dwell therein for ever" (Psalm 37:29). Job did not expect to fly away. He expected his Redeemer to "stand at the latter day upon the earth" (Job 19:25). The dead wait in the dust, and they rise when He comes. Plato sent the soul up to its star. Scripture brings heaven down. The garden returns, from a garden planted to a city descended, as the study <a href="/blog/paradise-restored">Paradise Restored</a> traces it. Revelation shows which way the city moves: "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband" (Revelation 21:2).`,
    },
  },
  "10": {
    oldPaths: {
      kicker: "The Old Path · The Trinity",
      title: "Hear, O Israel",
      subtitle: "One. Not One in Three.",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Israel's whole belief rests on one sentence. "Hear, O Israel: Yahuah our God is one Yahuah" (Deuteronomy 6:4). Moses said it twice more so no one could miss it: "Yahuah he is God; there is none else beside him" (Deuteronomy 4:35), and "there is none else" (Deuteronomy 4:39). Yahuah Himself asks, "Is there a God beside me?" and answers, "I know not any" (Isaiah 44:8). One means one.`,
            `Yahuah has a Son, Yahushua. The Father begot Him, sent Him, and raised Him from the dead. The Son prayed to the Father, obeyed the Father, and called Him "my God" (John 20:17). He never took the Father's place or the Father's title. His very name means "Yahuah saves." Yahuah alone saves; the Son provided the way. The Spirit is not a third someone. It is Yahuah's own power at work. Yahushua called it "the finger of God" (Luke 11:20), where Matthew wrote "the Spirit of God" (Matthew 12:28).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Israel was told to keep these words "in thine heart," to teach them to their children, and to write them "upon the posts of thy house, and on thy gates" (Deuteronomy 6:6-9). Every child grew up hearing that Yahuah is one.`,
            `When a scribe asked Yahushua which commandment came first, He did not announce a new God. He quoted the same words (Mark 12:29). The scribe answered, "there is one God; and there is none other but he." Yahushua told him he was "not far from the kingdom of God" (Mark 12:32, 34).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"Yahuah our God is one Yahuah" (Deuteronomy 6:4).`],
            ["Isaiah", `"I, even I, am Yahuah; and beside me there is no saviour" (Isaiah 43:11).`],
            ["Yahushua", `the Father is "the only true God," and the Son is the one "whom thou hast sent" (John 17:3).`],
            ["Paul", `"to us there is but one God, the Father" (1 Corinthians 8:6).`],
            ["Paul again", `"one God, and one mediator between God and men, the man Messiah Yahushua" (1 Timothy 2:5).`],
            ["James", `"Thou believest that there is one God; thou doest well" (James 2:19).`],
          ],
        },
      ],
      closing: `Even risen and glorified, the Son still speaks of the Father as His God. In one verse He says "my God" four times (Revelation 3:12). A doctrine of three persons has to be carried into these texts, because it cannot be carried out of them.`,
      torah: ["Deuteronomy 6:4", "Deuteronomy 4:35, 39"],
      witness: ["Isaiah 43:10-11", "Isaiah 44:8", "Isaiah 45:5", "Mark 12:29", "John 17:3", "1 Corinthians 8:6", "1 Timothy 2:5"],
      turn: {
        text: "But Christianity went another way. It counted three where Moses counted one, and called it a mystery.",
        label: "The Departure: The Trinity",
      },
    },

    departure: {
      kicker: "The Departure · 10",
      title: "The Trinity",
      subtitle: "One Name, Not Three — The Doctrine That Rewrote the Father",
      attribution: "You've been quoting Philo and the councils and calling it Scripture.",
      taught: [
        `Nearly every church teaches the same thing. There is one God in three persons: the Father, the Son, and the Holy Spirit. Each one is fully God. None is greater than another, and none came before another. All three share one substance. It is called a mystery. You are told not to try to understand it, only to believe it, and that if you deny it you are not a Christian.`,
        `The Catholic Church calls the Trinity the central mystery of the faith. Baptist, Methodist, Presbyterian, Lutheran, and nondenominational statements of faith say the same thing, and Pentecostal churches such as the Assemblies of God list it among their fundamental truths. It is sung every Sunday: "God in three persons, blessed Trinity." Even the Oneness Pentecostals, who reject three persons, only trade one error for another. They make the Son and the Father the same person.`,
      ],
      roots: [
        `The apostles never used the word. The Trinity was built in steps, and the building blocks were Greek. Heraclitus and the Stoics taught a <em>logos</em>, a divine reason running through the world. About 40 AD, Philo of Alexandria, a Jew who loved Plato, made that <em>logos</em> a go-between standing between God and the world, and even called it "the second God." About 150, Justin Martyr brought the idea into the church and called the Word "another God" beside the Maker of all things.`,
        `About 213, Tertullian wrote the Latin word <em>trinitas</em> and spoke of three persons of one substance. In 325, at Nicaea, with the emperor Constantine in the room and urging the word, the bishops wrote that the Son is of "one substance" with the Father. In 381, at Constantinople, under the emperor Theodosius, the Spirit was added, to be worshiped and glorified together with the Father and the Son. The apostles did not write this creed. Roman bishops under Roman emperors did, and every key word in it came from the philosophers. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "logos", greek: "Logos", kjv: "Word", role: "The root word", more: "Logos on Greek Influence",
            verse: { ref: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
            taught: [
              `The Son is the Word, so the Son is God. Before the world was made, He stood beside the Father as a second divine person, equal in every way. At Bethlehem that second person came down and took a body. This verse is read as the plainest proof of the Trinity in the whole Bible.`,
            ],
            word: [
              `About 500 BC, a Greek philosopher named Heraclitus used *logos* for the "reason" that runs the whole universe. The Stoics after him called it a divine reason living in everything, a seed of god in every mind.`,
              `Then Philo, a Jewish teacher in Alexandria who loved Plato, called the *logos* God's "firstborn," His "image," and even "the second god." About 155, Justin Martyr taught that there is "another God" beneath the Maker of all things. He even said that Socrates and Heraclitus, who lived by the *logos*, had been Christians before Messiah came. Read through that lens, "the Word was with God" turns into a second God standing next to the first.`,
            ],
            hebrew: [
              `John opens with the first words of Moses: "In the beginning." And in Genesis, Yahuah makes the world one way. He speaks: "And God said, Let there be light: and there was light" (Genesis 1:3). David says it plainly: "By the word of Yahuah were the heavens made; and all the host of them by the breath of his mouth" (Psalm 33:6).`,
              `The Hebrew word is *davar*. It means a spoken word, a promise, a thing said and meant. Yahuah's *davar* is not a second person beside Him. It is Yahuah Himself speaking, His own mind going out of His mouth. "So shall my word be that goeth forth out of my mouth: it shall not return unto me void" (Isaiah 55:11). A man's word is not a second man.`,
            ],
            reread: [`The way John meant it: In the beginning Yahuah spoke. His word was with Him, the way a man's word is with him. And His word was His own; what God was, His word was. A few verses later John says what happened to that word: "the Word was made flesh, and dwelt among us" (John 1:14). The promise Yahuah spoke in the beginning became a man, born in time, "the only begotten of the Father." John is not describing two Gods. He is describing one God whose spoken word came to life in His Son.`],
            timeline: [
              ["About 500 BC", `Heraclitus calls the *logos* the reason that runs the universe.`],
              ["About 300 BC", `The Stoics make the *logos* the divine reason in all things.`],
              ["About 40 AD", `Philo of Alexandria, steeped in Plato, calls the *logos* "the second god."`],
              ["About 155", `Justin Martyr teaches "another God" beneath the Maker of all things.`],
              ["325", `The Nicene Creed names the Son "God of God," a second divine one beside the Father.`],
              ["Today", `The pulpit: "The Word is God the Son, the second person of the Trinity."`],
            ],
            built: [
              `A second divine person: the Word turned from Yahuah's voice into another God beside Him.`,
              `"God the Son," a title Scripture never uses, built on reading *logos* the way Philo read it. Scripture says "Son of God."`,
              `John 1:1 used to overrule Deuteronomy 6:4.`,
            ],
          },
          {
            id: "ousia", greek: "Ousia", kjv: "substance", role: "The root word", more: "Ousia on Greek Influence",
            verse: { ref: "John 10:30", text: "I and my Father are one." },
            taught: [
              `This is the pulpit's favorite proof. "One" means one substance: the Father and the Son are the same God, as the Nicene Creed says, "of one substance with the Father." The Son was claiming to be God, and that is why the crowd picked up stones. Catholic, Orthodox, Lutheran, Anglican, and Methodist services say that creed aloud. Since 2011, English-speaking Catholics say "consubstantial with the Father" at every Mass.`,
            ],
            word: [
              `The creed's word is *homoousios*, "same substance." It is built on *ousia*. About 350 BC, Aristotle used *ousia* for the essence of a thing, what it really is underneath. But *ousia* is not in this verse. The word here is simply "one."`,
              `About 268, a council at Antioch is reported to have rejected *homoousios* as an unfit word for the Son. In 325 the emperor Constantine wanted one creed for one empire. Eusebius of Caesarea wrote home from Nicaea that the emperor himself urged the word. The bishops who would not sign were sent into exile.`,
            ],
            hebrew: [
              `Yahushua is talking about sheep. All of John 10 answers Ezekiel 34, where Yahuah promises: "And I will set up one shepherd over them, and he shall feed them, even my servant David" (Ezekiel 34:23). The shepherd is Yahuah's servant, set over the flock by Yahuah. The Hebrew for "one" is *echad*, the same word as in "Yahuah our God is one Yahuah."`,
              `Now read the verse just before: "My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father's hand" (John 10:29). The Father gave the sheep. The Father is greater than all. The sheep sit in the Son's hand and the Father's hand at once: one grip, one purpose.`,
            ],
            reread: [`The way Yahushua meant it: My Father gave Me these sheep. He and I hold them together, as one. No one can take them from us. When the crowd accused Him, He told them exactly what He had claimed: "I am the Son of God" (John 10:36), not God the Son. Later He prayed for His followers "that they may be one, even as we are one" (John 17:22). If "one" meant one substance, the disciples would become one substance too. And the only time the New Testament uses *ousia*, it is a prodigal's money, which he "wasted ... with riotous living" (Luke 15:13).`],
            timeline: [
              ["About 350 BC", `Aristotle uses *ousia* for the essence of a thing.`],
              ["About 30 AD", `The word appears in Yahushua's parable only as a son's inheritance, the goods he wasted (Luke 15:12-13).`],
              ["About 268", `A council at Antioch is reported to have rejected *homoousios*.`],
              ["325", `Nicaea, with Constantine urging it, makes *homoousios* its key word.`],
              ["2011", `The English Catholic Mass changes to "consubstantial with the Father."`],
              ["Today", `The pulpit: "Very God of very God, of one substance with the Father."`],
            ],
            built: [
              `"One substance," the test word of the Nicene Creed, taken from Aristotle, not from Scripture.`,
              `John 10:30 as a Trinity proof, though a few verses later He says, "I am the Son of God."`,
              `Bishops exiled by an emperor for refusing a philosopher's word.`,
            ],
          },
          {
            id: "hypostasis", greek: "Hypostasis", kjv: "person", role: "The root word", more: "Hypostasis on Greek Influence",
            verse: { ref: "Hebrews 1:3", text: "Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power," },
            taught: [
              `There are two persons here, the Father and the Son, and the Holy Ghost makes three. Each one is a separate person, and each is fully God: one God in three persons. This verse is used to show that the Son is a person of the Godhead, equal with the Father.`,
            ],
            word: [
              `The King James word "person" here is *hypostasis*. It means "what stands under," the real thing, the reality. The King James Version gives it as "substance" in Hebrews 11:1: "faith is the substance of things hoped for." This verse is the only place it becomes "person."`,
              `About 260 AD, a pagan philosopher named Plotinus taught three *hypostases* at the top of everything: the One, the Mind, and the Soul. At Nicaea in 325, *hypostasis* still meant the same as *ousia*; the creed lists the two words side by side. About fifty years later, Basil of Caesarea and his friends split them apart: one *ousia*, three *hypostases*. In Latin the word became *persona*, the mask an actor wore, and from there the English "person."`,
            ],
            hebrew: [
              `Two verses later, Hebrews quotes David's psalm: "Thou art my Son, this day have I begotten thee" (Hebrews 1:5; Psalm 2:7). A son has a father, and a begetting has a day.`,
              `"Express image" is the Greek *charaktēr*, the mark a seal stamps into wax. The Hebrew idea is *tselem*, image: "So God created man in his own image" (Genesis 1:27). There is one seal. The stamp shows it exactly, but the stamp is not a second seal. Moses settled how many there are: "Yahuah our God is one Yahuah" (Deuteronomy 6:4).`,
            ],
            reread: [`The way the writer meant it: The Son carries His Father's glory the way a lamp carries a flame, and He is the exact stamp of the Father's own being. There is one *hypostasis* here, and it is the Father's. "Brightness" is light shining out from a source. The Father is the light; the Son is the light-bearer. The opening lines say so: God "hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things" (Hebrews 1:2). The one doing the appointing is the one God. The Son is His perfect image, not a second person of a three-person God.`],
            timeline: [
              ["About 260", `Plotinus teaches three first *hypostases*: the One, the Mind, the Soul.`],
              ["325", `At Nicaea, *hypostasis* and *ousia* still mean the same thing; the creed lists them together.`],
              ["About 375", `Basil of Caesarea separates the words: one *ousia*, three *hypostases*.`],
              ["381–382", `The bishops gathered at Constantinople confess one substance in three *hypostases*.`],
              ["Today", `The pulpit: "One God in three persons, blessed Trinity."`],
            ],
            built: [
              `Three persons in one God: Plotinus's three *hypostases*, given Bible names.`,
              `"Person" treated as a Bible word, though the King James Version uses it for *hypostasis* only here.`,
              `The Son made a second *hypostasis*, when Hebrews makes Him the image of the Father's one.`,
            ],
          },
          {
            id: "monogenes", greek: "Monogenēs", kjv: "only begotten", role: "The root word", more: "Monogenēs on Greek Influence",
            verse: { ref: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
            taught: [
              `The Son is God's only begotten Son, "eternally begotten," as many churches now say the creed, "begotten of the Father before all worlds." He never had a beginning. He was always the Son, just as eternal as the Father. His sonship is a mystery that happened outside of time.`,
            ],
            word: [
              `*Monogenēs* means "one of a kind," the only one of its sort. Plato used it at the end of his *Timaeus* for the world itself, the one-of-a-kind offspring of his maker-god.`,
              `About 225, Origen of Alexandria taught that the Son is begotten eternally, with no beginning at all. The creed of 381 wrote that into its words: "begotten of the Father before all worlds," a birth that never happened on any day. No Hebrew father ever begot a son before he himself existed.`,
            ],
            hebrew: [
              `Hebrews uses this same word for Isaac: Abraham "offered up his only begotten son" (Hebrews 11:17). But Abraham had another son, Ishmael. So *monogenēs* cannot mean the only son ever born. It points back to Moses: "Take now thy son, thine only son Isaac, whom thou lovest" (Genesis 22:2).`,
              `The Hebrew word is *yachid*: only, one and only, the beloved one. Isaac was the son of promise, and he was born in time. Sarah "bare Abraham a son in his old age, at the set time of which God had spoken to him" (Genesis 21:2).`,
            ],
            reread: [`The way Yahushua meant it: Yahuah loved the world so much that He gave His one beloved Son, the way Abraham offered Isaac, so that whoever trusts in Him will not perish but have life that does not end. The next verse says who is doing the saving: "God sent not his Son into the world to condemn the world; but that the world through him might be saved" (John 3:17). Yahuah gives and Yahuah sends. Yahuah saves; the beloved Son He gave is the way. Abraham's Moriah was the picture; Yahuah's gift was the real thing.`],
            timeline: [
              ["Moriah", `Abraham offers Isaac, his *yachid*, his only son, born at the set time.`],
              ["About 360 BC", `Plato calls the world a *monogenēs*, the one-of-a-kind offspring of his maker-god.`],
              ["About 225", `Origen teaches that the Son is begotten eternally, without beginning.`],
              ["325", `Nicaea: "begotten of the Father, only-begotten, that is, of the substance of the Father."`],
              ["381", `Constantinople: "begotten of the Father before all worlds."`],
              ["Today", `The pulpit: "Eternally begotten. He never had a beginning."`],
            ],
            built: [
              `Eternal generation: a birth with no day, unknown to Moses or to Psalm 2:7.`,
              `The Son made as eternal as the Father: the Father's gift turned into a second eternal God.`,
              `A Father who gave nothing of His own, if what He gave was Himself.`,
            ],
          },
          {
            id: "parakletos", greek: "Paraklētos", kjv: "Comforter", role: "The root word", more: "Paraklētos on Greek Influence",
            verse: { ref: "John 14:16", text: "And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;" },
            taught: [
              `The Holy Spirit is the third person of the Trinity. The Son said "another Comforter," so the Spirit must be someone other than the Son and other than the Father. And the Bible calls the Spirit "he." So the Spirit is a person, equal to the other two. If any doubt is left, 1 John 5:7 settles it: "these three are one."`,
            ],
            word: [
              `*Paraklētos* comes from the Greek courts. It means one called to your side, a helper or advocate standing beside the accused. In Greek, *paraklētos* is a masculine word, so the Greek says "he" to match it. But the Greek word for spirit is not masculine, and the King James Version says, "The Spirit itself beareth witness" (Romans 8:16). The creed of Nicaea in 325 said only, "And in the Holy Ghost." Fifty-six years later, at Constantinople, the Spirit was declared worshiped and glorified together with the Father and the Son.`,
              `Then a verse was added. The words "the Father, the Word, and the Holy Ghost: and these three are one" in 1 John 5:7 appear in no Greek manuscript until the late Middle Ages. Erasmus left them out of his Greek New Testament in 1516 and 1519. He put them into his third edition in 1522, after a late Greek copy containing them was produced. The King James Version kept them.`,
            ],
            hebrew: [
              `The Hebrew behind "comfort" is *nacham*. "Comfort ye, comfort ye my people, saith your God" (Isaiah 40:1). And who is the Comforter? Yahuah says, "I, even I, am he that comforteth you" (Isaiah 51:12). In the Hebrew, the Comforter is Yahuah Himself, by His own Spirit.`,
              `John uses the same Greek word for the Son: "we have an advocate with the Father, Yahushua Messiah the righteous" (1 John 2:1). So *paraklētos* is a role, standing beside, not the name of a third person.`,
            ],
            reread: [`The way Yahushua meant it: I will ask the Father, and He will give you another Helper at your side, His own Spirit of truth, so that you are never left alone. Two verses later He says who is coming: "I will not leave you comfortless: I will come to you" (John 14:18). A few verses after that: "my Father will love him, and we will come unto him, and make our abode with him" (John 14:23). The Father and the Son come to live with the believer by the Spirit. No third one is named.`],
            timeline: [
              ["About 400 BC", `In the Greek courts, a *paraklētos* is a friend called to stand beside the accused.`],
              ["325", `The Nicene Creed says only, "And in the Holy Ghost."`],
              ["381", `Constantinople declares the Spirit worshiped and glorified with the Father and the Son.`],
              ["589", `A council at Toledo in Spain adds that the Spirit proceeds from the Father "and the Son."`],
              ["1522", `Erasmus puts the added words of 1 John 5:7 into his third Greek edition, and the King James Version of 1611 keeps them.`],
              ["Today", `The pulpit: "God the Holy Spirit, the third person of the Trinity."`],
            ],
            built: [
              `The third person: a helper's title and a grammar rule made into a separate God.`,
              `The finished Trinity, added at Constantinople fifty-six years after Nicaea.`,
              `1 John 5:7 used as a proof text, though it was added fifteen centuries late.`,
            ],
          },
          {
            id: "theotes", greek: "Theotēs", kjv: "Godhead", role: "The root word", more: "Theotēs on Greek Influence",
            verse: { ref: "Colossians 2:9", text: "For in him dwelleth all the fulness of the Godhead bodily." },
            taught: [
              `This verse proves the Son is fully God. "The Godhead" means the Trinity: Father, Son, and Holy Ghost, three persons sharing one divine being. All of that lives in the Son. So He is God the Son, one of the three.`,
            ],
            word: [
              `The King James word "Godhead" stands for three different Greek words. *Theotēs* is here. *Theiotēs* is in Romans 1:20. And *to theion*, "the divine," is in Acts 17:29, where Paul used the Greeks' own word to tell them God is not "like unto gold, or silver, or stone." *To theion* was the philosophers' word for a divine stuff that gods and spirits could share in.`,
              `Church teachers in the 300s, Gregory of Nazianzus among them, took *theotēs* for the one divine being that three persons share. The old English word "godhead" simply meant godhood, being God, the way "childhood" means being a child. It never meant a group of three.`,
            ],
            hebrew: [
              `Paul explains his own words one chapter earlier: "For it pleased the Father that in him should all fulness dwell" (Colossians 1:19). Who put the fullness in the Son? The Father did, because He wanted to. The fullness is the Father's own, and He gave it.`,
              `Fullness is the Hebrew idea of *melo*, everything that fills a thing. "The earth is Yahuah's, and the fulness thereof" (Psalm 24:1). Yahuah's glory once filled the tabernacle (Exodus 40:34). Now His fullness lives in a man. Yahushua said, "the Father that dwelleth in me, he doeth the works" (John 14:10).`,
            ],
            reread: [`The way Paul meant it: everything that Yahuah is lives in this one man, in a real body, because the Father was pleased to put it there. Look at the verse right before it: "Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men" (Colossians 2:8). Paul wrote that warning one breath before the verse the councils later filled with philosophy. And he prayed that believers would be "filled with all the fulness of God" (Ephesians 3:19). No one calls them God.`],
            timeline: [
              ["About 350 BC", `The philosophers use *to theion*, "the divine," for a divine essence beings can share.`],
              ["About 50 AD", `Paul at Athens uses their own word to tell them God is not like gold or stone (Acts 17:29).`],
              ["About 380", `Gregory of Nazianzus teaches one *theotēs*, one Godhead, undivided in three persons.`],
              ["1611", `The King James Version puts "Godhead" for all three Greek words.`],
              ["Today", `The pulpit: "The Godhead is the Father, the Son, and the Holy Ghost."`],
            ],
            built: [
              `The Godhead as a committee of three: a word for being God turned into a name for three persons.`,
              `Colossians 2:9 as a Trinity proof, though the verse before it warns against the philosophy behind it.`,
              `The dwelling confused with the One who dwells in it.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed a substance or three persons. "To us there is but one God, the Father" (1 Corinthians 8:6). His Son Yahushua was begotten, sent, and obedient. His Spirit is His own power, His finger at work in the world. Yahuah alone saves; the Son He gave provided the way. At the end, "then shall the Son also himself be subject unto him that put all things under him, that God may be all in all" (1 Corinthians 15:28). The Trinity has to be carried into the text, because it cannot be carried out of it. Revelation keeps the order from its very first line: "The Revelation of Yahushua Messiah, which God gave unto him" (Revelation 1:1). And John heard the risen Son say "my God" four times in one breath (Revelation 3:12).`,
    },
  },
  "11": {
    oldPaths: {
      kicker: "The Old Path · Purification & Holiness",
      title: "Ye Shall Be Holy",
      subtitle: "Clean and Unclean Were Taught, Not Guessed",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah drew the line between clean and unclean Himself. He told the priests to "put difference between holy and unholy, and between unclean and clean" (Leviticus 10:10). Leviticus 11 names the animals. Beasts that part the hoof and chew the cud are food. In the waters, whatever has "fins and scales" is food (Leviticus 11:9). The swine, the hare, and everything in the water without fins and scales are not.`,
            `The reason comes with the rule. "Ye shall be holy unto me: for I Yahuah am holy, and have severed you from other people, that ye should be mine" (Leviticus 20:26). Holy means set apart, kept for one owner. A people set apart for Yahuah eat as people set apart.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `The line is older than Sinai. Noah took clean beasts "by sevens" and unclean beasts "by two" (Genesis 7:2). Centuries later, a young captive in Babylon "purposed in his heart that he would not defile himself with the portion of the king's meat" (Daniel 1:8). He asked for vegetables and water, and Yahuah blessed him for it.`,
            `The priests were charged to keep teaching the difference. When they stopped, Yahuah said, "Her priests have violated my law ... neither have they shewed difference between the unclean and the clean" (Ezekiel 22:26). And Ezekiel saw a faithful priesthood doing it again: "they shall teach my people the difference between the holy and profane, and cause them to discern between the unclean and the clean" (Ezekiel 44:23).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Noah", `clean beasts taken "by sevens" (Genesis 7:2).`],
            ["Moses", `"to make a difference between the unclean and the clean" (Leviticus 11:47).`],
            ["Daniel", `"he would not defile himself" (Daniel 1:8).`],
            ["Ezekiel", `"my soul hath not been polluted" (Ezekiel 4:14).`],
            ["Peter", `years after the cross: "I have never eaten any thing that is common or unclean" (Acts 10:14).`],
            ["Paul", `"the temple of God is holy, which temple ye are" (1 Corinthians 3:17).`],
          ],
        },
      ],
      closing: `And at the gate of the city to come, John saw the same line kept: "there shall in no wise enter into it any thing that defileth" (Revelation 21:27).`,
      torah: ["Leviticus 10:10", "Leviticus 11", "Leviticus 20:25-26", "Genesis 7:2"],
      witness: ["Ezekiel 44:23", "Ezekiel 22:26", "Daniel 1:8", "Acts 10:14", "Revelation 21:27"],
      turn: {
        text: "But Christianity went another way. It taught that every food was made clean, and that holiness is a standing you are handed, not a walk.",
        label: "The Departure: Purification & Holiness Laws",
      },
    },

    departure: {
      kicker: "The Departure · 11",
      title: "Purification & Holiness Laws",
      subtitle: "Your Body Is the Temple — So Why Aren't You Keeping It Clean?",
      attribution: "You've been reading a vision about men as a menu.",
      taught: [
        `The church teaches that the food laws were for the Jews, and they ended at the cross. Three verses carry the teaching. Many newer Bibles print Mark 7:19 as "he declared all foods clean." Peter's sheet full of animals in Acts 10 is said to prove that pork and shellfish are now fine. And Paul wrote that every creature of God is good, "sanctified by the word of God and prayer" (1 Timothy 4:5).`,
        `Holiness itself is taught two ways. In Catholic teaching it is a rank: the saints, declared holy by the church and painted in the windows. Baptist, Lutheran, Reformed, and nondenominational churches teach it as a standing handed over at belief: God looks at you through His Son, so you are already holy. Methodists and the Holiness churches add a "second blessing" that makes a believer perfect in a moment. However it is taught, nothing is asked of the plate.`,
      ],
      roots: [
        `In Hebrew, holy means set apart: cut out from the rest and kept for one owner. Moses closed the food laws with it: "ye shall be holy; for I am holy" (Leviticus 11:44). Being holy and eating clean were said in the same breath, and holiness was something a man walked in every day.`,
        `Greek gave holiness a temple meaning. <em>Hagnos</em> was the purity a worshiper needed to come near a god, and the goddess Artemis was praised as "the pure one." <em>Teleios</em>, "perfect," was a word of the mystery cults, used of those who had passed through the secret rites. Holiness became a status a ceremony gave you, and perfection became a rank above ordinary people. The walk dropped out. Two Greek words carried it in. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "hagios", greek: "Hagios / Hagnos", kjv: "holy", role: "The root word", more: "Hagios / Hagnos on Greek Influence",
            verse: { ref: "1 Peter 1:15-16", text: "But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy." },
            taught: [
              `"Be holy" means be a good person. Don't lie, don't cheat, go to church. You are holy because you are in Messiah, and God sees His Son when He looks at you. It has nothing to do with food, the pulpit says, because Mark 7:19 made all foods clean, Peter's sheet proved it, and Paul said every creature is "sanctified by the word of God and prayer."`,
            ],
            word: [
              `The Greek copy uses *hagios*, "holy." Its cousin *hagnos* means "pure." In the Greek temples these words described a holy place, or a person made ritually clean to come before a god. Homer calls the goddess Artemis *hagnē*, "the pure one."`,
              `Holiness was a temple status, something a priest or a ceremony gave you. The church kept that idea. Holiness became a rank given by the church, or a standing given at belief, with nothing to do in daily life.`,
            ],
            hebrew: [
              `But Peter says plainly, "it is written." He is quoting Moses, and the verse he picked closes the food laws: "ye shall be holy; for I am holy: neither shall ye defile yourselves with any manner of creeping thing that creepeth upon the earth" (Leviticus 11:44).`,
              `The Hebrew word is *qadosh*, set apart. Three verses later Moses says what the whole chapter was for: "To make a difference between the unclean and the clean, and between the beast that may be eaten and the beast that may not be eaten" (Leviticus 11:47).`,
            ],
            reread: [`"The One who called you is set apart, so be set apart in all your living, down to what you put on your plate." Peter keeps the right order: first bought back "with the precious blood of Messiah, as of a lamb without blemish" (1 Peter 1:19), then walking "as obedient children" (1 Peter 1:14). His sheet was about men: "God hath shewed me that I should not call any man common or unclean" (Acts 10:28). In Mark 7 the question was unwashed hands (Mark 7:5), and food goes "into the belly, and goeth out into the draught, purging all meats" (Mark 7:19). The body does the purging. "To eat with unwashen hands defileth not a man" (Matthew 15:20). And Timothy's creatures are those "which God hath created to be received," made holy "by the word of God" (1 Timothy 4:3, 5). The word that set them apart is Leviticus 11.`],
            timeline: [
              ["Sinai", `"Ye shall be holy; for I am holy" closes the food laws (Leviticus 11:44).`],
              ["About 750 BC", `Homer calls the goddess Artemis *hagnē*, "the pure one." Holiness is a temple word.`],
              ["About 34 AD", `Peter, after the cross: "I have never eaten any thing that is common or unclean" (Acts 10:14).`],
              ["About 130 AD", `The Epistle of Barnabas turns the food laws into pictures of wicked men, not food to avoid.`],
              ["993 AD", `A pope formally declares a man a saint for the first time. Holiness becomes a rank.`],
              ["Today", `The pulpit: "You are holy in Him. Now pass the ham."`],
            ],
            built: [
              `Saints as a rank: holiness handed out by the church after death, though Moses spoke to "all the congregation" (Leviticus 19:2).`,
              `Holiness as a position: declared over a person, with nothing asked of how he lives.`,
              `Nothing asked of the plate: "purging all meats" and Peter's sheet read as permission to eat anything.`,
            ],
          },
          {
            id: "teleios", greek: "Teleios", kjv: "perfect", role: "The root word", more: "Teleios on Greek Influence",
            verse: { ref: "Matthew 5:48", text: "Be ye therefore perfect, even as your Father which is in heaven is perfect." },
            taught: [
              `Most churches say nobody can be perfect. Yahushua said this, they teach, to show that no one can keep the Law, so everyone needs favor. Methodist, Nazarene, and Holiness churches teach the opposite: a second blessing comes after you are saved and wipes out the sin inside you in a moment. Then you are "entirely sanctified." Either way, perfect means sinless.`,
            ],
            word: [
              `The Greek copy uses *teleios*. It means "finished" or "complete." But the mystery religions, secret cults with hidden rites, used the same word family for their initiations. A *teletē* was a secret rite. Plato wrote that the man who is always being initiated into the perfect rites alone becomes truly perfect.`,
              `Perfect became a rank, a level reached through a rite. That is how the church came to hear it: a special experience that lifts you above ordinary believers.`,
            ],
            hebrew: [
              `Yahushua was drawing on Moses: "Thou shalt be perfect with Yahuah thy God" (Deuteronomy 18:13). Yahuah said the same to Abram long before: "walk before me, and be thou perfect" (Genesis 17:1).`,
              `The Hebrew word is *tamim*: whole, sound, like a lamb with nothing missing. Moses had just warned Israel against the fortune-tellers and charmers of the nations (Deuteronomy 18:9-12). Being *tamim* meant walking with Yahuah alone. "Blessed are the undefiled in the way, who walk in the law of Yahuah" (Psalm 119:1). "Undefiled" is the same word.`,
            ],
            reread: [`"So be whole, walking with your Father and holding nothing back, the way your Father in heaven is whole." Look at the verses just before it. Yahushua is talking about loving your enemies, because the Father "maketh his sun to rise on the evil and on the good" (Matthew 5:45). Perfect is a way of walking, not a rank. Later a rich young man asked how to enter life. Yahushua said, "keep the commandments," and then, "If thou wilt be perfect, go and sell that thou hast" (Matthew 19:17, 21). Perfect begins with the commandments. It is a whole heart that holds nothing back.`],
            timeline: [
              ["Abram's day", `"Walk before me, and be thou perfect" (Genesis 17:1).`],
              ["About 370 BC", `Plato writes that only the one always initiated into the perfect rites becomes truly perfect.`],
              ["About 200 AD", `Clement of Alexandria borrows the language of the mysteries and calls the mature believer "the perfect" one.`],
              ["1766", `John Wesley publishes *A Plain Account of Christian Perfection*.`],
              ["1867", `The first national Holiness camp meeting gathers at Vineland, New Jersey. Perfection becomes a second blessing received in a moment.`],
              ["Today", `The pulpit: "Nobody's perfect," or, "I was entirely sanctified at the altar."`],
            ],
            built: [
              `Entire sanctification: a second blessing that makes a believer sinless in one moment.`,
              `Two classes of believers: the "perfected" few above the ordinary many, just as in the cults.`,
              `A command nobody tries: if perfect means sinless, the command is out of reach, and the walk is dropped.`,
            ],
          },
        ],
      },
      oldPath: `The old path is plain. Yahuah separated clean from unclean, and He separated His people from the nations so they would be His (Leviticus 20:26). Deliverance comes first, by the blood of the Lamb Yahuah provided. Then comes the walk: the commandments, the plate, the whole heart. Paul told the believers in Corinth, "the temple of God is holy, which temple ye are" (1 Corinthians 3:17). A temple is kept clean because Someone lives there. And Revelation closes the matter at the gate of the city: "there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie" (Revelation 21:27).`,
    },
  },
  "12": {
    oldPaths: {
      kicker: "The Old Path · Calendar & Feasts",
      title: "Signs and Seasons",
      subtitle: "The Calendar Was Hung in the Sky",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah hung His calendar in the sky on the fourth day: "let them be for signs, and for seasons, and for days, and years" (Genesis 1:14). The sun turns the year, the moon numbers the month, and the stars stand as witnesses. "He appointed the moon for seasons: the sun knoweth his going down" (Psalm 104:19).`,
            `The day is the light: "God called the light Day" (Genesis 1:5), from dawn to dusk. The month opens at the first dawn after the moon passes the sun, and the moon is full on the 15th. The year turns when the sun rises due east in spring, and Aviv is the first month whose day one falls on or after that day. The barley confirms it; it does not decide it. The Sabbaths fall on the 8th, 15th, 22nd, and 29th of every month. And the feasts are Yahuah's: "even these are my feasts" (Leviticus 23:2).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Israel left Egypt by the moon. "This month shall be unto you the beginning of months" (Exodus 12:2), and they went out "on the fifteenth day of the first month" (Numbers 33:3), under a full moon. The manna showed the Sabbath by the moon. Israel reached the wilderness of Sin on "the fifteenth day of the second month" (Exodus 16:1), gathered six days, and rested on the seventh, the 22nd (Exodus 16:26).`,
            `No one waited to spot a sliver of moon. David knew ahead of time: "to morrow is the new moon" (1 Samuel 20:5). The feasts came in their order, from Pesach on the 14th of Aviv, to Shavuot in summer, to Sukkot in the seventh month. Israel even kept Pesach in the wilderness of Sinai, far from any barley field (Numbers 9:1-5).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"These are the feasts of Yahuah ... which ye shall proclaim in their seasons" (Leviticus 23:4).`],
            ["David", `"Blow up the trumpet in the new moon, in the time appointed" (Psalm 81:3).`],
            ["Solomon", `offerings "on the sabbaths, and on the new moons, and on the solemn feasts" (2 Chronicles 8:13).`],
            ["Ezekiel", `the gate opened "on the sabbath" and "in the day of the new moon" (Ezekiel 46:1).`],
            ["Yahushua", `"about the midst of the feast" He "went up into the temple, and taught" (John 7:14).`],
            ["Paul", `"I must by all means keep this feast that cometh in Jerusalem" (Acts 18:21).`],
          ],
        },
      ],
      closing: `The calendar never ends. "From one new moon to another, and from one sabbath to another, shall all flesh come to worship before me" (Isaiah 66:23). And in the city to come, the tree of life yields "her fruit every month" (Revelation 22:2).`,
      torah: ["Genesis 1:14", "Leviticus 23:1-4", "Exodus 12:2", "Exodus 16:1, 26", "Numbers 9:1-5"],
      witness: ["Psalm 104:19", "Psalm 81:3", "1 Samuel 20:5", "Ezekiel 46:1", "Isaiah 66:23"],
      turn: {
        text: "But Christianity went another way. It took Rome's week, Rome's midnight, and Rome's holidays, and called Yahuah's appointments Jewish.",
        label: "The Departure: Calendar & Feasts",
      },
    },

    departure: {
      kicker: "The Departure · 12",
      title: "Calendar & Feasts",
      subtitle: "You've Been Missing the Appointments — Because Someone Changed the Calendar",
      attribution: "You've been keeping Rome's calendar and calling it Scripture.",
      taught: [
        `The church teaches that the feasts of Leviticus were Jewish holidays, and they ended at the cross. In their place it keeps three days of its own. Sunday is "the Lord's day," kept because He rose on the first day of the week. Easter celebrates the resurrection on a spring Sunday. Christmas celebrates His birth on December 25. The week rolls on without a break, the day starts at midnight, and most believers have never heard that Yahuah has a calendar at all.`,
        `Catholics keep the full church year: Advent, Christmas, Lent, Holy Week, Easter, and the Sunday fifty days after it. Protestants dropped most saints' days but kept the big three. Baptist, Methodist, Lutheran, and nondenominational churches gather on Sunday, put up the tree in December, and hold dawn services at Easter. The tongues-speaking churches call the Sunday fifty days after Easter "the birthday of the church." Even most churches that keep a seventh day keep it on Rome's unbroken week.`,
      ],
      roots: [
        `Rome ran its calendar by the sun alone. Its day began at midnight. Its seven-day week was named for the planet gods, and one of its days belonged to the Sun. The same Roman almanac of 354 that first lists Messiah's birth on December 25 also marks that day as the birthday of the Unconquered Sun.`,
        `Then emperors and councils took the church's calendar in hand. On March 7, 321, Constantine ordered courts and city workshops to rest on "the venerable day of the Sun." At Nicaea in 325, Easter was cut loose from the Hebrew reckoning, and Constantine wrote that the churches should have nothing in common with the Jews. About 363–364, canon 29 of the Council of Laodicea told Christians to work on the Sabbath and honor "the Lord's day" instead. By about 336, Rome kept Messiah's birth on December 25. And in 1582, Pope Gregory XIII reset the sun's calendar so Easter would fall where Nicaea meant it to. Along the way, the Hebrew names were traded for Greek ones. Five Greek words carried it in. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "kairos", greek: "Kairos", kjv: "seasons, times", role: "The root word", more: "Kairos on Greek Influence",
            verse: { ref: "Galatians 4:10", text: "Ye observe days, and months, and times, and years." },
            taught: [
              `Paul is scolding the Galatians for keeping the Jewish calendar. Days, months, times, and years: that means Sabbaths, new moons, feasts, and holy years. Going back to the Law's calendar is going back to slavery. So believers today should not keep the feasts.`,
            ],
            word: [
              `The word for "times" is *kairos*. To the Greeks, Kairos was a god, called the youngest son of Zeus, with his own altar at Olympia by the entrance to the stadium. The sculptor Lysippos made a famous statue of him: a lock of hair hanging in front, and bald behind. You grab the lucky moment as it comes, because once it passes you cannot catch it.`,
              `So a *kairos* was a chance, a lucky time, the right moment. It was never a set meeting with Yahuah. The church hears "times and seasons" the same way: vague stretches of time, with no date and no appointment.`,
            ],
            hebrew: [
              `When the Torah was put into Greek, *kairos* was used in the creation story: "let them be for signs, and for seasons" (Genesis 1:14). "Seasons" there is *moadim*, from *moed*. A moed is an appointment, a set time to meet. It is the same word Yahuah uses for His feasts: "even these are my feasts" (Leviticus 23:2).`,
              `So the sky was hung to keep Yahuah's appointments, and the name of a lucky god's moment was put in their place. A moed is not luck. Yahuah sets it, Yahuah keeps it, and He expects His people to come.`,
            ],
            reread: [`"You used to serve gods that are not gods. Now you know Yahuah. So why go back to your old gods' days, and months, and lucky times, and years?" Paul says it in the verses just before: "when ye knew not God, ye did service unto them which by nature are no gods ... how turn ye again to the weak and beggarly elements?" (Galatians 4:8-9). These were people from the nations. They had never kept Yahuah's feasts, so they could not "turn again" to them. They were turning back to the calendar of their idols. And Paul kept Yahuah's: "we sailed away from Philippi after the days of unleavened bread" (Acts 20:6).`],
            timeline: [
              ["Day four", `Yahuah hangs the lights "for signs, and for seasons," His appointments (Genesis 1:14).`],
              ["About 330 BC", `Lysippos carves the god Kairos: a lock in front, bald behind.`],
              ["About 250 BC", `The Torah is put into Greek, and *moadim* in Genesis 1:14 becomes *kairoi*.`],
              ["About 50 AD", `Paul warns the Galatians not to turn back to the days of "them which by nature are no gods."`],
              ["About 160 AD", `Justin Martyr teaches that the Sabbath and the feasts were given to Israel only because of their hard hearts.`],
              ["Today", `The pulpit: "Galatians 4:10. Paul says don't keep the feasts."`],
            ],
            built: [
              `Feasts as bondage: Yahuah's own appointments treated as the "beggarly elements" of idols.`,
              `Times and seasons with no date: the feasts heard as vague seasons, not set meetings.`,
              `A calendar without the sky: Rome's week and Rome's year in place of the sun and the moon.`,
            ],
          },
          {
            id: "kyriakos", greek: "Kyriakos", kjv: "the Lord's day", role: "The root word", more: "Kyriakos on Greek Influence",
            verse: { ref: "Revelation 1:10", text: "I was in the Spirit on the Lord's day, and heard behind me a great voice, as of a trumpet," },
            taught: [
              `The Lord's day is Sunday, the day He rose. John was worshiping on Sunday when he saw the vision. The apostles moved the day of rest from the seventh day to the first, and Sunday is now the Christian Sabbath. Catholics call it a day of obligation. Protestants call it the Lord's day and build the week around it.`,
            ],
            word: [
              `The word is *kyriakos*. It simply means "belonging to the lord," the master's. The verse does not name a day of the week.`,
              `But in John's world, Caesar was called "lord," and inscriptions and papyri from Asia and Egypt name certain days *Sebastē*, "Emperor's Day," set apart to honor him. John's seven churches stood in Asia. There, a day that "belonged to the lord" already meant a day that belonged to a ruler. Later, Rome filled the empty phrase with a day of its own: the day of the Sun.`,
            ],
            hebrew: [
              `Scripture names one day that Yahuah calls His own: "If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of Yahuah, honourable" (Isaiah 58:13).`,
              `"My holy day" is *yom qodshi*, the day set apart. The Sabbath is counted by the moon, not by Rome's week. Day one of the month stands alone, and the Sabbaths fall on the 8th, 15th, 22nd, and 29th. Ezekiel saw the east gate shut "the six working days," opened "on the sabbath," and opened "in the day of the new moon" (Ezekiel 46:1). And Yahushua said whose day it is: "the Son of man is Master also of the sabbath" (Mark 2:28).`,
            ],
            reread: [`"I was in the Spirit on the day that belongs to Yahuah, His holy day, His Sabbath, and I heard behind me a great voice, like a trumpet." Nothing in Revelation points to the first day of the week. But the book does tell us who Yahuah's people are: "here are they that keep the commandments of God, and the faith of Yahushua" (Revelation 14:12). John saw his vision on Yahuah's own day, and the saints in that vision keep Yahuah's own commandments.`],
            timeline: [
              ["First century", `In Asia, days called *Sebastē*, "Emperor's Day," honor Caesar.`],
              ["About 95 AD", `John on Patmos: "I was in the Spirit on the Lord's day." No weekday is named.`],
              ["About 110 AD", `Ignatius writes of believers "no longer keeping Sabbath," but living "according to the Lord's." The word "day" is not in his Greek.`],
              ["March 7, 321", `Constantine orders courts and city workshops to rest on "the venerable day of the Sun."`],
              ["About 363–364", `Canon 29 of the Council of Laodicea: Christians must not rest on the Sabbath but work, and honor the Lord's day.`],
              ["Today", `The pulpit: "Sunday is the Lord's day, the Christian Sabbath."`],
            ],
            built: [
              `Sunday worship: Rome's day of the Sun placed where Yahuah's holy day stood.`,
              `A Sabbath on a rolling week: even many Sabbath keepers count Rome's unbroken week and land on the day Rome named for Saturn, instead of counting by the moon.`,
              `The Sabbath called Jewish: Yahuah's "my holy day" treated as belonging to one nation.`,
            ],
          },
          {
            id: "heorte", greek: "Heortē", kjv: "holyday", role: "The root word", more: "Heortē on Greek Influence",
            verse: { ref: "Colossians 2:16-17", text: "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Messiah." },
            taught: [
              `Paul says no one can judge you for not keeping the feasts, the new moons, or the Sabbath. Those things were only shadows, and the shadow ended when the Son came. So keeping a holy day is optional at best, and legalism at worst. Christmas and Easter, on the other hand, are kept as a matter of course.`,
            ],
            word: [
              `The word is *heortē*, the everyday Greek word for a religious festival: the great procession for Athena in Athens, the feasts of Dionysus, the games for Zeus. Any god could have a *heortē*.`,
              `The word itself is not the whole problem; the Greek Old Testament uses it for Yahuah's feasts too. The problem is how it was heard. If every festival is a *heortē*, any holy day will do. The church filled the word with its own holidays and treated them as the same thing as Yahuah's.`,
            ],
            hebrew: [
              `Paul's three words, holyday, new moon, sabbath, are a set that runs all through the Hebrew Scriptures: "on the sabbaths, and on the new moons, and on the solemn feasts, three times in the year, even in the feast of unleavened bread, and in the feast of weeks, and in the feast of tabernacles" (2 Chronicles 8:13).`,
              `"Holyday" stands for *chag*, a feast kept to Yahuah, when His people went up to meet Him. These feasts are commanded and dated: "These are the feasts of Yahuah, even holy convocations, which ye shall proclaim in their seasons" (Leviticus 23:4).`,
            ],
            reread: [`"Don't let anyone outside judge you for how you eat and drink at Yahuah's feasts, His new moons, and His Sabbaths. These picture things still to come, and the body of Messiah is the one to judge it." Who were the judges? They came "through philosophy and vain deceit, after the tradition of men" (Colossians 2:8). They taught "Touch not; taste not; handle not," "after the commandments and doctrines of men" (Colossians 2:21-22). And Paul says these days "are" a shadow of things to come. Not were. They still point forward.`],
            timeline: [
              ["Sinai", `The feasts are commanded and dated: "These are the feasts of Yahuah" (Leviticus 23:4).`],
              ["About 500 BC", `In Athens, *heortē* is the word for the gods' festivals, like the great procession for Athena.`],
              ["About 250 BC", `The Torah is put into Greek, and *chag* becomes *heortē*.`],
              ["About 60 AD", `Paul tells the Colossians not to let the philosophers judge them over feasts, new moons, and Sabbaths.`],
              ["About 336 AD", `Rome keeps a feast of Messiah's birth on December 25, the day its calendar also marks as the birthday of the Unconquered Sun.`],
              ["Today", `The pulpit: "Colossians 2:16. Nobody can tell you to keep the feasts."`],
            ],
            built: [
              `Church holidays for Yahuah's feasts: Christmas, Lent, and Easter in place of Pesach, Shavuot, and Sukkot.`,
              `"Shadow" read as "gone": Paul's "are a shadow of things to come" read as if it said "were."`,
              `Feast keepers judged: the very thing Paul forbade, turned around against the people keeping Yahuah's days.`,
            ],
          },
          {
            id: "pascha", greek: "Pascha", kjv: "Easter", role: "The root word", more: "Pascha on Greek Influence",
            verse: { ref: "Acts 12:4", text: "And when he had apprehended him, he put him in prison, and delivered him to four quaternions of soldiers to keep him; intending after Easter to bring him forth to the people." },
            taught: [
              `Easter is the day the church celebrates the resurrection, on the Sunday after the first full moon of spring. Catholics prepare for it with forty days of Lent. Protestants hold dawn services, cantatas, and egg hunts. Many say it has been kept since the apostles, and some point to this very verse: Easter is right there in the Book of Acts.`,
            ],
            word: [
              `Here is the surprise. *Pascha* is not a pagan word at all. It is the Hebrew word *Pesach* written in Greek letters. The pagan name came in English.`,
              `About 725 AD an English monk named Bede wrote that the spring month was named for a goddess, Eostre. Early English Bibles put "Easter" for *pascha*. The King James translators changed every one of them to "passover," except this one, Acts 12:4.`,
            ],
            hebrew: [
              `Pesach is Yahuah's own feast: "ye shall eat it in haste: it is Yahuah's passover" (Exodus 12:11). It means "passing over." Yahuah passed over the houses marked with the blood.`,
              `The feast has a date: "In the fourteenth day of the first month at even is Yahuah's passover. And on the fifteenth day of the same month is the feast of unleavened bread" (Leviticus 23:5-6). Paul says what it means: "For even Messiah our passover is sacrificed for us" (1 Corinthians 5:7). The Lamb Yahuah provided died on the 14th, at 3 in the afternoon, the very hour the lambs were slain.`,
            ],
            reread: [`"He put Peter in prison under four squads of soldiers, planning to bring him out to the people after the Pesach." Luke gives the season one verse earlier: "(Then were the days of unleavened bread.)" (Acts 12:3). Herod was not waiting for a goddess. He was waiting for Yahuah's feast to end. And Paul tells a church full of people from the nations to keep that same feast: "Therefore let us keep the feast, not with old leaven ... but with the unleavened bread of sincerity and truth" (1 Corinthians 5:8).`],
            timeline: [
              ["Egypt", `The lamb is slain on the 14th of the first month: "it is Yahuah's passover" (Exodus 12:11).`],
              ["31 AD", `Yahushua eats a preparation meal on the 13th, "before the feast of the passover" (John 13:1). He dies at 3 PM on the 14th as the lambs are slain. The Pesach is eaten that night with His body in the tomb.`],
              ["About 190 AD", `The churches of Asia still keep the 14th. Victor, bishop of Rome, threatens to cut them off.`],
              ["325 AD", `At Nicaea the feast is cut loose from the Hebrew reckoning and kept on a Sunday.`],
              ["1582", `Pope Gregory XIII resets the calendar, dropping ten days, so Easter falls where Rome reckons it.`],
              ["1611", `The King James Bible leaves "Easter" for *pascha* in one verse, Acts 12:4.`],
            ],
            built: [
              `Easter Sunday: a moving spring Sunday in place of the 14th of the first month.`,
              `The Last Supper called the Passover: the meal of John 13 was eaten "before the feast," on the 13th. Calling it the Pesach meal puts His death a day late.`,
              `Spring customs as worship: eggs, rabbits, and a goddess's name dressed up as resurrection.`,
            ],
          },
          {
            id: "pentekoste", greek: "Pentēkostē", kjv: "the fiftieth", role: "The root word", more: "Pentēkostē on Greek Influence",
            verse: { ref: "Acts 2:1", text: "And when the day of <em>pentēkostē</em> was fully come, they were all with one accord in one place." },
            taught: [
              `Fifty days after Easter Sunday, the Spirit came down and the church was born. Catholic, Anglican, and Lutheran churches mark it with red banners on a Sunday in late spring, and some bake a birthday cake. Many teach it was a brand-new Christian day with nothing to do with the Law. A whole family of tongues-speaking churches took the Greek word as its name.`,
            ],
            word: [
              `*Pentēkostē* is a Greek counting word. It simply means "the fiftieth." Greek-speaking Jews used it as a short label for the feast. But a number is not a count. It does not tell you fifty from what, or what must be finished first.`,
              `The church turned the counting word into a name, and the name replaced the Hebrew one. Then it counted fifty days from its own Easter Sunday and landed in late spring.`,
            ],
            hebrew: [
              `Moses gave the count, not just the number: "And ye shall count unto you from the morrow after the sabbath, from the day that ye brought the sheaf of the wave offering; seven sabbaths shall be complete: Even unto the morrow after the seventh sabbath shall ye number fifty days" (Leviticus 23:15-16).`,
              `The feast is *Shavuot*, "weeks." First, seven Sabbaths must be complete, counted from the wave sheaf on the 16th of Aviv: the 22nd and 29th of the first month, the 8th, 15th, 22nd, and 29th of the second, and the 8th of the third. Then, from the morrow after the seventh Sabbath, fifty days are numbered. Shavuot lands on the 28th or 29th of the fourth month, in summer, at the wheat harvest. It can never fall in the third month. Moses calls it "the feast of harvest, the firstfruits of thy labours" (Exodus 23:16).`,
            ],
            reread: [`"And when the day of Shavuot was fully counted out, the seven Sabbaths complete and the fifty days numbered to the last one, they were all with one accord in one place." "Fully come" is a filling word. It means filled up to the end, like a measure filled to the top. Luke is pointing straight back to Moses' count. And it was a harvest day: "the same day there were added unto them about three thousand souls" (Acts 2:41). It was not a new day. It was Yahuah's day, kept on time.`],
            timeline: [
              ["Sinai", `"Seven sabbaths shall be complete," then fifty days are numbered (Leviticus 23:15-16).`],
              ["About 200 BC on", `Greek-speaking Jews label the feast by a number, "the fiftieth" (Tobit 2:1; 2 Maccabees 12:32).`],
              ["31 AD", `In Jerusalem the Spirit is poured out on Shavuot, and three thousand are added (Acts 2:41).`],
              ["About 306 AD", `A council at Elvira in Spain orders the feast kept on the fiftieth day after Easter, always a Sunday in late spring.`],
              ["1901", `At a Bible school in Topeka, Kansas, students speak in tongues, and a movement takes the Greek word as its name.`],
              ["Today", `The pulpit: "The birthday of the church," a Sunday in late spring.`],
            ],
            built: [
              `A Greek name for a Hebrew feast: the counting word made into a name, and Shavuot forgotten.`,
              `A feast without a count: the seven Sabbaths dropped, and the day moved about fifty days early, out of summer into late spring.`,
              `The birthday of the church: as if Yahuah's people began here, instead of at a harvest feast He commanded in the Torah.`,
            ],
          },
        ],
      },
      oldPath: `The old path is written in the sky. The sun turns the year. The moon numbers the month, and the Sabbaths fall on the 8th, 15th, 22nd, and 29th. The day runs from dawn to dusk. The feasts come in their seasons: Pesach on the 14th of the first month, Hag HaMatzot from the 15th, Bikkurim with the wave sheaf, Shavuot in summer after seven Sabbaths and fifty days, then Yom Teruah, Yom Kippur, and Sukkot. Deliverance came first, through the Lamb on the 14th. The walk follows: keeping Yahuah's appointments on Yahuah's calendar. Isaiah saw it would never end: "from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith Yahuah" (Isaiah 66:23). And Revelation shows the same calendar in the city to come, where the tree of life "yielded her fruit every month" (Revelation 22:2).`,
    },
  },
  "13": {
    oldPaths: {
      kicker: "The Old Path · Faith Alone",
      title: "The Wine and the Bread",
      subtitle: "The Cup Opens the Door. The Bread Walks the Road.",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `When Abram came back from battle, Melchizedek, "the priest of the most high God," met him and "brought forth bread and wine" (Genesis 14:18). From that first table the pattern holds. The wine is the blood: the door Yahuah opens, the atonement no man can earn. The bread is the body: the walk through that door, a life lived by His commandments.`,
            `Scripture speaks of deliverance in three tenses. "By grace are ye saved" (Ephesians 2:8) is done. "Work out your own salvation" (Philippians 2:12) is going on. "He that shall endure unto the end, the same shall be saved" (Matthew 24:13) is still ahead. Paul holds them together: "justified by his blood," and "saved by his life" (Romans 5:9-10). The cup starts a man. The bread finishes him.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `The Law never set the cup and the bread apart. With the offerings came a meal offering of flour and oil and a drink offering of wine (Numbers 15:4-5), together, every time. Wisdom sets the same table: "Come, eat of my bread, and drink of the wine which I have mingled" (Proverbs 9:5).`,
            `Yahuah promised a priest "for ever after the order of Melchizedek" (Psalm 110:4), a priest who brings both. Belief and the walk were never two roads. Abraham "believed in Yahuah; and he counted it to him for righteousness" (Genesis 15:6). Then Abraham walked.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Abraham", `believed, and when he offered Isaac, "by works was faith made perfect" (James 2:22).`],
            ["Rahab", `trusted Yahuah and hid the spies, "justified by works" (James 2:25).`],
            ["Caleb", `"he had another spirit with him, and hath followed me fully" (Numbers 14:24).`],
            ["Yahushua", `"If ye love me, keep my commandments" (John 14:15).`],
            ["Paul", `preached to all nations "for the obedience of faith" (Romans 16:26).`],
            ["James", `"by works a man is justified, and not by faith only" (James 2:24).`],
          ],
        },
      ],
      closing: `And at the end, John saw the cup and the bread together on the saints. They "keep the commandments of God, and the faith of Yahushua" (Revelation 14:12).`,
      torah: ["Genesis 14:18", "Numbers 15:4-5"],
      witness: ["Proverbs 9:5", "Psalm 110:4"],
      turn: {
        text: "But Christianity went another way. It poured the cup and never passed the bread, and called belief alone the whole of deliverance.",
        label: "The Departure: Faith Alone",
      },
    },

    departure: {
      kicker: "The Departure · 13",
      title: "Faith Alone",
      subtitle: "The Cup Poured, the Bread Never Passed",
      attribution: "You've been quoting Luther and calling it Scripture.",
      taught: [
        `"Believe, and you are saved, and nothing you do can add to it." That is the heart of most Protestant preaching: <em>sola fide</em>, faith alone. Pray the prayer, mean it, and heaven is settled. Works are good, the preacher says, but they are only fruit, and they have nothing to do with whether you are saved. Many Baptist churches add "once saved, always saved." Evangelical and Pentecostal churches give the altar call: come forward, receive Him, and you are born again tonight.`,
        `Catholics reject "faith alone" by name. The Council of Trent condemned it in 1547. But the Catholic answer puts the church's works in the place of Yahuah's: baptism as an infant, the Mass, confession, and penance. Neither side sends the believer back to the commandments. One stops at the door with a prayer, the other with a sacrament, and the walk Yahuah gave is left out of both.`,
      ],
      roots: [
        `Paul never wrote "faith alone." In 1522 Martin Luther published his German New Testament and added the word <em>allein</em>, "alone," to Romans 3:28. Paul wrote that a man is justified by belief "without the deeds of the law." Luther's German made it "by faith alone." When critics objected, he defended the word in his <em>Open Letter on Translating</em> in 1530. In his 1522 preface he called the letter of James "an epistle of straw" next to the books he ranked highest. James says the opposite of "alone." The only place in Scripture where "faith" and "only" stand together is James 2:24: "not by faith only."`,
        `The idea had older roots. The Greeks worshiped Pistis, Trust, as a goddess, and Rome built a temple to Fides. Greek teachers of speech used <em>pistis</em> for proof, whatever persuades the mind. The mystery cults promised a new birth through a rite, and the Gnostics deliverance through secret knowledge. Rome hailed the emperor's birthday as good news and worshiped Victory as a goddess who hands the win down. In each one, a man was saved by what was done to him or what he came to know, not by how he walked afterward. Five Greek words carried that into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "pistis", greek: "Pistis", kjv: "faith", role: "The root word", more: "Pistis on Greek Influence",
            verse: { ref: "James 2:24", text: "Ye see then how that by works a man is justified, and not by faith only." },
            taught: [
              `James and Paul seem to disagree, and Paul wins. "A man is justified by faith without the deeds of the law" (Romans 3:28). James, preachers say, only means that real faith will show itself, or that he speaks of being justified before men, not before God. Faith is believing that Messiah died for you, and that belief alone saves.`,
            ],
            word: [
              `In Greek, *pistis* meant trust, and it also meant proof. Aristotle's book on speaking names the *pisteis*, the ways a speaker persuades his hearers. Belief became a matter of the mind being persuaded and agreeing.`,
              `*Pistis* was also a goddess. The poet Theognis mourned that Pistis, "a great goddess," had left mankind and gone back to Olympus. Rome built a temple to Fides, her Latin twin, on the Capitol in the 200s BC. Trust was a power to honor, not a road to walk.`,
            ],
            hebrew: [
              `*Emunah*, firmness, steadiness, faithfulness. When Moses' arms grew heavy in the battle, Aaron and Hur held them up, "and his hands were steady until the going down of the sun" (Exodus 17:12). That word "steady" is *emunah*. "The just shall live by his faith" (Habakkuk 2:4) means by his steadiness, his faithfulness. Hebrew belief stands firm and keeps going.`,
            ],
            reread: [`"By works a man is justified, and not by faith only." Paul and James do not fight. Paul says no works of the Law can open the door; that is done "through faith in his blood" (Romans 3:25). James says belief that never walks is dead: "faith, if it hath not works, is dead, being alone" (James 2:17). The one time Scripture puts "faith" beside "alone," it calls it dead. Paul agrees: "the doers of the law shall be justified" (Romans 2:13). His whole message, he says, was "for obedience to the faith among all nations" (Romans 1:5).`],
            timeline: [
              ["About 550 BC", `Theognis mourns that the goddess Pistis has left mankind.`],
              ["About 57 AD", `Paul writes Romans 3:28, with no "alone" in it.`],
              ["1522", `Luther's German New Testament adds *allein* to Romans 3:28, and his preface calls James "an epistle of straw."`],
              ["1530", `Luther defends "alone" in his *Open Letter on Translating*.`],
              ["1547", `The Council of Trent condemns faith alone, and puts the sacraments in its place.`],
              ["1646", `The Westminster Confession calls faith "the alone instrument of justification."`],
            ],
            built: [
              `"Faith alone" as the banner of the Reformation.`,
              `The letter of James treated as second-rate.`,
              `Belief reduced to agreeing with facts.`,
              `"Once saved, always saved," with no road after the door.`,
            ],
          },
          {
            id: "gnosis", greek: "Gnōsis", kjv: "knowledge", role: "The root word", more: "Gnōsis on Greek Influence",
            verse: { ref: "Luke 1:77", text: "To give knowledge of salvation unto his people by the remission of their sins," },
            taught: [
              `Salvation starts with knowing. You have to know you are a sinner, know that Messiah died for you, and know for sure that you are going to heaven. Preachers ask, "If you died tonight, do you know where you would go?" If you know the right answer, you have it. What you do with your life after that does not change it.`,
            ],
            word: [
              `*Gnōsis* means knowledge. In the second century a movement grew up around this word, the Gnostics. Teachers like Basilides in Alexandria and Valentinus in Rome taught that people are saved by knowing secret truth. To them, the spirit was good and the body was worthless, made by a lesser god, so what the body did did not matter.`,
              `Irenaeus, a church leader who wrote against them, reported that some claimed they would be saved because of what they were, not because of how they lived. Knowing became the ticket, and the life became beside the point. Paul had already warned Timothy about "science falsely so called," knowledge that made men err "concerning the faith" (1 Timothy 6:20-21).`,
            ],
            hebrew: [
              `Zacharias spoke these words as a priest of Israel, and his song is full of the prophets. Jeremiah promised a day when Yahuah would write His law on the heart, and said, "they shall all know me ... for I will forgive their iniquity" (Jeremiah 31:34). Knowing Yahuah and having sins forgiven come together, just as in Zacharias' song.`,
              `The Hebrew word for knowledge is *da'at*, from *yada*, to know. In Hebrew, to know someone is to live close to him and do as he does. Jeremiah says it of a good king: "He judged the cause of the poor and needy; then it was well with him: was not this to know me? saith Yahuah" (Jeremiah 22:16). Knowing Yahuah is something you do.`,
            ],
            reread: [`Now read it the way Zacharias meant it: to let His people know His deliverance, to know Him by walking with Him, through the forgiving of their sins. He had already said what the deliverance was for, a few lines earlier: "that we being delivered out of the hand of our enemies might serve him without fear, In holiness and righteousness before him, all the days of our life" (Luke 1:74-75). First delivered, then serving, every day after. John says the same: "He that saith, I know him, and keepeth not his commandments, is a liar" (1 John 2:4).`],
            timeline: [
              ["About 90 AD", `John warns, "He that saith, I know him, and keepeth not his commandments, is a liar."`],
              ["About 130 AD", `Basilides teaches salvation by secret knowledge in Alexandria.`],
              ["About 140 AD", `Valentinus, a Gnostic teacher in Rome, says the spiritual are saved by what they know.`],
              ["About 180 AD", `Irenaeus records Gnostics who said they would be saved by nature, whatever they did.`],
              ["1960s", `Evangelism Explosion opens its soul-winning talk with one question: do you know for certain you would go to heaven?`],
              ["Today", `"Do you know for sure you're saved?"`],
            ],
            built: [
              `"Just believe": deliverance as knowing the right facts, with nothing asked of the walk.`,
              `Assurance without obedience: being sure of heaven treated as proof, no matter how a person lives.`,
              `"The body doesn't matter": what you eat, what day you keep, how you walk.`,
            ],
          },
          {
            id: "palingenesia", greek: "Palingenesia", kjv: "regeneration", role: "The root word", more: "Palingenesia on Greek Influence",
            verse: { ref: "Titus 3:5", text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;" },
            taught: [
              `You are saved the moment you are born again. It happens all at once: at baptism, some say, or when you pray the sinner's prayer. It is "not by works," so nothing you do before or after has anything to do with it. Once you are regenerated, you are a new person, and you can never be lost.`,
            ],
            word: [
              `*Palingenesia* means "birth again." It came from the Greek philosophers. The Stoics believed the whole world ends in fire and is then born again, over and over. The mystery cults used the idea too. A worshiper of Isis came out of her rites as if reborn.`,
              `A Roman stone from 376 AD says a man was "reborn for eternity" through the sacrifice of a bull. In their world, reborn meant a one-time change done by a rite, and finished the moment it was done.`,
            ],
            hebrew: [
              `Paul's washing and renewing echo Ezekiel. Yahuah promised to wash His people and put a new spirit in them: "Then will I sprinkle clean water upon you, and ye shall be clean ... A new heart also will I give you, and a new spirit will I put within you ... and cause you to walk in my statutes, and ye shall keep my judgments, and do them" (Ezekiel 36:25-27).`,
              `The Hebrew word for new is *chadash*, made fresh. The washing is the start, and the new spirit is given for a reason: to walk in His statutes. The only other place this word appears in the New Testament is Matthew 19:28, "in the regeneration when the Son of man shall sit in the throne of his glory." That is the restoration of all things at His return (Acts 3:21). The new birth begins at the washing and is finished at the restoration.`,
            ],
            reread: [`Now read it the way Paul meant it: He saved us, not because of good deeds we had already done, but by His mercy, through the washing that begins a new life and the new spirit He puts in us. That is the door. Paul tells Titus what comes next, three verses later: "that they which have believed in God might be careful to maintain good works" (Titus 3:8). The washing is not the end of the road. It is the start of it.`],
            timeline: [
              ["About 280 BC", `The Stoics teach that the world burns and is born again, over and over.`],
              ["About 155 AD", `Justin Martyr calls baptism being "regenerated."`],
              ["About 170 AD", `Apuleius writes of a worshiper of Isis who comes out of her rites as if reborn.`],
              ["376 AD", `A Roman stone records a man "reborn for eternity" through a bull sacrifice.`],
              ["Today", `"Pray this prayer, and you are born again, forever."`],
            ],
            built: [
              `Baptismal regeneration: water poured once, and the person declared reborn for good.`,
              `The sinner's prayer: one moment in the past standing in for a life of walking.`,
              `"Once saved, always saved," with the new birth treated as the whole journey.`,
            ],
          },
          {
            id: "nike", greek: "Nikē", kjv: "victory", role: "The root word", more: "Nikē on Greek Influence",
            verse: { ref: "1 John 5:4", text: "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith." },
            taught: [
              `The victory is already won. Messiah did it all at the cross, and all you have to do is believe it. Your faith is the victory. You don't fight; you just claim it. Preachers say, "We fight from victory, not for victory." Talk of enduring or keeping commandments, they warn, takes away from His finished work.`,
            ],
            word: [
              `*Nikē* was the name of a goddess. Nike had wings, and the Athenians built her a small temple at the gate of the Acropolis. Rome called her Victoria and set her statue in the Senate house.`,
              `Nike flew down and handed the win to one side, all in a moment. The hero took the wreath, and the crowd only cheered. That is a win you receive, not one you endure for. Read through that picture, "the victory" becomes a prize already handed over.`,
            ],
            hebrew: [
              `When Paul writes "Death is swallowed up in victory" (1 Corinthians 15:54), he is quoting Isaiah: "He will swallow up death in victory" (Isaiah 25:8). The Hebrew word Isaiah used is *netsach*. It does not mean a win in a moment. It means lasting, enduring, "for ever." Many Bibles put Isaiah's line as "He will swallow up death for ever."`,
              `In Hebrew, the one who triumphs is the one still standing at the end. Paul's next words are "be ye stedfast, unmoveable, always abounding in the work of the Master" (1 Corinthians 15:58). Yahushua said it plainly: "he that shall endure unto the end, the same shall be saved" (Matthew 24:13).`,
            ],
            reread: [`Now read it the way John meant it: this is what outlasts the world, our trust, held steady to the end. John says in the verse just before what that looks like: "For this is the love of God, that we keep his commandments: and his commandments are not grievous" (1 John 5:3). The overcomer, Yahushua said, is "he that overcometh, and keepeth my works unto the end" (Revelation 2:26). "It is finished" (John 19:30) was the redemption, done once at the tree. The walk is kept to the end.`],
            timeline: [
              ["About 700 BC", `Isaiah writes, "He will swallow up death in victory," *netsach*, for ever.`],
              ["About 420 BC", `A temple to Athena Nike, the winged goddess of the win, stands at the Acropolis gate.`],
              ["29 BC", `Augustus sets a statue of Victoria in the Roman Senate house.`],
              ["384 AD", `Rome's senators, led by Symmachus, still plead to keep their altar of Victory.`],
              ["Today", `"We fight from victory, not for victory."`],
            ],
            built: [
              `A finished triumph: the win already handed over, so nothing is asked of the believer.`,
              `Any talk of the walk branded "works salvation."`,
              `"It is finished" stretched from the redemption to the believer's whole life.`,
            ],
          },
          {
            id: "euangelion", greek: "Euangelion", kjv: "gospel", role: "The root word", more: "Euangelion on Greek Influence",
            verse: { ref: "Romans 10:15", text: "And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!" },
            taught: [
              `This is the great missions verse. The gospel is the good news that Messiah died for your sins. Paul gave it a few verses back: confess with your mouth and believe in your heart, and you will be saved (Romans 10:9). Preachers carry that news, and the feet that carry it are beautiful. That is the whole message.`,
            ],
            word: [
              `The Greek uses *euangelion* and its verb, "to bring good news." Rome used this word for the emperor. A stone set up at Priene, in what is now Turkey, in 9 BC says the birthday of "the god" Augustus was the beginning of good tidings for the world.`,
              `Caesar's good news was a birth announcement: something had happened, so be glad. The pulpit's gospel sounds much the same: news about the past, to be believed, with no kingdom and no law.`,
            ],
            hebrew: [
              `But Paul is quoting Isaiah: "How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace; that bringeth good tidings of good, that publisheth salvation; that saith unto Zion, Thy God reigneth!" (Isaiah 52:7).`,
              `The Hebrew verb is *basar*, and the news itself is *besorah*. Look at what the messenger says. His news is not only that something happened. It is "Thy God reigneth!" The King is on His throne. When a king takes his throne, his law goes out with him: "out of Zion shall go forth the law" (Isaiah 2:3). Good news, in Hebrew, is the news of Yahuah's reign, and a reign is something you live under.`,
            ],
            reread: [`Now read it the way Paul meant it: how beautiful are the feet of those who bring the news that Yahuah reigns! Paul says it in the very next verse: "But they have not all obeyed the gospel" (Romans 10:16). You cannot obey a birth announcement. You obey a King. That is why Yahushua preached "the gospel of the kingdom of God," and told His hearers, "repent ye, and believe the gospel" (Mark 1:14-15). He sent His disciples out "teaching them to observe all things whatsoever I have commanded you" (Matthew 28:20).`],
            timeline: [
              ["About 700 BC", `Isaiah's messenger runs to Zion: "Thy God reigneth!"`],
              ["9 BC", `A stone at Priene calls the birthday of "the god" Augustus the start of good tidings for the world.`],
              ["About 28 AD", `Yahushua preaches "the gospel of the kingdom of God": repent, and believe.`],
              ["1520s", `Luther sets "Law" and "Gospel" against each other: the Law only demands, the gospel only gives.`],
              ["1965", `The "Four Spiritual Laws" tract boils the gospel down to four points and a prayer.`],
            ],
            built: [
              `A gospel with no King: news about the past, with no reign to live under now.`,
              `Law versus gospel: the commandments treated as the enemy of the good news, instead of the King's own words.`,
              `"Accept" in the place of "repent," and "observe all things" left out of the message.`,
            ],
          },
        ],
      },
      oldPath: `Melchizedek brought out bread and wine, and Scripture never separated them. The cup is the blood, the door Yahuah opens, and no man earns his way through it. The bread is the walk, His commandments lived out after the door is open. Belief that stops at the door is what James called dead. Belief that walks is what Habakkuk called life. John saw the bride at the end, clothed in fine linen, "for the fine linen is the righteousness of saints" (Revelation 19:8). And he saw who stands: "they that keep the commandments of God, and the faith of Yahushua" (Revelation 14:12).`,
    },
  },
  "14": {
    oldPaths: {
      kicker: "The Old Path · Rightly Divided",
      title: "One Olive Tree",
      subtitle: "He Never Started a Second People",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah gave one law to His people and to the stranger who joined them. "One law shall be to him that is homeborn, and unto the stranger that sojourneth among you" (Exodus 12:49). Moses said it again: "One law and one manner shall be for you, and for the stranger" (Numbers 15:16).`,
            `Paul pictured one olive tree. Some natural branches were broken off because of unbelief. Wild branches were grafted in by belief, and they share "the root and fatness of the olive tree" (Romans 11:17). "Thou bearest not the root, but the root thee" (Romans 11:18). One tree, one root, one people. Yahuah never started a second people with a second plan.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `When Israel left Egypt, "a mixed multitude went up also with them" (Exodus 12:38). They stood at Sinai and lived under the same law. Ruth the Moabite told Naomi, "thy people shall be my people, and thy God my God" (Ruth 1:16), and she became the great-grandmother of King David (Ruth 4:17). Caleb, "the Kenezite," received Hebron as his inheritance in Israel (Joshua 14:14).`,
            `The stranger joined Israel. He did not start a second people beside it.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"One law shall be to him that is homeborn, and unto the stranger" (Exodus 12:49).`],
            ["Ruth", `"thy people shall be my people, and thy God my God" (Ruth 1:16).`],
            ["Isaiah", `"mine house shall be called an house of prayer for all people" (Isaiah 56:7).`],
            ["Ezekiel", `the strangers "shall have inheritance with you among the tribes of Israel" (Ezekiel 47:22).`],
            ["Yahushua", `"there shall be one fold, and one shepherd" (John 10:16).`],
            ["Paul", `"no more strangers and foreigners, but fellowcitizens with the saints" (Ephesians 2:19).`],
          ],
        },
      ],
      closing: `And the city John saw at the end has "the names of the twelve tribes of the children of Israel" on its gates and "the names of the twelve apostles of the Lamb" on its foundations (Revelation 21:12, 14). One city, one people.`,
      torah: ["Exodus 12:49", "Numbers 15:15-16"],
      witness: ["Isaiah 56:6-7", "Ezekiel 47:22-23", "Romans 11:17-18", "Ephesians 2:12-19"],
      turn: {
        text: "But Christianity went another way. It cut the Book in two and handed each half to a different people.",
        label: "The Departure: Rightly Divided",
      },
    },

    departure: {
      kicker: "The Departure · 14",
      title: "Rightly Divided",
      subtitle: "Cut the Book in Half and Both Halves Bleed",
      attribution: "You've been reading Scofield's notes and calling it Scripture.",
      taught: [
        `God has run history in separate ages, called dispensations, and each age has its own rules. Israel is God's earthly people, and Israel was under the Law. The church is God's heavenly people, and the church is under grace. The two are kept apart on purpose, so that what God says to one is set aside for the other. The Old Testament, the Sermon on the Mount, and much of the Gospels are "for the Jews." Paul's letters are "for us." The church age is a pause in God's plan for Israel. When the church is taken away, God goes back to dealing with Israel.`,
        `Most Baptist, Bible, Pentecostal, and nondenominational churches in America learned this from the Scofield Bible and from the schools that taught it. The Catholic Church and the Reformed churches reject that system, but they carry their own knife. They teach that the church replaced Israel, and they cut the Law into three parts, moral, ceremonial, and civil, and keep only the first. Every branch cuts the Book somewhere.`,
      ],
      roots: [
        `The system usually rests on one verse: Timothy was to be "rightly dividing the word of truth" (2 Timothy 2:15). The Greek word is <em>orthotomeō</em>, and it is a road word. It means to cut straight, the way a road-builder cuts a straight line across open ground, or a plowman cuts a straight furrow. Paul told Timothy to keep his path straight. He did not tell him to split the Book in two.`,
        `The split came in the 1830s. John Nelson Darby, a leader of the Plymouth Brethren in Ireland and England, taught that Israel and the church are two peoples with two destinies, and he set history into dispensations. C. I. Scofield brought it to America. In 1909 his Scofield Reference Bible printed notes on the same page as the verses, marking where the divisions fall. Clarence Larkin drew the charts in 1918. In 1924 the school that became Dallas Theological Seminary opened and trained the pastors. Many readers have taken the notes for Scripture ever since. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "orthotomeo", greek: "Orthotomeō", kjv: "rightly dividing", role: "The root word", more: "Orthotomeō on Greek Influence",
            verse: { ref: "2 Timothy 2:15", text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." },
            taught: [
              `"Rightly dividing" means cutting the Bible into its proper sections and knowing which parts were written to whom. There is Israel's part and the church's part. A workman who is not ashamed knows that the Law and the kingdom sayings were not written to him. Many Bible schools call this the key verse of all Bible study.`,
            ],
            word: [
              `*Orthotomeō* is a rare word. It is built from *orthos*, straight, and *temnō*, to cut. It pictures a straight cut: a road laid straight across the country, or a furrow plowed straight across a field. The Greek translation of Proverbs uses it twice for a straight path: "he shall direct thy paths" (Proverbs 3:6), and "the righteousness of the perfect shall direct his way" (Proverbs 11:5).`,
              `This time the Greek did not carry in a pagan god. The trouble came in English. "Dividing" sounded like chopping. In 1888 Scofield published a booklet called *Rightly Dividing the Word of Truth* and used the verse to split the Book into ages and peoples. In 1921 Clarence Larkin published *Rightly Dividing the Word*. A road word became a butcher's word.`,
            ],
            hebrew: [
              `*Yashar* means straight, upright, to make straight. "In all thy ways acknowledge him, and he shall direct thy paths" (Proverbs 3:6). Isaiah cried, "make straight in the desert a highway for our God" (Isaiah 40:3).`,
              `A straight road does not cut the land in two. It runs from one end to the other without turning aside.`,
            ],
            reread: [`"A workman that needeth not to be ashamed, cutting straight the word of truth." Two verses later Paul names the crooked teachers, men whose "word will eat as doth a canker," who "concerning the truth have erred" (2 Timothy 2:17-18). Straight teaching against teaching that swerves. And to the same Timothy he wrote that "all scripture" is "profitable" (2 Timothy 3:16), the very Scriptures Timothy had known "from a child" (2 Timothy 3:15). That was the Law and the Prophets. Not one page was set aside.`],
            timeline: [
              ["About 250 BC on", `The Greek translation of Proverbs uses the word for Yahuah directing a straight path.`],
              ["About 66 AD", `Paul tells Timothy to cut the word of truth straight.`],
              ["1611", `The King James Version renders it "rightly dividing."`],
              ["1888", `Scofield's booklet *Rightly Dividing the Word of Truth* makes the verse a slogan for splitting Scripture.`],
              ["1921", `Clarence Larkin publishes *Rightly Dividing the Word*.`],
            ],
            built: [
              `A verse about walking straight turned into permission to set Scripture aside.`,
              `Maturity measured by how much of the Bible you know is "not for you."`,
              `The Torah and the Sermon on the Mount skipped as written to someone else.`,
            ],
          },
          {
            id: "oikonomia", greek: "Oikonomia", kjv: "dispensation", role: "The root word", more: "Oikonomia on Greek Influence",
            verse: { ref: "Ephesians 3:2", text: "If ye have heard of the dispensation of the grace of God which is given me to you-ward:" },
            taught: [
              `We live in the Dispensation of Grace, also called the Church Age. God deals with people in different ways in different ages. In the age of Law, Israel was under the commandments. In this age we are under grace, and the Law does not apply to us. Paul, the apostle to the Gentiles, is our teacher. The Gospels and the Law belong to the Jews.`,
            ],
            word: [
              `*Oikonomia* comes from two words: *oikos*, a house, and *nomos*, a rule. It means running a household, the job of a steward who manages his master's house. About 360 BC the Greek writer Xenophon wrote a whole book on it, about managing a farm and its servants. Yahushua uses the word of the dishonest steward: "give an account of thy stewardship" (Luke 16:2).`,
              `Later teachers turned this house word into something else. About 213, Tertullian used "the economy" to describe God arranged into three. In the 1830s, John Darby used "dispensations" for separate ages of history, each with its own terms. The Scofield Reference Bible of 1909 printed seven of them in its notes, and Clarence Larkin's charts of 1918 hung them on church walls.`,
            ],
            hebrew: [
              `In Hebrew, the steward is the man set "over the house," like Joseph, whom his master "made ... overseer over his house" in Egypt (Genesis 39:4). The house is *bayit*. And Yahuah says of Moses: "My servant Moses is not so, who is faithful in all mine house" (Numbers 12:7).`,
              `Hebrews quotes that verse and draws the line straight through: "Moses verily was faithful in all his house, as a servant ... But Messiah as a son over his own house; whose house are we" (Hebrews 3:5-6). One house. Moses served in it, the Son is over it, and we are it. A dispensation is not a new age with new rules. It is a job given to a servant in the one house: "a dispensation of the gospel is committed unto me," Paul says (1 Corinthians 9:17).`,
            ],
            reread: [`The way Paul meant it: you have heard of the job Yahuah gave me in His house, to carry His favor to you, the nations. Four verses later he says what that favor brings: "That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Messiah by the gospel" (Ephesians 3:6). Same body. Same promise. And his other "dispensation," "the dispensation of the fulness of times," is so that Yahuah "might gather together in one all things" (Ephesians 1:10). Paul's dispensation gathers into one. Darby's dispensations divide.`],
            timeline: [
              ["About 360 BC", `Xenophon writes the *Oeconomicus*: *oikonomia* means running a household and its farm.`],
              ["About 213", `Tertullian uses "the economy" to arrange God into three.`],
              ["1830s", `John Darby divides history into separate dispensations with separate terms, and adds a secret rapture.`],
              ["1909", `The Scofield Reference Bible prints seven dispensations in the notes, on the same page as the text.`],
              ["1918", `Clarence Larkin's *Dispensational Truth* spreads the system in large charts.`],
              ["Today", `The pulpit: "That's for the Jews. We're under grace."`],
            ],
            built: [
              `Different terms in different ages: Law for them, grace for us, as if Yahuah changed His mind.`,
              `The secret rapture: the church taken out of the way so that Yahuah can go back to dealing with Israel.`,
              `Charts on the church wall that the apostles never drew.`,
            ],
          },
          {
            id: "ekklesia", greek: "Ekklēsia", kjv: "church", role: "The root word", more: "Ekklēsia on Greek Influence",
            verse: { ref: "Matthew 16:18", text: "And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it." },
            taught: [
              `Messiah said, "I will build my church": will, in the future. So the church was something new. It did not exist in the Old Testament. It began in Acts 2, on Shavuot, and it is a separate people from Israel. Israel has its own promises on earth, and the church has its own in heaven. Some teachers call the church age "the great parenthesis," a pause in God's plan for Israel.`,
            ],
            word: [
              `In a Greek city, the *ekklēsia* was the town meeting: citizens called out of their homes to vote. The Bible itself uses the word that way for the crowd at Ephesus: "it shall be determined in a lawful assembly" (Acts 19:39).`,
              `The English word "church" comes from a different Greek word, *kuriakon*, meaning "belonging to the lord." Tyndale translated *ekklēsia* as "congregation" in 1526, but the King James translators were told by rule to keep the old word "church." So English readers hear "church" and picture a building, or a new religion, not Israel.`,
            ],
            hebrew: [
              `The Hebrew word beneath *ekklēsia* is *qahal*, the assembly of Israel, the people Yahuah called together. Stephen calls Israel at Sinai "the church in the wilderness" (Acts 7:38). Same word. The church was already there, gathered at the mountain.`,
              `Hebrews proves it. It quotes David: "in the midst of the congregation will I praise thee" (Psalm 22:22). In the Greek, David's "congregation" comes out as "church": "in the midst of the church will I sing praise unto thee" (Hebrews 2:12). David's congregation and the church of the apostles are one and the same word.`,
            ],
            reread: [`The way Yahushua meant it: on this rock I will build My assembly, Yahuah's own congregation, gathered and built up again, and the gates of the grave will not hold it. His followers understood Him that way. At Jerusalem, when the nations began to come in, James quoted the prophets: Yahuah "will build again the tabernacle of David, which is fallen down" (Acts 15:16). Not a new people; the old house, rebuilt. Paul told believers from the nations that they had been "aliens from the commonwealth of Israel," but now were "fellowcitizens with the saints, and of the household of God" (Ephesians 2:12, 19).`],
            timeline: [
              ["About 500 BC", `In Athens, the *ekklēsia* is the city's voting assembly of citizens.`],
              ["About 250 BC on", `The Greek translation of the Old Testament renders *qahal* as *ekklēsia*.`],
              ["1526", `Tyndale translates *ekklēsia* as "congregation," not "church."`],
              ["1611", `The King James translators keep the old church words: "church," not "congregation."`],
              ["1830s", `John Darby teaches that the church is a heavenly people, separate from Israel, an earthly people.`],
              ["1943", `H. A. Ironside's *The Great Parenthesis* calls the church age a break in God's plan for Israel.`],
            ],
            built: [
              `Two peoples of God: Israel on earth, the church in heaven, each with its own promises.`,
              `The Old Testament for someone else: the Torah and the prophets set aside as Israel's mail, not ours.`,
              `A "church" with a birthday in Acts 2, cut off from the assembly at Sinai.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never cut the Book in two. One law for the homeborn and the stranger. One olive tree, one root. Paul cut a straight path through the word of truth, and he told Timothy that the Scriptures he had known from a child were "able to make thee wise unto salvation" (2 Timothy 3:15). The Gentile who believes is grafted into Israel's tree. Delivered by the blood first, he then walks by the same commandments as the natural branches. And the city at the end has Israel's twelve tribes on its gates and the twelve apostles on its foundations (Revelation 21:12-14). One city, one people.`,
    },
  },
  "15": {
    oldPaths: {
      kicker: "The Old Path · Imputed Righteousness",
      title: "It Shall Be Our Righteousness",
      subtitle: "He Credited Belief. He Still Expected Feet.",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Moses told Israel what righteousness is: "it shall be our righteousness, if we observe to do all these commandments" (Deuteronomy 6:25). The psalmist said the same: "all thy commandments are righteousness" (Psalm 119:172). Ezekiel said a man's righteousness is his own: "the righteousness of the righteous shall be upon him" (Ezekiel 18:20). John put it in one line: "he that doeth righteousness is righteous" (1 John 3:7).`,
            `The door comes first. Abraham "believed in Yahuah; and he counted it to him for righteousness" (Genesis 15:6). Two chapters later Yahuah told him what came next: "walk before me, and be thou perfect" (Genesis 17:1). When Yahuah tested him, Abraham "rose up early in the morning" and went to Moriah (Genesis 22:3). James shows the two together: "faith wrought with his works," and so "the scripture was fulfilled" (James 2:22-23). The counting opened the door. The walking was the road. And Ezekiel warns that a man who turns back from the road loses what he had: "All his righteousness that he hath done shall not be mentioned" (Ezekiel 18:24).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Israel came out of Egypt under the blood: "when I see the blood, I will pass over you" (Exodus 12:13). Only after that did they come to Sinai and receive the commandments. Deliverance first, then the walk. The order never changed.`,
            `Generations later, Zacharias and Elisabeth were "both righteous before God, walking in all the commandments and ordinances" of Yahuah, "blameless" (Luke 1:6). Scripture called them righteous because of how they walked.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Noah", `"a just man and perfect in his generations, and Noah walked with God" (Genesis 6:9).`],
            ["Abraham", `"kept my charge, my commandments, my statutes, and my laws" (Genesis 26:5).`],
            ["Moses", `"it shall be our righteousness, if we observe to do all these commandments" (Deuteronomy 6:25).`],
            ["Ezekiel", `the just man "hath walked in my statutes ... he shall surely live" (Ezekiel 18:9).`],
            ["Zacharias and Elisabeth", `"both righteous before God, walking in all the commandments" (Luke 1:6).`],
            ["John", `"he that doeth righteousness is righteous, even as he is righteous" (1 John 3:7).`],
          ],
        },
      ],
      closing: `Revelation names the people who stand at the end: "here are they that keep the commandments of God, and the faith of Yahushua" (Revelation 14:12). Both, together.`,
      torah: ["Genesis 15:6", "Genesis 17:1", "Deuteronomy 6:25"],
      witness: ["Psalm 119:172", "Ezekiel 18:20", "1 John 3:7", "James 2:23"],
      turn: {
        text: "But Christianity went another way. It turned righteousness into a record swapped in heaven, and left the life on earth untouched.",
        label: "The Departure: Imputed Righteousness",
      },
    },

    departure: {
      kicker: "The Departure · 15",
      title: "Imputed Righteousness",
      subtitle: "A Record Swapped, a Life Untouched",
      attribution: "You've been quoting a Roman courtroom and calling it Scripture.",
      taught: [
        `When God looks at you, He does not see you. He sees His Son. Messiah's perfect obedience has been placed on your record, and your sins on His. Nothing you do after that can add to your record or take from it. That is "imputed righteousness," and it is taught in Lutheran, Reformed, Baptist, Pentecostal, and nondenominational churches alike. "All our righteousnesses are as filthy rags" (Isaiah 64:6) is quoted to show that your own obedience is filthy, and Messiah's righteousness "covers" you so God no longer sees your sin.`,
        `Rome rejected the bare swap. At the Council of Trent in 1547 it condemned anyone who says a man is justified by the imputation of Messiah's righteousness alone. But Rome put righteousness into the soul through its sacraments instead: poured in at baptism, lost by mortal sin, restored in the confessional, with the merits of Messiah and the saints kept in a treasury the church hands out. Protestant or Catholic, righteousness arrives as a transaction, a ledger entry or a sacrament.`,
      ],
      roots: [
        `The Greeks pictured justice as a goddess, Dikē, a daughter of Zeus, and Rome worshipped her as Iustitia, the lady of the law courts. In that world "righteous" was a verdict: what the judge declared about you. Greek clerks used <em>logizomai</em> for entering a sum on an account, and Greek worshippers used <em>hilaskomai</em> for soothing an angry god with an offering.`,
        `The Reformers built on the courtroom. Martin Luther preached an "alien righteousness," one that comes from outside us. His co-worker Philip Melanchthon wrote in 1531 that "to justify" means to pronounce a man righteous "in a forensic way," as a judge does. The Hebrew word had always meant righteousness done: "it shall be our righteousness, if we observe to do all these commandments" (Deuteronomy 6:25). Three Greek words carried the courtroom in. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "dikaiosyne", greek: "Dikaiosynē / Dikē", kjv: "righteousness", role: "The root word", more: "Dikaiosynē / Dikē on Greek Influence",
            verse: { ref: "Matthew 5:20", text: "For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven." },
            taught: [
              `Nobody was more careful than the Pharisees. So Yahushua was showing that no one can ever be good enough. The only righteousness that gets you in is His righteousness, put on your account. You could never earn it, so you must receive it. Your own goodness has nothing to do with it.`,
            ],
            word: [
              `The Greek copy uses *dikaiosynē*, built on *dikē*. Dikē was a goddess: Justice, a daughter of Zeus, who saw that the guilty were punished. When Paul was bitten by a snake on Malta, the islanders said, "vengeance suffereth not to live" (Acts 28:4). The word for vengeance there is *dikē*. Rome worshipped her as Iustitia, the lady of the law courts.`,
              `In that world, being righteous was a verdict: what the judge declared about you. Read that way, righteousness becomes a legal status written on a record.`,
            ],
            hebrew: [
              `Yahushua spoke Hebrew, and His word was *tsedaqah*, righteousness done. Moses defined it for Israel: "And it shall be our righteousness, if we observe to do all these commandments before Yahuah our God, as he hath commanded us" (Deuteronomy 6:25). In Hebrew, the righteous man is the one who does right. Ezekiel describes him: "if a man be just, and do that which is lawful and right ... Hath walked in my statutes, and hath kept my judgments, to deal truly; he is just, he shall surely live" (Ezekiel 18:5, 9). Righteousness is not a verdict filed away. It is a way of walking.`,
              `Isaiah used the same word when he said "all our righteousnesses are as filthy rags" (Isaiah 64:6). Read the verse before it: Yahuah "meetest him that rejoiceth and worketh righteousness" (Isaiah 64:5). And the verse after: "there is none that calleth upon thy name" (Isaiah 64:7). Isaiah was confessing for a nation in rebellion. The rags were a rebel nation's worship, not a faithful man's obedience.`,
            ],
            reread: [`Now read it the way Yahushua meant it: "Unless your doing of right goes deeper than the scribes and Pharisees, from the heart all the way through, you will not enter the kingdom." He said so one verse earlier: "whosoever shall do and teach them, the same shall be called great in the kingdom of heaven" (Matthew 5:19). Then, for the rest of the chapter, He shows what deeper looks like: not only no murder, but no hatred; not only no adultery, but no lust. He was not saying the commandments are impossible. He was telling those who follow Him to keep them from the heart.`],
            timeline: [
              ["About 700 BC", `Hesiod names Dikē, Justice, as a daughter of Zeus.`],
              ["About 60 AD", `On Malta the islanders see Paul bitten and say Dikē will not let him live (Acts 28:4).`],
              ["About 1519", `Luther preaches an "alien righteousness," one that comes from outside us, not our own.`],
              ["1559", `Calvin's final *Institutes*: justification is the forgiving of sins and the imputing of Messiah's righteousness.`],
              ["Today", `The pulpit: "When God looks at you, He sees His Son."`],
            ],
            built: [
              `A verdict on a record: righteousness filed away in heaven instead of walked out on earth.`,
              `Obedience as filthy rags: the commandments treated as a danger to the believer instead of his path.`,
              `The Sermon on the Mount read as impossible, so no one tries to keep it.`,
            ],
          },
          {
            id: "logizomai", greek: "Logizomai", kjv: "impute", role: "The root word", more: "Logizomai on Greek Influence",
            verse: { ref: "Romans 4:3", text: "For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness." },
            taught: [
              `Abraham did nothing. He just believed, and God credited righteousness to his account. That is how it works for us too. God moves Messiah's righteousness into our account, like a deposit. Works have nothing to do with it, before or after you believe. Abraham is the proof.`,
            ],
            word: [
              `*Logizomai* is a plain word. It means to count, to reckon, to weigh something up. Greek merchants used it for entries in an account book. The Latin Bible put it into Latin with *reputare* and *imputare*, an accountant's words for posting a charge or a credit to someone's account.`,
              `The Reformers built on that ledger picture. Righteousness became a sum moved from one account to another. The word did not demand that reading; the account book did.`,
            ],
            hebrew: [
              `But Paul is quoting Moses, and Moses wrote in Hebrew: "And he believed in Yahuah; and he counted it to him for righteousness" (Genesis 15:6). "Believed" is *aman*, the root of *emunah*: to stand firm, to lean your full weight on someone. "Counted" is *chashav*: to think, to weigh, to judge what something is worth.`,
              `Look at how the same Hebrew is used of Phinehas. He stood up and acted, and the plague stopped. "And that was counted unto him for righteousness unto all generations for evermore" (Psalm 106:31). Nothing was moved from someone else's account. Yahuah weighed what the man did and called it right. Abraham's trust was the same kind, real and proven: "Abraham obeyed my voice, and kept my charge, my commandments, my statutes, and my laws" (Genesis 26:5).`,
            ],
            reread: [`Now read it the way Paul meant it: "Abraham trusted Yahuah, and Yahuah weighed that trust and counted it as right, the first step of a walk." Paul says what the counting is a few verses on, quoting David: "Blessed are they whose iniquities are forgiven, and whose sins are covered" (Romans 4:7). Counted righteousness is a debt forgiven, not a borrowed life. And Abraham is the father of those "who also walk in the steps of that faith of our father Abraham" (Romans 4:12). James quotes the very same verse and draws the same line: "Seest thou how faith wrought with his works, and by works was faith made perfect?" (James 2:22).`],
            timeline: [
              ["Abraham's day", `He trusts, and he walks: "kept my charge, my commandments" (Genesis 26:5).`],
              ["About 400 AD", `The Latin Bible puts Paul's "counted" into accountant's Latin, *reputare* and *imputare*.`],
              ["1531", `Melanchthon calls justification a courtroom word: righteousness declared, not lived.`],
              ["1547", `The Council of Trent curses anyone who says a man is justified by belief alone, and anyone who says he is justified by the imputation of Messiah's righteousness alone. Rome and the Reformers now curse each other.`],
              ["1646", `The Westminster Confession: God justifies by "imputing the obedience and satisfaction" of Messiah to believers.`],
              ["Today", `The pulpit: "It's credited to your account. You don't have to do anything."`],
            ],
            built: [
              `A swapped record: the books say "righteous" while the life stays untouched.`,
              `Abraham without Moriah: Genesis 15 preached, and Genesis 22 and 26 left out.`,
              `Keeping the commandments called legalism, as if walking them were a threat to the record.`,
            ],
          },
          {
            id: "hilasmos", greek: "Hilasmos / Hilastērion", kjv: "propitiation", role: "The root word", more: "Hilasmos / Hilastērion on Greek Influence",
            verse: { ref: "Romans 3:25", text: "Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God;" },
            taught: [
              `God was angry at sin, and His anger had to land on someone. So the Son took the full wrath of God on the cross, and God's anger was satisfied. Now Messiah's righteousness covers you like a blanket, so when God looks down He no longer sees your sin. That is what "propitiation" means: the Son calmed an angry Father. Catholic teaching speaks of the satisfaction owed to God's justice; Protestant teaching calls it penal substitution.`,
            ],
            word: [
              `The Greek copy uses *hilastērion* here, and its close kin *hilasmos* in 1 John 2:2. The verb behind them, *hilaskomai*, was what the Greeks did to calm an angry god. In Homer's *Iliad*, the Greeks send a great sacrifice so they may "appease" Apollo, who is shooting plague into their camp.`,
              `Man brings the gift, and the god calms down. Read through that picture, the cross becomes the Son calming an angry Father.`,
            ],
            hebrew: [
              `But the Greek copy of Hebrews uses this same word for the lid of the ark: "the cherubims of glory shadowing the mercyseat" (Hebrews 9:5). Beneath it is the Hebrew *kapporet*, the mercy seat, from *kaphar*, to cover. Yahuah told Moses what it was for: "And there I will meet with thee, and I will commune with thee from above the mercy seat" (Exodus 25:22).`,
              `Look at what the lid sat on: "in the ark thou shalt put the testimony" (Exodus 25:21), the tablets of the Law. The blood went on the mercy seat (Leviticus 16:14), and the Law stayed inside the ark beneath it. Mercy rested on top of the commandments; it did not remove them. And notice who provides it. Yahuah designed the mercy seat. Yahuah gave the blood: "For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls" (Leviticus 17:11). In the Greek picture, man brings a gift to calm the god. In the Hebrew, Yahuah Himself gives the covering, so that He can meet with His people.`,
            ],
            reread: [`Now read it the way Paul meant it: "Yahuah set Him out in the open as the mercy seat, the place of covering, where, through trust in His blood, the sins already done are covered and forgiven." Yahuah "set forth" the covering, because "he loved us, and sent his Son to be the propitiation for our sins" (1 John 4:10). The covering does not blind Him: "all things are naked and opened unto the eyes of him with whom we have to do" (Hebrews 4:13). It covers "sins that are past," and the blood keeps cleansing those who walk: "if we walk in the light ... the blood of Yahushua Messiah his Son cleanseth us from all sin" (1 John 1:7). Then Paul answers the next question himself: "Do we then make void the law through faith? God forbid: yea, we establish the law" (Romans 3:31).`],
            timeline: [
              ["About 750 BC", `Homer: the Greeks send sacrifices to "appease" an angry Apollo (*Iliad*, book 1).`],
              ["About 250 BC", `The Greek Torah names the ark's lid *hilastērion*.`],
              ["1098", `Anselm teaches that the cross repaid the honor owed to an offended God.`],
              ["1559", `Calvin teaches that the Son bore the Father's wrath in the sinner's place.`],
              ["1611", `The King James Version writes "mercyseat" in Hebrews 9:5 but "propitiation" in Romans 3:25, though the Greek word is the same.`],
              ["2001", `A popular hymn sings that at the cross the wrath of God was satisfied.`],
            ],
            built: [
              `An angry Father and a gentle Son, set against each other, as if the Son had to talk the Father out of His anger. Scripture says Yahuah Himself "set forth" the covering.`,
              `Sin hidden under a blanket so God "doesn't see it," instead of forgiven and left behind.`,
              `Wrath settled, walk optional: if the anger is gone for good, nothing after the door seems to matter.`,
            ],
          },
        ],
      },
      oldPath: `The old path is Abraham's. He believed Yahuah, and it was counted to him for righteousness. Two chapters later Yahuah told him what came next: "walk before me, and be thou perfect" (Genesis 17:1). The counting opened the door; the walking was the road. Moses said the same to all Israel: "it shall be our righteousness, if we observe to do all these commandments" (Deuteronomy 6:25). Righteousness is not a certificate passed from one hand to another. It is worn by the people who walk it out. Revelation shows the bride dressed for her wedding and says what her clothes are made of: "And to her was granted that she should be arrayed in fine linen, clean and white: for the fine linen is the righteousness of saints" (Revelation 19:8). In Greek the word is plural: the righteous acts of the saints.`,
    },
  },
  "16": {
    oldPaths: {
      kicker: "The Old Path · Lucifer",
      title: "A Proverb Against the King of Babylon",
      subtitle: "Isaiah Named the Man",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Isaiah tells you who the chapter is about before he says a word about him. "Thou shalt take up this proverb against the king of Babylon" (Isaiah 14:4). The proverb is a taunt song, sung over a tyrant who has fallen. The king is dead. His "pomp is brought down to the grave," and "the worm is spread under thee, and the worms cover thee" (Isaiah 14:11). Worms do not eat angels. Those who look at his body ask, "Is this the man that made the earth to tremble?" (Isaiah 14:16).`,
            `This king had boasted, "I will ascend into heaven, I will exalt my throne above the stars of God" (Isaiah 14:13). He gave himself a shining title: <em>heylel</em>, "shining one, son of the dawn" (Isaiah 14:12). It was a stolen title. The morning star belongs to Yahushua: "I am the root and the offspring of David, and the bright and morning star" (Revelation 22:16). The morning star makes no light of its own. It carries the light of the coming day. So the Son carries the light of His Father.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `The prophets spoke this way about proud kings more than once. Ezekiel was sent to the prince of Tyrus, who said, "I am a God." The answer came back: "yet thou art a man, and not God" (Ezekiel 28:2). Nebuchadnezzar looked over his city and said, "Is not this great Babylon, that I have built?" He was driven out to eat grass like an ox, until he knew "that the most High ruleth" (Daniel 4:30, 32).`,
            `Scripture names the enemy by what he does, never by a title of light. In the garden he is the serpent, "more subtil than any beast of the field" (Genesis 3:1). <em>Satan</em> means adversary. Moses even used the word for Yahuah's own messenger, who "stood in the way for an adversary against" Balaam (Numbers 22:22). It is the name of a work, not a shining name.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `the enemy named by his craft, the serpent "more subtil than any beast of the field" (Genesis 3:1).`],
            ["Isaiah", `the proud king in his grave: "Is this the man?" (Isaiah 14:16).`],
            ["Ezekiel", `to the ruler of Tyrus: "thou art a man, and not God" (Ezekiel 28:2).`],
            ["Daniel", `Babylon's boaster humbled "until thou know that the most High ruleth" (Daniel 4:32).`],
            ["Peter", `the true "day star" rising "in your hearts" (2 Peter 1:19).`],
            ["John", `Yahushua, "the bright and morning star" (Revelation 22:16).`],
          ],
        },
      ],
      closing: `At the very end, the true morning star speaks for Himself: "I Yahushua have sent mine angel to testify unto you these things ... I am the root and the offspring of David, and the bright and morning star" (Revelation 22:16). No one else holds the title.`,
      torah: ["Genesis 3:1", "Numbers 22:22"],
      witness: ["Isaiah 14:4, 11, 13, 16", "Ezekiel 28:2", "2 Peter 1:19", "Revelation 22:16"],
      turn: {
        text: "But Christianity went another way. It took the king's stolen title, made it the name of a fallen angel, and gave him a life story Isaiah never wrote.",
        label: "The Departure: Lucifer",
      },
    },

    departure: {
      kicker: "The Departure · 16",
      title: "Lucifer",
      subtitle: "The Fallen Angel Hollywood Built — and Isaiah Never Wrote",
      attribution: "You've been quoting Jerome and Milton and calling it Scripture.",
      taught: [
        `Most Christians learned the story as children. Lucifer was the highest angel in heaven, the most beautiful of all, the covering cherub who led heaven's worship with music built into his body. He grew proud and said, "I will be like the most High." He led a third of the angels in revolt, was thrown down, and became Satan. Isaiah 14 and Ezekiel 28 are read as his life story.`,
        `Catholic tradition calls him Lucifer, the prince of the angels who fell through pride and was cast down by Michael. Baptist, Pentecostal, and nondenominational preachers tell the same story, often in more detail: Lucifer was heaven's worship leader, which is why, they say, the devil goes after church music. Films, novels, and costumes finish the picture: a beautiful angel turned red, horned, and winged.`,
      ],
      roots: [
        `Isaiah wrote <em>heylel</em>, "shining one," a boast the king of Babylon made for himself. The Greek translators wrote <em>heōsphoros</em>, "dawn-bringer," the name of the morning star. In Greek myth that star was a god, the son of Eos, the goddess of the dawn. Jerome's Latin Bible, finished about 405, wrote <em>lucifer</em>, "light-bearer," and the Latin word stuck as a name.`,
        `After that, the story grew by addition. Origen had already read Isaiah 14 as the devil's fall. Milton's <em>Paradise Lost</em> (1667) gave Lucifer a voice, a rebellion, and a war in heaven. Greek serpent-monsters, star-gods who ruled the world, and winged messengers filled in the rest. Four Greek words carried that world into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "phosphoros", greek: "Phōsphoros · Heōsphoros", kjv: "day star · Lucifer", role: "The root word", more: "Phōsphoros · Heōsphoros on Greek Influence",
            verse: { ref: "Isaiah 14:12", text: "How art thou fallen from heaven, O Lucifer, son of the morning! how art thou cut down to the ground, which didst weaken the nations!" },
            taught: [
              `This verse is the fall of an angel, not a man. Lucifer, "son of the morning," was heaven's worship leader, a covering cherub who wanted the throne of God. His words in the next verse, "I will ascend into heaven," are read as an angel's rebellion before the world began. From here the church took the name it still uses for the devil.`,
            ],
            word: [
              `In Hesiod's poem of the gods, the Dawn goddess Eos bears "the star Eosphoros," the morning star. The Greeks also called that star *phōsphoros*, "light-bringer," a title they gave as well to torch-carrying goddesses like Hecate and Artemis.`,
              `When the Greek translators reached Isaiah 14:12, they put *heōsphoros* for the Hebrew *heylel*. Jerome, finishing his Latin Bible about 405, wrote *lucifer*, the Latin name of the same star. He also wrote *lucifer* at 2 Peter 1:19, where Peter speaks of the "day star" rising in believers' hearts. In Jerome's Latin, one word named both the king of Babylon and the light of Messiah in the heart.`,
              `The King James translators kept "Lucifer" as a proper name in Isaiah and wrote "day star" in Peter. English readers lost the link. The title was handed to the adversary and hidden from the Son.`,
            ],
            hebrew: [
              `*Heylel* comes from *halal*, to shine. The same letters spell "to boast." "Son of the dawn," *ben shachar*, is a title the king gave himself. Isaiah never leaves the subject he named in verse 4, the king of Babylon. Verse 15 sends him down "to hell, to the sides of the pit": *Sheol*, the grave. Verse 16 calls him "the man." Verse 20 says, "Thou shalt not be joined with them in burial." Angels are not buried.`,
            ],
            reread: [`"How art thou fallen from heaven, O shining one, son of the dawn! how art thou cut down to the ground, which didst weaken the nations!" A king who crushed nations, cut down to the ground, laid in the grave with worms for his covering (Isaiah 14:11). A man who named himself a star. His boast died with him. The true light-bearer is the Son, who rose from the grave and still carries His Father's light.`],
            timeline: [
              ["About 250 BC on", `The Greek translation of the Old Testament puts *heōsphoros*, the morning-star god's name, in Isaiah 14:12.`],
              ["About 230 AD", `Origen reads Isaiah 14 as the fall of the devil.`],
              ["About 405", `Jerome's Latin Bible writes *lucifer* in Isaiah 14:12 and in 2 Peter 1:19.`],
              ["1611", `The King James Version keeps "Lucifer" in Isaiah and writes "day star" in 2 Peter.`],
              ["1667", `Milton's *Paradise Lost* gives the fallen angel his character and his war.`],
              ["Today", `The story is preached as if Isaiah wrote it.`],
            ],
            built: [
              `"Lucifer" as a personal name for the devil, a name Scripture never gives him.`,
              `A worship-leader angel's life story, assembled from Isaiah 14, Ezekiel 28, and Milton.`,
              `The Son's light-bearer title (2 Peter 1:19) handed to the adversary.`,
            ],
          },
          {
            id: "drakon", greek: "Drakōn", kjv: "dragon", role: "The root word", more: "Drakōn on Greek Influence",
            verse: { ref: "Revelation 12:3-4", text: "And there appeared another wonder in heaven; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads. And his tail drew the third part of the stars of heaven, and did cast them to the earth: and the dragon stood before the woman which was ready to be delivered, for to devour her child as soon as it was born." },
            taught: [
              `Satan is a great red dragon. Before the world began, he led a rebellion in heaven, and his tail swept a third of the angels, the "stars," down with him. Those fallen angels are the demons of today. This verse is the main proof for the whole story. In church windows and paintings, Michael or Saint George stands over a winged dragon with a spear.`,
            ],
            word: [
              `To the Greeks a *drakōn* was a great serpent, a monster that guarded sacred places. Greek hymns of about 600 BC tell how Apollo killed the serpent at Delphi, later called Python, and took the shrine for himself. Hesiod tells of a serpent guarding the golden apples at the edge of the world; later writers named him Ladon.`,
              `The Greek translators used *drakōn* for the Hebrew *tannin*. Later Christian art joined the two. The dragon of the prophets became the dragon of Greek myth, with wings, claws, and fire, and the devil was drawn that way for a thousand years.`,
            ],
            hebrew: [
              `*Tannin* is the prophets' picture of an empire and its king. Pharaoh is "the great dragon that lieth in the midst of his rivers" (Ezekiel 29:3). Nebuchadnezzar "swallowed me up like a dragon" (Jeremiah 51:34). Egypt is the dragon Yahuah wounded (Isaiah 51:9).`,
              `John's dragon has "seven heads and ten horns." The angel explains the heads as mountains and kings, and the horns as "ten kings" (Revelation 17:9-12). Daniel's beasts are read the same way: "These great beasts ... are four kings" (Daniel 7:17).`,
              `The falling stars come straight from Daniel, where an earthly horn "waxed great, even to the host of heaven; and it cast down some of the host and of the stars to the ground, and stamped upon them" (Daniel 8:10). In Daniel the stars are Yahuah's people: "they that turn many to righteousness as the stars for ever and ever" (Daniel 12:3).`,
            ],
            reread: [`John calls the dragon a "wonder." The Greek word is *sēmeion*, a sign, a picture to be read. A beast-power wearing the crowns of kingdoms threw down some of Yahuah's people, and stood before the woman "for to devour her child as soon as it was born" (Revelation 12:4). That is what Herod, Rome's king over Judea, tried at Bethlehem (Matthew 2:16). John names the power behind it: "that old serpent, called the Devil, and Satan" (Revelation 12:9). Serpent, slanderer, adversary. The one place Scripture lists his names, Lucifer is not among them.`],
            timeline: [
              ["About 700 BC", `Hesiod tells of the serpent guarding the golden apples.`],
              ["About 600 BC", `Greek hymns tell of Apollo killing the serpent at Delphi.`],
              ["About 250 BC on", `The Greek translators put *drakōn* for *tannin*, as at Ezekiel 29:3.`],
              ["About 95 AD", `John sees a dragon with seven heads and ten horns, kingdoms in the prophets' language.`],
              ["About 1260", `The *Golden Legend* spreads the story of Saint George and the dragon across Europe.`],
              ["Today", `The devil is drawn as a winged dragon, and Revelation is read as a monster story.`],
            ],
            built: [
              `A literal winged dragon-devil in place of the prophets' picture of beastly kingdoms.`,
              `Prophecy read as a monster tale instead of a history of empires.`,
              `Saint-and-dragon art in church windows and on church walls.`,
            ],
          },
          {
            id: "kosmokrator", greek: "Kosmokratōr", kjv: "rulers of the darkness", role: "The root word", more: "Kosmokratōr on Greek Influence",
            verse: { ref: "Ephesians 6:12", text: "For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places." },
            taught: [
              `Every city, nation, and region has a ruling demon over it. Believers must learn its name, map its territory, and bind it in prayer before revival can come. Prayer walks and "spiritual mapping" are built on this verse. Lucifer is pictured at the top, a general over a chain of command of fallen angels.`,
            ],
            word: [
              `*Kosmokratōr* means "world-ruler." In Greek astrology it was a name for the planets, which were thought to rule the fate of men below. The astrologer Vettius Valens, about 150 AD, uses it that way.`,
              `In the magic spells of the Roman world, written on papyrus, gods were called on by the same title: Helios the sun, Hermes, and Serapis. The magician's aim was to name the power and so control it. Paul used the word once. To his readers it named the powers people feared were running the world.`,
            ],
            hebrew: [
              `Daniel saw that nations have princes behind them: "the prince of the kingdom of Persia" (Daniel 10:13), "the prince of Grecia" (Daniel 10:20). But Daniel did not map them, name them, or bind them. He fasted and prayed, and he was heard "from the first day" (Daniel 10:12).`,
              `The armor Paul lists is Yahuah's own armor from Isaiah: "he put on righteousness as a breastplate, and an helmet of salvation upon his head" (Isaiah 59:17). Paul picks up the same pieces: "the breastplate of righteousness ... the helmet of salvation" (Ephesians 6:14, 17).`,
            ],
            reread: [`Paul's answer to the world-rulers is "the whole armour of God ... and having done all, to stand" (Ephesians 6:13): truth, righteousness, the good news of peace, belief, and the word. A life walked in Yahuah's ways, not a map of demons. The ruler of this world was already "cast out" at the cross (John 12:31). "Submit yourselves therefore to God. Resist the devil, and he will flee from you" (James 4:7).`],
            timeline: [
              ["About 60 AD", `Paul uses *kosmokratōr* once, in Ephesians 6:12.`],
              ["About 150 AD", `Vettius Valens calls a planet *kosmokratōr*.`],
              ["200s–300s AD", `Magic papyri call on Helios, Hermes, and Serapis as *kosmokratōr*.`],
              ["1990s", `"Territorial spirits" and "spiritual mapping" spread through charismatic churches.`],
              ["Today", `Prayer teams walk city streets to bind the spirit said to rule over them.`],
            ],
            built: [
              `Territorial spirits over cities, mapped and bound by name.`,
              `Prayer turned into a battle plan against named demons.`,
              `The devil as a general with a chain of command, in place of an adversary already judged at the cross.`,
            ],
          },
          {
            id: "angelos", greek: "Angelos", kjv: "angel", role: "The root word", more: "Angelos on Greek Influence",
            verse: { ref: "Hebrews 1:7", text: "And of the angels he saith, Who maketh his angels spirits, and his ministers a flame of fire." },
            taught: [
              `Angels are shining spirit beings with great white wings, made of fire and light, and Lucifer was the highest of them. Ezekiel 28 is read as his story: "the anointed cherub" who walked "in Eden the garden of God," with "tabrets" and "pipes" made in him from the day he was created, a musician from the start. And when good people die, many are told they become angels and "get their wings."`,
            ],
            word: [
              `*Angelos* simply means messenger: a man carrying a letter, or a herald sent by a king. Greek art gave the messengers of the gods wings. Hermes wore winged sandals and a winged cap. Nike, Victory, had wings on her back, and so did Eros.`,
              `The first believers drew angels as plain men. Gabriel, painted in a Roman catacomb in the 200s, has no wings. By about 400, winged figures appear in Rome's church mosaics, and by the 430s winged angels stand around the throne in the mosaics of Santa Maria Maggiore, shaped much like the winged Victories of Roman art.`,
            ],
            hebrew: [
              `Hebrews is quoting a psalm: "Who maketh his angels spirits; his ministers a flaming fire" (Psalm 104:4). The verse just before says Yahuah "maketh the clouds his chariot: who walketh upon the wings of the wind" (Psalm 104:3). The only wings in the passage belong to the wind. The word for angels is *malak*, messenger. The word for spirits is *ruach*, wind. David is saying Yahuah sends the winds as His messengers and flames of fire as His servants.`,
              `When His messengers came to men, they came looking like men. The three who came to Abraham were "three men" (Genesis 18:2). Two of them came to Sodom as "two angels" (Genesis 19:1), and the men of the city called them "the men" (Genesis 19:5). Prophets were called *malak* too: "Haggai Yahuah's messenger" (Haggai 1:13). In Scripture the beings with wings are seraphim and cherubim (Isaiah 6:2; Ezekiel 10:5), not the messengers sent to men.`,
              `Ezekiel's "anointed cherub" lament was taken up "upon the king of Tyrus" (Ezekiel 28:12), a man grown rich by "merchandise" (Ezekiel 28:16), who would "die the deaths of the uncircumcised" (Ezekiel 28:10). Angels are not circumcised or uncircumcised. Scripture never calls Lucifer an angel.`,
            ],
            reread: [`"He makes the winds His messengers, and flames of fire His servants." The same chapter says what messengers are for: "Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?" (Hebrews 1:14). Servants on errands, who could pass for men: "some have entertained angels unawares" (Hebrews 13:2). No one misses a pair of wings at the dinner table. And the cherub of Ezekiel 28 is a king's pride dressed in Eden's language. The king was a man.`],
            timeline: [
              ["200s AD", `A Roman catacomb painting shows Gabriel as a man without wings.`],
              ["About 400", `Winged figures appear in Rome's church mosaics.`],
              ["430s", `Winged angels surround the throne in the mosaics of Santa Maria Maggiore.`],
              ["1667", `Milton's *Paradise Lost* sets Lucifer at the head of rebel angels at war.`],
              ["1946", `*It's a Wonderful Life*: "Every time a bell rings, an angel gets his wings."`],
              ["Today", `Funeral cards say the departed "got their wings."`],
            ],
            built: [
              `Winged angels, with Lucifer as their fallen chief.`,
              `The dead "getting their wings," when Scripture says they sleep until the resurrection.`,
              `A cherub's life story taken from a lament over a merchant king.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed Lucifer. Isaiah named the man: the king of Babylon, dead, covered with worms, mocked by those who saw him. Ezekiel named the man: the ruler of Tyrus, "a man, and not God." The enemy is named by his works, serpent, adversary, slanderer, and he goes about "transformed into an angel of light" (2 Corinthians 11:14), wearing a light that is not his. The light-bearer's title belongs to the Son, who carries His Father's light. Peter promised that "the day star" would "arise in your hearts" (2 Peter 1:19). And at the end the Son says it Himself: "I am the root and the offspring of David, and the bright and morning star" (Revelation 22:16).`,
    },
  },
  "17": {
    oldPaths: {
      kicker: "The Old Path · Predestination",
      title: "Choose Life",
      subtitle: "The Choice Was Always Yours",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Moses set two roads before Israel and told them to pick one. "I have set before you life and death, blessing and cursing: therefore choose life" (Deuteronomy 30:19). A choice settled before birth would not be a choice. Yahuah takes no pleasure in anyone's death: "Have I any pleasure at all that the wicked should die? ... and not that he should return from his ways, and live?" (Ezekiel 18:23). "Wherefore turn yourselves, and live ye" (Ezekiel 18:32). Peter says the same. He is "not willing that any should perish" (2 Peter 3:9).`,
            `And the road can be left. "Whosoever hath sinned against me, him will I blot out of my book" (Exodus 32:33). When the righteous man turns away to do evil, "in his sin that he hath sinned, in them shall he die" (Ezekiel 18:24). Yahuah knows "the end from the beginning" (Isaiah 46:10). But knowing is not forcing.`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `In Egypt the blood came first. "When I see the blood, I will pass over you" (Exodus 12:13). Then came the bread without leaven, and then the walk out of Egypt toward Sinai. Paul gives believers the same order: "Messiah our passover is sacrificed for us: Therefore let us keep the feast ... with the unleavened bread of sincerity and truth" (1 Corinthians 5:7-8). Entry by the blood; the walk by the bread.`,
            `Not everyone who left Egypt reached the land. The whole nation came out under the blood, yet "with many of them God was not well pleased: for they were overthrown in the wilderness" (1 Corinthians 10:5). At the end of the road, Joshua still put the choice to Israel: "choose you this day whom ye will serve" (Joshua 24:15).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"therefore choose life, that both thou and thy seed may live" (Deuteronomy 30:19).`],
            ["Joshua", `"choose you this day whom ye will serve" (Joshua 24:15).`],
            ["Elijah", `"How long halt ye between two opinions?" (1 Kings 18:21).`],
            ["Ezekiel", `"turn yourselves, and live ye" (Ezekiel 18:32).`],
            ["Yahushua", `"he that shall endure unto the end, the same shall be saved" (Matthew 24:13).`],
            ["Paul", `"lest that by any means, when I have preached to others, I myself should be a castaway" (1 Corinthians 9:27).`],
          ],
        },
      ],
      closing: `At the very end, the book is still open, and names can still be kept or lost. "He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life" (Revelation 3:5).`,
      torah: ["Deuteronomy 30:19", "Exodus 32:33", "Exodus 12:13"],
      witness: ["Ezekiel 18:23, 24, 32", "2 Peter 3:9", "Matthew 24:13", "Revelation 3:5"],
      turn: {
        text: "But Christianity went another way. It taught that every man's end was fixed before he was born, and that a man once saved can never be lost.",
        label: "The Departure: Predestination",
      },
    },

    departure: {
      kicker: "The Departure · 17",
      title: "Predestination",
      subtitle: "Most Deny It by Name — and Live It Every Sunday",
      attribution: "You've been quoting Augustine and Calvin and calling it Scripture.",
      taught: [
        `Reformed and Presbyterian churches teach it openly. Before the world was made, God chose some people for eternal life and passed over the rest. Nothing the chosen do can undo it, and nothing the others do can change it. The Westminster Confession (1646) says God "freely, and unchangeably" ordained "whatsoever comes to pass." Calvin called it God's "eternal decree."`,
        `Most churchgoers say they do not believe this. Yet many Baptist and nondenominational churches teach its working form: once saved, always saved. Pray the prayer once, and the walk after it decides nothing. Catholic teaching, following Thomas Aquinas, also holds that God chose the elect for glory from all eternity, while denying that He sends anyone to hell by decree. Methodists and most Pentecostals reject the doctrine by name, but in pew after pew the same idea lives on: the blood without the walk.`,
      ],
      roots: [
        `The Stoics, Greek philosophers from about 300 BC, taught that everything happens by fate, <em>heimarmenē</em>: an unbroken chain of causes that nothing can change. They called the same power <em>pronoia</em>, providence. The Roman Stoic Seneca put their creed in one line: "The fates lead the willing, and drag the unwilling."`,
        `Augustine, bishop of Hippo in North Africa, had once defended man's free choice. Late in life, arguing against Pelagius, he taught that God had fixed the number of the saved so firmly that none could be added or taken away. Calvin built on Augustine, and the Synod of Dort sealed it. Two Greek words carried Stoic fate into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "proorizo", greek: "Proorizō", kjv: "predestinate", role: "The root word", more: "Proorizō on Greek Influence",
            verse: { ref: "Romans 8:29-30", text: "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren. Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified." },
            taught: [
              `Romans 8 is a golden chain no one can break. Whoever God foreknew, He predestinated; whoever He predestinated, He called, justified, and glorified. No link can drop out. So the list of the saved was fixed before anyone was born, and what a person does after he believes cannot change where he ends. "Once saved, always saved" rests on this chain.`,
            ],
            word: [
              `*Proorizō* is built from *horizō*, to set a boundary (the root of our word "horizon"), and *pro*, beforehand. The word itself is plain: to mark out ahead of time. The freight came with how it was read. The Stoics taught *heimarmenē*, fate: every event tied to the one before it in a chain that cannot break. Chrysippus, about 230 BC, made it the center of his teaching.`,
              `Augustine read Paul through a chain like that. From about 412 to 430, arguing against Pelagius, he taught that the number of the predestined is "so certain that one can neither be added to them nor taken from them." In the 800s the monk Gottschalk pushed it further: God predestines some to life and some to death. Calvin's *Institutes* (first edition 1536, final edition 1559) made the double decree a teaching of the Reformation: "some are preordained to eternal life, others to eternal damnation."`,
            ],
            hebrew: [
              `Paul is not describing a list of names. He is describing a destination: "to be conformed to the image of his Son." The verse just before tells who walks that road: "them that love God" (Romans 8:28). In Moses, those who love Him are those who "keep his commandments" (Deuteronomy 7:9).`,
              `"Foreknow" carries the Hebrew *yada*, knowing in covenant. "You only have I known of all the families of the earth: therefore I will punish you" (Amos 3:2). Israel was known, and still answerable. A few verses earlier Paul gives the "if": "if ye through the Spirit do mortify the deeds of the body, ye shall live" (Romans 8:13). And the Hebrew word for choosing, *bachar*, is put in man's own hands: "choose life" (Deuteronomy 30:19).`,
            ],
            reread: [`The people who love God and keep His commandments, the ones He knows, have a place marked out for them ahead of time: to become like His Son. The line is drawn, and the people inside it are the ones walking in it. Paul is describing a road, not a list. Yahuah marked out the destination beforehand: the likeness of His Son. He calls, and those who love Him and keep His commandments walk the road to that end. The road was set ahead of time. The walkers still have to walk it.`],
            timeline: [
              ["About 300 BC", `Zeno founds the Stoic school; fate, *heimarmenē*, rules all things.`],
              ["About 412–430", `Augustine, against Pelagius, teaches a fixed number of the saved.`],
              ["848–849", `Gottschalk is condemned at Mainz and Quierzy for teaching double predestination, and is kept in a monastery prison until his death.`],
              ["1536 / 1559", `Calvin's *Institutes*: some made for life, others for damnation.`],
              ["1618–19", `The Synod of Dort answers the followers of Arminius in five heads of doctrine. The acronym TULIP is not from Dort; it first appears about 1905.`],
              ["Today", `"If you were chosen, you can't lose it; if you lose it, you were never chosen."`],
            ],
            built: [
              `Double predestination: some born for heaven, some born for the fire.`,
              `A walk that does not matter once the prayer is prayed.`,
              `The "half-Calvinist": a church that drops four points and keeps one, eternal security.`,
            ],
          },
          {
            id: "pronoia", greek: "Pronoia", kjv: "providence", role: "The root word", more: "Pronoia on Greek Influence",
            verse: { ref: "Romans 13:14", text: "But put ye on the Master Yahushua Messiah, and make not provision for the flesh, to fulfil the lusts thereof." },
            taught: [
              `When you believed, you put on the Son like a robe. Now when God looks at you, He sees only His Son. Your sins, past, present, and future, are covered. God planned it all ahead of time by His providence, and nothing you do can take the robe off. The Westminster Confession (1646) says God governs "all creatures, actions, and things, from the greatest even to the least," and that those He has called "can neither totally nor finally fall away from the state of grace." Evangelicals say it more simply: "God is in control," and "once saved, always saved."`,
            ],
            word: [
              `*Pronoia* means forethought, planning ahead. To the Stoics it was the divine mind that plans everything in advance, so that whatever happens was always going to happen. Chrysippus wrote a book *On Providence*, and the Stoics held that providence and fate were one power: nothing could have been otherwise. At Delphi, Athena had a shrine that some ancient writers called the shrine of Athena Pronoia, "Athena Forethought."`,
              `The Stoic teacher Cleanthes prayed to be led by Zeus and by destiny, and Seneca, about 65 AD, gave the Latin form: "The fates lead the willing, and drag the unwilling." Read through that lens, the church came to believe God had arranged everything, even a man's final end, and that nothing he does can change it.`,
            ],
            hebrew: [
              `Look who holds the *pronoia* in this verse. Not God, but the believer. "Make not provision for the flesh": do not plan ahead for sin. The only other place the word appears in the New Testament is a hired speaker, Tertullus, flattering the Roman governor Felix: "very worthy deeds are done unto this nation by thy providence" (Acts 24:2). The Stoic god's forethought has become a man's job.`,
              `"Put on" is Hebrew clothing language. Job said, "I put on righteousness, and it clothed me" (Job 29:14). The word is *labash*, to get dressed, and Job put it on by living right. Isaiah gives the same choice Moses gave: "If ye be willing and obedient, ye shall eat the good of the land: But if ye refuse and rebel, ye shall be devoured with the sword" (Isaiah 1:19-20). The "if" is real, and the book can lose names: "him will I blot out of my book" (Exodus 32:33).`,
            ],
            reread: [`"Dress yourselves in Messiah: walk the way He walked. And do not plan ahead for your flesh to get what it wants." Paul says it plainly just before: "now is our salvation nearer than when we believed" (Romans 13:11), so "Let us walk honestly, as in the day" (Romans 13:13). The blood had brought them in, but their deliverance was still ahead, at the end of the road. The robe is not a cover thrown over a careless life. It is a life put on every day, by walking.`],
            timeline: [
              ["About 230 BC", `Chrysippus writes *On Providence*: providence and fate are one.`],
              ["About 65 AD", `Seneca: "The fates lead the willing, and drag the unwilling."`],
              ["529", `The Council of Orange rejects any teaching that God foreordains men to evil.`],
              ["1646", `The Westminster Confession joins God's decree, His providence, and the perseverance of the saints.`],
              ["1990", `Charles Stanley's *Eternal Security* teaches that a believer stays saved even if he later stops believing.`],
              ["Today", `"I don't believe in predestination," and "once saved, always saved," in the same breath.`],
            ],
            built: [
              `Once saved, always saved: Stoic fate applied to deliverance.`,
              `The blood without the bread: Pesach remembered, Hag HaMatzot and the walk to Sinai thrown away.`,
              `No need to endure, against Matthew 24:13.`,
              `Every evil laid at the feet of a decree: "it was God's will."`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed fate. Yahuah sets life and death before every man and says, "choose life." Deliverance begins at the blood, and the walk goes on with the bread: the commandments of Yahuah, kept day by day. Those who keep walking arrive. "Be thou faithful unto death, and I will give thee a crown of life" (Revelation 2:10). "He that overcometh ... I will not blot out his name out of the book of life" (Revelation 3:5).`,
    },
  },
  "18": {
    oldPaths: {
      kicker: "The Old Path · Images in Worship",
      title: "No Manner of Similitude",
      subtitle: "You Saw No Form — So Make None",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `When Yahuah spoke at Sinai, Israel saw nothing. "Ye heard the voice of the words, but saw no similitude; only ye heard a voice" (Deuteronomy 4:12). That was the reason for the command that follows: "ye saw no manner of similitude ... Lest ye corrupt yourselves, and make you a graven image" (Deuteronomy 4:15-16).`,
            `The second commandment makes no exception for religious images. "Thou shalt not make unto thee any graven image, or any likeness of any thing ... Thou shalt not bow down thyself to them, nor serve them" (Exodus 20:4-5). Isaiah asks, "To whom then will ye liken God?" (Isaiah 40:18). Paul told the Athenians the same thing: God is not "like unto gold, or silver, or stone, graven by art and man's device" (Acts 17:29).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Even a thing Yahuah ordered made could become an idol. Moses lifted up a bronze serpent on a pole, and those who looked at it lived (Numbers 21:8-9). Centuries later Israel was burning incense to it. Hezekiah "brake in pieces the brasen serpent that Moses had made," and called it Nehushtan, a piece of brass (2 Kings 18:4). The sign that pointed to deliverance had become a thing to worship.`,
            `Yahuah did give Israel something to wear, and it was not a picture. "Make them fringes in the borders of their garments ... that ye may look upon it, and remember all the commandments of Yahuah, and do them" (Numbers 15:38-39). The sign on the hand and between the eyes was His words (Deuteronomy 6:6-8). What He forbade was the mark in the skin: "nor print any marks upon you: I am Yahuah" (Leviticus 19:28).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"ye saw no manner of similitude" (Deuteronomy 4:15).`],
            ["Hezekiah", `broke the bronze serpent when Israel burned incense to it (2 Kings 18:4).`],
            ["Josiah", `put away "the images, and the idols" (2 Kings 23:24).`],
            ["Shadrach, Meshach, and Abednego", `would not "worship the golden image which thou hast set up" (Daniel 3:18).`],
            ["Paul", `God is not "like unto gold, or silver, or stone, graven by art" (Acts 17:29).`],
            ["John", `"Little children, keep yourselves from idols" (1 John 5:21).`],
          ],
        },
      ],
      closing: `At the very end, the redeemed need no picture. "They shall see his face; and his name shall be in their foreheads" (Revelation 22:4). The only mark they carry is His Name.`,
      torah: ["Exodus 20:4-5", "Deuteronomy 4:12, 15-16", "Leviticus 19:28", "Numbers 15:38-39", "Numbers 21:8-9"],
      witness: ["2 Kings 18:4", "Isaiah 40:18", "Acts 17:29", "1 John 5:21"],
      turn: {
        text: "But Christianity went another way. It raised the cross on its steeples and hung it on its necks, gave the Son a painted face, and put marks in the skin.",
        label: "The Departure: Images in Worship",
      },
    },

    departure: {
      kicker: "The Departure · 18",
      title: "Images in Worship",
      subtitle: "The Cross on the Neck, the Steeple, and the Skin",
      attribution: "You've been wearing Constantine's sign and calling it Scripture.",
      taught: [
        `The church teaches that images which point to God are not idols. The Catholic Catechism says it in so many words: "The Christian veneration of images is not contrary to the first commandment which proscribes idols," because "the honor rendered to an image passes to its prototype" (Catechism 2132). The Catholic count of the commandments folds the ban on images into the first. So Catholic and Orthodox churches fill their walls with crucifixes, statues, icons, and stained glass, and the faithful kneel, kiss, and light candles before them.`,
        `Protestants took down most of the statues but kept the empty cross: on the steeple, over the pulpit, on Bibles, on gold chains, on ball caps, on the rearview mirror. Sunday-school walls carry a painted face with long hair and soft eyes, and children are told it is the Son of God. Many believers wear a cross or have one tattooed "to show I belong to Him." Both camps say the same thing in different words: it is not worship; it is a reminder.`,
      ],
      roots: [
        `The pagan world was full of sacred images. Greeks and Romans set up statues of their gods and of the emperor and burned incense before them. Plato taught that things on earth are images, <em>eikones</em>, of heavenly patterns, so an image could lead the mind upward. Cross-shapes were old religious signs too: the Egyptian ankh, held by the gods as the sign of life, and an equal-armed cross tied to the sun-god in Assyria. Slaves and the servants of a god were branded with that god's mark.`,
        `The first believers had none of this. About 200 AD, Minucius Felix wrote, "Crosses, moreover, we neither worship nor wish for." That changed with Constantine in 312, who put the sign on his soldiers' shields and a cross-shaped standard at the head of his army. Three Greek words opened the door the Torah had shut. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "stauros", greek: "Stauros", kjv: "cross", role: "The root word", more: "Stauros on Greek Influence",
            verse: { ref: "Galatians 6:14", text: "But God forbid that I should glory, save in the cross of our Master Yahushua Messiah, by whom the world is crucified unto me, and I unto the world." },
            taught: [
              `Paul gloried in the cross, so we lift it high. The cross is the symbol of our belief. Catholics keep the crucifix, with the body on it, and on Good Friday the faithful come forward to kneel before it and kiss it. Protestants keep the empty cross "because He is risen," and put it on the steeple, over the altar, on a gold chain, and on the bumper of the car. Wearing it says, "I belong to Him."`,
            ],
            word: [
              `*Stauros* in Greek meant an upright stake, a pole set in the ground. Homer uses it for the stakes of a fence (*Odyssey* 14.11). It was a tool of execution, nothing more. The Romans sometimes fixed a crossbeam to the stake; the word itself does not tell the shape. Scripture also calls it a tree (Acts 5:30; 1 Peter 2:24).`,
              `The cross-shape itself was a religious sign long before the church took it up. The Egyptian ankh, a cross with a loop at the top, was the sign of life held in the hands of the gods. When Christians tore down the temple of Serapis at Alexandria in 391, cross-shaped signs on its stones were explained as meaning "life to come," and both pagans and Christians claimed them (Socrates, *Church History* 5.17). Assyrian kings wore an equal-armed cross, which the British Museum calls "a symbol of the sun god." Sun-wheels, a cross inside a circle, are carved on stones across ancient Europe. These shapes turn up in many lands, and that alone does not prove the church copied any one of them. What the record does show is when the cross became a holy object: about 312, when Constantine said he saw a sign in the sky with the words "conquer by this," and put it on his soldiers' shields (Eusebius, *Life of Constantine* 1.28). From the shields it went to the churches, and from the churches to the necks of the people.`,
            ],
            hebrew: [
              `Paul tells us what he means by the stauros in this same letter. He calls it a tree, and he quotes Moses: "Cursed is every one that hangeth on a tree" (Galatians 3:13). Moses wrote, "he that is hanged is accursed of God" (Deuteronomy 21:23). The Hebrew word is *etz*, a tree or a piece of wood. To an Israelite that wood was a place of shame and curse. No one would have worn it.`,
              `The Torah also shows what happens when a sign becomes an object. Moses lifted a bronze serpent on a pole, and Yahushua compared His own lifting up to it (John 3:14). Years later Israel burned incense to it, so Hezekiah "brake in pieces the brasen serpent that Moses had made ... and he called it Nehushtan" (2 Kings 18:4), a piece of brass.`,
            ],
            reread: [`"I will boast in nothing but what Messiah suffered on the tree, the curse He bore for us. Because of it, this world is dead to me, and I am dead to it." Paul is not boasting in a shape. He is boasting in a death, and in a life that died with it. Yahushua said, "let him deny himself, and take up his cross, and follow me" (Matthew 16:24). A cross you carry every day by denying yourself, not one you hang on a chain.`],
            timeline: [
              ["About 200", `Minucius Felix: "Crosses, moreover, we neither worship nor wish for."`],
              ["312", `Constantine puts the sign on his soldiers' shields and carries a cross-shaped standard, the labarum, into battle (Eusebius, *Life of Constantine* 1.28-31).`],
              ["About 326", `Constantine's mother Helena visits Jerusalem. The story that she found the "True Cross" is first written down about 395; relic veneration follows.`],
              ["692", `The Council in Trullo orders Messiah painted as a man rather than a lamb; the crucifix grows from it.`],
              ["1500s", `Protestant reformers remove the body but keep the empty cross.`],
              ["Today", `The cross is worn on chains, caps, shirts, and skin as proof of belonging to Him.`],
            ],
            built: [
              `The cross as an object of reverence: a Nehushtan on every steeple.`,
              `Relics and the "True Cross": wood treated as holy.`,
              `The cross as a badge, an image worn to claim the belief whose Torah forbids it.`,
            ],
          },
          {
            id: "eikon", greek: "Eikōn", kjv: "image", role: "The root word", more: "Eikōn on Greek Influence",
            verse: { ref: "Colossians 1:15", text: "Who is the image of the invisible God, the firstborn of every creature:" },
            taught: [
              `The Son is God you can see. The invisible God became visible in Him, so now it is right to make pictures of Him. That is how the icons were defended in the East and the statues in the West, and it is why a painted face hangs in so many Protestant homes and Sunday schools. Many also read this verse to say that the Son is God Himself.`,
            ],
            word: [
              `*Eikōn* means image or likeness. Plato taught that everything on earth is a copy, an *eikōn*, of a perfect pattern in heaven. In the Roman world the emperor's image stood in every city, and honor paid to it counted as honor to him. About 112, when Pliny, governor of Bithynia, tested people accused of being Christians, he had them offer incense and wine to the emperor's image.`,
              `Church teachers built on both ideas. About 375, Basil of Caesarea wrote that "the honour paid to the image passes on to the prototype," using the emperor's image as his example. After decades of fighting over images, the Second Council of Nicaea (787) used that line to rule that icons of Messiah and the saints are to be venerated. Our English word "icon" comes straight from *eikōn*.`,
            ],
            hebrew: [
              `Paul's word goes back to the first page of the Bible. The Greek Old Testament uses *eikōn* for the Hebrew *tselem*, image: "So God created man in his own image" (Genesis 1:27). Adam was the image, a living man who showed what his Maker is like, the way a son shows his father. No one painted Adam on a wall.`,
              `And no one was ever to paint Yahuah. "Ye saw no manner of similitude ... Lest ye corrupt yourselves, and make you a graven image" (Deuteronomy 4:15-16). *Temunah*, similitude, means a shape or form. Israel saw no shape, so they were to make none. An image of the invisible God is not the invisible God. A son can look like his father; he is not his father.`,
            ],
            reread: [`"The Son is the living likeness of the unseen God. He shows us what the Father is like, as Adam was made to do, and He is the firstborn, the Son who holds first place" (compare Psalm 89:27). Paul says who put that likeness in Him: "it pleased the Father that in him should all fulness dwell" (Colossians 1:19). And he says where the image is found now, not on a wall but in changed lives: "the new man, which is renewed in knowledge after the image of him that created him" (Colossians 3:10). Paul wrote of the pagans who "changed the glory of the uncorruptible God into an image made like to corruptible man" (Romans 1:23). Yahuah never wanted a painting of His Son. He wants a people who look like Him.`],
            timeline: [
              ["About 360 BC", `Plato: earthly things are images, *eikones*, of heavenly patterns.`],
              ["About 112", `Pliny tests accused Christians before the emperor's image.`],
              ["About 375", `Basil: "the honour paid to the image passes on to the prototype."`],
              ["726–843", `The Iconoclast struggle: emperors in the East order icons destroyed, and icon-lovers fight back.`],
              ["787", `The Second Council of Nicaea declares that images of Messiah and the saints are to be venerated.`],
              ["1940", `Warner Sallman's *Head of Christ* is printed hundreds of millions of times for Protestant homes and Sunday schools.`],
            ],
            built: [
              `Icon veneration: bowing before painted images.`,
              `Statues, crucifixes, and stained-glass saints.`,
              `The Protestant picture of the Son: a likeness Scripture never gives and the second commandment forbids.`,
            ],
          },
          {
            id: "stigma", greek: "Stigma", kjv: "marks", role: "The root word", more: "Stigma on Greek Influence",
            verse: { ref: "Galatians 6:17", text: "From henceforth let no man trouble me: for I bear in my body the marks of the Master Yahushua." },
            taught: [
              `Paul carried marks on his body to show he belonged to the Son. So a cross or a Bible verse tattooed on the arm is a good way to witness. Rome reads the verse another way: Paul bore the wounds of the crucifixion, the "stigmata," as Francis of Assisi later was said to. And every Ash Wednesday, Catholics, along with many Lutherans, Anglicans, and Methodists, receive a cross of ashes on the forehead. Either way, a mark on the body becomes a badge of belief.`,
            ],
            word: [
              `*Stigma* was the Greek word for a brand or tattoo pricked into the skin. Slaves were marked with their master's sign. People who served a god were marked with that god's sign. Herodotus, a Greek historian, tells of a temple of Heracles in Egypt where a runaway who received the god's sacred marks could not be touched (*Histories* 2.113).`,
              `When King Ptolemy IV of Egypt wanted to force Jews into the worship of Dionysus, he ordered them branded with the god's ivy leaf (3 Maccabees 2:29). The mark said whose you were.`,
            ],
            hebrew: [
              `The Torah forbids that kind of mark outright: "Ye shall not make any cuttings in your flesh for the dead, nor print any marks upon you: I am Yahuah" (Leviticus 19:28). The Hebrew words mean writing and cutting: writing cut into the skin, a tattoo. Paul knew this law. He would never have printed anything on his body.`,
              `Israel did have a mark of belonging, but it was not ink: "thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes" (Deuteronomy 6:8). The sign was His words, kept and lived.`,
            ],
            reread: [`"From now on, let no one trouble me. The scars on my body show whose servant I am. I took them for the Master Yahushua." Paul lists those scars himself: "Thrice was I beaten with rods, once was I stoned" (2 Corinthians 11:25). In the same chapter as our verse, he warns about men who "desire to make a fair shew in the flesh" (Galatians 6:12). Paul's marks were not for show, and he did not choose them. Others beat them into him. At the end, the redeemed carry one mark: "his name shall be in their foreheads" (Revelation 22:4).`],
            timeline: [
              ["About 440 BC", `Herodotus: temple servants bear their god's sacred marks.`],
              ["About 217 BC", `Ptolemy IV, by the account in 3 Maccabees, orders Jews branded with the ivy leaf of Dionysus.`],
              ["About 55 AD", `Paul calls his scars from rods and stones "the marks of the Master Yahushua."`],
              ["1224", `Francis of Assisi is said to receive the "stigmata," the wounds of the crucifixion, in his body.`],
              ["Today", `Crosses and verses are inked as a sign of belief, often defended from Galatians 6:17, and ashes mark foreheads every Ash Wednesday.`],
            ],
            built: [
              `The Christian tattoo: the pagan devotee's mark, renamed as a testimony.`,
              `Stigmata: Paul's scars turned into a miracle of the flesh.`,
              `A cross of ashes on the forehead, where Yahuah put His words.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed a picture. Israel heard a voice and saw no form. Yahuah's reminders were His words, worn as fringes and bound on the hand and between the eyes, not shapes of wood or metal, and not ink in the skin. When the bronze serpent became a thing to worship, Hezekiah broke it. The Son showed the Father by what He did and said, never by what He looked like, and the second commandment was the very ground Paul preached on in Athens (Acts 17:29). Revelation shows that what is worn on the hand and the forehead matters: one mark belongs to the beast (Revelation 13:16), and the other is the Name. It ends with the face that matters: "And they shall see his face; and his name shall be in their foreheads" (Revelation 22:4).`,
    },
  },
  "19": {
    oldPaths: {
      kicker: "The Old Path · Clergy over the People",
      title: "A Kingdom of Priests",
      subtitle: "Every One of Them, Not a Class Above Them",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `At Sinai, Yahuah spoke about the whole nation: "ye shall be unto me a kingdom of priests, and an holy nation" (Exodus 19:6). Not a nation with priests in it, but a nation of priests. Moses wanted every one of them to hear from Yahuah: "would God that all Yahuah's people were prophets" (Numbers 11:29).`,
            `The apostles say the same to every believer. "Ye are a chosen generation, a royal priesthood" (1 Peter 2:9). Yahushua "hath made us kings and priests unto God and his Father" (Revelation 1:6). There is "one mediator between God and men, the man Messiah Yahushua" (1 Timothy 2:5), and no second one, whether he wears a collar or a suit. Yahushua forbade the titles that lift one brother above another: "be not ye called Rabbi: for one is your Master, even Messiah; and all ye are brethren. And call no man your father upon the earth" (Matthew 23:8-9).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Moses did not carry the people alone. Yahuah put the spirit that was on him upon seventy elders (Numbers 11:16-17, 25). When two men, Eldad and Medad, prophesied in the camp, Joshua said, "forbid them." Moses answered with his wish that all Yahuah's people were prophets (Numbers 11:28-29).`,
            `The first assemblies were led by elders, always more than one. Paul and Barnabas "ordained them elders in every church" (Acts 14:23). In the meeting, everyone took part: "every one of you hath a psalm, hath a doctrine" (1 Corinthians 14:26). And the people of Berea checked even Paul against the Scriptures. They "searched the scriptures daily, whether those things were so" (Acts 17:11).`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `"would God that all Yahuah's people were prophets" (Numbers 11:29).`],
            ["Yahushua", `"one is your Master, even Messiah; and all ye are brethren" (Matthew 23:8).`],
            ["Peter", `"also an elder," who told the elders not to be "lords over God's heritage" (1 Peter 5:1, 3).`],
            ["Paul", `"Not for that we have dominion over your faith, but are helpers of your joy" (2 Corinthians 1:24).`],
            ["The Bereans", `"searched the scriptures daily, whether those things were so" (Acts 17:11).`],
            ["John", `"kings and priests unto God and his Father" (Revelation 1:6).`],
          ],
        },
      ],
      closing: `At the very end, the redeemed sing that the Lamb "hast made us unto our God kings and priests" (Revelation 5:10). Every one of them.`,
      torah: ["Exodus 19:6", "Numbers 11:29"],
      witness: ["1 Peter 2:9", "Revelation 1:6", "Matthew 23:8-10", "1 Timothy 2:5"],
      turn: {
        text: "But Christianity went another way. It lifted one man above the rest, whether bishop, priest, or pastor, and made the people his audience.",
        label: "The Departure: Clergy over the People",
      },
    },

    departure: {
      kicker: "The Departure · 19",
      title: "Clergy over the People",
      subtitle: "One Pulpit, One Pew — and the Wall Between Them",
      attribution: "You've been quoting Ignatius and calling it Scripture.",
      taught: [
        `In the Catholic and Orthodox churches, the priest is set apart by holy orders, a sacrament. Only he can offer the Mass and pronounce sins forgiven, and he is said to stand in the Son's place at the altar. Bishops rule over priests, and in Rome the pope rules over the bishops. Everyone else is the laity, the people who receive.`,
        `Protestants are quick to say what is wrong with that. Then they go to church and say, "My pastor says." The pastor is "God's anointed," and "touch not mine anointed" (Psalm 105:15) is quoted to shut down a question. In many churches only the ordained may baptize or serve the bread and the cup. Pentecostal and charismatic churches add bishops, apostles, and "the man of God," and large churches run the senior pastor like a company's chief executive. Rome calls him a priest; Protestants call him pastor, reverend, or minister. Either way, one man speaks for Yahuah and the rest listen.`,
      ],
      roots: [
        `Every piece was already standing in the Greek world. Greek poets called the gods the overseers, <em>episkopoi</em>, of men, and Greek cities sent overseers to watch their towns. Greek temples had priests, <em>hiereis</em>, who alone could offer the sacrifice. Homer called his kings "shepherd of the people." Temples hung up offerings called <em>anathēmata</em>. Rome's high priest was the Pontifex Maximus, and the popes later took that title for themselves.`,
        `Within a lifetime of the apostles, the church began to sort itself the same way. Clement of Rome, about 96, set the "layman" apart from the priests. Ignatius, about 110, put one bishop over the elders. Cyprian, about 250, made the bishop the center of the church. Four Greek words built the wall between pulpit and pew. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "episkopos", greek: "Episkopos", kjv: "bishop", role: "The root word", more: "Episkopos on Greek Influence",
            verse: { ref: "1 Timothy 3:1-2", text: "This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach;" },
            taught: [
              `This is the job posting for the top man in the church. In Catholic, Orthodox, Anglican, and Methodist churches, the bishop rules over the priests and churches of a region. In most other Protestant churches the same verse is preached over the senior pastor, who rules a congregation. He sits above everyone else, and the people answer to him. Reaching that office is treated as the highest calling a man can have.`,
            ],
            word: [
              `*Episkopos* means "one who watches over." In Homer's *Iliad*, Achilles calls the gods to be the "witnesses and overseers" of an oath. The Athenian lawgiver Solon, about 590 BC, called the goddess Athena the "great-hearted overseer" who holds her hands over the city. Athens sent officials called *episkopoi* to watch over its subject towns, and the playwright Aristophanes mocks one in *The Birds* (414 BC). An overseer was a god watching over men, or a ruler's officer watching his subjects.`,
              `In Paul's letters the overseers are simply the elders, several in each assembly, serving together (Acts 20:17, 28; Titus 1:5, 7). Philippi had "bishops and deacons," plural (Philippians 1:1). The word "office" is not in the Greek of verse 1; the translators added it. The Greek says, "if a man desire oversight." Then, about 110 AD, Ignatius wrote, "Let no man do anything connected with the church without the bishop," and one overseer was lifted above all the elders.`,
            ],
            hebrew: [
              `Peter shows what this word means in Hebrew. Choosing a man to replace Judas, he quoted David: "his bishoprick let another take" (Acts 1:20). David had written, "let another take his office" (Psalm 109:8). The Hebrew word is *pequddah*, from *pakad*, to watch over or take care of. It means a charge, a duty given to someone.`,
              `The Greek Old Testament calls Eleazar the priest an *episkopos*. He had "the oversight of all the tabernacle" (Numbers 4:16): the oil for the light, the incense, the anointing oil, the vessels. That is oversight in Hebrew: a job of care and service, not a throne.`,
            ],
            reread: [`"If a man wants to watch over the flock, he wants a good work. So a watchman must be blameless, faithful to his one wife, awake, sober, well-behaved, open-hearted to guests, and able to teach." Paul calls it "a good work," not a high seat. Peter, an elder himself, told the elders how to do it: "Feed the flock of God which is among you, taking the oversight thereof ... Neither as being lords over God's heritage, but being ensamples to the flock" (1 Peter 5:2-3). Among the flock, not above it.`],
            timeline: [
              ["414 BC", `Aristophanes mocks an Athenian *episkopos* sent to oversee a town.`],
              ["About 110", `Ignatius: "do nothing without the bishop." One overseer now stands above the elders.`],
              ["About 250", `Cyprian: "the bishop is in the church, and the church in the bishop."`],
              ["About 380", `Bishops rule cities, and the bishop of Rome claims first place among them.`],
              ["1541", `Calvin's Geneva makes the pastor the first of its church offices.`],
              ["Today", `One man runs the assembly, often by title and salary.`],
            ],
            built: [
              `The single ruling bishop or senior pastor, in place of a body of elders.`,
              `The pulpit as authority: one voice, many silent.`,
              `Church office pursued as a career.`,
            ],
          },
          {
            id: "hiereus", greek: "Hiereus · Laikos", kjv: "priest · laity", role: "The root word", more: "Hiereus · Laikos on Greek Influence",
            verse: { ref: "Revelation 1:6", text: "And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen." },
            taught: [
              `Yes, all believers are priests, in a spiritual way. But in real church life, only the ordained man can lead the service, serve the bread and the cup, or explain the Bible with authority. Rome calls him a priest, and he alone hears confession and offers the Mass. Protestants call him the pastor or the minister, and teach "the priesthood of all believers" while the ordained do the ministry. Everyone else is the "laity," the people in the pews who watch, listen, give, and go home.`,
            ],
            word: [
              `*Hiereus*, "priest," was the man who served in a Greek temple. He stood between the worshiper and the god, offered the sacrifice, and spoke for the god. *Laikos* meant "of the people," common, not sacred.`,
              `About 96 AD, Clement of Rome, writing to the believers at Corinth, compared church order to the temple: high priest, priests, Levites, and "the layman is bound by the layman's ordinances" (1 Clement 40). He is the first church writer known to use the word. About 200, Tertullian set the "order" of church leaders apart from the common people, and about 250 Cyprian called the bishop a priest. Two classes were born: clergy and laity. Yet the New Testament never calls a church leader a *hiereus*. It uses the word for the Levites, for pagan priests (Acts 14:13), for Messiah as High Priest, and for all believers together, as in this verse.`,
            ],
            hebrew: [
              `John is echoing Moses at Sinai: "And ye shall be unto me a kingdom of priests, and an holy nation" (Exodus 19:6). The Hebrew word is *kohen*, a priest, one who comes near to serve. Yahuah's plan was a whole nation of them.`,
              `Under the Levitical order the priests came from one tribe. That order pointed to Yahushua, who entered the holy place "by his own blood ... once" (Hebrews 9:12). Now Peter takes Moses' words and gives them to every believer: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people" (1 Peter 2:9).`,
            ],
            reread: [`"He has made all of us, every believer, a kingdom, priests who serve His God and Father." Not some of us. Us. Notice too that the Son has a God: "unto God and his Father." And only one go-between is left: "For there is one God, and one mediator between God and men, the man Messiah Yahushua" (1 Timothy 2:5). One God. One mediator, and He is a man, the Son. No priest and no pastor stands in the middle of that.`],
            timeline: [
              ["About 96", `Clement of Rome: the first known church use of "layman," *laikos*.`],
              ["About 200", `Tertullian sets the "order" of leaders apart from the common people.`],
              ["About 250", `Cyprian calls the bishop a priest.`],
              ["1215", `The Fourth Lateran Council requires every believer to confess to a priest at least once a year.`],
              ["1563", `The Council of Trent declares holy orders a sacrament and curses whoever denies a visible priesthood.`],
              ["Today", `Ordained clergy and the laity in both camps, whether the man is called priest or pastor.`],
            ],
            built: [
              `A priest between the believer and Yahuah.`,
              `The laity: the people of Yahuah reduced to an audience.`,
              `Confession to a man.`,
            ],
          },
          {
            id: "poimen", greek: "Poimēn", kjv: "pastors", role: "The root word", more: "Poimēn on Greek Influence",
            verse: { ref: "Ephesians 4:11", text: "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers;" },
            taught: [
              `Every church needs a pastor, the man God called to lead it. He preaches, counsels, marries, buries, and decides. People say "my pastor says" the way Catholics say "Father says," and Catholic parishes call their priest the pastor too. In large churches the senior pastor is the vision-caster and chief executive, and the staff, elders, and deacons serve under him. This verse is read as his job description.`,
            ],
            word: [
              `*Poimēn* means shepherd. Homer called kings like Agamemnon *poimēn laōn*, "shepherd of the people," the title of a ruler over the crowd. That is how the word came to sound in the church: one man over the people.`,
              `But this is the only verse in the New Testament where *poimēn* is used for a leader in the assembly. It sits in a list of gifts, and it is plural, "pastors." Paul never put "Pastor" in front of a man's name, and he never made one man the head of an assembly. In 1541 Calvin's Geneva named four church offices with the pastor first, and the Protestant pastor was born. In the late 1900s, church-growth books taught pastors to lead like the chief executive of a company.`,
            ],
            hebrew: [
              `Paul's words echo Jeremiah: "And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding" (Jeremiah 3:15). Yahuah gives them; Paul says, "he gave some." The Hebrew word is *ro'eh*, a shepherd, one who feeds. And the first Shepherd is Yahuah Himself: "Yahuah is my shepherd; I shall not want" (Psalm 23:1).`,
              `The prophets warned about shepherds who rule for themselves: "Woe be to the shepherds of Israel that do feed themselves!" (Ezekiel 34:2). They ruled "with force and with cruelty" (Ezekiel 34:4). Yahuah's answer was to take the flock back: "Behold, I, even I, will both search my sheep, and seek them out" (Ezekiel 34:11). Messiah is "that great shepherd of the sheep" (Hebrews 13:20), and the elders feed the flock under Him (1 Peter 5:2-4).`,
            ],
            reread: [`"He gave gifts to His people: some sent out, some prophets, some who carry the good news, and some who feed the flock and teach it." Then Paul tells us why: "For the perfecting of the saints, for the work of the ministry" (Ephesians 4:12). The shepherds get the saints ready, and the saints do the work of the ministry. The gift was given so the people would grow up, "That we henceforth be no more children" (Ephesians 4:14). Not so they would spend their lives saying, "my pastor says."`],
            timeline: [
              ["About 750 BC", `Homer: kings are *poimēn laōn*, shepherds over the people.`],
              ["About 60 AD", `Paul lists "pastors and teachers" among several gifts (Ephesians 4:11).`],
              ["1517", `The Reformation begins; Protestants reject the priest as go-between.`],
              ["1541", `Calvin's Ecclesiastical Ordinances make the pastor the first office of the church.`],
              ["Late 1900s", `Church-growth teaching shapes the senior pastor into a chief executive.`],
              ["Today", `"My pastor says": the priest's authority under a Protestant title.`],
            ],
            built: [
              `The senior pastor: one man over the assembly, as the priest was over the parish.`,
              `"My pastor says": the people of Yahuah repeating a man instead of testing the Scripture (Acts 17:11).`,
              `"Pastor" as a title, a salary, and a career.`,
            ],
          },
          {
            id: "anathema", greek: "Anathema", kjv: "accursed", role: "The root word", more: "Anathema on Greek Influence",
            verse: { ref: "Galatians 1:8", text: "But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed." },
            taught: [
              `This verse guards the creeds. Whoever denies what the church has defined, the Trinity, the sacraments, the authority of the church, is preaching "another gospel" and is accursed. The great councils closed their creeds with that very word, anathema, and Rome still excommunicates. Protestant churches do it by another name: a church board can put a member out for questioning what the pulpit teaches, and in some churches leaving is treated as leaving God.`,
            ],
            word: [
              `*Anathēma* first meant an offering hung up in a Greek temple, a gift set apart for a god. Luke uses the word that way for the temple's "goodly stones and gifts" (Luke 21:5).`,
              `From the fourth century, church councils turned it into a sentence. The Council of Nicaea (325) closed its creed with one: those who said of the Son "there was when he was not" were condemned. The first creed-curse fell on men who would not confess the council's view of the Son. The Council of Trent (1545–1563) ended canon after canon with "let him be anathema." Luther was excommunicated in 1521, and in 1553 Calvin's Geneva burned Michael Servetus for denying the Trinity. The word became the clergy's weapon against anyone who questioned them.`,
            ],
            hebrew: [
              `Beneath it is the Hebrew *cherem*, something devoted to Yahuah, given over wholly to Him, often for destruction. The Greek Old Testament uses *anathema* for it at Jericho: "And the city shall be accursed, even it, and all that are therein, to Yahuah" (Joshua 6:17).`,
              `Paul's warning comes straight out of the Torah. Moses wrote that even a prophet whose signs come true must not be followed if he says, "Let us go after other gods, which thou hast not known" (Deuteronomy 13:1-3). Paul says the same: not even "we, or an angel from heaven." The test was never a council. The test was what Yahuah had already spoken. And when a brother had to be put out, the whole assembly did it together (1 Corinthians 5:4; Matthew 18:17), not a man in an office.`,
            ],
            reread: [`"If anyone, even I, even an angel, brings you a different good news from the one you first received, let him be devoted to destruction." Paul says it twice (Galatians 1:9). The measure is the message already given: "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them" (Isaiah 8:20). That measure judges the councils too. When a council adds a creed the apostles never preached and curses everyone who will not sign it, Paul's anathema does not fall on the believer. It falls on the council.`],
            timeline: [
              ["About 400 BC", `Greek temples fill with *anathēmata*, offerings hung up for the gods.`],
              ["325", `Nicaea closes its creed with a curse; later councils follow.`],
              ["1054", `Rome's legates and the patriarch of Constantinople excommunicate each other.`],
              ["1521", `Luther is excommunicated by the pope.`],
              ["1545–1563", `The Council of Trent: canon after canon ends "let him be anathema."`],
              ["1553", `Calvin's Geneva burns Michael Servetus for denying the Trinity.`],
            ],
            built: [
              `Excommunication by office: the clergy holding the keys over the people.`,
              `Creeds enforced by curse, in place of Scripture tested by every reader (Acts 17:11).`,
              `Fear of leaving the church, as if leaving a building were leaving Yahuah.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed a clergy. Yahuah called the whole nation a kingdom of priests, and Moses wished all His people were prophets. The assembly needs elders who teach and watch, but as brothers among brothers, not a priesthood above them. "One is your Master, even Messiah; and all ye are brethren" (Matthew 23:8). There is one mediator, "the man Messiah Yahushua" (1 Timothy 2:5). And Revelation names the only priesthood that remains: "Thou ... hast made us unto our God kings and priests: and we shall reign on the earth" (Revelation 5:10). Us, every one of us. Not the priest, and not the pastor.`,
    },
  },
  "20": {
    oldPaths: {
      kicker: "The Old Path · Communion",
      title: "Keep the Feast",
      subtitle: "The Memorial Was Already Given",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Yahuah gave Israel a memorial before He gave them the Law at Sinai. In Egypt He said of Pesach, "this day shall be unto you for a memorial; and ye shall keep it a feast" (Exodus 12:14). The memorial was the feast. It was to be kept "for ever."`,
            `In Hebrew, to remember is to do. Israel looked on their fringes to "remember all the commandments of Yahuah, and do them" (Numbers 15:39). So when Yahushua said "this do in remembrance of me" (Luke 22:19), He pointed His disciples back to the memorial Yahuah already gave, now with Him as the Lamb. Paul read it that way: "Messiah our passover is sacrificed for us: therefore let us keep the feast" (1 Corinthians 5:7-8).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Pesach was kept at a table, by a household, once a year. The lamb was chosen on the tenth day and killed on the fourteenth (Exodus 12:3, 6). Its blood went on the doorposts, and Yahuah said, "when I see the blood, I will pass over you" (Exodus 12:13). It was eaten that night with unleavened bread and bitter herbs (Exodus 12:8). The children asked, "What mean ye by this service?" and the fathers told the story (Exodus 12:26-27).`,
            `Yahushua spoke His words of remembrance at a meal the evening before, "before the feast of the passover" (John 13:1). The next morning His accusers still had the Pesach ahead of them (John 18:28). He died at the ninth hour on the fourteenth, as the lambs were slain, and the Pesach was eaten that night while His body lay in the tomb. He did not eat that Pesach. He became it.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `Israel "kept the passover on the fourteenth day of the first month" in the wilderness (Numbers 9:5).`],
            ["Joshua", `the first Pesach in the land, kept at Gilgal "in the plains of Jericho" (Joshua 5:10).`],
            ["Hezekiah", `called all Israel back to the feast, "so there was great joy in Jerusalem" (2 Chronicles 30:26).`],
            ["Josiah", `"Keep the passover unto Yahuah your God, as it is written in the book of this covenant" (2 Kings 23:21).`],
            ["Yahushua", `went up with His family "every year at the feast of the passover" (Luke 2:41-42), and at the last was the Lamb.`],
            ["Paul", `"Therefore let us keep the feast" (1 Corinthians 5:8).`],
          ],
        },
      ],
      closing: `And the feast points ahead. John heard, "Blessed are they which are called unto the marriage supper of the Lamb" (Revelation 19:9). Every Pesach kept now is a rehearsal for that night.`,
      torah: ["Exodus 12:14", "Numbers 15:39"],
      witness: ["Luke 22:19", "1 Corinthians 5:7-8"],
      turn: {
        text: "But Christianity went another way. It moved the memorial out of the feast and into the building, and turned a supper into a ceremony.",
        label: "The Departure: Communion",
      },
    },

    departure: {
      kicker: "The Departure · 20",
      title: "Communion",
      subtitle: "The Feast the Church Moved Indoors",
      attribution: "You've been holding a ceremony and calling it His feast.",
      taught: [
        `Walk into almost any church on Communion Sunday and the scene is the same. The pastor reads "this do in remembrance of me." Trays come down the rows. Each person takes a small cracker or a piece of matzah and a thimble cup of grape juice. Heads bow. The room goes quiet for a minute or two, and then the service moves on.`,
        `Catholics call it the Eucharist and the Mass. The priest says the words at the altar, and the church teaches that the bread and wine become His body and blood. Lutherans say His body is present "in, with, and under" the bread. Baptist and nondenominational churches call it an ordinance, a memorial kept once a month or once a quarter. Some churches keep it every Sunday. Many Pentecostal and charismatic teachers add that taking it brings healing. The forms differ, but every one is a church rite, on the church's schedule, in the church's building.`,
      ],
      roots: [
        `Yahuah gave a feast. Pesach was a whole household around a table at night, with a lamb, unleavened bread, and bitter herbs, kept once a year at the time He set. Over the centuries the feast was cut loose from His calendar. The family table became an altar or a tray. The yearly feast became a weekly or monthly rite. A supper became a bite.`,
        `The Greek world already had that rite. Its temples held sacred dinners where worshipers ate at a god's table and so became his partners. Invitations survive from Roman Egypt asking guests to dine "at the table of the lord Serapis." The mystery cults had secret rites for the initiated, and Justin Martyr admitted that the followers of Mithras used bread and a cup in theirs. Paul warned the Corinthians, "Ye cannot drink the cup of the Master, and the cup of devils" (1 Corinthians 10:21). Five Greek words carried the god's table into the church. Choose a word.`,
      ],
      tabs: {
        tabs: [
          {
            id: "anamnesis", greek: "Anamnēsis", kjv: "remembrance", role: "The root word", more: "Anamnēsis on Greek Influence",
            verse: { ref: "Luke 22:19", text: "And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me." },
            taught: [
              `Remembrance means a church service. When the bread and cup are passed, you think about the cross and examine your heart. The church decides how often, whether daily, weekly, monthly, or a few times a year. Either way, it is something you do sitting down, in the building.`,
            ],
            word: [
              `In Greek, *anamnēsis* was a word of the mind. Plato used it for the soul recalling what it knew before it was born. To him, all learning was remembering. Remembering was an inward act, a thought.`,
              `Later church teachers took the word further. In the Mass, the *anamnēsis* is the prayer where the church remembers the cross, and the sacrifice is said to be made present again on the altar. Either way, remembrance stopped being something you keep and became something you think or perform.`,
            ],
            hebrew: [
              `Yahushua spoke as a Hebrew, and the word behind "remembrance" is *zikkaron*, a memorial. Yahuah named the first one Himself: "this day shall be unto you for a memorial; and ye shall keep it a feast" (Exodus 12:14). The memorial and the feast are the same thing. The verb *zakar*, to remember, means to remember by doing: "remember all the commandments of Yahuah, and do them" (Numbers 15:39). A Hebrew memorial is not a quiet minute. It is a table set, a lamb eaten, a story told to the children.`,
              `He said these words at the meal the evening before Pesach (John 13:1). The gospel writers call the bread on that table *artos*, ordinary bread, not the unleavened bread of the feast. The next afternoon He died at the hour the lambs were slain. The memorial He pointed to was the feast He was about to fulfill.`,
            ],
            reread: [`"This do in remembrance of me." Keep the memorial Yahuah already gave, Pesach, and from now on remember Me in it. He is the Lamb. Paul read it exactly that way: "Messiah our passover is sacrificed for us: therefore let us keep the feast" (1 Corinthians 5:7-8).`],
            timeline: [
              ["About 55 AD", `Paul tells the assembly at Corinth to keep the feast with Messiah as their Pesach (1 Corinthians 5:7-8).`],
              ["About 110 AD", `Ignatius of Antioch calls the broken bread "the medicine of immortality," the way the Greeks spoke of their sacred foods.`],
              ["About 190 AD", `Victor, bishop of Rome, tries to cut off the assemblies in Asia that still keep the memorial on the fourteenth day of the first month.`],
              ["325 AD", `The Council of Nicaea, under Constantine, settles that the church will no longer follow the Jewish reckoning for its spring feast.`],
              ["1215", `The Fourth Lateran Council makes it official teaching that the bread and wine change into His body and blood.`],
              ["1529", `Luther and Zwingli argue at Marburg over what the bread is. Neither returns it to the feast. The Protestant churches keep the ceremony and change only its explanation.`],
            ],
            built: [
              `The Mass, the altar, and a priest who offers the sacrifice again.`,
              `Communion Sunday, a few minutes in the pew in place of a feast.`,
              `Easter in place of Pesach, and the church's calendar in place of Yahuah's. Today the daily Mass and the monthly tray go on, and no Pesach is kept in either.`,
            ],
          },
          {
            id: "koinonia", greek: "Koinōnia", kjv: "communion", role: "The root word", more: "Koinōnia on Greek Influence",
            verse: { ref: "1 Corinthians 10:16", text: "The cup of blessing which we bless, is it not the communion of the blood of Messiah? The bread which we break, is it not the communion of the body of Messiah?" },
            taught: [
              `Communion is the moment you are joined to Messiah. Catholics speak of "receiving Communion," taking Him into yourself in the bread. Protestants call it a time of close fellowship with Him, the most sacred minute of the month. Either way, the bite itself is the holy moment of union, and those not in good standing are kept from the tray.`,
            ],
            word: [
              `In the Greek world, a sacrifice ended in a meal. Part went to the god on the altar, and the worshipers ate the rest, often in dining rooms built inside the temple grounds. On the hill above Corinth, the shrine of Demeter and Kore had dozens of small dining rooms for these meals.`,
              `To eat the god's meat at the god's table was to share with the god, to become his partner. The meal itself was the bond. Paul used that very word to warn the Corinthians. Eating at an idol's table made them partners "with devils" (1 Corinthians 10:20). The church kept the idea and changed the name on the altar. The bite became the bond.`,
            ],
            hebrew: [
              `*Chabar*, to join, to be a companion. Israel was joined to Yahuah by covenant, sealed with blood at Sinai (Exodus 24:8), and kept that covenant at His feasts. The Pesach itself was a sacrifice eaten by the household: "It is the sacrifice of Yahuah's passover" (Exodus 12:27).`,
              `Paul points straight to that: "are not they which eat of the sacrifices partakers of the altar?" (1 Corinthians 10:18). The sharing was at Yahuah's table, at Yahuah's time, with His people together. It was never a private moment between one man and a cracker.`,
            ],
            reread: [`"The cup of blessing which we bless ... The bread which we break." Paul's very next line says what the sharing is: "we being many are one bread, and one body" (1 Corinthians 10:17). It is a people at one table, sharing in what His blood bought. And John says that fellowship is walked, not just tasted: "if we walk in the light ... we have fellowship one with another" (1 John 1:7).`],
            timeline: [
              ["500s to 100s BC", `The shrine of Demeter and Kore above Corinth grows to dozens of dining rooms for sacred meals.`],
              ["About 55 AD", `Paul warns the Corinthians that eating at an idol's table makes them partners with devils (1 Corinthians 10:20-21).`],
              ["1215", `The Fourth Lateran Council requires every Catholic to receive Communion at least once a year, at Easter.`],
              ["Mid-1500s", `John Calvin teaches that at the table the believer is lifted up to feed on Messiah spiritually.`],
              ["1910", `Pope Pius X lowers the age of First Communion to about seven.`],
            ],
            built: [
              `"Holy Communion" as the name of a rite instead of a people sharing a table.`,
              `First Communion, a child's rite of passage.`,
              `Open and closed communion, and fights over who may take the tray.`,
              `Fellowship shrunk to a cup passed down a pew.`,
            ],
          },
          {
            id: "deipnon", greek: "Deipnon", kjv: "supper", role: "The root word", more: "Deipnon on Greek Influence",
            verse: { ref: "1 Corinthians 11:20-21", text: "When ye come together therefore into one place, this is not to eat the Master's supper. For in eating every one taketh before other his own supper: and one is hungry, and another is drunken." },
            taught: [
              `"The supper" is the rite of the bread and cup, and the table at the front of the sanctuary is "the Master's table." It is not a meal. The bread is a cracker or a wafer, the cup is a sip, and the whole thing takes five minutes. Some churches set the table under a cloth with "This Do in Remembrance of Me" carved on its front.`,
            ],
            word: [
              `*Deipnon* was the main meal of the day, the evening dinner. Greek and Roman temples hosted dinners in a god's name. Papyrus invitations from Roman Egypt survive. In one, a man named Chaeremon asks a friend to dine "at the table of the lord Serapis" in the temple of Serapis the next day. The god was the host, and the worshipers were his guests.`,
              `To new believers in Corinth, a supper "of the Master" sounded like those temple dinners. Paul set the two side by side: "Ye cannot be partakers of the Master's table, and of the table of devils" (1 Corinthians 10:21). In time the church kept the table and the god-as-host, and dropped the supper.`,
            ],
            hebrew: [
              `*Mishteh*, a feast, a real banquet. Pesach was a supper: roast lamb, bread, herbs, and a family that went to bed full. Isaiah saw Yahuah preparing "a feast of fat things" for all people (Isaiah 25:6), and in the same breath, "He will swallow up death in victory" (Isaiah 25:8). The supper Scripture looks toward is a wedding feast: "Blessed are they which are called unto the marriage supper of the Lamb" (Revelation 19:9).`,
            ],
            reread: [`Read Corinth closely. Paul's complaint was not that they ate a meal. It was that "one is hungry, and another is drunken." The rich ate first and the poor went without. His fix: "when ye come together to eat, tarry one for another" (1 Corinthians 11:33). "Let him eat at home" (1 Corinthians 11:34) was for the man too hungry to wait, not an order to end the supper.`],
            timeline: [
              ["About 55 AD", `Paul corrects the Corinthians for eating the supper unfairly, not for eating it.`],
              ["About 112 AD", `Pliny, a Roman governor, reports that Christians meet before dawn and then gather again later "to take food, but ordinary and harmless food."`],
              ["About 155 AD", `Justin Martyr describes a Sunday gathering where bread and a cup are passed with no meal around them.`],
              ["About 363 AD", `The Council of Laodicea forbids holding the "love feasts" inside churches.`],
              ["Today", `A wafer or a cracker stands in for the supper, at a table no one eats from.`],
            ],
            built: [
              `A supper with no supper in it.`,
              `The table as a piece of church furniture, or an altar.`,
              `The shared meals Jude calls "feasts of charity" (Jude 12) pushed out of the assembly.`,
              `The marriage supper of the Lamb shrunk, in the believer's mind, to a bite and a sip.`,
            ],
          },
          {
            id: "mysterion", greek: "Mystērion", kjv: "mystery", role: "The root word", more: "Mystērion on Greek Influence",
            verse: { ref: "1 Corinthians 4:1", text: "Let a man so account of us, as of the ministers of Messiah, and stewards of the mysteries of God." },
            taught: [
              `Communion is a sacrament, a holy mystery. In Catholic teaching there are seven sacraments, each carrying grace in itself, and the priest is the steward who gives it out. Most Protestants keep two, baptism and the bread and cup, and many still call them sacraments or "means of grace." Baptists call them ordinances, but guard them the same way. Only certain men may lead it, and only at the front.`,
            ],
            word: [
              `The mystery cults were secret rites. At Eleusis, near Athens, worshipers of Demeter were initiated in ceremonies they swore never to reveal, and were promised a better lot after death. The cults of Isis and Mithras worked the same way: a rite performed, a secret shared, a blessing received. Justin Martyr admitted that the Mithras rite used bread and a cup, and said demons had copied it.`,
              `When the Bible went into Latin, *mystērion* was often rendered *sacramentum*. That was the oath a Roman soldier swore to his general. From that word came "sacrament": a sworn, sacred rite that does something to the one who takes it.`,
            ],
            hebrew: [
              `*Sod*, a secret counsel. Yahuah does nothing without first revealing "his secret unto his servants the prophets" (Amos 3:7). In Daniel, the king's dream was a *raz*, a mystery, and "the secret was revealed unto Daniel" (Daniel 2:19). A Hebrew mystery is something hidden that Yahuah makes known. It is not something kept hidden inside a rite.`,
            ],
            reread: [`"Stewards of the mysteries of God." Paul was not handing out wafers. He was trusted with a message: "the mystery which hath been hid from ages and from generations, but now is made manifest" (Colossians 1:26), "made known to all nations for the obedience of faith" (Romans 16:26). A steward of a revealed message preaches it. He does not lock it in a ceremony only he may perform.`],
            timeline: [
              ["About 155 AD", `Justin Martyr notes the bread and cup of the Mithras rite and blames demons for the likeness.`],
              ["About 200 AD", `Tertullian, writing in Latin, calls baptism and the bread and cup *sacramenta*.`],
              ["About 400 AD", `Jerome's Latin Bible renders *mystērion* as *sacramentum* in Ephesians 5:32 and other places.`],
              ["About 1150", `Peter Lombard fixes the number of sacraments at seven.`],
              ["1520", `Luther cuts the seven down, keeping baptism and the bread and cup, but keeps the word.`],
              ["1547", `The Council of Trent declares that the sacraments give grace by the very act performed.`],
            ],
            built: [
              `Seven sacraments, and a priesthood set over the people to give them out.`,
              `Grace pictured as something that flows through a rite.`,
              `Rules on who may serve the bread, and where it may be served.`,
            ],
          },
          {
            id: "eucharistia", greek: "Eucharistia", kjv: "giving of thanks", role: "The root word", more: "Eucharistia on Greek Influence",
            verse: { ref: "1 Corinthians 11:24", text: "And when he had given thanks, he brake it, and said, Take, eat: this is my body, which is broken for you: this do in remembrance of me." },
            taught: [
              `The Eucharist is the sacred meal itself. In Catholic churches the consecrated bread, the host, is kept in a gold box on the altar, bowed to, and carried through the streets in procession. Protestants use the word less, but the idea is the same. The thanks has become the name of the rite.`,
            ],
            word: [
              `*Eucharistia* is plain Greek for gratitude, built on *charis*, favor. Within a century of the apostles it became a name. The Didache, about 100 AD, gives prayers "concerning the eucharist." Ignatius, about 110 AD, warns of men who "abstain from the eucharist." By about 155 AD Justin writes that "this food is called among us Eucharist."`,
              `The thanks spoken over a meal had become a holy object. The word that once pointed up to the Father now pointed down to the bread.`,
            ],
            hebrew: [
              `Giving thanks at a table is Torah: "When thou hast eaten and art full, then thou shalt bless Yahuah thy God" (Deuteronomy 8:10). The thanksgiving offering, *todah*, was eaten as a meal, and it came with "leavened bread" (Leviticus 7:13). The psalmist said, "I will take the cup of salvation" and "I will offer to thee the sacrifice of thanksgiving" (Psalm 116:13, 17). The thanks went to Yahuah. It was never the name of the bread.`,
            ],
            reread: [`"When he had given thanks, he brake it." Yahushua thanked His Father over ordinary bread, the way every Hebrew did at his table. The thanks pointed up to Yahuah. The rite turned it around, so that now the bread itself receives the honor.`],
            timeline: [
              ["About 100 AD", `The Didache gives prayers of thanks "concerning the eucharist."`],
              ["About 110 AD", `Ignatius uses "the eucharist" as the name of the bread itself.`],
              ["About 155 AD", `Justin Martyr writes that the food "is called among us Eucharist."`],
              ["1264", `Pope Urban IV orders a yearly feast day in honor of the consecrated bread.`],
              ["1551", `The Council of Trent rules that the consecrated host is to be worshiped.`],
            ],
            built: [
              `The host bowed to, kept on the altar, and carried in procession.`,
              `Chapels built for sitting before the bread in worship.`,
              `The Father's thanks turned into the name of a ceremony.`,
            ],
          },
        ],
      },
      oldPath: `Yahuah never asked for a ceremony in a pew. He gave a feast. Once a year, at the time He set, a household gathers at a table, eats unleavened bread, and tells the story of a Lamb whose blood turned death away. Since the tree, that story has a name: Yahushua. "This do in remembrance of me" sends the believer back to that table, not away from it. Keep the feast, and keep it remembering Him. And the table is not the end of it. Revelation points to a supper still ahead, "the marriage supper of the Lamb" (Revelation 19:9), and every Pesach kept now is a rehearsal for that night.`,
    },
  },
};

export const v2For = (pair) =>
  pair?.layout === "v2" ? doctrineV2[pair.n] ?? null : null;
