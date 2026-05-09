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
  slug?: string;       // URL slug for the per-letter detail page (only when quickNote is set)
  quickNote?: string;  // Optional long-form teaching shown on /hebrew/alphabet/<slug> (HTML allowed)
}

export const letters: HebrewLetter[] = [
  { modern: 'א', paleo: '𐤀', name: 'Aleph', sound: 'Silent / breath', number: 1,   pictograph: 'Ox Head',                    meaning: 'Strength · Leader · First',               essence: `The silent ox — strength that speaks without speaking. The first letter carries the first breath, the force behind all things. Aleph is Yahuah before words began.`,
    slug: 'aleph',
    quickNote: `<p>The Hebrew letter Aleph (א) is the ox head. Its ancient pictograph is the strongest animal in the herd &mdash; the leader of the team, the one who pulls the plow, the one whose strength makes the work possible. The themes that ride with it are strength, leader, and first. The Aleph is the one who goes first. The Aleph is the one who speaks first. The Aleph is the voice that begins everything.</p>
<p>That same character shows up in the work the Aleph does inside the language. When the Aleph stands at the front of a verb, it makes the verb first person &mdash; &ldquo;I will&hellip;&rdquo; The action belongs to the speaker. The voice of the one leading the sentence claims the deed and says: I am the one doing this.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Eheyeh</em></strong> &mdash; &ldquo;I will be.&rdquo; The most famous Aleph-verb in Scripture: <em>Eheyeh asher Eheyeh</em>, &ldquo;I AM THAT I AM&rdquo; (Exodus 3:14). Yahuah speaking His own name to Moses.</li>
  <li><strong><em>Ezkor</em></strong> &mdash; &ldquo;I will remember.&rdquo; Yahuah&rsquo;s pledge after the flood: <em>ezkor et briti</em>, &ldquo;I will remember my covenant&rdquo; (Genesis 9:15).</li>
  <li><strong><em>Eshmor</em></strong> &mdash; &ldquo;I will keep, I will guard.&rdquo; The covenant-keeper&rsquo;s pledge.</li>
  <li><strong><em>Ohav</em></strong> &mdash; &ldquo;I will love.&rdquo; The heart&rsquo;s response to the One who spoke first.</li>
  <li><strong><em>Edaber</em></strong> &mdash; &ldquo;I will speak.&rdquo; The prophet&rsquo;s commission, claimed in the first person.</li>
</ul>
<p>Notice the consistent shape. The Aleph does not change the verb that follows it. It claims the verb. Whatever follows the Aleph is the deed of the speaker &mdash; what I will do, what I will say, what I will keep.</p>
<p>So as you read the Hebrew Scriptures, when you find a verb with an Aleph at its front, ask the simple question: <em>Whose voice is speaking here?</em> Most of the time, the Aleph is doing what the letter has always done &mdash; putting the strongest &ldquo;I&rdquo; at the front of the action.</p>` },
  { modern: 'ב', paleo: '𐤁', name: 'Bet',    sound: 'B / V',          number: 2,   pictograph: 'Tent · House',               meaning: 'Inside · Family · Dwelling',              essence: `The tent where life happens. בְּרֵאשִׁית (Bereshit) — "In the beginning" — opens with Bet. Creation itself is a dwelling place, a house Yahuah made for His family to inhabit.`,
    slug: 'bet',
    quickNote: `<p>The Hebrew letter Bet (ב) is the house. Its ancient pictograph is the tent &mdash; the simple dwelling that holds a family inside its walls. The themes that ride with it are inside, family, and dwelling. The Bet is a shelter. It is the place where what matters is kept. It is the structure that keeps the inside in and the outside out.</p>
<p>That same character shows up in the work the Bet does inside the language. When the Bet stands at the front of a word, it houses what follows inside itself. The word it attaches to is the dweller. The Bet is the dwelling. Whatever sits to the right of the Bet is now living in the house the Bet has built.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>B&rsquo;reshit</em></strong> &mdash; &ldquo;in the beginning.&rdquo; The very first word of your Bible. The beginning is housed in the Bet.</li>
  <li><strong><em>B&rsquo;shem Yahuah</em></strong> &mdash; &ldquo;in the name of Yahuah.&rdquo; The name is housed in the Bet.</li>
  <li><strong><em>B&rsquo;tzelem Elohim</em></strong> &mdash; &ldquo;in the image of Elohim&rdquo; (Genesis 1:27). The image is housed in the Bet.</li>
  <li><strong><em>B&rsquo;yad</em></strong> &mdash; &ldquo;in the hand of,&rdquo; &ldquo;by the hand of.&rdquo; The hand is housed in the Bet.</li>
  <li><strong><em>B&rsquo;derek</em></strong> &mdash; &ldquo;in the way.&rdquo; The way is housed in the Bet.</li>
</ul>
<p>Notice the consistent shape. The Bet does not change the word it attaches to. It shelters it. Whatever follows the Bet is dwelling inside the Bet&rsquo;s tent.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Bet at its front, ask the simple question: <em>What is being housed here?</em> Most of the time, the Bet is doing what the letter has always done &mdash; opening its tent and keeping a noun safely inside.</p>` },
  { modern: 'ג', paleo: '𐤂', name: 'Gimel',  sound: 'G',              number: 3,   pictograph: 'Camel',                      meaning: 'Movement · Lifting Up · Blessing',        essence: `The camel carries the precious across the desert without expectation. In mystical tradition, Gimel always runs after Dalet — the wealthy one running to lift the poor.`,
    slug: 'gimel',
    quickNote: `<p>The Hebrew letter Gimel (ג) is the camel. Its ancient pictograph is the desert beast that bears burdens across long distances &mdash; the lifter, the carrier, the one whose work is to move great weight from one place to another. The themes that ride with it are movement, lifting up, and blessing. The Gimel is the act of going forth. The Gimel is the strength that raises what was low. The Gimel is the journey that ends in arrival, the load delivered, the gift carried to its destination.</p>
<p>That same character shows up in the words the Gimel lives inside. Many Hebrew words that begin with Gimel carry the sense of something rising, moving, being lifted up &mdash; in size, in status, in strength, in journey. When you find a Gimel at the front of a word, look for the lift.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Gadol</em></strong> &mdash; &ldquo;great, large.&rdquo; The thing lifted up to a higher size or stature. <em>Gadol Yahuah u&rsquo;mehullal m&rsquo;od</em>, &ldquo;Great is Yahuah, and greatly to be praised&rdquo; (Psalm 145:3).</li>
  <li><strong><em>Ga&rsquo;al</em></strong> &mdash; &ldquo;to redeem, to act as kinsman-redeemer.&rdquo; The lifting of one out of bondage by another whose strength can carry the load. Boaz redeems Ruth. Yahuah is our <em>Go&rsquo;el</em> &mdash; the One who lifts His people out.</li>
  <li><strong><em>Gibor</em></strong> &mdash; &ldquo;mighty man, hero.&rdquo; The one whose strength can lift what others cannot. The Messiah is called <em>El Gibor</em>, &ldquo;Mighty El&rdquo; (Isaiah 9:6).</li>
  <li><strong><em>Gilah</em></strong> &mdash; &ldquo;joy, rejoicing.&rdquo; The heart lifted up in delight. <em>Gilu</em>, &ldquo;rejoice ye&rdquo; (Psalm 32:11).</li>
  <li><strong><em>Gog</em></strong> &mdash; the warlord, the one who stirs himself up. Even in the name of an enemy, the Gimel does its work. Something is rising against Yahuah&rsquo;s people; something is lifting itself up to make war. The lift in the letter is in the very name.</li>
</ul>
<p>Notice the consistent shape. Where the Gimel appears at the front of a word, something is moving. Something is being raised. Something is being carried from a lower place to a higher one &mdash; a heart from sorrow to joy, a man from bondage to freedom, a nation from quiet to war. The Gimel is the verb of motion built right into the letter.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Gimel at its front, ask the simple question: <em>What is being lifted up here?</em> Most of the time, the Gimel is doing what the letter has always done &mdash; bearing a load, carrying a thing, moving the small toward the great.</p>` },
  { modern: 'ד', paleo: '𐤃', name: 'Dalet',  sound: 'D',              number: 4,   pictograph: 'Door · Pathway',             meaning: 'Threshold · Humility · Entry',            essence: `You must stoop to pass through a tent door. Dalet is the threshold between worlds — the humble entry, the path from the ordinary into the sacred. A door does nothing on its own; it only matters where it leads.`,
    slug: 'dalet',
    quickNote: `<p>The Hebrew letter Dalet (ד) is the door. Its ancient pictograph is the simple flap of the tent &mdash; the threshold that separates inside from outside, the place where one must lower the head to pass through. The themes that ride with it are door, pathway, threshold, humility, and entry. The Dalet is the way in. The Dalet is the bowing down required to come through. The Dalet is the seam between two places, the moment between approaching and arriving.</p>
<p>That same character shows up in the words the Dalet lives inside. Many Hebrew words that begin with Dalet carry the sense of passage, threshold, the act of moving from one state to another, or the humility that allows entry.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Derech</em></strong> &mdash; &ldquo;way, road, pathway.&rdquo; The line traced from one place to another. <em>Derech Yahuah</em>, &ldquo;the way of Yahuah&rdquo; &mdash; the road His people walk.</li>
  <li><strong><em>Davar</em></strong> &mdash; &ldquo;word, thing, matter.&rdquo; The word is the doorway between minds, the way truth passes from one heart to another. <em>Davar Yahuah</em>, &ldquo;the word of Yahuah&rdquo; &mdash; the entry the Creator opens into the soul.</li>
  <li><strong><em>Da&rsquo;at</em></strong> &mdash; &ldquo;knowledge, understanding.&rdquo; The threshold the mind crosses when something is known. To know is to enter.</li>
  <li><strong><em>Dor</em></strong> &mdash; &ldquo;generation.&rdquo; The threshold one age crosses into the next. Each generation is a doorway through which the covenant passes.</li>
  <li><strong><em>Dal</em></strong> &mdash; &ldquo;poor, low, weak.&rdquo; The one bowed down, made small, who must humble himself to come through the door. Yahuah lifts the <em>dal</em> from the dust (Psalm 113:7).</li>
</ul>
<p>Notice the consistent shape. Where the Dalet appears at the front of a word, something is passing through &mdash; a way is being traveled, a word is being delivered, a generation is crossing into the next age, a low one is being lifted up. The Dalet is the threshold built right into the letter.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Dalet at its front, ask the simple question: <em>What threshold is being crossed here?</em> Most of the time, the Dalet is doing what the letter has always done &mdash; opening the way, marking the seam between one place and the next.</p>` },
  { modern: 'ה', paleo: '𐤄', name: 'He',     sound: 'H / breath',     number: 5,   pictograph: 'Window · Man with raised arms', meaning: 'Behold · Revelation · Breath',         essence: `He is the exhale — the breath of revelation. When Yahuah renamed Abram, He inserted this letter twice: Av-ra<strong>H</strong>a<strong>H</strong>m. He breathed Himself into the man. This letter appears twice in יהוה — the Name is two exhales.`,
    slug: 'he',
    quickNote: `<p>The Hebrew letter He (ה) is the window and the man with raised arms. Its ancient pictograph is the open frame through which a thing is seen and the figure standing with arms lifted high &mdash; calling, pointing, drawing the eye. The themes that ride with it are behold, revelation, and breath. The He is the breath that says &ldquo;look here.&rdquo; The He is the window that frames what is being shown. The He sets one thing apart from the crowd and lifts it up to be seen.</p>
<p>That same character shows up in the work the He does inside the language. When the He stands at the front of a noun, it transforms a vague &ldquo;a thing&rdquo; into a specific &ldquo;THE thing&rdquo; &mdash; the one being pointed to, the one being revealed. The He is the definite article, the breath that says: behold THIS one.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Ha-aretz</em></strong> &mdash; &ldquo;the earth&rdquo; (Genesis 1:1). Not just any land. THIS earth, the one being created.</li>
  <li><strong><em>Ha-or</em></strong> &mdash; &ldquo;the light&rdquo; (Genesis 1:4). Yahuah saw THE LIGHT &mdash; the specific light He had brought forth, beheld, and called good.</li>
  <li><strong><em>Ha-adam</em></strong> &mdash; &ldquo;the man&rdquo; (Genesis 2:7). Not just any man. THIS man, formed from the dust.</li>
  <li><strong><em>Ha-shabbat</em></strong> &mdash; &ldquo;the Sabbath.&rdquo; Not just any rest. THE rest, the seventh day Yahuah set apart.</li>
  <li><strong><em>Ha-melech</em></strong> &mdash; &ldquo;the king.&rdquo; Not just any ruler. THIS king, the one being lifted up to be seen.</li>
</ul>
<p>Notice the consistent shape. The He does not change the noun it attaches to. It points to it. Whatever follows the He is no longer one of many &mdash; it is THE one, lifted up where the eye can find it.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a He at its front, ask the simple question: <em>Which one is being shown here?</em> Most of the time, the He is doing what the letter has always done &mdash; opening the window and lifting the arms to say: behold THIS one.</p>` },
  { modern: 'ו', paleo: '𐤅', name: 'Vav',    sound: 'W / Ū',          number: 6,   pictograph: 'Nail · Tent Peg · Hook',     meaning: 'Connect · Join · Secure',                 essence: `The nail that holds things together. Vav is the connector — in Hebrew grammar it joins words. As a nail it secures what was separate into one. Its number, 6, is the number of man. The connection between heaven and earth.`,
    slug: 'vav',
    quickNote: `<p>The Hebrew letter Vav (ו) is the nail. Its ancient pictograph is the tent peg, the iron fastener, the hook that holds two pieces together so they cannot drift apart. The themes that ride with it are connect, join, and secure. The Vav is the small thing that does the holding. The Vav is what keeps the tent from collapsing in the wind. The Vav is the iron that joins one thing to another and makes them one.</p>
<p>That same character shows up in the work the Vav does inside the language. When the Vav stands at the front of a word, it joins that word to what came before. The Vav is the conjunction &ldquo;and.&rdquo; It is the nail driven between two clauses, the hook that links the second thought to the first so the sentence holds together. The whole rhythm of biblical narrative &mdash; and he said, and it was, and he saw &mdash; is the rhythm of one Vav after another, the writer driving in nails that hold the story in place.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Va-yomer Elohim</em></strong> &mdash; &ldquo;and Elohim said&rdquo; (Genesis 1:3 onward). The first Vav of creation. Each word of creation is nailed to the next: and he said, and it was, and he saw.</li>
  <li><strong><em>Va-yehi or</em></strong> &mdash; &ldquo;and there was light&rdquo; (Genesis 1:3). The Vav joins the speaking to the result. Word and event held together.</li>
  <li><strong><em>V&rsquo;ahavta</em></strong> &mdash; &ldquo;and you shall love&rdquo; (Deuteronomy 6:5). The Shema continues with a Vav, joining the command to all that came before.</li>
  <li><strong><em>V&rsquo;shamarta</em></strong> &mdash; &ldquo;and you shall keep.&rdquo; The covenant command nailed to the moment that called it forth.</li>
  <li><strong><em>V&rsquo;haya</em></strong> &mdash; &ldquo;and it shall come to pass.&rdquo; The prophet&rsquo;s Vav, nailing the future to the now.</li>
</ul>
<p>Notice the consistent shape. The Vav does not change the word it attaches to. It connects it. Whatever follows the Vav is being nailed to what came before &mdash; joined, secured, held together so the meaning does not drift.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Vav at its front, ask the simple question: <em>What is being joined to what?</em> Most of the time, the Vav is doing what the letter has always done &mdash; driving the small iron nail between two pieces and making them one.</p>` },
  { modern: 'ז', paleo: '𐤆', name: 'Zayin',  sound: 'Z',              number: 7,   pictograph: 'Sword · Weapon',             meaning: 'Cut · Sustain · Nourish',                 essence: `The sword that cuts also sustains — the same blade that divides grain feeds the family. Seven is Zayin's number; Shabbat is built on this letter. Rest comes through the cutting away of labor and striving.`,
    slug: 'zayin',
    quickNote: `<p>The Hebrew letter Zayin (ז) is the sword. Its ancient pictograph is the blade &mdash; the thing that cuts. But the cutting is not only the cutting of war. It is also the sickle that brings in the harvest, the knife that prepares the meal, the offering cut at the altar. The themes that ride with it are cut, sustain, and nourish. The Zayin is the edge that divides &mdash; and what it divides, often, is bread from chaff, life from waste, the holy from the common.</p>
<p>That same character shows up in the words the Zayin lives inside. Many Hebrew words that begin with Zayin carry the sense of cutting, separating, marking &mdash; and through that cutting, sustaining and nourishing what was set apart.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Zera</em></strong> &mdash; &ldquo;seed.&rdquo; The grain cut from the harvest, kept back to be sown again. The seed is what the sword of the sickle preserves for tomorrow&rsquo;s bread.</li>
  <li><strong><em>Zakhar</em></strong> &mdash; &ldquo;to remember.&rdquo; Memory is a thing cut into the mind, set apart from the flow of forgetting. <em>Zakhor et yom ha-shabbat</em>, &ldquo;Remember the Sabbath day&rdquo; (Exodus 20:8) &mdash; cut this day out of the others, and keep it.</li>
  <li><strong><em>Zevach</em></strong> &mdash; &ldquo;sacrifice, offering.&rdquo; The animal cut at the altar, separated from the herd and given to Yahuah. The cutting is what makes the offering an offering.</li>
  <li><strong><em>Zayit</em></strong> &mdash; &ldquo;olive.&rdquo; The fruit pressed and cut for oil &mdash; the oil that anoints kings, lights lamps, and sustains the body.</li>
  <li><strong><em>Zarach</em></strong> &mdash; &ldquo;to shine, to rise.&rdquo; The morning light cuts through the darkness. The dawn is itself a kind of cut &mdash; the edge between night and day.</li>
</ul>
<p>Notice the consistent shape. Where the Zayin appears at the front of a word, an edge is being drawn. Something is being separated. And the separating is not destruction &mdash; it is preservation. The seed is kept by being cut. The Sabbath is kept by being cut. The offering is given by being cut. The Zayin is the blade built right into the letter, and the blade serves life.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Zayin at its front, ask the simple question: <em>What is being cut here, and what is the cutting preserving?</em> Most of the time, the Zayin is doing what the letter has always done &mdash; drawing the edge that keeps what matters safe from what does not.</p>` },
  { modern: 'ח', paleo: '𐤇', name: 'Chet',   sound: 'Ch (guttural)',  number: 8,   pictograph: 'Fence · Boundary · Wall',    meaning: 'Private · Sacred Space · Life',           essence: `The fence that defines what is set-apart. Chet is the boundary between common and holy. חַיִּים (chayyim) — life — begins with Chet. Life requires boundaries; without them there is only formless chaos.`,
    slug: 'chet',
    quickNote: `<p>The Hebrew letter Chet (ח) is the fence. Its ancient pictograph is the wall, the boundary, the enclosure that creates sacred space. The themes that ride with it are private, sacred space, and life. Inside the Chet is what is holy &mdash; set apart, protected, alive. Outside the Chet is the common world. The Chet is the line drawn around what must not be lost.</p>
<p>That same character shows up in the words the Chet lives inside. Many Hebrew words that begin with Chet carry the sense of enclosure, set-apartness, and life kept inside a sacred boundary.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Chai</em></strong> / <strong><em>Chayim</em></strong> &mdash; &ldquo;life, living.&rdquo; Life is what flourishes inside the sacred fence. <em>Etz ha-chayim</em>, &ldquo;the tree of life&rdquo; &mdash; the life Yahuah keeps inside His garden.</li>
  <li><strong><em>Chesed</em></strong> &mdash; &ldquo;lovingkindness, covenant loyalty.&rdquo; The faithful love kept inside the covenant boundary &mdash; the love that does not leak out across the fence.</li>
  <li><strong><em>Chodesh</em></strong> &mdash; &ldquo;new moon, month.&rdquo; The renewed time set apart by Yahuah at each lunar return. Each <em>chodesh</em> is a fence drawn around a new cycle of days.</li>
  <li><strong><em>Chag</em></strong> &mdash; &ldquo;feast, festival.&rdquo; The set-apart time when Yahuah&rsquo;s people gather inside the sacred fence of His appointed days. Pesach, Shavuot, Sukkot &mdash; each <em>chag</em> is its own enclosure of holy time.</li>
  <li><strong><em>Chuq</em></strong> &mdash; &ldquo;statute, ordinance.&rdquo; The boundary-law itself. A <em>chuq</em> is a fence in the form of a command &mdash; Yahuah saying: this is the line. Stay inside it.</li>
</ul>
<p>Notice the consistent shape. Where the Chet appears at the front of a word, a fence is being drawn. Life is being kept. A boundary is being honored. Something holy is being walled off from the common world so that it does not lose what makes it holy.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Chet at its front, ask the simple question: <em>What sacred boundary is being kept here?</em> Most of the time, the Chet is doing what the letter has always done &mdash; drawing the wall that protects life and keeps the holy inside it.</p>` },
  { modern: 'ט', paleo: '𐤈', name: 'Tet',    sound: 'T',              number: 9,   pictograph: 'Basket · Coiled Serpent',    meaning: 'Good Concealed · Surrounding',            essence: `Good that is wrapped within — like the basket that holds what is precious, or the womb concealing what will be revealed. טוֹב (tov) — "good" — begins with this letter of hidden blessing waiting to be born.`,
    slug: 'tet',
    quickNote: `<p>The Hebrew letter Tet (ט) is the basket. Its ancient pictograph is a curled, surrounding form &mdash; the woven container that holds what is precious inside, the coil that wraps around its center. The themes that ride with it are good concealed and surrounding. The Tet is the protective circle. The Tet is the goodness folded inside a container that keeps it safe. The Tet is the truth hidden in a story that does not give itself away on the first reading.</p>
<p>That same character shows up in the words the Tet lives inside. Many Hebrew words that begin with Tet carry the sense of something good wrapped inside something else &mdash; protected, contained, concealed until the right moment to come out.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Tov</em></strong> &mdash; &ldquo;good.&rdquo; The foundational word of Genesis 1: <em>vayyar Elohim ki tov</em>, &ldquo;and Elohim saw that it was good.&rdquo; The goodness Yahuah folded into His creation from the start.</li>
  <li><strong><em>Tahor</em></strong> &mdash; &ldquo;clean, pure.&rdquo; The state of purity surrounded by the boundary that keeps it from defilement. <em>Lev tahor</em>, &ldquo;a clean heart&rdquo; (Psalm 51:10) &mdash; the purity contained inside the fence of repentance.</li>
  <li><strong><em>Taf</em></strong> &mdash; &ldquo;little ones, children.&rdquo; The small ones surrounded by the family&rsquo;s protection &mdash; the goodness of the next generation hidden inside the present.</li>
  <li><strong><em>Tabba&rsquo;at</em></strong> &mdash; &ldquo;ring, signet.&rdquo; The circle that surrounds, the seal that wraps a name around a promise. Pharaoh gave his <em>tabba&rsquo;at</em> to Joseph (Genesis 41:42) &mdash; authority pressed into a circular form.</li>
  <li><strong><em>Talleh</em></strong> &mdash; &ldquo;lamb.&rdquo; The small one held inside the flock, the innocent one surrounded by the shepherd&rsquo;s care. The Lamb image runs deep in Scripture, and the Tet is at its front.</li>
</ul>
<p>Notice the consistent shape. Where the Tet appears at the front of a word, something is being wrapped, contained, kept. Goodness is being held inside a vessel. A small thing is being surrounded by a larger thing that protects it. The Tet is the curl of the basket, the round form that says: there is something good inside this.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Tet at its front, ask the simple question: <em>What good is being held inside here?</em> Most of the time, the Tet is doing what the letter has always done &mdash; wrapping its arms around something worth protecting and keeping it safe inside.</p>` },
  { modern: 'י', paleo: '𐤉', name: 'Yod',    sound: 'Y',              number: 10,  pictograph: 'Arm · Hand · Work',          meaning: 'Hand of God · Deed · Creator',            essence: `The smallest letter — and the first letter of Yahuah's Name. Yahushua said not one Yod would pass from the Torah. יָד (yad) means "hand." Every act of creation is the hand of Yah at work. The smallest mark carries the greatest weight.`,
    slug: 'yod',
    quickNote: `<p>The Hebrew letter Yod (י) is the hand. Its ancient pictograph is the arm and closed fist &mdash; the working hand, the hand that makes things, the hand of the Creator at labor. The themes that ride with it are hand of God, deed, and Creator. The Yod is the smallest letter in the Hebrew alphabet, but it is also the busiest. It is the hand at work behind the scenes &mdash; small, but performing the deed.</p>
<p>That same character shows up in the work the Yod does inside the language. When the Yod stands at the front of a verb, the action belongs to &ldquo;him&rdquo; &mdash; third person, the unseen one performing the deed. The Yod is the hand of the actor reaching into the verb. Whose hand? Often Yahuah&rsquo;s &mdash; the Creator&rsquo;s hand at work in the world the verb describes.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Yehi</em></strong> &mdash; &ldquo;let it be,&rdquo; &ldquo;may he be.&rdquo; The most famous Yod-verb in Scripture: <em>Yehi or</em>, &ldquo;let there be light&rdquo; (Genesis 1:3). The Creator&rsquo;s hand opens the work of the world.</li>
  <li><strong><em>Y&rsquo;varekh</em></strong> &mdash; &ldquo;he will bless.&rdquo; From the priestly blessing (Numbers 6:24): <em>Y&rsquo;varekhkha Yahuah v&rsquo;yishmerekha</em>, &ldquo;Yahuah shall bless thee and keep thee.&rdquo;</li>
  <li><strong><em>Yishmor</em></strong> &mdash; &ldquo;he will keep, he will guard.&rdquo; The keeper&rsquo;s hand on the kept.</li>
  <li><strong><em>Y&rsquo;daber</em></strong> &mdash; &ldquo;he will speak.&rdquo; The Yod marks the voice of the one whose hand also creates.</li>
  <li><strong><em>Ya&rsquo;aseh</em></strong> &mdash; &ldquo;he will do, he will make.&rdquo; The deed performed by the hand the verb belongs to.</li>
</ul>
<p>Notice the consistent shape. The Yod does not change the verb that follows it. It identifies whose hand is doing the work. Whatever follows the Yod is the deed of &ldquo;him&rdquo; &mdash; the one performing the action, often the Creator Himself.</p>
<p>So as you read the Hebrew Scriptures, when you find a verb with a Yod at its front, ask the simple question: <em>Whose hand is at work here?</em> Most of the time, the Yod is doing what the letter has always done &mdash; pointing to the unseen hand performing the deed.</p>` },
  { modern: 'כ', paleo: '𐤊', name: 'Kaf',    sound: 'K / Kh',         number: 20,  pictograph: 'Open Palm · Crown',          meaning: 'Cover · Allow · Receive',                 essence: `The open palm stretched in blessing or offering. כַּפָּרָה (kapparah) — atonement — comes from this root: to cover over. The hand that receives is the same hand that covers. What Kaf holds, it protects.`,
    slug: 'kaf',
    quickNote: `<p>The Hebrew letter Kaf (כ) is the open palm. Its ancient pictograph is the cupped hand and the crown set above the head. The themes that ride with it are cycle, beyond sight, and holy. The Kaf is the curve that comes around &mdash; the palm that opens to receive, the cycle that returns, the crown that lifts what is set apart higher than the common. The Kaf reaches for what is not in front of you and draws it into view by likeness.</p>
<p>That same character shows up in the work the Kaf does inside the language. When the Kaf stands at the front of a word, it creates a likeness. The Kaf means like, as, according to. Whatever follows the Kaf is the pattern, the model, the standard the rest of the sentence is being measured against. The Kaf brings the unseen, the older, or the holy into the picture by drawing a comparison to it.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>K&rsquo;or</em></strong> &mdash; &ldquo;like light.&rdquo; A comparison drawn to something radiant.</li>
  <li><strong><em>K&rsquo;etz shatul</em></strong> &mdash; &ldquo;like a tree planted [by the rivers of water]&rdquo; (Psalm 1:3). The man is here; the tree is the pattern he is being measured against.</li>
  <li><strong><em>K&rsquo;asher tziuah Yahuah</em></strong> &mdash; &ldquo;as Yahuah commanded.&rdquo; The earthly act measured against the holy pattern.</li>
  <li><strong><em>Kimei olam</em></strong> &mdash; &ldquo;as the days of old&rdquo; (Malachi 3:4). An older cycle brought into the present.</li>
  <li><strong><em>K&rsquo;sheleg</em></strong> &mdash; &ldquo;like snow&rdquo; (Isaiah 1:18). A whiteness pulled into the picture by comparison.</li>
</ul>
<p>Notice the consistent shape. The Kaf does not change the word it attaches to. It lifts that word up as the pattern. Whatever follows the Kaf becomes the holy template, the older cycle, or the unseen standard the rest of the sentence is being measured against.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Kaf at its front, ask the simple question: <em>What pattern is being lifted up here?</em> Most of the time, the Kaf is doing what the letter has always done &mdash; reaching beyond sight to draw a likeness, measuring this moment against something higher.</p>` },
  { modern: 'ל', paleo: '𐤋', name: 'Lamed',  sound: 'L',              number: 30,  pictograph: 'Ox Goad · Staff · Tower',    meaning: 'Teach · Authority · Move Toward',         essence: `The tallest letter, the only one that rises above the writing line — reaching upward toward heaven. The ox goad moves life forward. לָמַד (lamad) — to teach. True authority does not push down; it drives toward purpose.`,
    slug: 'lamed',
    quickNote: `<p>The Hebrew letter Lamed (ל) is the staff. Its ancient pictograph is the ox-goad and the shepherd&rsquo;s tower &mdash; the rod that points the way and the high place that draws the eye. The themes that ride with it are teach, authority, and move toward. The Lamed gives direction. It points. It calls. It says: this is where you are going.</p>
<p>That same character shows up in the work the Lamed does inside the language. When the Lamed stands at the front of a word, it points the rest of the sentence toward that word. The Lamed creates direction. The word that follows is the goal &mdash; the destination, the recipient, the thing being moved toward.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>L&rsquo;Yahuah</em></strong> &mdash; &ldquo;to Yahuah,&rdquo; &ldquo;for Yahuah.&rdquo; The heart is being pointed toward Yahuah.</li>
  <li><strong><em>L&rsquo;olam</em></strong> &mdash; &ldquo;to the age,&rdquo; &ldquo;forever.&rdquo; Time itself is being pointed forward.</li>
  <li><strong><em>L&rsquo;David</em></strong> &mdash; &ldquo;to David,&rdquo; &ldquo;of David.&rdquo; The Psalm heading; the song is dedicated, pointed toward David.</li>
  <li><strong><em>L&rsquo;beit Yahuah</em></strong> &mdash; &ldquo;to the house of Yahuah.&rdquo; The pilgrim&rsquo;s feet are pointed homeward.</li>
  <li><strong><em>L&rsquo;shalom</em></strong> &mdash; &ldquo;to peace,&rdquo; &ldquo;for peace.&rdquo; The desire is pointed toward peace.</li>
</ul>
<p>Notice the consistent shape. The Lamed does not change the word it attaches to. It points to it. Whatever follows the Lamed is the goal the staff is aimed at.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Lamed at its front, ask the simple question: <em>Where is this pointing?</em> Most of the time, the Lamed is doing what the letter has always done &mdash; lifting the staff and aiming you toward the destination.</p>` },
  { modern: 'מ', paleo: '𐤌', name: 'Mem',    sound: 'M',              number: 40,  pictograph: 'Water · Waves',              meaning: 'Mighty · Revealed · Hidden',              essence: `Water flows to the lowest place and nourishes everything. Open Mem (מ) = revealed knowledge. Closed Mem (ם) at a word's end = hidden wisdom. מַיִם (mayim) — water — is both physical life and concealed depths.`,
    slug: 'mem',
    quickNote: `<p>The Hebrew letter Mem (מ) is water. Its ancient pictograph is the wave, and the themes that ride with it are mighty, revealed, and hidden &mdash; the three faces of moving water. The surface is what you see. The depth is what you do not. The strength is what carries everything.</p>
<p>That same character shows up in the work the Mem does inside the language. When the Mem stands at the front of a word, it takes a verb &mdash; an action that has been moving, often unseen &mdash; and reveals it in the form of a thing you can touch. The verb is the hidden current. The Mem-word is the surface where the current breaks into view.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Tsavah</em></strong> &mdash; to command &rarr; <strong><em>Mitzvah</em></strong> &mdash; the command revealed as a word you can keep.</li>
  <li><strong><em>Shakan</em></strong> &mdash; to dwell &rarr; <strong><em>Mishkan</em></strong> &mdash; the dwelling revealed in beaten gold and woven cloth.</li>
  <li><strong><em>Ya&rsquo;ad</em></strong> &mdash; to appoint &rarr; <strong><em>Mo&rsquo;ed</em></strong> &mdash; the appointing revealed as a day on the calendar.</li>
  <li><strong><em>Shaphat</em></strong> &mdash; to judge &rarr; <strong><em>Mishpat</em></strong> &mdash; the judging revealed as a verdict.</li>
  <li><strong><em>Galal</em></strong> &mdash; to roll &rarr; <strong><em>Megillah</em></strong> &mdash; the rolling revealed as a scroll you can hold.</li>
</ul>
<p>Notice the consistent shape. The verb is the deep &mdash; moving, mighty, often hidden. The Mem-word is the surface where that deep breaks into view. What was action becomes vessel. What was hidden becomes revealed.</p>
<p>So as you read the Hebrew Scriptures, when you find a word that begins with M sitting near a verb that does not, ask the simple question: <em>What is this revealing?</em> Most of the time, the Mem at the front is doing what the letter has always done &mdash; bringing what was hidden to the surface where you can see it.</p>` },
  { modern: 'נ', paleo: '𐤍', name: 'Nun',    sound: 'N',              number: 50,  pictograph: 'Fish · Heir · Seed',         meaning: 'Life · Faithfulness · Continuing',        essence: `The fish lives in the water, always moving, always swimming in the deep. Nun is perpetual life, the heir who carries the name forward. נֶאֱמָן (ne'eman) — faithful — comes from this root. Faithfulness is never static.`,
    slug: 'nun',
    quickNote: `<p>The Hebrew letter Nun (נ) is the seed. Its ancient pictograph is the small living thing buried in the soil and the new shoot that breaks the ground when the seed has done its work. The themes that ride with it are life, faithfulness, and continuing. The Nun is what does not stop. It is the seed that falls into the earth and rises again. It is the next generation already hidden inside the present one &mdash; the promise that what was begun will not end here.</p>
<p>That same character shows up in the work the Nun does inside the language. When the Nun stands at the front of a verb, the action belongs to &ldquo;we&rdquo; &mdash; first person plural, the community continuing the deed together. The Nun is the voice of the people pledging to keep going. Whatever follows the Nun is what we will do, what we will hear, what we will continue &mdash; the seed planted in this generation, growing forward into the next.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Na&rsquo;aseh v&rsquo;nishma</em></strong> &mdash; &ldquo;we will do, and we will hear&rdquo; (Exodus 24:7). Israel&rsquo;s response when the covenant was given. Two Nun-verbs in a row: the people pledging to plant the seed of Torah and let it grow forward through them.</li>
  <li><strong><em>Nelekh</em></strong> &mdash; &ldquo;let us go,&rdquo; &ldquo;we will go.&rdquo; From the pilgrim psalm (Psalm 122:1): <em>beit Yahuah nelekh</em>, &ldquo;let us go to the house of Yahuah.&rdquo; The people moving together toward the place where the seed of worship is gathered.</li>
  <li><strong><em>Nazkir</em></strong> &mdash; &ldquo;we will remember.&rdquo; From Psalm 20:7: <em>anakhnu b&rsquo;shem Yahuah Eloheinu nazkir</em>, &ldquo;we will remember the name of Yahuah our Elohim.&rdquo; Memory itself as a seed &mdash; kept alive by being passed forward.</li>
  <li><strong><em>N&rsquo;ranena</em></strong> &mdash; &ldquo;let us sing for joy.&rdquo; From Psalm 95:1: <em>l&rsquo;khu n&rsquo;ranena la-Yahuah</em>, &ldquo;come, let us sing to Yahuah.&rdquo; The song planted in one generation rising again in the next.</li>
  <li><strong><em>Nishmor</em></strong> &mdash; &ldquo;we will keep.&rdquo; The community&rsquo;s pledge of faithfulness &mdash; the covenant seed carried forward by hands that have not let it drop.</li>
</ul>
<p>Notice the consistent shape. The Nun does not change the verb that follows it. It widens the verb. Whatever follows the Nun is no longer one person&rsquo;s act &mdash; it is our act, the seed of obedience passing from one set of hands to the next.</p>
<p>So as you read the Hebrew Scriptures, when you find a verb with a Nun at its front, ask the simple question: <em>What seed is being carried forward here?</em> Most of the time, the Nun is doing what the letter has always done &mdash; keeping the line of life going, falling into the soil of the next generation so the harvest does not end.</p>` },
  { modern: 'ס', paleo: '𐤎', name: 'Samech', sound: 'S',              number: 60,  pictograph: 'Prop · Thorn · Closed Circle', meaning: 'Support · Surround · Uphold',           essence: `The closed circle of protection — it surrounds, it holds up from beneath. סָמַךְ (samakh) means to lean upon, to lay hands in support. What holds you when you cannot stand? Samech is the answer: encircling strength.`,
    slug: 'samech',
    quickNote: `<p>The Hebrew letter Samech (ס) is the prop, the support, the closed circle. Its ancient pictograph is the thorn-fence that surrounds the camp at night and the wooden post that holds up the tent. The themes that ride with it are support, surround, and uphold. The Samech is what bears the weight. The Samech is what makes the circle complete. The Samech is the unbroken line drawn around what must not collapse.</p>
<p>That same character shows up in the words the Samech lives inside. Many Hebrew words that begin with Samech carry the sense of supporting, surrounding, or encircling &mdash; holding something up so it does not fall, drawing a line of protection around what is inside.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Sukkah</em></strong> &mdash; &ldquo;booth, shelter.&rdquo; The temporary dwelling that surrounds Yahuah&rsquo;s people during <em>Sukkot</em>. The walls and roof wrap around the inhabitants for the seven days of the feast.</li>
  <li><strong><em>Samakh</em></strong> &mdash; &ldquo;to lean, to support, to lay hands upon.&rdquo; The act of placing weight on something that will hold. The laying on of hands passes blessing or authority from one Samech-bearing one to another.</li>
  <li><strong><em>Sefer</em></strong> &mdash; &ldquo;book, scroll.&rdquo; The container that holds words securely so they do not scatter. The Torah itself is a <em>sefer</em> &mdash; the words of Yahuah held inside the rolled vessel.</li>
  <li><strong><em>Sela</em></strong> &mdash; &ldquo;rock, cliff.&rdquo; The unmoving support. &ldquo;Yahuah is my rock and my fortress&rdquo; (Psalm 18:2) &mdash; the One who holds when nothing else will.</li>
  <li><strong><em>Sod</em></strong> &mdash; &ldquo;secret, council.&rdquo; The closed circle of trusted ones. <em>Sod Yahuah l&rsquo;yere&rsquo;av</em>, &ldquo;the secret of Yahuah is with them that fear Him&rdquo; (Psalm 25:14) &mdash; the inner circle He surrounds with His confidence.</li>
</ul>
<p>Notice the consistent shape. Where the Samech appears at the front of a word, something is being held up, surrounded, or kept whole. A weight is being borne. A circle is being closed. A protection is being drawn around what could otherwise fall apart.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Samech at its front, ask the simple question: <em>What is being upheld here?</em> Most of the time, the Samech is doing what the letter has always done &mdash; bearing the weight, drawing the circle, keeping the structure standing.</p>` },
  { modern: 'ע', paleo: '𐤏', name: 'Ayin',   sound: 'Silent / Gh',    number: 70,  pictograph: 'Eye · Spring of Water',      meaning: 'See · Experience · Understand',           essence: `Both the eye that sees and the spring that reveals what was underground. עוֹלָם (olam) — forever, the hidden world — begins with Ayin. To truly see is to perceive what is hidden beneath the surface of what appears.`,
    slug: 'ayin',
    quickNote: `<p>The Hebrew letter Ayin (ע) is the eye. Its ancient pictograph is the open eye &mdash; and the spring of water that opens out of the earth, since the same Hebrew word names both. The themes that ride with it are see, experience, and understand. The Ayin is what looks. The Ayin is what perceives. The Ayin is the doorway through which understanding enters &mdash; the eye that sees, the spring that lets the water of knowledge flow.</p>
<p>That same character shows up in the words the Ayin lives inside. Many Hebrew words that begin with Ayin carry the sense of seeing, witnessing, perceiving, or experiencing &mdash; what the eye finds, what the heart understands, what the soul has come to know.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Ayin</em></strong> &mdash; &ldquo;eye.&rdquo; The watchful organ of sight. <em>Einei Yahuah</em>, &ldquo;the eyes of Yahuah,&rdquo; run to and fro throughout the whole earth (2 Chronicles 16:9).</li>
  <li><strong><em>Ed</em></strong> &mdash; &ldquo;witness.&rdquo; The one who has seen and can testify. The covenant requires <em>ed</em>-bearers &mdash; those who saw the deed and will speak the truth of what their eye observed.</li>
  <li><strong><em>Olam</em></strong> &mdash; &ldquo;age, eternity, the long sweep of time.&rdquo; The horizon the eye perceives but cannot exhaust. <em>L&rsquo;olam va&rsquo;ed</em>, &ldquo;forever and ever&rdquo; &mdash; the unending vista the Ayin opens onto.</li>
  <li><strong><em>Avodah</em></strong> &mdash; &ldquo;service, work, worship.&rdquo; The service of the hands, witnessed by the eye of Yahuah and counted as worship.</li>
  <li><strong><em>Am</em></strong> &mdash; &ldquo;people.&rdquo; The community of those who see together, who experience the same Yahuah and bear witness as one. <em>Am Yahuah</em>, &ldquo;the people of Yahuah.&rdquo;</li>
</ul>
<p>Notice the consistent shape. Where the Ayin appears at the front of a word, something is being seen. A witness is bearing testimony. A horizon is being perceived. A community is gathering around a shared sight. The Ayin is the open eye built right into the letter.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with an Ayin at its front, ask the simple question: <em>What is being seen here?</em> Most of the time, the Ayin is doing what the letter has always done &mdash; opening the eye and letting understanding flow.</p>` },
  { modern: 'פ', paleo: '𐤐', name: 'Pe',     sound: 'P / F',          number: 80,  pictograph: 'Mouth · Opening',            meaning: 'Speech · Word · Declare',                 essence: `The mouth that speaks life or death. פֶּה (peh) means mouth. The universe was spoken into existence. Torah came through the mouth of Yahuah. Every word carries the creative weight of Pe — to open the mouth is a sacred act.`,
    slug: 'pe',
    quickNote: `<p>The Hebrew letter Pe (פ) is the mouth. Its ancient pictograph is the open mouth &mdash; lips parted, breath ready, words about to come forth. The themes that ride with it are speak, command, and edge. The Pe is the source of speech. The Pe is the boundary between silence and sound. The Pe is where the breath of the heart becomes the word the world can hear.</p>
<p>That same character shows up in the words the Pe lives inside. Many Hebrew words that begin with Pe carry the sense of speaking, commanding, calling forth &mdash; or of the edge, the front, the face from which the speaking comes.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Peh</em></strong> &mdash; &ldquo;mouth.&rdquo; The opening from which words come forth. The mouth of Yahuah is what spoke creation into being and what speaks the prophet&rsquo;s word into the world.</li>
  <li><strong><em>Pesach</em></strong> &mdash; the passing-over. The night when Yahuah&rsquo;s word marked the doorposts and the destroyer&rsquo;s reach was held back. The Pesach lamb was eaten in haste, and the story has been retold mouth-to-mouth in every generation since.</li>
  <li><strong><em>Panim</em></strong> &mdash; &ldquo;face, presence.&rdquo; The front edge of a being, where the mouth speaks. <em>P&rsquo;nei Yahuah</em>, &ldquo;the face of Yahuah&rdquo; &mdash; the presence that turns toward His people.</li>
  <li><strong><em>Padah</em></strong> &mdash; &ldquo;to redeem, to ransom.&rdquo; The spoken price paid to set the captive free. The redeemer opens His mouth and names the cost.</li>
  <li><strong><em>Pa&rsquo;al</em></strong> &mdash; &ldquo;to do, to work, to make.&rdquo; What follows from the mouth that commands. The word goes out, and the work begins.</li>
</ul>
<p>Notice the consistent shape. Where the Pe appears at the front of a word, a mouth is opening. A word is going forth. A face is turning toward someone. An edge is being marked between the speaker and the heard. The Pe is the open mouth built right into the letter.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Pe at its front, ask the simple question: <em>What is being spoken here?</em> Most of the time, the Pe is doing what the letter has always done &mdash; opening the mouth and letting the word come forth.</p>` },
  { modern: 'צ', paleo: '𐤑', name: 'Tsade',  sound: 'Ts',             number: 90,  pictograph: 'Fishhook · Righteous Person', meaning: 'Righteous · Caught · Desire',            essence: `The fishhook that draws from the deep. צַדִּיק (tsaddik) is the righteous one — the one caught by Yah and pulled up from the murky waters. To be righteous is to be seized by something greater than yourself.`,
    slug: 'tsade',
    quickNote: `<p>The Hebrew letter Tsade (צ) is the fishhook. Its ancient pictograph is the bent iron that catches and pulls &mdash; the hunter&rsquo;s hook, the trail that draws toward the goal, the bend in the line that holds fast and brings the prize home. The themes that ride with it are righteousness, hunt, and pull toward. The Tsade is the desire that draws the soul toward what is right. The Tsade is the hook that will not let go. The Tsade is the path that pulls a man toward Yahuah.</p>
<p>That same character shows up in the words the Tsade lives inside. Many Hebrew words that begin with Tsade carry the sense of being pulled toward something &mdash; toward righteousness, toward the goal, toward the One the soul seeks.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Tsedek</em></strong> &mdash; &ldquo;righteousness.&rdquo; The standard the soul is pulled toward. <em>Tsedek tsedek tirdof</em>, &ldquo;righteousness, righteousness shall you pursue&rdquo; (Deuteronomy 16:20).</li>
  <li><strong><em>Tsaddik</em></strong> &mdash; &ldquo;righteous one.&rdquo; The one whose life has been pulled into alignment with Yahuah&rsquo;s standard &mdash; the man drawn by the hook of the covenant.</li>
  <li><strong><em>Tsiyon</em></strong> &mdash; &ldquo;Zion.&rdquo; The mountain toward which Yahuah&rsquo;s people are drawn &mdash; the place that pulls all hearts upward.</li>
  <li><strong><em>Tsemach</em></strong> &mdash; &ldquo;branch, sprout.&rdquo; The new shoot that pulls life from the root. The Messianic title &mdash; <em>Tsemach</em> is what Yahuah calls His servant in Zechariah 3:8 and 6:12: the BRANCH.</li>
  <li><strong><em>Tsama</em></strong> &mdash; &ldquo;thirst.&rdquo; The pull of the parched soul toward water. <em>Tsam&rsquo;ah l&rsquo;kha nafshi</em>, &ldquo;my soul thirsts for thee&rdquo; (Psalm 63:1).</li>
</ul>
<p>Notice the consistent shape. Where the Tsade appears at the front of a word, something is pulling. A soul is being drawn. A path is bending toward a goal. The hook of desire has caught hold and is bringing the heart toward what it cannot let go of.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Tsade at its front, ask the simple question: <em>What is pulling here, and toward what?</em> Most of the time, the Tsade is doing what the letter has always done &mdash; setting the hook and drawing the soul toward what it was made for.</p>` },
  { modern: 'ק', paleo: '𐤒', name: 'Qof',    sound: 'Q',              number: 100, pictograph: 'Back of Head · Horizon · Sunrise', meaning: 'Cycle · Beyond Sight · Holy',         essence: `The sun disappearing below the horizon — and rising again beyond what the eye can see. קָדוֹשׁ (kadosh) — set-apart, holy — begins with Qof. What is truly holy exists at the edge of the observable, beyond the ordinary horizon.`,
    slug: 'qof',
    quickNote: `<p>The Hebrew letter Qof (ק) is the back of the head and the sun at the horizon. Its ancient pictograph is the line where two worlds meet &mdash; the curve where the day ends and night begins, the place where the head turns from what is in front to what is behind. The themes that ride with it are set apart, called out, holy, last, and behind. The Qof is the boundary marker. The Qof is the place where the seen meets the unseen. The Qof is the calling that lifts one thing out of the rest.</p>
<p>That same character shows up in the words the Qof lives inside. Many Hebrew words that begin with Qof carry the sense of being set apart, called, summoned, held holy &mdash; or of standing at the edge between one state and another.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Qadosh</em></strong> &mdash; &ldquo;holy, set apart.&rdquo; <em>Qadosh, qadosh, qadosh Yahuah Tzeva&rsquo;ot</em>, &ldquo;Holy, holy, holy is Yahuah of hosts&rdquo; (Isaiah 6:3). The Qof lifts the word out of the common.</li>
  <li><strong><em>Qara</em></strong> &mdash; &ldquo;to call, to summon, to read aloud.&rdquo; <em>Qara b&rsquo;shem Yahuah</em>, &ldquo;to call upon the name of Yahuah&rdquo; (Genesis 4:26). The Qof is the lifted voice that calls one out from the rest.</li>
  <li><strong><em>Qol</em></strong> &mdash; &ldquo;voice, sound.&rdquo; <em>Qol Yahuah</em>, &ldquo;the voice of Yahuah&rdquo; &mdash; the sound that comes from beyond the horizon and breaks into the world.</li>
  <li><strong><em>Qum</em></strong> &mdash; &ldquo;to rise, to stand up.&rdquo; The act of standing in response to the call. <em>Qumah Yahuah</em>, &ldquo;Rise up, Yahuah&rdquo; (Numbers 10:35).</li>
  <li><strong><em>Qedem</em></strong> &mdash; &ldquo;east, ancient, what is before.&rdquo; The east where the dawn breaks is the <em>qedem</em>. The ancient time before all things is also the <em>qedem</em>. The Qof draws the line at the horizon between the now and the timeless before.</li>
</ul>
<p>Notice the consistent shape. Where the Qof appears at the front of a word, a line is being drawn at an edge. Something is being set apart from the rest. A voice is calling across a boundary. A horizon is being marked between this side and that side.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Qof at its front, ask the simple question: <em>What is being called out and set apart here?</em> Most of the time, the Qof is doing what the letter has always done &mdash; marking the edge between the holy and the common, lifting one thing out of the rest.</p>` },
  { modern: 'ר', paleo: '𐤓', name: 'Resh',   sound: 'R',              number: 200, pictograph: 'Head of a Person',           meaning: 'Head · First · Master · Person',          essence: `The head that leads. רֵאשִׁית (reshit) — "beginning" — comes from this root. Everything begins from the head. Where the head goes, the body follows. Resh is the person in authority, the one whose direction determines all else.`,
    slug: 'resh',
    quickNote: `<p>The Hebrew letter Resh (ר) is the head. Its ancient pictograph is exactly what its name says &mdash; rosh, head &mdash; the highest part of the body, the seat of the eyes and the mouth, the place from which leadership flows. The themes that ride with it are head, chief, first, and highest. The Resh is what comes first. The Resh is what sits at the top. The Resh is the crown of a thing &mdash; its origin, its leader, its summit.</p>
<p>That same character shows up in the words the Resh lives inside. Many Hebrew words that begin with Resh carry the sense of headship, beginning, height, or the lifted-up place &mdash; what stands first, what leads, what rises above the rest.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Rosh</em></strong> &mdash; &ldquo;head, chief, beginning.&rdquo; The most direct word &mdash; the letter named for the very thing it pictures. The <em>rosh</em> of a body, of a household, of a nation, of a story.</li>
  <li><strong><em>Reshit</em></strong> &mdash; &ldquo;beginning, first part.&rdquo; <em>B&rsquo;reshit</em>, &ldquo;in the beginning&rdquo; (Genesis 1:1) &mdash; the very first word of the Bible carries the headship of the Resh.</li>
  <li><strong><em>Ru&rsquo;ach</em></strong> &mdash; &ldquo;spirit, wind, breath.&rdquo; The breath that flows from the head &mdash; the <em>Ru&rsquo;ach Elohim</em> that moved over the face of the waters in the beginning (Genesis 1:2).</li>
  <li><strong><em>Roeh</em></strong> &mdash; &ldquo;shepherd.&rdquo; The head of the flock, the leader who walks first and the sheep follow. <em>Yahuah ro&rsquo;i</em>, &ldquo;Yahuah is my shepherd&rdquo; (Psalm 23:1).</li>
  <li><strong><em>Romem</em></strong> &mdash; &ldquo;to lift up, to exalt.&rdquo; To raise something to the head &mdash; to put it at the top, to set it on high where the eye must look up to find it.</li>
</ul>
<p>Notice the consistent shape. Where the Resh appears at the front of a word, something is at the top. Something is leading. Something is lifted up to the place of the head, the place where eyes find it first and the rest follows.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Resh at its front, ask the simple question: <em>What is being lifted to the head here?</em> Most of the time, the Resh is doing what the letter has always done &mdash; putting the highest thing at the front, where it leads everything that follows.</p>` },
  { modern: 'ש', paleo: '𐤔', name: 'Shin',   sound: 'Sh / S',         number: 300, pictograph: 'Teeth · Fire · Three Branches', meaning: 'Consume · Divine Fire · Almighty',     essence: `The three-branched letter of divine fire. Shin marks the mezuzah — it stands for שַׁדַּי (Shaddai), the Almighty. Torah was given in fire. The Ruach came as tongues of fire. שָׁלוֹם (shalom) — wholeness — begins with the letter of consuming fire.`,
    slug: 'shin',
    quickNote: `<p>The Hebrew letter Shin (ש) is teeth. Its ancient pictograph shows the three-pointed crown of teeth in the mouth &mdash; the edge that bites, the grinder that breaks down, the gate that decides what to admit and what to spit out. Some teachers also see in the same shape the three tongues of flame, the fire that consumes and refines. The themes that ride with it are consume, refine, and distinguish. The Shin is the edge of discernment. The Shin is the fire that purifies. The Shin is the tooth that grinds the grain of life into the bread we can eat.</p>
<p>That same character shows up in the words the Shin lives inside. Many Hebrew words that begin with Shin carry the sense of separating, keeping, hearing, peace-after-testing &mdash; what has been refined, what has been guarded, what stands set apart from the common.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Shema</em></strong> &mdash; &ldquo;hear, listen, obey.&rdquo; <em>Shema Yisrael, Yahuah Eloheinu, Yahuah echad</em>, &ldquo;Hear, O Israel, Yahuah our Elohim, Yahuah is one&rdquo; (Deuteronomy 6:4). The call to the listening that distinguishes truth from noise.</li>
  <li><strong><em>Shabbat</em></strong> &mdash; the seventh day, the day set apart. The Shin marks the edge between work and rest, between common time and holy time.</li>
  <li><strong><em>Shamar</em></strong> &mdash; &ldquo;to keep, to guard, to observe.&rdquo; <em>Shamor et yom ha-shabbat l&rsquo;qadsho</em>, &ldquo;Keep the Sabbath day, to set it apart&rdquo; (Deuteronomy 5:12). The verb of covenant faithfulness &mdash; the teeth at the gate of obedience.</li>
  <li><strong><em>Shalom</em></strong> &mdash; &ldquo;peace, wholeness, completion.&rdquo; The state on the other side of refinement &mdash; the wholeness that remains after the dross has been consumed and only the pure is left.</li>
  <li><strong><em>Shem</em></strong> &mdash; &ldquo;name.&rdquo; The name distinguishes one from all others. <em>B&rsquo;shem Yahuah</em>, &ldquo;in the name of Yahuah&rdquo; &mdash; the name that sets His own apart from every other.</li>
</ul>
<p>Notice the consistent shape. Where the Shin appears at the front of a word, an edge is being set. Something is being distinguished. Something is being kept and something is being left behind. The teeth are doing their work &mdash; deciding what is worthy to be received and what is not.</p>
<p>So as you read the Hebrew Scriptures, when you find a word with a Shin at its front, ask the simple question: <em>What is being kept and what is being set aside here?</em> Most of the time, the Shin is doing what the letter has always done &mdash; setting the edge that separates the holy from the common, the true from the false.</p>` },
  { modern: 'ת', paleo: '𐤕', name: 'Tav',    sound: 'T / Th',         number: 400, pictograph: 'Mark · Cross · Covenant Sign', meaning: 'Seal · Covenant · Complete',            essence: `In ancient script, Tav was written as an X — the mark of the covenant. The last letter carries the weight of completion. אֱמֶת (emet/truth) ends with Tav. תּוֹרָה (Torah) ends with Tav. What is true is sealed. What is finished bears the mark.`,
    slug: 'tav',
    quickNote: `<p>The Hebrew letter Tav (ת) is the mark, the sign, the seal. Its ancient pictograph is the mark a workman set on a stone he had finished, or the print a king pressed into wax to close a covenant. The themes that ride with it are sealed, covenant, and complete. The Tav is the last letter of the Hebrew alphabet for the same reason a seal is the last thing pressed into a document. It says: this is finished. This is set. This stands.</p>
<p>That same character shows up in the work the Tav does inside the language. When the Tav stands at the front of a word, it takes a verb &mdash; an action that has been happening &mdash; and seals it into a finished thing. The verb is the doing. The Tav-word is the doing brought to its completion, the covenant pressed shut.</p>
<p>A handful of familiar examples make the pattern easy to see:</p>
<ul>
  <li><strong><em>Yarah</em></strong> &mdash; to throw, to point, to instruct &rarr; <strong><em>Torah</em></strong> &mdash; instruction sealed into a body of teaching that stands forever.</li>
  <li><strong><em>Halal</em></strong> &mdash; to praise &rarr; <strong><em>Tehillah</em></strong> &mdash; praise sealed into a song that can be sung again. The Psalms in Hebrew are <em>Tehillim</em>, the plural.</li>
  <li><strong><em>Palal</em></strong> &mdash; to pray, to intercede &rarr; <strong><em>Tefillah</em></strong> &mdash; prayer sealed in form, set as an offering lifted up.</li>
  <li><strong><em>Shuv</em></strong> &mdash; to return &rarr; <strong><em>Teshuvah</em></strong> &mdash; the turning brought to its completion, the return fully made.</li>
  <li><strong><em>Qavah</em></strong> &mdash; to wait, to hope &rarr; <strong><em>Tiqvah</em></strong> &mdash; hope sealed as a covenant promise.</li>
</ul>
<p>Notice the consistent shape. The verb is the action in motion. The Tav-word is the action sealed &mdash; the doing brought to its finished form, the covenant pressed shut, the mark of completion set.</p>
<p>So as you read the Hebrew Scriptures, when you find a word that begins with T sitting near a verb that does not, ask the simple question: <em>What is this sealing?</em> Most of the time, the Tav at the front is doing what the letter has always done &mdash; pressing the mark of completion onto an action that has come to its end.</p>` },
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
