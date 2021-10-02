import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";


const TemplateContext=createContext(null);

export const TemplateProvider=({children})=>{
   const theme=createMuiTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                maxWidth: 'unset'
            }
        },
        MuiDialogContent: {
            root: {
                padding: 0,
                '&:first-child': {
                    paddingTop: 0
                }
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: 0
            }
        },
        

   }});
  return(
   <TemplateContext.Provider>
       <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
           { 
              children
           }

       </ThemeProvider>
   </TemplateContext.Provider>
  )
}
export default TemplateProvider;