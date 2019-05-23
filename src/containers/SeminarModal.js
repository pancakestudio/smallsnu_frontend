import { connect } from 'react-redux'
import { SeminarModal } from '../components/organisms/SeminarModal'

const mapStateToProps = (state) => {
  return {
    semi: state.selectedSemi,
  }
}

export default connect(mapStateToProps, null)(SeminarModal)
