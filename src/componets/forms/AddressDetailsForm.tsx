import { Grid } from '@mui/material'
import React from 'react'
import { CustomTextField } from '../CustomTextField'

export const AddressDetailsForm = () => {
  return (
    <div>
        <Grid container>
            <Grid item>
                    <CustomTextField name="address" label='address'/>
            </Grid>
        </Grid>
    </div>
  )
}
