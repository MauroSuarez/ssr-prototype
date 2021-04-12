export const dropConsole = ({type = 'warn', message, data}) => {
  try {
    if(!process.env.NEXT_PUBLIC_APP_DROP_CONSOLE && process.env.NODE_ENV !== 'development') return;
    console[type](message, data);
  }catch(e) {
    console.error(e.message);
  }  
}