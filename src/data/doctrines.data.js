// doctrines.data 0824 V3.js
// V3: added pair 11 (The Wine and the Bread / Faith Alone) and the `tag`
// recognition field to BOTH halves of every pair. Also dropped the fixed count
// from the Departure section title — the list grows, the string must not name a
// number.
// V2: added `sections` — the two side roots (Old Paths / The Departure) the
// landing renders from. The landing maps this list; it holds no hand-written
// doctrine markup, so adding a doctrine touches only this file.
// new file — paired doctrine data driving The Old Paths + The Departure

// ONE OBJECT PER PAIR. The Old Paths entry and its Departure counterpart live
// together in the same object, so the counterpart link is derived rather than
// stored. Never add a separate counterpart-slug field: if the pair is in one
// object, the link cannot desync.
//
// The `n` value is DISPLAY ONLY. Slugs are the permanent identifier. This page
// is expected to grow, and any insertion renumbers everything downstream.
//
// `tag` is the RECOGNITION TAG — the doctrine named in church vocabulary, three
// words or fewer, so a reader who has never heard the poetic title knows what
// he is looking at before he clicks. It is the one field on this site where the
// familiar word is the correct word. Two standing rules:
//   1. BOTH HALVES OF A PAIR CARRY THE SAME TAG. Old Paths 03 and Departure 03
//      argue one doctrine from opposite ends; the identical label is what tells
//      the reader they are two readings of one question. Never let them drift.
//   2. The tag names the SUBJECT, never the verdict — "Speaking in Tongues",
//      not "The Tongues Error". The body does the arguing.
//
// `departure.body` carried over verbatim from the hover text that was on the
// old /doctrines page (now /doctrines/the-departure). Not rewritten.

export const doctrines = [
  {
    n: "01",
    oldPaths: {
      slug: "the-name-that-endures",
      title: "The Name That Endures",
      deck: "He Gave It to Be Remembered — Generation to Generation",
      tag: "God's Name",
      body: "Yahuah revealed His name at the bush and bound it to time itself: this is His name forever, His memorial to all generations. Moses charged Israel to fear that glorious and fearful name, and the Psalms and Malachi both record it as the thing His people remembered and spoke among themselves. In most English Bibles that name has been replaced by a title roughly seven thousand times. Restoring it is obedience to a standing command, not innovation.",
      torah: ["Exodus 3:15", "Deuteronomy 28:58"],
      witness: ["Psalm 135:13", "Malachi 3:16"]
    },
    departure: {
      slug: "sacred-names",
      title: "Sacred Names",
      deck: "What's In A Name? Everything.",
      tag: "God's Name",
      body: `The most personal thing you can know about someone is their name — so why have the names of the Father and Son been systematically replaced in nearly every Bible translation? Yahuah and Yahushua are not titles or suggestions; they are the revealed, covenant names of the Almighty and His Son. The substitution of generic titles like "God" and "Lord" is not a minor translation issue — it is one of the most consequential swaps in the history of Scripture.`
    }
  },

  {
    n: "02",
    oldPaths: {
      slug: "walk-after-the-door",
      title: "The Walk After the Door",
      deck: "Deliverance Opens It. Torah Is What Walking Looks Like.",
      tag: "Law vs. Grace",
      body: "Moses said the commandment is not hidden, not far off, not beyond the sea — it is near, in the mouth and in the heart, that it may be done. Torah was never the door. Deliverance comes through the blood Yahuah provided; Torah is what walking looks like on the other side of it. Collapsing the two produces both errors at once: a people who think keeping saves them, and a people who think being saved excuses them from walking.",
      torah: ["Deuteronomy 30:11-14"],
      witness: ["Psalm 119:44-45", "Proverbs 6:23"]
    },
    departure: {
      slug: "torah-dismissal",
      title: "Torah Dismissal",
      deck: "Grace Didn't Kill the Law — It Fulfilled the Penalty",
      tag: "Law vs. Grace",
      body: `One of the most dangerous half-truths in modern Christianity is the idea that the Torah was "nailed to the cross" and has no place in the believer's life today. Yahushua Himself declared He did not come to abolish the Law but to fulfill it — and fulfilling a debt is not the same as erasing the standard. There is a critical difference between the penalty of the Law, which Messiah bore, and the instruction of the Law, which remains the very definition of righteousness for those who love Yahuah.`
    }
  },

  {
    n: "03",
    oldPaths: {
      slug: "a-pure-lip",
      title: "A Pure Lip",
      deck: "He Promised a Language, Not a Noise",
      tag: "Speaking in Tongues",
      body: "The Spirit came upon the seventy elders and they prophesied, and Moses answered the complaint by wishing all Yahuah's people were prophets. Joel promised the same outpouring on sons, daughters, servants, and handmaids. Zephaniah names the gift precisely: a pure lip, a language given so that all may call on the Name and serve with one consent. The Spirit is poured out and the gifts operate. Scripture describes them as understood.",
      torah: ["Numbers 11:25-29"],
      witness: ["Joel 2:28-29", "Zephaniah 3:9"]
    },
    departure: {
      slug: "tongue-talking",
      title: "Tongue Talking",
      deck: "Is That Really the Spirit — Or Is It the Script?",
      tag: "Speaking in Tongues",
      body: `Since the Azusa Street revival of 1906, the practice of speaking in tongues has been repackaged, rehearsed, and performed in a way that bears little resemblance to what Scripture actually describes. The biblical gift of tongues was a known human language serving a clear and verifiable purpose — not an ecstatic utterance requiring a personal interpreter to decode. What is happening in most churches and living rooms today deserves a serious, Scripture-first examination.`
    }
  },

  {
    n: "04",
    oldPaths: {
      slug: "wicked-consumed",
      title: "The Wicked Consumed",
      deck: "The Fire Finishes Its Work",
      tag: "Hell · Eternal Torment",
      body: "Fire went out from Yahuah and devoured Nadab and Abihu; the plain of Sodom was left brimstone and salt and burning. Malachi describes the day as an oven that leaves neither root nor branch, and the wicked as ashes under the soles of the feet. The Psalms say they are consumed into smoke. The fire is eternal in what it accomplishes, not in how long it must keep working.",
      torah: ["Leviticus 10:2", "Deuteronomy 29:23"],
      witness: ["Malachi 4:1-3", "Psalm 37:20"]
    },
    departure: {
      slug: "hell",
      title: "Hell",
      deck: "The Eternal Flame Was Never Meant For You — Until Rome Decided Otherwise",
      tag: "Hell · Eternal Torment",
      body: `The popular image of Hell — a fiery dungeon of endless screaming souls tormented for eternity — owes far more to Dante's Inferno and medieval church control than to the Hebrew and Greek Scriptures. The words Sheol, Hades, Gehenna, and Tartarus each carry distinct meanings that have been collapsed into one horrifying mistranslation. The truth about the fate of the wicked is both more just and more sobering than what has been preached from most pulpits.`
    }
  },

  {
    n: "05",
    oldPaths: {
      slug: "became-a-living-soul",
      title: "He Became a Living Soul",
      deck: "He Did Not Receive One",
      tag: "The Immortal Soul",
      body: "Yahuah formed man of the dust and breathed into him, and man became a living nephesh. He was not issued one. The same phrase describes the creatures of the sea and the field four verses earlier. Dust he was and to dust he returns; Ezekiel states twice in one chapter that the soul that sins dies, and the Psalms say the thoughts perish the same day the breath goes. Immortality is a promise held for the resurrection, not a possession held from birth.",
      torah: ["Genesis 2:7", "Genesis 3:19"],
      witness: ["Ezekiel 18:4, 20", "Psalm 146:4"]
    },
    departure: {
      slug: "immortal-soul",
      title: "Immortal Soul",
      deck: "You Are Not Immortal — And the Serpent Told You Otherwise",
      tag: "The Immortal Soul",
      body: `"You will not surely die" — the very first lie ever recorded — has been dressed in theological clothing and placed inside the doctrine of the immortal soul. Scripture is consistent from Genesis to Revelation: immortality is not a human default; it is a gift granted only to those born from above through Yahushua the Messiah. The pagan Greek origin of soul immortality entered church doctrine quietly — but its consequences are anything but quiet.`
    }
  },

  {
    n: "06",
    oldPaths: {
      slug: "the-book-quotes",
      title: "The Book Quotes",
      deck: "Every Symbol Was Already Written",
      tag: "Revelation · End Times",
      body: "The Revelation introduces no new symbol. Its trumpets and vials are the plagues of Egypt reissued; its sevenfold measure is the seven times more of Leviticus 26; its beasts are Daniel's, its measuring reed and eaten scroll are Ezekiel's, its lampstands and horses are Zechariah's. Every image has an address in the Law and the Prophets. Read against those texts the book interprets itself. Read as fresh material with nothing behind it, it becomes whatever a given century needs it to be.",
      torah: ["Exodus 7-12", "Leviticus 26:18-28"],
      witness: ["Ezekiel 2:9-3:3", "Daniel 7", "Zechariah 4"]
    },
    departure: {
      slug: "revelation-teaching",
      title: "Revelation Teaching",
      deck: "The End Times Narrative Was Written By Rome — Not the Prophets",
      tag: "Revelation · End Times",
      body: `The prophetic framework most believers consider non-negotiable — a seven-year tribulation, a pre-tribulation rapture, a Millennial Kingdom still waiting to begin — was not taught by the apostles and did not exist in Protestant theology until the 19th century. It traces directly to a Jesuit priest named Francisco Ribera and was embedded into mainstream Christianity through the Scofield Reference Bible. Revelation deserves to be read through Scripture itself, not a system handed to Protestantism by the very church it once stood against.`
    }
  },

  {
    n: "07",
    oldPaths: {
      slug: "inheritance-is-the-earth",
      title: "The Inheritance Is the Earth",
      deck: "The Land Was the Promise",
      tag: "Going to Heaven",
      body: "Yahuah gave Abraham the land for an everlasting possession, and that promise has never been withdrawn or exchanged. The heavens are Yahuah's; the earth He gave to the sons of men. Job expected to stand at the latter day upon the earth, and Daniel describes the dead as sleeping in the dust of the earth until they awake. The hope is a resurrection to a restored land, not a departure at death.",
      torah: ["Genesis 17:8", "Deuteronomy 30:5"],
      witness: ["Psalm 115:16", "Psalm 37:29", "Job 19:25"]
    },
    departure: {
      slug: "going-to-heaven",
      title: "Going to Heaven When You Die",
      deck: "You're Not Going Anywhere — And That's Actually Good News",
      tag: "Going to Heaven",
      body: `The beloved comfort of "they're in Heaven now" is almost universally accepted in Christian culture — yet it directly contradicts what Scripture teaches about death, sleep, and the resurrection. Yahuah's plan was never to evacuate souls upward at the moment of death; it was to resurrect the dead on the last day in glorified bodies to dwell on a renewed earth. The resurrection is the believer's true and magnificent hope — quietly swapped out for a departure story Scripture never tells.`
    }
  },

  {
    n: "08",
    oldPaths: {
      slug: "hear-o-israel",
      title: "Hear, O Israel",
      deck: "One. Not One in Three.",
      tag: "The Trinity",
      body: "Yahuah is one. Moses told Israel there is none else, in heaven above or on the earth beneath, and Yahuah Himself asks whether there is any Elohim beside Him and answers that He knows not any. He declares there is no savior beside Him. Yahushua was sent, was obedient, prayed to the Father, and never claimed the Father's title — He provided the way. A doctrine of three persons has to be carried into these texts, because it cannot be carried out of them.",
      torah: ["Deuteronomy 6:4", "Deuteronomy 4:35, 39"],
      witness: ["Isaiah 43:11", "Isaiah 44:8", "Isaiah 45:5"]
    },
    departure: {
      slug: "the-trinity",
      title: "The Trinity",
      deck: "One Name, Not Three — The Doctrine That Rewrote the Father",
      tag: "The Trinity",
      body: `No doctrine has done more to obscure the identity of Yahuah and Yahushua than the Trinity — a theological construct formally codified not by the apostles, but by the Council of Nicaea in 325 CE under imperial Roman pressure. The Shema declares "Yahuah our Elohim, Yahuah is One" — a oneness Yahushua Himself affirmed, not as one-third of a triune God, but as the Son in whom the fullness of the Father dwells. This is the doctrine that has placed chains around the necks of sincere believers.`
    }
  },

  {
    n: "09",
    oldPaths: {
      slug: "ye-shall-be-holy",
      title: "Ye Shall Be Holy",
      deck: "Clean and Unclean Were Taught, Not Guessed",
      tag: "Clean and Unclean Food",
      body: "Yahuah drew the line Himself and charged the priesthood to put a difference between holy and profane, clean and unclean. Leviticus 11 does not leave the distinction to appetite or conscience, and Leviticus 20 gives the reason: ye shall be holy unto me, for I have severed you from other people. Ezekiel names the failure to teach that difference as a violation of the law and a profaning of the set-apart things.",
      torah: ["Leviticus 10:10", "Leviticus 11", "Leviticus 20:25-26"],
      witness: ["Ezekiel 44:23", "Ezekiel 22:26"]
    },
    departure: {
      slug: "purification-holiness",
      title: "Purification & Holiness Laws",
      deck: "Your Body Is the Temple — So Why Aren't You Keeping It Clean?",
      tag: "Clean and Unclean Food",
      body: `There is a critical and often ignored distinction between the Ten Commandments — the eternal moral standard — and the Levitical purification laws, which govern the cleanliness of the physical vessel through which Yahuah's presence dwells. When Yahushua fulfilled the Law, He did not cancel the instructions for keeping the temple clean; He made it possible for that temple to now be you. The Levitical holiness codes are living, practical instructions for anyone who takes seriously: "Be holy, for I am holy."`
    }
  },

  {
    n: "10",
    oldPaths: {
      slug: "signs-and-seasons",
      title: "Signs and Seasons",
      deck: "The Calendar Was Hung in the Sky",
      tag: "Christmas · Easter · Sunday",
      body: "The lights were placed on the fourth day for signs, for appointed times, for days and years — hung in the sky before any nation existed to keep them. Leviticus calls the feasts my feasts, spoken by Yahuah in the first person, not Israel's and not the Jews'. The Psalms say He appointed the moon for the seasons. The appointments still stand. What changed was the calendar men use to find them.",
      torah: ["Genesis 1:14", "Leviticus 23:1-4"],
      witness: ["Psalm 104:19"]
    },
    departure: {
      slug: "calendar-feasts",
      title: "Calendar & Feasts",
      deck: "You've Been Missing the Appointments — Because Someone Changed the Calendar",
      tag: "Christmas · Easter · Sunday",
      body: `Yahuah did not suggest His feast days — He commanded them as appointed times, moedim, literally meaning scheduled meetings between the Creator and His people. The Papal Church systematically replaced these divine appointments with a Roman calendar of holidays rooted in sun worship and political convenience, leaving most believers missing the prophetic, redemptive story embedded in every feast. The Father's calendar is still active, still relevant, and the appointments are still on the table.`
    }
  },

  {
    n: "11",
    oldPaths: {
      slug: "wine-and-the-bread",
      title: "The Wine and the Bread",
      deck: "The Cup Opens the Door. The Bread Walks the Road.",
      tag: "Faith Alone · Once Saved",
      body: "Melchizedek came out to Abram with bread and wine, and the table has been set that way ever since. The wine is the blood — entry, atonement, a door Yahuah opened at a price no man could raise. The bread is the body — the walk, the commandments, the life lived on the other side of that door. The two were never separated in the Law. Every offering that went up carried its meal offering and its drink offering together, because the pattern was one deliverance in two stages. Yahushua handed His disciples both elements, in that order, the night before He died. This is why Scripture speaks of being saved in three tenses — past, present, and still to come. The cup starts a man. The bread finishes him.",
      torah: ["Genesis 14:18", "Numbers 15:4-5"],
      witness: ["Proverbs 9:5", "Psalm 110:4"]
    },
    departure: {
      slug: "faith-alone",
      title: "Faith Alone",
      deck: "The Cup Poured, the Bread Never Passed",
      tag: "Faith Alone · Once Saved",
      body: `Sola fide is not wrong about the cup. Nothing a man does buys entry, and the blood is not for sale. It is wrong about everything that comes after. Luther put the word "alone" into Paul's sentence when he carried it into German, and five centuries of preaching have been built on a word the apostle never wrote. The single place Scripture joins belief to the word "only" is James 2:24, and it says a man is justified, and not by belief only. What the doctrine did was cut the table in half. It pours the wine, calls the meal finished, and never passes the bread — so a man walks out believing he has received the whole of deliverance at the door, with no road in front of him and no reason to walk it. He was handed a receipt in place of a life.`
    }
  }
];

// The two side roots the /doctrines landing renders. Each is a section, not a
// doctrine — they do not grow when a pair is added. The landing maps this list.
export const sections = [
  {
    slug: "old-paths",
    href: "/doctrines/old-paths",
    kicker: "Core Beliefs",
    title: "The Old Paths",
    deck: "What Scripture holds — the way to walk.",
    cta: "Walk the old paths",
  },
  {
    slug: "the-departure",
    href: "/doctrines/the-departure",
    kicker: "The Departure",
    // No fixed count in this string — the list grows and the number would rot.
    title: "Doctrines the Church Got Wrong",
    deck: "Where the church departed — and why it matters.",
    cta: "See the departure",
  },
];

export default doctrines;
