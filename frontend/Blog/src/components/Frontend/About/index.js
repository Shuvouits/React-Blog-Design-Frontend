import "./style.css";

export default function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-wrapper">

          <div className="text">
            <div className="name">My name is Linda!</div>
            <div className="heading">LIFE EVENTS BLOG POSTS : )</div>
            <div className="description">
              Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet,
              consectetur, adipisci velit, Quuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </div>
            <div className="button">
              <button>READ MORE</button>
            </div>
          </div>

          <div className="image">
            <div className="recent-post">
              <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/09/about-01-new.jpg" />
              <button>RECENT POST</button>
            </div>
            <div className="instagram-post">
              <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/09/about-02.jpg" />
              <button>RECENT POST</button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
