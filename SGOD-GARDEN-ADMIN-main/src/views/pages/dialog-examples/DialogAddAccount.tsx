// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
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
import categoryService from 'src/services/category/category.service'

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

const DialogAddAccount = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [category, setCategory] = useState({
    name: '',
    image: null
  })

  const createCatgory = (formData: any) => {
    categoryService
      .createCategory(formData)
      .then(data => {
        if (data) {
          alert('Success!')
        }
      })
      .catch(error => {
        alert(error.message)
        console.log(error)
      })
  }

  return (
    <>
      <Button variant='contained' onClick={() => setShow(true)}>
        Tạo mới tài khoản
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
              Tạo một danh mục mới
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Tạo một danh mục mới cho menu</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <CustomTextField
                value={category.name}
                onChange={e => {
                  setCategory({
                    ...category,
                    name: e.target.value
                  })
                }}
                fullWidth
                label='Tên danh mục'
                placeholder='Cà phê muối'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                type='file'
                // value={category.image}

                onChange={e => {
                  setCategory({
                    ...category,
                    image: e.target.files[0]
                  })
                }}
                fullWidth
                label='Ảnh'
                placeholder='image/c/d/f'
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            sx={{ mr: 1 }}
            onClick={() => {
              if (category.name && category.image) {
                const formData = new FormData()
                formData.append('name', category.name)
                formData.append('image', category.image)
                createCatgory(formData)
                setShow(false)
              }
            }}
          >
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

export default DialogAddAccount
