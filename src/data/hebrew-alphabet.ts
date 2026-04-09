// ================================================================
//   HEBREW ALPHABET — shared data
//   Each letter carries its modern script, paleo (ancient) script,
//   name, sound, pictograph, meaning, and essence teaching.
// ================================================================

export interface HebrewLetter {
  modern: string;      // Modern block script
  paleo: string;       // Ancient paleo-Hebrew script (Unicode block U+10900–U+1091F)
  name: string;        // English name
  sound: string;
  number: number;      // Gematria value
  pictograph: string;  // What the letter originally depicted
  meaning: string;     // Short concept line
  essence: string;     // Paragraph teaching (HTML allowed)
}

export const letters: HebrewLetter[] = [
  { modern: 'א', paleo: '𐤀', name: 'Aleph', sound: 'Silent / breath', number: 1,   pictograph: 'Ox Head',                    meaning: 'Strength · Leader · First',               essence: `The silent ox — strength that speaks without speaking. The first letter carries the first breath, the force behind all things. Aleph is Yahuah before words began.` },
  { modern: 'ב', paleo: '𐤁', name: 'Bet',    sound: 'B / V',          number: 2,   pictograph: 'Tent · House',               meaning: 'Inside · Family · Dwelling',              essence: `The tent where life happens. בְּרֵאשִׁית (Bereshit) — "In the beginning" — opens with Bet. Creation itself is a dwelling place, a house Yahuah made for His family to inhabit.` },
  { modern: 'ג', paleo: '𐤂', name: 'Gimel',  sound: 'G',              number: 3,   pictograph: 'Camel',                      meaning: 'Movement · Lifting Up · Blessing',        essence: `The camel carries the precious across the desert without expectation. In mystical tradition, Gimel always runs after Dalet — the wealthy one running to lift the poor.` },
  { modern: 'ד', paleo: '𐤃', name: 'Dalet',  sound: 'D',              number: 4,   pictograph: 'Door · Pathway',             meaning: 'Threshold · Humility · Entry',            essence: `You must stoop to pass through a tent door. Dalet is the threshold between worlds — the humble entry, the path from the ordinary into the sacred. A door does nothing on its own; it only matters where it leads.` },
  { modern: 'ה', paleo: '𐤄', name: 'He',     sound: 'H / breath',     number: 5,   pictograph: 'Window · Man with raised arms', meaning: 'Behold · Revelation · Breath',         essence: `He is the exhale — the breath of revelation. When Yahuah renamed Abram, He inserted this letter twice: Av-ra<strong>H</strong>a<strong>H</strong>m. He breathed Himself into the man. This letter appears twice in יהוה — the Name is two exhales.` },
  { modern: 'ו', paleo: '𐤅', name: 'Vav',    sound: 'W / Ū',          number: 6,   pictograph: 'Nail · Tent Peg · Hook',     meaning: 'Connect · Join · Secure',                 essence: `The nail that holds things together. Vav is the connector — in Hebrew grammar it joins words. As a nail it secures what was separate into one. Its number, 6, is the number of man. The connection between heaven and earth.` },
  { modern: 'ז', paleo: '𐤆', name: 'Zayin',  sound: 'Z',              number: 7,   pictograph: 'Sword · Weapon',             meaning: 'Cut · Sustain · Nourish',                 essence: `The sword that cuts also sustains — the same blade that divides grain feeds the family. Seven is Zayin's number; Shabbat is built on this letter. Rest comes through the cutting away of labor and striving.` },
  { modern: 'ח', paleo: '𐤇', name: 'Chet',   sound: 'Ch (guttural)',  number: 8,   pictograph: 'Fence · Boundary · Wall',    meaning: 'Private · Sacred Space · Life',           essence: `The fence that defines what is set-apart. Chet is the boundary between common and holy. חַיִּים (chayyim) — life — begins with Chet. Life requires boundaries; without them there is only formless chaos.` },
  { modern: 'ט', paleo: '𐤈', name: 'Tet',    sound: 'T',              number: 9,   pictograph: 'Basket · Coiled Serpent',    meaning: 'Good Concealed · Surrounding',            essence: `Good that is wrapped within — like the basket that holds what is precious, or the womb concealing what will be revealed. טוֹב (tov) — "good" — begins with this letter of hidden blessing waiting to be born.` },
  { modern: 'י', paleo: '𐤉', name: 'Yod',    sound: 'Y',              number: 10,  pictograph: 'Arm · Hand · Work',          meaning: 'Hand of God · Deed · Creator',            essence: `The smallest letter — and the first letter of Yahuah's Name. Yahushua said not one Yod would pass from the Torah. יָד (yad) means "hand." Every act of creation is the hand of Yah at work. The smallest mark carries the greatest weight.` },
  { modern: 'כ', paleo: '𐤊', name: 'Kaf',    sound: 'K / Kh',         number: 20,  pictograph: 'Open Palm · Crown',          meaning: 'Cover · Allow · Receive',                 essence: `The open palm stretched in blessing or offering. כַּפָּרָה (kapparah) — atonement — comes from this root: to cover over. The hand that receives is the same hand that covers. What Kaf holds, it protects.` },
  { modern: 'ל', paleo: '𐤋', name: 'Lamed',  sound: 'L',              number: 30,  pictograph: 'Ox Goad · Staff · Tower',    meaning: 'Teach · Authority · Move Toward',         essence: `The tallest letter, the only one that rises above the writing line — reaching upward toward heaven. The ox goad moves life forward. לָמַד (lamad) — to teach. True authority does not push down; it drives toward purpose.` },
  { modern: 'מ', paleo: '𐤌', name: 'Mem',    sound: 'M',              number: 40,  pictograph: 'Water · Waves',              meaning: 'Mighty · Revealed · Hidden',              essence: `Water flows to the lowest place and nourishes everything. Open Mem (מ) = revealed knowledge. Closed Mem (ם) at a word's end = hidden wisdom. מַיִם (mayim) — water — is both physical life and concealed depths.` },
  { modern: 'נ', paleo: '𐤍', name: 'Nun',    sound: 'N',              number: 50,  pictograph: 'Fish · Heir · Sprout',       meaning: 'Life · Faithfulness · Continuing',        essence: `The fish lives in the water, always moving, always swimming in the deep. Nun is perpetual life, the heir who carries the name forward. נֶאֱמָן (ne'eman) — faithful — comes from this root. Faithfulness is never static.` },
  { modern: 'ס', paleo: '𐤎', name: 'Samech', sound: 'S',              number: 60,  pictograph: 'Prop · Thorn · Closed Circle', meaning: 'Support · Surround · Uphold',           essence: `The closed circle of protection — it surrounds, it holds up from beneath. סָמַךְ (samakh) means to lean upon, to lay hands in support. What holds you when you cannot stand? Samech is the answer: encircling strength.` },
  { modern: 'ע', paleo: '𐤏', name: 'Ayin',   sound: 'Silent / Gh',    number: 70,  pictograph: 'Eye · Spring of Water',      meaning: 'See · Experience · Understand',           essence: `Both the eye that sees and the spring that reveals what was underground. עוֹלָם (olam) — forever, the hidden world — begins with Ayin. To truly see is to perceive what is hidden beneath the surface of what appears.` },
  { modern: 'פ', paleo: '𐤐', name: 'Pe',     sound: 'P / F',          number: 80,  pictograph: 'Mouth · Opening',            meaning: 'Speech · Word · Declare',                 essence: `The mouth that speaks life or death. פֶּה (peh) means mouth. The universe was spoken into existence. Torah came through the mouth of Yahuah. Every word carries the creative weight of Pe — to open the mouth is a sacred act.` },
  { modern: 'צ', paleo: '𐤑', name: 'Tsade',  sound: 'Ts',             number: 90,  pictograph: 'Fishhook · Righteous Person', meaning: 'Righteous · Caught · Desire',            essence: `The fishhook that draws from the deep. צַדִּיק (tsaddik) is the righteous one — the one caught by Yah and pulled up from the murky waters. To be righteous is to be seized by something greater than yourself.` },
  { modern: 'ק', paleo: '𐤒', name: 'Qof',    sound: 'Q',              number: 100, pictograph: 'Back of Head · Horizon · Sunrise', meaning: 'Cycle · Beyond Sight · Holy',         essence: `The sun disappearing below the horizon — and rising again beyond what the eye can see. קָדוֹשׁ (kadosh) — set-apart, holy — begins with Qof. What is truly holy exists at the edge of the observable, beyond the ordinary horizon.` },
  { modern: 'ר', paleo: '𐤓', name: 'Resh',   sound: 'R',              number: 200, pictograph: 'Head of a Person',           meaning: 'Head · First · Master · Person',          essence: `The head that leads. רֵאשִׁית (reshit) — "beginning" — comes from this root. Everything begins from the head. Where the head goes, the body follows. Resh is the person in authority, the one whose direction determines all else.` },
  { modern: 'ש', paleo: '𐤔', name: 'Shin',   sound: 'Sh / S',         number: 300, pictograph: 'Teeth · Fire · Three Branches', meaning: 'Consume · Divine Fire · Almighty',     essence: `The three-branched letter of divine fire. Shin marks the mezuzah — it stands for שַׁדַּי (Shaddai), the Almighty. Torah was given in fire. The Ruach came as tongues of fire. שָׁלוֹם (shalom) — wholeness — begins with the letter of consuming fire.` },
  { modern: 'ת', paleo: '𐤕', name: 'Tav',    sound: 'T / Th',         number: 400, pictograph: 'Mark · Cross · Covenant Sign', meaning: 'Seal · Covenant · Complete',            essence: `In ancient script, Tav was written as an X — the mark of the covenant. The last letter carries the weight of completion. אֱמֶת (emet/truth) ends with Tav. תּוֹרָה (Torah) ends with Tav. What is true is sealed. What is finished bears the mark.` },
];

// Look up a letter by name (for Psalm 119 / Words pages)
export function getLetter(name: string): HebrewLetter | undefined {
  return letters.find(l => l.name.toLowerCase() === name.toLowerCase());
}

// ================================================================
//   WORD PICTURES — compound words broken down by letter
//   Add new entries over time. Each word carries modern + paleo
//   scripts and a letter-by-letter breakdown.
// ================================================================

export interface WordPicture {
  slug: string;
  modern: string;
  paleo: string;
  roman: string;
  gloss: string;      // e.g. "Father", "Truth"
  breakdown: string;  // HTML line showing each letter's image
  meaning: string;    // full paragraph (HTML allowed)
}

export const wordPictures: WordPicture[] = [
  {
    slug: 'yah',
    modern: 'יה',
    paleo: '𐤉𐤄',
    roman: 'Yah',
    gloss: 'The Short Name',
    breakdown: `<span class="ha-cl">י</span> Hand &nbsp;+&nbsp; <span class="ha-cl">ה</span> Behold`,
    meaning: `The short form of the Creator's Name. Two letters, one image: <strong>Behold the Hand</strong>. The hand that formed the cosmos, the hand that reaches toward man. Found in Halleluyah — "Praise Yah" — the universal cry that transcends language.`
  },
  {
    slug: 'yhwh',
    modern: 'יהוה',
    paleo: '𐤉𐤄𐤅𐤄',
    roman: 'YHWH — The Name',
    gloss: 'The Ineffable Name',
    breakdown: `<span class="ha-cl">י</span> Hand &nbsp;+&nbsp; <span class="ha-cl">ה</span> Behold &nbsp;+&nbsp; <span class="ha-cl">ו</span> Nail &nbsp;+&nbsp; <span class="ha-cl">ה</span> Behold`,
    meaning: `<strong>Behold the Hand — Behold the Nail.</strong> The four letters of the ineffable Name encode a single image: a hand and a nail. Ancient Hebrew readers saw this. Modern translations bury it. The Name of Yahuah, read through its own alphabet, tells a story that would not be completed for millennia.`
  },
  {
    slug: 'av',
    modern: 'אב',
    paleo: '𐤀𐤁',
    roman: 'Av',
    gloss: 'Father',
    breakdown: `<span class="ha-cl">א</span> Strength &nbsp;+&nbsp; <span class="ha-cl">ב</span> House`,
    meaning: `<strong>The Strength of the House.</strong> A father in Hebrew thought is not defined by biology — he is defined by what he provides and protects. The one whose strength holds the house together. Two letters; an entire theology of fatherhood.`
  },
  {
    slug: 'ben',
    modern: 'בן',
    paleo: '𐤁𐤍',
    roman: 'Ben',
    gloss: 'Son',
    breakdown: `<span class="ha-cl">ב</span> House &nbsp;+&nbsp; <span class="ha-cl">נ</span> Heir / Continuing`,
    meaning: `<strong>The Continuing of the House.</strong> A son is the one through whom the name, the inheritance, and the legacy carry forward. The heir who keeps the house from ending. Father and Son together: Strength of the House + The House that Continues.`
  },
  {
    slug: 'emet',
    modern: 'אמת',
    paleo: '𐤀𐤌𐤕',
    roman: 'Emet',
    gloss: 'Truth',
    breakdown: `<span class="ha-cl">א</span> First &nbsp;+&nbsp; <span class="ha-cl">מ</span> Middle &nbsp;+&nbsp; <span class="ha-cl">ת</span> Last`,
    meaning: `<strong>From the first letter to the last, with the middle letter between them.</strong> Truth spans everything — from beginning to end. The Rabbis noted that אמת uses the first, middle, and last letters of the alphabet. Truth is not a fragment; it is the whole. A lie (שֶׁקֶר) uses three consecutive letters clustered together — it is narrow, cramped, close to the end.`
  },
  {
    slug: 'shalom',
    modern: 'שלום',
    paleo: '𐤔𐤋𐤅𐤌',
    roman: 'Shalom',
    gloss: 'Peace / Wholeness',
    breakdown: `<span class="ha-cl">ש</span> Consume &nbsp;+&nbsp; <span class="ha-cl">ל</span> Authority &nbsp;+&nbsp; <span class="ha-cl">ו</span> Nail &nbsp;+&nbsp; <span class="ha-cl">מ</span> Water`,
    meaning: `Shalom is not the absence of conflict. It is the wholeness that remains when the consuming fire of authority has nailed down the chaotic waters. <strong>Shalom is the result — what is left when everything has been settled, secured, and made complete.</strong> Greeted with Shalom, the Hebrew speaker is offered not just peace, but the fullness of a restored world.`
  },
];
