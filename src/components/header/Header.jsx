import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">PARNEET'S ANIME BLOG</span>
        <span className="headerTitleLg"><b>WEEBZONE</b></span>
        <br></br>
        <br></br>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/0b/a1/00/0ba1000656d3b1e842858fd926b9711f.gif"
        alt=""
      />
    </div>
  );
}
