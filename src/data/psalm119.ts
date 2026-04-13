export interface Psalm119Word {
  verse: number;
  hebrew: string;
  transliteration: string;
  english: string;
}

export interface Psalm119Letter {
  num: number;
  slug: string;
  modern: string;
  paleo: string;
  name: string;
  pictograph: string;
  meaning: string;
  verseStart: number;
  verseEnd: number;
  words: Psalm119Word[];
  sentence: string;
  message: string;
  flow: string;
  kjv: string[];
}

export interface Discovery {
  id: number;
  gem: string;
  subtitle: string;
  content: DiscoveryContent;
}

export type DiscoveryContent =
  | ArchitectureContent
  | FirstLastContent
  | AlephTavContent
  | YahushuaContent
  | VerdictContent;

export interface ArchitectureContent {
  type: 'architecture';
  movements: Movement[];
}

export interface Movement {
  num: number;
  range: string;
  verseRange: string;
  title: string;
  theme: string;
  points: string[];
}

export interface FirstLastContent {
  type: 'firstlast';
  first: string;
  last: string;
  insight1Title: string;
  insight1: string;
  insight2Title: string;
  insight2: string;
  keyline: string;
}

export interface AlephTavContent {
  type: 'alephtav';
  genRef: string;
  cells: Array<{ title: string; body: string }>;
  conclusion: string;
}

export interface YahushuaContent {
  type: 'yahushua';
  quote: string;
  cards: Array<{ title: string; body: string }>;
}

export interface VerdictContent {
  type: 'verdict';
  text: string;
  seal: string;
}

// ─────────────────────────────────────────────
// LETTER DATA
// ─────────────────────────────────────────────

export const PSALM119_LETTERS: Psalm119Letter[] = [
  {
    num: 1,
    slug: 'aleph',
    modern: 'א',
    paleo: '𐤀',
    name: 'Aleph',
    pictograph: 'Ox Head',
    meaning: 'Strength · First · Leader',
    verseStart: 1,
    verseEnd: 8,
    words: [
      { verse: 1, hebrew: 'אַשְׁרֵי', transliteration: 'Ashrei', english: 'Blessed' },
      { verse: 2, hebrew: 'אַשְׁרֵי', transliteration: 'Ashrei', english: 'Blessed' },
      { verse: 3, hebrew: 'אַף', transliteration: 'Af', english: 'Indeed' },
      { verse: 4, hebrew: 'אַתָּה', transliteration: 'Attah', english: 'You' },
      { verse: 5, hebrew: 'אַחֲלַי', transliteration: 'Achalai', english: 'Oh that' },
      { verse: 6, hebrew: 'אָז', transliteration: 'Az', english: 'Then' },
      { verse: 7, hebrew: 'אוֹדְךָ', transliteration: 'Odecha', english: 'I will praise You' },
      { verse: 8, hebrew: 'אֶשְׁמֹר', transliteration: 'Eshmor', english: 'I will keep' },
    ],
    sentence:
      '"Blessed, blessed — indeed YOU — oh that it were so — then I will praise You, I will keep."',
    message:
      'The starting point of everything. Yahuah is the Strength, the First, the Leader of all things. Blessed is the one who encounters Him — and who resolves to praise and keep His Torah.',
    flow: 'Blessed and blessed is the one who encounters YOU, Yahuah — oh that I would always walk in this — then I will praise You and I will keep Your Torah.',
    kjv: [
      'Blessed are the undefiled in the way, who walk in the law of the LORD.',
      'Blessed are they that keep his testimonies, and that seek him with the whole heart.',
      'They also do no iniquity: they walk in his ways.',
      'Thou hast commanded us to keep thy precepts diligently.',
      'O that my ways were directed to keep thy statutes!',
      'Then shall I not be ashamed, when I have respect unto all thy commandments.',
      'I will praise thee with uprightness of heart, when I shall have learned thy righteous judgments.',
      'I will keep thy statutes: O forsake me not utterly.',
    ],
  },
  {
    num: 2,
    slug: 'bet',
    modern: 'ב',
    paleo: '𐤁',
    name: 'Bet',
    pictograph: 'House',
    meaning: 'Dwelling · Inside · Family',
    verseStart: 9,
    verseEnd: 16,
    words: [
      { verse: 9, hebrew: 'בַּמֶּה', transliteration: 'Bameh', english: 'By what means?' },
      { verse: 10, hebrew: 'בְּכָל', transliteration: 'Bechol', english: 'With all' },
      { verse: 11, hebrew: 'בְּלִבִּי', transliteration: 'Belibbi', english: 'In my heart' },
      { verse: 12, hebrew: 'בָּרוּךְ', transliteration: 'Baruch', english: 'Blessed' },
      { verse: 13, hebrew: 'בִּשְׂפָתַי', transliteration: 'Bisphataiy', english: 'On my lips' },
      { verse: 14, hebrew: 'בְּדֶרֶךְ', transliteration: 'Bederech', english: 'In the path' },
      { verse: 15, hebrew: 'בְּפִקּוּדֶיךָ', transliteration: 'Bepikkudecha', english: 'Your precepts' },
      { verse: 16, hebrew: 'בְּחֻקֹּתֶיךָ', transliteration: 'Bechukotecha', english: 'Your statutes' },
    ],
    sentence:
      '"By what means? With ALL — in my heart — Blessed — on my lips — in the path — in Your precepts — in Your statutes."',
    message:
      'That Strength (Aleph) now has a house — and it is built inside you. The Torah keeper is not a rule-follower. The Word takes up residence in the heart first, then flows to the lips, the walk, and every statute. The house is built from the inside out.',
    flow: 'By what means does one stay pure on this path? With ALL the heart — blessing You, with the Word in the heart, on the lips, in the walk, kept in Your precepts and Your statutes.',
    kjv: [
      'Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.',
      'With my whole heart have I sought thee: O let me not wander from thy commandments.',
      'Thy word have I hid in mine heart, that I might not sin against thee.',
      'Blessed art thou, O LORD: teach me thy statutes.',
      'With my lips have I declared all the judgments of thy mouth.',
      'I have rejoiced in the way of thy testimonies, as much as in all riches.',
      'I will meditate in thy precepts, and have respect unto thy ways.',
      'I will delight myself in thy statutes: I will not forget thy word.',
    ],
  },
  {
    num: 3,
    slug: 'gimel',
    modern: 'ג',
    paleo: '𐤂',
    name: 'Gimel',
    pictograph: 'Camel',
    meaning: 'Journey · Lifted Up · Carried',
    verseStart: 17,
    verseEnd: 24,
    words: [
      { verse: 17, hebrew: 'גְּמֹל', transliteration: 'Gemol', english: 'Deal bountifully' },
      { verse: 18, hebrew: 'גַּל', transliteration: 'Gal', english: 'Reveal' },
      { verse: 19, hebrew: 'גֵּר', transliteration: 'Ger', english: 'Stranger' },
      { verse: 20, hebrew: 'גָּרְסָה', transliteration: 'Garsa', english: 'Crushed' },
      { verse: 21, hebrew: 'גָּעַרְתָּ', transliteration: "Ga'arta", english: 'You rebuked' },
      { verse: 22, hebrew: 'גַּל', transliteration: 'Gal', english: 'Roll away' },
      { verse: 23, hebrew: 'גַּם', transliteration: 'Gam', english: 'Even still' },
      { verse: 24, hebrew: 'גַּם', transliteration: 'Gam', english: 'Even still' },
    ],
    sentence:
      '"Deal bountifully — reveal to the stranger who is crushed — You rebuked — roll away reproach — even still, even still."',
    message:
      'The house within (Bet) is now carried through the wilderness. Because His Strength dwells in you, you are a stranger in this world — crushed with longing, yet Yahuah deals bountifully and rolls away reproach. The camel presses on: even still, even still.',
    flow: 'Deal bountifully with Your servant and reveal truth to the stranger who is crushed — You rebuked the proud and rolled away reproach — even still, even still pressing forward.',
    kjv: [
      'Deal bountifully with thy servant, that I may live, and keep thy word.',
      'Open thou mine eyes, that I may behold wondrous things out of thy law.',
      'I am a stranger in the earth: hide not thy commandments from me.',
      'My soul breaketh for the longing that it hath unto thy judgments at all times.',
      'Thou hast rebuked the proud that are cursed, which do err from thy commandments.',
      'Remove from me reproach and contempt; for I have kept thy testimonies.',
      'Princes also did sit and speak against me: but thy servant did meditate in thy statutes.',
      'Thy testimonies also are my delight and my counsellors.',
    ],
  },
  {
    num: 4,
    slug: 'dalet',
    modern: 'ד',
    paleo: '𐤃',
    name: 'Dalet',
    pictograph: 'Door',
    meaning: 'Pathway · Threshold · The Humble',
    verseStart: 25,
    verseEnd: 32,
    words: [
      { verse: 25, hebrew: 'דָּבְקָה', transliteration: 'Davkah', english: 'Clings to dust' },
      { verse: 26, hebrew: 'דְּרָכַי', transliteration: 'Derakai', english: 'My ways' },
      { verse: 27, hebrew: 'דֶּרֶךְ', transliteration: 'Derech', english: 'The way' },
      { verse: 28, hebrew: 'דָּלְפָה', transliteration: 'Dalpah', english: 'Weeps' },
      { verse: 29, hebrew: 'דֶּרֶךְ', transliteration: 'Derech', english: 'False way' },
      { verse: 30, hebrew: 'דֶּרֶךְ', transliteration: 'Derech', english: 'True way' },
      { verse: 31, hebrew: 'דָּבַקְתִּי', transliteration: 'Davakti', english: 'I clung' },
      { verse: 32, hebrew: 'דֶּרֶךְ', transliteration: 'Derech', english: 'I will run' },
    ],
    sentence:
      '"Clings to dust — my ways — the way — weeps — the false way — the true way — I clung — the way (I will run in it)."',
    message:
      'The stranger (Gimel) is on the ground — clinging to dust, weeping. But the door is right there. My ways are laid bare, I weep in the low place — then I remove the false way, choose the faithful way, cling, and RUN. Dalet is the door of the humble person who has hit the ground, looked up, chosen, and run through.',
    flow: 'My soul clings to the dust as I declare my ways before You — the way I have sought, weeping — I remove the false way, choose the true way, I cling to Your testimonies — and in Your way I will run.',
    kjv: [
      'My soul cleaveth unto the dust: quicken thou me according to thy word.',
      'I have declared my ways, and thou heardest me: teach me thy statutes.',
      'Make me to understand the way of thy precepts: so shall I talk of thy wondrous works.',
      'My soul melteth for heaviness: strengthen thou me according unto thy word.',
      'Remove from me the way of lying: and grant me thy law graciously.',
      'I have chosen the way of truth: thy judgments have I laid before me.',
      'I have stuck unto thy testimonies: O LORD, put me not to shame.',
      'I will run the way of thy commandments, when thou shalt enlarge my heart.',
    ],
  },
  {
    num: 5,
    slug: 'hey',
    modern: 'ה',
    paleo: '𐤄',
    name: 'Hey',
    pictograph: 'Window',
    meaning: 'Behold · Breath · Revelation',
    verseStart: 33,
    verseEnd: 40,
    words: [
      { verse: 33, hebrew: 'הוֹרֵנִי', transliteration: 'Horeni', english: 'Teach me' },
      { verse: 34, hebrew: 'הֲבִינֵנִי', transliteration: 'Havineni', english: 'Give me understanding' },
      { verse: 35, hebrew: 'הַדְרִיכֵנִי', transliteration: 'Hadricheni', english: 'Lead me' },
      { verse: 36, hebrew: 'הַט', transliteration: 'Hat', english: 'Incline my heart' },
      { verse: 37, hebrew: 'הַעֲבֵר', transliteration: "Ha'aver", english: 'Turn away my eyes' },
      { verse: 38, hebrew: 'הָקֵם', transliteration: 'Hakem', english: 'Establish' },
      { verse: 39, hebrew: 'הַעֲבֵר', transliteration: "Ha'aver", english: 'Remove reproach' },
      { verse: 40, hebrew: 'הִנֵּה', transliteration: 'Hinneh', english: 'BEHOLD!' },
    ],
    sentence:
      '"Teach me — give me understanding — lead me — incline my heart — turn away my eyes — establish — remove reproach — BEHOLD!"',
    message:
      'After running through the door (Dalet), I arrive at a window — but I cannot open it myself. Every word is a request: teach me, lead me, incline me, turn away what is false. After full surrender, the window opens and the breath of Yahuah fills you: BEHOLD. This is why Yahuah added the Hey to Abram and Sarai — revelation changes everything.',
    flow: 'Teach me Your statutes — give me understanding — lead me in the path of Your commandments — incline my heart — turn my eyes from vanity — establish Your word to Your servant — remove reproach — BEHOLD, I long for Your precepts!',
    kjv: [
      'Teach me, O LORD, the way of thy statutes; and I shall keep it unto the end.',
      'Give me understanding, and I shall keep thy law; yea, I shall observe it with my whole heart.',
      'Make me to go in the path of thy commandments; for therein do I delight.',
      'Incline my heart unto thy testimonies, and not to covetousness.',
      'Turn away mine eyes from beholding vanity; and quicken thou me in thy way.',
      'Stablish thy word unto thy servant, who is devoted to thy fear.',
      'Turn away my reproach which I fear: for thy judgments are good.',
      'Behold, I have longed after thy precepts: quicken me in thy righteousness.',
    ],
  },
  {
    num: 6,
    slug: 'vav',
    modern: 'ו',
    paleo: '𐤅',
    name: 'Vav',
    pictograph: 'Nail / Hook',
    meaning: 'Connection · And · Holding Together',
    verseStart: 41,
    verseEnd: 48,
    words: [
      { verse: 41, hebrew: 'וִיבֹאֻנִי', transliteration: "Viyvo'uni", english: 'Let come to me' },
      { verse: 42, hebrew: 'וְאֶעֱנֶה', transliteration: "Ve'e'eneh", english: 'I will answer' },
      { verse: 43, hebrew: 'וְאַל', transliteration: "Ve'al", english: 'And not' },
      { verse: 44, hebrew: 'וְאֶשְׁמְרָה', transliteration: "Ve'eshmerah", english: 'I will keep' },
      { verse: 45, hebrew: 'וְאֶתְהַלְּכָה', transliteration: "Ve'ethallechah", english: 'Walk freely' },
      { verse: 46, hebrew: 'וַאֲדַבְּרָה', transliteration: "Va'adabberah", english: 'I will speak' },
      { verse: 47, hebrew: 'וְאֶשְׁתַּעֲשַׁע', transliteration: "Ve'eshta'asha", english: 'I will delight' },
      { verse: 48, hebrew: 'וְאֶשָּׂא', transliteration: "Ve'essa", english: 'I will lift up' },
    ],
    sentence:
      '"Let Your mercies come to me — and I will answer — and not be ashamed — and I will keep — and I will walk freely — and I will speak — and I will delight — and I will lift up."',
    message:
      'The window opens (Hey) and the nail (Vav) connects you to Yahuah. Every word is "and I will" — the soul is NAILED to Yahuah, and from that connection everything flows. This is the fruit: keep, walk freely, speak boldly, delight, lift up your hands.',
    flow: 'Let Your lovingkindness come to me — and I will answer every reproach — and I will not abandon the word of truth — I will keep Your Torah continually — I will walk in freedom — I will speak of Your testimonies before kings — I will delight in Your commandments — and I will lift up my hands.',
    kjv: [
      'Let thy mercies come also unto me, O LORD, even thy salvation, according to thy word.',
      'So shall I have wherewith to answer him that reproacheth me: for I trust in thy word.',
      'And take not the word of truth utterly out of my mouth; for I have hoped in thy judgments.',
      'So shall I keep thy law continually for ever and ever.',
      'And I will walk at liberty: for I seek thy precepts.',
      'I will speak of thy testimonies also before kings, and will not be ashamed.',
      'And I will delight myself in thy commandments, which I have loved.',
      'My hands also will I lift up unto thy commandments, which I have loved; and I will meditate in thy statutes.',
    ],
  },
  {
    num: 7,
    slug: 'zayin',
    modern: 'ז',
    paleo: '𐤆',
    name: 'Zayin',
    pictograph: 'Weapon / Sword',
    meaning: 'Remember · Cut · Fight',
    verseStart: 49,
    verseEnd: 56,
    words: [
      { verse: 49, hebrew: 'זְכֹר', transliteration: 'Zechor', english: 'Remember' },
      { verse: 50, hebrew: 'זֹאת', transliteration: 'Zot', english: 'This is my comfort' },
      { verse: 51, hebrew: 'זֵדִים', transliteration: 'Zedim', english: 'The proud mock' },
      { verse: 52, hebrew: 'זָכַרְתִּי', transliteration: 'Zacharti', english: 'I remembered' },
      { verse: 53, hebrew: 'זַלְעָפָה', transliteration: "Zal'afah", english: 'Horror / indignation' },
      { verse: 54, hebrew: 'זְמִרוֹת', transliteration: 'Zemirot', english: 'Songs' },
      { verse: 55, hebrew: 'זָכַרְתִּי', transliteration: 'Zacharti', english: 'I remembered' },
      { verse: 56, hebrew: 'זֹאת', transliteration: 'Zot', english: 'This has been mine' },
    ],
    sentence:
      '"Remember — this is my comfort — the proud mock — I remembered — horror and indignation — songs — I remembered — this has been mine."',
    message:
      "Once connected (Vav), the proud begin to mock. The Zayin is the sword — but your weapon is REMEMBRANCE. When Yahuah remembers, His sword moves on your behalf. In the midst of scorn and burning indignation, the Torah keeper has SONGS. Memory is the weapon the enemy cannot overcome.",
    flow: 'Remember Your word to Your servant, in which You have made me hope — this is my comfort in my affliction — the proud utterly mock me — yet I remembered Your ordinances from of old — burning indignation seized me — yet Your statutes became my songs — I remembered Your name in the night — and this has been mine: I kept Your precepts.',
    kjv: [
      'Remember the word unto thy servant, upon which thou hast caused me to hope.',
      'This is my comfort in my affliction: for thy word hath quickened me.',
      'The proud have had me greatly in derision: yet have I not declined from thy law.',
      'I remembered thy judgments of old, O LORD; and have comforted myself.',
      'Horror hath taken hold upon me because of the wicked that forsake thy law.',
      'Thy statutes have been my songs in the house of my pilgrimage.',
      'I have remembered thy name, O LORD, in the night, and have kept thy law.',
      'This I had, because I kept thy precepts.',
    ],
  },
  {
    num: 8,
    slug: 'chet',
    modern: 'ח',
    paleo: '𐤇',
    name: 'Chet',
    pictograph: 'Fence / Inner Room',
    meaning: 'Enclosed · Protected · Covenanted',
    verseStart: 57,
    verseEnd: 64,
    words: [
      { verse: 57, hebrew: 'חֶלְקִי', transliteration: 'Chelki', english: 'My portion' },
      { verse: 58, hebrew: 'חִלִּיתִי', transliteration: 'Chilliti', english: 'I entreated' },
      { verse: 59, hebrew: 'חִשַּׁבְתִּי', transliteration: 'Chishavti', english: 'I reflected' },
      { verse: 60, hebrew: 'חַשְׁתִּי', transliteration: 'Chashti', english: 'I hastened' },
      { verse: 61, hebrew: 'חֶבְלֵי', transliteration: 'Chevlei', english: 'Cords of the wicked' },
      { verse: 62, hebrew: 'חֲצוֹת', transliteration: 'Chatzot', english: 'Midnight' },
      { verse: 63, hebrew: 'חָבֵר', transliteration: 'Chaver', english: 'Companion' },
      { verse: 64, hebrew: 'חַסְדְּךָ', transliteration: 'Chasdecha', english: 'Your lovingkindness' },
    ],
    sentence:
      '"My portion — I entreated — I reflected — I hastened — cords of the wicked — midnight — companion — Your lovingkindness."',
    message:
      'The Chet is a fence that encloses the covenant community. Yahuah is my portion — the boundary of what is mine. Inside the enclosure: I seek His face, reflect, hasten to obey, rise at midnight to praise, and find companions among those who fear Him. All of it held within His lovingkindness.',
    flow: 'You are my portion, Yahuah — I entreated Your favor with all my heart — I considered my ways and turned my feet to Your testimonies — I hastened and did not delay — the cords of the wicked surrounded me — at midnight I rise to give You thanks — I am a companion of all who fear You — for the earth is full of Your lovingkindness.',
    kjv: [
      'Thou art my portion, O LORD: I have said that I would keep thy words.',
      'I intreated thy favour with my whole heart: be merciful unto me according to thy word.',
      'I thought on my ways, and turned my feet unto thy testimonies.',
      'I made haste, and delayed not to keep thy commandments.',
      'The bands of the wicked have robbed me: but I have not forgotten thy law.',
      'At midnight I will rise to give thanks unto thee because of thy righteous judgments.',
      'I am a companion of all them that fear thee, and of them that keep thy precepts.',
      'The earth, O LORD, is full of thy mercy: teach me thy statutes.',
    ],
  },
  {
    num: 9,
    slug: 'tet',
    modern: 'ט',
    paleo: '𐤈',
    name: 'Tet',
    pictograph: 'Serpent / Twist',
    meaning: 'Good · Surround · Twist Turned to Blessing',
    verseStart: 65,
    verseEnd: 72,
    words: [
      { verse: 65, hebrew: 'טוֹב', transliteration: 'Tov', english: 'Good' },
      { verse: 66, hebrew: 'טוּב', transliteration: 'Tuv', english: 'Goodness' },
      { verse: 67, hebrew: 'טֶרֶם', transliteration: 'Terem', english: 'Before affliction' },
      { verse: 68, hebrew: 'טוֹב', transliteration: 'Tov', english: 'You are good' },
      { verse: 69, hebrew: 'טָפְלוּ', transliteration: 'Taphlu', english: 'Forged lies' },
      { verse: 70, hebrew: 'טָפַשׁ', transliteration: 'Tapash', english: 'Fat heart' },
      { verse: 71, hebrew: 'טוֹב', transliteration: 'Tov', english: 'Affliction was good' },
      { verse: 72, hebrew: 'טוֹב', transliteration: 'Tov', english: 'Your Torah is better' },
    ],
    sentence:
      '"Good — goodness — before affliction — You are good — forged lies — fat heart — affliction was good — Your Torah is better than gold."',
    message:
      "The serpent (Tet) twists — the proud forge lies, their hearts grow fat and insensible. But Yahuah's goodness surrounds and defeats every twist. Four times this section rings TOV — good. Even affliction is turned to good. Nothing the enemy does can override the goodness of Yahuah and the sweetness of His Torah.",
    flow: 'You have dealt well with Your servant — teach me good discernment and knowledge — before I was afflicted I went astray, but now I keep Your word — You are good and You do good — the proud have smeared me with lies — their hearts are fat and insensible — yet it was good for me that I was afflicted — for Your Torah is more precious than thousands of pieces of gold and silver.',
    kjv: [
      'Thou hast dealt well with thy servant, O LORD, according unto thy word.',
      'Teach me good judgment and knowledge: for I have believed thy commandments.',
      'Before I was afflicted I went astray: but now have I kept thy word.',
      'Thou art good, and doest good; teach me thy statutes.',
      'The proud have forged a lie against me: but I will keep thy precepts with my whole heart.',
      'Their heart is as fat as grease; but I delight in thy law.',
      'It is good for me that I have been afflicted; that I might learn thy statutes.',
      'The law of thy mouth is better unto me than thousands of gold and silver.',
    ],
  },
  {
    num: 10,
    slug: 'yod',
    modern: 'י',
    paleo: '𐤉',
    name: 'Yod',
    pictograph: 'Hand / Arm',
    meaning: 'Work · Deed · The Smallest, The Mightiest',
    verseStart: 73,
    verseEnd: 80,
    words: [
      { verse: 73, hebrew: 'יָדֶיךָ', transliteration: 'Yadecha', english: 'Your hands' },
      { verse: 74, hebrew: 'יְרֵאֶיךָ', transliteration: "Yere'echa", english: 'Those who fear You' },
      { verse: 75, hebrew: 'יָדַעְתִּי', transliteration: 'Yadati', english: 'I know' },
      { verse: 76, hebrew: 'יְהִי', transliteration: 'Yehi', english: 'Let it be' },
      { verse: 77, hebrew: 'יְבֹאוּנִי', transliteration: "Yevo'uni", english: 'Let come to me' },
      { verse: 78, hebrew: 'יֵבֹשׁוּ', transliteration: 'Yevoshu', english: 'Let them be ashamed' },
      { verse: 79, hebrew: 'יָשׁוּבוּ', transliteration: 'Yashuvu', english: 'Let them return' },
      { verse: 80, hebrew: 'יְהִי', transliteration: 'Yehi', english: 'Let it be' },
    ],
    sentence:
      '"Your hands — those who fear You — I know — let it be — let come to me — let them be ashamed — let them return — let it be."',
    message:
      'The Yod is the smallest Hebrew letter — a mere mark — yet it represents the HAND and ARM of Yahuah. Your hands made me and fashioned me. Those who fear You see Your work in me. I KNOW Your judgments are righteous. Let mercies come. Let the proud be ashamed. Let those who fear You return. The smallest mark does the mightiest work.',
    flow: 'Your hands made me and fashioned me — those who fear You see me and are glad — I know, Yahuah, that Your judgments are righteous — let Your lovingkindness be my comfort — let Your compassion come to me that I may live — let the arrogant be put to shame — let those who fear You turn to me — let my heart be blameless in Your statutes.',
    kjv: [
      'Thy hands have made me and fashioned me: give me understanding, that I may learn thy commandments.',
      'They that fear thee will be glad when they see me; because I have hoped in thy word.',
      'I know, O LORD, that thy judgments are right, and that thou in faithfulness hast afflicted me.',
      'Let, I pray thee, thy merciful kindness be for my comfort, according to thy word unto thy servant.',
      'Let thy tender mercies come unto me, that I may live: for thy law is my delight.',
      'Let the proud be ashamed; for they dealt perversely with me without a cause: but I will meditate in thy precepts.',
      'Let those that fear thee turn unto me, and those that have known thy testimonies.',
      'Let my heart be sound in thy statutes; that I be not ashamed.',
    ],
  },
  {
    num: 11,
    slug: 'kaf',
    modern: 'כ',
    paleo: '𐤊',
    name: 'Kaf',
    pictograph: 'Open Palm / Bent Hand',
    meaning: 'Empty Hand · Surrender · To Receive',
    verseStart: 81,
    verseEnd: 88,
    words: [
      { verse: 81, hebrew: 'כָּלְתָה', transliteration: 'Kaltah', english: 'Faints with longing' },
      { verse: 82, hebrew: 'כָּלוּ', transliteration: 'Kalu', english: 'My eyes fail' },
      { verse: 83, hebrew: 'כִּי', transliteration: 'Ki', english: 'Like a wineskin in smoke' },
      { verse: 84, hebrew: 'כַּמָּה', transliteration: 'Kammah', english: 'How long?' },
      { verse: 85, hebrew: 'כָּרוּ', transliteration: 'Karu', english: 'They dug pits' },
      { verse: 86, hebrew: 'כָּל', transliteration: 'Kol', english: 'ALL faithful' },
      { verse: 87, hebrew: 'כִּמְעַט', transliteration: "Kim'at", english: 'Almost consumed' },
      { verse: 88, hebrew: 'כְּחַסְדְּךָ', transliteration: 'Kchasdecha', english: 'Your lovingkindness' },
    ],
    sentence:
      '"Faints with longing — my eyes fail — like a wineskin in smoke — HOW LONG? — they dug pits — ALL (faithful) — almost consumed — according to Your lovingkindness."',
    message:
      'This is the breaking point. Soul faints, eyes fail, shriveled like a wineskin in smoke, pits dug beneath the feet, nearly consumed. Yet the bent, empty Kaf is the hand that is ready to RECEIVE. At the breaking point comes the pivot: ALL Your commandments are faithful. The empty, open hand is met by His lovingkindness.',
    flow: 'My soul languishes for Your salvation — my eyes fail for Your word — I have become like a wineskin in the smoke — HOW LONG until You act? — the proud have dug pits for me — yet ALL Your commandments are faithful — they almost destroyed me from the earth — but I did not forsake Your precepts; revive me according to Your lovingkindness.',
    kjv: [
      'My soul fainteth for thy salvation: but I hope in thy word.',
      'Mine eyes fail for thy word, saying, When wilt thou comfort me?',
      'For I am become like a bottle in the smoke; yet do I not forget thy statutes.',
      'How many are the days of thy servant? when wilt thou execute judgment on them that persecute me?',
      'The proud have digged pits for me, which are not after thy law.',
      'All thy commandments are faithful: they persecute me wrongfully; help thou me.',
      'They had almost consumed me upon earth; but I forsook not thy precepts.',
      'Quicken me after thy lovingkindness; so shall I keep the testimony of thy mouth.',
    ],
  },
  {
    num: 12,
    slug: 'lamed',
    modern: 'ל',
    paleo: '𐤋',
    name: 'Lamed',
    pictograph: 'Ox Goad / Staff',
    meaning: 'To Learn · Eternal Teaching · Toward',
    verseStart: 89,
    verseEnd: 96,
    words: [
      { verse: 89, hebrew: 'לְעוֹלָם', transliteration: "Le'olam", english: 'Forever' },
      { verse: 90, hebrew: 'לְדֹר', transliteration: 'Ledor', english: 'To every generation' },
      { verse: 91, hebrew: 'לְמִשְׁפָּטֶיךָ', transliteration: 'Lemishpatecha', english: 'Your judgments' },
      { verse: 92, hebrew: 'לוּלֵי', transliteration: 'Lule', english: 'If not for Your Torah' },
      { verse: 93, hebrew: 'לְעוֹלָם', transliteration: "Le'olam", english: 'Forever' },
      { verse: 94, hebrew: 'לְךָ', transliteration: 'Lecha', english: 'I am Yours' },
      { verse: 95, hebrew: 'לִי', transliteration: 'Li', english: 'For me they wait' },
      { verse: 96, hebrew: 'לְכָל', transliteration: 'Lechol', english: 'Infinitely broad' },
    ],
    sentence:
      '"Forever — to every generation — Your judgments — if not for Your Torah (I would have perished) — forever — I am Yours — for me they wait — infinitely broad."',
    message:
      'The ox goad (Lamed) drives toward eternal learning. Out of the breaking point (Kaf) comes a revelation: the Torah is established in heaven FOREVER, from generation to generation, all creation serves His judgments. I am YOURS. Your commandment is infinitely broad — no human wisdom comes close. The goad drives toward an inexhaustible Word.',
    flow: 'Forever, Yahuah, Your word is settled in heaven — Your faithfulness endures to all generations — by Your judgments all things stand to this day, for all things are Your servants — if Your Torah had not been my delight, I would have perished in my affliction — I will never forget Your precepts, for by them You have revived me — I am Yours, save me — the wicked wait to destroy me — yet Your commandment is exceedingly and infinitely broad.',
    kjv: [
      'For ever, O LORD, thy word is settled in heaven.',
      'Thy faithfulness is unto all generations: thou hast established the earth, and it abideth.',
      'They continue this day according to thine ordinances: for all are thy servants.',
      'Unless thy law had been my delights, I should then have perished in mine affliction.',
      'I will never forget thy precepts: for with them thou hast quickened me.',
      'I am thine, save me; for I have sought thy precepts.',
      'The wicked have waited for me to destroy me: but I will consider thy testimonies.',
      'I have seen an end of all perfection: but thy commandment is exceeding broad.',
    ],
  },
  {
    num: 13,
    slug: 'mem',
    modern: 'מ',
    paleo: '𐤌',
    name: 'Mem',
    pictograph: 'Water',
    meaning: 'Flowing Wisdom · Mighty Waters · Revelation',
    verseStart: 97,
    verseEnd: 104,
    words: [
      { verse: 97, hebrew: 'מָה', transliteration: 'Mah', english: 'How I love!' },
      { verse: 98, hebrew: 'מֵאֹיְבַי', transliteration: "Me'oyevai", english: 'Wiser than enemies' },
      { verse: 99, hebrew: 'מִכָּל', transliteration: 'Mikol', english: 'More than all teachers' },
      { verse: 100, hebrew: 'מִזְּקֵנִים', transliteration: 'Mizzekenim', english: 'More than the aged' },
      { verse: 101, hebrew: 'מִכָּל', transliteration: 'Mikol', english: 'From every evil path' },
      { verse: 102, hebrew: 'מִמִּשְׁפָּטֶיךָ', transliteration: 'Mimishpatecha', english: 'Not turned away' },
      { verse: 103, hebrew: 'מַה', transliteration: 'Mah', english: 'How sweet!' },
      { verse: 104, hebrew: 'מִפִּקּוּדֶיךָ', transliteration: 'Mipikudecha', english: 'Understanding flows' },
    ],
    sentence:
      '"How I love — wiser than enemies — more than all teachers — more than the aged — from every evil path — not turned from Your judgments — how sweet — from Your precepts, understanding."',
    message:
      'The Mem is water — and from the eternal teaching (Lamed) flow rivers of WISDOM. Wiser than enemies, teachers, and elders. How sweet are Your words. From Your precepts, understanding flows. The living waters of the Torah surpass every human institution, every accumulated tradition, every wisdom of men.',
    flow: 'Oh how I love Your Torah — it makes me wiser than my enemies — I have more insight than all my teachers — I understand more than the aged — I have kept my feet from every evil path — I have not turned aside from Your ordinances — how sweet are Your words to my taste, sweeter than honey — through Your precepts I get understanding; therefore I hate every false way.',
    kjv: [
      'O how love I thy law! it is my meditation all the day.',
      'Thou through thy commandments hast made me wiser than mine enemies: for they are ever with me.',
      'I have more understanding than all my teachers: for thy testimonies are my meditation.',
      'I understand more than the ancients, because I keep thy precepts.',
      'I have refrained my feet from every evil way, that I might keep thy word.',
      'I have not departed from thy judgments: for thou hast taught me.',
      'How sweet are thy words unto my taste! yea, sweeter than honey to my mouth!',
      'Through thy precepts I get understanding: therefore I hate every false way.',
    ],
  },
  {
    num: 14,
    slug: 'nun',
    modern: 'נ',
    paleo: '𐤍',
    name: 'Nun',
    pictograph: 'Fish / Sprouting Seed',
    meaning: 'Activity · Life · The Faithful Heir',
    verseStart: 105,
    verseEnd: 112,
    words: [
      { verse: 105, hebrew: 'נֵר', transliteration: 'Ner', english: 'A lamp' },
      { verse: 106, hebrew: 'נִשְׁבַּעְתִּי', transliteration: "Nishba'ti", english: 'I have sworn' },
      { verse: 107, hebrew: 'נַעֲנֵיתִי', transliteration: "Na'aneiti", english: 'Afflicted' },
      { verse: 108, hebrew: 'נִדְבוֹת', transliteration: 'Nidvot', english: 'Freewill offerings' },
      { verse: 109, hebrew: 'נַפְשִׁי', transliteration: 'Nafshi', english: 'My soul' },
      { verse: 110, hebrew: 'נָתְנוּ', transliteration: 'Natenu', english: 'Snare set for me' },
      { verse: 111, hebrew: 'נָחַלְתִּי', transliteration: 'Nachalti', english: 'I inherited' },
      { verse: 112, hebrew: 'נָטִיתִי', transliteration: 'Natiti', english: 'I inclined my heart' },
    ],
    sentence:
      '"A lamp — I have sworn — afflicted — freewill offerings — my soul (in my hand) — snare set — I inherited — I inclined my heart."',
    message:
      'The fish (Nun) is active, alive, in its element. The wisdom-waters of the Mem now light the path: the Word is a LAMP. The Torah keeper has sworn, offered freely, holds the soul in the hand despite snares, inherited the testimonies as heritage, and inclined the heart forever. This is the soul fully alive in its element — swimming in Torah.',
    flow: 'Your word is a lamp to my feet and a light to my path — I have sworn and I will confirm it: I will keep Your righteous ordinances — I am deeply afflicted; revive me according to Your word — I offer the freewill offerings of my mouth — my life is continually in my hand, yet I do not forget Your Torah — the wicked have laid a snare for me, yet I have not gone astray from Your precepts — I have inherited Your testimonies as a heritage forever — and I have inclined my heart to perform Your statutes, to the very end.',
    kjv: [
      'Thy word is a lamp unto my feet, and a light unto my path.',
      'I have sworn, and I will perform it, that I will keep thy righteous judgments.',
      'I am afflicted very much: quicken me, O LORD, according unto thy word.',
      'Accept, I beseech thee, the freewill offerings of my mouth, O LORD, and teach me thy judgments.',
      'My soul is continually in my hand: yet do I not forget thy law.',
      'The wicked have laid a snare for me: yet I erred not from thy precepts.',
      'Thy testimonies have I taken as an heritage for ever: for they are the rejoicing of my heart.',
      'I have inclined mine heart to perform thy statutes alway, even unto the end.',
    ],
  },
  {
    num: 15,
    slug: 'samech',
    modern: 'ס',
    paleo: '𐤎',
    name: 'Samech',
    pictograph: 'Prop / Support',
    meaning: 'Upheld · Fully Enclosed · Sustained',
    verseStart: 113,
    verseEnd: 120,
    words: [
      { verse: 113, hebrew: 'סֵעֲפִים', transliteration: "Se'afim", english: 'Double-mindedness' },
      { verse: 114, hebrew: 'סִתְרִי', transliteration: 'Sitri', english: 'My hiding place' },
      { verse: 115, hebrew: 'סוּרוּ', transliteration: 'Suru', english: 'Depart evildoers' },
      { verse: 116, hebrew: 'סָמְכֵנִי', transliteration: 'Samcheni', english: 'Uphold me' },
      { verse: 117, hebrew: 'סְעָדֵנִי', transliteration: "Se'adeni", english: 'Hold me up' },
      { verse: 118, hebrew: 'סָלִיתָ', transliteration: 'Salita', english: 'You rejected the proud' },
      { verse: 119, hebrew: 'סִגִּים', transliteration: 'Sigim', english: 'Dross removed' },
      { verse: 120, hebrew: 'סָמַר', transliteration: 'Samar', english: 'Flesh trembles' },
    ],
    sentence:
      '"Double-mindedness (I hate) — my hiding place — depart evildoers — uphold me — hold me up — You rejected the proud — dross removed — my flesh trembles."',
    message:
      'The Samech is fully circular — the letter that closes on itself, the prop that supports on all sides. I hate double-mindedness — you cannot be upheld by two things at once. Yahuah is my shelter. He treads down the proud and removes dross like a refiner. My flesh trembles in holy awe. Fully enclosed. Fully supported.',
    flow: 'I hate those who are double-minded, but I love Your Torah — You are my hiding place and my shield — depart from me, evildoers, that I may keep the commandments of my Elohim — uphold me according to Your word that I may live — hold me up and I will be safe, and I will have regard for Your statutes continually — You have rejected all who wander from Your statutes, for their deceit is useless — You have removed all the wicked of the earth like dross — and my flesh trembles in awe of You and Your judgments.',
    kjv: [
      'I hate vain thoughts: but thy law do I love.',
      'Thou art my hiding place and my shield: I hope in thy word.',
      'Depart from me, ye evildoers: for I will keep the commandments of my God.',
      'Uphold me according unto thy word, that I may live: and let me not be ashamed of my hope.',
      'Hold thou me up, and I shall be safe: and I will have respect unto thy statutes continually.',
      'Thou hast trodden down all them that err from thy statutes: for their deceit is falsehood.',
      'Thou puttest away all the wicked of the earth like dross: therefore I love thy testimonies.',
      'My flesh trembleth for fear of thee; and I am afraid of thy judgments.',
    ],
  },
  {
    num: 16,
    slug: 'ayin',
    modern: 'ע',
    paleo: '𐤏',
    name: 'Ayin',
    pictograph: 'Eye',
    meaning: 'To See · Know by Experience · Watch',
    verseStart: 121,
    verseEnd: 128,
    words: [
      { verse: 121, hebrew: 'עָשִׂיתִי', transliteration: 'Asiti', english: 'I have done justice' },
      { verse: 122, hebrew: 'עֲרֹב', transliteration: 'Arov', english: 'Be my guarantee' },
      { verse: 123, hebrew: 'עֵינַי', transliteration: 'Einai', english: 'My eyes fail' },
      { verse: 124, hebrew: 'עֲשֵׂה', transliteration: 'Aseh', english: 'Deal with Your servant' },
      { verse: 125, hebrew: 'עַבְדְּךָ', transliteration: 'Avdecha', english: 'Your servant' },
      { verse: 126, hebrew: 'עֵת', transliteration: 'Et', english: 'It is time' },
      { verse: 127, hebrew: 'עַל', transliteration: 'Al', english: 'Therefore' },
      { verse: 128, hebrew: 'עַל', transliteration: 'Al', english: 'Therefore' },
    ],
    sentence:
      '"I have done justice — be my guarantee — my eyes fail — deal with Your servant — Your servant — it is time — therefore — therefore."',
    message:
      "The eye (Ayin) sees by experience — and what it sees grieves it. I have done what is right. My eyes fail watching for deliverance. IT IS TIME for Yahuah to act — they have broken His Torah. And so the double THEREFORE: because I have seen, because I have done, because it is time — THEREFORE I love Your commandments more than fine gold. The eye that sees the world's faithlessness turns back more devoted than before.",
    flow: 'I have done justice and righteousness — be surety for Your servant for good; do not let the arrogant oppress me — my eyes fail with longing for Your salvation and for Your righteous word — deal with Your servant according to Your lovingkindness — I am Your servant; give me understanding — it is time for Yahuah to act, for they have broken Your Torah — therefore I love Your commandments above gold — therefore I consider all Your precepts concerning everything to be right, and I hate every false way.',
    kjv: [
      'I have done judgment and justice: leave me not to mine oppressors.',
      'Be surety for thy servant for good: let not the proud oppress me.',
      'Mine eyes fail for thy salvation, and for the word of thy righteousness.',
      'Deal with thy servant according unto thy mercy, and teach me thy statutes.',
      'I am thy servant; give me understanding, that I may know thy testimonies.',
      'It is time for thee, LORD, to work: for they have made void thy law.',
      'Therefore I love thy commandments above gold; yea, above fine gold.',
      'Therefore I esteem all thy precepts concerning all things to be right; and I hate every false way.',
    ],
  },
  {
    num: 17,
    slug: 'peh',
    modern: 'פ',
    paleo: '𐤐',
    name: 'Peh',
    pictograph: 'Mouth / Open',
    meaning: 'Word · Speak · Declaration',
    verseStart: 129,
    verseEnd: 136,
    words: [
      { verse: 129, hebrew: 'פְּלָאוֹת', transliteration: "Pela'ot", english: 'Wonderful' },
      { verse: 130, hebrew: 'פֵּתַח', transliteration: 'Petach', english: 'Opening gives light' },
      { verse: 131, hebrew: 'פִּי', transliteration: 'Pi', english: 'My mouth opened wide' },
      { verse: 132, hebrew: 'פְּנֵה', transliteration: 'Peneh', english: 'Turn toward me' },
      { verse: 133, hebrew: 'פְּעָמַי', transliteration: "Pe'amai", english: 'My steps' },
      { verse: 134, hebrew: 'פְּדֵנִי', transliteration: 'Pedeni', english: 'Redeem me' },
      { verse: 135, hebrew: 'פָּנֶיךָ', transliteration: 'Panecha', english: 'Your face shine' },
      { verse: 136, hebrew: 'פַּלְגֵי', transliteration: 'Palgei', english: 'Streams of tears' },
    ],
    sentence:
      '"Wonderful — the opening gives light — my mouth opened wide — turn toward me — my steps — redeem me — Your face shine — streams of tears."',
    message:
      'The Peh is the open mouth — and what comes through it is LIGHT. The wonderful testimonies open and give understanding to the simple. The mouth opens wide panting for the commandments. Steps ordered by the Word. Redeemed. Face shining. And then — streams of tears because others will not keep His Torah. The open mouth cries as much as it praises.',
    flow: 'Your testimonies are wonderful — the unfolding of Your words gives light, imparting understanding to the simple — I opened my mouth wide and panted, for I longed for Your commandments — turn to me and be gracious, as is Your way with those who love Your name — establish my footsteps in Your word, and let no iniquity have dominion over me — redeem me from the oppression of man — let Your face shine upon Your servant — my eyes shed streams of tears because they do not keep Your law.',
    kjv: [
      'Thy testimonies are wonderful: therefore doth my soul keep them.',
      'The entrance of thy words giveth light; it giveth understanding unto the simple.',
      'I opened my mouth, and panted: for I longed for thy commandments.',
      'Look thou upon me, and be merciful unto me, as thou usest to do unto those that love thy name.',
      'Order my steps in thy word: and let not any iniquity have dominion over me.',
      'Deliver me from the oppression of man: so will I keep thy precepts.',
      'Make thy face to shine upon thy servant; and teach me thy statutes.',
      'Rivers of waters run down mine eyes, because they keep not thy law.',
    ],
  },
  {
    num: 18,
    slug: 'tzadi',
    modern: 'צ',
    paleo: '𐤑',
    name: 'Tzadi',
    pictograph: 'Fishhook',
    meaning: 'Pull Toward · Desire · The Righteous One',
    verseStart: 137,
    verseEnd: 144,
    words: [
      { verse: 137, hebrew: 'צַדִּיק', transliteration: 'Tzaddik', english: 'Righteous You are' },
      { verse: 138, hebrew: 'צִוִּיתָ', transliteration: 'Tzivvita', english: 'You commanded' },
      { verse: 139, hebrew: 'צִמְּתַתְנִי', transliteration: 'Tzimmetattni', english: 'Zeal consumes me' },
      { verse: 140, hebrew: 'צְרוּפָה', transliteration: 'Tzruphah', english: 'Refined / pure' },
      { verse: 141, hebrew: 'צָעִיר', transliteration: "Tza'ir", english: 'I am small' },
      { verse: 142, hebrew: 'צִדְקָתְךָ', transliteration: 'Tzidkatecha', english: 'Your righteousness eternal' },
      { verse: 143, hebrew: 'צַר', transliteration: 'Tzar', english: 'Trouble found me' },
      { verse: 144, hebrew: 'צֶדֶק', transliteration: 'Tzedek', english: 'Righteousness eternal' },
    ],
    sentence:
      '"Righteous You are — You commanded — zeal consumes me — refined and pure — I am small — Your righteousness eternal — trouble found me — righteousness eternal."',
    message:
      'The fishhook (Tzadi) pulls toward righteousness. This section opens and closes with RIGHTEOUSNESS — Yahuah is righteous, His Word is pure, His righteousness is eternal from beginning to end. In the middle: the servant is small and forgotten, consumed by zeal, and trouble has come. But the fishhook pulls through every trouble toward eternal right-standing.',
    flow: 'Righteous are You, Yahuah, and upright are Your judgments — You have commanded Your testimonies in righteousness and exceeding faithfulness — my zeal has consumed me, because my adversaries have forgotten Your words — Your word is very pure and refined, therefore Your servant loves it — I am small and despised, yet I do not forget Your precepts — Your righteousness is an everlasting righteousness and Your law is truth — trouble and anguish have found me — yet Your righteousness is everlasting and Your law endures forever.',
    kjv: [
      'Righteous art thou, O LORD, and upright are thy judgments.',
      'Thy testimonies that thou hast commanded are righteous and very faithful.',
      'My zeal hath consumed me, because mine enemies have forgotten thy words.',
      'Thy word is very pure: therefore thy servant loveth it.',
      'I am small and despised: yet do not I forget thy precepts.',
      'Thy righteousness is an everlasting righteousness, and thy law is the truth.',
      'Trouble and anguish have taken hold on me: yet thy commandments are my delights.',
      'The righteousness of thy testimonies is everlasting: give me understanding, and I shall live.',
    ],
  },
  {
    num: 19,
    slug: 'qof',
    modern: 'ק',
    paleo: '𐤒',
    name: 'Qof',
    pictograph: 'Back of Head / Horizon',
    meaning: 'Urgent Cry · What Comes After · Holy',
    verseStart: 145,
    verseEnd: 152,
    words: [
      { verse: 145, hebrew: 'קָרָאתִי', transliteration: 'Karati', english: 'I called out' },
      { verse: 146, hebrew: 'קְרָאתִיךָ', transliteration: 'Keratticha', english: 'I called to You' },
      { verse: 147, hebrew: 'קִדַּמְתִּי', transliteration: 'Kiddamti', english: 'Before dawn' },
      { verse: 148, hebrew: 'קִדְּמוּ', transliteration: 'Kiddemu', english: 'Before the night watch' },
      { verse: 149, hebrew: 'קוֹלִי', transliteration: 'Koli', english: 'My voice' },
      { verse: 150, hebrew: 'קָרְבוּ', transliteration: 'Karvu', english: 'Evil drew near' },
      { verse: 151, hebrew: 'קָרוֹב', transliteration: 'Karov', english: 'You are NEAR' },
      { verse: 152, hebrew: 'קֶדֶם', transliteration: 'Kedem', english: 'From of old' },
    ],
    sentence:
      '"I called — I called to You — before dawn — before the night watch — my voice — evil drew near — You are NEAR — from of old."',
    message:
      'The Qof stands apart — the holy letter at the horizon. This section is the desperate cry BEFORE DAWN, before the world wakes. Eyes open in the night watches to seek Yahuah. Evil pursuers draw near — but Yahuah is NEARER. His testimonies have been known from of old — ancient, immovable. The darkest hour before dawn is met by the One who was there before the beginning.',
    flow: 'I cried with my whole heart; answer me, Yahuah — I cried to You, save me, and I will keep Your testimonies — I rose before dawn and cried for help — my eyes anticipated the night watches, that I may meditate on Your word — hear my voice according to Your lovingkindness — those who follow after wickedness draw near — but You, Yahuah, are near — and all Your commandments are truth; I have known from Your testimonies of old that You founded them forever.',
    kjv: [
      'I cried with my whole heart; hear me, O LORD: I will keep thy statutes.',
      'I cried unto thee; save me, and I shall keep thy testimonies.',
      'I prevented the dawning of the morning, and cried: I hoped in thy word.',
      'Mine eyes prevent the night watches, that I might meditate in thy word.',
      'Hear my voice according unto thy lovingkindness: O LORD, quicken me according to thy judgment.',
      'They draw nigh that follow after mischief: they are far from thy law.',
      'Thou art near, O LORD; and all thy commandments are truth.',
      'Concerning thy testimonies, I have known of old that thou hast founded them for ever.',
    ],
  },
  {
    num: 20,
    slug: 'resh',
    modern: 'ר',
    paleo: '𐤓',
    name: 'Resh',
    pictograph: 'Head / Beginning',
    meaning: 'The Chief · First Principle · Poverty',
    verseStart: 153,
    verseEnd: 160,
    words: [
      { verse: 153, hebrew: 'רְאֵה', transliteration: "Re'eh", english: 'See my affliction' },
      { verse: 154, hebrew: 'רִיבָה', transliteration: 'Rivah', english: 'Plead my cause' },
      { verse: 155, hebrew: 'רְחוֹקָה', transliteration: 'Rechokah', english: 'Far from the wicked' },
      { verse: 156, hebrew: 'רַחֲמֶיךָ', transliteration: 'Rachamecha', english: 'Your mercies' },
      { verse: 157, hebrew: 'רַבִּים', transliteration: 'Rabbim', english: 'Many persecutors' },
      { verse: 158, hebrew: 'רָאִיתִי', transliteration: "Ra'iti", english: 'I saw and grieved' },
      { verse: 159, hebrew: 'רְאֵה', transliteration: "Re'eh", english: 'See how I love' },
      { verse: 160, hebrew: 'רֹאשׁ', transliteration: 'Rosh', english: 'From the beginning' },
    ],
    sentence:
      '"See my affliction — plead my cause — far (salvation from the wicked) — Your mercies — many persecutors — I saw and grieved — see how I love — from the beginning, true."',
    message:
      'The Resh is the head — the beginning, the first principle, but also the picture of the poor one who bows low. This section opens and ends with SEEING. See my affliction. See how I love. And the final word: ROSH — the head, the sum total: Your word is true from the very beginning. The bowed head of poverty looks up to the One whose Word stands from the top.',
    flow: 'Look upon my affliction and rescue me — plead my cause and redeem me; revive me according to Your word — salvation is far from the wicked, for they do not seek Your statutes — great are Your mercies, Yahuah; revive me according to Your ordinances — many are my persecutors and my adversaries — I behold the treacherous and loathe them, because they do not keep Your word — see how I love Your precepts; revive me, Yahuah, according to Your lovingkindness — the sum of Your word is truth, and every one of Your righteous ordinances endures forever.',
    kjv: [
      'Consider mine affliction, and deliver me: for I do not forget thy law.',
      'Plead my cause, and deliver me: quicken me according to thy word.',
      'Salvation is far from the wicked: for they seek not thy statutes.',
      'Great are thy tender mercies, O LORD: quicken me according to thy judgments.',
      'Many are my persecutors and mine enemies; yet do I not decline from thy testimonies.',
      'I beheld the transgressors, and was grieved; because they kept not thy word.',
      'Consider how I love thy precepts: quicken me, O LORD, according to thy lovingkindness.',
      'Thy word is true from the beginning: and every one of thy righteous judgments endureth for ever.',
    ],
  },
  {
    num: 21,
    slug: 'shin',
    modern: 'ש',
    paleo: '𐤔',
    name: 'Shin',
    pictograph: 'Teeth / Fire',
    meaning: 'Sharp · Press · Divide · Consume',
    verseStart: 161,
    verseEnd: 168,
    words: [
      { verse: 161, hebrew: 'שָׂרִים', transliteration: 'Sarim', english: 'Princes persecuted' },
      { verse: 162, hebrew: 'שָׂשׂ', transliteration: 'Sas', english: 'I rejoice' },
      { verse: 163, hebrew: 'שֶׁקֶר', transliteration: 'Sheker', english: 'Falsehood I hate' },
      { verse: 164, hebrew: 'שֶׁבַע', transliteration: 'Sheva', english: 'Seven times praise' },
      { verse: 165, hebrew: 'שָׁלוֹם', transliteration: 'Shalom', english: 'Great peace' },
      { verse: 166, hebrew: 'שִׂבַּרְתִּי', transliteration: 'Sibarti', english: 'I hoped' },
      { verse: 167, hebrew: 'שָׁמְרָה', transliteration: 'Shamerah', english: 'My soul kept' },
      { verse: 168, hebrew: 'שָׁמַרְתִּי', transliteration: 'Shamarti', english: 'I kept' },
    ],
    sentence:
      '"Princes persecuted me — I rejoice — falsehood I hate — seven times praise — GREAT PEACE — I hoped — my soul kept — I kept."',
    message:
      'The Shin is fire and teeth — the letter that DIVIDES and CONSUMES. Princes persecute — but I REJOICE like finding great spoil. The sharp Shin divides everything: falsehood vs truth, persecution vs praise, anxiety vs SHALOM. Great peace belongs to those who love the Torah — no stumbling block. The double keeping at the end (my soul kept, I kept) is the consuming fire of total devotion.',
    flow: 'Princes persecute me without cause, but my heart stands in awe of Your words — I rejoice at Your word like one who finds great spoil — I hate and despise falsehood, but I love Your Torah — seven times a day I praise You because of Your righteous ordinances — those who love Your Torah have great peace, and nothing causes them to stumble — I hope for Your salvation, Yahuah, and I do Your commandments — my soul keeps Your testimonies and I love them exceedingly — I keep Your precepts and Your testimonies, for all my ways are before You.',
    kjv: [
      'Princes have persecuted me without a cause: but my heart standeth in awe of thy word.',
      'I rejoice at thy word, as one that findeth great spoil.',
      'I hate and abhor lying: but thy law do I love.',
      'Seven times a day do I praise thee because of thy righteous judgments.',
      'Great peace have they which love thy law: and nothing shall offend them.',
      'LORD, I have hoped for thy salvation, and done thy commandments.',
      'My soul hath kept thy testimonies; and I love them exceedingly.',
      'I have kept thy precepts and thy testimonies: for all my ways are before thee.',
    ],
  },
  {
    num: 22,
    slug: 'tav',
    modern: 'ת',
    paleo: '𐤕',
    name: 'Tav',
    pictograph: 'Mark / Cross / Seal',
    meaning: 'Covenant Sign · Completion · The Last',
    verseStart: 169,
    verseEnd: 176,
    words: [
      { verse: 169, hebrew: 'תְּקָרַב', transliteration: 'Tekrav', english: 'Let draw near my cry' },
      { verse: 170, hebrew: 'תָּבֹא', transliteration: 'Tavo', english: 'Let come my prayer' },
      { verse: 171, hebrew: 'תַּבַּעְנָה', transliteration: "Tabba'nah", english: 'Overflow with praise' },
      { verse: 172, hebrew: 'תַּעַן', transliteration: "Ta'an", english: 'My tongue respond' },
      { verse: 173, hebrew: 'תְּהִי', transliteration: 'Tehi', english: 'Your hand help me' },
      { verse: 174, hebrew: 'תָּאַבְתִּי', transliteration: "Ta'avti", english: 'I longed for You' },
      { verse: 175, hebrew: 'תְּחִי', transliteration: 'Techi', english: 'Let my soul live' },
      { verse: 176, hebrew: 'תָּעִיתִי', transliteration: "Ta'iti", english: 'I have strayed' },
    ],
    sentence:
      '"Let my cry draw near — let my prayer come — overflow with praise — my tongue respond — Your hand help me — I longed — let my soul live — I have strayed (seek Your servant)."',
    message:
      'The Tav is the last letter — the covenant mark, the seal. In Ezekiel 9:4 it is the mark on the foreheads of those who sigh and cry over abominations. Everything is brought before Yahuah: cry, prayer, praise, tongue responding with His Word, His hand to help, deep longing, the cry for life. And then — the most powerful ending in all of Scripture: "I have strayed like a lost sheep. SEEK Your servant — for I have not forgotten Your commandments." The final mark is not triumph. It is humility. The Tav is the seal of the one who is found only because Yahuah seeks.',
    flow: 'Let my cry come before You, Yahuah — let my supplication come before You; deliver me according to Your word — let my lips overflow with praise, for You teach me Your statutes — let my tongue sing of Your word, for all Your commandments are righteousness — let Your hand be ready to help me, for I have chosen Your precepts — I long for Your salvation, Yahuah, and Your Torah is my delight — let my soul live that it may praise You, and let Your ordinances help me — I have gone astray like a lost sheep; seek Your servant, for I do not forget Your commandments.',
    kjv: [
      'Let my cry come near before thee, O LORD: give me understanding according to thy word.',
      'Let my supplication come before thee: deliver me according to thy word.',
      'My lips shall utter praise, when thou hast taught me thy statutes.',
      'My tongue shall speak of thy word: for all thy commandments are righteousness.',
      'Let thine hand help me; for I have chosen thy precepts.',
      'I have longed for thy salvation, O LORD; and thy law is my delight.',
      'Let my soul live, and it shall praise thee; and let thy judgments help me.',
      'I have gone astray like a lost sheep; seek thy servant; for I do not forget thy commandments.',
    ],
  },
];

// ─────────────────────────────────────────────
// MOVEMENTS
// ─────────────────────────────────────────────

export const MOVEMENTS: Movement[] = [
  {
    num: 1,
    range: 'Letters א–ז (1–7)',
    verseRange: 'Verses 1–56',
    title: 'The Foundation',
    theme: 'Salvation · Sanctification · Separation',
    points: [
      'You encounter Yahuah — He is the Source and the Strength',
      'His Word takes up residence inside you',
      'You become a stranger in this world',
      'The wilderness brings you low — you choose and you run',
      'Total surrender at the window — the breath fills you',
      'The nail connects you to Yahuah — everything flows',
      'The proud mock, but you have songs in the night',
    ],
  },
  {
    num: 2,
    range: 'Letters ח–נ (8–14)',
    verseRange: 'Verses 57–112',
    title: 'The Deepening',
    theme: 'The Dark Night · The Anchor · The Overflow',
    points: [
      'Enclosed in the covenant — Yahuah is your portion',
      'Every affliction is turned to good — four times: Tov',
      'His hands made you — the Hand is at work in you',
      'The total breaking point — soul faints, how long?',
      'The eternal anchor is found — forever, I am Yours',
      'Wisdom pours out like water — wiser than enemies',
      'The soul fully alive — swimming in Torah',
    ],
  },
  {
    num: 3,
    range: 'Letters ס–ת (15–22)',
    verseRange: 'Verses 113–176',
    title: 'The Witness and Seal',
    theme: 'Prophetic Voice · Priestly Intercession · Covenant Seal',
    points: [
      'Fully upheld and trembling in holy awe',
      'The eye sees clearly — it is time to act — therefore',
      'The mouth opens and speaks and weeps',
      'The fishhook of righteousness pulls through fire',
      'The desperate cry before dawn — He is nearer',
      'See my affliction — plead my cause — Your word is true',
      'Great peace in keeping — princes cannot stop the fire',
      'Final humble surrender — I have strayed. Seek me.',
    ],
  },
];

// ─────────────────────────────────────────────
// DISCOVERIES
// ─────────────────────────────────────────────

export const DISCOVERIES: Discovery[] = [
  {
    id: 1,
    gem: 'The Architecture of the Journey',
    subtitle: 'Three Movements · Seven Letters Each',
    content: {
      type: 'architecture',
      movements: MOVEMENTS,
    },
  },
  {
    id: 2,
    gem: 'The Journey Begins with You Finding Him — and Ends with Him Finding You',
    subtitle: 'Letter 1 vs Letter 22',
    content: {
      type: 'firstlast',
      first:
        'Blessed and blessed is the one who encounters YOU, Yahuah — oh that I would always walk in this — then I will praise You and I will keep Your Torah.',
      last: 'I have gone astray like a lost sheep — seek Your servant, for I do not forget Your commandments.',
      insight1Title: 'What the beginning declares',
      insight1:
        'The journey opens with the soul encountering Yahuah and resolving — with hope, with longing — to praise and to keep. It is the declaration of a man at the beginning of the road, full of intention. The word YOU (Attah) is placed at the very center of the first section. Everything begins with recognizing who Yahuah is.',
      insight2Title: 'What the ending reveals',
      insight2:
        'After 176 verses. After every midnight praise, every vow kept, every affliction endured, every declaration of love — the final word of the longest chapter in all of Scripture is not "I have arrived." It is not triumph. It is: "I have strayed like a lost sheep. Seek Your servant." The man at the end of the road knows himself better than the man at the beginning.',
      keyline:
        'The entire Torah-keeping walk — from Aleph to Tav — is not the story of a man who perfected himself through the keeping of the Law. It is the story of a man who discovered, through the keeping of the Law, that he could not. And who found that Yahuah is the Seeker.',
    },
  },
  {
    id: 3,
    gem: 'The Hidden Word in Scripture',
    subtitle: 'The untranslatable mark · Direct object · The one being acted upon',
    content: {
      type: 'alephtav',
      genRef: 'The Aleph-Tav (אֵת) appears in Genesis 1:1 before "heavens" and "earth"',
      cells: [
        {
          title: 'What the Aleph-Tav marks',
          body: 'In Hebrew grammar, the את introduces the direct object — the recipient of the action. When Elohim creates, acts, speaks, or moves, the את marks what He is moving toward. It is the fingerprint of divine action upon a thing.',
        },
        {
          title: 'What Psalm 119 reveals',
          body: 'The hidden message of Psalm 119 begins with Aleph — Yahuah\'s Strength encountering, acting upon, blessing you. It ends with Tav — His covenant seal still pursuing, still seeking, still acting upon you. From first letter to last — you are the Aleph-Tav. The one He acts upon.',
        },
        {
          title: 'You are the direct object',
          body: 'This is the deepest truth of the Torah-keeping life. The believer is not the subject of the sentence. Yahuah is. You are not the one doing the great work. You are the one being acted upon — saved, sustained, sought, sealed — from Aleph to Tav.',
        },
        {
          title: 'Why this changes everything',
          body: 'Modern Christianity often presents the believer as the agent — the one who decides, chooses, achieves. But Psalm 119\'s hidden architecture whispers something different: the whole journey, from blessed beginning to straying end, is carried by the One who seeks. You are not the hero. You are the את.',
        },
      ],
      conclusion:
        'From the first letter to the last — You are the Aleph-Tav. The one Yahuah acts upon. The one He saves. The one He seeks.',
    },
  },
  {
    id: 4,
    gem: 'The Declaration of Yahushua',
    subtitle: 'The Revelation connection · The one who walks Psalm 119 on your behalf',
    content: {
      type: 'yahushua',
      quote:
        '"I am the Aleph and the Tav, the First and the Last, the Beginning and the End." — Revelation 22:13',
      cards: [
        {
          title: 'Not merely eternality',
          body: 'When Yahushua declares "I am the Aleph and the Tav," He is not only announcing that He exists outside of time — though that is true. He is making a specific claim about His relationship to His people. He is the One who was there at the first letter of their journey and will be there at the last. He is the beginning and the end of the walk Psalm 119 describes.',
        },
        {
          title: 'The Strength and the Seal',
          body: 'Aleph is the Ox Head — Strength, First, Leader. Tav is the Mark, the Cross, the Covenant Seal. Yahushua is the Strength that encounters you at the beginning of the journey (Aleph) — and the Covenant Seal that marks you at the end (Tav). Every letter in between is His work in you.',
        },
        {
          title: 'The bridge from Torah to Revelation',
          body: 'Psalm 119 is the great Torah psalm — 176 verses of longing for the Word of Yahuah. The Book of Revelation is its completion. The man of Psalm 119 cries "I have strayed — seek me." The One who appears at the end of Revelation says "I am the First and the Last. I am coming." Psalm 119 sets the cry. Revelation answers it.',
        },
        {
          title: 'He walked it first',
          body: 'Yahushua the Messiah is the only human being who walked the full Torah walk described in Psalm 119 without straying. He is the one who could say from Aleph to Tav: "I have not forgotten Your commandments." He walks it perfectly — so that His people, who stray, can be sought and found by the One who did not.',
        },
      ],
    },
  },
  {
    id: 5,
    gem: 'The Plain Statement',
    subtitle: 'The message encoded in the longest chapter of Scripture',
    content: {
      type: 'verdict',
      text: 'The message within the message of Psalm 119 is this: The entire Torah-keeping life — from first encounter to final breath — is not a story of human achievement. It is the story of Yahuah acting on His people from Aleph to Tav. It begins with blessing. It ends with being sought. The sheep does not find its way home. The Shepherd comes.',
      seal: 'Psalm 119 · 176 Verses · 22 Letters · Hidden for three thousand years',
    },
  },
];
