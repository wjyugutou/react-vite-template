export default function useHtml(selector: string, attribute?: string, attributeValue?: any) {
  const html = document.querySelectorAll(selector)
  if (attribute)
    html[0]?.setAttribute(attribute, attributeValue)

  return html[0]
    ? html.length > 1 ? html : html[0]
    : null
}
