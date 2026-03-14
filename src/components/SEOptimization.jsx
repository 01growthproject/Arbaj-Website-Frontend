import { Helmet } from "react-helmet-async"
const SEOptimization:React.FC<{title: string}> = () => {
  return (
      <Helmet>
              <title>{title}</title>
              <meta 
              name="description"
              content={descriptoin}
              />
            </Helmet>
  )
}

export default SEOptimization
