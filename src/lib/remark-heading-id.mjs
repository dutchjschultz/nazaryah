// remark-heading-id 1010 V1
// `## Heading text {#some-id}` → <h2 id="some-id">Heading text</h2>.
// Markdown's own syntax has no heading ids; this strips a trailing {#id} from a
// heading's last text node and sets it as the element's id. Headings without
// one are untouched (they keep whatever id the pipeline gives them).
const ID_AT_END = /\s*\{#([A-Za-z][\w-]*)\}\s*$/;

function walk(node) {
  if (node.type === 'heading') {
    const last = node.children?.[node.children.length - 1];
    if (last?.type === 'text') {
      const m = last.value.match(ID_AT_END);
      if (m) {
        last.value = last.value.slice(0, m.index);
        node.data = node.data || {};
        node.data.hProperties = { ...(node.data.hProperties || {}), id: m[1] };
      }
    }
    return;
  }
  node.children?.forEach(walk);
}

export default function remarkHeadingId() {
  return (tree) => walk(tree);
}
