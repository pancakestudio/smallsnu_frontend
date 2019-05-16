import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import http from 'axios/lib/adapters/http'
import axios from 'axios'

axios.default.adapter = http
configure({ adapter: new Adapter() })
