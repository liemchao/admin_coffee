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
import productService from 'src/services/product/product.service'
import { FormControlLabel, MenuItem, Switch } from '@mui/material'

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

const initialProductState = {
  name: '',
  images: null,
  quantityInStock: 0,
  price_original: 0,
  price_new: 0,
  quantity: 0,
  categoryName: 0,
  prices: [
    {
      size: '',
      original_price: 0,
      new_price: 0
    }
  ],
  isPublished: true
}

const DialogAddProduct = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)

  const [product, setProducts] = useState(initialProductState)

  const handleCategoryChange = (event: any) => {
    setProducts({
      ...product,
      categoryName: event.target.value
    })
  }

  const handlePublishedChange = (event: any) => {
    setProducts({
      ...product,
      isPublished: event.target.checked
    })
  }

  const handleSizeChange = (index: any, value: any) => {
    const updatedPrices = [...product.prices]
    updatedPrices[index].size = value
    setProducts({ ...product, prices: updatedPrices })
  }

  const handleOriginalPriceChange = (index: number, value: number) => {
    const updatedPrices = [...product.prices]
    updatedPrices[index] = {
      ...updatedPrices[index],
      original_price: value
    }
    setProducts({ ...product, prices: updatedPrices })
  }

  const handleNewPriceChange = (index: number, value: number) => {
    const updatedPrices = [...product.prices]
    updatedPrices[index] = {
      ...updatedPrices[index],
      new_price: value
    }
    setProducts({ ...product, prices: updatedPrices })
  }

  const handleAddSize = () => {
    const updatedPrices = [...product.prices]
    updatedPrices.push({ size: '', original_price: 0, new_price: 0 })
    setProducts({ ...product, prices: updatedPrices })
  }

  const createProduct = (formData: any) => {
    productService
      .createProduct(formData)
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
              Tạo một danh mục mới
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Tạo một danh mục mới cho menu</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <CustomTextField
                value={product.name}
                onChange={e => {
                  setProducts({
                    ...product,
                    name: e.target.value
                  })
                }}
                fullWidth
                label='Tên sản phẩm'
                placeholder='Cà phê muối'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                type='file'
                // value={category.image}

                onChange={e => {
                  setProducts({
                    ...product,
                    images: e.target.files[0]
                  })
                }}
                fullWidth
                label='Ảnh'
                placeholder='image/c/d/f'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={product.quantityInStock}
                onChange={e => {
                  setProducts({
                    ...product,
                    quantityInStock: parseInt(e.target.value)
                  })
                }}
                fullWidth
                label='Số lượng tồn kho'
                placeholder='Cà phê muối'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={product.price_original}
                onChange={e => {
                  setProducts({
                    ...product,
                    price_original: parseInt(e.target.value)
                  })
                }}
                fullWidth
                label='Giá cũ'
                placeholder='Cà phê muối'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={product.price_new}
                onChange={e => {
                  setProducts({
                    ...product,
                    price_new: parseInt(e.target.value)
                  })
                }}
                fullWidth
                label='Giá mới'
                placeholder='Cà phê muối'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={product.quantity}
                onChange={e => {
                  setProducts({
                    ...product,
                    quantity: parseInt(e.target.value)
                  })
                }}
                fullWidth
                label='Số lượng'
                placeholder='Cà phê muối'
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextField
                select
                fullWidth
                label='Category'
                placeholder='UK'
                id='country-select'
                defaultValue='Select Category'
                value={product.categoryName} // Set the selected value
                onChange={handleCategoryChange} // Handle value change
              >
                <MenuItem value='Select Category'></MenuItem>
                <MenuItem value='Tea'>Tea</MenuItem>
                <MenuItem value='Coffe'>Coffe</MenuItem>
              </CustomTextField>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
                control={
                  <Switch
                    checked={product.isPublished} // Set the switch state
                    onChange={handlePublishedChange} // Handle switch state change
                  />
                }
                label='Sản phẩm được bán ngay'
              />
            </Grid>
            <Grid item xs={12}>
              {product.prices.map((price, index) => (
                <div key={index}>
                  <Grid item xs={3.3}>
                    <CustomTextField
                      value={price.size}
                      onChange={e => handleSizeChange(index, e.target.value)}
                      fullWidth
                      label='Kích thước'
                      placeholder='Cà phê muối'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTextField
                      value={price.original_price}
                      onChange={e => handleOriginalPriceChange(index, parseInt(e.target.value))}
                      label='Giá gốc'
                      placeholder='120'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTextField
                      value={price.new_price}
                      onChange={e => handleNewPriceChange(index, parseInt(e.target.value))}
                      label='Giá mới'
                      placeholder='110'
                    />
                  </Grid>
                </div>
              ))}
              <Grid item xs={12} mt={1}>
                <Button variant='contained' onClick={handleAddSize}>
                  Thêm size
                </Button>
              </Grid>
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
              if (product.name && product.images) {
                const formData = new FormData()
                formData.append('name', product.name)
                formData.append('images', product.images)
                formData.append('price_original', product.price_original.toString())
                formData.append('price_new', product.price_new.toString())
                formData.append('isPublished', product.isPublished.toString())
                formData.append('quantityInStock', product.quantityInStock.toString())
                formData.append('quantity', product.quantity.toString())
                formData.append('prices', product.prices)
                formData.append('categoryName', product.categoryName.toString())
                createProduct(formData)
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

export default DialogAddProduct
