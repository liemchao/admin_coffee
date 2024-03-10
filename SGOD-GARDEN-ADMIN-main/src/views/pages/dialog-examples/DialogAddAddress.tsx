// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// import FormControlLabel from '@mui/material/FormControlLabel'

import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
// import useBgColor from 'src/@core/hooks/useBgColor'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const DialogAddAddress = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)

  // const [addressType, setAddressType] = useState<'home' | 'office'>('home')

  // ** Hooks
  // const bgColors = useBgColor()

  return (
    <>
      <Button variant='contained' onClick={() => setShow(true)}>
        Tạo mới sản phẩm
      </Button>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Tạo mới sản phẩm
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Tạo một sản phẩm mới</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <CustomTextField fullWidth label='Tên sản phẩm' placeholder='Cà phê muối' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField type='file' fullWidth label='Ảnh' placeholder='image/c/d/f' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField type='number' fullWidth label='Giá cũ' placeholder='10,000' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField type='number' fullWidth label='Giá mới' placeholder='10,000' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField type='number' fullWidth label='Số lượng' placeholder='1' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                select
                fullWidth
                label='Category'
                placeholder='UK'
                id='country-select'
                defaultValue='Select Category'
              >
                <MenuItem value='Select Category'>Drink</MenuItem>
                <MenuItem value='France'>Coffee</MenuItem>
                <MenuItem value='Russia'>Break</MenuItem>
              </CustomTextField>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
                control={<Switch defaultChecked />}
                label='Sản phẩm được bán ngay'
              />
            </Grid> */}
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShow(false)}>
            Submit
          </Button>
          <Button variant='tonal' color='secondary' onClick={() => setShow(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogAddAddress
