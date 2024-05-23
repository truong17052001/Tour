import classNames from "classnames/bind";
import styles from "./CardTour.module.scss";

const cx = classNames.bind(styles);
//icon
import { LuTicket } from "react-icons/lu";

function CardTour() {
  return (
    <div className={cx("item")}>
      <div className={cx("img")}>
        <img
          src="https://i.pinimg.com/736x/0d/6a/9e/0d6a9e63b220f854581dafae05c130be.jpg"
          placeholder="img"
        ></img>
        <div className={cx("summary")}>
          <div className={cx("rate")}>
            <span>9.4</span>
          </div>
          <div className={cx("review")}>
            <h3>Tuyệt vời</h3>
            <p>358 quan tâm</p>
          </div>
        </div>
      </div>
      <div className={cx("body")}>
        <p className={cx("date")}>24/05/2024 - 3 ngày</p>
        <p className={cx("title")}>
          <a href="/">
            Miền Tây: Châu Đốc - Núi Cấm - Rừng Tràm Trà Sư - Cần Thơ - Chợ Nổi
            Cái Răng - Trải Nghiệm Tuyến Cao Tốc Mới Nhất Của Miền Tây
          </a>
        </p>
        <div className={cx("code")}>
          <div>Mã tour:</div>
          <div>
            <LuTicket></LuTicket>NDSGN841-009-240524XE-H
          </div>
        </div>
        <p className={cx("departure")}>Nơi khởi hành: TP. Hồ Chí Minh</p>
        <div className={cx("price")}>
          Giá <del>2.990.000 ₫</del>
          <div>
            2.690.000 ₫<span>Giảm 6%</span>
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        Số chỗ còn <span>9</span>
      </div>
    </div>
  );
}

export default CardTour;