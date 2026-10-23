// doctrine-v2 1022 V10.js
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
};

export const v2For = (pair) =>
  pair?.layout === "v2" ? doctrineV2[pair.n] ?? null : null;
