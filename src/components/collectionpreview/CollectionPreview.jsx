import React from 'react'
import './collection-preview.scss';
import CollectionItem from '../collection-items/CollectionItem';


export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          //to filter the items not more than 4
          .filter((item, idx) => idx < 4)
          //to map over the items from data and render items
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}

      </div>

    </div>
  )
}
