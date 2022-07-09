import type { ChangeEventHandler, FC } from 'react'

interface Props {
}

const Index: FC<Props> = () => {
  const [name, setName] = useState('')
  const btnList = [
    { title: '扫雷', url: '/minesweeper' },
    { title: '梅花动画', url: '/canvas-plum' },
    { title: 'js小demo', url: '/js-demo' },
  ]
  const navigate = useNavigate()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }
  return <>
    <div className="my-2">
      <input value={name} type="text" placeholder="该如何称呼您？" className="px-2 py-1 border-1" onChange={handleChange} />
      <span className="router-link inline cursor-pointer" onClick={() => navigate(`/hi/${name}`)}> 前往 </span>
    </div>
    <div className="flex gap-1 justify-center">
      {btnList.map(item =>
        <button className="bg-green-400 button rounded-5 router-link" key={item.url} onClick={() => navigate(item.url)}>{ item.title }</button>)
      }
    </div>
  </>
}

export default Index
