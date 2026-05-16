import styles from './DashboardInfo.module.scss'
import data from '../../data/dashboardData'
import DetailsCard from '../dashboard/cards/detailsCard/DetailsCard'
import TechCard from '../dashboard/cards/techCard/TechCard'
import SimpleCard from '../dashboard/cards/simpleCard/SimpleCard'

const DashboardInfo = () => {
  return (
    <>
        {
            data.map(card=>{
                if(card.variant == 'details') {
                    return <DetailsCard  card={card}/>
                }
                if(card.variant == 'technologies') {
                    return <TechCard  card={card}/>
                }
                return <SimpleCard  card={card}/>
            })
        }
    </>
  )
}

export default DashboardInfo