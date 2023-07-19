import Image from "next/image"
import styles from "./page.module.css"
import RenderLineChart from "./components/axisTest"
import TreeMap from "./components/treeMap"
import MyResponsiveTreeMap from "./components/nivoTest"
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <RenderLineChart />
        <TreeMap />
        <div style={{ height: "600px", width: "800px" }}>
          <MyResponsiveTreeMap />
        </div>
      </div>
    </main>
  )
}
