// doctrines.data 1009 V8.js
// V8: every Old Paths `tag` (the small-caps topic line on its card and page) is
// now its pair's Departure title — SACRED NAMES, TORAH DISMISSAL … CLERGY OVER
// THE PEOPLE (07 and 09 use the word page's shorter names, Going to Heaven and
// Purification & Holiness) — so the Old Paths card, the Departure page and the word page all
// name the doctrine the same way (Dutch, 1009). Departure tags are unchanged.
// This supersedes tag rule 1 below for the Old Paths half.
// V7: added pairs 14 (A Proverb Against the King of Babylon / Lucifer), 15 (Choose
// Life / Predestination), 16 (No Manner of Similitude / Images in Worship) and 17
// (A Kingdom of Priests / Clergy over the People). The four Old Paths bodies run to
// several paragraphs, so they carry bodyFormat: "markdown". The four Departure
// pages are tabbed (departure-tabs.js) and carry no body.
// V6: Departure 05 Immortal Soul's long markdown body is removed — the page is
// now the tabbed layout (departure-tabs.js via DoctrineTabs). Its short pre-V5
// body is restored as the entry's summary; bodyFormat dropped.
// V5: Departure 05 Immortal Soul gets its full page — `body` is now the long
// markdown study (10 sections + Further Reading), marked `bodyFormat: "markdown"`
// so DoctrineInfo renders it as markdown. Every other entry has no bodyFormat
// and still renders its body as one plain paragraph, unchanged.
// V4: added pairs 12 (One Olive Tree / Rightly Divided) and 13 (It Shall Be Our
// Righteousness / Imputed Righteousness). Corrected two V3 tags: 02 was "Law vs.
// Grace" and is now "Law Abolished"; 11 was "Faith Alone · Once Saved" and is
// now "Saved by Grace". "Law vs. Grace" was fusing two separate questions —
// whether the road still exists (02) and whether walking it bears on a man's
// standing (11) — and the shared tag told the reader 02 and 11 were the same
// card twice. See the tag rules below: a tag names ONE question.
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
// familiar word is the correct word. Three standing rules:
//   1. BOTH HALVES OF A PAIR CARRY THE SAME TAG. Old Paths 03 and Departure 03
//      argue one doctrine from opposite ends; the identical label is what tells
//      the reader they are two readings of one question. Never let them drift.
//   2. The tag names the SUBJECT, never the verdict — "Speaking in Tongues",
//      not "The Tongues Error". The body does the arguing.
//   3. A tag names ONE question, and no two pairs share a tag. Corollary of
//      rule 1: if the same label sits on two different pairs, it is telling the
//      reader they are the same card twice. "Law vs. Grace" failed this — it
//      fused whether Torah still applies (02) with whether the walk bears on a
//      man's standing (11), which are answered independently and by different
//      verses. Romans 6:14 belongs to 02; Ephesians 2:8-9 belongs to 11.
//
// `bodyFormat: "markdown"` (optional) — the body is markdown (headings, lists,
// links, blockquotes) and DoctrineInfo renders it as such. Absent = plain text.
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
      tag: "Sacred Names",
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
      tag: "Torah Dismissal",
      body: "Moses said the commandment is not hidden, not far off, not beyond the sea — it is near, in the mouth and in the heart, that it may be done. Torah was never the door. Deliverance comes through the blood Yahuah provided; Torah is what walking looks like on the other side of it. Collapsing the two produces both errors at once: a people who think keeping saves them, and a people who think being saved excuses them from walking.",
      torah: ["Deuteronomy 30:11-14"],
      witness: ["Psalm 119:44-45", "Proverbs 6:23"]
    },
    departure: {
      slug: "torah-dismissal",
      title: "Torah Dismissal",
      deck: "Grace Didn't Kill the Law — It Fulfilled the Penalty",
      tag: "Law Abolished",
      body: `One of the most dangerous half-truths in modern Christianity is the idea that the Torah was "nailed to the cross" and has no place in the believer's life today. Yahushua Himself declared He did not come to abolish the Law but to fulfill it — and fulfilling a debt is not the same as erasing the standard. There is a critical difference between the penalty of the Law, which Messiah bore, and the instruction of the Law, which remains the very definition of righteousness for those who love Yahuah.`
    }
  },

  {
    n: "03",
    oldPaths: {
      slug: "a-pure-lip",
      title: "A Pure Lip",
      deck: "He Promised a Language, Not a Noise",
      tag: "Tongue Talking",
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
      tag: "Hell",
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
      tag: "Immortal Soul",
      body: "Yahuah formed man of the dust and breathed into him, and man became a living nephesh. He was not issued one. The same phrase describes the creatures of the sea and the field four verses earlier. Dust he was and to dust he returns; Ezekiel states twice in one chapter that the soul that sins dies, and the Psalms say the thoughts perish the same day the breath goes. Immortality is a promise held for the resurrection, not a possession held from birth.",
      torah: ["Genesis 2:7", "Genesis 3:19"],
      witness: ["Ezekiel 18:4, 20", "Psalm 146:4"]
    },
    departure: {
      slug: "immortal-soul",
      title: "Immortal Soul",
      deck: "You Are Not Immortal — And the Serpent Told You Otherwise",
      tag: "The Immortal Soul",
      // The page body is the tabbed layout (src/data/departure-tabs.js, rendered
      // by DoctrineTabs); this short body stays as the entry's summary only.
      body: `"You will not surely die" — the very first lie ever recorded — has been dressed in theological clothing and placed inside the doctrine of the immortal soul. Scripture is consistent from Genesis to Revelation: immortality is not a human default; it is a gift granted only to those born from above through Yahushua the Messiah. The pagan Greek origin of soul immortality entered church doctrine quietly — but its consequences are anything but quiet.`
    }
  },

  {
    n: "06",
    oldPaths: {
      slug: "the-book-quotes",
      title: "The Book Quotes",
      deck: "Every Symbol Was Already Written",
      tag: "Revelation Teaching",
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
      tag: "Purification & Holiness",
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
      tag: "Calendar & Feasts",
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
      tag: "Faith Alone",
      body: "Melchizedek came out to Abram with bread and wine, and the table has been set that way ever since. The wine is the blood — entry, atonement, a door Yahuah opened at a price no man could raise. The bread is the body — the walk, the commandments, the life lived on the other side of that door. The two were never separated in the Law. Every offering that went up carried its meal offering and its drink offering together, because the pattern was one deliverance in two stages. Yahushua handed His disciples both elements, in that order, the night before He died. This is why Scripture speaks of being saved in three tenses — past, present, and still to come. The cup starts a man. The bread finishes him.",
      torah: ["Genesis 14:18", "Numbers 15:4-5"],
      witness: ["Proverbs 9:5", "Psalm 110:4"]
    },
    departure: {
      slug: "faith-alone",
      title: "Faith Alone",
      deck: "The Cup Poured, the Bread Never Passed",
      tag: "Saved by Grace",
      body: `Sola fide is not wrong about the cup. Nothing a man does buys entry, and the blood is not for sale. It is wrong about everything that comes after. Luther put the word "alone" into Paul's sentence when he carried it into German, and five centuries of preaching have been built on a word the apostle never wrote. The single place Scripture joins belief to the word "only" is James 2:24, and it says a man is justified, and not by belief only. What the doctrine did was cut the table in half. It pours the wine, calls the meal finished, and never passes the bread — so a man walks out believing he has received the whole of deliverance at the door, with no road in front of him and no reason to walk it. He was handed a receipt in place of a life.`
    }
  },

  {
    n: "12",
    oldPaths: {
      slug: "one-olive-tree",
      title: "One Olive Tree",
      deck: "He Never Started a Second People",
      tag: "Rightly Divided",
      body: "Yahuah gave one law for the homeborn and for the stranger living among them. Same law. Same table. Same penalty for breaking it. When a foreigner came in, he was not handed a separate arrangement with softer terms. He was brought into the one that already existed. Paul used a tree to say the same thing. Natural branches were broken off and wild branches were grafted in, but there was only ever one tree, one root, and one set of promises. A grafted branch does not get its own root. Yahuah did not start a second people with a second plan and a second rulebook running alongside the first. He opened His own household and let strangers walk in.",
      torah: ["Exodus 12:49", "Numbers 15:15-16"],
      witness: ["Isaiah 56:6-7", "Ezekiel 47:22-23"]
    },
    departure: {
      slug: "rightly-divided",
      title: "Rightly Divided",
      deck: "Cut the Book in Half and Both Halves Bleed",
      tag: "Israel and the Church",
      body: `Dispensationalism cuts history into boxes and gives each box its own rules. Israel gets the Law. The church gets grace. The two are kept apart on purpose, and whatever Yahuah said to one is filed away from the other. Ask why, and the answer is almost always four words out of 2 Timothy 2:15 — rightly dividing the word of truth. The Greek word behind "dividing" is a road word. It means cutting straight ahead, the way a man cuts a line across open ground and does not wander. Paul told Timothy to keep the road straight. He did not tell him to saw the book in half. A hundred years ago that verse got printed with study notes beside it explaining where the cuts go, and generations of readers have taken the notes for the text. The result is a Bible where most of it was written to somebody else, and a reader who has been taught to skip the parts addressed to him.`
    }
  },

  {
    n: "13",
    oldPaths: {
      slug: "it-shall-be-our-righteousness",
      title: "It Shall Be Our Righteousness",
      deck: "He Credited Belief. He Still Expected Feet.",
      tag: "Imputed Righteousness",
      body: `Abraham believed Yahuah, and it was counted to him for righteousness. "Counted" is a bookkeeping word, and it is true — the ledger really was settled. But the same man who was counted righteous in Genesis 15 was told two chapters later to walk before Yahuah and be perfect, and he still had to get up early and go do the hardest thing he was ever asked to do. The counting settled a debt. It did not do the walking. Moses said it plainly: it shall be our righteousness if we observe to do all these commandments. Ezekiel said it from the other side: the righteousness of the righteous shall be upon him. Upon him. Not on somebody else's account, and not on a record kept in another man's name. Yahuah credits belief at the door. He still expects feet on the road.`,
      torah: ["Genesis 15:6", "Deuteronomy 6:25"],
      witness: ["Psalm 119:172", "Ezekiel 18:20"]
    },
    departure: {
      slug: "imputed-righteousness",
      title: "Imputed Righteousness",
      deck: "A Record Swapped, a Life Untouched",
      tag: "Filthy Rags · Christ's Righteousness",
      body: "The teaching is that the obedience of Messiah gets placed on a believer's record, so when Yahuah looks at the man He sees somebody else's life instead. Nothing the man does afterward improves the paperwork, and nothing he fails to do damages it. Two verses hold the whole structure up, and both have been carried well outside their own fence. The filthy rags line in Isaiah 64:6 is describing a nation in open rebellion, not a man keeping the commandments — Isaiah is naming the rags of people who had quit, and the pulpit has turned it into a verdict on obedience itself. Ezekiel 18:20 says the reverse of a transfer: the righteousness of the righteous stays on him, and the wickedness of the wicked stays on him. Righteousness is not a certificate that changes hands. Blood pays what a man owes. It was never meant to live his life for him."
    }
  },
  {
    n: "14",
    oldPaths: {
      slug: "a-proverb-against-babylon",
      title: "A Proverb Against the King of Babylon",
      deck: "Isaiah Named the Man",
      tag: "Lucifer",
      bodyFormat: "markdown",
      body: `Isaiah 14 does not tell the story of an angel falling from heaven. It tells the reader exactly who it is about before it begins: “thou shalt take up this proverb against the king of Babylon” (Isaiah 14:4). It is a taunt song over a dead tyrant, and a few verses later the onlookers say it outright: “Is this the man that made the earth to tremble, that did shake kingdoms?” (Isaiah 14:16). Before that line the king is already in the grave: “Thy pomp is brought down to the grave… the worm is spread under thee, and the worms cover thee” (Isaiah 14:11). Maggots do not eat angels.

The name the king gave himself was heylel (H1966), “shining one” — the morning star of the pagan sky, claimed by a man who said, “I will ascend into heaven, I will exalt my throne above the stars of God” (Isaiah 14:13). Ezekiel does the same with the prince of Tyre, and stops to say plainly, “yet thou art a man, and not God” (Ezekiel 28:2).

The true morning star is not a fallen angel. It is the Son: “I am the root and the offspring of David, and the bright and morning star” (Revelation 22:16). Heylel was a stolen boast; the title belongs to its rightful bearer, and the adversary’s own names — satan, the accuser; diabolos, the slanderer; nachash, the serpent — have nothing to do with light.`,
      torah: ["Numbers 22:22", "Deuteronomy 32:17"],
      witness: ["Isaiah 14:4, 13, 16", "Ezekiel 28:2", "Revelation 22:16"]
    },
    departure: {
      slug: "lucifer",
      title: "Lucifer",
      deck: "The Fallen Angel Hollywood Built — and Isaiah Never Wrote",
      tag: "Lucifer, the Fallen Angel"
      // No body: the page is the tabbed layout (departure-tabs.js via DoctrineTabs).
    }
  },
  {
    n: "15",
    oldPaths: {
      slug: "choose-life",
      title: "Choose Life",
      deck: "The Choice Was Always Yours",
      tag: "Predestination",
      bodyFormat: "markdown",
      body: `The Torah sets two roads in front of every man and tells him to choose: “I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live” (Deuteronomy 30:19). A choice that was settled before birth is no choice at all.

The same Torah says a name can be removed: “Whosoever hath sinned against me, him will I blot out of my book” (Exodus 32:33). Ezekiel says the righteous man who turns away dies in his sin (Ezekiel 18:24). Yahushua said, “he that shall endure unto the end, the same shall be saved” (Matthew 24:13).

The pattern was set in Egypt. The blood of the lamb on the doorposts saved Israel from death (Exodus 12:13) — and that same night they ate unleavened bread, which they kept for seven days (Exodus 12:15–17), and walked out toward Sinai, where the Torah was given. The blood began the journey; it did not end it. Paul applies the same order to the Messiah: “Christ our passover is sacrificed for us: Therefore let us keep the feast… with the unleavened bread of sincerity and truth” (1 Corinthians 5:7–8). Blood, then bread, then the walk.

Yahuah knows the end from the beginning (Isaiah 46:10). Knowing is not forcing. He calls, man answers, and the one who keeps walking is the one who arrives.`,
      torah: ["Deuteronomy 30:19", "Exodus 32:33"],
      witness: ["Ezekiel 18:24", "Matthew 24:13", "Revelation 3:5"]
    },
    departure: {
      slug: "predestination",
      title: "Predestination",
      deck: "Most Deny It by Name — and Live It Every Sunday",
      tag: "Predestination · The Blood Without the Walk"
      // No body: the page is the tabbed layout (departure-tabs.js via DoctrineTabs).
    }
  },
  {
    n: "16",
    oldPaths: {
      slug: "no-manner-of-similitude",
      title: "No Manner of Similitude",
      deck: "You Saw No Form — So Make None",
      tag: "Images in Worship",
      bodyFormat: "markdown",
      body: `When Yahuah spoke at Sinai, Israel saw nothing: “ye heard the voice of the words, but saw no similitude; only ye heard a voice” (Deuteronomy 4:12). That was the reason for the command that follows: “Take ye therefore good heed… Lest ye corrupt yourselves, and make you a graven image, the similitude of any figure” (Deuteronomy 4:15–16).

The second commandment does not make an exception for religious images: “Thou shalt not make unto thee any graven image, or any likeness of any thing… Thou shalt not bow down thyself to them” (Exodus 20:4–5).

Even an object Yahuah ordered made could become an idol. Moses lifted up the bronze serpent on a pole for healing (Numbers 21:8–9). Seven hundred years later Israel was burning incense to it, and Hezekiah “brake in pieces the brasen serpent that Moses had made” (2 Kings 18:4). The sign that pointed to deliverance had become a thing to worship.

Yahuah did give Israel something to wear — and it was not an image. “Make them fringes in the borders of their garments… that ye may look upon it, and remember all the commandments of Yahuah, and do them” (Numbers 15:38–39). What He forbade was the mark: “Ye shall not make any cuttings in your flesh for the dead, nor print any marks upon you: I am Yahuah” (Leviticus 19:28). The sign on the hand and between the eyes was to be His words (Deuteronomy 6:6–8), not a picture.`,
      torah: ["Exodus 20:4–5", "Deuteronomy 4:12, 15–16", "Leviticus 19:28", "Numbers 15:38–39"],
      witness: ["2 Kings 18:4", "Isaiah 40:18", "Acts 17:29"]
    },
    departure: {
      slug: "images-in-worship",
      title: "Images in Worship",
      deck: "The Cross on the Neck, the Steeple, and the Skin",
      tag: "Crosses · Icons · Christian Tattoos and Symbols"
      // No body: the page is the tabbed layout (departure-tabs.js via DoctrineTabs).
    }
  },
  {
    n: "17",
    oldPaths: {
      slug: "a-kingdom-of-priests",
      title: "A Kingdom of Priests",
      deck: "Every One of Them, Not a Class Above Them",
      tag: "Clergy over the People",
      bodyFormat: "markdown",
      body: `At Sinai, Yahuah described the whole nation: “ye shall be unto me a kingdom of priests, and an holy nation” (Exodus 19:6). When two men prophesied in the camp and Joshua wanted them stopped, Moses answered, “would God that all Yahuah’s people were prophets” (Numbers 11:29).

The apostles say the same to every believer: “ye are a chosen generation, a royal priesthood” (1 Peter 2:9), and Yahushua “hath made us kings and priests unto God and his Father” (Revelation 1:6). Yahushua warned against titles that lift one man over the rest: “be not ye called Rabbi: for one is your Master… and all ye are brethren” (Matthew 23:8).

The assembly has elders and overseers who serve, teach, and keep watch — but they are brothers among brothers, not a priesthood standing between the people and Yahuah. There is “one mediator between God and men, the man Christ Jesus” (1 Timothy 2:5) — and no second one, whether he wears a collar or a suit.`,
      torah: ["Exodus 19:6", "Numbers 11:29"],
      witness: ["1 Peter 2:9", "Revelation 1:6", "Matthew 23:8–10", "1 Timothy 2:5"]
    },
    departure: {
      slug: "clergy-over-the-people",
      title: "Clergy over the People",
      deck: "One Pulpit, One Pew — and the Wall Between Them",
      tag: "Clergy and Laity"
      // No body: the page is the tabbed layout (departure-tabs.js via DoctrineTabs).
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
