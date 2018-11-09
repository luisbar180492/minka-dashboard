export default function(props, state) {

  return {

    drawerButton: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      top: '47.5%',
      left: 0,
      boxShadow:'0px 0px 20px 10px #424242',
      backgroundColor: '#2AD2C9',
      height: 48,
      width: 24,
      borderBottomRightRadius: 48,
      borderTopRightRadius: 48,
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
    },
    drawerButtonExpanded: {
      left: `calc(${state.isSmartphone ? props.mobileDrawerWidth : props.drawerWidth} - 24px)`,
      borderBottomLeftRadius: 48,
      borderTopLeftRadius: 48,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    firstLine: {
      width: 9,
      height: 3,
      backgroundColor: '#ecf0f1',
      display: 'block',
      transition: 'all 0.3s ease-in-out',
      transform: 'translateY(-1px) rotate(45deg)',
      marginRight: 5,
    },
    firstLineInverted: {
      transitionDelay: '0.6s',
      transform: 'translateY(-3px) rotate(-45deg) translateX(-3px)',
      marginLeft: 10,
    },
    secondLine: {
      width: 9,
      height: 3,
      backgroundColor: '#ecf0f1',
      display: 'block',
      transition: 'all 0.3s ease-in-out',
      transform: 'translateY(1px) rotate(-45deg)',
      marginRight: 5,
    },
    secondLineInverted: {
      transitionDelay: '0.6s',
      transform: 'translateY(3px) rotate(45deg) translateX(-3px)',
      marginLeft: 10,
    },
  };
};
