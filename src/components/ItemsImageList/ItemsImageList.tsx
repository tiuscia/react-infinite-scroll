import React from "react"
import ItemImage from "../ItemImage/ItemImage"

// Styles
import { ItemsImageListWrapper } from "./ItemsImageList.styles"
// Types
import { ItemImageType } from "../ItemImage/ItemImage"

const itemsImageList = ({ data }: any) => {
  return (
    <ItemsImageListWrapper>
      {data?.map((item: ItemImageType, i: number) => (
        <ItemImage {...item} key={i} />
      ))}
    </ItemsImageListWrapper>
  )
}

export default React.memo(itemsImageList)
