import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import {services } from '../data'
import { ServiceCard } from '../src/components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'

const index = () => {
  return (
    <motion.div variants={routerAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">Apaixonado por tecnologia, sempre em busca de conhecimento!</h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem"}}>
        <h6 className="my-3 text-xl font-bold tracking-wider">O que eu ofereço</h6>
        <motion.div className="grid gap-6 my-3 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map((service) => {
              return (
                <motion.div variants={fadeInUp} key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                  <ServiceCard service={service}  />
                </motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

/* export const getServerSideProps = async (context:GetServerSidePropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')

  const data = await res.json()

  console.log('Server',services)

  return {
    props: {
      services: data.services
    }
  }
}  */

/* export const getStaticProps = async (context:GetStaticPropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')

  const data = await res.json()

  console.log('Server',services)

  return {
    props: {
      services: data.services
    }
  }
} */

