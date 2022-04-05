export default function px(value) {
  if (String(value) === '0') {
    return '0'
  }
  return `${value}px`
}
