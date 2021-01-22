const m = new WeakMap()

module.exports = autoname

function autoname (o) {
  if (m.has(o)) return m.get(o)
  const c = o.constructor
  const cnt = 1 + (m.get(c) || 0)
  m.set(c, cnt)
  m.set(o, c.name + '#' + cnt)
  return m.get(o)
}
