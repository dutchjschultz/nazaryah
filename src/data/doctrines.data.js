// doctrines.data 1008 V5.js
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
      tag: "Law Abolished",
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
      // Full page (1008): markdown, rendered by DoctrineInfo via bodyFormat.
      bodyFormat: "markdown",
      body: `## What the Pulpit Teaches

Every person has a soul that can never die. When the body stops, the soul slips out and lives on, fully awake. It goes straight to heaven or straight to hell. This is preached at nearly every funeral, in Catholic and Protestant churches alike.

The men preaching it went to seminary. They studied the Greek. They had every chance to find out where this teaching came from, and they preach it anyway. The people in the pew trusted them to check. They did not check.

## One Word Behind It All

The whole doctrine rests on one Greek word: *psychē* (G5590), pronounced soo-KAY. It is the word the Greek New Testament uses for "soul." Take *psychē* out and read the Hebrew word it replaced, and the immortal soul has nothing left to stand on. Every step below follows that one word.

## What the Torah Said

The Hebrew word for soul is *nephesh* (H5315). It means a living, breathing creature. Man was not given a soul. Man became one:

> *And Yahuah Elohim formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.* (Genesis 2:7)

Four verses earlier, the same Hebrew words describe the cattle and the creeping things (Genesis 1:24). A nephesh is alive, and a nephesh can die. Scripture says it twice in one chapter:

> *The soul that sinneth, it shall die.* (Ezekiel 18:4, 20)

A dead body is even called a dead nephesh (Numbers 6:6). The Torah does not have a word for a soul that cannot die, because it never taught one. Every pastor who preaches one is preaching something Moses never wrote.

## The Word Swap: Nephesh Became Psychē

When the Hebrew Scriptures were put into Greek at Alexandria, around 250 years before Messiah, *nephesh* was rendered *psychē*. The Apostolic writings followed the same path. It looks like a simple translation. It was not, because *psychē* did not arrive empty.

Psyche was a figure of Greek myth, a mortal woman made immortal by Zeus. She was painted with the wings of a butterfly, because *psychē* was also the Greek word for butterfly — the creature that leaves its old body behind and flies away. The word itself carried the picture of a soul escaping the body. Seminaries teach *psychē* every year, and they still define it by Plato instead of by Moses.

## What Psychē Carried

Greek philosophers had already built a doctrine on *psychē*. The Orphic teachers said the body was a tomb and the *psychē* its prisoner. Plato, writing around 380 BC in the Phaedo, taught that the *psychē* is immortal by its very nature, trapped in the body, and set free at death to go to the realm of Hades for judgment.

So when a Greek reader saw *psychē* in the Bible, he did not see a breathing creature formed from dust. He saw Plato’s undying soul. The Hebrew meaning was gone the moment *psychē* was chosen, and the church has never gone back for it.

## How Psychē Entered the Church

The idea did not arrive all at once. It came in steps, and both sides of the church carried it.

- **The Garden.** The first lie: "Ye shall not surely die" (Genesis 3:4).

- **Plato, c. 380 BC.** The lie is given a philosophy: the *psychē* cannot die.

- **Alexandria, c. 250 BC.** Nephesh is put into Greek as *psychē*, and Plato’s philosophy comes with the word.

- **Tertullian, c. 210 AD.** He appeals openly to Plato’s view that every *psychē* is immortal.

- **Augustine, c. 420 AD.** A Platonist before his conversion, he makes the immortal *psychē* a pillar of Western teaching.

- **Rome, 1513.** The Fifth Lateran Council condemns anyone who says the soul is mortal.

- **Westminster, 1646.** The Protestant confession states that souls "having an immortal subsistence, immediately return to God" at death (Westminster Confession 32.1).

The Reformers broke with Rome on many things. They did not break with Plato. They claimed Scripture alone, and then kept Plato’s *psychē*, a doctrine Scripture never taught.

## The Fallback: "The Spirit Lives On"

When the Hebrew word nephesh is shown to them, many teachers retreat to a second answer: the soul may die, but the *spirit* lives on. This is the same doctrine moved to a different word. The Greek idea of an undying self is simply taken off *psychē* and placed on *pneuma* (G4151), "spirit."

The Hebrew word beneath *pneuma* is *ruach* (H7307): breath, wind. Scripture gives the same ruach to man and beast:

> *For that which befalleth the sons of men befalleth beasts… as the one dieth, so dieth the other; yea, they have all one breath.* (Ecclesiastes 3:19)

"One breath" is one ruach. If the spirit of a man is a conscious being that lives on, so is the spirit of a cow. The flood account says the same: everything "in whose nostrils was the breath of life" died (Genesis 7:22).

The verse used to defend the fallback says that at death "the spirit shall return unto God who gave it" (Ecclesiastes 12:7). The ruach is the breath of life Yahuah lent at creation (Genesis 2:7). At death that breath goes back to the One who gave it, the way the dust goes back to the earth. It does not go back thinking:

> *His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.* (Psalm 146:4)

The word "breath" in that verse is ruach. The day the ruach leaves, the thoughts end. The spirit-lives-on teaching is Plato’s *psychē* with a new label.

## A Second Judgment

The immortal *psychē* creates a problem the pulpit never explains. If every soul goes straight to heaven or straight to hell at death, then every soul has already been judged. Its sentence has been handed down and it is already serving it.

Yet Scripture places the judgment on one appointed day, at the return of the Son:

> *Because he hath appointed a day, in the which he will judge the world in righteousness.* (Acts 17:31)
>
> *The Lord Yahushua Messiah, who shall judge the quick and the dead at his appearing and his kingdom.* (2 Timothy 4:1)

Revelation shows where the dead are on that day. They are not brought down from heaven or up from a fire. They are brought out of the grave:

> *And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works.* (Revelation 20:13)

If the dead were judged at death, this is a second trial for people already sentenced — a man pulled out of prison to be tried for the crime he is already serving time for. Scripture knows only one judgment. The second one exists only because *psychē* put the dead somewhere other than the grave.

## What Psychē Built

Once the *psychē* could not die, it had to go somewhere. An entire set of doctrines was built on that one word:

- **Hell as endless torment** — an undying *psychē* must suffer forever.

- **Going to heaven at death** — the *psychē* flies upward, like Psyche on her butterfly wings.

- **A judgment at death** — and with it, a second judgment on the last day.

- **Purgatory and prayers for the dead** — a *psychē* in between needs help from the living.

- **Praying to saints** — the dead are said to be awake and listening.

- **Ghosts and contact with the dead** — the *psychē* is said to linger, which the Torah forbids seeking (Deuteronomy 18:10–12).

Remove *psychē*, and every one of these falls with it. That is why it is defended so hard. Too much has been built on it to admit it was never there.

## The Old Path

Scripture places the hope of the dead in one event: the resurrection.

> *And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.* (Daniel 12:2)

Immortality is not something man has. It is something he must put on: "this mortal must put on immortality" (1 Corinthians 15:53). Yahuah "only hath immortality" (1 Timothy 6:16), and He gives it to those who are His at the return of the Son. Until then, the dead sleep. Yahushua called it sleep (John 11:11–14), and He said they would hear His voice and come out of the graves (John 5:28–29) — not down from heaven, and not up from a fire.

The serpent said, "Ye shall not surely die." Plato gave the lie a name, and *psychē* gave it a home in the Bible. Every funeral sermon that sends a loved one straight to heaven is repeating the serpent’s promise over an open grave.

Revelation closes the matter where Daniel began it. The dead stand before the throne raised from the grave, the books are opened, and then death itself is ended: "And there shall be no more death, neither sorrow, nor crying" (Revelation 21:4). That is the hope Moses and the prophets held, and it never needed a Greek butterfly.

## Further Reading

- **The Old Paths:** [He Became a Living Soul](/doctrines/old-paths/became-a-living-soul)
- **The root word:** [Psychē — Words Your Bible Borrowed](/doctrines/borrowed-words/#psyche)
- **The investigation:** [Spoken in Hebrew](/investigations/spoken-in-hebrew)
`
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
      tag: "Saved by Grace",
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
      tag: "Israel and the Church",
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
      tag: "Filthy Rags · Christ's Righteousness",
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
