import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/NavBar.module.css";
import SelectMenu from "./SelectMenu";

export default function NavBar() {
  const router = useRouter();
  
  const toLogin = () => {
    console.log("로그인 버튼 클릭");
  }

  const toSelectMenu = () => {
    console.log("메뉴 선택창으로 이동");
    const sb01 = document.getElementById("sb01");
    const sb02 = document.getElementById("sb02");
    sb01.style.display = "block";
    sb02.style.display = "none";
    console.log(router)
  }
  
  const toOrderStatus = () => {
    console.log("주문 현황으로 이동");
    const sb01 = document.getElementById("sb01");
    const sb02 = document.getElementById("sb02");
    sb01.style.display = "none";
    sb02.style.display = "block";
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.loginBtnPlace}>
          <button className={styles.toLogin} onClick={toLogin}>
            로그인
          </button>
        </div>
        <div className={styles.center}>
          <div className={styles.userImgPlace}></div>
        </div>
        <div className={styles.center}>
          <p className={styles.userName}>비회원</p>
        </div>
        <div className={styles.center}>
          <div className={styles.btnSelectMenuPlace}>
            <Link href="/">
              <button className={styles.btnSelectMenu} onClick={toSelectMenu}>메뉴 선택</button>
            </Link>
            <div id="sb01" className={router.pathname === "/" ? styles.selectBarBlock : styles.selectBarBlock}></div>
          </div>
          <div className={styles.orderStatusPlace}>
            <button className={styles.orderStatus} onClick={toOrderStatus}>주문 현황</button>
            <div id="sb02" className={styles.selectBarOS}></div>
          </div>
        </div>
      </nav>
    </>
  );
}
