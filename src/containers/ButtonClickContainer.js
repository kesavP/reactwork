import { connect } from 'react-redux'
import ButtonClick from '../components/Buttonclick'
import { onUserPageButtonAction } from '../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    // console.log("el,md;k;",state);
    return {
      appName: state.todos[0].name,
      buttonFamily : [
            {id:1,subscribed : false },
            {id:2,subscribed : false },
            {id:3,subscribed : false },
            {id:4,subscribed : false }
          ]
    }};

    const mapDispatchToProps = dispatch => ({
        btnClickActionUsersPage: bindActionCreators(onUserPageButtonAction, dispatch)
      })

export default connect(mapStateToProps, mapDispatchToProps)(ButtonClick)