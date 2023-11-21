import { styled } from '@mui/material/styles';

const BackgroundDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
      minWidth: '100%',
      overflow: 'hidden',
      transform: 'translate(-50%,0)',
      marginLeft: '50%',
      padding: 0,
      maxHeight: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      overflow: 'hidden',
  
      padding: 0,
    }
}));
  
  
const BackgroundTextDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
      textAlign: "left",
      width: "80%",
      color: "white",
      position: "absolute",
      background: "transparent",
      alignContent: "center",
      alignItems: "center",
      zIndex: 2,
      transform: "translate(-40%, -40%)",
      left: "40%",
      top: "40%"
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
      color: "white",
      width: "70%",
      position: "absolute",
      background: "transparent",
      alignContent: "center",
      alignItems: "center",
      zIndex: 2,
      transform: "translate(-50%, -50%)",
      left: "60%",
      top: "50%"
    }
}));
  
const BackgroundTextHead = styled('p')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: 0,
      padding: 0,
      paddingBottom: "10px"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "40px",
      fontWeight: "bold",
      margin: 0,
      padding: 0,
  
    }
}));
  
const BackgroundTextExplanation = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
      fontSize: "13px",
      margin: 0,
      padding: 0,
      paddingBottom: "20px"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "15px",
      margin: 0,
      padding: 0,
      marginLeft: '2px',
      paddingBottom: "20px",
      width: '80%'
    }
}));

const AboutUsHead = styled('p')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
        marginBottom: '20px', marginTop: '0px', fontSize:'25px', fontWeight:'Bold', paddingTop:'0px'
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '20px', marginTop: '40px', fontSize:'25px', fontWeight:'Bold'
    }
}));

export{
    BackgroundDiv,
    BackgroundTextDiv,
    BackgroundTextHead,
    BackgroundTextExplanation,
    AboutUsHead
}