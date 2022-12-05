import React from "react"

import { ItemImageWrapper } from "./ItemImage.styles"

export type ItemImageType = {
  id: number
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const ItemImage = ({
  id,
  author,
  width,
  height,
  url,
  download_url,
}: ItemImageType) => (
  <ItemImageWrapper>
    <h3>{author}</h3>
    <img src={download_url} alt={`image taken by ${author}`} />
  </ItemImageWrapper>
)

export default React.memo(ItemImage)
