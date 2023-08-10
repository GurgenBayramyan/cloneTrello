import Layout from "components/Layout/Layout"
import style from "./ErrorPage.module.scss"




const ErrorPage = ()=> {
  return (
    <Layout>
        <div className={style.error}>
            <h5>This board is not a fount</h5>
        </div>
    </Layout>
  )
}

export default ErrorPage