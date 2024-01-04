import Image from 'next/image'
import StoreItem from './store-item'
import StoreItems from './store-items'

export default function Home() {

  const items = [
    {
      title: "cloth",
      category: "pants",
      sizes: [5, 9, 12]
    }, {
      title: "cloth",
      category: "socks",
      sizes: [3, 4, 5]
    }, {
      title: "cloth",
      category: "hood",
      sizes: [1, 10]
    }
  ]

  return (
    <main className="flex justify-between p-4">
      <StoreItems items={items} />
      <div>felipe
      </div>
      <div>hello
      </div>
    </main>
  )
}
