// ** React Imports
'use client'
import { useEffect, useState, useCallback, ChangeEvent, MouseEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Icon from 'src/@core/components/icon'

// ** ThirdParty Components
// import axios from 'axios'

// ** Custom Components
// import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ServerSideToolbar from 'src/views/table/data-grid/toolbar/CategoryToolbar'

// ** Types Imports
// import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType } from 'src/@fake-db/types'

// ** Utils Import
// import { getInitials } from 'src/@core/utils/get-initials'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import { deleteUser } from 'src/store/apps/user'
import Link from 'next/link'
import categoryService from 'src/services/category/category.service'
import useSWR from 'swr'

type SortType = 'asc' | 'desc' | undefined | null

// ** renders client column

const renderImages = (params: GridRenderCellParams) => {
  const { row } = params
  console.log(row)

  return (
    <CustomAvatar
      src={row.image.includes('http') ? row.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${row.image}`}
      sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }}
    />
  )
}

const RowOptions = ({ id }: { id: number | string }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='tabler:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          href='/apps/user/view/account'
          onClick={handleRowOptionsClose}
        >
          <Icon icon='tabler:eye' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:edit' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:trash' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

// const statusObj: StatusObj = {
//   1: { title: 'current', color: 'primary' },
//   2: { title: 'professional', color: 'success' },
//   3: { title: 'rejected', color: 'error' },
//   4: { title: 'resigned', color: 'warning' },
//   5: { title: 'applied', color: 'info' }
// }

// const formatCategory = (categories: any) => {
//   return categories.map(() => {
//     return
//   })
// }

const columns: GridColDef[] = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Tên danh mục',
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.name}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.175,
    type: 'date',
    minWidth: 120,
    headerName: 'Hình ảnh',
    field: 'start_date',
    valueGetter: params => new Date(params.value),
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {renderImages(params)}
        </Typography>
      )
    }
  },

  {
    flex: 0.175,
    minWidth: 110,
    field: 'salary',
    headerName: 'Số sản phẩm',
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.productCount}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  // {
  //   flex: 0.125,
  //   field: 'age',
  //   minWidth: 80,
  //   headerName: '',
  //   renderCell: (params: GridRenderCellParams) => (
  //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
  //       {params.row.age}
  //     </Typography>
  //   )
  // },
  // {
  //   flex: 0.175,
  //   minWidth: 140,
  //   field: 'status',
  //   headerName: 'Trạng thái',
  //   renderCell: (params: GridRenderCellParams) => {
  //     const status = statusObj[params.row.status]

  //     return (
  //       <CustomChip
  //         rounded
  //         size='small'
  //         skin='light'
  //         color={status.color}
  //         label={status.title}
  //         sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
  //       />
  //     )
  //   }
  // },

  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Hành động',
    renderCell: (params: GridRenderCellParams) => {
      console.log(params)

      return <RowOptions id={params.row.id} />
    }
  }
]

const TableCategory = () => {
  // ** States
  const [sort, setSort] = useState<SortType>('asc')
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const { data: categories } = useSWR('GET_CATEGORY', categoryService.getAll)

  function loadServerRows(currentPage: number, data: DataGridRowType[]) {
    return data.slice(currentPage * paginationModel.pageSize, (currentPage + 1) * paginationModel.pageSize)
  }

  // const fetchTableData = useCallback(
  //   async (sort: SortType, q: string, column: string) => {
  //     await axios
  //       .get('/api/table/data', {
  //         params: {
  //           q,
  //           sort,
  //           column
  //         }
  //       })
  //       .then(res => {
  //         // setTotal(res.data.total)

  //         // setRows(loadServerRows(paginationModel.page, res.data.data))
  //       })
  //   },

  //   // eslint-disable-next-line react-hooks/exhaustive-deps

  //   [paginationModel]
  // )

  // useEffect(() => {
  //   // fetchTableData(sort, searchValue, sortColumn)
  // }, [ searchValue, sort, sortColumn])

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)

      // fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)

    // fetchTableData(sort, value, sortColumn)
  }

  return (
    <Card>
      <CardHeader title='Quản lý danh mục sản phẩm' />
      <DataGrid
        autoHeight
        pagination
        // rows={rows}

        rows={categories ? loadServerRows(paginationModel.page, categories) : []}
        rowCount={categories ? categories.length : 0}
        columns={columns}
        getRowId={(row: any) => row._id}
        checkboxSelection
        sortingMode='server'
        paginationMode='server'
        pageSizeOptions={[7, 10, 25, 50]}
        paginationModel={paginationModel}
        onSortModelChange={handleSortModel}
        slots={{ toolbar: ServerSideToolbar }}
        onPaginationModelChange={setPaginationModel}
        slotProps={{
          toolbar: {
            value: searchValue,
            clearSearch: () => handleSearch(''),
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
          },
          baseButton: {
            size: 'medium',
            variant: 'tonal'
          }
        }}
      />
    </Card>
  )
}

export default TableCategory
