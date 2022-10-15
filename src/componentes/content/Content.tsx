import { ContentWrap } from "./style";

function Content() {
  return (
    <ContentWrap>
      <h3>Some Heading</h3>
      <div className="boxWrap">
        <div className="img"></div>
        <div className="cont"></div>
      </div>
    </ContentWrap>
  );
}

export default Content;
