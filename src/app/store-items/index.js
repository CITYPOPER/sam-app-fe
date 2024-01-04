import React from 'react'
import StoreItem from '../store-item'

function StoreItems({ items }) {
  return (
    <div className='flex gap-2'>
      {items.map(item => <StoreItem title={item.title} category={item.category} sizes={item.sizes} />)}
      {<div className='bg-yellow-300'>
      </div>}
    </div>
  )
}

export default StoreItems
