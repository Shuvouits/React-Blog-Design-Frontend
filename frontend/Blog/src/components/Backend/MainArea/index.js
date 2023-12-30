import { Link } from "react-router-dom";
import "./style.css";

export default function MainArea() {
  return (
    <div className="admin-content">
      <div className="admin-content-wrapper">
        <div className="card-section">

          <div className="card-item post">
            <div className="item-wrapper">
              <span className="item-name">POSTS</span>

              <span className="icon">
                <i className="fa fa-comments" style={{color : '#4e73df'}}></i>
              </span>
            </div>

            <span className="item-counter">5</span>
          </div>

          <div className="card-item">
            <div className="item-wrapper">
              <span className="item-name">POSTS</span>

              <span className="icon">
                <i className="fa fa-comments"></i>
              </span>
            </div>

            <span className="item-counter">5</span>
          </div>

          <div className="card-item">
            <div className="item-wrapper">
              <span className="item-name">POSTS</span>

              <span className="icon">
                <i className="fa fa-comments"></i>
              </span>
            </div>

            <span className="item-counter">5</span>
          </div>

          <div className="card-item">
            <div className="item-wrapper">
              <span className="item-name">POSTS</span>

              <span className="icon">
                <i className="fa fa-comments"></i>
              </span>
            </div>

            <span className="item-counter">5</span>
          </div>

        </div>
      </div>
    </div>
  );
}
