import BannerImage from "../assets/banneryeni.jpg"
import "../styles/About.css"

export const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsam cum consectetur ut pariatur quo ex soluta distinctio nihil minima fugit saepe delectus, obcaecati dolores et repellendus aliquid placeat consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum pariatur recusandae iste ut earum, temporibus corrupti perspiciatis quos? Cupiditate repellat blanditiis eum animi atque modi corporis sint quisquam quia?</p>
      </div>
    </div>
  )
}
