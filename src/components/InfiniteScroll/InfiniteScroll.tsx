/* 
  I picked this solution becasue I wanted to show you my approce in one component only.
  I could have used 
  - a Hook that could have been reused 
  - useref or intersectionObserver in order to calculate with fetch more data
*/

import { useState, useEffect } from "react"
// import useInfiniteScrollFetch from "./_hooks/useInfiniteScrollFetch/useInfiniteScrollFetch"

// Styles
import { InfiniteScrollWrapper } from "./InfiniteScroll.styles"

type InfiniteScrollProps = {
  children: (data: any[]) => JSX.Element
}

const InfiniteScroll = ({ children }: InfiniteScrollProps) => {
  const [data, setData] = useState<any[]>([])
  const [pagination, setPagination] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const _data = await (
          await fetch(`https://picsum.photos/v2/list?page=${pagination}`)
        ).json()

        setData((prev) => [...prev, ..._data])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [pagination])

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        setIsLoading(true)
        setPagination((prev) => prev + 1)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [pagination])

  return (
    <InfiniteScrollWrapper>
      {children(data)}
      {(data.length == 0 || isLoading) && <p>loading data...</p>}
    </InfiniteScrollWrapper>
  )
}

export default InfiniteScroll
