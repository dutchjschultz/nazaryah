// departure-tabs 1009 V3.js
// V3: Immortal Soul gains a sixth tab, Nous (mind); opening, closing and Further Reading say six words.
// V2: four new tabbed Departure pages — lucifer, predestination, images-in-worship, clergy-over-the-people.
// V1: First build: tabbed Departure page content — Immortal Soul only (pilot)
//
// SAVE AS: src/data/departure-tabs.js
// Text marks: *word* = italic, **phrase** = bold.

export const departureTabs = {
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
          "*Psychē* (G5590) is the word the Greek New Testament uses for “soul.” In Greek myth, Psyche was a mortal woman made immortal by Zeus, painted with butterfly wings — *psychē* also meant butterfly, the creature that leaves its old body and flies away. Plato built a doctrine on the word: the psychē is immortal by nature, trapped in the body, and set free at death (Phaedo)."
        ],
        "hebrew": [
          "*Nephesh* (H5315) — a living, breathing creature. Man is a nephesh; he does not have one (Genesis 2:7). A dead body is called a dead nephesh (Numbers 6:6). “His breath goeth forth, he returneth to his earth; in that very day his thoughts perish” (Psalm 146:4). The bridge is in the New Testament itself: Acts 2:27 quotes Psalm 16:10, and where the psalm says nephesh, the Greek says psychē."
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
        ]
      },
      {
        "id": "pneuma",
        "greek": "Pneuma",
        "kjv": "spirit",
        "role": "The fallback",
        "word": [
          "When nephesh is shown to them, many teachers retreat: the soul may die, but the *spirit* lives on. That moves the same Greek idea onto a second word, *pneuma* (G4151). For the Stoics, pneuma was a fiery divine breath running through the universe, and a man’s spirit was a spark of it that returned to the whole at death."
        ],
        "hebrew": [
          "*Ruach* (H7307) — breath, wind. Man and beast have the same ruach: “as the one dieth, so dieth the other; yea, they have all one breath” (Ecclesiastes 3:19). If a man’s spirit is a conscious being that lives on, so is a cow’s. “The spirit shall return unto God who gave it” (Ecclesiastes 12:7) is the breath of life going back to its Giver, the way the dust goes back to the earth — not going back thinking: “his breath goeth forth… in that very day his thoughts perish” (Psalm 146:4)."
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
        ]
      },
      {
        "id": "athanasia",
        "greek": "Athanasia",
        "kjv": "immortality",
        "role": "The gods’ word",
        "word": [
          "*Athanasia* (G110) means deathlessness. In Homer, the gods are simply called *the athanatoi* — the deathless ones. Immortality was what made a god a god. Plato gave it to every human soul."
        ],
        "hebrew": [
          "Scripture uses the word only twice for a living being, and never for a soul at birth. Yahuah “only hath immortality” (1 Timothy 6:16). Man must *put it on* at the resurrection: “this mortal must put on immortality” (1 Corinthians 15:53). It is something to be sought (Romans 2:7), and after the fall man was barred from the tree of life, “lest he… eat, and live for ever” (Genesis 3:22)."
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
        ]
      },
      {
        "id": "daimonion",
        "greek": "Daimonion",
        "kjv": "devil",
        "role": "The spirits of the dead",
        "word": [
          "*Daimonion* (G1140) is rendered “devil” in the KJV. To the Greeks, a daimōn was a spirit being — and often the soul of someone who had died. Hesiod taught that the men of the golden age became daimones after death, watching over the living (Works and Days 121–126)."
        ],
        "hebrew": [
          "*Shedim* (H7700) — the false gods behind the idols: “They sacrificed unto devils, not to God; to gods whom they knew not” (Deuteronomy 32:17). Paul quotes that verse to Corinth (1 Corinthians 10:20). The Torah forbids seeking the dead at all: “There shall not be found among you… a consulter with familiar spirits… or a necromancer” (Deuteronomy 18:10–11)."
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
        ]
      },
      {
        "id": "phantasma",
        "greek": "Phantasma",
        "kjv": "spirit",
        "role": "The ghost",
        "word": [
          "*Phantasma* (G5326) is an apparition, a ghost. Homer’s Odysseus goes to the edge of the underworld and the shades of the dead come up to speak with him (Odyssey 11). When the disciples saw Yahushua walking on the water, they cried out, “It is a spirit (*phantasma*)” (Matthew 14:26) — and He answered, “Be of good cheer; it is I; be not afraid.”"
        ],
        "hebrew": [
          "The dead do not walk: “the dead know not any thing” (Ecclesiastes 9:5). When Saul went to the medium at Endor (1 Samuel 28), Scripture records it as his sin, not as a doorway to the dead: he died “for asking counsel of one that had a familiar spirit” (1 Chronicles 10:13). After the resurrection Yahushua said, “a spirit hath not flesh and bones, as ye see me have” (Luke 24:39)."
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
        ]
      },
      {
        "id": "nous",
        "greek": "Nous",
        "kjv": "mind",
        "role": "The last refuge",
        "word": [
          "*Nous* (G3563), “mind,” was the Greek philosophers’ name for the highest part of man. Anaxagoras taught a cosmic Mind that orders the universe. Plato made the reasoning part of the soul its divine and undying part, and Aristotle said that the active mind alone is “immortal and eternal” (*On the Soul* 3.5). When the soul is gone and the spirit is gone, the mind is where the undying self is kept."
        ],
        "hebrew": [
          "Hebrew thinks with the *lev* (H3820), the heart, and the whole man dies: “His breath goeth forth, he returneth to his earth; in that very day his thoughts perish” (Psalm 146:4). “For the living know that they shall die: but the dead know not any thing” (Ecclesiastes 9:5). Paul shows the bridge himself: “who hath known the mind of the Lord?” (Romans 11:34) quotes Isaiah 40:13, where the Hebrew is *ruach* — breath, not an undying intellect."
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
        "All six words on Words Your Bible Borrowed",
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
          "*Heōsphoros* and *Phōsphoros* (G5459), “light-bringer,” were the Greek names of the morning-star god, the son of the dawn goddess Eos. When the Septuagint rendered Isaiah 14:12, it put *heōsphoros* where the Hebrew had heylel — giving a Babylonian king’s boast the name of a Greek god. Jerome’s Latin carried it one step further: *lucifer*, the Latin name of the same star.",
          "Jerome used the same Latin word for the Messiah. In 2 Peter 1:19 his Vulgate reads *lucifer oriatur in cordibus vestris* — “until the light-bringer arise in your hearts.” One word, *lucifer*, stood for the king of Babylon in Isaiah and for the Son in Peter. In 1611 the King James translators kept “Lucifer” as a name in Isaiah 14:12, but in 2 Peter 1:19 they wrote “day star.” The connection disappeared from the English Bible, and the title stayed with the wrong one."
        ],
        "hebrew": [
          "*Heylel* (H1966), “shining one,” is a title the king of Babylon claimed for himself (Isaiah 14:12–13). The chapter is “a proverb against the king of Babylon” (14:4), and the onlookers call him “the man” (14:16). The only rightful morning star in Scripture is the Son (Revelation 22:16), and Peter uses *phōsphoros* in that good sense: “until the day dawn, and the day star arise in your hearts” (2 Peter 1:19)."
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
        ]
      },
      {
        "id": "drakon",
        "greek": "Drakōn",
        "kjv": "dragon",
        "role": "The monster",
        "word": [
          "*Drakōn* (G1404), “dragon,” was the serpent-monster of Greek myth: Python, the dragon of Delphi slain by Apollo, and Ladon, who guarded the golden apples. In the Greek world the dragon was a creature of legend that heroes fought."
        ],
        "hebrew": [
          "*Tannin* (H8577) in the prophets is a picture of an empire and its king. Ezekiel calls Pharaoh “the great dragon that lieth in the midst of his rivers” (Ezekiel 29:3). When Revelation shows a dragon with heads, horns, and crowns (Revelation 12:3), it is using the same prophetic picture of earthly powers that Daniel used for his beasts."
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
        ]
      },
      {
        "id": "kosmokrator",
        "greek": "Kosmokratōr",
        "kjv": "rulers of the darkness of this world",
        "role": "The star-rulers",
        "word": [
          "*Kosmokratōr* (G2888), “world-ruler,” was a title used in Greek astrology and magic for the planetary powers believed to govern human life. Paul uses it once: “rulers of the darkness of this world” (Ephesians 6:12)."
        ],
        "hebrew": [
          "The prophets describe powers behind nations — “the prince of the kingdom of Persia withstood me” (Daniel 10:13) — but the answer Scripture gives is never a technique of combat. It is obedience and prayer: “Submit yourselves therefore to God. Resist the devil, and he will flee from you” (James 4:7). Paul’s armor in the very same chapter is truth, righteousness, the word, and prayer (Ephesians 6:14–18)."
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
        ]
      },
      {
        "id": "angelos",
        "greek": "Angelos",
        "kjv": "angel",
        "role": "The wings",
        "word": [
          "*Angelos* (G32) simply means “messenger.” But Greek art pictured its divine messengers with wings — Hermes with winged sandals, Nike and Eros with wings on their backs. Christian art borrowed the wings."
        ],
        "hebrew": [
          "*Malak* (H4397), “messenger.” In the Torah, messengers come looking like men: Abraham saw “three men” (Genesis 18:2), and “there came two angels to Sodom” whom the men of the city took for men (Genesis 19:1, 5). “Some have entertained angels unawares” (Hebrews 13:2). The winged cherubim and seraphim are separate beings, never called malak."
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
        "All 4 words on Words Your Bible Borrowed",
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
          "*Proorizō* (G4309) means “to mark out the boundary beforehand.” Paul uses it of a purpose Yahuah set in advance — that those who are His would be “conformed to the image of his Son” (Romans 8:29). The word marks out a destination for a people, not a list of names fixed by fate."
        ],
        "hebrew": [
          "Hebrew has no word for fate. It has *yada* (H3045), to know, and *bachar* (H977), to choose — and the choosing runs both ways: Yahuah chooses a people, and every man is told to choose life (Deuteronomy 30:19). Jeremiah was known and appointed before birth for a task (Jeremiah 1:5), not sealed for salvation regardless of his walk."
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
        ]
      },
      {
        "id": "pronoia",
        "greek": "Pronoia",
        "kjv": "providence",
        "role": "Fate renamed",
        "word": [
          "*Pronoia* (G4307), “forethought, providence,” was a central idea of Stoic philosophy: a divine reason that arranges everything, so that whatever happens was always going to happen. At Delphi, Athena was even worshipped as Athena Pronoia. In the New Testament the word appears only of Felix’s government (Acts 24:2) and of making “provision for the flesh” (Romans 13:14)."
        ],
        "hebrew": [
          "Scripture’s picture is a Father who knows and warns, not a fate that rolls over the will. “If ye be willing and obedient, ye shall eat the good of the land: But if ye refuse and rebel, ye shall be devoured” (Isaiah 1:19–20). The “if” is real. Names can be blotted out (Exodus 32:33; Revelation 3:5)."
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
        "All 2 words on Words Your Bible Borrowed",
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
          "*Stauros* (G4716) in Greek means an upright stake or pale. The New Testament also calls it a tree: “whom ye slew and hanged on a tree” (Acts 5:30; Galatians 3:13). The cross as a sacred symbol — on buildings, necks, and steeples — came later."
        ],
        "hebrew": [
          "The Torah speaks of a man “hanged on a tree” (Deuteronomy 21:22–23), and of a bronze serpent lifted on a pole for healing (Numbers 21:8–9). Yahushua compared His death to that pole (John 3:14). But when Israel began to burn incense to the bronze serpent, Hezekiah broke it in pieces and called it Nehushtan — “a piece of brass” (2 Kings 18:4). The sign was never meant to be worshipped."
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
        ]
      },
      {
        "id": "eikon",
        "greek": "Eikōn",
        "kjv": "image",
        "role": "The icon",
        "word": [
          "*Eikōn* (G1504), “image,” was a key word of Greek philosophy: Plato taught that earthly things are images of heavenly forms. The church later argued that honor paid to an image passes up to the one it represents — and from that argument came the icon."
        ],
        "hebrew": [
          "*Pesel* (H6459), graven image, and *temunah* (H8544), likeness — both forbidden in worship (Exodus 20:4; Deuteronomy 4:16). “To whom then will ye liken God? or what likeness will ye compare unto him?” (Isaiah 40:18). Paul said the same on Mars’ Hill: the Godhead is not “like unto gold, or silver, or stone, graven by art and man’s device” (Acts 17:29)."
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
        ]
      },
      {
        "id": "stigma",
        "greek": "Stigma",
        "kjv": "marks",
        "role": "The mark on the skin",
        "word": [
          "*Stigma* (G4742) was the Greek word for a brand or tattoo pricked into the skin. Slaves were marked with their master’s sign, and devotees were marked with the sign of their god. Herodotus tells of a runaway who took refuge at a temple of Heracles and received the god’s sacred marks (Histories 2.113). When Ptolemy IV wanted to force Jews into the worship of Dionysus, he ordered them branded with the god’s ivy leaf (3 Maccabees 2:29). The mark said whose you were."
        ],
        "hebrew": [
          "“Nor print any marks upon you: I am Yahuah” (Leviticus 19:28). Israel’s mark of belonging was obedience — His words bound on the hand and between the eyes (Deuteronomy 6:8). When Paul says, “I bear in my body the marks of the Lord Jesus” (Galatians 6:17), he means the scars of his beatings: “thrice was I beaten with rods, once was I stoned” (2 Corinthians 11:25). He was not describing ink."
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
        "All 3 words on Words Your Bible Borrowed",
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
          "*Episkopos* (G1985), “overseer,” was the title of civic officials in Greek cities. In the New Testament the overseers are the same men as the elders (Acts 20:17, 28; Titus 1:5–7) — several in each assembly, serving together."
        ],
        "hebrew": [
          "*Pakad* (H6485), to oversee, to watch over — the work given to Eleazar over the tabernacle (Numbers 4:16). Oversight in Israel was service and care, never a rank above the congregation. Peter, an elder himself, told the elders not to act as “lords over God’s heritage” (1 Peter 5:3)."
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
        ]
      },
      {
        "id": "hiereus",
        "greek": "Hiereus · Laikos",
        "kjv": "priest · laity",
        "role": "The priest class",
        "word": [
          "*Hiereus* (G2409), “priest,” was the servant of a Greek temple. The New Testament uses it only for the Levitical priests, for pagan priests (Acts 14:13), and for all believers together (Revelation 1:6) — never for a church office. The English word “priest” actually comes from *presbyteros*, “elder.” Clement of Rome, around 96 AD, is the first to use *laikos*, “layman,” to mark off ordinary believers from the ministers."
        ],
        "hebrew": [
          "*Kohen* (H3548) — the Levitical priest, from one tribe, whose service the cross fulfilled. In the renewed covenant, the priesthood belongs to the whole people again: “a kingdom of priests” (Exodus 19:6), “a royal priesthood” (1 Peter 2:9)."
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
        ]
      },
      {
        "id": "poimen",
        "greek": "Poimēn",
        "kjv": "pastors",
        "role": "The Protestant priest",
        "word": [
          "*Poimēn* (G4166), “shepherd.” Homer calls kings like Agamemnon *poimēn laōn*, “shepherd of the people” — the Greek title of a ruler over the crowd. In the New Testament the word for an assembly leader appears once, in a list of gifts: “and some, pastors and teachers” (Ephesians 4:11). It was never an office title, never one man over the assembly, and never “the pastor.”"
        ],
        "hebrew": [
          "*Ro’eh* (H7462), shepherd. “Yahuah is my shepherd” (Psalm 23:1). Jeremiah’s “pastors” are these same shepherds, and the word against them is hard: “Woe be unto the pastors that destroy and scatter the sheep of my pasture!” (Jeremiah 23:1). Ezekiel says the shepherds fed themselves, and Yahuah answers, “I, even I, will both search my sheep” (Ezekiel 34:2, 11). Yahushua is the “one shepherd” (John 10:16), the “chief Shepherd” (1 Peter 5:4), and the elders feed the flock under Him as brothers."
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
        ]
      },
      {
        "id": "anathema",
        "greek": "Anathema",
        "kjv": "accursed",
        "role": "The curse",
        "word": [
          "*Anathema* (G331) first meant an offering hung up in a pagan temple — something set apart for a god. By the fourth century the church councils used it as a curse: whoever disagreed with the council was declared anathema, cut off from the church."
        ],
        "hebrew": [
          "*Cherem* (H2764), something devoted to Yahuah — given wholly to Him, or devoted to destruction (Joshua 6:17). Paul uses anathema for preaching another gospel (Galatians 1:8), not for disagreeing with a council or a bishop."
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
        "All 4 words on Words Your Bible Borrowed",
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
