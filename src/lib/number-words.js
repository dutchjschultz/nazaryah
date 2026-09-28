// number-words 0928 V2.js
// V2: a group with no number (the Enoch panel) is named by its title alone.
// V1: "Band Four" — band numbers are written as words wherever a band is named.
const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];

export const numberWord = (n) => WORDS[n] ?? String(n);

// "Band Four · The Witnesses" — the one form used on the band card and in the index.
export const bandName = (number, title) => (number == null ? title : `Band ${numberWord(number)} · ${title}`);

// "Band Four" / "Enoch" — the short name, for count lines.
export const bandShort = (number, title) => (number == null ? title : `Band ${numberWord(number)}`);
