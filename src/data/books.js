// books.js 0803 V1
// Master chapter lists for the multi-part book studies. Each book's Contents on its
// Books page is the single source of truth; the intro pages and the blog-index card
// titles all conform to these. Order is I → V by `num` (never by publish date).

export const fiveTitles = [
  { num: 1, title: 'One Held the Covenant, the Other Bled for It',        topic: 'The Bridegroom',  href: '/blog/misplaced-titles-1-bridegroom' },
  { num: 2, title: 'The Herald They Made Into the King',                  topic: 'The Gospel',      href: '/blog/the-herald-they-made-into-the-king' },
  { num: 3, title: 'The Redeemer Who Never Needed Redeeming',             topic: 'The Redeemer',    href: '/blog/the-redeemer-who-never-needed-redeeming' },
  { num: 4, title: 'He Was Named in the Will, Not the One Who Sealed It', topic: 'The Inheritance', href: '/blog/joint-heirs-with-the-king' },
  { num: 5, title: 'The Man Between the Veil and the Throne',             topic: 'The High Priest', href: '/blog/the-man-between-the-veil-and-the-throne' },
];

export const theBearer = [
  { num: 1, title: 'He Is the Light, the Son Is the Lamp',              topic: 'The Light',  href: '/blog/the-bearer-1-light-and-lamp',
    desc: 'Yahuah commanded light before there was a sun to carry it. The Son is the lamp that brings it into the world, and a lamp is always lit by something greater than itself. Part 1 of 5: The Bearer.' },
  { num: 2, title: 'He Is the Unseen, the Son Is the Image',            topic: 'The Image',  href: '/blog/the-bearer-2-unseen-and-image',
    desc: 'An image is never the one it images. No man hath seen the Father at any time — which is precisely why the Son is called His likeness. Part 2 of 5: The Bearer.' },
  { num: 3, title: 'He Is the Word, the Son Is the Flesh',              topic: 'The Word',   href: '/blog/the-bearer-3-word-and-flesh',
    desc: "A word spoken belongs to the one who speaks it. The Son carried the Father's word in flesh and said plainly that the word was not His own. Part 3 of 5: The Bearer." },
  { num: 4, title: 'He Is the Presence, the Son Is the Temple',         topic: 'The Temple', href: '/blog/the-bearer-4-presence-and-temple',
    desc: 'A temple houses the Presence. It is not the Presence. The dwelling and the One who dwells in it are never the same figure. Part 4 of 5: The Bearer.' },
  { num: 5, title: 'He Is the Plan, the Son Is the Lamb on the Altar',  topic: 'The Lamb',   href: '/blog/the-bearer-5-lamb-on-the-altar',
    desc: 'The lamb does not purpose the offering. The Father purposed it, and the Son was the price laid on the altar. Part 5 of 5: The Bearer.' },
];

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
export const roman = (n) => ROMAN[n] || String(n);

const slugOf = (href) => href.replace('/blog/', '');

// slug -> master chapter title. Wherever a chapter of either book is shown as a card
// (intro pages, blog index), display this instead of the blog's own title.
export const masterTitleBySlug = Object.fromEntries(
  [...fiveTitles, ...theBearer].map((c) => [slugOf(c.href), c.title])
);
