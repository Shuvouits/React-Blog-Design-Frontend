import "./style.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-social">
            <div className="footer-social-list">
                <a href="#"><i className="fa fa-facebook"></i> <span style={{marginLeft : "10px"}}>Facebook</span></a>
                <a href="#"><i className="fa fa-twitter"></i> <span style={{marginLeft : "10px"}}>Twitter</span></a>
                <a href="#"><i className="fa fa-youtube-play"></i> <span style={{marginLeft : "10px"}}>YouTube</span></a>
                <a href="#"><i className="fa fa-flickr"></i> <span style={{marginLeft : "10px"}}>Flicker</span></a>
                <a href="#"><i className="fa fa-google-plus"></i> <span style={{marginLeft : "10px"}}>Google +</span></a>
                
            </div>
        </div>
        <div className="splitter"></div>
        <div className="copyright">
           © Copyright 2023 <a href="#" className="highlight">mezzo data.</a> All rights reserved.
        </div>
    </div>
  )
}
