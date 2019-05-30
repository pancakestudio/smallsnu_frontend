import { connect } from 'react-redux'
import { ConvModal } from '../components/organisms/ConvModal'

const mapStateToProps = (state) => {
  return{
    conv : state.selectedConv,
  }
}

export default connect(mapStateToProps, null)(ConvModal)
