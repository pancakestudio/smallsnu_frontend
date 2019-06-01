import { connect } from 'react-redux'
import { CafeModal } from '../components/organisms/CafeModal'

const mapStateToProps = (state) => {
  return{
    cafe : state.selectedCafe,
  }
}

export default connect(mapStateToProps, null)(CafeModal)
