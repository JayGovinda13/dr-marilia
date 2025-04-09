import React from 'react'
import { Box, Typography } from '@mui/material'

const Body2 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#E7E7E7',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Box>
                <Typography>Teste!</Typography>
            </Box>

            <Box>
                <Typography>Teste?</Typography>
            </Box>
        </Box>
    )
}

export default Body2
