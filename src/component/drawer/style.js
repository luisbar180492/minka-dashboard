export default function(props, state) {

  return {

    drawerContainer: {
      position: 'fixed',
      height: '100vh',
      width: state.visible ? '100%' : 0,
      left: -1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    drawerContent: {
      position: 'relative',
      height: '100vh',
      width: state.visible && state.isSmartphone ? props.mobileDrawerWidth : state.visible && !state.isSmartphone ? props.drawerWidth : 1,
      boxShadow:'0px 0px 20px 10px #424242',
      transition: '0.3s',
      overflow: 'hidden',
    }
  };
};
