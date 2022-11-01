import React from "react";
//import TituloTabela from '../TituloTabela';
import Box from '@mui/material/Box';


interface LayoutProps {
    titulo?: string
    children: any
    className?: React.ElementType | any

}
function LayoutTabela(props: LayoutProps) {
    return (
        <Box className={` pt-4  w-screen  flex justify-center text-center`}
            sx={{
                maxWidth: 50 / 51,
                maxHeight: 7 / 8,
                // backgroundColor: 'primary.dark',
                mt: 1,
                ml: 2
            }} >
            <div>
                <span>{props.children}</span>
            </div>
        </Box>
    );
}

export default LayoutTabela;
