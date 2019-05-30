import { connect } from 'react-redux'
import { ATMModal } from '../components/organisms/ATMModal'

const mapStateToProps = (state) => {
  return{
    atm : state.selectedATM,
  }
}

export default connect(mapStateToProps, null)(ATMModal)
