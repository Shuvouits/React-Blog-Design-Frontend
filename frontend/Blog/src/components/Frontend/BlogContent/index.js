import { Link } from "react-router-dom";
import "./style.css";

export default function BlogContent() {
  return (
    <div className="blog-content">
      <div className="content-wrapper blog-content-wrapper">
        <div className="single-content">
          <div className="content-part">
            <div className="image">
              <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/img-01-new.jpg" />
            </div>

            <div className="text-box">
              <div className="date">
                SEP 10, 2018 <span style={{ marginLeft: "10px" }}>MAKEUP</span>
              </div>
              <div>
                <Link
                  to="/blog"
                  className="headings custom-link"
                >
                  Makeup Primers for Everyday Wear
                </Link>
              </div>
              <div className="description">
                Sit amet porttitor eget dolor morbi non arcu risus. Volutpat
                consequat mauris nunc congue. Quuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt.
              </div>
              <div className="read-more">
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>

          <div className="author-part">
            <div className="author-social">
              <div className="title">SHARE THIS POST</div>
              <div className="author-social-list">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-pinterest"></i>
                <i className="fa fa-linkedin"></i>
              </div>
            </div>
            <div className="author-card">
              <div className="author-card-logo">
                <img src="https://secure.gravatar.com/avatar/ef04abf88259fd9e391ac8a42d01d86f?s=100&d=mm&r=g" />
              </div>
              <div className="author-description">
                <div className="author-name">Author: admin</div>
                <div className="author-details">
                  Etiam quis maximus diam. Sed tincidunt neque quis accumsan
                  gravida. Quisque porttitor vehicula nisl, eu elementum quam
                  interdum ut. Nam purus mi, pellentesque nec viverra faucibus,
                  lacinia eget nisl. Pellentesque at est convallis, accumsan
                  quam eget, aliquet urna. View all posts by admin
                </div>
                <div className="author--personal-social">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-google-plus"></i>
                  <i className="fa fa-pinterest"></i>
                  <i className="fa fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="multiple-content">
            <div className="title" style={{ marginBottom: "20px" }}>
              YOU MIGHT ALSO LIKE...
            </div>

            <div className="multiple-blog-content">
              <div className="card">
                <div className="card-image">
                  <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-01-3-800x508.jpg" />
                </div>

                <div className="card-text">
                  <div className="date">
                    SEP 09, 2018{" "}
                    <span style={{ marginLeft: "10px" }}>MAKEUP</span>
                  </div>
                  <div className="headings" style={{ fontSize: "18px" }}>
                    Makeup Habits That Will Change Your Life
                  </div>
                  <div className="description">
                    Sit amet porttitor eget dolor morbi non arcu risus.
                  </div>
                  <div className="read-more">
                    <a href="#">READ MORE</a>
                    <div className="comment">
                      <i className="fa fa-envelope">
                        <span style={{ marginLeft: "10px" }}>0</span>
                      </i>
                    </div>
                  </div>
                </div>

                <button className="category-btn">FASHION</button>
              </div>

              <div className="card">
                <div className="card-image">
                  <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-06-2-800x508.jpg" />
                </div>

                <div className="card-text">
                  <div className="date">
                    SEP 09, 2018{" "}
                    <span style={{ marginLeft: "10px" }}>MAKEUP</span>
                  </div>
                  <div className="headings" style={{ fontSize: "18px" }}>
                    Makeup Habits That Will Change Your Life
                  </div>
                  <div className="description">
                    Sit amet porttitor eget dolor morbi non arcu risus.
                  </div>
                  <div className="read-more">
                    <a href="#">READ MORE</a>
                    <div className="comment">
                      <i className="fa fa-envelope">
                        <span style={{ marginLeft: "10px" }}>0</span>
                      </i>
                    </div>
                  </div>
                </div>

                <button className="category-btn">FASHION</button>
              </div>

              <div className="card">
                <div className="card-image">
                  <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-05-1-800x508.jpg" />
                </div>

                <div className="card-text">
                  <div className="date">
                    SEP 09, 2018{" "}
                    <span style={{ marginLeft: "10px" }}>MAKEUP</span>
                  </div>
                  <div className="headings" style={{ fontSize: "18px" }}>
                    Makeup Habits That Will Change Your Life
                  </div>
                  <div className="description">
                    Sit amet porttitor eget dolor morbi non arcu risus.
                  </div>
                  <div className="read-more">
                    <a href="#">READ MORE</a>
                    <div className="comment">
                      <i className="fa fa-envelope">
                        <span style={{ marginLeft: "10px" }}>0</span>
                      </i>
                    </div>
                  </div>
                </div>

                <button className="category-btn">FASHION</button>
              </div>
            </div>
          </div>

          <h2 style={{ textAlign: "center" }}>
            3 Replies to “The Neutral Trend with a Blazer”
          </h2>

          <div className="comments-part">
            <div className="image">
              <img src="https://secure.gravatar.com/avatar/bff0d7066023be99da784fb9a8e8bcca?s=100&d=mm&r=g" />
            </div>
            <div className="comment-details">
              <span className="name">JOHN DOE</span>
              <span className="date">Jul 31, 2018 at 3:54 am</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium eius, sunt porro corporis maiores ea, voluptatibus
                omnis maxime
              </span>
            </div>
           
          </div>

          <div className="comment-box">
            <h3 className="">Leave a Replay</h3>
            <p>Your email address will not be published.</p>
            <div className="comment-form">
              <div className="textdesc">
                <textarea rows="10">Enter your text here...</textarea>
              </div>
              <div className="multiple-form">
                <div className="name-field">
                  <input type="text" placeholder="Name (required)" />
                </div>
                <div className="email-field">
                  <input type="text" placeholder="Name (required)" />
                </div>
                <div className="website-field">
                  <input type="text" placeholder="Name (required)" />
                </div>
              </div>
              <button className="btn">POST COMMENT</button>
            </div>
          </div>
        </div>

        <div className="left-sidebar">
          <div className="first-section">
            <div className="splitter"></div>
            <div className="title">ABOUT ME</div>
            <div className="image">
              <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/about.jpg" />
            </div>
            <div className="description">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache.
            </div>
            <div className="signature">
              <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/09/sign.png" />
            </div>
          </div>

          <div className="second-section">
            <div className="splitter"></div>
            <div className="title">Follow Me</div>
            <div className="social">
              <div className="social-list">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-youtube-play"></i>
                <i className="fa fa-google-plus"></i>
              </div>
            </div>
          </div>

          <div className="third-section">
            <div className="splitter"></div>
            <div className="title">LATEST POST</div>

            <div className="small-post">
              <div className="small-post-wrap">
                <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/img-01-new-150x150.jpg" />
                <div className="number">1</div>
              </div>

              <div className="post-title">
                <a href="#">MAKEUP PRIMERS FOR EVERYDAY WEAR</a>
                <div className="date">SEP 10, 2018</div>
              </div>
            </div>

            <div className="small-post">
              <div className="small-post-wrap">
                <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/img-01-new-150x150.jpg" />
                <div className="number">1</div>
              </div>

              <div className="post-title">
                <a href="#">MAKEUP PRIMERS FOR EVERYDAY WEAR</a>
                <div className="date">SEP 10, 2018</div>
              </div>
            </div>

            <div className="small-post">
              <div className="small-post-wrap">
                <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/img-01-new-150x150.jpg" />
                <div className="number">1</div>
              </div>

              <div className="post-title">
                <a href="#">MAKEUP PRIMERS FOR EVERYDAY WEAR</a>
                <div className="date">SEP 10, 2018</div>
              </div>
            </div>
          </div>

          <div className="fourth-section">
            <div className="splitter"></div>
            <div className="title">CATEGORIES</div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">Beauty</a>
                <div className="counter">6</div>
              </div>
            </div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">Fashion</a>
                <div className="counter">6</div>
              </div>
            </div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">LifeStyle</a>
                <div className="counter">6</div>
              </div>
            </div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">Makeup</a>
                <div className="counter">6</div>
              </div>
            </div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">Others</a>
                <div className="counter">6</div>
              </div>
            </div>

            <div className="category-item">
              <div className="cat-name">
                <a href="#">Travel</a>
                <div className="counter">6</div>
              </div>
            </div>
          </div>

          <div className="five-section">
            <div className="splitter"></div>
            <div className="title">TAGS CLOUD</div>
            <div className="tag-cloud-list">
              <a href="#">GLAMOURS</a>
              <a href="#">IDEAS</a>
              <a href="#">MALDIVES</a>
              <a href="#">PHOTO</a>
              <a href="#">SOCIAL</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
