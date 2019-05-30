import { connect } from 'react-redux'
import { BankModal } from '../components/organisms/BankModal'

const mapStateToProps = (state) => {
  return{
    bank : state.selectedBank,
  }
}

export default connect(mapStateToProps, null)(BankModal)
