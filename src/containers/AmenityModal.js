import { connect } from 'react-redux'
import { AmenityModal } from '../components/organisms/AmenityModal'

const mapStateToProps = (state) => {
  return{
    res : state.selectedRes,
    cafe: state.selectedCafe,
    conv: state.selectedConv,
    bank: state.selectedBank,
    atm: state.selectedATM,
  }
}

export default connect(mapStateToProps, null)(AmenityModal)
