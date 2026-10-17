// riddles 1017 V1.js
// created: the riddle collection — Guilty of All (new) and One Name, One Father
// (moved unchanged from src/pages/riddle.astro).
//
// ================================================================
//   RIDDLES — NEWEST FIRST. riddles[0] is the newest: /riddle renders it, and
//   the homepage Riddle corner card (src/data/corner-cards.js) takes its `line`
//   and `href` from it, so adding a riddle at the top rotates both on its own.
//   Each riddle has a page at /riddle/<slug>/ and a card on /riddles.
//
//   slug, title   the page URL and the small eyebrow above the page heading
//   line          the homepage corner-card line (and the /riddles card line)
//   tiles         three { ref, text } — KJV, with [Yahuah] etc. in brackets
//   nudgeLine     the line above the nudge verse
//   nudge         { ref, text }
//   chain         three [line, ref] — the answer's steps
//   verdict       the answer, large
//   beneath       the line under the verdict
//   next          { href, label } — the link under the answer
//
//   Nothing before the answer may name or hint at it — the tiles' challenge
//   line is the same for every riddle and lives in src/components/Riddle.astro.
// ================================================================

export const riddles = [
  {
    slug: 'guilty-of-all',
    title: 'Guilty of All',
    line: 'Three verses about the Law. One answer about the Son. Can you find it?',
    tiles: [
      { ref: 'James 2:10', text: 'For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.' },
      { ref: '1 Peter 2:22', text: 'Who did no sin, neither was guile found in his mouth:' },
      { ref: 'Matthew 4:10', text: 'Then saith Jesus [Yahushua] unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord [Yahuah] thy God, and him only shalt thou serve.' },
    ],
    nudgeLine: 'He said it Himself outside the tomb.',
    nudge: { ref: 'John 20:17', text: 'Jesus [Yahushua] saith unto her, Touch me not; for I am not yet ascended to my Father: but go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God.' },
    chain: [
      ['Break one point and you are guilty of all.', 'James 2:10'],
      ['Yahushua broke no point.', '1 Peter 2:22'],
      ['The first point is to worship Yahuah, and Him only.', 'Matthew 4:10'],
    ],
    verdict: 'Yahushua had a God, and His God was Yahuah.',
    beneath: 'A co-equal God has no God above Him to worship. He would fail the first command and stand guilty of all.',
    next: { href: '/peah/commandment-one-and-the-man-who-kept-it/', label: 'Read the corner study' },
  },
  {
    slug: 'one-name-one-father',
    title: 'One Name, One Father',
    line: 'Three verses. One answer. Can you find it?',
    tiles: [
      { ref: 'Psalm 83:18', text: 'That men may know that thou, whose name alone is JEHOVAH [Yahuah], art the most high over all the earth.' },
      { ref: 'Isaiah 63:16', text: 'Doubtless thou art our father, though Abraham be ignorant of us, and Israel acknowledge us not: thou, O LORD [Yahuah], art our father, our redeemer; thy name is from everlasting.' },
      { ref: 'Isaiah 45:5', text: 'I am the LORD [Yahuah], and there is none else, there is no God beside me: I girded thee, though thou hast not known me:' },
    ],
    nudgeLine: 'Paul answered it in one sentence.',
    nudge: { ref: '1 Corinthians 8:6', text: 'But to us there is but one God [Elohim], the Father, of whom are all things, and we in him; and one Lord [Master] Jesus Christ, by whom are all things, and we by him.' },
    chain: [
      ['His name is Yahuah.', 'Psalm 83:18'],
      ['Yahuah is the Father.', 'Isaiah 63:16'],
      ['Beside Yahuah there is no other God.', 'Isaiah 45:5'],
    ],
    verdict: 'Yahuah the Father is the only true God.',
    beneath: 'One name. One Father. One God. No room for a second or third person.',
    next: { href: '/why-the-names-matter', label: 'Now unmask the titles' },
  },
];

export const newestRiddle = riddles[0];
