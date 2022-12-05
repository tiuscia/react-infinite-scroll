import styled from "styled-components"

// Custom components
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll"
import ItemsImageList from "./components/ItemsImageList/ItemsImageList"

// Styles
const AppWrapper = styled.div`
  h2 {
    text-align: center;
    padding: 40px 0;
  }
`

function App() {
  return (
    <AppWrapper>
      <h2>Infinite Scroll</h2>
      <InfiniteScroll>
        {(data) => <ItemsImageList data={data} />}
      </InfiniteScroll>
    </AppWrapper>
  )
}

export default App
