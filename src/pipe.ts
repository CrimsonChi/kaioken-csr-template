export { pipe }

function pipe<T, A, B>(a: (value: T) => A, b: (a: A) => B): (value: T) => B
function pipe<T, A, B, C>(
  a: (value: T) => A,
  b: (a: A) => B,
  c: (b: B) => C
): (value: T) => C
function pipe<T, A, B, C, D>(
  a: (value: T) => A,
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D
): (value: T) => D
function pipe<T, A, B, C, D, E>(
  a: (value: T) => A,
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D,
  e: (d: D) => E
): (value: T) => E
function pipe(...fns: Function[]) {
  return fns.reduce((a, b) => b(a))
}

const res = pipe(
  (n: number) => n.toString(),
  (s: string) => ({ len: s.length })
)(123)
