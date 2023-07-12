const barrage_list = [{ text: 'lkb' }]

const clearChildren = (dom) => {
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
}

const getDomBarrageSetting = () => {
  return document.getElementById('barrage-setting')
}
const onAddItem = () => {
  barrage_list.push({ text: '' })
  render()
}
const onDeleteItem = (v, i) => {
  barrage_list.splice(i, 1)
  render()
}
const onInput = (e, index) => {
  barrage_list[index].text = e.target.value
  setBarrageBox()
}
const createInput = (item, index) => {
  const input = document.createElement('input')
  input.value = item.text
  input.oninput = (e) => { onInput(e, index) }

  return input
}
const createIcon = (item, index) => {
  const icon = document.createElement('i')
  icon.className = 'barrage-setting__item-icon'
  icon.innerText = 'x'
  icon.onclick = () => { onDeleteItem(item, index) }

  return icon
}
const createSetting = (item, index) => {
  const div = document.createElement('div')
  div.className = 'barrage-setting__item'

  const input = createInput(item, index)
  const icon = createIcon(item, index)

  div.appendChild(input)
  div.appendChild(icon)

  return div
}
const createIconAdd = () => {
  const icon = document.createElement('i')
  icon.className = 'barrage-setting__item-icon'
  icon.innerText = '+'
  icon.onclick = onAddItem

  return icon
}
const setBarrageSetting = () => {
  const dom = getDomBarrageSetting()
  clearChildren(dom)

  barrage_list.forEach((item, index) => {
    const div = createSetting(item, index)
    dom.appendChild(div)
  })

  const addIcon = createIconAdd()
  dom.appendChild(addIcon)
}


const getDomBarrageBox = () => {
  return document.getElementById('barrage-box')
}
const createBarrage = (obj) => {
  const div = document.createElement('div')
  div.className = 'barrage'

  const p = document.createElement('p')
  p.innerText = obj.text
  div.appendChild(p)

  return div
}
const setBarrageBox = () => {
  const dom = getDomBarrageBox()
  clearChildren(dom)

  barrage_list.forEach(item => {
    const div = createBarrage(item)
    dom.appendChild(div)
  })
}

const render = () => {
  setBarrageSetting()
  setBarrageBox()
}

const init = () => {
  render()
}

window.onload = () => {
  init()
}
