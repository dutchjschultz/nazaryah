// departure-tabs 1009 V4.js
// V4: all 17 Departure pages tabbed (77 tabs, one per dropdown word, same ids) in the verse-first
// layout — verse / taught / word / hebrew / reread, then the timeline and What it built as before.
// Further Reading's word-page line reads "all {count} Greek words" ({count} filled by DoctrineTabs).
// V3: Immortal Soul gains a sixth tab, Nous (mind); opening, closing and Further Reading say six words.
// V2: four new tabbed Departure pages — lucifer, predestination, images-in-worship, clergy-over-the-people.
// V1: First build: tabbed Departure page content — Immortal Soul only (pilot)
//
// SAVE AS: src/data/departure-tabs.js
// Text marks: *word* = italic, **phrase** = bold.

export const departureTabs = {
  "sacred-names": {
    "slug": "sacred-names",
    "title": "Sacred Names",
    "subtitle": "What’s In A Name? Everything.",
    "opening": [
      "Most Bibles never print the Name. Where Moses wrote Yahuah, the reader sees “the LORD” — close to seven thousand times. Where the prophets wrote Elohim, Elyon, and Yahuah of hosts, the reader sees God, Most High, and Almighty — words the Greek world used for Zeus and for Caesar. And the church says it does not matter. God knows your heart, they say, and He answers to any name.",
      "Yahuah said otherwise. “This is my name for ever, and this is my memorial unto all generations” (Exodus 3:15). A name given to be remembered was traded for titles any god could wear. And once the Father and the Son are both called “Lord” and “God,” the reader can no longer tell who is speaking to whom.",
      "Five Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "kurios",
        "greek": "Kurios",
        "kjv": "Lord",
        "role": "The root word",
        "verse": {
          "ref": "Matthew 22:44",
          "text": "The LORD said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool?"
        },
        "taught": [
          "Jesus asked the Pharisees a riddle: how can David call his own son “Lord”? The pulpit answers: because Jesus is the LORD God Himself. Two Lords, one God. This verse is used to prove that the Son is the same God as the Father."
        ],
        "word": [
          "*Kurios* (G2962) means “lord” or “master.” It was also Caesar’s title. “Caesar is lord” was the oath of the empire, and believers like Polycarp died rather than say it. Greek gods such as Serapis were called kurios too. In the Greek copy of this verse, the same word stands twice: kurios said to kurios. A Greek reader sees two Lords of the same rank — and cannot tell them apart."
        ],
        "hebrew": [
          "But Yahushua was quoting David, and David wrote in Hebrew: “Yahuah said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool” (Psalm 110:1).",
          "The first “Lord” is the Name itself, *Yahuah* (H3068). The second is *adon* (H113) — “my master,” the word Sarah used of Abraham (“my lord being old also,” Genesis 18:12). It is a word for men. So David saw two different persons: Yahuah, and the man Yahuah would seat beside Him. Yahuah even told Israel to stop calling Him “Baali” — “my lord” — so His Name would not be mixed with another (Hosea 2:16)."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“Yahuah said to my master: Sit at My right hand, until I make your enemies your footstool.”*",
          "Then Yahushua asked, “If David then call him Lord, how is he his son?” (Matthew 22:45). The Messiah is David’s son and David’s master — a man Yahuah raised up and seated at His right hand. Peter said it plainly at Shavuot: “God hath made that same Jesus, whom ye have crucified, both Lord and Christ” (Acts 2:36). Made Lord. Yahuah does not make Himself anything."
        ],
        "timeline": [
          [
            "The burning bush",
            "Moses",
            "Yahuah gives His Name: “this is my name for ever” (Exodus 3:15)."
          ],
          [
            "c. 250 BC – 100 AD",
            "The Greek copies",
            "Some early copies still write the Name in Hebrew letters; later copies put kurios in its place."
          ],
          [
            "c. 155 AD",
            "Polycarp",
            "Told to say “Caesar is lord” and live, he refuses and is put to death."
          ],
          [
            "1611",
            "King James translators",
            "Print “LORD” in capitals almost everywhere the Name stands."
          ],
          [
            "Today",
            "The pulpit",
            "“It doesn’t matter what you call Him. He knows your heart.”"
          ]
        ],
        "built": [
          "**The lost Name** — Yahuah’s own Name, given for all generations, hidden behind a title nearly seven thousand times.",
          "**A blurred Father and Son** — both called “Lord,” until the reader cannot tell who is speaking to whom, and the Trinity fills the gap."
        ]
      },
      {
        "id": "theos",
        "greek": "Theos",
        "kjv": "God",
        "role": "The gods’ word",
        "verse": {
          "ref": "John 10:34",
          "text": "Jesus answered them, Is it not written in your law, I said, Ye are gods?"
        },
        "taught": [
          "The crowd picked up stones because, they said, “thou, being a man, makest thyself God” (John 10:33). The pulpit says the crowd understood Him perfectly: Jesus was claiming to be God. Then Jesus quotes a Psalm about “gods,” and most preachers hurry past it. Some call it a clever dodge. The whole passage is used to prove that Jesus said He was God."
        ],
        "word": [
          "*Theos* (G2316) was the everyday Greek word for Zeus, Hermes, and the other gods of Mount Olympus. Even dead emperors were declared a theos. When Paul healed a lame man at Lystra, the crowd cried, “The gods are come down to us in the likeness of men,” and called Barnabas Jupiter and Paul Mercurius (Acts 14:11–12). To a Greek ear, theos means a higher kind of being — a different nature from man. Read that way, “Ye are gods” makes no sense, so the pulpit skips it."
        ],
        "hebrew": [
          "But Yahushua was quoting a Psalm, and the Psalm is in Hebrew: “I have said, Ye are gods; and all of you are children of the most High” (Psalm 82:6).",
          "The Hebrew word is *elohim* (H430). It means mighty ones with authority — a rank, not a nature. In this Psalm the elohim are Israel’s judges, men who “shall die like men” (Psalm 82:7). Yahuah even told Moses, “See, I have made thee a god to Pharaoh” (Exodus 7:1). Moses did not become a different kind of being. He was given authority."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“Is it not written in your Torah, I said, You are elohim — men with authority from Yahuah? Then why do you stone Me for saying I am His Son?”*",
          "He finishes the thought Himself: “Say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of God?” (John 10:36). He did not say, “I am God.” He said He was the Son, set apart and sent by the Father. The very verse used to prove He claimed to be God is the verse where He corrects the charge."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The theoi are Zeus and the gods of Olympus."
          ],
          [
            "42 BC",
            "Rome",
            "Julius Caesar is declared a god after his death; the Greek east calls him theos."
          ],
          [
            "c. 48 AD",
            "Lystra",
            "A crowd calls Paul and Barnabas gods come down in the likeness of men (Acts 14:11)."
          ],
          [
            "325 AD",
            "Nicaea",
            "The creed calls the Son “very God of very God,” of one substance with the Father."
          ],
          [
            "Today",
            "The pulpit",
            "“They tried to stone Him because He said He was God.”"
          ]
        ],
        "built": [
          "**The Trinity** — theos read as a divine nature that three persons share, instead of a rank Yahuah gives.",
          "**The “Jesus is God” proof-texts** — every theos in the Greek text read as nature, so the Son who was sent becomes the One who sent Him."
        ]
      },
      {
        "id": "soter",
        "greek": "Sōtēr",
        "kjv": "Saviour",
        "role": "The god-king’s title",
        "verse": {
          "ref": "Luke 2:11",
          "text": "For unto you is born this day in the city of David a Saviour, which is Christ the Lord."
        },
        "taught": [
          "This verse is read at every Christmas service. The baby in the manger is the Savior of the world — God Himself, come down as a child. Jesus saves, and Jesus is God. So the pulpit says the Savior and God are one and the same person."
        ],
        "word": [
          "*Sōtēr* (G4990), “savior,” was a title of gods and kings. Zeus was hailed as Zeus Sōtēr. The Greek king of Egypt called himself Ptolemy Sōtēr, and under his son the Torah was put into Greek. Caesar Augustus — the very emperor named in Luke 2:1 — was praised on a stone at Priene as a savior, and his birthday as the start of “good news.” So in the Greek copy, the angel’s words sound like Caesar’s own announcement. A Greek reader hears that a new god-king has been born to save the world."
        ],
        "hebrew": [
          "The Hebrew word beneath is *yasha* (H3467), to save. And Yahuah tells us who saves: “I, even I, am Yahuah; and beside me there is no saviour” (Isaiah 43:11).",
          "That is why the child was given His name before He was born: “thou shalt call his name JESUS: for he shall save his people from their sins” (Matthew 1:21). His name is *Yahushua* (H3091) — “Yahuah saves.” The child’s own name tells you who the Savior is. The baby in the manger is the way Yahuah provided, not a second Savior beside Him."
        ],
        "reread": [
          "Now read it again the way the angel meant it: *“Unto you is born this day, in the city of David, the one through whom Yahuah saves — the Messiah, the master.”*",
          "Luke shows it himself in the same chapter. Old Simeon took the child in his arms and blessed Yahuah: “For mine eyes have seen thy salvation” (Luke 2:30). *Thy* salvation — Yahuah’s. Mary had already said whom she praised: “my spirit hath rejoiced in God my Saviour” (Luke 1:47). Yahuah saves. The Son is the way He provided."
        ],
        "timeline": [
          [
            "c. 304 BC",
            "Ptolemy I",
            "The Greek king of Egypt takes the title Sōtēr, “Savior.”"
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "Under his son, the Torah is put into Greek; Yahuah’s salvation is carried in the god-kings’ word."
          ],
          [
            "9 BC",
            "Priene",
            "A stone hails Augustus as a savior and his birthday as “good news” for the world."
          ],
          [
            "325 AD",
            "Nicaea",
            "The creed says the Son “for our salvation came down” as very God."
          ],
          [
            "Today",
            "The pulpit",
            "“Jesus is your Savior” — and the Father who saves is left out."
          ]
        ],
        "built": [
          "**A second Savior** — prayers, songs, and altar calls aimed at the Son as Savior, against “beside me there is no saviour” (Isaiah 43:11).",
          "**A name with no meaning** — the name that says “Yahuah saves” turned into a sound, so no one hears whom it names."
        ]
      },
      {
        "id": "pantokrator",
        "greek": "Pantokratōr",
        "kjv": "Almighty",
        "role": "The temple title",
        "verse": {
          "ref": "Revelation 4:8",
          "text": "And the four beasts had each of them six wings about him; and they were full of eyes within: and they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come."
        },
        "taught": [
          "This is the song of heaven, and most churches sing it. The hymn finishes the line: “God in three Persons, blessed Trinity!” The pulpit says three holies mean three persons. And “Almighty” means the all-powerful God who is Father, Son, and Spirit together."
        ],
        "word": [
          "*Pantokratōr* (G3841) means “the all-ruler.” It was a title the Greeks gave their gods, and hymns in Egypt praised the goddess Isis as the all-ruling one. Later the church painted “Christ Pantocrator” on its domes — the Son enthroned as ruler of all, bearded and seated like Zeus. The word lets the reader put anyone on the throne. It carries no name at all."
        ],
        "hebrew": [
          "The four beasts are singing Isaiah’s song: “Holy, holy, holy, is Yahuah of hosts: the whole earth is full of his glory” (Isaiah 6:3). Where the Greek copy says “Almighty,” Isaiah wrote *Tsebaoth* (H6635) — hosts, armies. Yahuah is the commander of heaven’s armies. The Greek Old Testament often turned “Yahuah of hosts” into “Lord Almighty,” and the Name and the armies were lost together.",
          "And “holy” three times is how Hebrew says “most holy.” Hebrew repeats a word to make it strong. Jeremiah does the same: “O earth, earth, earth, hear the word of Yahuah” (Jeremiah 22:29). Nobody thinks there are three earths. Three holies mean fully holy, not three persons."
        ],
        "reread": [
          "Now read it again the way John meant it: *“Most holy, most holy, most holy is Yahuah of hosts, Commander of heaven’s armies, who was, and is, and is to come.”*",
          "Then watch who sits on the throne and who comes to it. The song is sung to One: “for thou hast created all things” (Revelation 4:11). Then the Lamb appears, and “he came and took the book out of the right hand of him that sat upon the throne” (Revelation 5:7). The Lamb comes to the throne and receives from the One sitting on it. The scene the hymn calls a Trinity shows one Elohim on the throne, and His Son coming to Him."
        ],
        "timeline": [
          [
            "c. 250 BC onward",
            "The Greek Old Testament",
            "“Yahuah of hosts” is often turned into “Lord Almighty,” kurios pantokratōr."
          ],
          [
            "c. 100 BC",
            "Egypt",
            "Temple hymns praise Isis as the all-ruling one."
          ],
          [
            "6th century",
            "Sinai",
            "The Christ Pantocrator icon: the Son enthroned as ruler of all."
          ],
          [
            "1826",
            "Reginald Heber",
            "His hymn joins Isaiah’s song to the Trinity: “God in three Persons, blessed Trinity!”"
          ],
          [
            "Today",
            "The pulpit",
            "“Holy, holy, holy — Father, Son, and Holy Spirit.”"
          ]
        ],
        "built": [
          "**The Trinity hymn** — Isaiah’s “most holy” sung as three persons.",
          "**The enthroned Son** — the Pantocrator image puts the Son on the Father’s throne.",
          "**A lost title** — “Yahuah of hosts,” used more than two hundred times by the prophets, gone from the reader’s Bible."
        ]
      },
      {
        "id": "hypsistos",
        "greek": "Hypsistos",
        "kjv": "Most High",
        "role": "Zeus’s title",
        "verse": {
          "ref": "Acts 16:17",
          "text": "The same followed Paul and us, and cried, saying, These men are the servants of the most high God, which shew unto us the way of salvation."
        },
        "taught": [
          "A slave girl with an evil spirit follows Paul through Philippi, and everything she says is true. The pulpit says even the devil knows who God is. Paul only cast the spirit out because she was a nuisance, drawing the crowd’s eyes to herself. The lesson preached is that demons believe and tremble."
        ],
        "word": [
          "*Hypsistos* (G5310) means “highest.” Across the Greek world men worshipped Zeus Hypsistos — “Zeus the Most High” — and a nameless “Most High God” in shrines from Macedonia to Asia Minor. So when a girl with a spirit of divination called out “the most high God,” a Greek crowd heard their own high god. The Greek text has no “the” before way: she offered *a* way of salvation, one road among many. The pulpit hears a true confession. Philippi heard Zeus."
        ],
        "hebrew": [
          "In the Torah, the Most High is *Elyon* (H5945), and it is always joined to the Name. Melchizedek blessed Abram by “the most high God” (Genesis 14:19). But when Abram answered the king of Sodom, he put the Name in front of the title, so no one could mistake whom he meant: “I have lift up mine hand unto Yahuah, the most high God, the possessor of heaven and earth” (Genesis 14:22).",
          "David said it outright: “That men may know that thou, whose name alone is Yahuah, art the most high over all the earth” (Psalm 83:18). The title belongs to the Name. Pull it away from the Name, and any god can wear it."
        ],
        "reread": [
          "Now read it again the way Philippi heard it: *“These men serve Zeus the Highest, and they show you a way to be saved.”*",
          "That is why Paul was “grieved” (Acts 16:18). A spirit of divination was folding Yahuah into the gods of Greece and making Paul’s message one more road among many. Paul answered the title with a name: “I command thee in the name of Jesus Christ to come out of her.” He did what Abram did at Sodom. He would not let the Most High be anyone but Yahuah, whose name alone is the Most High."
        ],
        "timeline": [
          [
            "Abram’s day",
            "Abram",
            "Joins the title to the Name: “Yahuah, the most high God” (Genesis 14:22)."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek Torah puts hypsistos for Elyon (Genesis 14:18)."
          ],
          [
            "1st century AD",
            "The Greek east",
            "Zeus Hypsistos and “the Most High God” are worshipped in shrines across Macedonia and Asia Minor."
          ],
          [
            "c. 50 AD",
            "Philippi",
            "A girl with a spirit of divination calls out the title; Paul casts the spirit out (Acts 16:16–18)."
          ],
          [
            "Today",
            "The pulpit",
            "“Even the devil knows who God is.”"
          ]
        ],
        "built": [
          "**One God by many names** — “the Most High” treated as a title any religion can share, so the Name seems optional.",
          "**The demon’s witness** — a pagan title heard as a true confession, and Paul’s grief explained away."
        ]
      }
    ],
    "closing": [
      "The old path keeps the Name. Yahuah gave it at the burning bush and bound it to every generation. David sang it: “Thy name, O Yahuah, endureth for ever; and thy memorial, O Yahuah, throughout all generations” (Psalm 135:13). Malachi saw a book of remembrance written “for them that feared Yahuah, and that thought upon his name” (Malachi 3:16). Restoring it is nothing new. It is obeying a command that never ended.",
      "Caesar’s oath, Zeus’s titles, and a god-king’s boast stand where the Name should be. Take them out, and the Father and the Son stand clear again: Yahuah who saves, and Yahushua, whose very name says so. Revelation shows the Name restored on the foreheads of His people: “And I looked, and, lo, a Lamb stood on the mount Sion, and with him an hundred forty and four thousand, having his Father’s name written in their foreheads” (Revelation 14:1)."
    ],
    "further": [
      [
        "The Old Paths: The Name That Endures",
        "/doctrines/old-paths/the-name-that-endures"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "kurios: “close to seven thousand times” / “almost everywhere” — YHWH occurs about 6,800 times; the KJV prints JEHOVAH a handful of times (Exodus 6:3; Psalm 83:18; Isaiah 12:2; 26:4) and LORD elsewhere.",
      "kurios timeline: early Greek copies (e.g. Papyrus Fouad 266, the Nahal Hever Minor Prophets scroll) write the Name in Hebrew letters; kurios appears in later, chiefly Christian-era copies. Wording kept deliberately general — confirm it is acceptable.",
      "kurios: Polycarp — Martyrdom of Polycarp 8.2 (“What harm is there in saying, Lord Caesar?”); date c. 155 AD (some date 156 or 167).",
      "kurios: Serapis called kurios — common in papyrus banquet invitations (“the couch of the lord Serapis”).",
      "kurios: Psalm 110:1 Masoretic pointing reads la’doni (“to my lord,” the form used of men), not Adonai. Point stands on the Masoretic text.",
      "theos: Julius Caesar deified by the Roman Senate in 42 BC; Greek inscriptions call him theos.",
      "theos: Lystra date c. 48 AD is approximate.",
      "soter: Ptolemy I received the title Sōtēr c. 304 BC (from Rhodes); the Septuagint under Ptolemy II rests on the Letter of Aristeas tradition.",
      "soter: Priene Calendar Inscription (9 BC) — calls Augustus a savior and his birthday the beginning of good tidings (euangelia). Paraphrased, not quoted.",
      "soter: Nicene Creed phrase “for us men, and for our salvation, came down” — confirm wording of the 325 form vs 381.",
      "pantokrator: Isis praised as all-ruling — Isis hymns of Isidorus at Medinet Madi (1st century BC); confirm exact epithet.",
      "pantokrator: Sinai Christ Pantocrator icon dated 6th century; the Zeus resemblance is an art-historical observation, not a documented intent.",
      "pantokrator: Heber’s “Holy, Holy, Holy” published 1826 (written earlier). Note: Isaiah 6:3 in the Septuagint itself has “kurios sabaōth,” not pantokratōr — the page says only that the Greek Old Testament “often” used pantokratōr (true of Samuel, Jeremiah, the Minor Prophets).",
      "pantokrator: “Yahuah of hosts” count — roughly 240–285 depending on how the forms are counted; page says “more than two hundred.”",
      "hypsistos: the Greek of Acts 16:17 reads hodon sōtērias with no article (“a way”) in both the Received Text and critical texts — confirm.",
      "hypsistos: Zeus Hypsistos / Theos Hypsistos inscriptions in Macedonia and Asia Minor, 1st century AD.",
      "Psalm 83:18 quoted with Yahuah in place of the KJV’s JEHOVAH."
    ]
  },
  "torah-dismissal": {
    "slug": "torah-dismissal",
    "title": "Torah Dismissal",
    "subtitle": "Grace Didn’t Kill the Law — It Fulfilled the Penalty",
    "opening": [
      "The Law was nailed to the cross. We are under grace now, not under the law. The Old Testament was for the Jews, and the New Testament is for the church. Just love God and follow your heart. That is preached in nearly every church, Catholic and Protestant alike, and most believers have never heard anything else.",
      "Yahushua said the opposite: “Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil” (Matthew 5:17). The Torah was never the door. Yahuah delivers by the blood of the Lamb He provided, and that is how a person comes in. The Torah is what walking looks like once you are inside. The church kept the door and threw away the road.",
      "Seven Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "charis",
        "greek": "Charis",
        "kjv": "grace",
        "role": "The root word",
        "verse": {
          "ref": "Romans 6:14",
          "text": "For sin shall not have dominion over you: for ye are not under the law, but under grace."
        },
        "taught": [
          "We are not under the law anymore. We are under grace. Grace means God gave us a free gift we did not earn, so the commandments no longer apply to us. Trying to keep the Sabbath or the feasts is going back under the law. That is called legalism."
        ],
        "word": [
          "*Charis* (G5485) was an everyday Greek word for charm, beauty, and a kindness done. But the Greeks also made it into goddesses. Hesiod, an early Greek poet, wrote of the Charites — the Graces — daughters of Zeus who handed out beauty and delight (Theogony 907). The word itself is not evil. But to a Greek ear, charis was a lovely gift that asked nothing back. Read that way, grace became a gift that sets the Law aside."
        ],
        "hebrew": [
          "Behind *charis* stands the Hebrew word *chen* (H2580). When the Torah was put into Greek, charis was used for chen the very first time it appears: “But Noah found grace in the eyes of Yahuah” (Genesis 6:8). The next verse tells us what kind of man found it: “Noah walked with God” (Genesis 6:9).",
          "*Chen* means favor — the kindness a greater one shows to a lesser one. Moses shows how favor and the way belong together: “if I have found grace in thy sight, shew me now thy way, that I may know thee, that I may find grace in thy sight” (Exodus 33:13). Favor does not cancel the way. Favor is what lets a man walk in it."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Sin will not rule over you anymore, because you are no longer under the Law’s sentence of death. You are under Yahuah’s favor — the favor that shows you His way.*",
          "Paul answers the pulpit in the very next verse: “What then? shall we sin, because we are not under the law, but under grace? God forbid” (Romans 6:15). And John tells us what sin is: “sin is the transgression of the law” (1 John 3:4). Favor sets a man free from sin’s rule. It never gives him leave to break the commandments that tell him what sin is."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "Names the Charites, the Graces, daughters of Zeus (Theogony 907)."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Torah is put into Greek; chen becomes charis (Genesis 6:8)."
          ],
          [
            "c. 144 AD",
            "Marcion",
            "Teaches that the God of the Law and the God of grace are two different gods."
          ],
          [
            "c. 412 AD",
            "Augustine",
            "In On the Spirit and the Letter, sets the Law that kills against the grace that gives life."
          ],
          [
            "c. 1520",
            "Luther",
            "Law and gospel become opposites: the Law only accuses; grace alone saves."
          ],
          [
            "Today",
            "The pulpit",
            "“We’re not under law — we’re under grace.”"
          ]
        ],
        "built": [
          "**Grace as a hall pass** — saved by grace, so the commandments become optional.",
          "**“Legalism”** — the name pinned on anyone who keeps the Sabbath or the feasts.",
          "**A door with no road** — the blood is preached; the bread, the commandments, is not."
        ]
      },
      {
        "id": "nomos",
        "greek": "Nomos",
        "kjv": "law",
        "role": "The Law",
        "verse": {
          "ref": "Romans 10:4",
          "text": "For Christ is the end of the law for righteousness to every one that believeth."
        },
        "taught": [
          "Christ is the end of the law. When Jesus came, the Law was over — finished and done away. Believers now live by faith, not by rules. The Ten Commandments may be good advice, but nobody is bound to keep them anymore."
        ],
        "word": [
          "*Nomos* (G3551) is the Greek word for law. In the Greek world it meant the rules a city made for itself — custom, habit, laws written by men. Greek teachers called the Sophists said these laws were made up, and could be changed whenever people liked. So to a Greek ear, “the law” sounded like a code of rules and penalties. When the Greek text puts *nomos* where Moses wrote Torah, that Greek sound comes along with it. The word for “end” is *telos* (G5056). It can mean the finish, but it often means the goal — the thing something is aimed at."
        ],
        "hebrew": [
          "Paul tells us what he means. A few verses later he quotes Moses: “The word is nigh thee, even in thy mouth, and in thy heart” (Romans 10:8). That is Deuteronomy 30, and Moses is talking about the commandment: “For this commandment which I command thee this day, it is not hidden from thee, neither is it far off… But the word is very nigh unto thee, in thy mouth, and in thy heart, that thou mayest do it” (Deuteronomy 30:11, 14).",
          "The Hebrew word beneath *nomos* is *Torah* (H8451). It comes from *yarah* (H3384), which means to aim, to shoot an arrow, to point the way. Torah is not a city’s rulebook. It is a Father’s instruction, pointing His children down the path. And Paul’s “law” is Moses’ Torah: he quotes “Thou shalt not covet” and calls it the law (Romans 7:7)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Messiah is the goal the Torah was aiming at all along, so that everyone who trusts Him is made right with Yahuah.*",
          "A target does not destroy the arrow. It is what the arrow was shot at. Paul said it plainly earlier in the same letter: “Do we then make void the law through faith? God forbid: yea, we establish the law” (Romans 3:31). And again: “the law is holy, and the commandment holy, and just, and good” (Romans 7:12)."
        ],
        "timeline": [
          [
            "c. 430 BC",
            "The Sophists",
            "Teach that nomos is man-made custom, set against nature."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek copy of the Torah uses nomos for Torah; a Father’s instruction now sounds like a legal code."
          ],
          [
            "c. 144 AD",
            "Marcion",
            "Cuts the Law and the Prophets out of his Bible altogether."
          ],
          [
            "c. 1520",
            "Luther",
            "The Law’s main work is to accuse; the gospel sets a man free from it."
          ],
          [
            "1830s",
            "Darby",
            "Dispensationalism: the Law belonged to Israel’s age; the church lives in the age of grace."
          ],
          [
            "Today",
            "The pulpit",
            "“Christ is the end of the law.”"
          ]
        ],
        "built": [
          "**The commandments as history** — read as Israel’s old rules, not the believer’s walk.",
          "**Nine out of ten** — the Sabbath dropped, the other nine kept as “moral law.”",
          "**Moses against Messiah** — the Law and the good news set against each other."
        ]
      },
      {
        "id": "diatheke",
        "greek": "Diathēkē",
        "kjv": "testament",
        "role": "The will",
        "verse": {
          "ref": "Hebrews 8:13",
          "text": "In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away."
        },
        "taught": [
          "The old covenant has vanished away. God made a new covenant with the church, and the Law belonged to the old one. That is why we have an Old Testament and a New Testament. The first is over, and the second replaced it."
        ],
        "word": [
          "*Diathēkē* (G1242) is the word the KJV prints here as “covenant,” and in other places as “testament.” In Greek law it meant a will — the paper a man leaves behind when he dies. A will takes effect at death, and a newer will cancels the older one. Read with that meaning, a “new covenant” sounds like a new will that throws out the old one. That is where the names “Old Testament” and “New Testament” come from."
        ],
        "hebrew": [
          "But this writer is quoting Jeremiah, word for word (Hebrews 8:8–12). Jeremiah wrote: “Behold, the days come, saith Yahuah, that I will make a new covenant with the house of Israel, and with the house of Judah” (Jeremiah 31:31). The Hebrew word is *berit* (H1285) — a covenant, a binding promise between two sides, like a marriage. Jeremiah says so himself: “I was an husband unto them” (Jeremiah 31:32).",
          "“New” is *chadash* (H2319). It comes from the verb *chadash* (H2318), to renew or repair. The same root gives the Hebrew word for the new moon — the same moon, made new again. So what goes into the renewed covenant? Jeremiah tells us: “I will put my law in their inward parts, and write it in their hearts” (Jeremiah 31:33). The Torah is not thrown out of the new covenant. It is written into it."
        ],
        "reread": [
          "Now read it again the way Jeremiah meant it: *When Yahuah speaks of a renewed covenant, the first arrangement — the one the people broke, served by an earthly tent and animal blood — is worn out and passing away. What remains is His Torah, now written on the heart.*",
          "The writer tells us where the fault was: “For finding fault with them” (Hebrews 8:8) — with the people, not the Law — “because they continued not in my covenant” (Hebrews 8:9). The broken arrangement wore out. The Torah did not. Yahuah wrote it again, this time on the heart, like a husband renewing his vows with a wife who wandered."
        ],
        "timeline": [
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek Torah uses diathēkē, a will, for berit, a covenant."
          ],
          [
            "c. 170 AD",
            "Melito of Sardis",
            "Lists “the books of the old covenant” — among the first to use the phrase for a set of books."
          ],
          [
            "c. 207 AD",
            "Tertullian",
            "Writing in Latin, calls the two parts of Scripture two “testaments.”"
          ],
          [
            "c. 405 AD",
            "Jerome",
            "The Latin Vulgate prints testamentum; the English later follows it as “testament.”"
          ],
          [
            "1611",
            "King James",
            "“The Old Testament” and “The New Testament” printed as the names of the two halves."
          ],
          [
            "Today",
            "The pulpit",
            "“That’s Old Testament — we’re New Testament believers.”"
          ]
        ],
        "built": [
          "**Replacement** — the old will cancelled, and the church set in Israel’s place.",
          "**Half a Bible** — the Torah and the Prophets read as background, not instruction.",
          "**A new covenant without the Law** — the very thing Jeremiah said would be written on the heart, left out."
        ]
      },
      {
        "id": "stoicheia",
        "greek": "Stoicheia",
        "kjv": "elements",
        "role": "The star spirits",
        "verse": {
          "ref": "Galatians 4:9–10",
          "text": "But now, after that ye have known God, or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage? Ye observe days, and months, and times, and years."
        },
        "taught": [
          "The Galatians were Christians who started keeping the Jewish law. Paul calls the Sabbath, the new moons, and the feasts “weak and beggarly elements.” Keeping holy days is bondage. Anyone who observes them has fallen back under the law."
        ],
        "word": [
          "*Stoicheia* (G4747) means the basic parts of something — the ABCs, the building blocks. Greek philosophers taught that the whole world was built from four: earth, water, air, and fire. In time, many in the Greek world came to treat these elements, and the stars moving across the sky, as spirits that ruled men’s lives. Those powers were thought to govern the days and the months, so people kept lucky and unlucky days to please them. That was the world the Galatians came out of."
        ],
        "hebrew": [
          "Paul tells us who the Galatians had been, one verse earlier: “Howbeit then, when ye knew not God, ye did service unto them which by nature are no gods” (Galatians 4:8). These were not Jews. They were pagans who had served false gods. So when Paul asks why they “turn again,” he means back to the gods they left — not to a Torah they never had.",
          "Moses warned against that very thing: “And lest thou lift up thine eyes unto heaven, and when thou seest the sun, and the moon, and the stars, even all the host of heaven, shouldest be driven to worship them, and serve them” (Deuteronomy 4:19). The Torah forbids the “observer of times” (Deuteronomy 18:10) — *anan* (H6049), a soothsayer who reads signs and lucky days. But Yahuah’s days are different. He calls them “my feasts” (Leviticus 23:2) — *moedim* (H4150), appointed meetings with Him. Paul did not call Yahuah’s feasts beggarly. He called the star-days beggarly."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *You know Yahuah now — better yet, He knows you. So why go back to the weak, worthless star powers you once served, and keep their lucky days, months, seasons, and years all over again?*",
          "The word “again” appears twice in one verse. You cannot go back to a place you have never been. And the same Paul told the Gentiles at Corinth to keep Yahuah’s feast: “Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth” (1 Corinthians 5:8)."
        ],
        "timeline": [
          [
            "c. 450 BC",
            "Empedocles",
            "Teaches that all things are made of four elements: earth, water, air, and fire."
          ],
          [
            "c. 50 AD",
            "Galatia",
            "Paul warns former pagans not to go back to their old days and seasons (Galatians 4:8–10)."
          ],
          [
            "c. 60 AD",
            "Colossae",
            "Paul warns against philosophy and “the rudiments of the world” (Colossians 2:8)."
          ],
          [
            "321 AD",
            "Constantine",
            "Orders rest on “the venerable day of the sun.”"
          ],
          [
            "c. 364 AD",
            "Laodicea",
            "A church council forbids Christians to rest on the Sabbath."
          ],
          [
            "Today",
            "The pulpit",
            "“Galatians says keeping days is bondage.”"
          ]
        ],
        "built": [
          "**No Sabbath, no feasts** — Yahuah’s appointed times treated as if they were the pagans’ star-days.",
          "**Man’s calendar kept instead** — the continuous Roman week and the church holidays kept, while the days Yahuah named are called bondage."
        ]
      },
      {
        "id": "metanoia",
        "greek": "Metanoia",
        "kjv": "repentance",
        "role": "The goddess of regret",
        "verse": {
          "ref": "Acts 26:20",
          "text": "But shewed first unto them of Damascus, and at Jerusalem, and throughout all the coasts of Judaea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance."
        },
        "taught": [
          "Repentance means feeling sorry for your sins and changing your mind about Jesus. You admit you are a sinner, you believe, and you are saved. It is a moment at the altar, not a change in how you live. Telling people to keep commandments after that is adding works."
        ],
        "word": [
          "*Metanoia* (G3341) in plain Greek means “a change of mind” — or regret, an afterthought. The Greeks even pictured her as a goddess. Lucian, a Greek writer, describes a famous painting by Apelles in which Metanoia — Repentance — stands dressed in mourning, weeping and ashamed, as the truth arrives (On Slander 5). To the Greek ear, repentance was a feeling: sorrow, regret, a mind changed. Nothing in the word asks a man to walk a different way."
        ],
        "hebrew": [
          "Behind the Greek word stands the Hebrew *shuv* (H7725). It means to turn around — to stop walking one way and walk back the other. Ezekiel shows what the turn looks like: “But if the wicked will turn from all his sins that he hath committed, and keep all my statutes, and do that which is lawful and right, he shall surely live, he shall not die” (Ezekiel 18:21).",
          "Now look at Paul’s verse again. He says three things: “repent,” “turn to God,” and “do works meet for repentance.” That is not a feeling. That is *shuv* in three steps — turn around, come back to Yahuah, and walk in a way that shows it. Moses said the same: “And shalt return unto Yahuah thy God, and shalt obey his voice according to all that I command thee this day” (Deuteronomy 30:2)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *I told everyone — Jews first, then Gentiles — to turn around, come back to Yahuah, and live a life that proves they have truly come back.*",
          "A turn that never changes direction is not a turn. Peter preached the same thing: “Repent ye therefore, and be converted” (Acts 3:19) — and “converted” means turned back. The blood opens the way home. Turning is the walk home, on Yahuah’s road, by His commandments."
        ],
        "timeline": [
          [
            "c. 330 BC",
            "Apelles",
            "Paints Calumny, with Metanoia — Repentance — mourning at the end of the scene."
          ],
          [
            "c. 160 AD",
            "Lucian",
            "Describes the painting: Repentance weeping and ashamed (On Slander 5)."
          ],
          [
            "c. 405 AD",
            "Jerome",
            "The Latin Bible renders repent as paenitentiam agite — later read as “do penance.”"
          ],
          [
            "1215",
            "Fourth Lateran Council",
            "Requires every believer to confess to a priest at least once a year."
          ],
          [
            "1500s",
            "The Reformers",
            "Throw out penance, but leave repentance as an inner sorrow and a change of mind."
          ],
          [
            "Today",
            "The pulpit",
            "“Repent just means change your mind.”"
          ]
        ],
        "built": [
          "**The altar call** — repentance as one moment of sorrow, not a life turned around.",
          "**Penance** — sorrow worked off through a priest, instead of a return to the commandments.",
          "**“Works” as a dirty word** — Paul’s own “works meet for repentance” called legalism."
        ]
      },
      {
        "id": "kardia",
        "greek": "Kardia",
        "kjv": "heart",
        "role": "The heart",
        "verse": {
          "ref": "Hebrews 8:10",
          "text": "For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people:"
        },
        "taught": [
          "In the new covenant, God writes His law on our hearts, so we don’t need the written commandments anymore. If you love God, your heart will lead you. God looks at the heart, not at rules. Just follow your heart."
        ],
        "word": [
          "*Kardia* (G2588) means heart. In the old Greek poets, like Homer, the heart was where a man felt — his courage, his anger, his longing. The philosopher Plato put thinking in the head and the feelings down in the chest (Timaeus 69–70). So to a Greek ear, the heart is the feeling part of a man, not the thinking part. Read that way, a law “written in their hearts” sounds like a warm feeling that takes the place of the written commandment."
        ],
        "hebrew": [
          "But this verse quotes Jeremiah: “I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people” (Jeremiah 31:33). The Hebrew word for heart is *lev* (H3820). In Hebrew, the heart is where a man thinks, understands, and decides — his mind and his will, not only his feelings. That is why the Greek copy can put “mind” and “hearts” side by side.",
          "And look at what gets written there: “my law” — my Torah. The same Torah Moses gave: “And these words, which I command thee this day, shall be in thine heart” (Deuteronomy 6:6). Jeremiah also warns about trusting the heart on its own: “The heart is deceitful above all things, and desperately wicked” (Jeremiah 17:9). The new covenant does not trust the heart. It rewrites the heart with the Torah."
        ],
        "reread": [
          "Now read it again the way Jeremiah meant it: *I will put My Torah into their thinking and write it where they make their choices — and I will be their Elohim, and they will be My people.*",
          "A heart with Yahuah’s Torah written on it does not drift away from the commandments. It loves them. David said, “And I will walk at liberty: for I seek thy precepts” (Psalm 119:45). And John said, “For this is the love of God, that we keep his commandments: and his commandments are not grievous” (1 John 5:3)."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The heart is the seat of courage, anger, and passion."
          ],
          [
            "c. 360 BC",
            "Plato",
            "Reason in the head; the feelings in the chest (Timaeus 69–70)."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek Torah renders lev as kardia, and the feeling-heart comes with the word."
          ],
          [
            "1799",
            "Schleiermacher",
            "Calls religion a matter of feeling, not of doctrine or deeds."
          ],
          [
            "Today",
            "The pulpit",
            "“God looks at your heart, not at rules.”"
          ]
        ],
        "built": [
          "**“Follow your heart”** — feeling set over the commandment.",
          "**A law with no words** — the “law on the heart” turned into a vague sense of love, with the commandments themselves left out."
        ]
      },
      {
        "id": "syneidesis",
        "greek": "Syneidēsis",
        "kjv": "conscience",
        "role": "The inner judge",
        "verse": {
          "ref": "Romans 2:15",
          "text": "Which shew the work of the law written in their hearts, their conscience also bearing witness, and their thoughts the mean while accusing or else excusing one another;)"
        },
        "taught": [
          "Everyone has a conscience — an inner voice from God that tells right from wrong. Even people who never read the Bible know what is right. So the written Law is not really needed. If your conscience is clear, you are fine. If you don’t feel convicted, it isn’t sin for you."
        ],
        "word": [
          "*Syneidēsis* (G4893) means “knowing with yourself” — an inner awareness that judges your own deeds. It was a word of Greek moral thinking, used by philosophers and ordinary people alike. The Stoics — Greek teachers who said a wise man lives by the reason inside him — leaned hard on that idea. The Roman Stoic Seneca wrote that a sacred spirit dwells within us, watching over our good and evil deeds (Letters 41). In that view, the judge lives inside the man."
        ],
        "hebrew": [
          "Hebrew has no word for conscience at all. When David’s conscience troubled him, Scripture says “David’s heart smote him” (1 Samuel 24:5). The judge was never inside the man. The standard stands outside him, written down: “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them” (Isaiah 8:20).",
          "Now look at what Paul says the conscience does. It is a witness — “bearing witness” — not the judge. And what does it witness to? “The work of the law written in their hearts.” The Law is the standard. The conscience only reports whether a man measures up to it."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Even the Gentiles show that Yahuah’s Torah is the real standard. Their own inner witness agrees with it, and their thoughts accuse them or defend them by it.*",
          "Paul’s own clear conscience had a written standard. He told the governor, “so worship I the God of my fathers, believing all things which are written in the law and in the prophets,” and then, “herein do I exercise myself, to have always a conscience void of offence toward God, and toward men” (Acts 24:14, 16). A conscience is only as true as the Word that trains it."
        ],
        "timeline": [
          [
            "c. 280 BC",
            "The Stoics",
            "Teach that a man should live by the reason within him."
          ],
          [
            "c. 64 AD",
            "Seneca",
            "A sacred spirit dwells within us, watching our good and evil deeds (Letters 41)."
          ],
          [
            "c. 1270",
            "Thomas Aquinas",
            "Teaches that a man must follow his conscience, even when it is wrong."
          ],
          [
            "1762",
            "Rousseau",
            "“Conscience! conscience! divine instinct” — the inner voice made man’s sure guide."
          ],
          [
            "Today",
            "The pulpit",
            "“Let your conscience be your guide.”"
          ]
        ],
        "built": [
          "**“I don’t feel convicted”** — a quiet conscience treated as proof that a practice is fine.",
          "**The inner voice over the written Word** — the commandment set aside whenever it does not match how a man feels."
        ]
      }
    ],
    "closing": [
      "The old path is simple. Yahuah delivers by the blood of the Lamb He provided. That is the door, and no one walks through it by keeping rules. But the door opens onto a road, and the road is the Torah. Paul put both in one place: “Much more then, being now justified by his blood, we shall be saved from wrath through him. For if, when we were enemies, we were reconciled to God by the death of his Son, much more, being reconciled, we shall be saved by his life” (Romans 5:9–10). The blood is the entry. The bread — the commandments — is the walk.",
      "Favor, law, covenant, the elements, repentance, heart, conscience — in Hebrew, every one of these words pointed toward the Torah, and the Greek ear bent every one of them to point away. Yahushua said He did not come to destroy the law. Revelation closes it by naming the people who stand at the end: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus” (Revelation 14:12)."
    ],
    "further": [
      [
        "The Old Paths: The Walk After the Door",
        "/doctrines/old-paths/walk-after-the-door"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Charis: Hesiod, Theogony 907 names the Charites as daughters of Zeus (and Eurynome). Presenting Charites as the source of the ‘gift that asks nothing back’ reading is interpretive; the tab says the word itself is not evil.",
      "Charis timeline: Marcion dated c. 144 AD; Augustine, On the Spirit and the Letter, dated c. 412 AD; Luther’s law/gospel distinction dated c. 1520.",
      "Nomos: Sophists’ nomos-versus-physis teaching dated c. 430 BC (Antiphon, Callicles in Plato’s Gorgias). Darby dispensationalism dated 1830s.",
      "Diatheke: KJV renders diathēkē as ‘covenant’ about 20 times and ‘testament’ about 13 times (not stated in the tab, but behind the ‘in other places as testament’ line). Melito of Sardis (c. 170 AD, in Eusebius, Church History 4.26) as ‘among the first’ to call a set of books ‘the old covenant’; Tertullian (Against Marcion 4.1, c. 207 AD) using testamentum for the two parts of Scripture.",
      "Diatheke: chadash (H2318/H2319) and chodesh (new moon, H2320) share one root — standard lexicon fact, but confirm wording suits the site.",
      "Stoicheia: the ‘star spirits that rule the days and months’ meaning is well attested in later sources; scholars debate how early it was current. The tab says ‘in time’ to avoid overstating.",
      "Stoicheia timeline: Constantine’s rest law of 321 AD (‘venerable day of the sun,’ Codex Justinianus 3.12.2); Council of Laodicea canon 29, c. 363–364 AD, forbidding Christians to rest on the Sabbath.",
      "Metanoia: Lucian, On Slander (Calumniae non temere credendum) 5, describing Apelles’ Calumny with Repentance in mourning, ashamed, as Truth approaches. Apelles dated c. 330 BC. Jerome’s ‘paenitentiam agite’ (Matthew 3:2) and its later ‘do penance’ reading. Fourth Lateran Council 1215, annual confession (canon 21).",
      "Metanoia timeline row ‘The Reformers… leave repentance as an inner sorrow and a change of mind’ is a fair summary but a generalization; Luther’s first thesis (1517) said the whole life of believers should be repentance.",
      "Kardia: Plato, Timaeus 69–70 (reason in the head; spirited and appetitive parts in the chest and belly). Schleiermacher, On Religion (1799), religion as feeling and intuition.",
      "Syneidesis: whether syneidēsis was specifically Stoic is debated (C. A. Pierce argued it was a popular, not Stoic, term); the tab calls it Greek moral thinking ‘used by philosophers and ordinary people alike’ and says the Stoics leaned on the idea. Seneca, Letters 41.2 (‘sacer intra nos spiritus sedet, malorum bonorumque nostrorum observator et custos’), dated c. 64 AD. Aquinas on the erring conscience binding (Summa I-II q.19 a.5). Rousseau, Emile (1762), Profession of Faith of the Savoyard Vicar.",
      "Romans 2:15 KJV text ends with ‘one another;)’ — the closing parenthesis belongs to the parenthesis opened at Romans 2:13. Kept exactly as printed; the site may prefer to start the verse block at 2:14 or keep it as is.",
      "Acts 26:20: KJV 1769 prints ‘Judæa’; this file uses ‘Judaea’ as most online KJV texts do.",
      "Live page subtitle ‘Grace Didn’t Kill the Law — It Fulfilled the Penalty’ kept from the live Departure page. Its live opening speaks of the Law’s penalty being borne by Messiah; the new opening avoids that wording because of the house rule that the Son is not the agent who paid for sin.",
      "Hebrews 8:10 (kardia) and Hebrews 8:13 (diatheke) both come from the same Jeremiah 31 quotation, so the two tabs share Jeremiah 31:33. Each tab makes a different point, but Dutch may want a different verse for one of them."
    ]
  },
  "tongue-talking": {
    "slug": "tongue-talking",
    "title": "Tongue Talking",
    "subtitle": "Is That Really the Spirit — Or Is It the Script?",
    "opening": [
      "Many churches teach that when the Spirit comes on you, it takes over your mouth. Your mind steps aside, and sounds pour out that no one on earth can understand. Some call it a prayer language for heaven. Some say it is the proof that you have the Holy Spirit at all. Since the Azusa Street revival of 1906, it has been taught, rehearsed, and performed in churches around the world.",
      "Scripture describes something else. At Shavuot the disciples spoke real languages, and the crowd understood them: “every man heard them speak in his own language” (Acts 2:6). Yahuah promised a language, not a noise: “For then will I turn to the people a pure language, that they may all call upon the name of Yahuah, to serve him with one consent” (Zephaniah 3:9).",
      "The pagan temples had the noise long before the church did. Four Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "pneuma-delphi",
        "greek": "Pneuma",
        "kjv": "Spirit",
        "role": "The root word",
        "verse": {
          "ref": "Acts 2:4",
          "text": "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance."
        },
        "taught": [
          "On that day the Holy Spirit fell on the disciples, and they began to speak in tongues. Many churches teach that the same thing still happens today. The Spirit takes control, your mind steps aside, and a heavenly language comes out. If it has not happened to you, some say you have not really received the Spirit."
        ],
        "word": [
          "*Pneuma* (G4151) means breath or wind. But at Delphi, the most famous temple of the Greek world, pneuma meant something more. A priestess called the Pythia sat over a crack in the ground. The Greeks said a sacred pneuma rose up and came over her, and she spoke words that were not her own. The Greek writers Strabo and Plutarch both describe it, and Plutarch served as a priest at Delphi. To a Greek reader, “filled with the pneuma” meant a person taken over and speaking in a frenzy. That is the picture many pulpits still see in this verse."
        ],
        "hebrew": [
          "But Peter tells us what happened that day. He says, “this is that which was spoken by the prophet Joel” (Acts 2:16), and Joel wrote: “And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions” (Joel 2:28).",
          "The Hebrew word for spirit is *ruach* (H7307). It means breath or wind — Yahuah’s own breath, His power going out to do His work. Luke calls it “the power of the Highest” (Luke 1:35). In the Hebrew Scriptures, when the ruach came on men, they did not lose their minds. The seventy elders prophesied in front of Moses with clear heads (Numbers 11:25), and Moses wished all of Yahuah’s people could do the same (Numbers 11:29)."
        ],
        "reread": [
          "Now read it again the way Luke meant it: *They were all filled with Yahuah’s power, and began to speak in other languages — real ones — as His breath gave them the words to say.*",
          "Luke tells us right away what kind of tongues they were. Men from many nations came running, “because that every man heard them speak in his own language” (Acts 2:6). They asked, “And how hear we every man in our own tongue, wherein we were born?” (Acts 2:8). No one needed someone to decode it. The gift was a language people understood, not a sound no one could."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Delphi",
            "Apollo’s priestess gives his answers when the sacred pneuma is said to come over her."
          ],
          [
            "c. 20 AD",
            "Strabo",
            "The Greek geographer writes that a breath rises from a chasm at Delphi and inspires the priestess."
          ],
          [
            "c. 31 AD",
            "Shavuot",
            "The disciples speak real languages, and men from many nations hear them in their own tongue."
          ],
          [
            "c. 100 AD",
            "Plutarch",
            "A priest at Delphi, he writes that the priestess speaks when the pneuma comes upon her."
          ],
          [
            "1906",
            "Azusa Street",
            "A Los Angeles revival spreads speaking in tongues as the sign of the Spirit."
          ],
          [
            "Today",
            "The pulpit",
            "“If you haven’t spoken in tongues, you haven’t received the Holy Ghost.”"
          ]
        ],
        "built": [
          "**Tongues as the proof of the Spirit** — the idea that every true believer must speak in an unknown language.",
          "**A private prayer language** — sounds that no one understands, not even the one speaking.",
          "**A Spirit that switches off the mind** — the believer as a vessel taken over, like the priestess at Delphi."
        ]
      },
      {
        "id": "python",
        "greek": "Pythōn",
        "kjv": "divination",
        "role": "The serpent’s spirit",
        "verse": {
          "ref": "Acts 16:16",
          "text": "And it came to pass, as we went to prayer, a certain damsel possessed with a spirit of divination met us, which brought her masters much gain by soothsaying:"
        },
        "taught": [
          "This was a fortune-teller in a pagan city. She had a demon, and Paul cast it out. Most preachers treat this as a side story about witchcraft. It has nothing to do with what happens in church. Speaking by the Spirit in worship, they say, is a different thing altogether."
        ],
        "word": [
          "The Greek copy does not say “a spirit of divination.” It says she had “a spirit of *Pythōn* (G4436).” Python was the great serpent of Delphi. The Greeks said Apollo killed it and took over its shrine, and his priestess there was called the Pythia after it. So Luke is naming the very spirit that spoke through the oracle at Delphi. Later Greek writers also called people with a spirit speaking out of them “Pythons.” The English hid the name, so readers never see the link."
        ],
        "hebrew": [
          "Moses shut the door on this long before. He gave a list of people who must not be found among Yahuah’s people, and it includes the one “that useth divination” (Deuteronomy 18:10) and “a consulter with familiar spirits” (Deuteronomy 18:11).",
          "The Hebrew word for divination is *qesem* (H7081) — getting hidden answers from a spirit. A familiar spirit is an *ob* (H178), a spirit that speaks out of a person. Isaiah tells us how it sounded: “Seek unto them that have familiar spirits, and unto wizards that peep, and that mutter: should not a people seek unto their God?” (Isaiah 8:19). Peeping and muttering — strange sounds coming out of a person. Yahuah’s people were to seek Him, not a voice."
        ],
        "reread": [
          "Now read it again the way Luke meant it: *As we went to prayer, a girl met us who had the spirit of Python — the spirit of Apollo’s oracle at Delphi — and her owners made a lot of money from her fortune-telling.*",
          "Listen to what the spirit said: “These men are the servants of the most high God, which shew unto us the way of salvation” (Acts 16:17). Every word was true, and it sounded holy. Paul did not call it the Holy Spirit. He was grieved, and he said to the spirit, “I command thee in the name of Jesus Christ to come out of her. And he came out the same hour” (Acts 16:18). A spirit that takes over a person’s mouth is Python’s pattern, even when the words sound religious."
        ],
        "timeline": [
          [
            "Sinai",
            "Moses",
            "The Torah forbids divination and familiar spirits among Yahuah’s people (Deuteronomy 18:10–11)."
          ],
          [
            "c. 550 BC",
            "The Greek hymns",
            "Apollo kills the serpent Python at Delphi and takes its shrine for his oracle."
          ],
          [
            "c. 50 AD",
            "Philippi",
            "Paul casts the spirit of Python out of a slave girl (Acts 16:16–18)."
          ],
          [
            "c. 100 AD",
            "Plutarch",
            "Notes that people with a spirit speaking from inside them were now called “Pythons.”"
          ],
          [
            "Today",
            "The pulpit",
            "A voice that takes over the mouth is welcomed as the Holy Spirit, as long as the words sound holy."
          ]
        ],
        "built": [
          "**Testing by feeling, not by Torah** — if it sounds holy and feels powerful, it must be from God.",
          "**A spirit that speaks through people** — the oracle’s pattern brought into worship under a new name."
        ]
      },
      {
        "id": "prophetes",
        "greek": "Prophētēs",
        "kjv": "prophet",
        "role": "The interpreter",
        "verse": {
          "ref": "1 Corinthians 14:29",
          "text": "Let the prophets speak two or three, and let the other judge."
        },
        "taught": [
          "Many churches have “prophets” who stand up and give “a word from the Lord.” Sometimes it comes right after a message in tongues, as its interpretation. The church is told to judge it. But judging usually means asking whether it feels right, or whether it “bears witness” in your spirit. Few ever open the Torah to test it."
        ],
        "word": [
          "At Delphi, the priestess did not give plain answers. Her words came out wild and hard to follow. A temple official called the *prophētēs* (G4396) stood by and turned her frenzy into an answer people could take home. Plato says the same: the prophets are not the ones in the frenzy; they are the ones who explain it (Timaeus 72). So in the Greek world, a prophet was the interpreter for a spirit-seized speaker. Many churches now follow that same pattern: first the strange sounds, then someone to explain them."
        ],
        "hebrew": [
          "Peter shows us the Hebrew word beneath it. He quotes Moses: “A prophet shall the Lord your God raise up unto you of your brethren, like unto me” (Acts 3:22). And Moses says what a prophet is: “I will raise them up a Prophet from among their brethren, like unto thee, and will put my words in his mouth; and he shall speak unto them all that I shall command him” (Deuteronomy 18:18).",
          "The Hebrew word is *navi* (H5030): one who speaks Yahuah’s words plainly, with his own mouth and his own mind. A navi was always tested. If his word did not come to pass, he spoke on his own (Deuteronomy 18:22). If he led people to other gods, even with signs, he was false (Deuteronomy 13:1–3). Isaiah gives the test in one line: “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them” (Isaiah 8:20)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Let two or three men who speak Yahuah’s words speak in turn, and let the others test what they say against the Torah.*",
          "Paul says the prophets stay in control the whole time: “And the spirits of the prophets are subject to the prophets” (1 Corinthians 14:32). No frenzy, no one taken over. And he gives the measure for testing: “If any man think himself to be a prophet, or spiritual, let him acknowledge that the things that I write unto you are the commandments of the Lord” (1 Corinthians 14:37)."
        ],
        "timeline": [
          [
            "Sinai",
            "Moses",
            "A prophet speaks Yahuah’s words and is tested by them (Deuteronomy 18:18–22)."
          ],
          [
            "c. 360 BC",
            "Plato",
            "Calls prophets the interpreters of those who speak in a god-sent frenzy (Timaeus 72)."
          ],
          [
            "c. 55 AD",
            "Paul",
            "Prophets speak in turn, stay in control, and are judged (1 Corinthians 14:29–32)."
          ],
          [
            "c. 170 AD",
            "Montanus",
            "Claims a new prophecy spoken in ecstasy; the churches of his day reject it."
          ],
          [
            "Today",
            "The pulpit",
            "A message in tongues, then an “interpretation,” then “thus saith the Lord” — tested by no one."
          ]
        ],
        "built": [
          "**Tongues plus interpretation** — the Delphi pattern: a spirit-seized speaker and someone to explain him.",
          "**New words from the Lord** — “prophetic words” treated like Scripture but never tested by the Torah."
        ]
      },
      {
        "id": "ekstasis",
        "greek": "Ekstasis",
        "kjv": "trance",
        "role": "The frenzy",
        "verse": {
          "ref": "Acts 10:10",
          "text": "And he became very hungry, and would have eaten: but while they made ready, he fell into a trance,"
        },
        "taught": [
          "Peter fell into a trance. Many preachers say the Spirit came on him so strongly that he left his senses. That is used to defend what happens in some churches: people falling to the floor, shaking, laughing, or lying still for a long time. They call it being “slain in the Spirit.” If it overpowers you, they say, it must be God."
        ],
        "word": [
          "*Ekstasis* (G1611) means “standing outside yourself.” The Greeks used it for the wild worship of Dionysus, the god of wine. His women ran through the hills in a frenzy, out of their minds. Plato praised this kind of madness as a gift from the gods (Phaedrus). So to a Greek reader, a trance meant losing yourself — the god takes over and you are gone. That is the picture the pulpit brings to this verse."
        ],
        "hebrew": [
          "But the Greek Old Testament used this same word for something very different. When Yahuah put Adam into a deep sleep to make the woman, the Greek translators wrote ekstasis (Genesis 2:21). They did it again when Abram fell into a deep sleep and Yahuah gave him His covenant promise (Genesis 15:12). The Hebrew word there is *tardemah* (H8639), a deep sleep — man at rest while Yahuah works. No frenzy at all.",
          "And Yahuah told us how He speaks to His prophets: “Hear now my words: If there be a prophet among you, I Yahuah will make myself known unto him in a vision, and will speak unto him in a dream” (Numbers 12:6). The Hebrew word for vision is *mar’ah* (H4759), something seen. A Hebrew vision came to a man who could see, hear, and answer back."
        ],
        "reread": [
          "Now read it again the way Luke meant it: *He was very hungry and wanted to eat, but while they were getting the meal ready, Yahuah showed him a vision.*",
          "Look at what Peter did inside that trance. He argued back: “Not so, Lord; for I have never eaten any thing that is common or unclean” (Acts 10:14). He still knew the Torah well enough to refuse. Afterward he “doubted in himself what this vision which he had seen should mean” (Acts 10:17), and he “thought on the vision” (Acts 10:19). His mind was awake the whole time. Paul says it plainly: “For God is not the author of confusion, but of peace” (1 Corinthians 14:33)."
        ],
        "timeline": [
          [
            "c. 405 BC",
            "Euripides",
            "The Bacchae: the women of Dionysus run wild, out of their minds in his worship."
          ],
          [
            "c. 370 BC",
            "Plato",
            "Phaedrus: madness sent by the gods brings the greatest blessings."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek Old Testament uses ekstasis for Adam’s deep sleep (Genesis 2:21)."
          ],
          [
            "c. 170 AD",
            "Montanus",
            "Prophesies in ecstasy, out of his own control; the churches of his day reject him."
          ],
          [
            "1801",
            "Cane Ridge",
            "At a Kentucky camp meeting, crowds fall, shake, and cry out, and it is called the work of the Spirit."
          ],
          [
            "Today",
            "The pulpit",
            "“Slain in the Spirit” — losing control is taken as proof that God is present."
          ]
        ],
        "built": [
          "**Slain in the Spirit** — falling, shaking, and holy laughter treated as signs of Yahuah.",
          "**The mind switched off** — the idea that the deeper the worship, the less you are in control."
        ]
      }
    ],
    "closing": [
      "The old path is a pure lip. Yahuah promised it through Zephaniah, and at Shavuot He did it — real languages, heard and understood, so men from every nation could hear His works. Paul held the same line in the church: “except ye utter by the tongue words easy to be understood, how shall it be known what is spoken?” (1 Corinthians 14:9). His Spirit is His power. His prophets speak plain words. His people stay in their right minds.",
      "Delphi had the breath, the serpent, the interpreter, and the frenzy. Yahuah needs none of them. The end of the story is a crowd made of every language, all of them speaking clearly before Him: “After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb” (Revelation 7:9)."
    ],
    "further": [
      [
        "The Old Paths: A Pure Lip",
        "/doctrines/old-paths/a-pure-lip"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Strabo (Geography 9.3.5) and Plutarch (On the Obsolescence of Oracles) describe a pneuma rising at Delphi and inspiring the Pythia; Plutarch served as a priest at Delphi. Dates c. 20 AD and c. 100 AD are approximate.",
      "Delphi oracle date “c. 700 BC” is approximate (active from at least the 8th century BC).",
      "Plutarch (On the Obsolescence of Oracles 9, 414E) says ventriloquists (engastrimythoi) were “now called Pythons” — confirm before keeping the line “Later Greek writers also called people with a spirit speaking out of them ‘Pythons.’”",
      "Homeric Hymn to Apollo (Apollo slays the Delphic serpent) dated c. 6th century BC; “c. 550 BC” is an estimate.",
      "Plato, Timaeus 72a–b: prophets as interpreters of inspired (frenzied) utterance — paraphrase, not quote.",
      "Plato, Phaedrus 244a: the greatest blessings come through god-sent madness — the text uses mania, not ekstasis; the tab says “this kind of madness,” not that Plato used ekstasis.",
      "Septuagint uses ekstasis for tardemah at Genesis 2:21 and 15:12.",
      "Hebrew numbers: qesem H7081, ob H178, mar’ah H4759 (Numbers 12:6), tardemah H8639, ruach H7307, navi H5030.",
      "Montanus c. 170 AD prophesying in ecstasy — per Eusebius, Church History 5.16; no quotation used.",
      "Cane Ridge camp meeting, Kentucky, August 1801 — falling and jerking exercises.",
      "Acts 2 dated c. 31 AD to follow house chronology (death at Pesach 31 AD)."
    ]
  },
  "hell": {
    "slug": "hell",
    "title": "Hell",
    "subtitle": "The Eternal Flame Was Never Meant For You — Until Rome Decided Otherwise",
    "opening": [
      "Hell, as most pulpits preach it, is a fiery dungeon where the lost scream forever. The soul goes there at death, wide awake, and it never ends. Not in a thousand years. Not in a million. That picture owes more to Dante and the medieval church than to the Bible, yet it has been preached at funerals and revival meetings for centuries. It has driven more people away from Yahuah than almost any other teaching.",
      "The Torah and the prophets say something else. The dead sleep in the grave: “the dead know not any thing” (Ecclesiastes 9:5). And the wicked do not burn forever. They burn up: “And ye shall tread down the wicked; for they shall be ashes under the soles of your feet in the day that I shall do this, saith Yahuah of hosts” (Malachi 4:3). The fire is final. It is not endless.",
      "Six Greek words carried the endless fire into the church. Choose a word."
    ],
    "tabs": [
      {
        "id": "hades",
        "greek": "Hadēs",
        "kjv": "hell",
        "role": "The root word",
        "verse": {
          "ref": "Luke 16:23",
          "text": "And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom."
        },
        "taught": [
          "Jesus Himself told us what hell is like. The rich man died and woke up in the flames, fully awake and in pain. He could see heaven and call across to it. This is preached as a true look at what happens the moment an unsaved person dies. It is the main proof that hell is burning right now."
        ],
        "word": [
          "The Greek copy uses *Hadēs* (G86). In Homer’s poems, Hades was the god of the dead, and his underworld was named after him. The dead lived on there as shadows. In Homer’s Odyssey, the hero sails to the edge of Hades and talks with them. Later Greek writers added judgment and torment for the wicked below. So when a Greek reader sees “in Hades… in torments,” he sees the underworld of his own myths."
        ],
        "hebrew": [
          "But Hadēs stands in for a Hebrew word. When Peter quotes David, the Greek copy puts Hadēs where David wrote *Sheol* (H7585): “For thou wilt not leave my soul in hell” (Psalm 16:10; Acts 2:27). Sheol is the grave — the same place for the good and the wicked alike.",
          "And Solomon tells us what the grave is like: “For the living know that they shall die: but the dead know not any thing” (Ecclesiastes 9:5). “There is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest” (Ecclesiastes 9:10). No talking, no seeing, no feeling. If a man is awake and talking in Sheol, he is in a story, not a report."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *In this story, the rich man who would not hear Moses finds himself in the grave — and too late, he sees what he threw away.*",
          "It is a story, and Yahushua tells it the same way He told the one before it. Luke 16 opens, “There was a certain rich man, which had a steward” (Luke 16:1). Then, “There was a certain rich man, which was clothed in purple and fine linen” (Luke 16:19). Same opening, same kind of story. And its point is not a map of the afterlife. It is the last line: “If they hear not Moses and the prophets, neither will they be persuaded, though one rose from the dead” (Luke 16:31)."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The Odyssey: the hero visits Hades and speaks with the shades of the dead."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Hebrew Scriptures are put into Greek; Sheol becomes Hadēs, and the underworld comes with the word."
          ],
          [
            "c. 135 AD",
            "The Apocalypse of Peter",
            "A book outside the Bible tours hell and shows sinners tortured for each sin."
          ],
          [
            "c. 1320",
            "Dante",
            "The Inferno: nine circles of torment beneath the earth — the picture most Christians still carry."
          ],
          [
            "1611",
            "King James Bible",
            "Sheol is put into English as “hell” 31 times, and as “grave” 31 times."
          ],
          [
            "Today",
            "The pulpit",
            "“The moment the unsaved die, they wake up in the flames.”"
          ]
        ],
        "built": [
          "**Torment from the moment of death** — the lost burning now, before the Judgment has even been held.",
          "**A verdict before the trial** — if the wicked already burn, Judgment Day only confirms a sentence already served.",
          "**Fear as the message** — preaching that drives people by terror instead of calling them back to Yahuah’s ways."
        ]
      },
      {
        "id": "tartaroo",
        "greek": "Tartaroō",
        "kjv": "cast down to hell",
        "role": "The Titans’ pit",
        "verse": {
          "ref": "2 Peter 2:4",
          "text": "For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment;"
        },
        "taught": [
          "The fallen angels are already in hell, burning. Some say the devil rules hell and torments the lost there. Others say demons and the damned are being tortured right now in a pit of fire. This verse is used to show that hell is a real place of punishment, already in use."
        ],
        "word": [
          "This is the only place in the Bible where this Greek word appears. *Tartaroō* (G5020) means “to throw into Tartarus.” In the poems of Hesiod, Tartarus was a dark pit far below the earth. Zeus threw the Titans there — the old gods who fought against him — and locked them in the dark. So the Greek copy borrows a word straight out of Greek myth. Even in the myth, Tartarus was a prison of darkness, not a lake of fire."
        ],
        "hebrew": [
          "There is no Hebrew word beneath *Tartaroō*. It is pure Greek myth. But the verse itself tells us what Peter meant: the angels are held in “chains of darkness, to be reserved unto judgment.” That is a holding cell, not the punishment. The punishment comes later, on the day of judgment.",
          "And what does that day do to the wicked? Malachi tells us: “For, behold, the day cometh, that shall burn as an oven; and all the proud, yea, and all that do wickedly, shall be stubble: and the day that cometh shall burn them up” (Malachi 4:1). “They shall be ashes under the soles of your feet” (Malachi 4:3). The Hebrew word for ashes is *epher* (H665). Ashes are what is left when the fire is finished."
        ],
        "reread": [
          "Now read it again the way Peter meant it: *Yahuah did not spare the angels who sinned. He shut them up in a dark prison, held in chains, waiting for the day of judgment.*",
          "Peter does not leave us guessing what judgment looks like. Two verses later he points to Sodom: “And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow, making them an ensample unto those that after should live ungodly” (2 Peter 2:6). And he says wicked men are not being punished yet either. Yahuah knows how “to reserve the unjust unto the day of judgment to be punished” (2 Peter 2:9). A prison now, a fire later — and the fire leaves ashes."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "Theogony: Zeus hurls the Titans into Tartarus, as far below the earth as heaven is above it."
          ],
          [
            "c. 65 AD",
            "Peter",
            "The angels who sinned are held in chains of darkness until the judgment (2 Peter 2:4)."
          ],
          [
            "c. 1320",
            "Dante",
            "The fallen angels guard the city of hell, and Satan sits at its bottom."
          ],
          [
            "1667",
            "Milton",
            "Paradise Lost: Satan falls into a burning hell and makes it his kingdom."
          ],
          [
            "Today",
            "The pulpit",
            "“The devil runs hell, and his demons torture the lost there.”"
          ]
        ],
        "built": [
          "**The devil as king of hell** — a picture from Dante and Milton, not from Scripture.",
          "**Demons torturing the dead** — when Peter says the angels themselves are prisoners, waiting for judgment."
        ]
      },
      {
        "id": "aion",
        "greek": "Aiōn / Aiōnios",
        "kjv": "everlasting",
        "role": "The god of endless time",
        "verse": {
          "ref": "Matthew 25:46",
          "text": "And these shall go away into everlasting punishment: but the righteous into life eternal."
        },
        "taught": [
          "Jesus used the same word for both: everlasting punishment and life eternal. So if the life lasts forever, the punishment must last forever too. The lost will be in pain without end. This is one of the strongest verses preachers use for endless torment."
        ],
        "word": [
          "The Greek copy uses *aiōnios* (G166), from *aiōn* (G165). Aiōn first meant a lifetime or an age — a long stretch of time. But Greek philosophers turned it into “eternity,” time without any end. Plato did this in his Timaeus. In Alexandria, Egypt, Aion even became a god of endless time. A church writer named Epiphanius reports that the birth of Aion from a virgin was celebrated there on January 6. So the word came into the church loaded with the idea of “never stops.”"
        ],
        "hebrew": [
          "Yahushua is echoing the prophet Daniel: “And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt” (Daniel 12:2). The Hebrew word for everlasting is *olam* (H5769). It means an age whose end you cannot see from where you stand. A servant who chose to stay with his master “shall serve him for ever” (Exodus 21:6) — for the rest of his life. Jonah said the earth with her bars was about him “for ever” (Jonah 2:6), and it was three days.",
          "So what is everlasting about the wicked? The result. The Hebrew word for contempt, *dera’on* (H1860), is used only one other time, at the very end of Isaiah: “And they shall go forth, and look upon the carcases of the men that have transgressed against me” and “they shall be an abhorring unto all flesh” (Isaiah 66:24). Carcases — dead bodies. The contempt lasts. The wicked do not."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *These shall go away into a punishment that is final and never undone, but the righteous into life that never ends.*",
          "Yahushua told us what that punishment is: “fear him which is able to destroy both soul and body in hell” (Matthew 10:28). Destroy — not keep alive in pain. Paul says the same: they “shall be punished with everlasting destruction” (2 Thessalonians 1:9). The punishment is everlasting because the destruction is never reversed. Life lasts forever, and death lasts forever. Only one of them is life."
        ],
        "timeline": [
          [
            "c. 360 BC",
            "Plato",
            "Timaeus: aiōn becomes timeless eternity, and time only its moving copy."
          ],
          [
            "c. 375 AD",
            "Epiphanius",
            "Reports that at Alexandria the birth of the god Aion from a virgin was celebrated on January 6."
          ],
          [
            "c. 426 AD",
            "Augustine",
            "City of God: if eternal life never ends, eternal punishment cannot end either."
          ],
          [
            "1646",
            "Westminster",
            "The Protestant confession: the wicked are “cast into eternal torments.”"
          ],
          [
            "Today",
            "The pulpit",
            "“Everlasting means everlasting — the lost will burn as long as God lives.”"
          ]
        ],
        "built": [
          "**Endless torment** — punishment that never stops, instead of a punishment whose result never ends.",
          "**A cruel God** — Yahuah pictured keeping people alive forever just to hurt them."
        ]
      },
      {
        "id": "aidios",
        "greek": "Aidios",
        "kjv": "everlasting",
        "role": "The philosopher’s forever",
        "verse": {
          "ref": "Jude 6",
          "text": "And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day."
        },
        "taught": [
          "The fallen angels are bound in chains that will last forever. Preachers use this to show that punishment never ends. If their chains are everlasting, their torment must be too. And the very next verse says Sodom suffers “eternal fire,” so the lost must burn forever as well."
        ],
        "word": [
          "Jude uses a different word for “everlasting” here: *aidios* (G126). It appears only twice in the New Testament. The Greek philosopher Aristotle used it for things with no beginning and no end, like the heavens he believed had always existed. Paul uses it rightly of Yahuah’s “eternal power” (Romans 1:20), because Yahuah truly has no beginning and no end. But the church read Aristotle’s full meaning into these chains too, as if they could never come off."
        ],
        "hebrew": [
          "Jude was a Hebrew man writing about Hebrew things, and a few verses later he quotes Enoch (Jude 14). The prison he describes is the one Isaiah saw: “And they shall be gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited” (Isaiah 24:22).",
          "The Hebrew word for prison there is *masger* (H4525), a place shut up and locked. “Visited” is *paqad* (H6485) — called to account, brought to judgment. The prisoners wait in the dark until a set day. Jude says the same thing in his own verse: the chains hold them “unto the judgment of the great day.” Chains that last until a day are chains with an end date."
        ],
        "reread": [
          "Now read it again the way Jude meant it: *The angels who left their place, Yahuah is holding in lasting chains, in darkness, until the judgment of the great day.*",
          "Then Jude shows what that judgment looks like. Sodom and Gomorrha “are set forth for an example, suffering the vengeance of eternal fire” (Jude 7). Is Sodom still burning today? No. It is ashes, just as Peter said (2 Peter 2:6). The fire was eternal in what it did — Sodom never came back — not in how long it burned. That is the example Jude gives us."
        ],
        "timeline": [
          [
            "c. 350 BC",
            "Aristotle",
            "On the Heavens: the heavens are aidios — without beginning and without end."
          ],
          [
            "Before Jude",
            "Enoch",
            "The fallen watchers are bound under the earth “till the day of their judgement” (Enoch 10:12)."
          ],
          [
            "c. 65 AD",
            "Jude",
            "The angels are held in chains “unto the judgment of the great day” (Jude 6)."
          ],
          [
            "1741",
            "Jonathan Edwards",
            "“Sinners in the Hands of an Angry God”: the lost hang over a pit of fire that never ends."
          ],
          [
            "Today",
            "The pulpit",
            "“Everlasting chains, eternal fire — it never ends.”"
          ]
        ],
        "built": [
          "**Endless chains, endless pain** — a time word stretched past the end date the verse itself gives.",
          "**Sodom still burning** — the “eternal fire” read as a fire that never goes out, when Sodom is ashes."
        ]
      },
      {
        "id": "katachthonios",
        "greek": "Katachthonios",
        "kjv": "under the earth",
        "role": "The underworld gods",
        "verse": {
          "ref": "Philippians 2:10",
          "text": "That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth;"
        },
        "taught": [
          "Every knee will bow to Jesus — even the knees “under the earth.” Many preachers say this means the souls in hell. They are awake down there, and one day they will be forced to bow. This verse is used to show that the dead are alive and aware beneath the ground."
        ],
        "word": [
          "The Greek copy uses *katachthonios* (G2709), “under the earth.” It appears only here in the New Testament. To the Greeks it was a temple word. The gods of the underworld were the gods “under the earth,” and Homer even calls Hades “Zeus Katachthonios,” the Zeus who rules below (Iliad 9.457). Read through Greek eyes, “those under the earth” are spirits living in the underworld. That is what the pulpit sees."
        ],
        "hebrew": [
          "Paul is quoting the prophet Isaiah, where Yahuah swears: “I have sworn by myself, the word is gone out of my mouth in righteousness, and shall not return, That unto me every knee shall bow, every tongue shall swear” (Isaiah 45:23). Yahuah is the one who receives the bowing. Paul shows how it happens: Yahuah exalted His Son and gave Him the name above every name (Philippians 2:9), and every knee bows “to the glory of God the Father” (Philippians 2:11).",
          "And who is under the earth in Hebrew? The dead, in the dust. “For dust thou art, and unto dust shalt thou return” (Genesis 3:19). The Hebrew word for dust is *aphar* (H6083). Daniel says the dead “sleep in the dust of the earth” and shall “awake” (Daniel 12:2). They are not awake now. They bow when they are raised."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *At the name Yahuah gave His Son, every knee will bow — those in heaven, those living on the earth, and the dead raised up out of the dust.*",
          "Paul is not describing ghosts kneeling in a cave. He is describing the day the graves open. That is why the passage ends where Isaiah ends, with Yahuah: “And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father” (Philippians 2:11). The Son is honored, and the Father receives the glory. The dead join in when they rise."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "Iliad: Hades is called “Zeus Katachthonios,” the Zeus beneath the earth."
          ],
          [
            "c. 500 BC",
            "Greek temples",
            "Offerings are poured into the ground for the gods who live under the earth."
          ],
          [
            "c. 61 AD",
            "Paul",
            "Every knee will bow, in heaven, in earth, and under the earth — quoting Isaiah 45:23."
          ],
          [
            "c. 400 AD",
            "The creeds",
            "“He descended into hell” enters the creed, picturing a world of living dead beneath the earth."
          ],
          [
            "Today",
            "The pulpit",
            "“Even the souls in hell will bow.”"
          ]
        ],
        "built": [
          "**A living world of the dead below** — souls awake under the earth, waiting in torment.",
          "**The descent into hell** — the creed’s picture of the Son visiting the dead beneath the earth."
        ]
      },
      {
        "id": "apokatastasis",
        "greek": "Apokatastasis",
        "kjv": "restitution",
        "role": "Everyone saved",
        "verse": {
          "ref": "Acts 3:21",
          "text": "Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began."
        },
        "taught": [
          "The “restitution of all things” means that in the end, everyone will be saved. A loving God would never lose anyone. Some go further: even the devil will be restored. Hell, if it exists, is only a place to clean people up before they enter heaven. More churches teach this today as the kinder answer to endless torment."
        ],
        "word": [
          "*Apokatastasis* (G605) means “putting back” — setting something back the way it was. Greek philosophers called the Stoics taught that the whole world burns up and then starts over, again and again forever, and they called that the apokatastasis. Around 230 AD a church teacher named Origen took the word and taught that in the end all will be restored to God — some say he meant even the devil. His teaching was condemned in 553. But the idea never died."
        ],
        "hebrew": [
          "Peter tells us whose restoration this is: the one spoken “by the mouth of all his holy prophets.” The last of those prophets, Malachi, ends his book with it: “And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse” (Malachi 4:6). The Greek Old Testament uses this same word family for the Hebrew *shuv* (H7725): to turn back, to return.",
          "But the same chapter of Malachi says what happens to those who will not turn: “they shall be ashes under the soles of your feet in the day that I shall do this, saith Yahuah of hosts” (Malachi 4:3). The restoration is real — Israel turned back, the kingdom restored, the earth made new. The disciples asked about it: “Lord, wilt thou at this time restore again the kingdom to Israel?” (Acts 1:6). It was never a promise that every person would be saved."
        ],
        "reread": [
          "Now read it again the way Peter meant it: *Heaven must hold Yahushua until the time when Yahuah sets everything back the way He promised by all His prophets.*",
          "Peter says in the very next breath who is left out: “And it shall come to pass, that every soul, which will not hear that prophet, shall be destroyed from among the people” (Acts 3:23). Not restored. Not cleaned up. Destroyed. The restoration is for those who turn back; the wicked are consumed."
        ],
        "timeline": [
          [
            "c. 280 BC",
            "The Stoics",
            "The world is burned and remade in endless cycles — the apokatastasis."
          ],
          [
            "c. 31 AD",
            "Peter",
            "The restitution the prophets foretold; those who will not hear are destroyed (Acts 3:21–23)."
          ],
          [
            "c. 230 AD",
            "Origen",
            "On First Principles: in the end, all are restored to God."
          ],
          [
            "553",
            "Constantinople",
            "Origen’s teaching of a final restoration of all is condemned."
          ],
          [
            "1779",
            "John Murray",
            "One of the first Universalist churches in America is founded at Gloucester, Massachusetts."
          ],
          [
            "Today",
            "The pulpit",
            "“A loving God would never lose anyone — in the end, everyone goes to heaven.”"
          ]
        ],
        "built": [
          "**Universalism** — every soul saved in the end, no matter how it lived.",
          "**Hell as a cleansing fire** — punishment that purifies instead of destroys. Like endless torment, it denies that the wicked are consumed."
        ]
      }
    ],
    "closing": [
      "The old path is plain: the wicked are consumed. Fire went out from Yahuah and devoured Nadab and Abihu, and they died (Leviticus 10:2). Sodom was turned to ashes. Malachi saw the last day burn like an oven, leaving the wicked “neither root nor branch” (Malachi 4:1). The fire is eternal in what it does, not in how long it must keep burning. Until that day the dead sleep in the grave, good and wicked alike, waiting for the voice that raises them.",
      "Homer built the underworld, Hesiod dug the pit, the philosophers made the fire last forever, and Origen tried to put it out by saving everyone. Scripture ends it another way. Revelation shows the grave itself thrown into the fire: “And death and hell were cast into the lake of fire. This is the second death” (Revelation 20:14). The second death is a death, not a life in pain."
    ],
    "further": [
      [
        "The Old Paths: The Wicked Consumed",
        "/doctrines/old-paths/wicked-consumed"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "KJV count for Sheol: “hell” 31, “grave” 31, “pit” 3 — standard count, confirm.",
      "Apocalypse of Peter dated c. 135 AD (range c. 100–150).",
      "Homer’s Odyssey 11 — Odysseus summons the dead at the edge of Hades rather than entering it; tab says “sails to the edge of Hades.”",
      "Hesiod, Theogony c. 720–725: Tartarus as far beneath earth as heaven is above; Titans imprisoned there.",
      "Dante, Inferno 8–9 (fallen angels guard the City of Dis) and Canto 34 (Satan at the bottom).",
      "Plato, Timaeus 37d: time as the moving image of eternity (aiōn).",
      "Epiphanius, Panarion 51.22: at Alexandria on January 6 the Kore (maiden) gave birth to Aion — per input word page.",
      "Augustine, City of God 21.23: argues eternal punishment must be as endless as eternal life.",
      "Westminster Confession 33.2 wording “cast into eternal torments” — confirm exact phrase.",
      "dera’on (H1860) occurs only at Daniel 12:2 and Isaiah 66:24 — confirm.",
      "Hebrew numbers: masger H4525 and paqad H6485 at Isaiah 24:22; epher H665; aphar H6083; shuv H7725; olam H5769.",
      "aidios (G126) appears only at Romans 1:20 and Jude 6; Aristotle uses it of the heavens (On the Heavens).",
      "Enoch 10:12 (R.H. Charles 1912): bound “till the day of their judgement.”",
      "Iliad 9.457: “Zeus Katachthonios” for Hades.",
      "“He descended into hell” in the creed c. 400 AD — Rufinus notes descendit ad inferna in the creed of Aquileia; confirm date framing.",
      "Origen, On First Principles 1.6 — whether he included the devil in the final restoration is disputed; tab says “some say.” Condemnation of 553 is tied to the Second Council of Constantinople, though the anti-Origen anathemas may come from a session just before it.",
      "John Murray’s Universalist church, Gloucester, Massachusetts, 1779.",
      "2 Peter and Jude dated c. 65 AD; Philippians c. 61 AD — approximate."
    ]
  },
  "immortal-soul": {
    "slug": "immortal-soul",
    "title": "Immortal Soul",
    "subtitle": "You Are Not Immortal — And the Serpent Told You Otherwise",
    "opening": [
      "Every person has a soul that can never die. When the body stops, the soul slips out and lives on, fully awake, and goes straight to heaven or straight to hell. That is preached at nearly every funeral, Catholic and Protestant alike. The men preaching it studied the Greek. They had every chance to find out where the teaching came from, and they preach it anyway.",
      "The Torah says something else. “And Yahuah Elohim formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul” (Genesis 2:7). Man was not given a soul; he became one — a *nephesh*, a living creature, the same word used of the cattle four verses earlier. And a nephesh can die: “The soul that sinneth, it shall die” (Ezekiel 18:4).",
      "Six Greek words carried the undying soul into the church. Each one is opened below — where it came from, what the Hebrew said, how it grew, and what it built. Choose a word."
    ],
    "tabs": [
      {
        "id": "psyche",
        "greek": "Psychē",
        "kjv": "soul",
        "role": "The root word",
        "word": [
          "The Greek copy of this verse uses two words. *Psychē* (G5590) was Plato’s word for a soul that cannot die — it leaves the body and lives on. *Hadēs* (G86) was the Greek god of the dead and the name of his underworld. Put those two words together, and a Greek reader sees a living soul down in the underworld. That is what the pulpit still sees."
        ],
        "hebrew": [
          "But Peter was quoting David, and David wrote in Hebrew: “For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption” (Psalm 16:10).",
          "The Hebrew word for soul is *nephesh* (H5315). It means a living creature — the person, his life (Genesis 2:7). The Hebrew word for hell is *Sheol* (H7585). It means the grave. Solomon says there is no work and no knowledge there (Ecclesiastes 9:10). So David is saying the same thing twice: You will not leave me in the grave. You will not let me rot."
        ],
        "timeline": [
          [
            "The Garden",
            "The serpent",
            "“Ye shall not surely die” (Genesis 3:4). The first lie."
          ],
          [
            "c. 380 BC",
            "Plato",
            "The lie gets a philosophy: the psychē cannot die (Phaedo)."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Torah is put into Greek; nephesh becomes psychē, and Plato’s meaning comes with the word."
          ],
          [
            "c. 210 AD",
            "Tertullian",
            "Appeals openly to Plato’s view that every soul is immortal."
          ],
          [
            "c. 420 AD",
            "Augustine",
            "A Platonist before his conversion, he makes the immortal soul a pillar of Western teaching."
          ],
          [
            "1513",
            "Rome",
            "The Fifth Lateran Council condemns anyone who says the soul is mortal."
          ],
          [
            "1646",
            "Westminster",
            "The Protestant confession: souls “having an immortal subsistence, immediately return to God” at death."
          ]
        ],
        "built": [
          "**Hell as endless torment** — an undying soul must suffer forever.",
          "**Heaven at death** — the soul flies upward, like Psyche on her wings.",
          "**A judgment at death — and then a second one.** If every soul is sentenced the day it dies, the Judgment “in the which he will judge the world” (Acts 17:31) becomes a retrial of people already serving their sentence. Scripture knows one judgment, and the dead come to it out of the grave: “death and hell delivered up the dead which were in them” (Revelation 20:13).",
          "**Purgatory, prayers for the dead, and praying to saints** — all require the dead to be awake somewhere."
        ],
        "verse": {
          "ref": "Acts 2:27",
          "text": "Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption."
        },
        "taught": [
          "When Jesus died, His soul stayed awake and went down to hell for three days. Some say He preached there. Some say He suffered there. The Apostles’ Creed says, “he descended into hell.” This verse is used to prove that the soul keeps living after the body dies."
        ],
        "reread": [
          "Now read it again the way David meant it: *“You will not leave My life in the grave. You will not let My body decay.”*",
          "Peter explains it himself a few verses later: “his soul was not left in hell, neither his flesh did see corruption” (Acts 2:31). Then he says David is still dead and buried, and his tomb is still there — “David is not ascended into the heavens” (Acts 2:29, 34). This verse is not about a soul visiting the underworld. It is about a body that walked out of the tomb on the third day."
        ]
      },
      {
        "id": "pneuma",
        "greek": "Pneuma",
        "kjv": "spirit",
        "role": "The fallback",
        "word": [
          "*Pneuma* (G4151) means breath or wind. But Greek philosophers called the Stoics taught that pneuma was a fiery, divine breath running through the whole universe. A man’s spirit, they said, was a spark of that fire, and at death it went back to join the great fire. When the church read “spirit” that way, the word stopped meaning breath. It became a second self that lives on after the body dies."
        ],
        "hebrew": [
          "Yahushua was quoting David: “Into thine hand I commit my spirit” (Psalm 31:5). The Hebrew word is *ruach* (H7307). It means breath or wind. And man and beast have the same ruach: “as the one dieth, so dieth the other; yea, they have all one breath” (Ecclesiastes 3:19). If a man’s ruach is a thinking person that lives on, so is a cow’s.",
          "Solomon tells us where the breath goes at death: “Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it” (Ecclesiastes 12:7). The dust goes back to the ground it came from. The breath goes back to the One who gave it. Neither one goes back thinking: “His breath goeth forth, he returneth to his earth; in that very day his thoughts perish” (Psalm 146:4)."
        ],
        "timeline": [
          [
            "c. 300 BC",
            "The Stoics",
            "Pneuma is divine fire; the human spirit is a spark of it that survives the body."
          ],
          [
            "c. 230 AD",
            "Origen",
            "Divides man into body, soul, and spirit."
          ],
          [
            "1909",
            "Scofield Reference Bible",
            "Its note on 1 Thessalonians 5:23 teaches man as three parts — spirit, soul, and body — to millions of Protestant readers."
          ],
          [
            "Today",
            "The pulpit",
            "When the soul argument fails: “Well, the spirit lives on.”"
          ]
        ],
        "built": [
          "**The “spirit lives on” fallback** — the same undying self, moved to a new word.",
          "**The spirit going to heaven at death** — Ecclesiastes 12:7 read through the Stoics instead of through Genesis 2:7."
        ],
        "verse": {
          "ref": "Luke 23:46",
          "text": "And when Jesus had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost."
        },
        "taught": [
          "When Jesus died, His spirit left His body and went straight to the Father in heaven, while His body lay in the tomb. This verse is used to prove that every believer’s spirit does the same. The moment you die, your spirit flies home to God, awake and aware. And when someone shows that the soul can die, the answer comes back: “Well, the spirit lives on.”"
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“Father, I give My breath back into Your hands. I trust You to give it back to Me.”*",
          "Three days later He said so Himself. When Mary reached for Him outside the tomb, He told her: “Touch me not; for I am not yet ascended to my Father” (John 20:17). His spirit had not flown to heaven on the day He died. He lay dead in the tomb, His life kept safe in His Father’s hand, until the Father raised Him up."
        ]
      },
      {
        "id": "athanasia",
        "greek": "Athanasia",
        "kjv": "immortality",
        "role": "The gods’ word",
        "word": [
          "*Athanasia* (G110) means deathlessness — not able to die. In Homer’s old Greek poems, the gods are simply called “the deathless ones.” Not being able to die was what made a god a god. Then Plato, the Greek philosopher, gave that same deathlessness to every human soul. So when the church read Paul’s word, it heard Plato: man already has it inside him."
        ],
        "hebrew": [
          "Paul tells us which verse he has in mind. In the very next line he says, “then shall be brought to pass the saying that is written, Death is swallowed up in victory” (1 Corinthians 15:54). He is quoting Isaiah: “He will swallow up death in victory” (Isaiah 25:8). The Hebrew word *bala* (H1104) means to swallow up, the way the earth swallowed Korah. “In victory” is *netsach* (H5331) — forever, for good. Yahuah will swallow up death for good. It is something He will do at the end, not something man already owns.",
          "Today Scripture gives deathlessness to One alone: Yahuah, “Who only hath immortality” (1 Timothy 6:16). Man has to seek it (Romans 2:7). And after the fall, man was kept away from the tree of life, “lest he put forth his hand, and take also of the tree of life, and eat, and live for ever” (Genesis 3:22). He did not have it, and he was not allowed to take it."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The gods are “the athanatoi,” the deathless ones."
          ],
          [
            "c. 380 BC",
            "Plato",
            "The human soul is athanatos by nature (Phaedo)."
          ],
          [
            "c. 150 AD",
            "Justin Martyr",
            "Still pushes back: souls are not immortal by their own nature (Dialogue with Trypho 5)."
          ],
          [
            "c. 210 AD",
            "Tertullian",
            "Accepts the soul’s immortality, and the pushback fades."
          ],
          [
            "1513",
            "Rome",
            "Immortality of the soul defined as dogma (Fifth Lateran Council)."
          ]
        ],
        "built": [
          "**Man given the mark of a god** — a nature that cannot die.",
          "**A resurrection made almost unnecessary** — if the soul already lives on, the raising of the dead becomes an afterthought instead of the hope."
        ],
        "verse": {
          "ref": "1 Corinthians 15:53",
          "text": "For this corruptible must put on incorruption, and this mortal must put on immortality."
        },
        "taught": [
          "Your soul is already immortal. It was made that way and it can never die. This verse is only about the body catching up. At the resurrection your body will finally become as deathless as your soul already is."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“This body that dies has to be clothed with deathlessness. It does not have it yet. It will receive it on the day Yahuah swallows up death for good.”*",
          "You only put on what you do not already have. And Paul says what would happen to the dead if there were no resurrection: “Then they also which are fallen asleep in Christ are perished” (1 Corinthians 15:18). If the soul lived on anyway, they could not perish. Paul’s whole hope for the dead is the resurrection, because without it they are gone."
        ]
      },
      {
        "id": "daimonion",
        "greek": "Daimonion",
        "kjv": "devil",
        "role": "The spirits of the dead",
        "word": [
          "*Daimonion* (G1140) is the word the KJV renders “devils.” To the Greeks, a daimōn was a spirit being — and very often the soul of someone who had died. The Greek poet Hesiod taught that the good men of a golden age long ago became daimones when they died. Now, he said, they roam the earth unseen, watching over the living (*Works and Days* 121–126). So a Greek reader heard this word and pictured the spirits of the dead, unseen but near."
        ],
        "hebrew": [
          "But Paul is quoting Moses: “They sacrificed unto devils, not to God; to gods whom they knew not, to new gods that came newly up, whom your fathers feared not” (Deuteronomy 32:17). The Hebrew word is *shedim* (H7700). Moses tells us what they are: false gods — “gods whom they knew not,” the idols of the nations. Nothing in the verse is about the spirits of the dead.",
          "The prophets forbid seeking the dead at all: “should not a people seek unto their God? for the living to the dead?” (Isaiah 8:19). Yahuah’s people go to Him, not to the dead."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "The dead of the golden age become daimones, guardians of the living."
          ],
          [
            "c. 385 BC",
            "Plato",
            "Daimones carry messages between gods and men (Symposium 202e)."
          ],
          [
            "c. 593 AD",
            "Gregory the Great",
            "His Dialogues fill the church with stories of souls of the dead appearing to the living."
          ],
          [
            "1848",
            "Spiritualism",
            "The séance movement begins in New York and spreads through Protestant America."
          ],
          [
            "Today",
            "The funeral",
            "“She’s watching over us now.”"
          ]
        ],
        "built": [
          "**Loved ones watching over the living** — Hesiod’s guardians, preached at funerals.",
          "**Séances and spirit contact** — the very thing Deuteronomy 18 forbids."
        ],
        "verse": {
          "ref": "1 Corinthians 10:20",
          "text": "But I say, that the things which the Gentiles sacrifice, they sacrifice to devils, and not to God: and I would not that ye should have fellowship with devils."
        },
        "taught": [
          "Behind every idol stands a living spirit, a demon roaming the earth. Many teachers go further and say demons are spirits without bodies — the restless spirits of beings who died, wandering and looking for a home. And at the funeral the same idea turns gentle: Grandma is still near, watching over us."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“What the nations offer to their idols, they offer to the false gods Moses warned about, not to Elohim. I do not want you to have any part with them.”*",
          "Paul keeps reading from the same song of Moses in the next breath: “Do we provoke the Lord to jealousy?” (1 Corinthians 10:22). Moses had written, “They have moved me to jealousy with that which is not God” (Deuteronomy 32:21). Paul is warning about idol worship, Israel’s oldest sin. He is not saying the dead are wandering near us. Solomon settled that: “the dead know not any thing” (Ecclesiastes 9:5)."
        ]
      },
      {
        "id": "phantasma",
        "greek": "Phantasma",
        "kjv": "spirit",
        "role": "The ghost",
        "word": [
          "The Greek copy of Matthew uses *phantasma* (G5326) here. It means an apparition — a ghost. The Greeks believed the dead could be seen. In Homer’s *Odyssey* the shades of the dead rise up from the underworld to speak with the hero (book 11). Plato wrote that the souls of wicked men hang around graves and are seen there as ghostly shapes, *phantasmata* (*Phaedo* 81d). So a Greek reader took this verse as one more ghost story."
        ],
        "hebrew": [
          "Whatever the frightened fishermen shouted in their own tongue, the Scriptures they grew up on had already answered it. The dead do not come back to visit: “he that goeth down to the grave shall come up no more. He shall return no more to his house” (Job 7:9–10). The Hebrew word for grave is *Sheol* (H7585).",
          "And the prophets warned against reaching for the dead: “Seek unto them that have familiar spirits… should not a people seek unto their God? for the living to the dead?” (Isaiah 8:19). “Familiar spirit” is *ob* (H178), the ghost-voice a medium claims to call up. Yahuah’s people were told to have nothing to do with it."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The shades of the dead rise to speak with Odysseus."
          ],
          [
            "c. 30 AD",
            "The disciples",
            "Cry “phantasma” on the water — a superstition Yahushua corrected."
          ],
          [
            "c. 593 AD",
            "Gregory the Great",
            "Souls of the dead appear to the living in his Dialogues."
          ],
          [
            "Today",
            "Popular belief",
            "Ghosts, hauntings, and visits from the departed."
          ]
        ],
        "built": [
          "**Ghost belief** — the dead said to be awake, wandering, and able to appear.",
          "**Fear of the dead** — where Scripture says the dead sleep until the resurrection."
        ],
        "verse": {
          "ref": "Matthew 14:26",
          "text": "And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear."
        },
        "taught": [
          "Even the disciples believed in ghosts. They saw a figure on the water in the dark and thought it was a spirit of the dead. Many take this as proof that ghosts are real — the dead can come back and be seen. If the twelve believed it, why shouldn’t we?"
        ],
        "reread": [
          "Now read it again the way Matthew meant it: *“When the disciples saw Him walking on the sea, they were terrified and cried out, ‘It’s a ghost!’”* Matthew is telling us what they were afraid of. He is not teaching that ghosts are real.",
          "Yahushua answered their fear at once: “Be of good cheer; it is I; be not afraid” (Matthew 14:27). When they thought the same thing after He rose, He showed them His hands and feet: “handle me, and see; for a spirit hath not flesh and bones, as ye see me have” (Luke 24:39). He did not come back as a ghost. He came back in a body, raised from the dead."
        ]
      },
      {
        "id": "nous",
        "greek": "Nous",
        "kjv": "mind",
        "role": "The last refuge",
        "word": [
          "*Nous* (G3563) means mind. Greek philosophers made it the highest part of man. Plato taught that the thinking part of the soul is divine and cannot die, and that the body is its prison. Aristotle said the active mind alone is “immortal and eternal” (*On the Soul* 3.5). Read through those men, Paul’s “mind” becomes the real person, trapped in flesh and waiting to escape."
        ],
        "hebrew": [
          "Paul tells us what he means three verses earlier: “For I delight in the law of God after the inward man” (Romans 7:22). That is David’s language. David did not keep Yahuah’s word in an undying mind. He kept it in his heart: “Thy word have I hid in mine heart, that I might not sin against thee” (Psalm 119:11). The Hebrew word is *lev* (H3820), the heart — the inner man who thinks, chooses, and loves Yahuah’s Torah.",
          "And the Hebrew heart dies with the man: “His breath goeth forth, he returneth to his earth; in that very day his thoughts perish” (Psalm 146:4). There is no mind that slips out of the body and keeps on thinking."
        ],
        "timeline": [
          [
            "c. 450 BC",
            "Anaxagoras",
            "Nous, a cosmic Mind, orders all things."
          ],
          [
            "c. 360 BC",
            "Plato",
            "The reasoning part of the soul is divine and immortal (Timaeus)."
          ],
          [
            "c. 330 BC",
            "Aristotle",
            "The active mind alone is “immortal and eternal” (On the Soul 3.5)."
          ],
          [
            "1641",
            "Descartes",
            "“I think”: the mind a separate substance from the body (Meditations)."
          ],
          [
            "Today",
            "The near-death story",
            "“Your consciousness lives on after the brain stops.”"
          ]
        ],
        "built": [
          "**The mind that survives death** — Plato’s soul moved into the brain.",
          "**Consciousness after death** — the near-death testimony treated as proof against Psalm 146:4."
        ],
        "verse": {
          "ref": "Romans 7:25",
          "text": "I thank God through Jesus Christ our Lord. So then with the mind I myself serve the law of God; but with the flesh the law of sin."
        },
        "taught": [
          "Paul is saying the real Paul is his mind. The body is only flesh, a shell that drags him down. When the body dies, the mind — the true person — is set free and keeps on thinking with God. Many say it this way: “You are a spirit, you have a soul, and you live in a body.”"
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“In my heart I choose to serve Yahuah’s Torah, but my flesh keeps pulling me toward sin.”*",
          "Paul never asks to escape his body. He asks for it to be rescued: “who shall deliver me from the body of this death?” (Romans 7:24). A few verses on he gives the answer — not a mind floating free, but a body raised up: “he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you” (Romans 8:11)."
        ]
      }
    ],
    "closing": [
      "Scripture places the hope of the dead in one event: the resurrection. “Many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt” (Daniel 12:2). Yahushua called death sleep (John 11:11–14), and said the dead would hear His voice and come out of the graves (John 5:28–29) — not down from heaven, and not up from a fire.",
      "The serpent said, “Ye shall not surely die.” Plato gave the lie a name, and six Greek words gave it a home in the Bible. The Torah says what it always said — the soul that sinneth, it shall die — and the one who is Yahuah’s shall rise. Revelation closes it: “And there shall be no more death, neither sorrow, nor crying” (Revelation 21:4)."
    ],
    "further": [
      [
        "The Old Paths: He Became a Living Soul",
        "/doctrines/old-paths/became-a-living-soul"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Scofield 1909 note on 1 Thessalonians 5:23 (three-part man)",
      "Gregory the Great, Dialogues book 4 (apparitions of the dead)",
      "Justin Martyr, Dialogue with Trypho 5 (souls not immortal by nature)"
    ]
  },
  "revelation-teaching": {
    "slug": "revelation-teaching",
    "title": "Revelation Teaching",
    "subtitle": "The End Times Narrative Was Written By Rome — Not the Prophets",
    "opening": [
      "Most churches tell the same end-times story. One day, without warning, the church vanishes in a secret rapture. Seven years of tribulation follow under a world ruler called the Antichrist. Then Jesus comes back a second time and rules on this earth for a thousand years. It is preached as if the apostles taught it.",
      "They did not. Protestants did not teach this story until the 1800s. Its root is a Jesuit priest, Francisco Ribera, who around 1590 pushed the Antichrist far into the future — away from Rome, where the Reformers had pointed. In the 1830s John Darby added a secret coming for the church before the trouble. In 1909 the Scofield Reference Bible printed the whole plan in the notes of millions of Bibles. Most of this doctrine came from those men, not from a word. But two Greek words were bent to hold it up.",
      "Two Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "parousia",
        "greek": "Parousia",
        "kjv": "coming",
        "role": "The root word",
        "verse": {
          "ref": "1 Thessalonians 4:15–17",
          "text": "For this we say unto you by the word of the Lord, that we which are alive and remain unto the coming of the Lord shall not prevent them which are asleep. For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."
        },
        "taught": [
          "This is the rapture. One day, without warning, Jesus will come secretly for His church. Believers will vanish — cars without drivers, planes without pilots. Seven years of tribulation follow for those left behind. Then Jesus comes back a second time, openly, to rule the earth."
        ],
        "word": [
          "*Parousia* (G3952) means “arrival” or “presence.” In the Greek world it was the word for an emperor’s royal visit to a city. When Caesar came, the leading men went out through the gates to meet him on the road, then brought him back into the city with honor. Nothing about it was secret — a parousia was the loudest day of the year. Here the Greek meaning is not the problem. The problem came much later, when teachers cut this one word away from its partner, *epiphaneia*, and made it a second, hidden coming."
        ],
        "hebrew": [
          "Paul says the Lord comes “with the trump of God.” That is the *shofar* (H7782), Israel’s ram’s horn. And a few verses later Paul names the day: “the day of the Lord so cometh as a thief in the night” (1 Thessalonians 5:2). That is the prophets’ day of Yahuah. Joel joined the horn and the day together: “Blow ye the trumpet in Zion, and sound an alarm in my holy mountain: let all the inhabitants of the land tremble: for the day of Yahuah cometh, for it is nigh at hand” (Joel 2:1).",
          "The Hebrew word for day is *yom* (H3117). The prophets speak of one day of Yahuah — “the great and the terrible day of Yahuah” (Joel 2:31) — not two comings with seven years in between. And a shofar is blown so that everyone hears it."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“On the day of Yahuah, the Master comes down with a shout and the blast of the shofar. The dead rise first. Then we who are alive go out together to meet Him — like a city going out to welcome its King — and we stay with Him for ever.”*",
          "Paul’s own next words seal it. The day comes “as a thief” only for the careless: “But ye, brethren, are not in darkness, that that day should overtake you as a thief” (1 Thessalonians 5:4). A shout, an archangel, a trumpet, and the dead rising out of their graves. Whatever this is, it is not secret — and it is the last day, not the first of seven years."
        ],
        "timeline": [
          [
            "1st century",
            "The empire",
            "Parousia names Caesar’s royal visit to a city."
          ],
          [
            "c. 1590",
            "Francisco Ribera",
            "A Jesuit priest moves most of Revelation into a future three and a half years under one Antichrist."
          ],
          [
            "1830s",
            "John Darby",
            "Teaches a secret coming for the church before the tribulation, and another coming after it."
          ],
          [
            "1909",
            "Scofield Reference Bible",
            "Prints the two-coming plan in the notes of millions of Bibles."
          ],
          [
            "1970–1995",
            "Popular books",
            "The Late Great Planet Earth and the Left Behind novels make the rapture a household word."
          ],
          [
            "Today",
            "The pulpit",
            "“Jesus could come for His church at any moment — before the tribulation.”"
          ]
        ],
        "built": [
          "**The secret rapture** — a hidden coming for the church, before the real one.",
          "**Two second comings** — one for the church, one seven years later for the world.",
          "**Escape instead of endurance** — believers told they will be gone before trouble comes, though Yahushua said, “he that shall endure unto the end, the same shall be saved” (Matthew 24:13)."
        ]
      },
      {
        "id": "epiphaneia",
        "greek": "Epiphaneia",
        "kjv": "appearing",
        "role": "The god made manifest",
        "verse": {
          "ref": "2 Thessalonians 2:8",
          "text": "And then shall that Wicked be revealed, whom the Lord shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming:"
        },
        "taught": [
          "Second Thessalonians 2 is preached as a timetable. First the church is raptured — “he who now letteth” is taken out of the way (2 Thessalonians 2:7). Then the Antichrist is revealed and rules for seven years. At the end of the tribulation Jesus comes back in glory and destroys him. This verse, they say, is that later coming — the “glorious appearing,” seven years after the rapture."
        ],
        "word": [
          "*Epiphaneia* (G2015) — “brightness” here, “appearing” in other verses — was the Greek word for a god showing himself in power. The Greek king Antiochus IV, who set up a pagan altar in Yahuah’s temple, named himself Epiphanes — “god made manifest.” Later teachers took Paul’s two words and gave each its own event: a quiet parousia for the church, then an epiphaneia seven years later. But in this very verse Paul puts the two words side by side: “the brightness of his coming” — the epiphaneia of His parousia. One event, not two."
        ],
        "hebrew": [
          "Paul is quoting Isaiah: “and with the breath of his lips shall he slay the wicked” (Isaiah 11:4). “The spirit of his mouth” is the Hebrew *ruach* (H7307) — breath, wind, spirit. The Branch from Jesse’s root kills the wicked one by the word of His mouth.",
          "And the appearing is Isaiah’s too: “And the glory of Yahuah shall be revealed, and all flesh shall see it together: for the mouth of Yahuah hath spoken it” (Isaiah 40:5). “Revealed” is *galah* (H1540) — uncovered, laid open. Yahuah’s glory is not shown to a few. All flesh sees it, together, at once."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“Then the lawless one will be uncovered, and the Master will slay him with the breath of His mouth and end him with the shining of His arrival — the one day when all flesh sees the glory of Yahuah together.”*",
          "Look where Paul began the chapter: “by the coming of our Lord Jesus Christ, and by our gathering together unto him” (2 Thessalonians 2:1). The gathering — what the pulpit calls the rapture — and the coming that destroys the wicked one are the same parousia, in the same chapter. And Paul says the gathering does not come first: “that day shall not come, except there come a falling away first, and that man of sin be revealed” (2 Thessalonians 2:3). No church is taken away before the man of sin appears."
        ],
        "timeline": [
          [
            "175 BC",
            "Antiochus IV",
            "The Greek king of Syria takes the name Epiphanes, “god made manifest.”"
          ],
          [
            "c. 167 BC",
            "Jerusalem",
            "Antiochus sets up a pagan altar in Yahuah’s temple."
          ],
          [
            "c. 1590",
            "Francisco Ribera",
            "Pushes the man of sin into the distant future — one Antichrist still to come, not Rome."
          ],
          [
            "1830s",
            "John Darby",
            "Teaches that the church is taken away before the man of sin appears."
          ],
          [
            "1909",
            "Scofield Reference Bible",
            "Its notes split the rapture from the coming in glory seven years later."
          ],
          [
            "Today",
            "The pulpit",
            "“The church will be gone before the Antichrist shows up.”"
          ]
        ],
        "built": [
          "**A future seven-year tribulation** — Daniel’s seventieth week cut away from Messiah and pushed two thousand years ahead.",
          "**A future Antichrist** — the man of sin moved off the stage of history and into the future, just where Ribera put him."
        ]
      }
    ],
    "closing": [
      "The old path reads Revelation the way it was written — out of the Law and the Prophets. The book brings no new symbol; every image has an address in Moses, Daniel, Ezekiel, and Zechariah. And Daniel’s seventieth week is not waiting in the future. It was fulfilled in Messiah: “in the midst of the week he shall cause the sacrifice and the oblation to cease” (Daniel 9:27), when He died at Pesach. There is no gap, no seven years left over, and no thousand-year kingdom on this earth.",
      "There is one coming, on one day, and the whole world sees it. When He comes He raises the dead, ends death, and holds the judgment. Ribera, Darby, and Scofield gave the church an escape plan; the prophets gave it a day. Revelation opens with that day: “Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen” (Revelation 1:7)."
    ],
    "further": [
      [
        "The Old Paths: The Book Quotes",
        "/doctrines/old-paths/the-book-quotes"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Ribera: his Revelation commentary is usually dated 1590 (published at Salamanca c. 1591–1593). The motive “away from Rome, where the Reformers had pointed” is the standard Protestant account; Ribera did place a single Antichrist in a future 3½ years.",
      "“Protestants did not teach this story until the 1800s” — some Protestants (e.g. S. R. Maitland, James Todd) took up futurism in the 1820s–30s; the pretribulation rapture is generally traced to Darby in the 1830s.",
      "The parousia/epiphaneia split is attributed in the input to “dispensational teaching” generally; the tabs say “later teachers,” not Darby by name. Confirm whether to name a source.",
      "Scofield (1909): notes teach a pretribulation rapture and a later return in glory; confirm wording “split the rapture from the coming in glory” against a specific note before naming one.",
      "Antiochus IV: reign from 175 BC; temple altar 167 BC (1 Maccabees 1:54). Kept separate from any Daniel 8 identification, given the house reading of Daniel.",
      "Lindsey, The Late Great Planet Earth (1970); LaHaye and Jenkins, Left Behind (1995).",
      "Joel 2:1, Joel 2:31, Isaiah 40:5 quoted with Yahuah for the KJV’s LORD."
    ]
  },
  "going-to-heaven": {
    "slug": "going-to-heaven",
    "title": "Going to Heaven",
    "subtitle": "You’re Not Going Anywhere — And That’s Actually Good News",
    "opening": [
      "At nearly every funeral the preacher says it: she is in heaven now, looking down on us. Going to heaven when you die is the hope most churchgoers carry. The goal of the Christian life, they are told, is to leave this earth behind and live up there for ever.",
      "Scripture tells a different story. The dead sleep in the dust until the last day. Then Yahuah raises them in glorified bodies to live on a renewed earth. Abraham was promised land “for an everlasting possession” (Genesis 17:8), and that promise was never traded for a cloud. The resurrection is the believer’s hope — not a flight upward at death.",
      "Three Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "ouranos",
        "greek": "Ouranos",
        "kjv": "heaven",
        "role": "The root word",
        "verse": {
          "ref": "Matthew 5:3",
          "text": "Blessed are the poor in spirit: for theirs is the kingdom of heaven."
        },
        "taught": [
          "The kingdom of heaven is the place God’s people go when they die. Stay humble now, and one day you will live in heaven with God. The pulpit reads every “kingdom of heaven” as a home above the clouds. The Beatitudes become a promise of a ticket out of this world."
        ],
        "word": [
          "*Ouranos* (G3772) was a god before it was a sky. In Hesiod’s poem about the birth of the gods, Ouranos is the Sky himself, the first king of heaven and father of the Titans. Plato later taught that a soul which lived well would go back up to live in its own star. So to a Greek reader, heaven was where the good soul came from and where it goes home. Read that way, “the kingdom of heaven” is a place up there that you go to."
        ],
        "hebrew": [
          "Yahushua spoke these words in Hebrew, and two verses later He quotes David: “Blessed are the meek: for they shall inherit the earth” (Matthew 5:5). David wrote it first: “But the meek shall inherit the earth; and shall delight themselves in the abundance of peace” (Psalm 37:11). The poor in spirit and the meek are the same people. One verse says the kingdom of heaven is theirs. The other says the earth is.",
          "The Hebrew word for heaven is *shamayim* (H8064). It is Yahuah’s throne: “The heaven is my throne, and the earth is my footstool” (Isaiah 66:1). And David says who lives where: “The heaven, even the heavens, are Yahuah’s: but the earth hath he given to the children of men” (Psalm 115:16). The kingdom of heaven is the kingdom that comes *from* heaven — Yahuah’s rule — not a place men move to."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“Happy are the poor in spirit, for the rule of Yahuah — the kingdom that comes down from His throne — belongs to them.”*",
          "He taught the same people how to pray for it: “Thy kingdom come. Thy will be done in earth, as it is in heaven” (Matthew 6:10). The kingdom comes here. Nobody prays for a kingdom to come to them if they are about to leave for it."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "Ouranos, the Sky, is the first king of the gods."
          ],
          [
            "c. 360 BC",
            "Plato",
            "The soul that lived well returns to dwell in its own star (Timaeus 42b)."
          ],
          [
            "1646",
            "Westminster",
            "The souls of the righteous are “received into the highest heavens” at death."
          ],
          [
            "1898",
            "A hymn",
            "“When We All Get to Heaven” — the hope set above the clouds."
          ],
          [
            "Today",
            "The pulpit",
            "“She’s in heaven now, looking down on us.”"
          ]
        ],
        "built": [
          "**Heaven at death** — the soul flies upward the moment the body dies.",
          "**A gospel of leaving** — the earth written off as a waiting room, though Yahuah gave it to the children of men."
        ]
      },
      {
        "id": "paradeisos",
        "greek": "Paradeisos",
        "kjv": "paradise",
        "role": "The king’s garden",
        "verse": {
          "ref": "Luke 23:43",
          "text": "And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise."
        },
        "taught": [
          "The thief on the cross died and went straight to heaven that same day. This verse is read at funerals to prove the dead are with Jesus right now. Paradise is heaven — a resting place above where souls wait for the end. If a thief could go there the day he died, the pulpit says, so will every believer."
        ],
        "word": [
          "*Paradeisos* (G3857) came from Persia. It was the word for a king’s walled park — a royal garden with trees, water, and animals. The Greek writer Xenophon used it for the Persian kings’ parks. The Greek Torah then used it for the garden of Eden. Later teachers lifted the garden into the sky and made it a waiting room for the souls of the dead. That is the paradise the pulpit sees in this verse."
        ],
        "hebrew": [
          "The Hebrew word beneath is *gan* (H1588), a garden. The first paradise was planted on the earth: “And Yahuah Elohim planted a garden eastward in Eden; and there he put the man whom he had formed” (Genesis 2:8). Where the Greek Torah says paradeisos, Moses wrote gan.",
          "Scripture never moves that garden into the sky. It brings it back. John hears of “the tree of life, which is in the midst of the paradise of God” (Revelation 2:7), and then sees that tree beside the river in the city that comes down to the earth (Revelation 22:1–2). And the thief had not asked to go to heaven. He asked for the kingdom: “Lord, remember me when thou comest into thy kingdom” (Luke 23:42)."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“I tell you today — on this day, with both of us dying — you will be with Me in the garden, when I come in My kingdom.”*",
          "The Greek copies were written without commas; where the comma goes is a translator’s choice. And Yahushua Himself did not go to paradise that day. He lay in the tomb, and on the morning He rose He told Mary, “Touch me not; for I am not yet ascended to my Father” (John 20:17). The thief asked to be remembered when the kingdom comes. That is exactly what he was promised."
        ],
        "timeline": [
          [
            "c. 400 BC",
            "Xenophon",
            "Uses paradeisos for the Persian kings’ walled parks."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Greek Torah calls Eden’s garden a paradeisos (Genesis 2:8)."
          ],
          [
            "c. 210 AD",
            "Tertullian",
            "Teaches that paradise already holds the souls of the martyrs."
          ],
          [
            "Today",
            "The pulpit",
            "“The thief went to heaven the day he died — and so will you.”"
          ]
        ],
        "built": [
          "**A heavenly waiting room** — souls resting in a paradise above until the end.",
          "**The deathbed ticket** — one last-minute prayer said to send a soul straight to heaven that day."
        ]
      },
      {
        "id": "makarios",
        "greek": "Makarios",
        "kjv": "blessed",
        "role": "The blessed dead",
        "verse": {
          "ref": "Revelation 14:13",
          "text": "And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them."
        },
        "taught": [
          "This verse is read at funerals. “Blessed are the dead” — they are happy now, in glory, free from pain, singing with the angels. The pulpit says our loved ones are already enjoying their reward. Their work on earth is done, and their joy in heaven has begun."
        ],
        "word": [
          "*Makarios* (G3107) means blessed or happy. In Homer, the *makares* — “the blessed ones” — were the gods themselves, living at ease on Olympus. Hesiod wrote of the Isles of the Blessed, where heroes went after death to a happy land at the edge of the world. So “the blessed dead” sounded to a Greek like heroes enjoying the good life somewhere far away. That is still the picture at most funerals."
        ],
        "hebrew": [
          "The Hebrew word beneath “blessed” is *ashrei* (H835). It comes from a root that means to walk straight ahead on the right path (H833). The first Psalm opens with it: “Blessed is the man that walketh not in the counsel of the ungodly.” Instead, “his delight is in the law of Yahuah” (Psalm 1:1–2). Blessed is not about where a man is. It is about how he walked.",
          "And the prophets say what the righteous dead do: they rest. “He shall enter into peace: they shall rest in their beds, each one walking in his uprightness” (Isaiah 57:2). Daniel was told the same: “But go thou thy way till the end be: for thou shalt rest, and stand in thy lot at the end of the days” (Daniel 12:13)."
        ],
        "reread": [
          "Now read it again the way John meant it: *“Happy are those who walked with Yahuah and die in the Master. From now on they rest from their labor, and the way they walked follows them.”*",
          "Look at the verse just before: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus” (Revelation 14:12). The blessed dead are the ones who walked in the commandments and held the testimony. They are not up in glory singing. They rest — like Daniel, until they stand in their lot at the end of the days."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The makares, “the blessed ones,” are the gods at ease on Olympus."
          ],
          [
            "c. 700 BC",
            "Hesiod",
            "Heroes go after death to the Isles of the Blessed (Works and Days 171)."
          ],
          [
            "c. 250 BC onward",
            "The Greek Psalms",
            "Makarios is put for ashrei: “Blessed is the man” (Psalm 1:1)."
          ],
          [
            "1646",
            "Westminster",
            "The souls of the righteous, “made perfect in holiness,” go at once to heaven."
          ],
          [
            "Today",
            "The funeral",
            "“Blessed are the dead — they are with the Lord now.”"
          ]
        ],
        "built": [
          "**The blessed dead in glory** — loved ones pictured as awake and rejoicing above.",
          "**Comfort without the resurrection** — the hope moved from the last day to the day of death."
        ]
      }
    ],
    "closing": [
      "The old path keeps the inheritance on the earth. “The righteous shall inherit the land, and dwell therein for ever” (Psalm 37:29). Job did not expect to fly away. He expected his Redeemer to stand on the earth: “For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth” (Job 19:25). The dead wait in the dust, and they rise when He comes.",
      "Plato sent the soul up to its star. Scripture brings heaven down. The meek inherit the earth, the garden returns, and the blessed dead rest until the morning of the resurrection. Revelation shows which way the city moves: “And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband” (Revelation 21:2)."
    ],
    "further": [
      [
        "The Old Paths: The Inheritance Is the Earth",
        "/doctrines/old-paths/inheritance-is-the-earth"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "ouranos: Plato, Timaeus 42b — paraphrased (the soul that lived well returns to dwell in its native star), not quoted.",
      "ouranos: Hesiod’s Theogony date c. 700 BC is approximate.",
      "ouranos / makarios: Westminster Confession 32.1 — “The souls of the righteous, being then made perfect in holiness, are received into the highest heavens.” Quoted fragments taken from this sentence.",
      "ouranos: “When We All Get to Heaven,” Eliza E. Hewitt, 1898.",
      "paradeisos: Xenophon uses paradeisos of Persian royal parks (e.g. Anabasis 1.2.7; Oeconomicus 4.13).",
      "paradeisos: Tertullian, On the Soul (De Anima) 55 — paradise holds only the martyrs’ souls before the resurrection; date c. 210 AD.",
      "paradeisos: “The Greek copies were written without commas” — the early uncials have little or no punctuation; the comma placement is editorial. Phrased so as not to overclaim.",
      "makarios: Hesiod, Works and Days 171 (Isles of the Blessed); Homer’s makares theoi.",
      "makarios: ashrei (H835) from ashar (H833), “to go straight / advance” — Strong’s gloss; confirm the root link is acceptable.",
      "Psalm 115:16, Psalm 1:2, Genesis 2:8 quoted with Yahuah for the KJV’s LORD (Genesis 2:8 as “Yahuah Elohim,” matching the approved opening sample)."
    ]
  },
  "the-trinity": {
    "slug": "the-trinity",
    "title": "The Trinity",
    "subtitle": "One Name, Not Three — The Doctrine That Rewrote the Father",
    "opening": [
      "One God in three persons — Father, Son, and Holy Ghost — co-equal, co-eternal, and sharing one substance. That is the Trinity. It is printed in the creeds, sung in the hymnbook, and used as the test of who is a true Christian. It was not set down by the apostles. It was fixed in place by church councils, beginning at Nicaea in 325, a council the Roman emperor Constantine called.",
      "Moses said something simpler: “Hear, O Israel: Yahuah our Elohim is one Yahuah” (Deuteronomy 6:4). Yahushua called it the first of all the commandments (Mark 12:29). Paul wrote, “to us there is but one God, the Father, of whom are all things” (1 Corinthians 8:6). The Son is the express image of that one God, and it pleased the Father that in Him all fullness should dwell.",
      "Twelve Greek words carried the Trinity in. Each one is opened below — where its meaning came from, what the Hebrew said, how it grew, and what it built. Choose a word."
    ],
    "tabs": [
      {
        "id": "logos",
        "greek": "Logos",
        "kjv": "Word",
        "role": "The root word",
        "verse": {
          "ref": "John 1:1",
          "text": "In the beginning was the Word, and the Word was with God, and the Word was God."
        },
        "taught": [
          "Jesus is the Word, so Jesus is God. Before the world was made, He stood beside the Father as a second divine person, equal in every way. At Bethlehem that second person came down and took a body. This verse is read as the plainest proof of the Trinity in the whole Bible."
        ],
        "word": [
          "The Greek copy of John uses *Logos* (G3056). About 500 BC a Greek philosopher named Heraclitus used logos for the “reason” that runs the whole universe. Later Greek thinkers called it a divine reason living in everything. Then Philo, a Jewish teacher in Egypt who loved Plato, called the logos “the second god.” By about 155 AD, Justin Martyr was teaching that there is “another God and Lord” beside the Maker. Read through that lens, “the Word was with God” turns into a second God standing next to the first."
        ],
        "hebrew": [
          "But John opens with the first words of Moses: “In the beginning.” And in Genesis, Yahuah makes the world one way. He speaks: “And God said, Let there be light: and there was light” (Genesis 1:3). David says it plainly: “By the word of Yahuah were the heavens made; and all the host of them by the breath of his mouth” (Psalm 33:6).",
          "The Hebrew word is *davar* (H1697). It means a spoken word, a promise, a thing said and meant. Yahuah’s davar is not a second person beside Him. It is Yahuah Himself speaking — His own mind going out of His mouth. “So shall my word be that goeth forth out of my mouth: it shall not return unto me void” (Isaiah 55:11)."
        ],
        "reread": [
          "Now read it again the way John meant it: *In the beginning Yahuah spoke. His word was with Him, the way a man’s word is with him. And His word was His own — what God was, His word was.*",
          "John tells us what happened to that word a few verses later: “And the Word was made flesh, and dwelt among us” (John 1:14). The promise Yahuah spoke in the beginning became a man, born in time — “the only begotten of the Father.” John is not describing two Gods. He is describing one God whose spoken word came to life in His Son."
        ],
        "timeline": [
          [
            "The beginning",
            "Yahuah",
            "He speaks, and the heavens are made (Psalm 33:6)."
          ],
          [
            "c. 500 BC",
            "Heraclitus",
            "A Greek philosopher calls the logos the reason that runs the universe."
          ],
          [
            "c. 40 AD",
            "Philo",
            "A Jewish teacher in Alexandria, steeped in Plato, calls the logos “the second god.”"
          ],
          [
            "c. 155 AD",
            "Justin Martyr",
            "Teaches “another God and Lord” beneath the Maker of all things."
          ],
          [
            "325",
            "Nicaea",
            "The creed names the Son “God of God,” a second divine one beside the Father."
          ],
          [
            "Today",
            "The pulpit",
            "“The Word is God the Son, the second person of the Trinity.”"
          ]
        ],
        "built": [
          "**A second divine person** — the Word turned from Yahuah’s voice into another God beside Him.",
          "**God the Son** — a title Scripture never uses, built on reading logos the way Philo read it."
        ]
      },
      {
        "id": "theotes",
        "greek": "Theotēs / Theiotēs",
        "kjv": "Godhead",
        "role": "The Godhead",
        "verse": {
          "ref": "Colossians 2:9",
          "text": "For in him dwelleth all the fulness of the Godhead bodily."
        },
        "taught": [
          "This verse proves Jesus is fully God. “The Godhead” means the Trinity — Father, Son, and Holy Ghost, three persons sharing one divine being. All of that lives in Jesus. So He is God the Son, one of the three."
        ],
        "word": [
          "The KJV word “Godhead” stands for three different Greek words. *Theotēs* (G2320) is here. *Theiotēs* (G2305) is in Romans 1:20. And *to theion*, “the divine,” is in Acts 17:29. To theion was the Greek philosophers’ word for a divine stuff that gods and spirits could share in. Church teachers in the 300s took theotēs and used it for the one divine being that three persons share. The old English word “godhead” simply meant “godhood” — being God, like “childhood” means being a child. It never meant a group of three."
        ],
        "hebrew": [
          "Paul explains his own words one chapter earlier: “For it pleased the Father that in him should all fulness dwell” (Colossians 1:19). Who put the fullness in the Son? The Father did, because He wanted to. The fullness is the Father’s own, and He gave it.",
          "Fullness is the Hebrew idea of *melo* (H4393) — everything that fills a thing. “The earth is Yahuah’s, and the fulness thereof” (Psalm 24:1). Yahuah’s glory once filled the tabernacle. Now His fullness lives in a man. Yahushua said the same: “the Father that dwelleth in me, he doeth the works” (John 14:10)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Everything that Yahuah is lives in this one man, in a real body, because the Father was pleased to put it there.*",
          "Look at the verse right before it: “Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men” (Colossians 2:8). Paul wrote that warning one breath before the verse the councils later filled with philosophy. The Son is “the image of the invisible God” (Colossians 1:15) — the one God, seen in His Son."
        ],
        "timeline": [
          [
            "c. 350 BC",
            "The philosophers",
            "To theion, “the divine,” names a divine essence that beings can share."
          ],
          [
            "c. 50 AD",
            "Paul at Athens",
            "Uses the Greeks’ own word to tell them God is not like gold or stone (Acts 17:29)."
          ],
          [
            "c. 380 AD",
            "Gregory of Nazianzus",
            "Teaches one theotēs, one Godhead, undivided in three persons."
          ],
          [
            "1611",
            "The King James Bible",
            "Puts “Godhead” for all three Greek words."
          ],
          [
            "Today",
            "The pulpit",
            "“The Godhead is the Father, the Son, and the Holy Ghost.”"
          ]
        ],
        "built": [
          "**The Godhead as a committee of three** — a word for “being God” turned into a name for three persons.",
          "**Colossians 2:9 as a Trinity proof** — though the verse before it warns against the philosophy behind it."
        ]
      },
      {
        "id": "ousia",
        "greek": "Ousia",
        "kjv": "substance, goods",
        "role": "The creed’s word",
        "verse": {
          "ref": "John 10:30",
          "text": "I and my Father are one."
        },
        "taught": [
          "This is the pulpit’s favorite proof. “One” means one substance — the Father and the Son are the same God, as the Nicene Creed says: “of one substance with the Father.” Jesus was claiming to be God. That is why the crowd picked up stones to kill Him."
        ],
        "word": [
          "The creed’s word is *homoousios*, “same substance.” It is built on *Ousia* (G3776). About 350 BC Aristotle used ousia for the essence of a thing — what it really is underneath. But ousia is not in this verse. The word here is simply “one.” In the whole Greek copy of the New Testament, ousia shows up in only two verses: the prodigal son’s “goods,” the money he wasted (Luke 15:12–13). The creed took a philosopher’s word and read it into a verse that does not contain it."
        ],
        "hebrew": [
          "Yahushua is talking about sheep. All of John 10 answers Ezekiel 34, where Yahuah promises: “And I will set up one shepherd over them, and he shall feed them, even my servant David” (Ezekiel 34:23). The shepherd is Yahuah’s servant, set over the flock by Yahuah. The Hebrew for “one” is *echad* (H259) — the same word as in “Yahuah our Elohim is one Yahuah.”",
          "Now read the verse just before: “My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father’s hand” (John 10:29). The Father gave the sheep. The Father is greater than all. The sheep sit in the Son’s hand and the Father’s hand at the same time — one grip, one purpose."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *My Father gave Me these sheep. He and I hold them together, as one. No one can take them from us.*",
          "When the crowd accused Him, Yahushua told them exactly what He had claimed: “I am the Son of God” (John 10:36) — not God the Son. And later He prayed for His followers “that they may be one, even as we are one” (John 17:22). If “one” meant one substance, the disciples would become one substance too. It means one in will and purpose."
        ],
        "timeline": [
          [
            "c. 350 BC",
            "Aristotle",
            "Uses ousia for the essence of a thing, what it is underneath."
          ],
          [
            "c. 30 AD",
            "Yahushua",
            "Uses the word only for a son’s inheritance, the goods he wasted (Luke 15:12–13)."
          ],
          [
            "268",
            "Synod of Antioch",
            "Reported to have rejected homoousios as an unfit word for the Son."
          ],
          [
            "325",
            "Nicaea",
            "The creed makes homoousios, “of one substance,” its key word."
          ],
          [
            "Today",
            "The pulpit",
            "“Very God of very God, of one substance with the Father.”"
          ]
        ],
        "built": [
          "**“One substance”** — the test word of the Nicene Creed, taken from Aristotle, not from Scripture.",
          "**John 10:30 as a Trinity proof** — though the next verses say “I am the Son of God.”"
        ]
      },
      {
        "id": "hypostasis",
        "greek": "Hypostasis",
        "kjv": "person, substance",
        "role": "Three persons",
        "verse": {
          "ref": "Hebrews 1:3",
          "text": "Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;"
        },
        "taught": [
          "There are two persons here, the Father and the Son, and the Holy Ghost makes three. Each one is a separate person, and each is fully God. One God in three persons. This verse is used to show that the Son is a person of the Godhead, equal with the Father."
        ],
        "word": [
          "The KJV word “person” here is *Hypostasis* (G5287). It means “what stands under” — the real thing, the reality. The KJV gives it as “substance” in Hebrews 11:1: “faith is the substance of things hoped for.” About 260 AD a Greek philosopher named Plotinus taught three hypostases at the top of everything: the One, the Mind, and the Soul. At Nicaea in 325, hypostasis still meant the same as ousia — the creed lists the two words side by side. About fifty years later, church teachers split them apart: one ousia, three hypostases. That became the formula of the Trinity."
        ],
        "hebrew": [
          "Two verses later, Hebrews quotes David’s Psalm: “Yahuah hath said unto me, Thou art my Son; this day have I begotten thee” (Psalm 2:7; Hebrews 1:5). A son has a father, and a begetting has a day.",
          "“Express image” is the Greek *charaktēr* (G5481), the mark a seal stamps into wax. The Hebrew idea is *tselem* (H6754), image: “So God created man in his own image” (Genesis 1:27). There is one seal. The stamp shows it exactly, but the stamp is not a second seal. Moses settled how many there are: “Hear, O Israel: Yahuah our Elohim is one Yahuah” (Deuteronomy 6:4). The Hebrew is *echad* (H259), one."
        ],
        "reread": [
          "Now read it again the way the writer meant it: *The Son carries His Father’s glory the way a lamp carries a flame, and He is the exact stamp of the Father’s own being — the one seal pressed into a man.*",
          "The writer says so in the opening lines: God “hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things” (Hebrews 1:2). The Son is appointed, made heir, and “made so much better than the angels” (Hebrews 1:4). The one doing the appointing is the one God. The Son is His perfect image, not a second person of a three-person God."
        ],
        "timeline": [
          [
            "c. 260 AD",
            "Plotinus",
            "Teaches three primal hypostases: the One, the Mind, the Soul (Enneads 5.1)."
          ],
          [
            "325",
            "Nicaea",
            "Hypostasis and ousia still mean the same thing; the creed lists them together."
          ],
          [
            "c. 375",
            "Basil of Caesarea",
            "Separates the words: one ousia, three hypostases."
          ],
          [
            "381",
            "Constantinople",
            "The council fixes the formula of three persons in one God."
          ],
          [
            "Today",
            "The pulpit",
            "“One God in three persons, blessed Trinity.”"
          ]
        ],
        "built": [
          "**Three persons in one God** — Plotinus’s three hypostases, given Bible names.",
          "**“Person” as a Bible word** — though the KJV uses it for hypostasis only here."
        ]
      },
      {
        "id": "physis",
        "greek": "Physis",
        "kjv": "nature",
        "role": "Two natures",
        "verse": {
          "ref": "2 Peter 1:4",
          "text": "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust."
        },
        "taught": [
          "Jesus has two natures, a divine nature and a human nature. He is fully God and fully man. The “divine nature” is God’s own being, which only God has. So when this verse says believers share in it, preachers hurry to say it cannot mean what it says."
        ],
        "word": [
          "*Physis* (G5449) means nature — how a thing grows and what it is like. It was the central word of Greek natural philosophy; our word “physics” comes from it. Greek thinkers spoke of “the divine nature” as the stuff gods are made of. In 451 the Council of Chalcedon declared that Christ exists “in two natures,” one divine and one human. From then on, “divine nature” meant “being God.” But Peter uses that very phrase of ordinary believers. If having the divine nature makes someone God, every believer is God — and no church teaches that."
        ],
        "hebrew": [
          "Peter is not talking philosophy. He is talking about promises — “exceeding great and precious promises.” Which promise? The one Yahuah gave through Ezekiel: “A new heart also will I give you, and a new spirit will I put within you … And I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them” (Ezekiel 36:26–27).",
          "The Hebrew word is *ruach* (H7307), breath or spirit. Sharing the divine nature means Yahuah’s own spirit placed inside a person, so that he walks the way Yahuah walks. It is His character, given — and it shows up as keeping His commandments."
        ],
        "reread": [
          "Now read it again the way Peter meant it: *Through His promises you can share Yahuah’s own character — His spirit put inside you — once you have escaped the rot that this world’s desires bring.*",
          "Peter goes right on to list what that looks like: virtue, knowledge, self-control, patience, godliness, kindness, love. Then he says, “if ye do these things, ye shall never fall” (2 Peter 1:10). The divine nature is something Yahuah gives. Yahushua said the same of Himself: “as the Father hath life in himself; so hath he given to the Son to have life in himself” (John 5:26)."
        ],
        "timeline": [
          [
            "c. 350 BC",
            "Aristotle",
            "Makes physis, nature, the center of Greek natural philosophy."
          ],
          [
            "c. 66 AD",
            "Peter",
            "Calls believers “partakers of the divine nature” — the gift of Yahuah’s promises."
          ],
          [
            "451",
            "Chalcedon",
            "Declares Christ one person “in two natures,” divine and human."
          ],
          [
            "Today",
            "The pulpit",
            "“Fully God and fully man — two natures in one person.”"
          ]
        ],
        "built": [
          "**Two natures in one person** — the formula of Chalcedon, built on a philosophers’ word.",
          "**A gift turned into a rank** — what Peter says Yahuah gives believers was made proof that the Son is God."
        ]
      },
      {
        "id": "monogenes",
        "greek": "Monogenēs",
        "kjv": "only begotten",
        "role": "Eternally begotten",
        "verse": {
          "ref": "John 3:16",
          "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
        },
        "taught": [
          "Jesus is God’s only begotten Son — “eternally begotten,” as the creed says, “begotten of the Father before all worlds.” He never had a beginning. He was always the Son, just as eternal as the Father. His sonship is a mystery that happened outside of time."
        ],
        "word": [
          "*Monogenēs* (G3439) means “one of a kind” — the only one of its sort. Plato used it at the end of his Timaeus for the cosmos, the one-of-a-kind offspring of his maker-god (Timaeus 92c). About 225 AD Origen taught that the Son is begotten eternally, with no beginning at all. The creed of 381 wrote that into its words: “begotten of the Father before all worlds” — a birth that never happened on any day."
        ],
        "hebrew": [
          "The Greek copy of Hebrews uses this same word for Isaac: Abraham “offered up his only begotten son” (Hebrews 11:17). But Abraham had another son, Ishmael. So monogenēs cannot mean the only son ever born. It points back to Moses: “Take now thy son, thine only son Isaac, whom thou lovest” (Genesis 22:2).",
          "The Hebrew word is *yachid* (H3173): only, one and only, the beloved one. Isaac was the son of promise, and he was born in time: Sarah “bare Abraham a son in his old age, at the set time of which God had spoken to him” (Genesis 21:2)."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *Yahuah loved the world so much that He gave His one beloved Son, the way Abraham offered Isaac, so that whoever trusts in Him will not perish but have life that does not end.*",
          "The next verse says who is doing the saving: “For God sent not his Son into the world to condemn the world; but that the world through him might be saved” (John 3:17). Yahuah gives and Yahuah sends. The Son is the beloved one He gave — the way through whom the world is saved. Abraham’s Moriah was the picture; Yahuah’s gift was the real thing."
        ],
        "timeline": [
          [
            "Moriah",
            "Abraham",
            "Offers Isaac, his yachid, his only son, born at the set time."
          ],
          [
            "c. 360 BC",
            "Plato",
            "Calls the cosmos monogenēs, the one-of-a-kind offspring (Timaeus 92c)."
          ],
          [
            "c. 225 AD",
            "Origen",
            "Teaches that the Son is begotten eternally, without beginning."
          ],
          [
            "381",
            "Constantinople",
            "The creed: “begotten of the Father before all worlds.”"
          ],
          [
            "Today",
            "The pulpit",
            "“Eternally begotten — He never had a beginning.”"
          ]
        ],
        "built": [
          "**Eternal generation** — a birth with no day, unknown to Moses or Psalm 2:7.",
          "**The Son as eternal as the Father** — the Father’s gift turned into a second eternal God."
        ]
      },
      {
        "id": "morphe",
        "greek": "Morphē",
        "kjv": "form",
        "role": "Equal with God",
        "verse": {
          "ref": "Philippians 2:6",
          "text": "Who, being in the form of God, thought it not robbery to be equal with God:"
        },
        "taught": [
          "This proves Jesus was God before He came to earth. “The form of God” means He had God’s very nature. He was equal with God and had every right to say so. Then He laid aside His glory for a while and became a man — fully God and fully man."
        ],
        "word": [
          "*Morphē* (G3444) means form, the shape a thing takes. About 350 BC Aristotle used it for the inner essence that makes a thing what it is. Read with Aristotle, “form of God” means “essence of God,” and so “God.” But Paul uses the same word in the very next verse: “took upon him the form of a servant” (Philippians 2:7). If form means essence, the Son was a slave by essence. “Robbery” is *harpagmos* (G725), something seized or grabbed."
        ],
        "hebrew": [
          "Paul is setting the Son beside the first man. Moses wrote: “So God created man in his own image, in the image of God created he him” (Genesis 1:27). The Hebrew words are *tselem* (H6754), image, and *demuth* (H1823), likeness. Adam bore the image of God.",
          "Then the serpent offered Adam a prize to grab: “ye shall be as gods” (Genesis 3:5). Adam reached for equality with God and took it. The Son, also bearing God’s image, did the opposite. He did not grab."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Though He bore the image of Yahuah, He did not reach out and grab at being equal with Yahuah, the way Adam did. He emptied Himself and took the form of a servant.*",
          "Paul finishes the thought himself: “Wherefore God also hath highly exalted him, and given him a name which is above every name … to the glory of God the Father” (Philippians 2:9, 11). The Son did not take a high place. God gave it to Him, and the glory goes to the Father."
        ],
        "timeline": [
          [
            "The Garden",
            "Adam",
            "Made in the image of God, he grabs at being “as gods” (Genesis 3:5)."
          ],
          [
            "c. 350 BC",
            "Aristotle",
            "Uses morphē for the inner essence that makes a thing what it is."
          ],
          [
            "c. 61 AD",
            "Paul",
            "Sets the Son beside Adam: He bore the image and did not grab."
          ],
          [
            "451",
            "Chalcedon",
            "The Son is declared “perfect in Godhead and also perfect in manhood.”"
          ],
          [
            "Today",
            "The pulpit",
            "“Philippians 2 proves Jesus is God.”"
          ]
        ],
        "built": [
          "**The God-man** — “form” read as essence, so the Son must be God by nature.",
          "**A lesson in humility turned into a proof text** — Paul’s “let this mind be in you” (Philippians 2:5) lost behind a debate about substance."
        ]
      },
      {
        "id": "oikonomia-trinity",
        "greek": "Oikonomia",
        "kjv": "dispensation",
        "role": "One into three",
        "verse": {
          "ref": "Ephesians 3:2",
          "text": "If ye have heard of the dispensation of the grace of God which is given me to you-ward:"
        },
        "taught": [
          "“Dispensation” is read as an age. God runs history in a set of dispensations, and we live in the Dispensation of Grace, when the Law no longer applies. Theology books use the same Greek word, “economy,” for how one God works as three persons: the Father plans, the Son carries it out, and the Spirit applies it."
        ],
        "word": [
          "*Oikonomia* (G3622) is a household word: *oikos*, a house, and *nomos*, a rule. It means running a household — the job of a steward. A Greek writer named Xenophon wrote a whole book about it, on managing a farm and its servants. About 213 AD Tertullian used this word for “the dispensation which distributes the Unity into a Trinity” (Against Praxeas 2). He was the first to use the word “trinity” for God. A house manager’s word became the plan for dividing one God into three."
        ],
        "hebrew": [
          "Yahushua used this word Himself, of a servant in charge: “give an account of thy stewardship; for thou mayest be no longer steward” (Luke 16:2). A steward is a servant set over his master’s house. Moses shows one: Joseph’s master “made him overseer over his house, and all that he had he put into his hand” (Genesis 39:4).",
          "The Hebrew word is *bayith* (H1004), house. Joseph ran the whole house, but the house was never his. That is Paul’s “dispensation” — a job handed to a servant. Paul says it again: “a dispensation of the gospel is committed unto me” (1 Corinthians 9:17), and “it is required in stewards, that a man be found faithful” (1 Corinthians 4:2)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *You have heard of the job Yahuah handed me — to carry His favor to you nations.*",
          "Paul says it plainly a few verses later: “Unto me, who am less than the least of all saints, is this grace given, that I should preach among the Gentiles the unsearchable riches of Christ” (Ephesians 3:8). A stewardship is a servant’s task. It is not a slice of God, and it is not an age in which Yahuah’s Law was put away."
        ],
        "timeline": [
          [
            "c. 370 BC",
            "Xenophon",
            "Writes a book on oikonomia — running a household and its servants."
          ],
          [
            "c. 60 AD",
            "Paul",
            "Calls his calling an oikonomia, a stewardship given him (Ephesians 3:2)."
          ],
          [
            "c. 213 AD",
            "Tertullian",
            "The “economy” that distributes the Unity into a Trinity (Against Praxeas 2)."
          ],
          [
            "1830s",
            "John Nelson Darby",
            "Divides history into dispensations, with the Law set aside for the church age."
          ],
          [
            "1967",
            "Karl Rahner",
            "“The economic Trinity is the immanent Trinity” becomes a rule of modern theology."
          ],
          [
            "Today",
            "The pulpit",
            "“The Father planned it, the Son did it, the Spirit applies it.”"
          ]
        ],
        "built": [
          "**The “economy” of the Trinity** — a steward’s job turned into the arrangement of God Himself.",
          "**Dispensations** — the same word stretched into ages, with the Law put away."
        ]
      },
      {
        "id": "hymnos",
        "greek": "Hymnos",
        "kjv": "hymn",
        "role": "The church’s songs",
        "verse": {
          "ref": "Colossians 3:16",
          "text": "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord."
        },
        "taught": [
          "This verse is read as a blessing on the hymnbook. Whatever the church sings, the Bible approves. So on Sunday the people sing, “Holy, holy, holy … God in three Persons, blessed Trinity!” and close with, “Praise Father, Son, and Holy Ghost.”"
        ],
        "word": [
          "*Hymnos* (G5215) was a Greek song of praise to a god. The Homeric Hymns, from about 600 BC, were sung to Apollo, Demeter, and Hermes. Later the church wrote its own hymns, and many of them carry the creed. Thomas Ken’s doxology in 1674 sang “Praise Father, Son, and Holy Ghost.” Reginald Heber’s “Holy, Holy, Holy” in 1826 sang “God in three Persons.” A song teaches deeper than a sermon. People who could never explain the Trinity can sing it word for word."
        ],
        "hebrew": [
          "Paul names the psalms first. Those are the *tehillim* — from *tehillah* (H8416), praise — the songs Yahuah gave His people. And Hebrews shows us who sings them: “I will declare thy name unto my brethren, in the midst of the church will I sing praise unto thee” (Hebrews 2:12).",
          "That is a quote of David: “I will declare thy name unto my brethren: in the midst of the congregation will I praise thee” (Psalm 22:22). The Hebrew word for praise is *halal* (H1984). The Greek copy puts *hymneō*, to sing a hymn. The one singing is the Son, standing among His brothers and praising His Father."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *Let Messiah’s words live in you richly. Teach and warn one another with the psalms, with songs of praise, and with songs the Spirit gives, singing with favor in your hearts to Yahuah.*",
          "Paul says where the praise goes in the next verse: “giving thanks to God and the Father by him” (Colossians 3:17). The Son leads the song, and the song goes to His Father. A hymn that sings “God in three Persons” has changed who is being praised."
        ],
        "timeline": [
          [
            "c. 1000 BC",
            "David",
            "Writes the tehillim, songs of praise to Yahuah."
          ],
          [
            "c. 600 BC",
            "The Homeric Hymns",
            "Songs of praise to Apollo, Demeter, and Hermes."
          ],
          [
            "c. 350 AD",
            "The church",
            "The “Glory be to the Father, and to the Son, and to the Holy Ghost” comes into use."
          ],
          [
            "1674",
            "Thomas Ken",
            "The doxology: “Praise Father, Son, and Holy Ghost.”"
          ],
          [
            "1826",
            "Reginald Heber",
            "“Holy, Holy, Holy … God in three Persons, blessed Trinity!”"
          ],
          [
            "Today",
            "The pew",
            "The Trinity is sung every Sunday by people never taught it from Scripture."
          ]
        ],
        "built": [
          "**Doctrine set to music** — the creed carried into the heart by melody, not by Scripture.",
          "**The psalms pushed aside** — the songs Yahuah gave replaced by songs men wrote."
        ]
      },
      {
        "id": "sophia",
        "greek": "Sophia",
        "kjv": "wisdom",
        "role": "A second Wisdom",
        "verse": {
          "ref": "1 Corinthians 1:24",
          "text": "But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God."
        },
        "taught": [
          "Christ is the Wisdom of God. Preachers tie this verse to Proverbs 8, where Wisdom says, “Yahuah possessed me in the beginning of his way.” So Wisdom is Jesus — the second person, with the Father before anything was made."
        ],
        "word": [
          "*Sophia* (G4678) means wisdom. Philo, the Jewish teacher in Egypt, spoke of Wisdom as standing beside God. In the 100s AD, teachers called Gnostics — who taught secret knowledge — made Sophia a heavenly being, one of many spirits that came out of God. About 155 AD Justin Martyr read the Wisdom of Proverbs 8 as a second divine person (Dialogue with Trypho 61). In 537 the emperor Justinian dedicated his great church in Constantinople to Hagia Sophia, “Holy Wisdom.”"
        ],
        "hebrew": [
          "Wisdom in the Hebrew is *chokmah* (H2451), and it belongs to Yahuah: “Yahuah by wisdom hath founded the earth; by understanding hath he established the heavens” (Proverbs 3:19). The Greek copy of Proverbs puts sophia for chokmah.",
          "In Proverbs 8, Wisdom is “her,” a woman calling in the streets: “Doth not wisdom cry? and understanding put forth her voice?” (Proverbs 8:1). In Proverbs 9 Wisdom builds “her house” — and right beside her stands Folly: “A foolish woman is clamorous” (Proverbs 9:13). Solomon is painting pictures. No one makes Folly a person."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *To the people Yahuah calls, Messiah is where Yahuah’s power and Yahuah’s wisdom are shown.*",
          "Paul says it again a few verses later: “Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption” (1 Corinthians 1:30). Messiah is made all four to us by God. No one says righteousness or redemption is a second person. Wisdom is not either."
        ],
        "timeline": [
          [
            "c. 950 BC",
            "Solomon",
            "Pictures Yahuah’s wisdom as a woman calling in the street."
          ],
          [
            "c. 150 AD",
            "The Gnostics",
            "Make Sophia a heavenly being, one of the spirits that came out of God."
          ],
          [
            "c. 155 AD",
            "Justin Martyr",
            "Reads the Wisdom of Proverbs 8 as a second divine person."
          ],
          [
            "325",
            "Nicaea",
            "Both sides of the great debate build on Proverbs 8:22."
          ],
          [
            "537",
            "Justinian",
            "Dedicates the great church of Hagia Sophia, “Holy Wisdom.”"
          ],
          [
            "Today",
            "The pulpit",
            "“Wisdom in Proverbs 8 is Jesus before He came to earth.”"
          ]
        ],
        "built": [
          "**Proverbs 8 as an eternal second person** — Solomon’s picture read as a divine being.",
          "**Holy Wisdom** — churches and prayers addressed to a personified Sophia."
        ]
      },
      {
        "id": "demiourgos",
        "greek": "Dēmiourgos",
        "kjv": "maker",
        "role": "A second maker",
        "verse": {
          "ref": "Hebrews 11:10",
          "text": "For he looked for a city which hath foundations, whose builder and maker is God."
        },
        "taught": [
          "Ask who built the world, and many churchgoers are taught that Jesus did. “All things were made by him.” The Father had the plan; the Son did the building. So when this verse says “builder and maker,” the pulpit hears the whole Trinity at work, with the Son as the builder."
        ],
        "word": [
          "*Dēmiourgos* (G1217) means a craftsman, a skilled worker. About 360 BC Plato made it the name of a craftsman-god — the Demiurge — who shapes the world from a pattern (Timaeus 28a). Plato’s highest god did not get his hands dirty; a lesser maker did the work. Philo then called the Logos the tool God used to make the world. Church teachers took up that pattern: a high God who plans, and a second divine one who builds. But in the whole Greek copy of the New Testament, dēmiourgos is used only once — here — and it is said of God."
        ],
        "hebrew": [
          "Isaiah answers Plato before Plato was born: “Thus saith Yahuah, thy redeemer, and he that formed thee from the womb, I am Yahuah that maketh all things; that stretcheth forth the heavens alone; that spreadeth abroad the earth by myself” (Isaiah 44:24).",
          "The Hebrew word for “maketh” is *asah* (H6213), to make or do. The word for “alone” is *bad* (H905), by Himself, with no one beside. There is no second maker in the Hebrew. Yahuah built the world with His own hands."
        ],
        "reread": [
          "Now read it again the way the writer meant it: *Abraham was waiting for a city with real foundations — one planned and built by Yahuah Himself.*",
          "The same chapter says how the world was made: “the worlds were framed by the word of God” (Hebrews 11:3) — by His speaking, as in Genesis. And it says who builds the city: “he hath prepared for them a city” (Hebrews 11:16). John saw it come “down from God out of heaven” (Revelation 21:2). One maker, and one city He made."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Isaiah",
            "Yahuah stretches out the heavens “alone” (Isaiah 44:24)."
          ],
          [
            "c. 360 BC",
            "Plato",
            "The Demiurge, a craftsman-god who shapes the world (Timaeus 28a)."
          ],
          [
            "c. 40 AD",
            "Philo",
            "Calls the Logos the instrument through which God made the world."
          ],
          [
            "325",
            "Nicaea",
            "The creed says of the Son, “by whom all things were made.”"
          ],
          [
            "Today",
            "The pulpit",
            "“The Father planned creation; the Son built it.”"
          ]
        ],
        "built": [
          "**A second craftsman beside the Father** — Plato’s Demiurge given a place in the creed.",
          "**Creation shared out** — though Yahuah said He made all things “alone” and “by myself.”"
        ]
      },
      {
        "id": "parakletos",
        "greek": "Paraklētos",
        "kjv": "Comforter, advocate",
        "role": "A third person",
        "verse": {
          "ref": "John 14:16",
          "text": "And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;"
        },
        "taught": [
          "The Holy Spirit is the third person of the Trinity. Jesus said “another Comforter,” so the Spirit must be someone other than Jesus and other than the Father. And the Bible calls the Spirit “he.” So the Spirit is a person, equal to the other two."
        ],
        "word": [
          "*Paraklētos* (G3875) comes from the Greek courts. It means one called to your side — a helper or advocate standing beside the accused. In Greek, paraklētos is a masculine word, so the Greek copy says “he” to match it. But the Greek word for spirit is not masculine, and the KJV says, “The Spirit itself beareth witness” (Romans 8:16). The creed of Nicaea in 325 said only, “And in the Holy Ghost.” Fifty-six years later, at Constantinople, the Spirit was declared worshiped and glorified together with the Father and the Son."
        ],
        "hebrew": [
          "The Hebrew behind “comfort” is *nacham* (H5162). “Comfort ye, comfort ye my people, saith your God” (Isaiah 40:1). And who is the Comforter? Yahuah says, “I, even I, am he that comforteth you” (Isaiah 51:12). In the Hebrew, the Comforter is Yahuah Himself, by His own Spirit.",
          "John uses the same Greek word for the Son: “we have an advocate with the Father, Jesus Christ the righteous” (1 John 2:1). So paraklētos is a role — standing beside — not the name of a third person."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *I will ask the Father, and He will give you another Helper at your side — His own Spirit of truth — so that you are never left alone.*",
          "Two verses later He says who is coming: “I will not leave you comfortless: I will come to you” (John 14:18). And a few verses after that: “my Father will love him, and we will come unto him, and make our abode with him” (John 14:23). The Father and the Son come to live with the believer by the Spirit. There is no third one named."
        ],
        "timeline": [
          [
            "c. 400 BC",
            "The Greek courts",
            "A paraklētos is a friend called to stand beside the accused."
          ],
          [
            "c. 30 AD",
            "Yahushua",
            "“I will not leave you comfortless: I will come to you” (John 14:18)."
          ],
          [
            "325",
            "Nicaea",
            "The creed says only, “And in the Holy Ghost.”"
          ],
          [
            "381",
            "Constantinople",
            "The Spirit is declared worshiped and glorified with the Father and the Son."
          ],
          [
            "589",
            "Toledo",
            "A Spanish council adds that the Spirit proceeds from the Father “and the Son.”"
          ],
          [
            "Today",
            "The pulpit",
            "“God the Holy Spirit, the third person of the Trinity.”"
          ]
        ],
        "built": [
          "**The third person** — a helper’s title and a grammar rule made into a separate God.",
          "**The completed Trinity** — added at Constantinople, fifty-six years after Nicaea."
        ]
      }
    ],
    "closing": [
      "The old path is one Yahuah. “I am Yahuah, and there is none else, there is no God beside me” (Isaiah 45:5). “I, even I, am Yahuah; and beside me there is no saviour” (Isaiah 43:11). Yahushua prayed to Him as “the only true God” and called Himself the one “whom thou hast sent” (John 17:3). The Son is the exact image of the Father, the light-bearer who carries the Father’s glory, the beloved Son in whom the Father’s fullness dwells. He is the way Yahuah opened. He is not a second or third God.",
      "The philosophers gave the church its words — logos, ousia, hypostasis, physis — and the councils fixed them in the creeds. Scripture never needed them. The Trinity has to be carried into the text, because it cannot be carried out of it. Revelation keeps the order to the very first line: “The Revelation of Jesus Christ, which God gave unto him” (Revelation 1:1)."
    ],
    "further": [
      [
        "The Old Paths: Hear, O Israel",
        "/doctrines/old-paths/hear-o-israel"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Philo’s “second god” (Questions on Genesis 2.62, preserved in Eusebius, Preparation for the Gospel 7.13) — confirm wording and reference.",
      "Justin Martyr, Dialogue with Trypho 56 (“another God and Lord”) and 61 (Wisdom of Proverbs 8 as a second power) — confirm chapter numbers.",
      "Synod of Antioch (268) rejecting homoousios — reported later by Athanasius and Hilary; the original acts do not survive. Phrased as “reported to.”",
      "Nicaea’s anathema listing hypostasis and ousia side by side as one meaning — confirm the Greek text of the 325 creed.",
      "Basil of Caesarea c. 375 as the one who separated ousia and hypostasis (Letters 214, 236) — the Cappadocian distinction; date approximate.",
      "Gregory of Nazianzus c. 380 using theotēs for one Godhead in three (Theological Orations) — confirm.",
      "Old English “godhead” meaning “godhood” (‑head = ‑hood) — confirm from a dictionary of English etymology.",
      "Origen c. 225 on eternal generation (On First Principles 1.2) — confirm.",
      "Plato, Timaeus 92c (monogenēs cosmos) and 28a (Demiurge) — confirm Stephanus numbers.",
      "Philo calling the Logos God’s “instrument” in making the world (On the Cherubim 127) — confirm.",
      "Tertullian, Against Praxeas 2: “the dispensation which distributes the Unity into a Trinity”; and Tertullian as first to use trinitas of God — confirm wording (Holmes translation) and the “first” claim (Theophilus of Antioch used the Greek trias earlier).",
      "Xenophon’s Oeconomicus dated c. 370 BC — approximate.",
      "Karl Rahner’s rule (“the economic Trinity is the immanent Trinity”), The Trinity, 1967 — confirm year.",
      "Glory Be (Gloria Patri) in use by c. 350 AD — approximate; Thomas Ken doxology dated 1674 and Heber’s “Holy, Holy, Holy” 1826 — confirm.",
      "Paraklētos as a term of the Athenian courts c. 400 BC (e.g., Demosthenes) — confirm an attestation.",
      "Council of Toledo (589) adding the filioque — confirm.",
      "Both sides at Nicaea arguing from Proverbs 8:22 — confirm (Arius and Athanasius, Against the Arians 2).",
      "Ousia (John 10:30 tab): the verse does not contain ousia; it was chosen because it is the pulpit’s proof for “one substance.” The tab says so openly. Swap to Luke 15:12 if a verse containing the word is required."
    ]
  },
  "purification-holiness": {
    "slug": "purification-holiness",
    "title": "Purification & Holiness",
    "subtitle": "Your Body Is the Temple — So Why Aren’t You Keeping It Clean?",
    "opening": [
      "The church teaches that holiness is something you are given, not something you do. God looks at you through Jesus, so you are already holy. The food laws were for the Jews, and they ended at the cross. Holiness became either a rank — the saints in the stained glass — or a feeling in the heart. Either way, nothing is asked of the plate.",
      "But Yahuah drew the line Himself, and He told the priests to teach it: “that ye may put difference between holy and unholy, and between unclean and clean” (Leviticus 10:10). Clean and unclean were taught, not guessed. When the priests stopped teaching it, Yahuah said, “Her priests have violated my law” (Ezekiel 22:26). Holiness in the Torah is something you walk in — and it starts with what you eat.",
      "Two Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "hagios",
        "greek": "Hagios / Hagnos",
        "kjv": "holy",
        "role": "The root word",
        "verse": {
          "ref": "1 Peter 1:15–16",
          "text": "But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy."
        },
        "taught": [
          "Be holy means be a good person. Don’t lie, don’t cheat, go to church. You are holy because you are in Christ, and God sees His Son when He looks at you. It has nothing to do with food — Jesus made all foods clean, and Peter saw a sheet full of animals to prove it."
        ],
        "word": [
          "The Greek copy uses *hagios* (G40), “holy.” Its cousin *hagnos* (G53) means “pure.” In the Greek temples, these words described a holy place, or a person made ritually clean to come before a god. The goddess Artemis was praised as *hagnē*, “the pure one.” Holiness was a temple status — something a priest or a ceremony gave you. The church kept that idea. Holiness became a rank given by the church, or a standing given by faith, with nothing to do in daily life."
        ],
        "hebrew": [
          "But Peter says plainly, “it is written.” He is quoting Moses, and the verse he picked closes the food laws: “For I am Yahuah your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy: neither shall ye defile yourselves with any manner of creeping thing that creepeth upon the earth” (Leviticus 11:44).",
          "The Hebrew word is *qadosh* (H6918). It means set apart — cut out from the rest and kept for one owner. Two verses later Moses tells us what the whole chapter was for: “To make a difference between the unclean and the clean, and between the beast that may be eaten and the beast that may not be eaten” (Leviticus 11:47). In Hebrew, being holy and eating clean are said in the same breath."
        ],
        "reread": [
          "Now read it again the way Peter meant it: *“The One who called you is set apart, so you be set apart in all your living — the way you walk, and what you put on your plate. Moses wrote it: be set apart, for I am set apart.”*",
          "Peter puts things in the right order. First, they were bought back “with the precious blood of Christ, as of a lamb without blemish and without spot” (1 Peter 1:19). Then they walk “as obedient children” (1 Peter 1:14). And this is the same Peter who said, years after the cross, “I have never eaten any thing that is common or unclean” (Acts 10:14). He learned what the sheet meant: “God hath shewed me that I should not call any man common or unclean” (Acts 10:28). It was about men, not menus."
        ],
        "timeline": [
          [
            "Sinai",
            "Moses",
            "“Ye shall be holy; for I am holy” closes the food laws (Leviticus 11:44)."
          ],
          [
            "c. 700 BC",
            "Homer",
            "The goddess Artemis is called hagnē, “the pure one.” Holiness is a temple word."
          ],
          [
            "c. 34 AD",
            "Peter",
            "After the cross: “I have never eaten any thing that is common or unclean” (Acts 10:14)."
          ],
          [
            "c. 130 AD",
            "The Epistle of Barnabas",
            "Turns the food laws into pictures of bad men, not food to avoid."
          ],
          [
            "993 AD",
            "Rome",
            "A pope formally declares a man a saint for the first time. Holiness becomes a rank."
          ],
          [
            "Today",
            "The pulpit",
            "“You are holy in Christ — now pass the ham.”"
          ]
        ],
        "built": [
          "**Saints as a rank** — holiness handed out by the church after death, when Moses spoke to “all the congregation” (Leviticus 19:2).",
          "**Holiness as a position** — declared over a person, with nothing asked of how he lives.",
          "**Nothing required of the plate** — “purging all meats” (Mark 7:19) and Peter’s sheet read as permission to eat anything."
        ]
      },
      {
        "id": "teleios",
        "greek": "Teleios",
        "kjv": "perfect",
        "role": "The initiate’s rank",
        "verse": {
          "ref": "Matthew 5:48",
          "text": "Be ye therefore perfect, even as your Father which is in heaven is perfect."
        },
        "taught": [
          "Nobody can be perfect. Jesus said this to show us that we can’t keep the Law, so we need grace. Other churches teach the opposite: a second blessing comes after you are saved, and it wipes out the sin inside you in a moment. Then you are “entirely sanctified.” Either way, perfect means sinless."
        ],
        "word": [
          "The Greek copy uses *teleios* (G5046). It means “finished” or “complete.” But the Greek mystery religions — secret cults with hidden rites — used the same word for their inner circle. A member who had gone through the final secret rite was one of the *teleioi*, “the perfected.” Perfect became a rank, a level you reach in one step. That is how the church came to hear it: a special experience that lifts you above ordinary believers."
        ],
        "hebrew": [
          "Yahushua was drawing on Moses: “Thou shalt be perfect with Yahuah thy God” (Deuteronomy 18:13). Yahuah said the same to Abram long before: “walk before me, and be thou perfect” (Genesis 17:1).",
          "The Hebrew word is *tamim* (H8549). It means whole, sound, upright — like a lamb with nothing missing. It is the word for the man who walks with Yahuah with his whole heart and does not split it with other gods. In Deuteronomy, Moses had just warned Israel against the fortune-tellers and charmers of the nations (Deuteronomy 18:9–12). Being tamim meant walking with Yahuah alone. The psalm says it best: “Blessed are the undefiled in the way, who walk in the law of Yahuah” (Psalm 119:1). “Undefiled” is the same word."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“So be whole-hearted — walk with your Father with nothing held back, the way your Father in heaven is whole.”*",
          "Look at the verses just before it. Yahushua is talking about loving your enemies, because the Father “maketh his sun to rise on the evil and on the good” (Matthew 5:45). Perfect is a way of walking, not a rank. Later a rich young man asked how to enter life. Yahushua said, “keep the commandments,” and then, “If thou wilt be perfect, go and sell that thou hast” (Matthew 19:17, 21). Perfect begins with the commandments. It is a whole heart that holds nothing back."
        ],
        "timeline": [
          [
            "c. 1900 BC",
            "Abram",
            "“Walk before me, and be thou perfect” (Genesis 17:1)."
          ],
          [
            "Before Messiah",
            "The mystery cults",
            "Members who pass the final secret rite are called “the perfected.”"
          ],
          [
            "c. 200 AD",
            "Clement of Alexandria",
            "Borrows the language of the mysteries and calls the mature believer “the perfect” one."
          ],
          [
            "1766",
            "John Wesley",
            "Publishes *A Plain Account of Christian Perfection*."
          ],
          [
            "1867",
            "Vineland, New Jersey",
            "The Holiness camp meetings begin. Perfection becomes a second blessing received in a moment."
          ],
          [
            "Today",
            "The pulpit",
            "“Nobody’s perfect” — or, “I was entirely sanctified at the altar.”"
          ]
        ],
        "built": [
          "**Entire sanctification** — a second blessing that makes a believer sinless in one moment.",
          "**Two classes of believers** — the “perfected” few above the ordinary many, just as in the cults.",
          "**A command nobody tries** — if perfect means sinless, the command is out of reach, and the walk is dropped."
        ]
      }
    ],
    "closing": [
      "The old path is plain. Yahuah separated clean from unclean, and He separated His people from the nations so they would be His: “And ye shall be holy unto me: for I Yahuah am holy, and have severed you from other people, that ye should be mine” (Leviticus 20:26). Deliverance comes first, by the blood of the Lamb Yahuah provided. Then comes the walk — the commandments, the plate, the whole heart.",
      "Paul said the same to the believers in Corinth: “for the temple of God is holy, which temple ye are” (1 Corinthians 3:17). A temple is kept clean because Someone lives there. Revelation closes the matter at the gate of the city: “And there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie: but they which are written in the Lamb’s book of life” (Revelation 21:27)."
    ],
    "further": [
      [
        "The Old Paths: Ye Shall Be Holy",
        "/doctrines/old-paths/ye-shall-be-holy"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Artemis called hagnē: attested in Homer (e.g. Odyssey 5.123; 18.202); the “c. 700 BC” date for Homer is approximate.",
      "Epistle of Barnabas chapter 10 allegorizes the food laws; its date (c. 130 AD) is the common estimate, not certain.",
      "First formal papal canonization: Ulrich of Augsburg by Pope John XV in 993 AD.",
      "Teleioi / teleios as a term for fully initiated members of the mystery religions: the word family (teletē, teleō) is well attested for initiation; the exact plural label “the perfected” should be checked against a source before publishing.",
      "Clement of Alexandria (c. 200 AD) calling the mature Christian “the perfect” gnostic and using mystery language (Stromata; Protrepticus 12).",
      "John Wesley, A Plain Account of Christian Perfection (1766); first National Camp Meeting for the Promotion of Holiness, Vineland NJ, 1867.",
      "Abram’s date “c. 1900 BC” is a conventional estimate.",
      "Reading of Matthew 5:48 as drawing on Deuteronomy 18:13 (teleios for tamim in the Greek Old Testament) taken from the word page bridge field."
    ]
  },
  "calendar-feasts": {
    "slug": "calendar-feasts",
    "title": "Calendar & Feasts",
    "subtitle": "You’ve Been Missing the Appointments — Because Someone Changed the Calendar",
    "opening": [
      "The church teaches that the feasts of Leviticus were Jewish holidays, and they ended at the cross. In their place it keeps Sunday, Easter, and Christmas. Its week rolls on without a break, set by Rome, and its day starts at midnight. Most believers have never been told that Yahuah has a calendar at all.",
      "But He hung His calendar in the sky on the fourth day: “Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years” (Genesis 1:14). The sun turns the year. The moon numbers the month. The day runs from dawn to dusk — “God called the light Day” (Genesis 1:5). And the feasts are not Israel’s or the Jews’. Yahuah calls them His own: “Concerning the feasts of Yahuah, which ye shall proclaim to be holy convocations, even these are my feasts” (Leviticus 23:2). The appointments still stand. What changed was the calendar men use to find them.",
      "Five Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "kairos",
        "greek": "Kairos",
        "kjv": "season, time",
        "role": "The root word",
        "verse": {
          "ref": "Galatians 4:10",
          "text": "Ye observe days, and months, and times, and years."
        },
        "taught": [
          "Paul is scolding the Galatians for keeping the Jewish calendar. Days, months, times, and years — that means Sabbaths, new moons, feasts, and holy years. Going back to the Law’s calendar is going back to slavery. So believers today should not keep the feasts."
        ],
        "word": [
          "The word for “times” in the Greek copy is *kairos* (G2540). To the Greeks, Kairos was a god — the youngest son of Zeus, with his own altar at Olympia, at the entrance to the stadium. The sculptor Lysippos made a famous statue of him: a lock of hair hanging in front, and bald behind. You grab the lucky moment as it comes, because once it passes you cannot catch it. So a kairos was a chance, a lucky time, the right moment. It was never a set meeting with God. The church hears “times and seasons” the same way — vague stretches of time, with no date and no appointment."
        ],
        "hebrew": [
          "When the Torah was put into Greek, *kairos* was used for a Hebrew word in the creation story: “let them be for signs, and for seasons” (Genesis 1:14). “Seasons” there is *moadim*, from *moed* (H4150). A moed is an appointment — a set time and place to meet, like a meeting written on the calendar. It is the same word Yahuah uses for His feasts: “even these are my feasts” (Leviticus 23:2).",
          "So the sky was hung to keep Yahuah’s appointments, and the Greek word for a lucky god’s moment was put in their place. A moed is not luck. Yahuah sets it, Yahuah keeps it, and He expects His people to come."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“You used to serve gods that are not gods. Now you know Yahuah. So why are you going back to your old gods’ days, and months, and lucky times, and years?”*",
          "Paul says it himself in the verses just before: “Howbeit then, when ye knew not God, ye did service unto them which by nature are no gods. But now, after that ye have known God, or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage?” (Galatians 4:8–9). These were people from the nations. They had never kept Yahuah’s feasts, so they could not “turn again” to them. They were turning back to the calendar of their idols. And Paul himself kept Yahuah’s calendar: “we sailed away from Philippi after the days of unleavened bread” (Acts 20:6)."
        ],
        "timeline": [
          [
            "Day four",
            "Creation",
            "Yahuah hangs the lights “for signs, and for seasons” — moadim, His appointments (Genesis 1:14)."
          ],
          [
            "c. 330 BC",
            "Lysippos",
            "Carves the god Kairos: a lock in front, bald behind — the lucky moment you must seize."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Torah is put into Greek; moadim in Genesis 1:14 becomes kairoi."
          ],
          [
            "c. 50 AD",
            "Paul",
            "Warns the Galatians not to turn back to the days of “them which by nature are no gods.”"
          ],
          [
            "c. 160 AD",
            "Justin Martyr",
            "Teaches that the Sabbath and the feasts were given to Israel only because of their hard hearts."
          ],
          [
            "Today",
            "The pulpit",
            "“Galatians 4:10 — Paul says don’t keep the feasts.”"
          ]
        ],
        "built": [
          "**Feasts as bondage** — Yahuah’s own appointments treated as the “beggarly elements” of idols.",
          "**Times and seasons with no date** — the feasts heard as vague seasons, not set meetings.",
          "**A calendar without the sky** — Rome’s week and Rome’s year in place of the sun and the moon."
        ]
      },
      {
        "id": "kyriakos",
        "greek": "Kyriakos",
        "kjv": "the Lord’s day",
        "role": "The emperor’s day",
        "verse": {
          "ref": "Revelation 1:10",
          "text": "I was in the Spirit on the Lord’s day, and heard behind me a great voice, as of a trumpet,"
        },
        "taught": [
          "The Lord’s day is Sunday, the day Jesus rose. John was worshiping on Sunday when he saw the vision. The apostles moved the day of rest from the seventh day to the first. Sunday is now the Christian Sabbath."
        ],
        "word": [
          "The Greek copy uses *kyriakos* (G2960). It simply means “belonging to the lord” — the master’s. The verse does not name a day of the week. But in the province of Asia, where John’s seven churches stood, a day each month was called *Sebastē* — “Emperor’s Day” — a day set aside to honor Caesar, who was called “lord.” In that world, “the lord’s day” already meant a day that belonged to a ruler. Later, Rome filled the empty phrase with a day of its own: the first day of its week."
        ],
        "hebrew": [
          "Scripture names only one day that Yahuah calls His own: “If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of Yahuah, honourable” (Isaiah 58:13).",
          "“My holy day” in Hebrew is *yom qodshi* — *yom* (H3117), day, and *qodesh* (H6944), holy, set apart. The Sabbath (*Shabbat*, H7676) is the day that belongs to Yahuah. It is counted by the moon, not by Rome’s week: the new moon opens the month, and the Sabbaths fall on the 8th, 15th, 22nd, and 29th. And Yahushua said whose day it is: “the Son of man is Lord also of the sabbath” (Mark 2:28)."
        ],
        "reread": [
          "Now read it again the way John meant it: *“I was in the Spirit on the day that belongs to Yahuah — His holy day, His Sabbath — and I heard behind me a great voice, like a trumpet.”*",
          "Nothing in Revelation points to the first day of the week. But the book does tell us who Yahuah’s people are: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus” (Revelation 14:12). John saw his vision on the Lord’s own day, and the saints in that vision keep the Lord’s own commandments."
        ],
        "timeline": [
          [
            "1st century",
            "Province of Asia",
            "A day each month called Sebastē — “Emperor’s Day” — honors Caesar."
          ],
          [
            "c. 95 AD",
            "John on Patmos",
            "“I was in the Spirit on the Lord’s day” (Revelation 1:10). No weekday is named."
          ],
          [
            "c. 110 AD",
            "Ignatius",
            "Writes of believers “no longer keeping Sabbath,” but living “according to the Lord’s.” The word “day” is not in his Greek."
          ],
          [
            "321 AD",
            "Constantine",
            "Orders courts and city workshops to rest on “the venerable day of the Sun.”"
          ],
          [
            "c. 364 AD",
            "Council of Laodicea",
            "Christians must not rest on the Sabbath, but work, and honor the Lord’s day instead."
          ],
          [
            "Today",
            "The pulpit",
            "“Sunday is the Lord’s day — the Christian Sabbath.”"
          ]
        ],
        "built": [
          "**Sunday worship** — Rome’s first day placed where Yahuah’s holy day stood.",
          "**A Sabbath on a rolling week** — the Sabbath counted by Rome’s unbroken week instead of by the moon.",
          "**The Sabbath called Jewish** — Yahuah’s “my holy day” treated as belonging to one nation."
        ]
      },
      {
        "id": "heorte",
        "greek": "Heortē",
        "kjv": "holyday",
        "role": "The gods’ festival",
        "verse": {
          "ref": "Colossians 2:16–17",
          "text": "Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ."
        },
        "taught": [
          "Paul says no one can judge you for not keeping the feasts, the new moons, or the Sabbath. Those things were only shadows, and the shadow ended when Jesus came. So keeping a holy day is optional at best. At worst it is legalism."
        ],
        "word": [
          "The Greek copy uses *heortē* (G1859). It was the everyday Greek word for a religious festival — the great processions for Athena in Athens, the feasts of Dionysus, the games for Zeus. Any god could have a heortē. Honestly, the word itself is not the problem; the Greek Old Testament uses it for Yahuah’s feasts too. The problem is how it was heard. If every festival is a heortē, then any holy day will do. The church filled the word with its own holidays and treated them as the same thing as Yahuah’s."
        ],
        "hebrew": [
          "Paul’s three words — holyday, new moon, sabbath — are a set that runs all through the Hebrew Scriptures: “on the sabbaths, and on the new moons, and on the solemn feasts, three times in the year, even in the feast of unleavened bread, and in the feast of weeks, and in the feast of tabernacles” (2 Chronicles 8:13).",
          "“Holyday” stands for *chag* (H2282), a feast kept to Yahuah, when His people went up to meet Him. These feasts are commanded and dated: “These are the feasts of Yahuah, even holy convocations, which ye shall proclaim in their seasons” (Leviticus 23:4). They are not just any festival. They are His."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“So don’t let anyone outside judge you for how you eat and drink at Yahuah’s feasts, His new moons, and His Sabbaths. These are a picture of things still to come — and the body of Messiah is the one to judge it.”*",
          "Who were the judges? Paul tells us in the same chapter. They came “through philosophy and vain deceit, after the tradition of men” (Colossians 2:8). They taught “Touch not; taste not; handle not” — “after the commandments and doctrines of men” (Colossians 2:21–22). They were the people from outside, scorning the believers for keeping Yahuah’s days. And Paul says these days “are” a shadow of things to come. Not were. They still point forward."
        ],
        "timeline": [
          [
            "Sinai",
            "Moses",
            "The feasts are commanded and dated: “These are the feasts of Yahuah” (Leviticus 23:4)."
          ],
          [
            "Classical Greece",
            "Athens",
            "Heortē is the word for the festivals of the gods, like the great procession for Athena."
          ],
          [
            "c. 250 BC",
            "Alexandria",
            "The Torah is put into Greek; chag becomes heortē."
          ],
          [
            "c. 60 AD",
            "Paul",
            "Tells the Colossians not to let the philosophers judge them over feasts, new moons, and Sabbaths."
          ],
          [
            "336 AD",
            "Rome",
            "The first record of a feast of Messiah’s birth kept on December 25."
          ],
          [
            "Today",
            "The pulpit",
            "“Colossians 2:16 — nobody can tell you to keep the feasts.”"
          ]
        ],
        "built": [
          "**Church holidays for Yahuah’s feasts** — Christmas, Lent, and Easter in place of Pesach, Shavuot, and Sukkot.",
          "**“Shadow” read as “gone”** — Paul’s “are a shadow of things to come” read as if it said “were.”",
          "**Feast-keepers judged** — the very thing Paul forbade, turned around against the people keeping Yahuah’s days."
        ]
      },
      {
        "id": "pascha",
        "greek": "Pascha",
        "kjv": "Easter",
        "role": "The goddess’s name",
        "verse": {
          "ref": "Acts 12:4",
          "text": "And when he had apprehended him, he put him in prison, and delivered him to four quaternions of soldiers to keep him; intending after Easter to bring him forth to the people."
        },
        "taught": [
          "Easter is the day the church celebrates the resurrection. Many say it has been kept since the apostles. Some point to this very verse: Easter is right there in the Book of Acts. Others say Herod was waiting for a pagan spring festival to end."
        ],
        "word": [
          "The Greek copy has *pascha* (G3957). Here is the surprise: pascha is not a pagan word at all. It is the Hebrew word *Pesach* spelled in Greek letters. The pagan name came in English. Around 725 AD an English monk named Bede wrote that the spring month was named for a goddess, Eostre. Early English Bibles put “Easter” for pascha. The King James translators changed every one of them to “passover” — except this one, Acts 12:4."
        ],
        "hebrew": [
          "Pesach is Yahuah’s own feast: “And thus shall ye eat it; with your loins girded, your shoes on your feet, and your staff in your hand; and ye shall eat it in haste: it is Yahuah’s passover” (Exodus 12:11). *Pesach* (H6453) means “passing over” — Yahuah passed over the houses marked with the blood.",
          "The feast has a date: “In the fourteenth day of the first month at even is Yahuah’s passover. And on the fifteenth day of the same month is the feast of unleavened bread” (Leviticus 23:5–6). Paul tells the believers in Corinth what it means: “For even Christ our passover is sacrificed for us” (1 Corinthians 5:7). The Lamb Yahuah provided died on the 14th, at 3 in the afternoon — the very hour the lambs were slain."
        ],
        "reread": [
          "Now read it again the way Luke meant it: *“He put Peter in prison under four squads of soldiers, planning to bring him out to the people after the Pesach.”*",
          "Luke tells us the season one verse earlier: “(Then were the days of unleavened bread.)” (Acts 12:3). Herod was not waiting for a goddess. He was waiting for Yahuah’s feast to end. And Paul tells a church full of people from the nations to keep that same feast: “Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth” (1 Corinthians 5:8)."
        ],
        "timeline": [
          [
            "Egypt",
            "Moses",
            "The lamb is slain on the 14th of the first month: “it is Yahuah’s passover” (Exodus 12:11)."
          ],
          [
            "31 AD",
            "Yahushua",
            "Eats a preparation meal on the 13th, “before the feast of the passover” (John 13:1). He dies at 3 PM on the 14th, as the lambs are slain. The Pesach is eaten that night with His body in the tomb."
          ],
          [
            "c. 190 AD",
            "Polycrates and Victor",
            "The churches of Asia still keep the 14th. The bishop of Rome threatens to cut them off."
          ],
          [
            "325 AD",
            "Council of Nicaea",
            "The feast’s date is set apart from the Hebrew reckoning and tied to a Sunday."
          ],
          [
            "1611",
            "The King James Bible",
            "Leaves “Easter” for pascha in one verse: Acts 12:4."
          ],
          [
            "Today",
            "The pulpit",
            "Easter Sunday — a dawn service, eggs, and rabbits."
          ]
        ],
        "built": [
          "**Easter Sunday** — a moving spring Sunday in place of the 14th of the first month.",
          "**The Last Supper as the Passover** — the meal of John 13 was eaten “before the feast,” on the 13th. Calling it the Pesach meal puts His death a day late.",
          "**Spring customs as worship** — eggs, rabbits, and a goddess’s name dressed up as resurrection."
        ]
      },
      {
        "id": "pentekoste",
        "greek": "Pentēkostē",
        "kjv": "Pentecost",
        "role": "A number, not a count",
        "verse": {
          "ref": "Acts 2:1",
          "text": "And when the day of Pentecost was fully come, they were all with one accord in one place."
        },
        "taught": [
          "Fifty days after Easter Sunday, the Spirit came down and the church was born. Churches mark it every year on a Sunday in late spring, sometimes with red banners and a birthday cake. Many teach that this was a brand-new Christian day that had nothing to do with the Law. A whole movement of tongues-speaking churches takes its name from it."
        ],
        "word": [
          "The Greek copy calls the day *Pentēkostē* (G4005). It simply means “the fiftieth.” Greek-speaking Jews used it as a short label for the feast. But a label is not a command. It tells you a number. It does not tell you fifty from what, or what must be finished first. The church took the number, counted fifty days from its own Easter Sunday, and landed in late spring."
        ],
        "hebrew": [
          "Moses gave the count, not just the number: “And ye shall count unto you from the morrow after the sabbath, from the day that ye brought the sheaf of the wave offering; seven sabbaths shall be complete: Even unto the morrow after the seventh sabbath shall ye number fifty days; and ye shall offer a new meat offering unto Yahuah” (Leviticus 23:15–16).",
          "The feast is *Shavuot* (H7620), “weeks.” First, seven Sabbaths must be complete, counted from the wave sheaf on the 16th of the first month: the 22nd and 29th of the first month; the 8th, 15th, 22nd, and 29th of the second; and the 8th of the third. Then, from the morrow after the seventh Sabbath, fifty days are numbered. Shavuot lands on the 28th or 29th of the fourth month — in summer, at the wheat harvest. Moses calls it “the feast of harvest, the firstfruits of thy labours” (Exodus 23:16)."
        ],
        "reread": [
          "Now read it again the way Luke meant it: *“And when the day of Shavuot was fully counted out — the seven Sabbaths complete, and the fifty days numbered to the last one — they were all with one accord in one place.”*",
          "“Fully come” is a counting word. It means filled up to the end, like a measure filled to the top. Luke is pointing straight back to Moses’ count. And it was a harvest day: “the same day there were added unto them about three thousand souls” (Acts 2:41). The feast of firstfruits brought in the first fruits of a people. It was not a new day. It was Yahuah’s day, kept on time."
        ],
        "timeline": [
          [
            "Sinai",
            "Moses",
            "“Seven sabbaths shall be complete,” then fifty days are numbered (Leviticus 23:15–16)."
          ],
          [
            "c. 200 BC",
            "Greek-speaking Jews",
            "Call the feast by a number, “the fiftieth” (Tobit 2:1; 2 Maccabees 12:32)."
          ],
          [
            "31 AD",
            "Jerusalem",
            "The Spirit is poured out on Shavuot; three thousand are added (Acts 2:41)."
          ],
          [
            "4th century",
            "The church",
            "The feast is tied to Easter Sunday — fifty days on, always a Sunday, in late spring."
          ],
          [
            "1901",
            "Topeka, Kansas",
            "A Bible school speaks in tongues, and a movement takes the Greek label as its name."
          ],
          [
            "Today",
            "The pulpit",
            "“The birthday of the church” — a Sunday in late spring."
          ]
        ],
        "built": [
          "**The birthday of the church** — as if Yahuah’s people began here, instead of at a harvest feast He commanded in the Torah.",
          "**A feast without a count** — the seven Sabbaths dropped, and the day moved about fifty days early, out of summer into late spring.",
          "**A movement named for a number** — the tongues churches took their name from the Greek label, not from the feast Moses commanded."
        ]
      }
    ],
    "closing": [
      "The old path is written in the sky. The sun turns the year. The moon numbers the month, and the Sabbaths fall on the 8th, 15th, 22nd, and 29th. The day runs from dawn to dusk. The feasts come in their seasons: Pesach on the 14th of the first month, Hag HaMatzot from the 15th, Bikkurim with the wave sheaf, Shavuot in summer after seven Sabbaths and fifty days, then Yom Teruah, Yom Kippur, and Sukkot. “He appointed the moon for seasons” (Psalm 104:19). Deliverance came first, through the Lamb on the 14th. The walk follows — keeping Yahuah’s appointments on Yahuah’s calendar.",
      "Isaiah saw it would never end: “from one new moon to another, and from one sabbath to another, shall all flesh come to worship before me, saith Yahuah” (Isaiah 66:23). Revelation shows the same calendar in the city of Yahuah, still counted by the moon: “there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations” (Revelation 22:2)."
    ],
    "further": [
      [
        "The Old Paths: Signs and Seasons",
        "/doctrines/old-paths/signs-and-seasons"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Kairos altar at Olympia near the stadium entrance (Pausanias 5.14.9); Lysippos statue with forelock and bald back (described in the epigram of Posidippus); “c. 330 BC” is approximate.",
      "Septuagint Genesis 1:14 uses kairoi (eis kairous) for moadim; Septuagint Leviticus 23 uses heortē for chag.",
      "Justin Martyr, Dialogue with Trypho (c. 160 AD), chapters 18–21: Sabbath and feasts enjoined because of Israel’s hardness of heart.",
      "Monthly “Sebastē” (Emperor’s Day) in the province of Asia: from inscriptions and papyri cited by Adolf Deissmann, Light from the Ancient East.",
      "Ignatius, Magnesians 9: Greek reads “kata kyriakēn” (some copies “kyriakēn zōēn”); “day” is supplied by translators. The date c. 110 AD is approximate.",
      "Constantine’s law of 7 March 321 (Codex Justinianus 3.12.2), “the venerable day of the Sun.”",
      "Council of Laodicea canon 29; the council’s date (c. 363–364) is uncertain.",
      "Earliest record of December 25 as the birth feast at Rome: the Chronograph of 354, reflecting the year 336.",
      "Bede, De temporum ratione 15 (c. 725), on Eosturmonath and the goddess Eostre.",
      "Early English Bibles (Tyndale and those after him) used “Easter” for pascha in several places; the KJV kept it only at Acts 12:4.",
      "Quartodeciman dispute: Polycrates of Ephesus and Victor of Rome, c. 190 AD (Eusebius, Church History 5.24).",
      "Nicaea (325) separating the date from the Hebrew reckoning: from Constantine’s letter after the council (Eusebius, Life of Constantine 3.18–19).",
      "Greek label for Shavuot in Tobit 2:1 and 2 Maccabees 12:32; “c. 200 BC” is approximate.",
      "4th-century church tying the feast fifty days after Easter, always a Sunday (Council of Elvira canon 43, c. 306, is one early witness).",
      "Topeka, Kansas, January 1901: Charles Parham’s Bethel Bible School, the start of the modern tongues movement.",
      "Date of Revelation “c. 95 AD” is the conventional date, not certain.",
      "Rendering symplēroō (“fully come,” G4845) as a counting word meaning “filled up completely” — the Strong’s sense is “to fill completely / to be fully come.”"
    ]
  },
  "faith-alone": {
    "slug": "faith-alone",
    "title": "Faith Alone",
    "subtitle": "The Cup Poured, the Bread Never Passed",
    "opening": [
      "Believe, and you are saved. Nothing you do after that adds to it or takes from it. That is “faith alone,” and most Protestant churches are built on it. Martin Luther made it famous. When he put Paul’s letter to the Romans into German in 1522, he added a word Paul never wrote: Romans 3:28 came out “by faith alone.”",
      "The teaching is right about one thing. No one earns his way through the door. The blood opens it, and Yahuah gives it freely. Where it goes wrong is what comes after. It pours the cup and never passes the bread — the walk, the commandments, the life lived after the door is open. Scripture puts the word “only” next to belief one time, and it says the opposite: “Ye see then how that by works a man is justified, and not by faith only” (James 2:24).",
      "Each word below shows where it came from, what the Hebrew said underneath, and what it built. Seven Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "pistis",
        "greek": "Pistis",
        "kjv": "faith",
        "role": "The root word",
        "verse": {
          "ref": "Romans 1:17",
          "text": "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith."
        },
        "taught": [
          "This is the verse that changed Martin Luther. He read “the just shall live by faith” and decided that you are made right with God by believing, not by anything you do. The pulpit still reads it that way. Faith means believing the right things about Jesus. Believe them once, and you are saved for good."
        ],
        "word": [
          "The Greek copy has *pistis* (G4102). In the Greek world, Pistis was a goddess — Trust, or Good Faith. The poet Theognis wrote that she had left the earth and gone back to the gods. Rome worshipped her as Fides, with a temple on the Capitoline hill, next to Jupiter. The word itself could mean loyalty. But over the centuries the church came to read it as agreeing with the right facts — something that happens in the head."
        ],
        "hebrew": [
          "But Paul is quoting the prophet Habakkuk, and Habakkuk wrote in Hebrew: “Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith” (Habakkuk 2:4).",
          "The Hebrew word is *emunah* (H530). It means steadiness — holding firm and staying true. Its first use in the Bible is Moses holding up his hands over the battle until his arms give out. Aaron and Hur prop them up, “and his hands were steady until the going down of the sun” (Exodus 17:12). Steady is *emunah*. It is not something you think once. It is something you keep doing until the day is done."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“The one who is right with Yahuah will live by holding steady — by staying true to Him.”*",
          "Paul tells us at the start of the same letter what his message was for: “for obedience to the faith among all nations” (Romans 1:5). Paul’s belief was never belief alone. It was trust that obeys, and keeps on obeying."
        ],
        "timeline": [
          [
            "c. 550 BC",
            "Theognis",
            "The Greek poet says Pistis, a goddess, has left the earth."
          ],
          [
            "c. 250 BC",
            "Rome",
            "Fides, Rome’s goddess of good faith, has her temple on the Capitoline."
          ],
          [
            "1522",
            "Luther",
            "His German New Testament adds “alone” to Romans 3:28."
          ],
          [
            "1646",
            "Westminster",
            "The Protestant confession calls faith “the alone instrument of justification.”"
          ],
          [
            "Today",
            "The pulpit",
            "“Just believe. You don’t have to do anything.”"
          ]
        ],
        "built": [
          "**Belief without a walk** — a man can say he believes, live as he likes, and still be told he is safe.",
          "**Law against belief** — keeping the commandments is called “works,” as if obeying were a way of earning."
        ]
      },
      {
        "id": "euangelion",
        "greek": "Euangelion",
        "kjv": "gospel",
        "role": "The emperor’s news",
        "verse": {
          "ref": "Romans 10:15",
          "text": "And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!"
        },
        "taught": [
          "This is the great missions verse. The gospel is the good news that Jesus died for your sins. Paul gave it a few verses back: confess with your mouth and believe in your heart, and you will be saved (Romans 10:9). Preachers carry that news, and the feet that carry it are beautiful. That is the whole message."
        ],
        "word": [
          "The Greek copy uses *euangelion* (G2098) and its verb, “to bring good news.” Rome used this word for the emperor. A stone set up at Priene, in what is now Turkey, in 9 BC says the birthday of “the god” Augustus was the beginning of good tidings for the world. Caesar’s good news was a birth announcement: something had happened, so be glad. The pulpit’s gospel sounds much the same — news about the past, to be believed, with no kingdom and no law."
        ],
        "hebrew": [
          "But Paul is quoting Isaiah, and Isaiah wrote in Hebrew: “How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace; that bringeth good tidings of good, that publisheth salvation; that saith unto Zion, Thy God reigneth!” (Isaiah 52:7).",
          "The Hebrew verb is *basar* (H1319), and the news itself is *besorah* (H1309). Look at what the messenger says. His news is not only that something happened. It is “Thy God reigneth!” The King is on His throne. When a king takes his throne, his law goes out with him. Good news, in Hebrew, is the news of Yahuah’s reign — and a reign is something you live under."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“How beautiful are the feet of those who bring the news that Yahuah reigns!”*",
          "Paul says it in the very next verse: “But they have not all obeyed the gospel” (Romans 10:16). You cannot obey a birth announcement. You obey a King. That is why Yahushua preached “the gospel of the kingdom of God,” and told His hearers, “repent ye, and believe the gospel” (Mark 1:14–15)."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Isaiah",
            "The messenger runs to Zion: “Thy God reigneth!”"
          ],
          [
            "9 BC",
            "Priene",
            "A stone calls the birthday of “the god” Augustus the start of good tidings for the world."
          ],
          [
            "c. 28 AD",
            "Yahushua",
            "Preaches “the gospel of the kingdom of God”: repent, and believe (Mark 1:14–15)."
          ],
          [
            "1520s",
            "Luther",
            "Sets “Law” and “Gospel” against each other: the Law only demands, the gospel only gives."
          ],
          [
            "Today",
            "The pulpit",
            "“The gospel is simple: Jesus died for you. Just believe it.”"
          ]
        ],
        "built": [
          "**A gospel with no King** — news about the past, with no reign to live under now.",
          "**Law versus gospel** — the commandments treated as the enemy of the good news, instead of the King’s own words."
        ]
      },
      {
        "id": "mysterion",
        "greek": "Mystērion",
        "kjv": "mystery",
        "role": "The secret rites",
        "verse": {
          "ref": "Ephesians 5:32",
          "text": "This is a great mystery: but I speak concerning Christ and the church."
        },
        "taught": [
          "A mystery is something too deep to understand. Preachers say it whenever a teaching cannot be explained: “It’s a mystery — just accept it.” The Catholic Church went further. Its Latin Bible made this verse say “This is a great sacrament,” and marriage became one of seven rites that pour God’s grace into the person who receives them."
        ],
        "word": [
          "*Mystērion* (G3466) was the word for the secret rites of the Greek and Roman temples. At Eleusis near Athens, and later in the worship of Isis and Mithras, people were brought in step by step through hidden ceremonies. Once they were initiated, they were promised a better life after death. The rite itself did the saving, and the secret was never told to outsiders. When the church later spoke of its “sacraments,” it borrowed the same picture: holy rites, run by priests, that hand out favor."
        ],
        "hebrew": [
          "Paul has just quoted the Torah in the verse before: “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). The “mystery” is the marriage itself, read as a picture of Messiah and His people.",
          "In Hebrew, a secret of Yahuah is *sod* (H5475) — His plan, kept quiet until the time He chooses, and then told openly. “He revealeth his secret unto his servants the prophets” (Amos 3:7). A Hebrew secret is not a rite and not a riddle. It is a plan once hidden and now told, so that people can live by it."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“This is a great secret, now told: a man and wife joined as one flesh are a picture of Messiah and His people.”*",
          "Paul does not leave it as a puzzle. The very next verse tells the husband to love and the wife to honor (Ephesians 5:33). A marriage is lived, not performed. And Paul tells the Romans why the secret was told at all: it is “made known to all nations for the obedience of faith” (Romans 16:26)."
        ],
        "timeline": [
          [
            "c. 600 BC",
            "Eleusis",
            "Secret rites near Athens promise the initiated a better lot after death."
          ],
          [
            "c. 200 AD",
            "Tertullian",
            "Complains that the cult of Mithras copies the church’s washing and offering of bread."
          ],
          [
            "c. 400 AD",
            "Jerome",
            "The Latin Bible puts sacramentum for mystērion: “This is a great sacrament.”"
          ],
          [
            "1439",
            "Council of Florence",
            "The seven sacraments are fixed, and marriage is one of them."
          ],
          [
            "Today",
            "The pulpit",
            "“It’s a mystery. Don’t try to understand it.”"
          ]
        ],
        "built": [
          "**Sacraments that hand out favor** — baptism, communion, and marriage treated as rites that pour in what only Yahuah gives.",
          "**Doctrines beyond question** — when a teaching cannot be shown from Scripture, it is called “a mystery.” The Trinity itself is guarded this way."
        ]
      },
      {
        "id": "eucharistia",
        "greek": "Eucharistia",
        "kjv": "giving of thanks",
        "role": "The sacred meal",
        "verse": {
          "ref": "Luke 22:19",
          "text": "And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me."
        },
        "taught": [
          "This is where communion comes from. The Catholic Church teaches that the bread truly becomes His body, and that eating it pours grace into you. Most Protestants call it a symbol. Either way, the idea is close: take the bread, think about the cross, and you are covered. To remember means to think back."
        ],
        "word": [
          "“Gave thanks” is *eucharisteō* (G2168), and the noun is *eucharistia* (G2169). It is an everyday word: to say thank you. But by the second century the church used “Eucharist” as the name of the meal itself. Ignatius called the bread “the medicine of immortality.” Justin Martyr admitted that the worshippers of Mithras had a rite of bread and cup much like it. The mystery cults had sacred meals that joined the worshipper to his god. The church’s meal began to look like one of them — a rite that works by being received."
        ],
        "hebrew": [
          "Yahushua spoke these words in Hebrew, at a Hebrew table. Giving thanks over bread comes straight from the Torah: “When thou hast eaten and art full, then thou shalt bless Yahuah thy God for the good land which he hath given thee” (Deuteronomy 8:10). The word is *barak* (H1288), to bless — to give Yahuah the credit for the bread.",
          "“Remembrance” in Hebrew is *zikkaron* (H2146), from *zakar* (H2142), to remember. In Hebrew, remembering is never just thinking back. It means doing: “That ye may remember, and do all my commandments, and be holy unto your God” (Numbers 15:40). And bread itself points to His words: “man doth not live by bread only, but by every word that proceedeth out of the mouth of Yahuah” (Deuteronomy 8:3)."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“This is My body, given for you. Do this — and keep doing it — so that I am remembered in the way you live.”*",
          "That same night He washed their feet and told them plainly: “For I have given you an example, that ye should do as I have done to you” (John 13:15). Then: “If ye know these things, happy are ye if ye do them” (John 13:17). The cup is the blood that opens the door. The bread is the walk that follows. Neither one is a rite that works by itself."
        ],
        "timeline": [
          [
            "c. 110 AD",
            "Ignatius",
            "Calls the bread “the medicine of immortality.”"
          ],
          [
            "c. 155 AD",
            "Justin Martyr",
            "Names the meal “Eucharist,” and admits the Mithras cult has a bread-and-cup rite like it."
          ],
          [
            "1215",
            "Fourth Lateran Council",
            "Rome makes it law: the bread and wine are changed into the body and blood."
          ],
          [
            "1547",
            "Council of Trent",
            "The sacraments give grace “by the work worked” — by the rite itself."
          ],
          [
            "Today",
            "The pulpit",
            "“Take communion and remember what He did for you.”"
          ]
        ],
        "built": [
          "**The Mass** — the bread offered again and again, as a rite that delivers favor.",
          "**Communion as a ticket** — a few minutes of thinking back, standing in for a life of doing."
        ]
      },
      {
        "id": "palingenesia",
        "greek": "Palingenesia",
        "kjv": "regeneration",
        "role": "The world reborn",
        "verse": {
          "ref": "Titus 3:5",
          "text": "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;"
        },
        "taught": [
          "You are saved the moment you are born again. It happens all at once — at baptism, some say, or when you pray the sinner’s prayer. It is “not by works,” so nothing you do before or after has anything to do with it. Once you are regenerated, you are a new person, and you can never be lost."
        ],
        "word": [
          "*Palingenesia* (G3824) means “birth again.” It came from the Greek philosophers. The Stoics — Greek thinkers who taught that everything is fixed by fate — believed the whole world ends in fire and is then born again, over and over. The mystery cults used the idea too. A worshipper of Isis came out of her rites as if reborn. A Roman stone from 376 AD says a man was “reborn for eternity” through the sacrifice of a bull. In their world, reborn meant a one-time change done by a rite."
        ],
        "hebrew": [
          "Paul’s washing and renewing echo the prophet Ezekiel, who wrote in Hebrew. Yahuah promised to wash His people and put a new spirit in them: “Then will I sprinkle clean water upon you, and ye shall be clean… A new heart also will I give you, and a new spirit will I put within you… and cause you to walk in my statutes, and ye shall keep my judgments, and do them” (Ezekiel 36:25–27).",
          "The Hebrew word for new is *chadash* (H2319) — made fresh. The washing is the start, and the new spirit is given for a reason: to walk in His statutes. The only other place the Greek copy uses this word is Matthew 19:28, where Yahushua speaks of “the regeneration when the Son of man shall sit in the throne of his glory.” That is the restoration of all things at His return (Acts 3:21). The new birth begins at the washing and is finished at the restoration."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“He saved us — not because of good deeds we had already done, but by His mercy — through the washing that begins a new life, and the new spirit He puts in us.”*",
          "Paul tells Titus why, three verses later: “that they which have believed in God might be careful to maintain good works” (Titus 3:8). The washing is not the end of the road. It is the start of it."
        ],
        "timeline": [
          [
            "c. 280 BC",
            "The Stoics",
            "The world burns and is born again, over and over — palingenesia."
          ],
          [
            "c. 155 AD",
            "Justin Martyr",
            "Calls baptism being “regenerated.”"
          ],
          [
            "c. 170 AD",
            "Apuleius",
            "A worshipper of Isis comes out of her rites as if reborn."
          ],
          [
            "376 AD",
            "Rome",
            "A stone records a man “reborn for eternity” through a bull sacrifice."
          ],
          [
            "Today",
            "The pulpit",
            "“Pray this prayer, and you are born again — forever.”"
          ]
        ],
        "built": [
          "**Baptismal regeneration** — water poured once, and the person is declared reborn for good.",
          "**The sinner’s prayer** — one moment in the past standing in for a life of walking."
        ]
      },
      {
        "id": "nike",
        "greek": "Nikē",
        "kjv": "victory",
        "role": "The winged goddess",
        "verse": {
          "ref": "1 John 5:4",
          "text": "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith."
        },
        "taught": [
          "The victory is already won. Jesus did it all at the cross, and all you have to do is believe it. Your faith is the victory. You don’t fight; you just claim it. Preachers say, “We fight from victory, not for victory.”"
        ],
        "word": [
          "*Nikē* (G3529) was the name of a goddess. Nike had wings, and the Athenians built her a small temple at the gate of the Acropolis. Rome called her Victoria and set her statue in the Senate house. Nike flew down and handed the win to one side, all in a moment. That is a win you receive, not one you endure for. Read through that picture, “the victory” becomes a prize already handed over."
        ],
        "hebrew": [
          "The same word family takes us to the Hebrew. When Paul writes “Death is swallowed up in victory” (1 Corinthians 15:54), using *nikos* (G3534), he is quoting Isaiah: “He will swallow up death in victory” (Isaiah 25:8).",
          "But the Hebrew word Isaiah used is *netsach* (H5331). It does not mean a win in a moment. It means lasting, enduring — “for ever.” Many Bibles put Isaiah’s line as “He will swallow up death for ever.” In Hebrew, the one who triumphs is the one still standing at the end. Yahushua said it plainly: “But he that shall endure unto the end, the same shall be saved” (Matthew 24:13)."
        ],
        "reread": [
          "Now read it again the way John meant it: *“This is what outlasts the world: our trust, held steady to the end.”*",
          "John says in the verse just before what that looks like: “For this is the love of God, that we keep his commandments: and his commandments are not grievous” (1 John 5:3). Overcoming is not a prize handed down once. It is a walk kept to the end."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Isaiah",
            "“He will swallow up death in victory” — netsach, for ever."
          ],
          [
            "c. 420 BC",
            "Athens",
            "A temple to Athena Nike, the winged goddess of the win, stands at the Acropolis gate."
          ],
          [
            "29 BC",
            "Augustus",
            "Sets a statue of Victoria in the Roman Senate house."
          ],
          [
            "384 AD",
            "Symmachus",
            "Rome’s senators still plead to keep their altar of Victory."
          ],
          [
            "Today",
            "The pulpit",
            "“We fight from victory, not for victory.”"
          ]
        ],
        "built": [
          "**A finished triumph** — the win already handed over, so nothing is asked of the believer.",
          "**“Once saved, always saved”** — no need to endure, because the prize can never be lost."
        ]
      },
      {
        "id": "gnosis",
        "greek": "Gnōsis",
        "kjv": "knowledge",
        "role": "Saved by knowing",
        "verse": {
          "ref": "Luke 1:77",
          "text": "To give knowledge of salvation unto his people by the remission of their sins,"
        },
        "taught": [
          "Salvation starts with knowing. You have to know you are a sinner, know that Jesus died for you, and know for sure that you are going to heaven. Preachers ask, “If you died tonight, do you know where you would go?” If you know the right answer, you have it. What you do with your life after that does not change it."
        ],
        "word": [
          "*Gnōsis* (G1108) means knowledge. In the second century a movement grew up around this word — the Gnostics. They taught that people are saved by knowing secret truth. To them, the spirit was good and the body was worthless, so what the body did did not matter. Irenaeus, a church leader who wrote against them, reported that some claimed they would be saved because of what they were, not because of how they lived. Knowing became the ticket, and the life became beside the point."
        ],
        "hebrew": [
          "Zacharias spoke these words as a priest of Israel, and his song is full of the prophets. Jeremiah promised a day when Yahuah would write His law on the heart, and said, “they shall all know me… for I will forgive their iniquity” (Jeremiah 31:34). Knowing Yahuah and having sins forgiven come together — just as in Zacharias’ song.",
          "The Hebrew word for knowledge is *da’at* (H1847), from *yada* (H3045), to know. In Hebrew, to know someone is to live close to him and do as he does. Jeremiah says it of a good king: “He judged the cause of the poor and needy; then it was well with him: was not this to know me? saith Yahuah” (Jeremiah 22:16). Knowing Yahuah is something you do."
        ],
        "reread": [
          "Now read it again the way Zacharias meant it: *“To let His people know His deliverance — to know Him by walking with Him — through the forgiving of their sins.”*",
          "Zacharias had already said what the deliverance was for, a few lines earlier: “that we being delivered out of the hand of our enemies might serve him without fear, In holiness and righteousness before him, all the days of our life” (Luke 1:74–75). First delivered, then serving — every day after. John says the same: “He that saith, I know him, and keepeth not his commandments, is a liar” (1 John 2:4)."
        ],
        "timeline": [
          [
            "c. 90 AD",
            "John",
            "Warns: “He that saith, I know him, and keepeth not his commandments, is a liar.”"
          ],
          [
            "c. 140 AD",
            "Valentinus",
            "A Gnostic teacher in Rome: the spiritual are saved by what they know."
          ],
          [
            "c. 180 AD",
            "Irenaeus",
            "Records Gnostics who said they would be saved by nature, whatever they did."
          ],
          [
            "1960s",
            "Evangelism Explosion",
            "A soul-winning method opens with one question: do you know for certain you would go to heaven?"
          ],
          [
            "Today",
            "The pulpit",
            "“Do you know for sure you’re saved?”"
          ]
        ],
        "built": [
          "**“Just believe”** — deliverance as knowing the right facts, with nothing asked of the walk.",
          "**Assurance without obedience** — being sure of heaven treated as proof, no matter how a person lives."
        ]
      }
    ],
    "closing": [
      "The old path sets two things on the table. Melchizedek “brought forth bread and wine” to Abram (Genesis 14:18), and the Torah poured a drink offering beside the meal offering (Numbers 15:4–5). The cup is the blood: it opens the door, and no one earns it. The bread is the walk: the commandments, lived out after the door is open. Paul holds both together: “being now justified by his blood, we shall be saved from wrath through him… much more, being reconciled, we shall be saved by his life” (Romans 5:9–10).",
      "Belief alone pours the cup and never passes the bread. Scripture never stops at the door. James says a man is justified “not by faith only” (James 2:24). And Revelation shows who is still standing at the end: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus” (Revelation 14:12)."
    ],
    "further": [
      [
        "The Old Paths: The Wine and the Bread",
        "/doctrines/old-paths/wine-and-the-bread"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Luther’s 1522 German New Testament (September Testament) adds “allein” (alone) at Romans 3:28.",
      "James 2:24 is the only place Scripture pairs pistis with “only” (monon) — as the live page claims.",
      "Theognis (c. 6th century BC, lines c. 1135–1138): Pistis, a great goddess, has gone from men.",
      "Temple of Fides on the Capitoline, dedicated c. 250s BC (A. Atilius Calatinus); “next to Jupiter” per ancient sources.",
      "Exodus 17:12 is the first occurrence of emunah (H530) in the Bible.",
      "Westminster Confession 11.2: faith is “the alone instrument of justification.”",
      "Priene calendar inscription (9 BC): the birthday of the god Augustus as the beginning of good tidings (euangelia).",
      "Luther’s Law–Gospel distinction, dated here to the 1520s (e.g. 1525 “How Christians Should Regard Moses”; 1532 sermon on Law and Gospel).",
      "Yahushua’s ministry start dated c. 28 AD on the house 31 AD crucifixion; adjust if Dutch prefers another year.",
      "Eleusinian mysteries dated c. 600 BC (Homeric Hymn to Demeter era).",
      "Tertullian, Prescription Against Heretics 40: Mithras imitates baptism and “celebrates also the oblation of bread.”",
      "Vulgate Ephesians 5:32: “sacramentum hoc magnum est.”",
      "Council of Florence 1439 (Decree for the Armenians) lists seven sacraments including matrimony.",
      "Ignatius, Ephesians 20: “the medicine of immortality.” Justin Martyr, First Apology 66: the name Eucharist and the Mithras imitation.",
      "Council of Trent, Session 7 (1547), canon 8 on the sacraments: grace conferred ex opere operato.",
      "Justin Martyr, First Apology 61: baptism as being “regenerated.”",
      "Apuleius, Metamorphoses 11 (c. 160–170 AD): Isis initiate “as if reborn.”",
      "Taurobolium inscription CIL VI 510 (376 AD): “in aeternum renatus.”",
      "Temple of Athena Nike, c. 420 BC; Augustus placed the Victoria statue in the Curia Julia, 29 BC; Symmachus’ plea for the altar of Victory, 384 AD.",
      "The input’s Isaiah 25:8 wording “He will swallow up death for ever” is not the KJV (KJV: “in victory”). The tab quotes the KJV and explains lanetsach; “Many Bibles” refers to e.g. NKJV/ESV.",
      "Irenaeus, Against Heresies 1.6.2: the “spiritual” saved by nature, not by conduct. Valentinus in Rome c. 136–160.",
      "Evangelism Explosion (D. James Kennedy, 1960s) diagnostic question — confirm wording and decade.",
      "1 John dated c. 90 AD (date is traditional, not certain).",
      "Habakkuk 2:4 KJV checked against one local KJV text only (online check was rate-limited); wording is standard."
    ]
  },
  "rightly-divided": {
    "slug": "rightly-divided",
    "title": "Rightly Divided",
    "subtitle": "Cut the Book in Half and Both Halves Bleed",
    "opening": [
      "Israel got the Law. The church got grace. They are two different peoples with two different plans, and you must keep them apart. That is the teaching called dispensationalism. Its favorite verse is 2 Timothy 2:15: “Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.” Divide the Bible, it says, and you will find that most of it was written to someone else.",
      "But the Greek word behind “rightly dividing” is *orthotomeō* (G3718). It means to cut a straight line — like a road cut straight ahead. Paul told Timothy to keep the word straight, not to slice it into pieces. The system that slices it came much later: from the preacher John Darby in the 1830s, and from the notes of the Scofield Reference Bible in 1909. Millions read those notes on the same page as the text and took them for the Bible itself.",
      "Each word below shows where it came from, what the Hebrew said underneath, and what it built. Two Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "ekklesia",
        "greek": "Ekklēsia",
        "kjv": "church",
        "role": "The root word",
        "verse": {
          "ref": "Matthew 16:18",
          "text": "And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it."
        },
        "taught": [
          "Jesus said, “I will build my church” — will, in the future. So the church was something new. It did not exist in the Old Testament. It began in Acts 2, and it is a separate people from Israel. Israel has its own promises on earth, and the church has its own in heaven."
        ],
        "word": [
          "The Greek copy uses *ekklēsia* (G1577). In a Greek city, the ekklēsia was the town meeting — citizens called out of their homes to vote. The Bible itself uses the word that way for the crowd at Ephesus: “it shall be determined in a lawful assembly” (Acts 19:39). The English word “church” comes from a different Greek word, *kuriakon*, meaning “belonging to the lord.” So English readers hear “church” and picture a building, or a new religion — not Israel."
        ],
        "hebrew": [
          "Yahushua spoke Hebrew, and the Hebrew word beneath ekklēsia is *qahal* (H6951) — the assembly of Israel, the people Yahuah called together. Stephen calls Israel at Sinai “the church in the wilderness” (Acts 7:38). Same word. The church was already there, gathered at the mountain.",
          "The letter to the Hebrews proves it. It quotes David: “I will declare thy name unto my brethren: in the midst of the congregation will I praise thee” (Psalm 22:22). In the Greek copy, David’s “congregation” comes out as “church”: “in the midst of the church will I sing praise unto thee” (Hebrews 2:12). David’s congregation and the church of the apostles are one and the same word."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“On this rock I will build My assembly — Yahuah’s own congregation, gathered and built up again — and the gates of the grave will not hold it.”*",
          "His followers understood Him that way. At Jerusalem, when the nations began to come in, James quoted the prophets: Yahuah “will build again the tabernacle of David, which is fallen down” (Acts 15:16). Not a new people — the old house, rebuilt. Paul told believers from the nations that they had been “aliens from the commonwealth of Israel,” but now were “fellowcitizens with the saints, and of the household of God” (Ephesians 2:12, 19)."
        ],
        "timeline": [
          [
            "c. 500 BC",
            "Athens",
            "The ekklēsia is the city’s voting assembly of citizens."
          ],
          [
            "c. 1526",
            "Tyndale",
            "Translates ekklēsia as “congregation,” not “church.”"
          ],
          [
            "1611",
            "The King James translators",
            "Told to keep the old church words: “church,” not “congregation.”"
          ],
          [
            "1830s",
            "John Darby",
            "Teaches that the church is a heavenly people, separate from Israel, an earthly people."
          ],
          [
            "Today",
            "The pulpit",
            "“That promise was for Israel, not for the church.”"
          ]
        ],
        "built": [
          "**Two peoples of God** — Israel on earth, the church in heaven, each with its own promises.",
          "**The Old Testament for someone else** — the Torah and the prophets set aside as Israel’s mail, not ours."
        ]
      },
      {
        "id": "oikonomia",
        "greek": "Oikonomia",
        "kjv": "dispensation",
        "role": "Darby’s ages",
        "verse": {
          "ref": "Ephesians 3:2",
          "text": "If ye have heard of the dispensation of the grace of God which is given me to you-ward:"
        },
        "taught": [
          "We live in the Dispensation of Grace, also called the Church Age. God deals with people in different ways in different ages. In the age of Law, Israel was under the commandments. In this age we are under grace, and the Law does not apply to us. Paul, the apostle to the Gentiles, is our teacher. The Gospels and the Law belong to the Jews."
        ],
        "word": [
          "*Oikonomia* (G3622) comes from two words: *oikos*, a house, and *nomos*, a rule. It means running a household — the job of a steward who manages his master’s house. Yahushua uses it of the dishonest steward: “give an account of thy stewardship” (Luke 16:2). But later teachers turned this house word into something else. Around 213 AD Tertullian used “the economy” to describe God as arranged into three. In the 1830s John Darby used “dispensations” for separate ages of history, each with its own terms. The Scofield Reference Bible of 1909 printed seven of them in its notes."
        ],
        "hebrew": [
          "In Hebrew, the steward is the man set “over the house” — like Joseph, made “overseer over his house” in Egypt (Genesis 39:4). The house is *bayit* (H1004). And Yahuah says of Moses: “My servant Moses is not so, who is faithful in all mine house” (Numbers 12:7).",
          "The letter to the Hebrews quotes that verse and draws the line straight through: “And Moses verily was faithful in all his house, as a servant… But Christ as a son over his own house; whose house are we” (Hebrews 3:5–6). One house. Moses served in it, the Son is over it, and we are it. A dispensation is not a new age with new rules. It is a job given to a servant in the one house — “a dispensation of the gospel is committed unto me,” Paul says (1 Corinthians 9:17)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“You have heard of the job Yahuah gave me in His house — to carry His favor to you, the nations.”*",
          "Paul tells them what that favor brings, four verses later: “That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel” (Ephesians 3:6). Same body. Same promise. Not a second plan for a second people."
        ],
        "timeline": [
          [
            "c. 360 BC",
            "Xenophon",
            "Writes the Oeconomicus — oikonomia means running a household and its farm."
          ],
          [
            "c. 213 AD",
            "Tertullian",
            "Uses “the economy” to arrange God into three (Against Praxeas)."
          ],
          [
            "1830s",
            "John Darby",
            "Divides history into separate dispensations with separate terms — and adds a secret rapture."
          ],
          [
            "1888",
            "C. I. Scofield",
            "Publishes a booklet called Rightly Dividing the Word of Truth."
          ],
          [
            "1909",
            "Scofield Reference Bible",
            "Seven dispensations printed in the notes, on the same page as the text."
          ],
          [
            "Today",
            "The pulpit",
            "“That’s for the Jews. We’re under grace.”"
          ]
        ],
        "built": [
          "**Different terms in different ages** — Law for them, grace for us, as if Yahuah changed His mind.",
          "**The secret rapture** — the church taken out of the way so that Yahuah can go back to dealing with Israel."
        ]
      }
    ],
    "closing": [
      "The old path has one house and one law. “One law shall be to him that is homeborn, and unto the stranger that sojourneth among you” (Exodus 12:49). A stranger who joined Israel was not given softer terms; he was brought into the same covenant. Paul draws the same picture with one olive tree. Wild branches were “graffed in among them,” to share “the root and fatness of the olive tree” (Romans 11:17). And he warns them: “thou bearest not the root, but the root thee” (Romans 11:18).",
      "Yahuah never started a second people. Revelation shows the end of the story as one city. On its twelve gates are “the names of the twelve tribes of the children of Israel,” and on its twelve foundations “the names of the twelve apostles of the Lamb” (Revelation 21:12, 14). One city, one people, built on both."
    ],
    "further": [
      [
        "The Old Paths: One Olive Tree",
        "/doctrines/old-paths/one-olive-tree"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "orthotomeō (G3718) as “cut straight” (a road image), as the live page says; LXX uses it in Proverbs 3:6 and 11:5.",
      "“Church” from Greek kuriakon (“belonging to the lord”) — standard etymology; the tab follows the word-page source.",
      "Tyndale’s New Testament (1526) uses “congregation” for ekklēsia.",
      "Bancroft’s rules for the 1611 translators (rule 3): keep “church,” not “congregation.”",
      "Darby’s heavenly-church / earthly-Israel distinction dated to the 1830s; secret (pre-tribulation) rapture also attributed to Darby in the 1830s.",
      "Tertullian, Against Praxeas 2–3, “economy” (oikonomia), dated c. 213 AD.",
      "Scofield’s booklet Rightly Dividing the Word of Truth, 1888.",
      "Scofield Reference Bible (1909) lists seven dispensations in its notes.",
      "Xenophon’s Oeconomicus dated c. 360 BC.",
      "The ekklesia tab uses Matthew 16:18 (Yahushua) rather than the bridge verse; the bridge (Hebrews 2:12 / Psalm 22:22) carries the Hebrew section."
    ]
  },
  "imputed-righteousness": {
    "slug": "imputed-righteousness",
    "title": "Imputed Righteousness",
    "subtitle": "A Record Swapped, a Life Untouched",
    "opening": [
      "When God looks at you, He does not see you. He sees Jesus. His perfect obedience has been placed on your record, and your sins on His. Nothing you do after that can add to your record or take from it. That is “imputed righteousness,” and it is taught in nearly every Protestant church.",
      "Two verses carry most of the weight. “All our righteousnesses are as filthy rags” (Isaiah 64:6) is used to say that obedience itself is filthy. But Isaiah was confessing for a nation in rebellion, not shaming the people who keep Yahuah’s commandments. And Ezekiel says the opposite of a swap: “the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him” (Ezekiel 18:20). The blood covers what a man owes. It was never meant to live his life for him.",
      "Each word below shows where it came from, what the Hebrew said underneath, and what it built. Three Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "dikaiosyne",
        "greek": "Dikaiosynē / Dikē",
        "kjv": "righteousness",
        "role": "The root word",
        "verse": {
          "ref": "Matthew 5:20",
          "text": "For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven."
        },
        "taught": [
          "Nobody was more careful than the Pharisees. So Jesus was showing that no one can ever be good enough. The only righteousness that gets you in is His righteousness, put on your account. You could never earn it, so you must receive it. Your own goodness has nothing to do with it."
        ],
        "word": [
          "The Greek copy uses *dikaiosynē* (G1343), built on *dikē* (G1349). Dikē was a goddess — Justice, a daughter of Zeus, who saw that the guilty were punished. When Paul was bitten by a snake on Malta, the islanders said, “vengeance suffereth not to live” (Acts 28:4). The word for vengeance there is dikē. Rome worshipped her as Iustitia, the lady of the law courts. In that world, being righteous was a verdict — what the judge declared about you. Read that way, righteousness becomes a legal status written on a record."
        ],
        "hebrew": [
          "Yahushua spoke Hebrew, and His word was *tsedaqah* (H6666) — righteousness done. Moses defined it for Israel: “And it shall be our righteousness, if we observe to do all these commandments before Yahuah our God, as he hath commanded us” (Deuteronomy 6:25).",
          "In Hebrew, the righteous man is the one who does right. Ezekiel describes him: “if a man be just, and do that which is lawful and right… Hath walked in my statutes, and hath kept my judgments, to deal truly; he is just, he shall surely live” (Ezekiel 18:5, 9). Righteousness is not a verdict filed away. It is a way of walking."
        ],
        "reread": [
          "Now read it again the way Yahushua meant it: *“Unless your doing of right goes deeper than the scribes and Pharisees — from the heart, all the way through — you will not enter the kingdom.”*",
          "He said so one verse earlier: “whosoever shall do and teach them, the same shall be called great in the kingdom of heaven” (Matthew 5:19). Then, for the rest of the chapter, He shows what deeper looks like — not only no murder, but no hatred; not only no adultery, but no lust. He was not saying the commandments are impossible. He was telling those who follow Him to keep them from the heart."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "Names Dikē, Justice, as a daughter of Zeus."
          ],
          [
            "c. 60 AD",
            "Malta",
            "The islanders see Paul bitten and say Dikē will not let him live (Acts 28:4)."
          ],
          [
            "1519",
            "Luther",
            "Preaches an “alien righteousness” — one that comes from outside us, not our own."
          ],
          [
            "1559",
            "Calvin",
            "Justification is the forgiving of sins and the imputing of Messiah’s righteousness."
          ],
          [
            "Today",
            "The pulpit",
            "“When God looks at you, He sees Jesus.”"
          ]
        ],
        "built": [
          "**A verdict on a record** — righteousness filed away in heaven instead of walked out on earth.",
          "**Obedience as filthy rags** — the commandments treated as a danger to the believer instead of his path."
        ]
      },
      {
        "id": "logizomai",
        "greek": "Logizomai",
        "kjv": "impute",
        "role": "The accountant’s word",
        "verse": {
          "ref": "Romans 4:3",
          "text": "For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness."
        },
        "taught": [
          "Abraham did nothing. He just believed, and God credited righteousness to his account. That is how it works for us too. God moves Jesus’ righteousness into our account, like a deposit. Works have nothing to do with it. Abraham is the proof."
        ],
        "word": [
          "*Logizomai* (G3049) is a plain word. It means to count, to reckon, to weigh something up. Greek merchants used it for entries in an account book. The Latin Bible put it into Latin with *reputare* and *imputare* — an accountant’s words for posting a charge or a credit to someone’s account. The Reformers built on that ledger picture. Righteousness became a sum moved from one account to another. The word did not demand that reading; the account book did."
        ],
        "hebrew": [
          "But Paul is quoting Moses, and Moses wrote in Hebrew: “And he believed in Yahuah; and he counted it to him for righteousness” (Genesis 15:6). “Believed” is *aman* (H539), the root of *emunah*: to stand firm, to lean your full weight on someone. “Counted” is *chashav* (H2803): to think, to weigh, to judge what something is worth.",
          "Look at how the same Hebrew is used of Phinehas. He stood up and acted, and the plague stopped. “And that was counted unto him for righteousness unto all generations for evermore” (Psalm 106:31). Nothing was moved from someone else’s account. Yahuah weighed what the man did and called it right. Abraham’s trust was the same kind — real, and proven: “Abraham obeyed my voice, and kept my charge, my commandments, my statutes, and my laws” (Genesis 26:5)."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“Abraham trusted Yahuah, and Yahuah weighed that trust and counted it as right — the first step of a walk.”*",
          "Paul says so in the same chapter. Abraham is the father of those “who also walk in the steps of that faith of our father Abraham” (Romans 4:12). James quotes the very same verse and draws the same line: “Seest thou how faith wrought with his works, and by works was faith made perfect?” (James 2:22)."
        ],
        "timeline": [
          [
            "Abraham’s day",
            "Abraham",
            "He trusts, and he walks: “kept my charge, my commandments” (Genesis 26:5)."
          ],
          [
            "c. 400 AD",
            "The Latin Bible",
            "Paul’s “counted” is put into accountant’s Latin — reputare, imputare."
          ],
          [
            "1531",
            "Melanchthon",
            "Calls justification a courtroom word: righteousness declared, not lived."
          ],
          [
            "1646",
            "Westminster",
            "God justifies by “imputing the obedience and satisfaction of Christ” to believers."
          ],
          [
            "Today",
            "The pulpit",
            "“It’s credited to your account. You don’t have to do anything.”"
          ]
        ],
        "built": [
          "**A swapped record** — the books say “righteous” while the life stays untouched.",
          "**Abraham without Moriah** — Genesis 15 preached, and Genesis 22 and 26 left out."
        ]
      },
      {
        "id": "hilasmos",
        "greek": "Hilasmos",
        "kjv": "propitiation",
        "role": "The angry god",
        "verse": {
          "ref": "Romans 3:25",
          "text": "Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God;"
        },
        "taught": [
          "God was angry at sin, and His anger had to land on someone. So Jesus took the full wrath of God on the cross, and God’s anger was satisfied. Now God can look at you without wrath. That is what “propitiation” means: Jesus calmed an angry Father."
        ],
        "word": [
          "The Greek copy uses *hilastērion* (G2435) here, and its close kin *hilasmos* (G2434) in 1 John 2:2. The verb behind them, *hilaskomai*, was what the Greeks did to calm an angry god. In Homer’s Iliad, the Greeks send a great sacrifice so they may “appease” Apollo, who is shooting plague into their camp (Iliad 1.147). Man brings the gift, and the god calms down. Read through that picture, the cross becomes the Son calming an angry Father."
        ],
        "hebrew": [
          "But the Greek copy of Hebrews uses this same word for the lid of the ark: “the cherubims of glory shadowing the mercyseat” (Hebrews 9:5). Beneath it is the Hebrew *kapporet* (H3727), the mercy seat, from *kaphar* (H3722), to cover. Yahuah told Moses what it was for: “And there I will meet with thee, and I will commune with thee from above the mercy seat” (Exodus 25:22).",
          "Notice who provides it. Yahuah designed the mercy seat. Yahuah gave the blood: “For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls” (Leviticus 17:11). In the Greek picture, man brings a gift to calm the god. In the Hebrew, Yahuah Himself gives the covering, so that He can meet with His people."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“Yahuah set Him out in the open as the mercy seat — the place of covering — where, through trust in His blood, the sins already done are covered and forgiven.”*",
          "Paul’s words are careful. Yahuah “set forth” the covering, and it covers “sins that are past.” It opens the door. Then Paul answers the next question himself: “Do we then make void the law through faith? God forbid: yea, we establish the law” (Romans 3:31)."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "The Greeks send sacrifices to “appease” an angry Apollo (Iliad 1.147)."
          ],
          [
            "1098",
            "Anselm",
            "Teaches that the cross repaid the honor owed to an offended God."
          ],
          [
            "1559",
            "Calvin",
            "Teaches that the Son bore the Father’s wrath in the sinner’s place."
          ],
          [
            "2001",
            "A popular hymn",
            "Sings that at the cross the Father’s wrath was poured out and satisfied."
          ],
          [
            "Today",
            "The pulpit",
            "“Jesus took the wrath of God so you don’t have to.”"
          ]
        ],
        "built": [
          "**An angry Father and a gentle Son** — the two set against each other, as if the Son had to talk the Father out of His anger. Scripture says Yahuah Himself “set forth” the covering.",
          "**Wrath settled, walk optional** — if the anger is gone for good, nothing after the door seems to matter."
        ]
      }
    ],
    "closing": [
      "The old path is Abraham’s. He believed Yahuah, and it was counted to him for righteousness. Two chapters later Yahuah told him what came next: “walk before me, and be thou perfect” (Genesis 17:1). The counting opened the door; the walking was the road. Moses said the same to all Israel: “it shall be our righteousness, if we observe to do all these commandments” (Deuteronomy 6:25).",
      "Righteousness is not a certificate passed from one hand to another. It is worn by the people who walk it out. Revelation shows the bride dressed for her wedding and tells us what her clothes are made of: “And to her was granted that she should be arrayed in fine linen, clean and white: for the fine linen is the righteousness of saints” (Revelation 19:8)."
    ],
    "further": [
      [
        "The Old Paths: It Shall Be Our Righteousness",
        "/doctrines/old-paths/it-shall-be-our-righteousness"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Hesiod, Theogony 901–902: Dikē a daughter of Zeus and Themis; dated c. 700 BC.",
      "Paul on Malta dated c. 60 AD.",
      "Luther’s sermon “Two Kinds of Righteousness” (1518/1519): “alien righteousness.”",
      "Calvin, Institutes 3.11.2 (1559 edition): justification as forgiveness of sins and imputation of Christ’s righteousness.",
      "Vulgate Romans 4:3 uses “reputatum est”; Romans 4:6, 8 use forms of “imputare.”",
      "Melanchthon, Apology of the Augsburg Confession IV (1531): justification in a forensic (courtroom) sense.",
      "Westminster Confession 11.1: “by imputing the obedience and satisfaction of Christ unto them.”",
      "Homer, Iliad 1.147: hilassomai, appeasing Apollo, whose arrows bring the plague.",
      "Anselm, Cur Deus Homo (1098): satisfaction of God’s honor.",
      "Calvin on the Son bearing the Father’s wrath (Institutes 2.16, 1559 edition).",
      "Isaiah 64:6 as a national confession in rebellion, following the live page’s argument."
    ]
  },
  "lucifer": {
    "slug": "lucifer",
    "title": "Lucifer",
    "subtitle": "The Fallen Angel Hollywood Built — and Isaiah Never Wrote",
    "opening": [
      "Ask almost any churchgoer who Satan is and the story comes quickly: Lucifer, the most beautiful angel, the worship leader of heaven, who grew proud and fell with a third of the angels. It is preached as Scripture. Most of it is not in Scripture at all.",
      "The name “Lucifer” appears once in the KJV, in Isaiah 14:12, in a chapter that names its subject as “the king of Babylon” (14:4) and calls him “the man” (14:16). The fallen-angel story was built later, out of Greek star-gods, Latin translation, and poets — and along the way the Messiah’s own title was handed to the adversary. Four Greek words carried it in. Choose a word."
    ],
    "tabs": [
      {
        "id": "phosphoros",
        "greek": "Phōsphoros / Heōsphoros",
        "kjv": "day star · Lucifer",
        "role": "The root word",
        "word": [
          "The Greeks had a god of the morning star, the bright star that rises just before dawn. They called him *Heōsphoros* or *Phōsphoros* (G5459), “the light-bringer,” and said he was the son of the dawn goddess Eos. When the Hebrew Scriptures were put into Greek at Alexandria (the Septuagint), the translators put *heōsphoros* in this verse. A Babylonian king’s boast was given the name of a Greek star-god. Around 405 AD Jerome put it into Latin as *lucifer*, “light-bringer,” the Latin name of the same star.",
          "Jerome used that very word for the Son. In 2 Peter 1:19 his Latin Bible reads *lucifer oriatur in cordibus vestris* — “until the light-bringer arise in your hearts.” One Latin word stood for the king of Babylon in Isaiah and for the Messiah in Peter. In 1611 the King James translators kept “Lucifer” as a name in Isaiah, but in 2 Peter 1:19 they wrote “day star.” The link disappeared from the English Bible, and the title stayed with the wrong one."
        ],
        "hebrew": [
          "Isaiah wrote *heylel* (H1966), “shining one.” It comes from *halal* (H1984), to shine — a word that also means to boast. “Son of the morning” is *ben shachar*, son of the dawn (*shachar*, H7837). It is not a name. It is a title the man claimed for himself. And Isaiah tells us who he was: “take up this proverb against the king of Babylon” (Isaiah 14:4). This king said in his heart, “I will ascend into heaven, I will exalt my throne above the stars of God… I will be like the most High” (Isaiah 14:13–14).",
          "The light-bearer title was never his. Yahuah is the light. The Son is the one who carries that light to us — “the bright and morning star” (Revelation 22:16), the “day star” that rises in the heart (2 Peter 1:19). The king of Babylon stole that title for himself. “Lucifer” is the stolen counterfeit, not the name of a being in heaven."
        ],
        "timeline": [
          [
            "c. 250 BC",
            "Alexandria",
            "The Septuagint puts heōsphoros — the Greek morning-star god — in Isaiah 14:12."
          ],
          [
            "c. 230 AD",
            "Origen",
            "Reads Isaiah 14 as the fall of the devil from heaven (On First Principles 1.5)."
          ],
          [
            "c. 405 AD",
            "Jerome",
            "The Latin Vulgate renders the word lucifer — in Isaiah 14:12, and for the Messiah in 2 Peter 1:19."
          ],
          [
            "1611",
            "King James Version",
            "Keeps “Lucifer” as a capitalized name in Isaiah, but writes “day star” in 2 Peter — hiding that the same word was used for the Son."
          ],
          [
            "1667",
            "Milton",
            "Paradise Lost gives the fallen angel his personality, his pride, and his war in heaven."
          ],
          [
            "Today",
            "The pulpit",
            "The story is preached as if Isaiah wrote it."
          ]
        ],
        "built": [
          "**Lucifer as a person** — a name for the devil that Scripture never uses.",
          "**The worship-leader angel** — a biography assembled from Isaiah 14, Ezekiel 28, and Milton, not from the text.",
          "**The Messiah’s title on the adversary** — the light-bringer name of 2 Peter 1:19 given to the one who fell."
        ],
        "verse": {
          "ref": "Isaiah 14:12",
          "text": "How art thou fallen from heaven, O Lucifer, son of the morning! how art thou cut down to the ground, which didst weaken the nations!"
        },
        "taught": [
          "Lucifer was the most beautiful angel in heaven, the worship leader before God’s throne. He grew proud, reached for God’s throne, and was thrown out of heaven. This verse is read as the story of his fall. And so “Lucifer” became the devil’s name."
        ],
        "reread": [
          "Now read it again the way Isaiah meant it: *“How you have fallen from your high seat, king of Babylon — you who called yourself the shining one, son of the dawn! You who crushed the nations are cut down to the ground.”*",
          "Isaiah tells us what people will say when they see him dead: “Is this the man that made the earth to tremble, that did shake kingdoms” (Isaiah 14:16). The man — not an angel. He was “brought down to hell, to the sides of the pit” (Isaiah 14:15) — to *Sheol*, the grave. His boast died with him. The true light-bearer is the Son, who rose from the grave and still carries His Father’s light."
        ]
      },
      {
        "id": "drakon",
        "greek": "Drakōn",
        "kjv": "dragon",
        "role": "The monster",
        "word": [
          "*Drakōn* (G1404) was the serpent-monster of Greek stories. Python was the dragon of Delphi that the god Apollo killed. Ladon was the dragon that guarded the golden apples. To the Greeks a dragon was a creature of legend that heroes fought and killed. Read that way, John’s dragon became a real winged beast, and church art later showed saints spearing one."
        ],
        "hebrew": [
          "In the Hebrew prophets, the dragon — *tannin* (H8577) — is a picture of a king and his empire. Ezekiel said it straight to Pharaoh: “Behold, I am against thee, Pharaoh king of Egypt, the great dragon that lieth in the midst of his rivers” (Ezekiel 29:3). The Greek Old Testament put *drakōn* there. Pharaoh was a man on a throne, not a monster.",
          "John’s dragon wears “seven heads and ten horns, and seven crowns” — the crowns of kingdoms, like the beasts in Daniel 7. And the falling stars come straight from Daniel 8, where an earthly horn “waxed great, even to the host of heaven; and it cast down some of the host and of the stars to the ground, and stamped upon them” (Daniel 8:10). In Daniel, the stars are Yahuah’s people: “they that turn many to righteousness as the stars for ever and ever” (Daniel 12:3)."
        ],
        "timeline": [
          [
            "c. 700 BC",
            "Hesiod",
            "Dragon-monsters fill the Greek myths of the gods."
          ],
          [
            "c. 580 BC",
            "Ezekiel",
            "Calls Pharaoh “the great dragon” — a king, not a creature."
          ],
          [
            "Middle Ages",
            "Church art",
            "Saints Michael and George spear a literal winged dragon."
          ],
          [
            "Today",
            "Popular belief",
            "A red, winged dragon-devil."
          ]
        ],
        "built": [
          "**A literal dragon-devil** in place of the prophets’ picture of beastly empires."
        ],
        "verse": {
          "ref": "Revelation 12:3–4",
          "text": "And there appeared another wonder in heaven; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads. And his tail drew the third part of the stars of heaven, and did cast them to the earth: and the dragon stood before the woman which was ready to be delivered, for to devour her child as soon as it was born."
        },
        "taught": [
          "Satan is a great red dragon. Before the world began, he led a rebellion in heaven, and his tail swept a third of the angels — the stars — down with him. Those fallen angels are the demons today. This verse is the main proof for the whole story."
        ],
        "reread": [
          "Now read it again the way John meant it: *“Then another sign appeared: a beast-power, like Pharaoh, wearing the crowns of kingdoms. It threw down some of Yahuah’s people, and it stood ready to kill the Child the moment He was born.”*",
          "And that is what happened. When the Child was born, King Herod “slew all the children that were in Bethlehem” to get Him (Matthew 2:16). John calls the dragon a “wonder” — the Greek copy says *sēmeion*, a sign, a picture to be read. He even names the power behind the picture: “that old serpent, called the Devil, and Satan, which deceiveth the whole world” (Revelation 12:9). The serpent of the Garden, working through the kings of the earth — not a third of the angels falling before creation."
        ]
      },
      {
        "id": "kosmokrator",
        "greek": "Kosmokratōr",
        "kjv": "rulers of the darkness of this world",
        "role": "The star-rulers",
        "word": [
          "*Kosmokratōr* (G2888) means “world-ruler.” In Greek astrology — the belief that the stars and planets control your life — the planets were called world-rulers. People believed these star-powers ruled their fate, and magicians tried to name them and control them. That is the picture that came back into the church: powers ruling over places, to be named and bound."
        ],
        "hebrew": [
          "The prophets do show powers behind the nations. A messenger told Daniel, “the prince of the kingdom of Persia withstood me one and twenty days” (Daniel 10:13). The Hebrew word for prince is *sar* (H8269), a chief or ruler. But Daniel did not map him or bind him. He mourned and fasted for three weeks, and the messenger told him, “thy words were heard, and I am come for thy words” (Daniel 10:12).",
          "Paul’s answer comes straight from Isaiah. The armor he lists is Yahuah’s own: “For he put on righteousness as a breastplate, and an helmet of salvation upon his head” (Isaiah 59:17). Paul picks it up: “the breastplate of righteousness… the helmet of salvation” (Ephesians 6:14, 17). The believer stands by putting on what Yahuah wears: truth, right living, His word, and prayer."
        ],
        "timeline": [
          [
            "c. 200 BC",
            "Greek astrology",
            "The planets are kosmokratores, rulers of fate."
          ],
          [
            "c. 60 AD",
            "Paul",
            "Uses the word once, and answers it with truth and prayer."
          ],
          [
            "1990s",
            "The spiritual-warfare movement",
            "Teaches “territorial spirits” over cities, to be mapped and bound by name."
          ],
          [
            "Today",
            "The prayer meeting",
            "“Binding” spirits over neighborhoods."
          ]
        ],
        "built": [
          "**Territorial demon-mapping** — the planetary rulers of astrology, renamed."
        ],
        "verse": {
          "ref": "Ephesians 6:12",
          "text": "For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places."
        },
        "taught": [
          "Over every city and nation sits a demon prince. Christians must find out his name, map his territory, and “bind” him in prayer before the city can be won. This verse is the battle plan for spiritual warfare."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“Our fight is not with people. It is with the powers of darkness that rule this age. And we stand against them in Yahuah’s armor — truth, right living, His word, and prayer.”*",
          "Paul gives the order himself: “take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand” (Ephesians 6:13). Stand — not chase, name, and bind. James says the same: “Submit yourselves therefore to God. Resist the devil, and he will flee from you” (James 4:7). The battle is won by obedience, not by a technique."
        ]
      },
      {
        "id": "angelos",
        "greek": "Angelos",
        "kjv": "angel",
        "role": "The wings",
        "word": [
          "*Angelos* (G32) simply means “messenger” — anyone sent with a message. But Greek art gave its divine messengers wings: Hermes had wings on his sandals, and Nike (the goddess of victory) and Eros had wings on their backs. Christian painters borrowed those wings, and the plain word “messenger” turned into a winged spirit."
        ],
        "hebrew": [
          "Hebrews is quoting a psalm: “Who maketh his angels spirits; his ministers a flaming fire” (Psalm 104:4). Now read the verse just before it: Yahuah “maketh the clouds his chariot: who walketh upon the wings of the wind” (Psalm 104:3). The only wings in the passage belong to the wind. The word for angels is *malak* (H4397), messenger. The word for spirits is *ruach* (H7307), wind. David is saying Yahuah sends the winds as His messengers and flames of fire as His servants.",
          "When Yahuah’s messengers came to men, they came looking like men. Abraham looked up, “and, lo, three men stood by him” (Genesis 18:2). No wings. That is why the same letter says, “some have entertained angels unawares” (Hebrews 13:2)."
        ],
        "timeline": [
          [
            "c. 400 BC",
            "Greek art",
            "Nike and Eros painted and carved with wings."
          ],
          [
            "c. 400 AD",
            "Christian art",
            "Angels begin to appear with wings, borrowed from Nike."
          ],
          [
            "1946",
            "Hollywood",
            "A film teaches that a dead man can “earn his wings.”"
          ],
          [
            "Today",
            "The funeral",
            "“Grandma got her wings.”"
          ]
        ],
        "built": [
          "**Winged angels** in place of messengers who looked like men.",
          "**The dead becoming angels** — the immortal soul given wings."
        ],
        "verse": {
          "ref": "Hebrews 1:7",
          "text": "And of the angels he saith, Who maketh his angels spirits, and his ministers a flame of fire."
        },
        "taught": [
          "Angels are shining spirit beings with great white wings, made of fire and light, floating between heaven and earth. And when a believer dies, he joins them. The dead become angels and “get their wings.”"
        ],
        "reread": [
          "Now read it again the way David meant it: *“He makes the winds His messengers, and flames of fire His servants.”*",
          "The same chapter says what messengers are for: “Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?” (Hebrews 1:14). Servants, sent on errands. Not the dead with new wings. The dead sleep until the resurrection, and a man never becomes an angel."
        ]
      }
    ],
    "closing": [
      "Scripture does have an adversary, and it names him by what he does: *satan* (H7854), the accuser — the very word Numbers 22:22 uses for the messenger of Yahuah standing in Balaam’s way; *diabolos* (G1228), the slanderer; and *nachash* (H5175), the serpent, “that old serpent, called the Devil, and Satan” (Revelation 12:9). Not one of his names means light. When he does wear light, it is a costume: “Satan himself is transformed (*metaschēmatizō*, G3345, to change the outward dress) into an angel of light” (2 Corinthians 11:14). “Lucifer” is that costume, sewn by translators.",
      "The light-bearer title belongs to the Son, and Revelation ends by handing it back: “I Jesus have sent mine angel to testify unto you these things… I am the root and the offspring of David, and the bright and morning star” (Revelation 22:16). The one who brings the light is not the one who fell. The one who brings the light is the one who rose."
    ],
    "further": [
      [
        "The Old Paths: A Proverb Against the King of Babylon",
        "/doctrines/old-paths/a-proverb-against-babylon"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Origen, On First Principles 1.5 (Isaiah 14 read as the devil’s fall)",
      "Jerome’s Vulgate, 2 Peter 1:19 (lucifer oriatur)"
    ]
  },
  "predestination": {
    "slug": "predestination",
    "title": "Predestination",
    "subtitle": "Most Deny It by Name — and Live It Every Sunday",
    "opening": [
      "Ask most churchgoers whether they believe in predestination and they will say no. They reject Calvin. They believe a man chooses. But ask how a man is saved and kept, and the answer is the same as Calvin’s: the blood, and nothing after it. No walk, no Torah, no bread. Unless a man turns to open murder or the like, he is assumed safe no matter how he lives.",
      "That is predestination by another name. Calvin fixed the outcome before birth; the modern pulpit fixes it at the altar call. Either way the walk cannot change the ending — and that is fate, not Torah. The Torah taught a choice, renewed every day, and a road walked out after the blood. Two Greek words carried fate into the church. Choose a word."
    ],
    "tabs": [
      {
        "id": "proorizo",
        "greek": "Proorizō",
        "kjv": "predestinate",
        "role": "The root word",
        "word": [
          "*Proorizō* (G4309) is a simple word. It means “to mark out a boundary ahead of time,” like a surveyor marking a property line. But the Greek world believed in fate — everything is fixed, and nothing you do can change it. Later, Augustine taught that God fixed the exact number of the saved, and no one can be added or removed. Read through that lens, the verse turned into a list of names instead of a place God marked out for His people."
        ],
        "hebrew": [
          "Paul tells us who he is talking about in the verse right before: “them that love God” (Romans 8:28). That phrase comes from the Torah, and the Torah tells us who they are: “the faithful God, which keepeth covenant and mercy with them that love him and keep his commandments” (Deuteronomy 7:9).",
          "“Foreknow” is the Hebrew word *yada* (H3045). It means to know someone in a covenant, like a husband knows his wife. And being known never meant you could stop walking right: “You only have I known of all the families of the earth: therefore I will punish you for all your iniquities” (Amos 3:2)."
        ],
        "timeline": [
          [
            "c. 280 BC",
            "The Stoics",
            "All events are fixed by fate (heimarmenē) and governed by providence."
          ],
          [
            "c. 420 AD",
            "Augustine",
            "Once a Manichaean, he teaches that Yahuah’s choice of the saved is fixed and cannot fail."
          ],
          [
            "1536",
            "Calvin",
            "The Institutes: some are predestined to life, others to damnation."
          ],
          [
            "1619",
            "Synod of Dort",
            "The saved cannot finally fall away — the “perseverance of the saints.”"
          ],
          [
            "Today",
            "The pulpit",
            "“If you were chosen, you can’t lose it; if you lose it, you were never chosen.”"
          ]
        ],
        "built": [
          "**Double predestination** — the lost created to be lost.",
          "**A walk that does not matter** — if the outcome is fixed, obedience changes nothing.",
          "**The half-Calvinist** — predestination rejected by name, kept in practice: the blood counts, the walk does not."
        ],
        "verse": {
          "ref": "Romans 8:29–30",
          "text": "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren. Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified."
        },
        "taught": [
          "Before the world was made, God picked a list of names. If your name is on it, you will be saved no matter what. If it is not, you never had a chance. Many churches say they don’t believe this. But they still teach the second half: once you are saved, you can never be lost — so how you live doesn’t really matter."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *the people who love God and keep His commandments — the ones He knows — have a place marked out for them ahead of time: to become like His Son.*",
          "The line is drawn. The people inside it are the ones walking in it. Paul is describing a road, not a list. That is why, in the same chapter, he warns the same people: “if ye live after the flesh, ye shall die” (Romans 8:13)."
        ]
      },
      {
        "id": "pronoia",
        "greek": "Pronoia",
        "kjv": "providence",
        "role": "Fate renamed",
        "word": [
          "*Pronoia* (G4307) means forethought — planning ahead. To Greek philosophers called the Stoics, pronoia was the divine mind that plans everything in advance, so that whatever happens was always going to happen. It was one and the same with fate. At Delphi the goddess Athena was even worshipped as Athena Pronoia, “Athena Forethought.” Read through that lens, the church came to believe God had arranged everything, even a man’s final end, and nothing he does can change it."
        ],
        "hebrew": [
          "But look who holds the pronoia in this verse. Not God — the believer. Paul says, “make not provision (*pronoia*) for the flesh.” Do not plan ahead for sin. The only other place the word appears in the New Testament is a lawyer flattering the governor Felix: “by thy providence” (Acts 24:2). The Stoic god’s forethought has become a man’s job.",
          "And “put on” is Hebrew clothing language. Job said, “I put on righteousness, and it clothed me” (Job 29:14). The Hebrew word is *labash* (H3847), to get dressed. Job put it on by living right. Isaiah gives the same choice Moses gave: “If ye be willing and obedient, ye shall eat the good of the land: But if ye refuse and rebel, ye shall be devoured with the sword” (Isaiah 1:19–20). The “if” is real."
        ],
        "timeline": [
          [
            "c. 300 BC",
            "Zeno and Chrysippus",
            "Providence and fate are one: nothing could have been otherwise."
          ],
          [
            "c. 420 AD",
            "Augustine",
            "Providence becomes the unchangeable decree of who is saved."
          ],
          [
            "1610",
            "The Remonstrants",
            "Followers of Arminius reject predestination — and leave open whether a believer can fall away."
          ],
          [
            "1990",
            "Charles Stanley",
            "Eternal Security: a believer stays saved even if he later stops believing."
          ],
          [
            "Today",
            "The pew",
            "“I don’t believe in predestination” — and “once saved, always saved” in the same breath."
          ]
        ],
        "built": [
          "**Once saved, always saved** — Stoic fate applied to salvation.",
          "**The blood without the bread** — Pesach kept, Hag HaMatzot and the walk to Sinai thrown away.",
          "**No need to endure** — against Matthew 24:13."
        ],
        "verse": {
          "ref": "Romans 13:14",
          "text": "But put ye on the Lord Jesus Christ, and make not provision for the flesh, to fulfil the lusts thereof."
        },
        "taught": [
          "When you believed, you put on Jesus like a robe. Now when God looks at you, He sees only Jesus. Your sins — past, present, and future — are covered. God planned it all ahead of time, and nothing you do can take the robe off. Once saved, always saved."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *“Dress yourselves in Messiah — walk the way He walked. And do not plan ahead for your flesh to get what it wants.”*",
          "Paul says it plainly just before: “now is our salvation nearer than when we believed” (Romans 13:11), so “Let us walk honestly, as in the day” (Romans 13:13). The blood had brought them in, but their deliverance was still ahead, at the end of the road. The robe is not a cover thrown over a careless life. It is a life put on every day, by walking."
        ]
      }
    ],
    "closing": [
      "Salvation in Scripture has a beginning and an end. It begins at the blood, as Israel’s did in Egypt; it continues with the bread, putting the leaven of sin out of the house; and it is walked out by the commandments given at Sinai. The walk is real: “Be thou faithful unto death, and I will give thee a crown of life” (Revelation 2:10).",
      "Revelation closes with the same choice the Torah opened: “He that overcometh… I will not blot out his name out of the book of life” (Revelation 3:5). The book was never sealed by fate. It is kept by those who keep walking."
    ],
    "further": [
      [
        "The Old Paths: Choose Life",
        "/doctrines/old-paths/choose-life"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Charles Stanley, Eternal Security: Can You Be Sure? (1990)",
      "Remonstrance of 1610, article 5 (falling away left open)"
    ]
  },
  "images-in-worship": {
    "slug": "images-in-worship",
    "title": "Images in Worship",
    "subtitle": "The Cross on the Neck, the Steeple, and the Skin",
    "opening": [
      "Look around any crowd and the images are everywhere: a cross on a gold chain, a cross on a ball cap, a crucifix on a rearview mirror, praying hands or a thorn-crowned face tattooed across a forearm. Each one is meant to say, “I belong to Him.” Each one is the very thing the second commandment forbids — a likeness made by hand and worn as a badge of faith.",
      "Inside the church it is the same: a crucifix, an empty cross on the steeple, a stained-glass Messiah, a framed painting of a long-haired man with soft eyes. Most believers have never asked where those came from, or what Yahuah said about them.",
      "He said a great deal. Israel “saw no manner of similitude” at Sinai, and was told to make none (Deuteronomy 4:15–16), and to print no marks on the body (Leviticus 19:28). Three Greek words opened the door that the Torah had shut. Choose a word."
    ],
    "tabs": [
      {
        "id": "stauros",
        "greek": "Stauros",
        "kjv": "cross",
        "role": "The root word",
        "word": [
          "*Stauros* (G4716) in Greek simply meant an upright stake — a pole set in the ground. It was a tool of execution, nothing more. The cross as a holy sign came later, with the emperor Constantine. Around 312 AD he said he saw a sign in the sky with the words “in this sign conquer,” and he put it on his soldiers’ shields (Eusebius, *Life of Constantine* 1.28). From the shields it went to the churches, and from the churches to the necks of the people."
        ],
        "hebrew": [
          "Paul tells us what he means by the stauros in this same letter. He calls it a tree, and he quotes Moses: “Cursed is every one that hangeth on a tree” (Galatians 3:13). Moses wrote it in Hebrew: “he that is hanged is accursed of God” (Deuteronomy 21:23). The Hebrew word is *etz* (H6086), a tree or a piece of wood. To an Israelite, that wood was a place of shame and curse. No one would have worn it.",
          "The Torah also shows what happens when a sign becomes an object. Moses lifted a bronze serpent on a pole, and Yahushua compared His own death to it (John 3:14). But years later Israel burned incense to it. So Hezekiah “brake in pieces the brasen serpent that Moses had made… and he called it Nehushtan” (2 Kings 18:4) — just a piece of brass."
        ],
        "timeline": [
          [
            "c. 312 AD",
            "Constantine",
            "Says he saw a sign in the sky with the words “in this sign conquer,” and puts it on his soldiers’ shields (Eusebius, Life of Constantine 1.28)."
          ],
          [
            "c. 326 AD",
            "Helena",
            "Constantine’s mother is credited with finding the “True Cross”; relic veneration follows."
          ],
          [
            "692",
            "Council in Trullo",
            "Orders the Messiah to be painted as a man rather than a lamb; the crucifix grows from it."
          ],
          [
            "Reformation",
            "Protestants",
            "Remove the body but keep the empty cross."
          ],
          [
            "Today",
            "Necks, caps, and skin",
            "The cross worn on chains, caps, shirts, and tattoos as proof of belonging to Him."
          ]
        ],
        "built": [
          "**The cross as an object of reverence** — a Nehushtan on every steeple.",
          "**Relics and the “True Cross”** — wood treated as holy.",
          "**The cross as a badge** — an image worn to claim the faith whose Torah forbids it."
        ],
        "verse": {
          "ref": "Galatians 6:14",
          "text": "But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world."
        },
        "taught": [
          "Paul gloried in the cross, so we lift it high. The cross is the symbol of our faith. We put it on the steeple, over the altar, on a gold chain, and on the bumper of the car. Wearing it says, “I belong to Jesus.”"
        ],
        "reread": [
          "Now read it again the way Paul meant it: *I will boast in nothing but what Messiah suffered on the tree — the curse He bore for us. Because of it, this world is dead to me, and I am dead to it.*",
          "Paul is not boasting in a shape. He is boasting in a death, and in a life that died with it. Yahushua said the same thing: “take up his cross, and follow me” (Matthew 16:24). A cross you carry every day by denying yourself. Not one you hang on a chain."
        ]
      },
      {
        "id": "eikon",
        "greek": "Eikōn",
        "kjv": "image",
        "role": "The icon",
        "word": [
          "*Eikōn* (G1504) means image or likeness. Plato, the Greek philosopher, taught that everything on earth is a copy — an eikōn — of a perfect pattern in heaven. Church teachers later built on that idea. Defenders of icons argued that since the unseen God had become visible, He could now be painted. At the Second Council of Nicaea (787) the bishops ruled that honor given to a painted image passes up to the one it shows. Our English word “icon” comes straight from eikōn."
        ],
        "hebrew": [
          "Paul’s word goes back to the first page of the Bible. The Greek Old Testament uses eikōn for the Hebrew *tselem* (H6754), image: “So God created man in his own image, in the image of God created he him” (Genesis 1:27). Adam was the image — a living man who showed what his Maker is like, the way a son shows his father. No one painted Adam on a wall.",
          "And no one was ever to paint Yahuah. “Take ye therefore good heed unto yourselves; for ye saw no manner of similitude on the day that Yahuah spake unto you in Horeb out of the midst of the fire: Lest ye corrupt yourselves, and make you a graven image” (Deuteronomy 4:15–16). *Temunah* (H8544), similitude, means a shape or form. Israel saw no shape, so they were to make none. An image of the invisible God is not the invisible God. A son can look like his father; he is not his father."
        ],
        "timeline": [
          [
            "c. 380 BC",
            "Plato",
            "Earthly things are images (eikones) of heavenly realities."
          ],
          [
            "787",
            "Second Council of Nicaea",
            "Declares that images of the Messiah and saints are to be venerated."
          ],
          [
            "1940",
            "Warner Sallman",
            "Head of Christ is printed hundreds of millions of times for Protestant homes and Sunday schools."
          ],
          [
            "Today",
            "The living room",
            "A painted face that most believers take for His."
          ]
        ],
        "built": [
          "**Icon veneration** — bowing before painted images.",
          "**The Protestant picture of Jesus** — a likeness Scripture never gives and the second commandment forbids."
        ],
        "verse": {
          "ref": "Colossians 1:15",
          "text": "Who is the image of the invisible God, the firstborn of every creature:"
        },
        "taught": [
          "Jesus is God you can see. The invisible God became visible in Him, so now it is right to make pictures of Him. That is how the icons were defended, and why a painted face of Jesus hangs in so many homes and Sunday schools. Many also read this verse to say that Jesus is God Himself."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *The Son is the living likeness of the unseen Elohim — He shows us what the Father is like, as Adam was made to do. And He is the firstborn, the Son who holds first place* (Psalm 89:27).",
          "Paul says who put that likeness in Him: “it pleased the Father that in him should all fulness dwell” (Colossians 1:19). And he says where the image is to be found now — not on a wall, but in changed lives: “the new man, which is renewed in knowledge after the image of him that created him” (Colossians 3:10). Yahuah never wanted a painting of His Son. He wants a people who look like Him."
        ]
      },
      {
        "id": "stigma",
        "greek": "Stigma",
        "kjv": "marks",
        "role": "The mark on the skin",
        "word": [
          "*Stigma* (G4742) was the Greek word for a brand or tattoo pricked into the skin. Slaves were marked with their master’s sign. People who served a god were marked with that god’s sign. Herodotus, a Greek historian, tells of a runaway who fled to a temple of Heracles and received the god’s sacred marks (*Histories* 2.113). When King Ptolemy IV wanted to force Jews into the worship of Dionysus, he ordered them branded with the god’s ivy leaf (3 Maccabees 2:29). The mark said whose you were."
        ],
        "hebrew": [
          "The Torah forbids that kind of mark outright: “Ye shall not make any cuttings in your flesh for the dead, nor print any marks upon you: I am Yahuah” (Leviticus 19:28). The Hebrew words are *ketovet* (H3793), something written, and *qa’aqa* (H7085), a cut. Writing cut into the skin — a tattoo. Paul knew this law. He would never have printed anything on his body.",
          "Israel did have a mark of belonging, but it was not ink: “thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes” (Deuteronomy 6:8). The sign was His words, kept and lived."
        ],
        "timeline": [
          [
            "c. 430 BC",
            "Herodotus",
            "Temple devotees bear their god’s sacred marks."
          ],
          [
            "c. 217 BC",
            "Ptolemy IV",
            "Orders Jews branded with the ivy leaf of Dionysus (3 Maccabees 2:29)."
          ],
          [
            "c. 55 AD",
            "Paul",
            "Calls his scars from rods and stones “the marks of the Lord Jesus.”"
          ],
          [
            "1224",
            "Francis of Assisi",
            "Said to receive the “stigmata,” wounds of the crucifixion in his body."
          ],
          [
            "Today",
            "The tattoo parlor",
            "Crosses and verses inked as a sign of faith, sometimes defended from Galatians 6:17."
          ]
        ],
        "built": [
          "**The Christian tattoo** — the pagan devotee’s mark, renamed as a testimony.",
          "**Stigmata** — Paul’s scars turned into a miracle of the flesh."
        ],
        "verse": {
          "ref": "Galatians 6:17",
          "text": "From henceforth let no man trouble me: for I bear in my body the marks of the Lord Jesus."
        },
        "taught": [
          "Paul carried marks on his body to show he belonged to Jesus. So a cross or a Bible verse tattooed on the arm is a good way to witness. Rome reads it another way: Paul bore the wounds of the crucifixion, the “stigmata,” as Francis of Assisi later was said to. Either way, a mark on the skin becomes a badge of faith."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *From now on, let no one trouble me. The scars on my body show whose servant I am. I took them for Master Yahushua.*",
          "Paul lists those scars himself: “Thrice was I beaten with rods, once was I stoned” (2 Corinthians 11:25). In the same chapter as our verse, he warns about men who “desire to make a fair shew in the flesh” (Galatians 6:12). Paul’s marks were not for show, and he did not choose them. He did not print them on his skin. Others beat them into it."
        ]
      }
    ],
    "closing": [
      "Scripture shows the Son by what He did and what He said, never by what He looked like — and that was deliberate. The second commandment was not cancelled when the Messiah came; it was the very ground the apostles preached on in Athens (Acts 17:29).",
      "Revelation shows that what is worn on the hand and the forehead matters: one mark belongs to the beast (Revelation 13:16), and the other is the Name. It ends with the face that matters: “And they shall see his face; and his name shall be in their foreheads” (Revelation 22:4). Not a picture or a tattoo — His name, and the real face, when He comes."
    ],
    "further": [
      [
        "The Old Paths: No Manner of Similitude",
        "/doctrines/old-paths/no-manner-of-similitude"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Eusebius, Life of Constantine 1.28",
      "Council in Trullo (692), canon 82",
      "Herodotus, Histories 2.113",
      "3 Maccabees 2:29",
      "Warner Sallman, Head of Christ (1940)"
    ]
  },
  "clergy-over-the-people": {
    "slug": "clergy-over-the-people",
    "title": "Clergy over the People",
    "subtitle": "One Pulpit, One Pew — and the Wall Between Them",
    "opening": [
      "In almost every church there are two kinds of people: the ones who are ordained and the ones who are not. One stands in the pulpit; the rest sit in the pews. Rome calls them priests; Protestants call them pastors, reverends, or ministers. Either way, one man speaks for Yahuah and the rest listen.",
      "Protestants are quick to say what is wrong with Rome: a priest who hears confession and speaks for Yahuah stands where only the Messiah should stand (1 Timothy 2:5). Then they go to church and say, “My pastor says.” The Reformation of the 1500s removed the collar and the confession booth, but it kept the man in the middle — the pastor is the Catholic priest under another title. One man still reads, interprets, and decides, and the people still repeat him.",
      "Torah called the whole nation “a kingdom of priests” (Exodus 19:6). Four Greek words built the wall between pulpit and pew. Choose a word."
    ],
    "tabs": [
      {
        "id": "episkopos",
        "greek": "Episkopos",
        "kjv": "bishop",
        "role": "The root word",
        "word": [
          "*Episkopos* (G1985) means “one who watches over.” In Greek cities it was the title of officials sent to oversee a town for its rulers. In Paul’s letters the overseers are simply the elders — several in each assembly, serving together (Acts 20:17, 28; Titus 1:5, 7). Then, around 110 AD, Ignatius wrote, “do nothing without the bishop,” and one overseer was lifted above all the elders. Notice too: the word “office” is not in the Greek text of verse 1. The translators added it. The Greek simply says, “if a man desire oversight.”"
        ],
        "hebrew": [
          "Peter shows what this word means in Hebrew. Choosing a man to replace Judas, he quoted David: “his bishoprick let another take” (Acts 1:20). David had written, “Let his days be few; and let another take his office” (Psalm 109:8). The Hebrew word is *pequddah* (H6486), from *pakad* (H6485), to watch over or take care of. It means a charge — a duty given to someone.",
          "The same word describes Eleazar the priest, who had “the oversight of all the tabernacle” (Numbers 4:16): the lamp oil, the incense, the anointing oil, the vessels. That is oversight in Hebrew. A job of care and service. Not a throne."
        ],
        "timeline": [
          [
            "c. 110 AD",
            "Ignatius",
            "“Do nothing without the bishop” — one overseer now stands above the elders."
          ],
          [
            "c. 250 AD",
            "Cyprian",
            "The bishop is the center of the church; outside him there is no church."
          ],
          [
            "c. 380 AD",
            "Rome",
            "Bishops rule cities; the bishop of Rome claims first place."
          ],
          [
            "Today",
            "The pastor",
            "One man runs the assembly, often by title and salary."
          ]
        ],
        "built": [
          "**The single ruling pastor or bishop** in place of a body of elders.",
          "**The pulpit as authority** — one voice, many silent."
        ],
        "verse": {
          "ref": "1 Timothy 3:1–2",
          "text": "This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach;"
        },
        "taught": [
          "This is the job posting for the top man in the church. The bishop rules over a region; the senior pastor rules over a congregation. He sits above everyone else, and the people answer to him. Reaching that office is treated as the highest calling a man can have."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *If a man wants to watch over the flock, he wants a good work. So a watchman must be blameless, faithful to his one wife, awake, sober, well-behaved, open-hearted to guests, and able to teach.*",
          "Paul calls it “a good work,” not a high seat. And Peter, an elder himself, told the elders how to do it: “Feed the flock of God which is among you, taking the oversight thereof… Neither as being lords over God’s heritage, but being ensamples to the flock” (1 Peter 5:2–3). Among the flock, not above it."
        ]
      },
      {
        "id": "hiereus",
        "greek": "Hiereus · Laikos",
        "kjv": "priest · laity",
        "role": "The priest class",
        "word": [
          "*Hiereus* (G2409), “priest,” was the man who served in a Greek temple. He stood between the worshiper and the god, offered the sacrifice, and spoke for the god. Around 96 AD, Clement of Rome became the first church writer to use the word *laikos*, “layman” — the common man who stands back while the priests serve at the altar. Church leaders soon took that pattern for themselves. Two classes were born: clergy and laity. Yet the Greek text never calls a church leader a hiereus. It uses the word for the Levites, for pagan priests (Acts 14:13), and for all believers together — as in this verse."
        ],
        "hebrew": [
          "John is echoing Moses at Mount Sinai: “And ye shall be unto me a kingdom of priests, and an holy nation” (Exodus 19:6). The Hebrew word is *kohen* (H3548), a priest — one who comes near to serve. Yahuah’s plan was a whole nation of them.",
          "Under the Levitical order, the priests came from one tribe. That order pointed to Yahushua, who entered the holy place “by his own blood… once” (Hebrews 9:12). Now Peter takes Moses’ words and gives them to every believer: “But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people” (1 Peter 2:9)."
        ],
        "timeline": [
          [
            "c. 96 AD",
            "Clement of Rome",
            "First use of “layman” (laikos) as a separate class."
          ],
          [
            "c. 200 AD",
            "Tertullian",
            "Calls church leaders a priesthood (sacerdotium)."
          ],
          [
            "1215",
            "Fourth Lateran Council",
            "Requires every believer to confess to a priest."
          ],
          [
            "Today",
            "Both camps",
            "Ordained clergy and the laity — whether called priest or pastor."
          ]
        ],
        "built": [
          "**A priest between the believer and Yahuah.**",
          "**The laity** — the people of Yahuah reduced to an audience."
        ],
        "verse": {
          "ref": "Revelation 1:6",
          "text": "And hath made us kings and priests unto God and his Father; to him be glory and dominion for ever and ever. Amen."
        },
        "taught": [
          "Yes, all believers are priests — in a spiritual way. But in real church life, only the ordained man can lead the service, serve communion, or explain the Bible with authority. Rome calls him a priest. Protestants call him the pastor or the minister. Everyone else is the “laity” — the people in the pews who watch and listen."
        ],
        "reread": [
          "Now read it again the way John meant it: *He has made all of us — every believer — a kingdom, priests who serve His God and Father.*",
          "Not some of us. Us. And only one go-between is left: “For there is one God, and one mediator between God and men, the man Christ Jesus” (1 Timothy 2:5). One God. One mediator — a man, the Son. No priest and no pastor stands in the middle of that."
        ]
      },
      {
        "id": "poimen",
        "greek": "Poimēn",
        "kjv": "pastors",
        "role": "The Protestant priest",
        "word": [
          "*Poimēn* (G4166) means shepherd. Homer, the old Greek poet, called kings like Agamemnon *poimēn laōn*, “shepherd of the people” — the title of a ruler over the crowd. That is how the word came to sound in the church: one man over the people. But this is the only verse in the Greek text where poimēn is used for a leader in the assembly. It sits in a list of gifts, and it is plural — “pastors.” Paul never put “Pastor” in front of a man’s name, and he never made one man the head of an assembly."
        ],
        "hebrew": [
          "Paul’s words echo the prophet Jeremiah: “And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding” (Jeremiah 3:15). Yahuah gives them; Paul says, “he gave some.” The Hebrew word is *ro’eh* (H7462), a shepherd — one who feeds. And the first Shepherd is Yahuah Himself: “Yahuah is my shepherd; I shall not want” (Psalm 23:1).",
          "The prophets also warned about shepherds who rule for themselves: “Woe be to the shepherds of Israel that do feed themselves!” (Ezekiel 34:2). Yahuah’s answer was to take the flock back: “Behold, I, even I, will both search my sheep, and seek them out” (Ezekiel 34:11)."
        ],
        "timeline": [
          [
            "c. 750 BC",
            "Homer",
            "Kings are poimēn laōn — shepherds over the people."
          ],
          [
            "c. 60 AD",
            "Paul",
            "Lists “pastors and teachers” as one of several gifts (Ephesians 4:11)."
          ],
          [
            "1517",
            "The Reformation",
            "Protestants break from Rome and reject the priest as mediator."
          ],
          [
            "1541",
            "Calvin’s Geneva",
            "The Ecclesiastical Ordinances make the pastor the first office of the church."
          ],
          [
            "Today",
            "The pew",
            "“My pastor says” — the priest’s authority under a Protestant title."
          ]
        ],
        "built": [
          "**The senior pastor** — one man over the assembly, as the priest was over the parish.",
          "**“My pastor says”** — the people of Yahuah repeating a man instead of testing the Scripture (Acts 17:11)."
        ],
        "verse": {
          "ref": "Ephesians 4:11",
          "text": "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers;"
        },
        "taught": [
          "Every church needs a pastor — the man God called to lead it. He preaches, counsels, marries, buries, and decides. People say “my pastor says” the way Catholics say “Father says.” Protestants left Rome because a priest stood between God and the people. But the pastor now stands in that same place under another title. This verse is read as his job description."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *He gave gifts to His people: some sent out, some prophets, some who carry the good news, and some who feed the flock and teach it.*",
          "Then Paul tells us why: “For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ” (Ephesians 4:12). The shepherds get the saints ready, and the saints do the work of the ministry. The gift was given so the people would grow up — “That we henceforth be no more children” (Ephesians 4:14). Not so they would spend their lives saying, “my pastor says.”"
        ]
      },
      {
        "id": "anathema",
        "greek": "Anathema",
        "kjv": "accursed",
        "role": "The curse",
        "word": [
          "*Anathema* (G331) first meant an offering hung up in a Greek temple — a gift set apart for a god. From the fourth century, church councils turned it into a sentence. The Council of Nicaea (325) closed its creed with one: whoever said otherwise than the council was declared anathema — cut off and cursed. The word became the bishops’ weapon against anyone who questioned them."
        ],
        "hebrew": [
          "Beneath it is the Hebrew *cherem* (H2764), something devoted to Yahuah — given over wholly to Him, often for destruction. The Greek Old Testament uses anathema for it at Jericho: “And the city shall be accursed, even it, and all that are therein, to Yahuah” (Joshua 6:17).",
          "Paul’s warning comes straight out of the Torah. Moses wrote that even a prophet whose signs and wonders come true must not be followed if he says, “Let us go after other gods, which thou hast not known” (Deuteronomy 13:1–3). Paul says the same: not even “we, or an angel from heaven.” The test was never a council. The test was what Yahuah had already spoken."
        ],
        "timeline": [
          [
            "c. 400 BC",
            "Greek temples",
            "Anathēmata — votive offerings hung up for the gods."
          ],
          [
            "325 AD",
            "Nicaea",
            "Councils begin closing their creeds with anathemas."
          ],
          [
            "1054",
            "East and West",
            "Bishops of Rome and Constantinople anathematize each other."
          ],
          [
            "Today",
            "Church discipline",
            "Leadership can declare a member “outside the church.”"
          ]
        ],
        "built": [
          "**Excommunication by office** — the clergy holding the keys over the people.",
          "**Creeds enforced by curse** in place of Scripture tested by every reader (Acts 17:11)."
        ],
        "verse": {
          "ref": "Galatians 1:8",
          "text": "But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."
        },
        "taught": [
          "This verse guards the creeds. Whoever denies what the church has defined — the Trinity, the sacraments, the authority of the church — is preaching “another gospel” and is accursed. The great councils closed their creeds with that very word, anathema. Today a church board can still put a member out for questioning what the pulpit teaches."
        ],
        "reread": [
          "Now read it again the way Paul meant it: *If anyone — even I, even an angel — brings you a different good news from the one you first received, let him be devoted to destruction.*",
          "Paul says it twice: “If any man preach any other gospel unto you than that ye have received, let him be accursed” (Galatians 1:9). The measure is the message already given — “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them” (Isaiah 8:20). That measure judges the councils too. When a council adds a creed the apostles never preached and curses everyone who will not sign it, Paul’s anathema does not fall on the believer. It falls on the council."
        ]
      }
    ],
    "closing": [
      "The assembly needs elders who teach and watch — but as brothers, not as a priesthood above the brethren. “One is your Master, even Messiah; and all ye are brethren” (Matthew 23:8).",
      "Revelation names the only priesthood that remains: “Thou… hast made us unto our God kings and priests: and we shall reign on the earth” (Revelation 5:10). Us — not them; not the priest, and not the pastor."
    ],
    "further": [
      [
        "The Old Paths: A Kingdom of Priests",
        "/doctrines/old-paths/a-kingdom-of-priests"
      ],
      [
        "Every borrowed word: all {count} Greek words behind the church’s doctrines",
        "/doctrines/borrowed-words/"
      ],
      [
        "The investigation: Spoken in Hebrew",
        "/investigations/spoken-in-hebrew/"
      ]
    ],
    "verify": [
      "Ignatius, Smyrnaeans 8 (“do nothing without the bishop”)",
      "Cyprian, On the Unity of the Church 6",
      "1 Clement 40.5 (laikos)",
      "Calvin, Ecclesiastical Ordinances (1541)",
      "Homer, poimēn laōn (e.g. Iliad 2.243)"
    ]
  }
};
